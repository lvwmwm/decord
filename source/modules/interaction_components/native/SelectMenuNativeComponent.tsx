// Module ID: 14731
// Function ID: 112269
// Name: SelectMenuNativeComponent
// Dependencies: [31, 27, 33, 3994, 14732, 2]
// Exports: default

// Module 14731 (SelectMenuNativeComponent)
import "result";
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
  obj["style"] = { width: "100%" };
  return <closure_1 />;
};
