// Module ID: 3935
// Function ID: 32449
// Name: TeenScreenTimeRive
// Dependencies: [29, 31, 33, 3859, 3936, 3910, 2]

// Module 3935 (TeenScreenTimeRive)
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
let closure_6 = { "Teen Screen Time Illo": {}, "Gradient Vertical": {}, "RAW ILLO (Do not deploy)": {}, "Gradient Horizontal": {} };
let closure_7 = { "Teen Screen Time Illo": [], "Gradient Vertical": [], "RAW ILLO (Do not deploy)": [], "Gradient Horizontal": [] };
let closure_8 = importAllResult.forwardRef(function TeenScreenTimeRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Teen Screen Time Illo";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let tmp;
  if (undefined !== defaultViewModelInstance) {
    tmp = defaultViewModelInstance;
  }
  const obj = { ref, src: importDefault(3936), artboard: str, artboardProperties: closure_6, artboardViewModelInstances: closure_7, defaultViewModelInstance: tmp, stateMachine: defaultViewModelInstance.stateMachine };
  const merged = Object.assign(callback(defaultViewModelInstance, closure_3));
  return jsx(require(3859) /* useObservedValue */.BaseRive, { ref, src: importDefault(3936), artboard: str, artboardProperties: closure_6, artboardViewModelInstances: closure_7, defaultViewModelInstance: tmp, stateMachine: defaultViewModelInstance.stateMachine });
});
const forwardRefResult = importAllResult.forwardRef(function TeenScreenTimeRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_8 ref={arg1} />;
  return jsx(require(3910) /* _isNativeReflectConstruct */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/TeenScreenTimeRive.tsx");

export const TeenScreenTimeRive = forwardRefResult;
