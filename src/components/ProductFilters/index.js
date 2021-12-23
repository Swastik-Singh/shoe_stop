import React, { useState, useContext } from "react";
import "./index.css";
import { CATGEORY_FILTERS, SIZE_RANGE } from "../../constants";
import { FilterContext } from "../../contexts/FilterContext";
import { MultiRangeSlider } from "../../components";

export default function ProductFilters() {
  const { modifySearchFilters } = useContext(FilterContext);
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [sizesSelected, setSizesSelected] = useState([]);

  const modifyList = (originalList, inputVal) => {
    if (originalList.includes(inputVal)) {
      return originalList.filter((val) => val !== inputVal);
    } else {
      return [...originalList, inputVal];
    }
  };

  const handleCategoryChange = (inputVal) => {
    setCategoriesSelected((prevList) => {
      const newList = modifyList(prevList, inputVal);
      modifySearchFilters("category", newList);
      return newList;
    });
  };

  const handlePriceChange = (rangeVal) =>
    modifySearchFilters("price", [rangeVal.min, rangeVal.max]);

  const handleSizeChange = (inputVal) => {
    setSizesSelected((prevList) => {
      const newList = modifyList(prevList, inputVal);
      modifySearchFilters("size", newList);
      return newList;
    });
  };

  const generateSizeRangeList = (startIndex, endIndex) => {
    const sizeArray = [];
    for (let iter = startIndex; iter <= endIndex; iter++) {
      sizeArray.push(iter);
    }
    return sizeArray.map((size) => (
      <p
        key={size}
        className={`sizeFilter ${
          sizesSelected.includes(size) && "sizeFilterSelected"
        }`}
        onClick={() => handleSizeChange(size)}
      >
        {size}
      </p>
    ));
  };

  return (
    <div className="div__productFilters-container">
      <div className="div__productFilters-header"></div>
      <div className="div__productFilters-categories">
        <div className="div__filterLabel">
          <h3>Categories</h3>
        </div>
        {CATGEORY_FILTERS.map((category) => (
          <div key={category} className="div_chkCategory">
            <input
              type="checkbox"
              checked={categoriesSelected.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="chkCategory"
              value={category}
            />
            <p className="lblCategory">{category}</p>
          </div>
        ))}
      </div>
      <div className="div__productFilters-price">
        <div className="div__filterLabel">
          <h3>Price</h3>
        </div>
        <MultiRangeSlider
          min={100}
          max={1000}
          onChange={(rangeVal) => handlePriceChange(rangeVal)}
        />
      </div>
      <div className="div__productFilters-sizes">
        <div className="div__filterLabel">
          <h3>Size</h3>
        </div>
        <div className="div__productFilters-sizeInputs">
          {generateSizeRangeList(SIZE_RANGE[0], SIZE_RANGE[1])}
        </div>
      </div>
    </div>
  );
}
