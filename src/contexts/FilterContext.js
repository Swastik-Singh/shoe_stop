import React, { useState, createContext } from "react";
import { PRODUCTS_DATA } from "../constants";

export const FilterContext = createContext({
  sortField: "size",
});

const FilterContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    sortField: "size",
  });
  const [filteredProducts, setFilteredProducts] = useState([...PRODUCTS_DATA]);

  const modifySearchFilters = (key, value) => {
    setSearchFilter((prevFilters) => {
      prevFilters[key] = value;
      if (!prevFilters[key].length) {
        delete prevFilters[key];
      }
      modifyFilteredProducts(prevFilters);
      return prevFilters;
    });
  };

  const modifyFilteredProducts = (filterObj) => {
    let productsFiltered = PRODUCTS_DATA;
    if (filterObj.hasOwnProperty("size")) {
      productsFiltered = productsFiltered.filter((product) =>
        filterObj["size"].includes(product.size)
      );
    }
    if (filterObj.hasOwnProperty("category")) {
      productsFiltered = productsFiltered.filter((product) =>
        filterObj["category"].includes(product.category)
      );
    }
    if (filterObj.hasOwnProperty("price")) {
      const [minVal, maxVal] = filterObj["price"];
      productsFiltered = productsFiltered.filter(
        (product) => product.price >= minVal && product.price <= maxVal
      );
    }
    if (
      filterObj["sortField"] === "price" ||
      filterObj["sortField"] === "size"
    ) {
      productsFiltered = productsFiltered.sort(
        (a, b) => a[filterObj["sortField"]] - b[filterObj["sortField"]]
      );
    } else {
      productsFiltered = productsFiltered.sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    }
    setFilteredProducts(productsFiltered);
  };

  return (
    <FilterContext.Provider
      value={{
        searchFilter,
        filteredProducts,
        modifySearchFilters: modifySearchFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
