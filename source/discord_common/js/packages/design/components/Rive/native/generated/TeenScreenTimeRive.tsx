// Module ID: 4118
// Function ID: 4119
// Name: TeenScreenTimeRive
// Dependencies: [109, 19, 21, 4036, 4119, 4093, 2]

// Module 4118 (TeenScreenTimeRive)
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "noop";
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
  const obj = { ref, src: null, artboard: null, artboardProperties: null, artboardViewModelInstances: null, defaultViewModelInstance: null, stateMachine: null };
  obj[1] = importDefault(4119);
  obj[2] = str;
  obj[3] = closure_6;
  obj[4] = closure_7;
  obj[5] = tmp;
  obj[6] = defaultViewModelInstance.stateMachine;
  const merged = Object.assign(callback(defaultViewModelInstance, closure_3));
  return jsx(require(4036) /* BaseRive */.BaseRive, { ref, src: null, artboard: null, artboardProperties: null, artboardViewModelInstances: null, defaultViewModelInstance: null, stateMachine: null });
});
const forwardRefResult = importAllResult.forwardRef(function TeenScreenTimeRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_8 ref={arg1} />;
  return jsx(require(4093) /* getDerivedStateFromError */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/TeenScreenTimeRive.tsx");

export const TeenScreenTimeRive = forwardRefResult;
