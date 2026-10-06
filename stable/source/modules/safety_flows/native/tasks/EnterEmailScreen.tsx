// Module ID: 17702
// Function ID: 17703
// Name: EnterEmailScreen
// Dependencies: [32, 19, 21, 558, 576, 1491, 1127, 2784, 17694, 5280, 6021, 17703, 2]

// Module 17702 (EnterEmailScreen)
import Fragment from "Fragment" /* 21 */;
import _modDef2784 from "module_2784" /* 2784 */;
import types from "types" /* 17694 */;
import SafetyFlowTaskScreenDefault from "SafetyFlowTaskScreen" /* 17703 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp13;
  let tmp14;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = navigation(576);
  const cResult = obj.c(9);
  const obj2 = navigation(1491);
  navigation = obj2.useNavigation();
  [first, tmp7] = react.useState("");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1127).intl;
    const stringResult = intl.string(_modDef2784.bFbsV6);
    const intl2 = tmp(1127).intl;
    const stringResult1 = intl2.string(_modDef2784.RRBNpv);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp8 = stringResult;
    tmp9 = stringResult1;
  } else {
    [tmp8, tmp9] = cResult;
  }
  if (cResult[2] !== navigation) {
    const fn = function c() {
      navigation.push(types.SafetyFlowScreens.VERIFY_EMAIL);
    };
    cResult[2] = navigation;
    cResult[3] = fn;
    tmp13 = fn;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== first) {
    const Stack = tmp(5280).Stack;
    const tmp16 = <Stack>{null}</Stack>;
    cResult[4] = first;
    cResult[5] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === tmp13) {
    let tmp17;
    if (cResult[7] === tmp14) {
      tmp17 = cResult[8];
    }
    return tmp17;
  }
  const tmp18 = jsx(SafetyFlowTaskScreenDefault, { title: tmp8, action: tmp9, onAction: tmp13, children: tmp14 });
  cResult[6] = tmp13;
  cResult[7] = tmp14;
  cResult[8] = tmp18;
  tmp17 = tmp18;
}) : (() => {
  let closure_0;
  let tmp2;
  let tmp3;
  const obj = require("useNavigation");
  _require = obj.useNavigation();
  [tmp2, tmp3] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  SafetyFlowTaskScreenDefault;
  const intl = require("intl").intl;
  const intl2 = require("intl").intl;
  const Stack = require("Stack/Stack").Stack;
  return <tmp4 title={intl.string(_modDef2784.bFbsV6)} action={intl2.string(_modDef2784.RRBNpv)} onAction={function onAction() {
    closure_0.push(types.SafetyFlowScreens.VERIFY_EMAIL);
  }}>{null}</tmp4>;
});
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/EnterEmailScreen.tsx");

export default tmp2;
