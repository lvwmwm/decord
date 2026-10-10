// Module ID: 4900
// Function ID: 4901
// Name: BountiesScrollGradientRive
// Dependencies: [109, 19, 21, 558, 576, 4844, 4901, 4897, 2]

// Module 4900 (BountiesScrollGradientRive)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import _modDef4901 from "module_4901" /* 4901 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const BaseRive2 = tmp(4844);
const RiveErrorBoundary2 = tmp(4897);
let closure_3 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
let closure_4 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
const jsx = Fragment.jsx;
const artboardProperties = { "Bounty Scroll Gradient": {} };
const artboardViewModelInstances = { "Bounty Scroll Gradient": [] };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesScrollGradientRiveInner(arg0) {
  let artboard;
  let defaultViewModelInstance;
  let fallback;
  let ref;
  let stateMachine;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(12);
  if (cResult[0] !== arg0) {
    ({ ref, fallback, artboard, stateMachine, defaultViewModelInstance } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = ref;
    cResult[2] = tmp11;
    cResult[3] = stateMachine;
    cResult[4] = artboard;
    cResult[5] = defaultViewModelInstance;
    tmp8 = defaultViewModelInstance;
    tmp7 = artboard;
    tmp6 = stateMachine;
    tmp5 = tmp11;
    tmp4 = ref;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  let str = "Bounty Scroll Gradient";
  if (undefined !== tmp7) {
    str = tmp7;
  }
  let tmp12;
  if (undefined !== tmp8) {
    tmp12 = tmp8;
  }
  if (cResult[6] === str) {
    if (cResult[7] === tmp12) {
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp5) {
          let tmp13;
          if (cResult[10] === tmp6) {
            tmp13 = cResult[11];
          }
          return tmp13;
        }
      }
    }
  }
  const BaseRive = BaseRive2.BaseRive;
  const merged = Object.assign(tmp5);
  const tmp15 = <BaseRive ref={tmp4} src={_modDef4901} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={tmp12} stateMachine={tmp6} />;
  cResult[6] = str;
  cResult[7] = tmp12;
  cResult[8] = tmp4;
  cResult[9] = tmp5;
  cResult[10] = tmp6;
  cResult[11] = tmp15;
  tmp13 = tmp15;
}) : (function BountiesScrollGradientRiveInner(ref) {
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
  const tmp2 = _objectWithoutProperties(ref, closure_4);
  const BaseRive = BaseRive2.BaseRive;
  const merged = Object.assign(tmp2);
  return <BaseRive ref={ref} src={_modDef4901} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={tmp} stateMachine={stateMachine} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesScrollGradientRiveWithBoundary(fallback) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] !== fallback) {
    const merged = Object.assign(fallback);
    const tmp10 = <closure_9 />;
    cResult[0] = fallback;
    cResult[1] = tmp10;
    tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === fallback.fallback) {
    let tmp11;
    if (cResult[3] === tmp4) {
      tmp11 = cResult[4];
    }
    return tmp11;
  }
  const tmp12 = jsx(RiveErrorBoundary2.RiveErrorBoundary, { fallback: fallback.fallback, children: tmp4 });
  cResult[2] = fallback.fallback;
  cResult[3] = tmp4;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : (function BountiesScrollGradientRiveWithBoundary(fallback) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollGradientRive.tsx");

export const BountiesScrollGradientRive = tmp3;
