// Module ID: 3921
// Function ID: 32386
// Name: CheckpointIntroRive
// Dependencies: [29, 31, 33, 3859, 3922, 3910, 2]

// Module 3921 (CheckpointIntroRive)
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_7 = { "Checkpoint Intro Desktop": { reducedMotion: "boolean", Subtitle: "string", "StartButton Pressed": "boolean", StartButton: "string" }, Globe: {}, "Globe Single Line": {}, "Start Button": { reducedMotion: "boolean", Subtitle: "string", "StartButton Pressed": "boolean", StartButton: "string" } };
let closure_8 = { "Checkpoint Intro Desktop": ["default", "reducedMotion"], Globe: [], "Globe Single Line": [], "Start Button": ["default", "reducedMotion"] };
let closure_9 = {
  "Checkpoint Intro Desktop": function CheckpointIntroDesktopBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Subtitle;
    if (null != dataBinding) {
      Subtitle = dataBinding.Subtitle;
    }
    let Subtitle1;
    if (null != onDataBindingChange) {
      Subtitle1 = onDataBindingChange.Subtitle;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("Subtitle", instance, Subtitle, Subtitle1, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["StartButton Pressed"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["StartButton Pressed"];
    }
    const booleanBinding1 = require(3859) /* useObservedValue */.useBooleanBinding("StartButton Pressed", instance, prop, prop1, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let StartButton;
    if (null != dataBinding) {
      StartButton = dataBinding.StartButton;
    }
    let StartButton1;
    if (null != onDataBindingChange) {
      StartButton1 = onDataBindingChange.StartButton;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("StartButton", instance, StartButton, StartButton1, playIfNeeded);
    return null;
  },
  "Start Button": function StartButtonBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Subtitle;
    if (null != dataBinding) {
      Subtitle = dataBinding.Subtitle;
    }
    let Subtitle1;
    if (null != onDataBindingChange) {
      Subtitle1 = onDataBindingChange.Subtitle;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("Subtitle", instance, Subtitle, Subtitle1, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["StartButton Pressed"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["StartButton Pressed"];
    }
    const booleanBinding1 = require(3859) /* useObservedValue */.useBooleanBinding("StartButton Pressed", instance, prop, prop1, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let StartButton;
    if (null != dataBinding) {
      StartButton = dataBinding.StartButton;
    }
    let StartButton1;
    if (null != onDataBindingChange) {
      StartButton1 = onDataBindingChange.StartButton;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("StartButton", instance, StartButton, StartButton1, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function CheckpointIntroRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Checkpoint Intro Desktop";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "default";
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
const forwardRefResult = importAllResult.forwardRef(function CheckpointIntroRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 ref={arg1} />;
  return jsx(require(3910) /* _isNativeReflectConstruct */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointIntroRive.tsx");

export const CheckpointIntroRive = forwardRefResult;
