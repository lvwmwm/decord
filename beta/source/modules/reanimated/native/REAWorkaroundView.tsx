// Module ID: 4530
// Function ID: 4531
// Name: REAWorkaroundView
// Dependencies: [19, 21, 1641, 4531, 558, 568, 2]

// Module 4530 (REAWorkaroundView)
import _mod19 from "module_19" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 568 */;
import ReanimatedViewNativeComponentDefault from "ReanimatedViewNativeComponent" /* 4531 */;
import cancelAnimation from "cancelAnimation" /* 1641 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const ReanimatedViewNativeComponent = cancelAnimation.createAnimatedComponent(ReanimatedViewNativeComponentDefault);
const forwardRefResult = _mod19.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((entering, ref) => {
  const cResult = c.c(4);
  if (cResult[0] === null != entering.entering) {
    if (cResult[1] === entering) {
      if (cResult[2] === ref) {
        let tmp3 = cResult[3];
      }
      return tmp3;
    }
  }
  const obj2 = {};
  const merged = Object.assign(entering);
  obj2.hasEnteringAnimation = null != entering.entering;
  obj2.ref = ref;
  const tmp5 = <ReanimatedViewNativeComponent />;
  cResult[0] = null != entering.entering;
  cResult[1] = entering;
  cResult[2] = ref;
  cResult[3] = tmp5;
  tmp3 = tmp5;
}) : ((entering, ref) => {
  const obj = {};
  const merged = Object.assign(entering);
  obj.hasEnteringAnimation = null != entering.entering;
  obj.ref = ref;
  return <ReanimatedViewNativeComponent />;
}));
forwardRefResult.displayName = "REAWorkaroundView";
const result = size.fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default forwardRefResult;
