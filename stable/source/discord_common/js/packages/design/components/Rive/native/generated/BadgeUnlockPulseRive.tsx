// Module ID: 5293
// Function ID: 5294
// Name: BadgeUnlockPulseRive
// Dependencies: [109, 19, 21, 5239, 5294, 5292, 2]
// Exports: BadgeUnlockPulseRive

// Module 5293 (BadgeUnlockPulseRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 5239 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 5292 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function BadgeUnlockPulseRiveInner(ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = ref);
  let str = "Web";
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
const artboardProperties = { Web: { fill: "color" }, Mobile: { fill: "color" } };
const artboardViewModelInstances = { Web: ["Instance"], Mobile: ["Instance"] };
let closure_9 = {
  Web: function WebBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
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
    return null;
  },
  Mobile: function MobileBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
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
    return null;
  }
};
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BadgeUnlockPulseRive.tsx");

export const BadgeUnlockPulseRive = function BadgeUnlockPulseRiveWithBoundary(fallback) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
};
