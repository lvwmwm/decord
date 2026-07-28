// Module ID: 14985
// Function ID: 114092
// Name: HomeDrawerAddServerRowExpandedChildren
// Dependencies: [31, 33, 14938, 4161, 1212, 2]
// Exports: HomeDrawerAddServerRowExpandedChildren

// Module 14985 (HomeDrawerAddServerRowExpandedChildren)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("HomeDrawerSharedItem").fileFinishedImporting("modules/home_drawer/native/HomeDrawerAddServerRow.tsx");

export const HomeDrawerAddServerRowExpandedChildren = function HomeDrawerAddServerRowExpandedChildren() {
  let obj = {};
  obj = { variant: "text-md/medium", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.l5WIbf);
  obj.title = jsx(require(4161) /* Text */.Text, { variant: "text-md/medium", color: "text-default" });
  obj.subtitle = null;
  return jsx(require(14938) /* HomeDrawerSharedItem */.HomeDrawerSharedItem, { variant: "text-md/medium", color: "text-default" });
};
