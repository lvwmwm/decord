// Module ID: 15554
// Function ID: 15555
// Name: SelectMenuNativeComponent
// Dependencies: [19, 21, 15555, 2]
// Exports: default

// Module 15554 (SelectMenuNativeComponent)
import noopAll from "noop" /* 19 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 15555 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const result = require("set").fileFinishedImporting("modules/interaction_components/native/SelectMenuNativeComponent.tsx");

export default function SelectMenuNativeComponent(model) {
  const merged = Object.assign(model, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.model = JSON.stringify(model.model);
  obj.style = { width: "100%" };
  return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
};
