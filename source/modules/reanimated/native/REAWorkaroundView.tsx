// Module ID: 4116
// Function ID: 4117
// Name: REAWorkaroundView
// Dependencies: [19, 21, 1654, 4117, 2]

// Module 4116 (REAWorkaroundView)
import { jsx } from "jsxProd";
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG";
import importDefaultResult from "cancelAnimation";

const forwardRefResult = require("noop").forwardRef((entering, ref) => {
  const obj = {};
  const merged = Object.assign(entering);
  obj.hasEnteringAnimation = null != entering.entering;
  obj.ref = ref;
  return <__INTERNAL_VIEW_CONFIG />;
});
forwardRefResult.displayName = "REAWorkaroundView";
const result = require("cancelAnimation").fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default forwardRefResult;
