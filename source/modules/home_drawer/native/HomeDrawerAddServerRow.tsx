// Module ID: 15547
// Function ID: 15548
// Name: HomeDrawerAddServerRowExpandedChildren
// Dependencies: [19, 21, 15501, 4340, 1236, 2]
// Exports: HomeDrawerAddServerRowExpandedChildren

// Module 15547 (HomeDrawerAddServerRowExpandedChildren)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("HomeDrawerSharedItem").fileFinishedImporting("modules/home_drawer/native/HomeDrawerAddServerRow.tsx");

export const HomeDrawerAddServerRowExpandedChildren = function HomeDrawerAddServerRowExpandedChildren() {
  let obj = { title: null, subtitle: null };
  obj = { variant: "text-md/medium", color: "text-default", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.l5WIbf);
  obj[0] = jsx(require(4340) /* Text */.Text, { variant: "text-md/medium", color: "text-default", children: null });
  return jsx(require(15501) /* HomeDrawerSharedItem */.HomeDrawerSharedItem, { variant: "text-md/medium", color: "text-default", children: null });
};
