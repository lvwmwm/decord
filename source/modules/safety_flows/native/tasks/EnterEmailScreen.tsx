// Module ID: 16565
// Function ID: 129219
// Name: EnterEmailScreen
// Dependencies: [57, 31, 33, 1456, 16566, 1212, 2460, 16557, 4541, 7512, 2]
// Exports: default

// Module 16565 (EnterEmailScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/safety_flows/native/tasks/EnterEmailScreen.tsx");

export default function EnterEmailScreen() {
  let tmp2;
  let tmp3;
  let obj = _require(1456);
  _require = obj.useNavigation();
  [tmp2, tmp3] = callback(React.useState(""), 2);
  obj = {};
  const tmp = callback(React.useState(""), 2);
  const intl = _require(1212).intl;
  obj.title = intl.string(importDefault(2460).bFbsV6);
  const intl2 = _require(1212).intl;
  obj.action = intl2.string(importDefault(2460).RRBNpv);
  obj.onAction = function onAction() {
    arr = arr.push(arr(outer1_2[7]).SafetyFlowScreens.VERIFY_EMAIL);
  };
  obj = { children: jsx(_require(7512).TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) };
  obj.children = jsx(_require(4541).Stack, { children: jsx(_require(7512).TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) });
  return jsx(importDefault(16566), { children: jsx(_require(7512).TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) });
};
