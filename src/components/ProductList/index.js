import React, { useState, useContext } from "react";
import "./index.css";
import { ProductCard } from "../../components";
import { FilterContext } from "../../contexts/FilterContext";
import { SORT_FIELDS } from "../../constants";

export default function ProductsList() {
  const { filteredProducts, searchFilter, modifySearchFilters } =
    useContext(FilterContext);
  const [sortField, setSortField] = useState(searchFilter["sortField"]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSortField = (val) => {
    modifySearchFilters("sortField", val);
    setSortField(val);
    setDropdownOpen(false);
  };

  return (
    <div className="div__productsList-container">
      <div className="div__productsList-header">
        <h2>New Arrivals</h2>
        <div className="div__productsList-sortOptions">
          <h4 onClick={() => setDropdownOpen(!dropdownOpen)}>
            {`Sort By ${
              SORT_FIELDS.find(({ value }) => value === sortField).label
            }`}
          </h4>
          {dropdownOpen && (
            <div className="sortOptions">
              {SORT_FIELDS.map(({ label, value }) => (
                <p key={value} onClick={() => handleSortField(value)}>
                  {label}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="div__productsList">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} productData={product} />
          ))
        ) : (
          <h1 className="noProducts">No Products found!!</h1>
        )}
      </div>
    </div>
  );
}
