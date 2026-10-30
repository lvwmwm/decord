// Module ID: 5142
// Function ID: 5143
// Name: BoostThisServerRive
// Dependencies: [109, 19, 21, 5084, 5143, 5141, 2]
// Exports: BoostThisServerRive

// Module 5142 (BoostThisServerRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 5084 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 5141 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function BoostThisServerRiveInner(ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = ref);
  let str = "Boost Server";
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
const artboardProperties = { "Boost Server": { reducedMotion: "boolean" }, "Boost Crystal": { reducedMotion: "boolean" }, "Crystal Side B": {}, "Crystal Side A": {}, "Boost Saved": { reducedMotion: "boolean" } };
const artboardViewModelInstances = { "Boost Server": ["Instance"], "Boost Crystal": ["Instance"], "Crystal Side B": [], "Crystal Side A": [], "Boost Saved": ["Instance"] };
let closure_9 = {
  "Boost Server": function BoostServerBindings(arg0) {
    let instance;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  },
  "Boost Crystal": function BoostCrystalBindings(arg0) {
    let instance;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  },
  "Boost Saved": function BoostSavedBindings(arg0) {
    let instance;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }
};
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BoostThisServerRive.tsx");

export const BoostThisServerRive = function BoostThisServerRiveWithBoundary(fallback) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
};
