// Module ID: 5151
// Function ID: 5152
// Name: BountiesScrollIndicatorRive
// Dependencies: [109, 19, 21, 5089, 5152, 5146, 2]
// Exports: BountiesScrollIndicatorRive

// Module 5151 (BountiesScrollIndicatorRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 5089 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 5146 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function BountiesScrollIndicatorRiveInner(ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = ref);
  let str = "Bounties Scroll Indicator";
  ref = ref.ref;
  if (undefined !== artboard) {
    str = artboard;
  }
  const defaultViewModelInstance = ref.defaultViewModelInstance;
  let str2 = "Instance";
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
const artboardProperties = { "Bounties Scroll Indicator": { startAnimation: "trigger", looping: "boolean", color: "color" } };
const artboardViewModelInstances = { "Bounties Scroll Indicator": ["Instance"] };
let closure_9 = {
  "Bounties Scroll Indicator": function BountiesScrollIndicatorBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let startAnimation;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      startAnimation = dataBinding.startAnimation;
    }
    let startAnimation1;
    if (onDataBindingChange != null) {
      startAnimation1 = onDataBindingChange.startAnimation;
    }
    const triggerBinding = useTriggerBinding("startAnimation", instance, startAnimation, startAnimation1, playIfNeeded);
    let looping;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      looping = dataBinding.looping;
    }
    let looping1;
    if (onDataBindingChange != null) {
      looping1 = onDataBindingChange.looping;
    }
    const booleanBinding = useBooleanBinding("looping", instance, looping, looping1, playIfNeeded);
    let color;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      color = dataBinding.color;
    }
    let color1;
    if (onDataBindingChange != null) {
      color1 = onDataBindingChange.color;
    }
    const colorBinding = useColorBinding("color", instance, color, color1, playIfNeeded);
    return null;
  }
};
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollIndicatorRive.tsx");

export const BountiesScrollIndicatorRive = function BountiesScrollIndicatorRiveWithBoundary(fallback) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
};
