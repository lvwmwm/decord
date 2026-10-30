// Module ID: 5176
// Function ID: 5177
// Name: TeenScreenTimeRive
// Dependencies: [109, 19, 21, 5084, 5177, 5141, 2]
// Exports: TeenScreenTimeRive

// Module 5176 (TeenScreenTimeRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 5084 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 5141 */;
import _modDef5177 from "module_5177" /* 5177 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function TeenScreenTimeRiveInner(ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = ref);
  let str = "Teen Screen Time Illo";
  ref = ref.ref;
  if (undefined !== artboard) {
    str = artboard;
  }
  const defaultViewModelInstance = ref.defaultViewModelInstance;
  let tmp;
  const stateMachine = ref.stateMachine;
  if (undefined !== defaultViewModelInstance) {
    tmp = defaultViewModelInstance;
  }
  const tmp2 = _objectWithoutProperties(ref, closure_3);
  const BaseRive = BaseRive2.BaseRive;
  const merged = Object.assign(tmp2);
  return <BaseRive ref={ref} src={_modDef5177} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={tmp} stateMachine={stateMachine} />;
}
let closure_3 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
const jsx = Fragment.jsx;
const artboardProperties = { "Teen Screen Time Illo": {}, "Gradient Vertical": {}, "RAW ILLO (Do not deploy)": {}, "Gradient Horizontal": {} };
const artboardViewModelInstances = { "Teen Screen Time Illo": [], "Gradient Vertical": [], "RAW ILLO (Do not deploy)": [], "Gradient Horizontal": [] };
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/TeenScreenTimeRive.tsx");

export const TeenScreenTimeRive = function TeenScreenTimeRiveWithBoundary(fallback) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
};
