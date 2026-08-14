// Module ID: 15566
// Function ID: 15567
// Name: HomeDrawerAddServerRowExpandedChildren
// Dependencies: [19, 21, 15519, 4338, 1236, 2]
// Exports: HomeDrawerAddServerRowExpandedChildren

// Module 15566 (HomeDrawerAddServerRowExpandedChildren)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("HomeDrawerSharedItem").fileFinishedImporting("modules/home_drawer/native/HomeDrawerAddServerRow.tsx");

export const HomeDrawerAddServerRowExpandedChildren = function HomeDrawerAddServerRowExpandedChildren() {
  let obj = { title: null, subtitle: null };
  obj = { variant: "text-md/medium", color: "text-default", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.l5WIbf);
  obj[0] = jsx(require(4338) /* Text */.Text, { variant: "text-md/medium", color: "text-default", children: null });
  return jsx(require(15519) /* HomeDrawerSharedItem */.HomeDrawerSharedItem, { variant: "text-md/medium", color: "text-default", children: null });
};
