// Module ID: 13502
// Function ID: 102481
// Name: PasswordlessUpsellPromoSheet
// Dependencies: []
// Exports: default

// Module 13502 (PasswordlessUpsellPromoSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const Image = arg1(dependencyMap[2]).Image;
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoSheet.tsx");

export default function PasswordlessUpsellPromoSheet() {
  let tmp5;
  function onRegisterSuccess(closure_2) {
    const result = callback(onRegisterSuccess[6]).closePasskeyUpsellPromoSheet();
    const obj = callback(onRegisterSuccess[6]);
    const result1 = callback(onRegisterSuccess[6]).openPasskeyUpsellPromoModal(closure_2);
  }
  let obj = { source: callback(onRegisterSuccess[5]), style: {} };
  const tmp = callback3;
  const tmp2 = callback3(Image, obj);
  const callback = callback2(React.useState(""), 2)[1];
  const tmp3 = callback2(React.useState(""), 2);
  [tmp5, closure_1] = callback2(React.useState(false), 2);
  obj = { illustration: tmp2 };
  const intl = callback(onRegisterSuccess[8]).intl;
  obj.title = intl.string(callback(onRegisterSuccess[8]).t.CjleBl);
  let obj2 = callback(onRegisterSuccess[9]);
  const tmp4 = callback2(React.useState(false), 2);
  const intl2 = callback(onRegisterSuccess[8]).intl;
  const string = intl2.string;
  const t = callback(onRegisterSuccess[8]).t;
  if (isIOSResult) {
    let stringResult = string(t.7yxR9t);
  } else {
    stringResult = string(t.d6uxJy);
  }
  obj.description = stringResult;
  obj.onDismiss = function onDismiss() {
    return callback(onRegisterSuccess[10]).markDismissed(constants.USER_DISMISS);
  };
  obj = {};
  const obj1 = {
    size: "lg",
    onPress() {
      let obj = callback(onRegisterSuccess[10]);
      obj.markDismissed(constants.TAKE_ACTION);
      obj = { setRegistering: callback, setError: closure_0, onRegisterSuccess };
      callback(onRegisterSuccess[13]).registerPasskey(obj);
    }
  };
  const intl3 = callback(onRegisterSuccess[8]).intl;
  const string2 = intl3.string;
  const t2 = callback(onRegisterSuccess[8]).t;
  if (tmp5) {
    let string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.NIFmCJ);
  }
  obj1.text = string2Result;
  obj1.loading = tmp5;
  obj1.disabled = tmp5;
  const items = [callback3(callback(onRegisterSuccess[12]).Button, obj1), ];
  obj2 = {
    onPress() {
      callback(onRegisterSuccess[10]).markDismissed(constants.USER_DISMISS);
      const obj = callback(onRegisterSuccess[10]);
      const result = callback(onRegisterSuccess[6]).closePasskeyUpsellPromoSheet();
    }
  };
  const intl4 = callback(onRegisterSuccess[8]).intl;
  const string3 = intl4.string;
  const t3 = callback(onRegisterSuccess[8]).t;
  if (tmp5) {
    let string3Result = string3(t3.wePEBF);
  } else {
    string3Result = string3(t3.7J6/nG);
  }
  obj2.text = string3Result;
  obj2.disabled = tmp5;
  items[1] = callback3(callback(onRegisterSuccess[12]).Button, obj2);
  obj.children = items;
  obj.actions = closure_8(callback(onRegisterSuccess[11]).ButtonGroup, obj);
  return tmp(callback(onRegisterSuccess[7]).PromoSheet, obj);
};
export const PASSWORDLESS_UPSELL_MODAL_KEY = "PASSWORDLESS_UPSELL_MODAL_KEY";
