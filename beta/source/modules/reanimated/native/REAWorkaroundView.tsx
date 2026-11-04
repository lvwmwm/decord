// Module ID: 5096
// Function ID: 5097
// Name: REAWorkaroundView
// Dependencies: [21, 1650, 5097, 2]

// Module 5096 (REAWorkaroundView)
import Fragment from "Fragment" /* 21 */;
import ReanimatedViewNativeComponentDefault from "ReanimatedViewNativeComponent" /* 5097 */;
import cancelAnimation from "module_1650" /* 1650 */;
import size from "module_2" /* 2 */;

class ComponentWrapper {
  constructor(ref) {
    ref = ref.ref;
    const merged = Object.assign(ref, Object.assign({ ref: 0 }));
    const tmp2 = null != merged.entering;
    const merged1 = Object.assign(merged);
    return <ReanimatedViewNativeComponent hasEnteringAnimation={tmp2} ref={ref} />;
  }
}
const jsx = Fragment.jsx;
const ReanimatedViewNativeComponent = cancelAnimation.createAnimatedComponent(ReanimatedViewNativeComponentDefault);
ComponentWrapper.displayName = "REAWorkaroundView";
const result = size.fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default ComponentWrapper;
