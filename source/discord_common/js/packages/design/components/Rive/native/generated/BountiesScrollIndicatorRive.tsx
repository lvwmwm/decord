// Module ID: 3913
// Function ID: 32345
// Name: BountiesScrollIndicatorRive
// Dependencies: [29, 31, 33, 3859, 3914, 3910, 2]

// Module 3913 (BountiesScrollIndicatorRive)
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_7 = { "Bounties Scroll Indicator": { startAnimation: "trigger", looping: "boolean", color: "color" } };
let closure_8 = { "Bounties Scroll Indicator": ["Instance"] };
let closure_9 = {
  "Bounties Scroll Indicator": function BountiesScrollIndicatorBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let startAnimation;
    if (null != dataBinding) {
      startAnimation = dataBinding.startAnimation;
    }
    let startAnimation1;
    if (null != onDataBindingChange) {
      startAnimation1 = onDataBindingChange.startAnimation;
    }
    const triggerBinding = require(3859) /* useObservedValue */.useTriggerBinding("startAnimation", instance, startAnimation, startAnimation1, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let looping;
    if (null != dataBinding) {
      looping = dataBinding.looping;
    }
    let looping1;
    if (null != onDataBindingChange) {
      looping1 = onDataBindingChange.looping;
    }
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("looping", instance, looping, looping1, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let color;
    if (null != dataBinding) {
      color = dataBinding.color;
    }
    let color1;
    if (null != onDataBindingChange) {
      color1 = onDataBindingChange.color;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("color", instance, color, color1, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function BountiesScrollIndicatorRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Bounties Scroll Indicator";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Instance";
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const callback = importAllResult.useCallback((arg0) => {
    let tmp2 = null;
    if (null != outer1_9[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["dataBinding"] = dataBinding;
      obj["onDataBindingChange"] = onDataBindingChange;
      tmp2 = outer1_6(tmp, obj);
    }
    return tmp2;
  }, items);
  let obj = { ref, src: dataBinding(onDataBindingChange[4]), artboard: str, artboardProperties: closure_7, artboardViewModelInstances: closure_8, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback };
  let merged = Object.assign(callback(defaultViewModelInstance, closure_3));
  return jsx(str(onDataBindingChange[3]).BaseRive, { ref, src: dataBinding(onDataBindingChange[4]), artboard: str, artboardProperties: closure_7, artboardViewModelInstances: closure_8, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback });
});
const forwardRefResult = importAllResult.forwardRef(function BountiesScrollIndicatorRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 ref={arg1} />;
  return jsx(require(3910) /* _isNativeReflectConstruct */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollIndicatorRive.tsx");

export const BountiesScrollIndicatorRive = forwardRefResult;
