// Module ID: 5380
// Function ID: 5381
// Name: BountiesScrollGradientRive
// Dependencies: [109, 19, 21, 5322, 5381, 5375, 2]
// Exports: BountiesScrollGradientRive

// Module 5380 (BountiesScrollGradientRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 5322 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 5375 */;
import _modDef5381 from "module_5381" /* 5381 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function BountiesScrollGradientRiveInner(ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = ref);
  let str = "Bounty Scroll Gradient";
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
  return <BaseRive ref={ref} src={_modDef5381} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={tmp} stateMachine={stateMachine} />;
}
let closure_3 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
const jsx = Fragment.jsx;
const artboardProperties = { "Bounty Scroll Gradient": {} };
const artboardViewModelInstances = { "Bounty Scroll Gradient": [] };
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollGradientRive.tsx");

export const BountiesScrollGradientRive = function BountiesScrollGradientRiveWithBoundary(fallback) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
};
