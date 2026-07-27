// Module ID: 14901
// Function ID: 113686
// Name: HomeDrawerFavoritesRowExpandedChildren
// Dependencies: [31, 33, 14894, 4127, 1212, 2]
// Exports: HomeDrawerFavoritesRowExpandedChildren

// Module 14901 (HomeDrawerFavoritesRowExpandedChildren)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("HomeDrawerSharedItem").fileFinishedImporting("modules/home_drawer/native/HomeDrawerFavoritesRow.tsx");

export const HomeDrawerFavoritesRowExpandedChildren = function HomeDrawerFavoritesRowExpandedChildren() {
  let obj = {};
  obj = { variant: "text-md/medium", color: "text-default", lineClamp: 1 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.wMWyci);
  obj.title = jsx(require(4127) /* Text */.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1 });
  obj.subtitle = null;
  return jsx(require(14894) /* HomeDrawerSharedItem */.HomeDrawerSharedItem, { variant: "text-md/medium", color: "text-default", lineClamp: 1 });
};
