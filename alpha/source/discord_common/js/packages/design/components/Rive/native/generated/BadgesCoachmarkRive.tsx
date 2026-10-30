// Module ID: 5083
// Function ID: 5084
// Name: BadgesCoachmarkRive
// Dependencies: [109, 19, 21, 5084, 5140, 5141, 2]
// Exports: BadgesCoachmarkRive

// Module 5083 (BadgesCoachmarkRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 5084 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 5141 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function BadgesCoachmarkRiveInner(ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = ref);
  let str = "Badges Coachmark";
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
const artboardProperties = { "Badges Coachmark": { on: "boolean", reducedMotion: "boolean" } };
const artboardViewModelInstances = { "Badges Coachmark": ["Instance"] };
let closure_9 = {
  "Badges Coachmark": function BadgesCoachmarkBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let on;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      on = dataBinding.on;
    }
    let on1;
    if (onDataBindingChange != null) {
      on1 = onDataBindingChange.on;
    }
    const booleanBinding = useBooleanBinding("on", instance, on, on1, playIfNeeded);
    const tmpResult = BaseRive2;
    const booleanBinding1 = tmpResult.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }
};
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BadgesCoachmarkRive.tsx");

export const BadgesCoachmarkRive = function BadgesCoachmarkRiveWithBoundary(fallback) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
};
