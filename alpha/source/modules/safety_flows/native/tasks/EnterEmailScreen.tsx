// Module ID: 20189
// Function ID: 20190
// Name: EnterEmailScreen
// Dependencies: [32, 19, 21, 1500, 20190, 1112, 3122, 20181, 5989, 7148, 2]
// Exports: default

// Module 20189 (EnterEmailScreen)
import Fragment from "Fragment" /* 21 */;
import _modDef3122 from "module_3122" /* 3122 */;
import types from "types" /* 20181 */;
import SafetyFlowTaskScreenDefault from "SafetyFlowTaskScreen" /* 20190 */;
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
  return <tmp4 title={intl.string(_modDef3122.bFbsV6)} action={intl2.string(_modDef3122.RRBNpv)} onAction={function onAction() {
    closure_0.push(types.SafetyFlowScreens.VERIFY_EMAIL);
  }}>{null}</tmp4>;
};
