// Module ID: 13632
// Function ID: 104715
// Name: PasswordlessUpsellPromoSheet
// Dependencies: [57, 31, 27, 1345, 33, 13633, 13630, 11548, 1212, 477, 13629, 4965, 4543, 9201, 2]
// Exports: default

// Module 13632 (PasswordlessUpsellPromoSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { Image } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoSheet.tsx");

export default function PasswordlessUpsellPromoSheet() {
  let importDefault;
  let tmp5;
  function onRegisterSuccess(merged) {
    const result = outer1_1(onRegisterSuccess[6]).closePasskeyUpsellPromoSheet();
    const obj = outer1_1(onRegisterSuccess[6]);
    const result1 = outer1_1(onRegisterSuccess[6]).openPasskeyUpsellPromoModal(merged);
  }
  let obj = { source: _require(onRegisterSuccess[5]), style: { height: 190, width: 220, resizeMode: "contain" } };
  const tmp = callback2;
  const tmp2 = callback2(Image, obj);
  _require = callback(React.useState(""), 2)[1];
  const tmp3 = callback(React.useState(""), 2);
  [tmp5, importDefault] = callback(React.useState(false), 2);
  obj = { illustration: tmp2 };
  const intl = _require(onRegisterSuccess[8]).intl;
  obj.title = intl.string(_require(onRegisterSuccess[8]).t.CjleBl);
  let obj2 = _require(onRegisterSuccess[9]);
  const tmp4 = callback(React.useState(false), 2);
  const intl2 = _require(onRegisterSuccess[8]).intl;
  const string = intl2.string;
  const t = _require(onRegisterSuccess[8]).t;
  if (isIOSResult) {
    let stringResult = string(t["7yxR9t"]);
  } else {
    stringResult = string(t.d6uxJy);
  }
  obj.description = stringResult;
  obj.onDismiss = function onDismiss() {
    return outer1_1(onRegisterSuccess[10]).markDismissed(outer1_6.USER_DISMISS);
  };
  obj = {};
  const obj1 = {
    size: "lg",
    onPress() {
      let obj = outer1_1(onRegisterSuccess[10]);
      obj.markDismissed(outer1_6.TAKE_ACTION);
      obj = { setRegistering: closure_1, setError: closure_0, onRegisterSuccess };
      outer1_1(onRegisterSuccess[13]).registerPasskey(obj);
    }
  };
  const intl3 = _require(onRegisterSuccess[8]).intl;
  const string2 = intl3.string;
  const t2 = _require(onRegisterSuccess[8]).t;
  if (tmp5) {
    let string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.NIFmCJ);
  }
  obj1.text = string2Result;
  obj1.loading = tmp5;
  obj1.disabled = tmp5;
  const items = [callback2(_require(onRegisterSuccess[12]).Button, obj1), ];
  obj2 = {
    size: "lg",
    variant: "secondary",
    onPress() {
      outer1_1(onRegisterSuccess[10]).markDismissed(outer1_6.USER_DISMISS);
      const obj = outer1_1(onRegisterSuccess[10]);
      const result = outer1_1(onRegisterSuccess[6]).closePasskeyUpsellPromoSheet();
    }
  };
  const intl4 = _require(onRegisterSuccess[8]).intl;
  const string3 = intl4.string;
  const t3 = _require(onRegisterSuccess[8]).t;
  if (tmp5) {
    let string3Result = string3(t3.wePEBF);
  } else {
    string3Result = string3(t3["7J6/nG"]);
  }
  obj2.text = string3Result;
  obj2.disabled = tmp5;
  items[1] = callback2(_require(onRegisterSuccess[12]).Button, obj2);
  obj.children = items;
  obj.actions = closure_8(_require(onRegisterSuccess[11]).ButtonGroup, obj);
  return tmp(_require(onRegisterSuccess[7]).PromoSheet, obj);
};
export const PASSWORDLESS_UPSELL_MODAL_KEY = "PASSWORDLESS_UPSELL_MODAL_KEY";
