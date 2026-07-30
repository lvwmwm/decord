// Module ID: 14806
// Function ID: 14807
// Name: SelectMenuNativeComponent
// Dependencies: [19, 17, 21, 4053, 14807, 2]
// Exports: default

// Module 14806 (SelectMenuNativeComponent)
import "noop";
import { jsx } from "jsxProd";
import isFabric from "isFabric";

if (isFabric.isFabric()) {
  let importDefaultResult = require("__INTERNAL_VIEW_CONFIG");
} else {
  importDefaultResult = require("get ActivityIndicator").requireNativeComponent("DCDSelectActionComponentView");
}
const result = require("jsxProd").fileFinishedImporting("modules/interaction_components/native/SelectMenuNativeComponent.tsx");

export default function SelectMenuNativeComponent(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.style = { width: "100%" };
  return <closure_1 />;
};
