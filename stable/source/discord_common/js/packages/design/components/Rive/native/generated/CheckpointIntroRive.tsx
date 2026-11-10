// Module ID: 5161
// Function ID: 5162
// Name: CheckpointIntroRive
// Dependencies: [109, 19, 21, 5089, 5162, 5146, 2]
// Exports: CheckpointIntroRive

// Module 5161 (CheckpointIntroRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 5089 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 5146 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function CheckpointIntroRiveInner(ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = ref);
  let str = "Checkpoint Intro Desktop";
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
const artboardProperties = { "Checkpoint Intro Desktop": { reducedMotion: "boolean", Subtitle: "string", "StartButton Pressed": "boolean", StartButton: "string" }, Globe: {}, "Globe Single Line": {}, "Start Button": { reducedMotion: "boolean", Subtitle: "string", "StartButton Pressed": "boolean", StartButton: "string" } };
const artboardViewModelInstances = { "Checkpoint Intro Desktop": ["default", "reducedMotion"], Globe: [], "Globe Single Line": [], "Start Button": ["default", "reducedMotion"] };
let closure_9 = {
  "Checkpoint Intro Desktop": function CheckpointIntroDesktopBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Subtitle;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Subtitle = dataBinding.Subtitle;
    }
    let Subtitle1;
    if (onDataBindingChange != null) {
      Subtitle1 = onDataBindingChange.Subtitle;
    }
    const stringBinding = useStringBinding("Subtitle", instance, Subtitle, Subtitle1, playIfNeeded);
    let prop;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["StartButton Pressed"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["StartButton Pressed"];
    }
    const booleanBinding1 = useBooleanBinding("StartButton Pressed", instance, prop, prop1, playIfNeeded);
    let StartButton;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      StartButton = dataBinding.StartButton;
    }
    let StartButton1;
    if (onDataBindingChange != null) {
      StartButton1 = onDataBindingChange.StartButton;
    }
    const stringBinding2 = useStringBinding2("StartButton", instance, StartButton, StartButton1, playIfNeeded);
    return null;
  },
  "Start Button": function StartButtonBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Subtitle;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Subtitle = dataBinding.Subtitle;
    }
    let Subtitle1;
    if (onDataBindingChange != null) {
      Subtitle1 = onDataBindingChange.Subtitle;
    }
    const stringBinding = useStringBinding("Subtitle", instance, Subtitle, Subtitle1, playIfNeeded);
    let prop;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["StartButton Pressed"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["StartButton Pressed"];
    }
    const booleanBinding1 = useBooleanBinding("StartButton Pressed", instance, prop, prop1, playIfNeeded);
    let StartButton;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      StartButton = dataBinding.StartButton;
    }
    let StartButton1;
    if (onDataBindingChange != null) {
      StartButton1 = onDataBindingChange.StartButton;
    }
    const stringBinding2 = useStringBinding2("StartButton", instance, StartButton, StartButton1, playIfNeeded);
    return null;
  }
};
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointIntroRive.tsx");

export const CheckpointIntroRive = function CheckpointIntroRiveWithBoundary(fallback) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
};
