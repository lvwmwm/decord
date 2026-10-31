// Module ID: 5171
// Function ID: 5172
// Name: MicrophoneRive
// Dependencies: [109, 19, 21, 5089, 5172, 5146, 2]
// Exports: MicrophoneRive

// Module 5171 (MicrophoneRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 5089 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 5146 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function MicrophoneRiveInner(ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = ref);
  let str = "Icon Microphone";
  ref = ref.ref;
  if (undefined !== artboard) {
    str = artboard;
  }
  const defaultViewModelInstance = ref.defaultViewModelInstance;
  let str2 = "Off";
  const stateMachine = ref.stateMachine;
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = ref.dataBinding;
  const onDataBindingChange = ref.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const tmp = _objectWithoutProperties(ref, onDataBindingChange);
  const callback = react.useCallback((arg0) => {
    let tmp2 = null;
    if (null != closure_8[str]) {
      const merged = Object.assign(arg0);
      tmp2 = <tmp dataBinding={dataBinding} onDataBindingChange={onDataBindingChange} />;
    }
    return tmp2;
  }, items);
  const BaseRive = str(dataBinding[3]).BaseRive;
  let merged = Object.assign(tmp);
  return <BaseRive ref={ref} src={str(dataBinding[4])} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={str2} stateMachine={stateMachine} renderDataBinding={callback} />;
}
let closure_2 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = Fragment.jsx;
const artboardProperties = { "Icon Microphone": { reducedMotion: "boolean", fill: "color", on: "boolean" }, "Animation Main": { reducedMotion: "boolean", fill: "color", on: "boolean" } };
const artboardViewModelInstances = { "Icon Microphone": ["Off", "On"], "Animation Main": ["Off", "On"] };
let closure_8 = {
  "Icon Microphone": function IconMicrophoneBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let fill;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      fill = dataBinding.fill;
    }
    let fill1;
    if (onDataBindingChange != null) {
      fill1 = onDataBindingChange.fill;
    }
    const colorBinding = useColorBinding("fill", instance, fill, fill1, playIfNeeded);
    let on;
    const useBooleanBinding = tmp(5089).useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      on = dataBinding.on;
    }
    let on1;
    if (onDataBindingChange != null) {
      on1 = onDataBindingChange.on;
    }
    const booleanBinding1 = useBooleanBinding("on", instance, on, on1, playIfNeeded);
    return null;
  },
  "Animation Main": function AnimationMainBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let fill;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      fill = dataBinding.fill;
    }
    let fill1;
    if (onDataBindingChange != null) {
      fill1 = onDataBindingChange.fill;
    }
    const colorBinding = useColorBinding("fill", instance, fill, fill1, playIfNeeded);
    let on;
    const useBooleanBinding = tmp(5089).useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      on = dataBinding.on;
    }
    let on1;
    if (onDataBindingChange != null) {
      on1 = onDataBindingChange.on;
    }
    const booleanBinding1 = useBooleanBinding("on", instance, on, on1, playIfNeeded);
    return null;
  }
};
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/MicrophoneRive.tsx");

export const MicrophoneRive = function MicrophoneRiveWithBoundary(fallback) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
};
