import React, { useState } from "react";

import "./RegionSelector.css";

import { useSelector, useDispatch } from "react-redux";

import { selectAppTheme } from "../../../../store/appTheme/appThemeSelectors";
import { selectFilter } from "../../../../store/filter/filterSelectors";
import {
  FILTER_CLEARED,
  FILTER_MODIFIED
} from "../../../../store/filter/filterConstant";

import { defineMode } from "../../../helperMethods";

import expand from "../../../../assets/expand.svg";
import collapse from "../../../../assets/collapse.svg";

export default function RegionSelector() {
  const appTheme = useSelector(selectAppTheme);

  const [filtersState, setFiltersState] = useState("expand");

  const filterValue = useSelector(selectFilter);

  function clickHandler() {
    setFiltersState((prevState) => {
      return prevState === "expand" ? "collapse" : "expand";
    });
  }

  return (
    <span
      className={`region-selector ${defineMode(
        appTheme,
        "region-selector--dark"
      )}`}
    >
      <p className="region-selector__text">
        {filterValue}
        <button className="region-selector__text__btn">X</button>
      </p>

      <img
        src={filtersState === "expand" ? expand : collapse}
        onClick={clickHandler}
        alt={`${filtersState.toLowerCase()} icon.`}
        className="region-selector__icon"
      />
    </span>
  );
}
