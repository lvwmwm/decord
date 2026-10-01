// Module ID: 4618
// Function ID: 4619
// Name: BountiesScrollGradientRive
// Dependencies: [109, 19, 21, 4560, 4619, 4615, 2]

// Module 4618 (BountiesScrollGradientRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 4560 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 4615 */;
import _modDef4619 from "module_4619" /* 4619 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
const jsx = Fragment.jsx;
const artboardProperties = { "Bounty Scroll Gradient": {} };
const artboardViewModelInstances = { "Bounty Scroll Gradient": [] };
let closure_8 = react.forwardRef(function BountiesScrollGradientRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Bounty Scroll Gradient";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let tmp;
  const stateMachine = defaultViewModelInstance.stateMachine;
  if (undefined !== defaultViewModelInstance) {
    tmp = defaultViewModelInstance;
  }
  const tmp2 = _objectWithoutProperties(defaultViewModelInstance, closure_3);
  const BaseRive = BaseRive2.BaseRive;
  const merged = Object.assign(tmp2);
  return <BaseRive ref={arg1} src={_modDef4619} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={tmp} stateMachine={stateMachine} />;
});
const forwardRefResult = react.forwardRef(function BountiesScrollGradientRiveWithBoundary(fallback, ref) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollGradientRive.tsx");

export const BountiesScrollGradientRive = forwardRefResult;
