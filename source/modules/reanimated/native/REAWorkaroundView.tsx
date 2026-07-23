// Module ID: 3992
// Function ID: 33121
// Name: View
// Dependencies: [31, 33, 1582, 3993, 3994, 2]

// Module 3992 (View)
import { jsx } from "jsxProd";
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG";
import isFabric from "isFabric";
import importDefaultResult from "cancelAnimation";

let View = require("result").forwardRef((entering) => {
  const obj = {};
  const merged = Object.assign(entering);
  obj["hasEnteringAnimation"] = null != entering.entering;
  obj["ref"] = arg1;
  return <__INTERNAL_VIEW_CONFIG />;
});
View.displayName = "REAWorkaroundView";
if (!isFabric.isFabric()) {
  View = require("cancelAnimation").View;
}
const result = require("cancelAnimation").fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default View;
