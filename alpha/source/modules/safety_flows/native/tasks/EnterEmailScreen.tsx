// Module ID: 20200
// Function ID: 20201
// Name: EnterEmailScreen
// Dependencies: [32, 19, 21, 1502, 20201, 1113, 3019, 20192, 5808, 7102, 2]
// Exports: default

// Module 20200 (EnterEmailScreen)
import Fragment from "Fragment" /* 21 */;
import _modDef3019 from "module_3019" /* 3019 */;
import types from "types" /* 20192 */;
import SafetyFlowTaskScreenDefault from "SafetyFlowTaskScreen" /* 20201 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/EnterEmailScreen.tsx");

export default function EnterEmailScreen() {
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
  return <tmp4 title={intl.string(_modDef3019.bFbsV6)} action={intl2.string(_modDef3019.RRBNpv)} onAction={function onAction() {
    closure_0.push(types.SafetyFlowScreens.VERIFY_EMAIL);
  }}>{null}</tmp4>;
};
