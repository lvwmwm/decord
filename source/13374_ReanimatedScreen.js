// Module ID: 13374
// Function ID: 101675
// Name: ReanimatedScreen
// Dependencies: []

// Module 13374 (ReanimatedScreen)
const jsx = arg1(dependencyMap[1]).jsx;
const importDefaultResult = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[2]).createAnimatedComponent(arg1(dependencyMap[3]).InnerScreen);
const forwardRefResult = importDefaultResult.forwardRef((arg0, ref) => <closure_1 {...Object.assign({ ref: arg1 }, arg0)} />);
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
