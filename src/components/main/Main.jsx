import React from "react";
import FilterArrea from "./filterArrea/FilterArrea";

import { useSelector } from "react-redux";
import { selectAppTheme } from "../../store/appTheme/appThemeSelectors";

import { defineMode } from "../helperMethods";

import "./Main.css";

export default function Main() {
  const appTheme = useSelector(selectAppTheme);

  return (
    <main className={`main ${defineMode(appTheme, "main--dark")}`}>
      <FilterArrea />
    </main>
  );
}
