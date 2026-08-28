// Module ID: 4187
// Function ID: 4188
// Name: REAWorkaroundView
// Dependencies: [19, 21, 1654, 4188, 2]

// Module 4187 (REAWorkaroundView)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 4188 */;
import importDefaultResult from "cancelAnimation" /* 1654 */;

const jsx = jsxProd.jsx;
let closure_1 = importDefaultResult.createAnimatedComponent(__INTERNAL_VIEW_CONFIGDefault);
const forwardRefResult = noop.forwardRef((entering, ref) => {
  const obj = {};
  const merged = Object.assign(entering);
  obj.hasEnteringAnimation = null != entering.entering;
  obj.ref = ref;
  return <closure_1 />;
});
forwardRefResult.displayName = "REAWorkaroundView";
const result = set.fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default forwardRefResult;
