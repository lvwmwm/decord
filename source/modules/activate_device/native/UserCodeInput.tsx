// Module ID: 12940
// Function ID: 100389
// Name: UserCodeInput
// Dependencies: [57, 31, 27, 12941, 33, 4130, 12942, 12943, 4126, 1212, 7574, 4543, 2]
// Exports: UserCodeInput

// Module 12940 (UserCodeInput)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { OAuthConstants } from "OAuthConstants";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ text: { textAlign: "center" } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/activate_device/native/UserCodeInput.tsx");

export const UserCodeInput = function UserCodeInput(prefilledUserCode) {
  let error;
  let manualSubmit;
  let onClose;
  let onUserCodeAccepted;
  let submitting;
  prefilledUserCode = prefilledUserCode.prefilledUserCode;
  let _require;
  ({ onClose, onUserCodeAccepted } = prefilledUserCode);
  const tmp = callback4();
  let str = "";
  if (null != prefilledUserCode) {
    str = prefilledUserCode;
  }
  const tmp3 = callback(React.useState(str), 2);
  const first = tmp3[0];
  _require = tmp3[1];
  let obj = _require(12942);
  const userCodeSubmit = obj.useUserCodeSubmit(first, onUserCodeAccepted, onClose);
  obj = {};
  obj = { style: importDefault(12943).innerContent };
  ({ manualSubmit, error, submitting } = userCodeSubmit);
  const obj1 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.text };
  const intl = _require(1212).intl;
  obj1.children = intl.string(_require(1212).t.KYPNUv);
  const items = [callback2(_require(4126).Text, obj1), ];
  const obj2 = { variant: "text-md/medium", color: "text-default", style: tmp.text };
  const intl2 = _require(1212).intl;
  obj2.children = intl2.string(_require(1212).t.xRHk7f);
  items[1] = callback2(_require(4126).Text, obj2);
  obj.children = items;
  const items1 = [callback3(View, obj), , ];
  const obj3 = {
    onChange(arg0) {
      return callback(arg0);
    },
    maxLength: OAuthConstants.USER_CODE_LENGTH,
    value: first,
    autoFocus: true,
    autoComplete: "off"
  };
  const intl3 = _require(1212).intl;
  obj3.placeholder = intl3.formatToPlainString(_require(1212).t["0tbz6x"], { number: OAuthConstants.USER_CODE_LENGTH });
  obj3.errorMessage = error;
  items1[1] = callback2(_require(7574).TextInput, obj3);
  const obj5 = { size: "lg" };
  const intl4 = _require(1212).intl;
  obj5.text = intl4.string(_require(1212).t["3PatSz"]);
  obj5.onPress = manualSubmit;
  obj5.loading = submitting;
  obj5.disabled = first.length !== OAuthConstants.USER_CODE_LENGTH;
  obj5.grow = true;
  items1[2] = callback2(_require(4543).Button, obj5);
  obj.children = items1;
  return callback3(closure_9, obj);
};
