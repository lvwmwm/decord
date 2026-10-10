// Module ID: 15967
// Function ID: 15968
// Name: PasskeyUpsellPromoSheet
// Dependencies: [19, 1085, 2062, 21, 558, 576, 6156, 15968, 15969, 15966, 6630, 7093, 1126, 1382, 5379, 10323, 5958, 2]

// Module 15967 (PasskeyUpsellPromoSheet)
import Constants from "Constants" /* 1085 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import FastImageDefault from "FastImage" /* 6156 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6630 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 15966 */;
import PasskeyUpsellManagerDefault from "PasskeyUpsellManager" /* 15969 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function PasswordlessUpsellPromoSheet() {
  let ButtonGroup;
  let first;
  let intl3;
  let intl4;
  let items;
  let obj5;
  let ref;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp20;
  let tmp9;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { source: tmp(15968), style: { height: 190, width: 220, resizeMode: "contain" } };
    const tmp7 = FastImageDefault;
    const tmp8 = closure_6(tmp7, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  _require = react.useRef(false);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    function registerPasskey() {
      if (!ref.current) {
        tmp.current = true;
        let obj = PasskeyUpsellManagerDefault;
        obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
        let obj2 = PasskeyUpsellActionCreatorsDefault;
        const result = obj2.closePasskeyUpsellPromoSheet();
        const obj4 = {
          setRegistering() {

            },
          onRegisterSuccess(arg0) {
              let credential;
              let intl;
              let obj2;
              let ticket;
              ({ ticket, credential } = arg0);
              const obj = { screen: constants.WEBAUTHN_NAME, params: obj2 };
              obj2 = { ticket, credential, name: intl.string(ref(closure_1_2[12]).t["8H5RmH"]) };
              const openUserSettings = ref(closure_1_2[11]).openUserSettings;
              ref(closure_1_2[11]);
              intl = ref(closure_1_2[12]).intl;
              openUserSettings(obj);
            }
        };
        const obj3 = NativeCeremoniesDefault;
        const registerPasskeyResult = obj3.registerPasskey(obj4);
        registerPasskeyResult.catch(() => {

        });
      }
    }
    cResult[1] = registerPasskey;
    tmp9 = registerPasskey;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    function onCancel() {
      const obj = PasskeyUpsellManagerDefault;
      obj.markDismissed(constants.USER_DISMISS);
      const obj2 = PasskeyUpsellActionCreatorsDefault;
      const result = obj2.closePasskeyUpsellPromoSheet();
    }
    cResult[2] = onCancel;
    tmp10 = onCancel;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let stringResult1;
    let intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.CjleBl);
    const tmpResult = tmp(1382);
    const isIOSResult = tmpResult.isIOS();
    const intl2 = tmp(1126).intl;
    const string = intl2.string;
    const t = tmp(1126).t;
    if (isIOSResult) {
      stringResult1 = string(t["7yxR9t"]);
    } else {
      stringResult1 = string(t.d6uxJy);
    }
    const fn = function f() {
      const obj = PasskeyUpsellManagerDefault;
      return obj.markDismissed(constants.USER_DISMISS);
    };
    cResult[3] = stringResult;
    cResult[4] = stringResult1;
    cResult[5] = fn;
    tmp12 = stringResult1;
    tmp13 = fn;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { size: "lg", onPress: tmp9, text: intl3.string(tmp(1126).t.NIFmCJ) };
    const Button = tmp(5379).Button;
    intl3 = tmp(1126).intl;
    const tmp19 = closure_6(Button, obj3);
    cResult[6] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = { illustration: first, title: tmp11, description: tmp12, onDismiss: tmp13, actions: closure_7(ButtonGroup, obj5) };
    const PromoSheet = tmp(10323).PromoSheet;
    obj5 = { children: items };
    items = [tmp17, ];
    ButtonGroup = tmp(5958).ButtonGroup;
    const obj6 = { size: "lg", variant: "secondary", onPress: tmp10, text: intl4.string(tmp(1126).t["7J6/nG"]) };
    const Button2 = tmp(5379).Button;
    intl4 = tmp(1126).intl;
    items[1] = closure_6(Button2, obj6);
    const tmp23 = closure_6(PromoSheet, obj4);
    cResult[7] = tmp23;
    tmp20 = tmp23;
  } else {
    tmp20 = cResult[7];
  }
  return tmp20;
}) : (function PasswordlessUpsellPromoSheet() {
  let ButtonGroup;
  let intl;
  let intl3;
  let intl4;
  let items;
  let obj4;
  let ref;
  let stringResult;
  const tmp = closure_6;
  let obj = { source: require("AssetRegistry"), style: { height: 190, width: 220, resizeMode: "contain" } };
  const tmp3 = FastImageDefault;
  const tmp5 = closure_6(tmp3, obj);
  _require = react.useRef(false);
  let obj2 = {
    illustration: tmp5,
    title: intl.string(require("intl").t.CjleBl),
    description: stringResult,
    onDismiss() {
      const obj = PasskeyUpsellManagerDefault;
      return obj.markDismissed(constants.USER_DISMISS);
    },
    actions: closure_7(ButtonGroup, obj4)
  };
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
  obj4 = { children: items };
  ButtonGroup = tmp4(5958).ButtonGroup;
  const obj5 = {
    size: "lg",
    onPress: function registerPasskey() {
      if (!ref.current) {
        tmp.current = true;
        let obj = PasskeyUpsellManagerDefault;
        obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
        let obj2 = PasskeyUpsellActionCreatorsDefault;
        const result = obj2.closePasskeyUpsellPromoSheet();
        const obj4 = {
          setRegistering() {

            },
          onRegisterSuccess(arg0) {
              let credential;
              let intl;
              let obj2;
              let ticket;
              ({ ticket, credential } = arg0);
              const obj = { screen: constants.WEBAUTHN_NAME, params: obj2 };
              obj2 = { ticket, credential, name: intl.string(ref(closure_1_2[12]).t["8H5RmH"]) };
              const openUserSettings = ref(closure_1_2[11]).openUserSettings;
              ref(closure_1_2[11]);
              intl = ref(closure_1_2[12]).intl;
              openUserSettings(obj);
            }
        };
        const obj3 = NativeCeremoniesDefault;
        const registerPasskeyResult = obj3.registerPasskey(obj4);
        registerPasskeyResult.catch(() => {

        });
      }
    },
    text: intl3.string(require("intl").t.NIFmCJ)
  };
  const Button = tmp4(5379).Button;
  intl3 = tmp4(1126).intl;
  items = [tmp(Button, obj5), ];
  const obj6 = {
    size: "lg",
    variant: "secondary",
    onPress: function onCancel() {
      const obj = PasskeyUpsellManagerDefault;
      obj.markDismissed(constants.USER_DISMISS);
      const obj2 = PasskeyUpsellActionCreatorsDefault;
      const result = obj2.closePasskeyUpsellPromoSheet();
    },
    text: intl4.string(require("intl").t["7J6/nG"])
  };
  const Button2 = tmp4(5379).Button;
  intl4 = tmp4(1126).intl;
  items[1] = tmp(Button2, obj6);
  return tmp(PromoSheet, obj2);
});
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoSheet.tsx");

export default tmp3;
