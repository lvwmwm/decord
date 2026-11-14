// Module ID: 17047
// Function ID: 17048
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1655, 6293]

// Module 17047 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 6293 */;
import react from "react" /* 19 */;
import module_1655 from "module_1655" /* 1655 */;

const jsx = Fragment.jsx;
let closure_1 = module_1655.createAnimatedComponent(InnerScreen.InnerScreen);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
