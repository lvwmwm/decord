// Module ID: 4146
// Function ID: 4147
// Name: View
// Dependencies: [19, 21, 1634, 4147, 4148, 2]

// Module 4146 (View)
import { jsx } from "jsxProd";
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG";
import isFabric from "isFabric";
import importDefaultResult from "cancelAnimation";

let View = require("noop").forwardRef((entering, ref) => {
  const obj = {};
  const merged = Object.assign(entering);
  obj.hasEnteringAnimation = null != entering.entering;
  obj.ref = ref;
  return <__INTERNAL_VIEW_CONFIG />;
});
View.displayName = "REAWorkaroundView";
if (!isFabric.isFabric()) {
  View = require("cancelAnimation").View;
}
const result = require("cancelAnimation").fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default View;
