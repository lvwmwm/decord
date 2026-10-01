// Module ID: 17700
// Function ID: 17701
// Name: EnterEmailScreen
// Dependencies: [32, 19, 21, 1485, 17701, 1115, 2781, 17692, 5279, 6024, 2]
// Exports: default

// Module 17700 (EnterEmailScreen)
import Fragment from "Fragment" /* 21 */;
import _modDef2781 from "module_2781" /* 2781 */;
import types from "types" /* 17692 */;
import SafetyFlowTaskScreenDefault from "SafetyFlowTaskScreen" /* 17701 */;
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
  return <tmp4 title={intl.string(_modDef2781.bFbsV6)} action={intl2.string(_modDef2781.RRBNpv)} onAction={function onAction() {
    closure_0.push(types.SafetyFlowScreens.VERIFY_EMAIL);
  }}>{null}</tmp4>;
};
