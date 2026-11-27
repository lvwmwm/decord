// Module ID: 16018
// Function ID: 16019
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1654, 6071]

// Module 16018 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 6071 */;
import react from "react" /* 19 */;
import module_1654 from "module_1654" /* 1654 */;

const jsx = Fragment.jsx;
let closure_1 = module_1654.createAnimatedComponent(InnerScreen.InnerScreen);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
