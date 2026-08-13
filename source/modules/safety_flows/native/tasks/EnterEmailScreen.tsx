// Module ID: 17039
// Function ID: 17040
// Name: EnterEmailScreen
// Dependencies: [32, 19, 21, 1499, 17040, 1236, 2565, 17031, 4753, 7835, 2]
// Exports: default

// Module 17039 (EnterEmailScreen)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/safety_flows/native/tasks/EnterEmailScreen.tsx");

export default function EnterEmailScreen() {
  let tmp2;
  let tmp3;
  let obj = _require(1499);
  _require = obj.useNavigation();
  [tmp2, tmp3] = callback(React.useState(""), 2);
  obj = { title: null, action: null, onAction: null, children: null };
  const tmp = callback(React.useState(""), 2);
  const intl = _require(1236).intl;
  obj[0] = intl.string(importDefault(2565).bFbsV6);
  const intl2 = _require(1236).intl;
  obj[1] = intl2.string(importDefault(2565).RRBNpv);
  obj[2] = function onAction() {
    arr = arr.push(arr(outer1_2[7]).SafetyFlowScreens.VERIFY_EMAIL);
  };
  obj = { children: null };
  obj[0] = jsx(_require(7835).TextInput, { label: "Email", value: tmp2, onChange: tmp3 });
  obj[3] = jsx(_require(4753).Stack, { children: null });
  return jsx(importDefault(17040), { children: null });
};
