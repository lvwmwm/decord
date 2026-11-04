// Module ID: 5165
// Function ID: 5166
// Name: CheckpointNumbersRive
// Dependencies: [109, 19, 21, 5089, 5166, 5146, 2]
// Exports: CheckpointNumbersRive

// Module 5165 (CheckpointNumbersRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 5089 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 5146 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function CheckpointNumbersRiveInner(ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = ref);
  let str = "Artboard";
  ref = ref.ref;
  if (undefined !== artboard) {
    str = artboard;
  }
  const defaultViewModelInstance = ref.defaultViewModelInstance;
  let str2 = "default";
  const stateMachine = ref.stateMachine;
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = ref.dataBinding;
  const onDataBindingChange = ref.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const tmp = _objectWithoutProperties(ref, closure_3);
  const callback = react.useCallback((arg0) => {
    let tmp2 = null;
    if (null != closure_9[str]) {
      const merged = Object.assign(arg0);
      tmp2 = <tmp dataBinding={dataBinding} onDataBindingChange={onDataBindingChange} />;
    }
    return tmp2;
  }, items);
  const BaseRive = str(onDataBindingChange[3]).BaseRive;
  let merged = Object.assign(tmp);
  return <BaseRive ref={ref} src={dataBinding(onDataBindingChange[4])} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={str2} stateMachine={stateMachine} renderDataBinding={callback} />;
}
let closure_3 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = Fragment.jsx;
const artboardProperties = { Artboard: { DisplayValueString: "string", reducedMotion: "boolean", TextColor: "color", "Fire CountUp": "trigger", DisplayValue: "number" } };
const artboardViewModelInstances = { Artboard: ["default", "reducedMotion"] };
let closure_9 = {
  Artboard: function ArtboardBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let DisplayValueString;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      DisplayValueString = dataBinding.DisplayValueString;
    }
    let DisplayValueString1;
    if (onDataBindingChange != null) {
      DisplayValueString1 = onDataBindingChange.DisplayValueString;
    }
    const stringBinding = useStringBinding("DisplayValueString", instance, DisplayValueString, DisplayValueString1, playIfNeeded);
    const tmpResult = BaseRive2;
    const booleanBinding = tmpResult.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let TextColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      TextColor = dataBinding.TextColor;
    }
    let TextColor1;
    if (onDataBindingChange != null) {
      TextColor1 = onDataBindingChange.TextColor;
    }
    const colorBinding = useColorBinding("TextColor", instance, TextColor, TextColor1, playIfNeeded);
    let prop;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["Fire CountUp"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["Fire CountUp"];
    }
    const triggerBinding = useTriggerBinding("Fire CountUp", instance, prop, prop1, playIfNeeded);
    let DisplayValue;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      DisplayValue = dataBinding.DisplayValue;
    }
    let DisplayValue1;
    if (onDataBindingChange != null) {
      DisplayValue1 = onDataBindingChange.DisplayValue;
    }
    const numberBinding = useNumberBinding("DisplayValue", instance, DisplayValue, DisplayValue1, playIfNeeded);
    return null;
  }
};
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointNumbersRive.tsx");

export const CheckpointNumbersRive = function CheckpointNumbersRiveWithBoundary(fallback) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
};
