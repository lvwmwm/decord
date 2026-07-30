// Module ID: 14965
// Function ID: 14966
// Name: HomeDrawerFavoritesRowExpandedChildren
// Dependencies: [19, 21, 14958, 4185, 1236, 2]
// Exports: HomeDrawerFavoritesRowExpandedChildren

// Module 14965 (HomeDrawerFavoritesRowExpandedChildren)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("HomeDrawerSharedItem").fileFinishedImporting("modules/home_drawer/native/HomeDrawerFavoritesRow.tsx");

export const HomeDrawerFavoritesRowExpandedChildren = function HomeDrawerFavoritesRowExpandedChildren() {
  let obj = { title: null, subtitle: null };
  obj = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t.wMWyci);
  obj[0] = jsx(require(4185) /* Text */.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null });
  return jsx(require(14958) /* HomeDrawerSharedItem */.HomeDrawerSharedItem, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null });
};
