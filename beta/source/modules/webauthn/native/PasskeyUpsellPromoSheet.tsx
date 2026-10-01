// Module ID: 14223
// Function ID: 14224
// Name: PasskeyUpsellPromoSheet
// Dependencies: [32, 19, 17, 2042, 21, 14224, 14221, 9691, 1115, 1364, 14220, 5745, 5281, 6368, 2]
// Exports: default

// Module 14223 (PasskeyUpsellPromoSheet)
import react_native from "react-native" /* 17 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6368 */;
import PasskeyUpsellManagerDefault from "PasskeyUpsellManager" /* 14220 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportAll;
let metroImportDefault;
const Image = react_native.Image;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoSheet.tsx");

export default function PasswordlessUpsellPromoSheet() {
  let ButtonGroup;
  let intl;
  let obj6;
  let setError;
  let setRegistering;
  let string2Result;
  let string3Result;
  let stringResult;
  let tmp10;
  let tmp7;
  function onRegisterSuccess(merged) {
    const obj = require("PasskeyUpsellActionCreators");
    const result = obj.closePasskeyUpsellPromoSheet();
    const obj2 = require("PasskeyUpsellActionCreators");
    const result1 = obj2.openPasskeyUpsellPromoModal(merged);
  }
  let obj = { source: require("AssetRegistry"), style: { height: 190, width: 220, resizeMode: "contain" } };
  const tmp4 = closure_7(Image, obj);
  [r10018, require] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  [tmp7, importDefault] = react.useState(false);
  let obj2 = {
    illustration: tmp4,
    title: intl.string(require("intl").t.CjleBl),
    description: stringResult,
    onDismiss() {
      const obj = require("PasskeyUpsellManager");
      return obj.markDismissed(constants.USER_DISMISS);
    },
    actions: tmp10(ButtonGroup, obj6)
  };
  _slicedToArray(react.useState(false), 2);
  const PromoSheet = require("PromoSheet").PromoSheet;
  intl = require("intl").intl;
  let obj3 = require("PlatformUtils");
  const isIOSResult = obj3.isIOS();
  const intl2 = require("intl").intl;
  const string = intl2.string;
  const t = require("intl").t;
  if (isIOSResult) {
    stringResult = string(t["7yxR9t"]);
  } else {
    stringResult = string(t.d6uxJy);
  }
  ButtonGroup = tmp2(tmp3[11]).ButtonGroup;
  const obj4 = {
    size: "lg",
    onPress() {
      const obj = PasskeyUpsellManagerDefault;
      obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
      const obj2 = NativeCeremoniesDefault;
      const obj3 = { setRegistering: importDefault, setError: require, onRegisterSuccess };
      obj2.registerPasskey(obj3);
    },
    text: string2Result,
    loading: tmp7,
    disabled: tmp7
  };
  const Button = tmp2(tmp3[12]).Button;
  const intl3 = tmp2(tmp3[8]).intl;
  const string2 = intl3.string;
  const t2 = tmp2(tmp3[8]).t;
  tmp10 = closure_8;
  if (tmp7) {
    string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.NIFmCJ);
  }
  const items = [closure_7(Button, obj4), ];
  const obj5 = {
    size: "lg",
    variant: "secondary",
    onPress() {
      const obj = require("PasskeyUpsellManager");
      obj.markDismissed(constants.USER_DISMISS);
      const obj2 = require("PasskeyUpsellActionCreators");
      const result = obj2.closePasskeyUpsellPromoSheet();
    },
    text: string3Result,
    disabled: tmp7
  };
  const Button2 = tmp2(tmp3[12]).Button;
  const intl4 = tmp2(tmp3[8]).intl;
  const string3 = intl4.string;
  const t3 = tmp2(tmp3[8]).t;
  if (tmp7) {
    string3Result = string3(t3.wePEBF);
  } else {
    string3Result = string3(t3["7J6/nG"]);
  }
  obj6 = { children: items };
  items[1] = closure_7(Button2, obj5);
  return closure_7(PromoSheet, obj2);
};
export const PASSWORDLESS_UPSELL_MODAL_KEY = "PASSWORDLESS_UPSELL_MODAL_KEY";
