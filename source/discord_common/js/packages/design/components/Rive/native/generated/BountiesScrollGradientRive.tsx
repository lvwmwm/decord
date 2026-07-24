// Module ID: 3911
// Function ID: 32341
// Name: BountiesScrollGradientRive
// Dependencies: [29, 31, 33, 3859, 3912, 3910, 2]

// Module 3911 (BountiesScrollGradientRive)
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
let closure_6 = { "Bounty Scroll Gradient": {} };
let closure_7 = { "Bounty Scroll Gradient": [] };
let closure_8 = importAllResult.forwardRef(function BountiesScrollGradientRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Bounty Scroll Gradient";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let tmp;
  if (undefined !== defaultViewModelInstance) {
    tmp = defaultViewModelInstance;
  }
  const obj = { ref, src: importDefault(3912), artboard: str, artboardProperties: closure_6, artboardViewModelInstances: closure_7, defaultViewModelInstance: tmp, stateMachine: defaultViewModelInstance.stateMachine };
  const merged = Object.assign(callback(defaultViewModelInstance, closure_3));
  return jsx(require(3859) /* useObservedValue */.BaseRive, { ref, src: importDefault(3912), artboard: str, artboardProperties: closure_6, artboardViewModelInstances: closure_7, defaultViewModelInstance: tmp, stateMachine: defaultViewModelInstance.stateMachine });
});
const forwardRefResult = importAllResult.forwardRef(function BountiesScrollGradientRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_8 ref={arg1} />;
  return jsx(require(3910) /* _isNativeReflectConstruct */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollGradientRive.tsx");

export const BountiesScrollGradientRive = forwardRefResult;
