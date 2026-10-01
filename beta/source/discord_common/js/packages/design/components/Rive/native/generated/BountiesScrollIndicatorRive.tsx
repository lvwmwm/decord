// Module ID: 4620
// Function ID: 4621
// Name: BountiesScrollIndicatorRive
// Dependencies: [109, 19, 21, 4560, 4621, 4615, 2]

// Module 4620 (BountiesScrollIndicatorRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 4560 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 4615 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
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
let closure_10 = react.forwardRef(function BountiesScrollIndicatorRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Bounties Scroll Indicator";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Instance";
  const stateMachine = defaultViewModelInstance.stateMachine;
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const tmp = _objectWithoutProperties(defaultViewModelInstance, closure_3);
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
  return <BaseRive ref={arg1} src={dataBinding(onDataBindingChange[4])} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={str2} stateMachine={stateMachine} renderDataBinding={callback} />;
});
const forwardRefResult = react.forwardRef(function BountiesScrollIndicatorRiveWithBoundary(fallback, ref) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollIndicatorRive.tsx");

export const BountiesScrollIndicatorRive = forwardRefResult;
