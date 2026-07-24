// Module ID: 3929
// Function ID: 32427
// Name: MicrophoneRive
// Dependencies: [29, 31, 33, 3859, 3930, 3910, 2]

// Module 3929 (MicrophoneRive)
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_7 = { "Icon Microphone": { reducedMotion: "boolean", fill: "color", on: "boolean" }, "Animation Main": { reducedMotion: "boolean", fill: "color", on: "boolean" } };
let closure_8 = { "Icon Microphone": ["Off", "On"], "Animation Main": ["Off", "On"] };
let closure_9 = {
  "Icon Microphone": function IconMicrophoneBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let fill;
    if (null != dataBinding) {
      fill = dataBinding.fill;
    }
    let fill1;
    if (null != onDataBindingChange) {
      fill1 = onDataBindingChange.fill;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("fill", instance, fill, fill1, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let on;
    if (null != dataBinding) {
      on = dataBinding.on;
    }
    let on1;
    if (null != onDataBindingChange) {
      on1 = onDataBindingChange.on;
    }
    const booleanBinding1 = require(3859) /* useObservedValue */.useBooleanBinding("on", instance, on, on1, playIfNeeded);
    return null;
  },
  "Animation Main": function AnimationMainBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let fill;
    if (null != dataBinding) {
      fill = dataBinding.fill;
    }
    let fill1;
    if (null != onDataBindingChange) {
      fill1 = onDataBindingChange.fill;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("fill", instance, fill, fill1, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let on;
    if (null != dataBinding) {
      on = dataBinding.on;
    }
    let on1;
    if (null != onDataBindingChange) {
      on1 = onDataBindingChange.on;
    }
    const booleanBinding1 = require(3859) /* useObservedValue */.useBooleanBinding("on", instance, on, on1, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function MicrophoneRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Icon Microphone";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Off";
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
const forwardRefResult = importAllResult.forwardRef(function MicrophoneRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 ref={arg1} />;
  return jsx(require(3910) /* _isNativeReflectConstruct */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/MicrophoneRive.tsx");

export const MicrophoneRive = forwardRefResult;
