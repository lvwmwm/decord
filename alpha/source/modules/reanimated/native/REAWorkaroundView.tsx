// Module ID: 4812
// Function ID: 4813
// Name: REAWorkaroundView
// Dependencies: [109, 21, 1656, 4813, 558, 576, 2]

// Module 4812 (REAWorkaroundView)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import ReanimatedViewNativeComponentDefault from "ReanimatedViewNativeComponent" /* 4813 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import cancelAnimation from "module_1656" /* 1656 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["ref"];
const jsx = Fragment.jsx;
const ReanimatedViewNativeComponent = cancelAnimation.createAnimatedComponent(ReanimatedViewNativeComponentDefault);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ComponentWrapper(ref) {
  let tmp2;
  let tmp3;
  const obj = react;
  const cResult = obj.c(7);
  if (cResult[0] !== ref) {
    const tmp6 = _objectWithoutProperties(ref, closure_2);
    cResult[0] = ref;
    cResult[1] = tmp6;
    cResult[2] = ref.ref;
    tmp3 = ref;
    tmp2 = tmp6;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  if (cResult[3] === null != tmp2.entering) {
    if (cResult[4] === tmp2) {
      let tmp8;
      if (cResult[5] === tmp3) {
        tmp8 = cResult[6];
      }
      return tmp8;
    }
  }
  const merged = Object.assign(tmp2);
  const tmp10 = <ReanimatedViewNativeComponent hasEnteringAnimation={null != tmp2.entering} ref={tmp3} />;
  cResult[3] = null != tmp2.entering;
  cResult[4] = tmp2;
  cResult[5] = tmp3;
  cResult[6] = tmp10;
  tmp8 = tmp10;
}) : (function ComponentWrapper(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const tmp2 = null != merged.entering;
  const merged1 = Object.assign(merged);
  return <ReanimatedViewNativeComponent hasEnteringAnimation={tmp2} ref={ref} />;
});
tmp2.displayName = "REAWorkaroundView";
const result = size.fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default tmp2;
