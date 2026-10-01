// Module ID: 4567
// Function ID: 4568
// Name: REAWorkaroundView
// Dependencies: [19, 21, 1638, 4568, 2]

// Module 4567 (REAWorkaroundView)
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedViewNativeComponentDefault from "ReanimatedViewNativeComponent" /* 4568 */;
import cancelAnimation from "module_1638" /* 1638 */;
import size from "module_2" /* 2 */;

const forwardRef = react.forwardRef;
const jsx = Fragment.jsx;
const ReanimatedViewNativeComponent = cancelAnimation.createAnimatedComponent(ReanimatedViewNativeComponentDefault);
const forwardRefResult = forwardRef((entering, ref) => {
  const tmp = null != entering.entering;
  const merged = Object.assign(entering);
  return <ReanimatedViewNativeComponent hasEnteringAnimation={tmp} ref={arg1} />;
});
forwardRefResult.displayName = "REAWorkaroundView";
const result = size.fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default forwardRefResult;
