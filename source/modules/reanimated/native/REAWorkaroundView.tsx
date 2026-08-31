// Module ID: 4188
// Function ID: 4189
// Name: REAWorkaroundView
// Dependencies: [19, 21, 1653, 4189, 2]

// Module 4188 (REAWorkaroundView)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 4189 */;
import importDefaultResult from "cancelAnimation" /* 1653 */;

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
