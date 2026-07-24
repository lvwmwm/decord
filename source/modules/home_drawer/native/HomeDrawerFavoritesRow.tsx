// Module ID: 14889
// Function ID: 113553
// Name: HomeDrawerFavoritesRowExpandedChildren
// Dependencies: [31, 33, 14882, 4126, 1212, 2]
// Exports: HomeDrawerFavoritesRowExpandedChildren

// Module 14889 (HomeDrawerFavoritesRowExpandedChildren)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("HomeDrawerSharedItem").fileFinishedImporting("modules/home_drawer/native/HomeDrawerFavoritesRow.tsx");

export const HomeDrawerFavoritesRowExpandedChildren = function HomeDrawerFavoritesRowExpandedChildren() {
  let obj = {};
  obj = { variant: "text-md/medium", color: "text-default", lineClamp: 1 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.wMWyci);
  obj.title = jsx(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1 });
  obj.subtitle = null;
  return jsx(require(14882) /* HomeDrawerSharedItem */.HomeDrawerSharedItem, { variant: "text-md/medium", color: "text-default", lineClamp: 1 });
};
