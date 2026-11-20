// Module ID: 15688
// Function ID: 15689
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1653, 5766]

// Module 15688 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 5766 */;
import react from "react" /* 19 */;
import module_1653 from "module_1653" /* 1653 */;

const jsx = Fragment.jsx;
let closure_1 = module_1653.createAnimatedComponent(InnerScreen.InnerScreen);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
