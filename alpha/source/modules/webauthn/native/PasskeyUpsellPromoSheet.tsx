// Module ID: 15792
// Function ID: 15793
// Name: PasskeyUpsellPromoSheet
// Dependencies: [19, 17, 1085, 2060, 21, 558, 576, 15793, 15794, 15791, 6622, 7084, 1126, 1381, 5375, 10303, 5963, 2]

// Module 15792 (PasskeyUpsellPromoSheet)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2060 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6622 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 15791 */;
import PasskeyUpsellManagerDefault from "PasskeyUpsellManager" /* 15794 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
const Image = react_native.Image;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function PasswordlessUpsellPromoSheet() {
  let ButtonGroup;
  let first;
  let intl3;
  let intl4;
  let obj5;
  let ref;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp16;
  let tmp19;
  let tmp8;
  let tmp9;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { source: tmp(15793), style: { height: 190, width: 220, resizeMode: "contain" } };
    const tmp7 = closure_7(Image, obj2);
    cResult[0] = tmp7;
    first = tmp7;
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
    tmp8 = registerPasskey;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    function onCancel() {
      const obj = PasskeyUpsellManagerDefault;
      obj.markDismissed(constants.USER_DISMISS);
      const obj2 = PasskeyUpsellActionCreatorsDefault;
      const result = obj2.closePasskeyUpsellPromoSheet();
    }
    cResult[2] = onCancel;
    tmp9 = onCancel;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let stringResult1;
    let intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.CjleBl);
    const tmpResult = tmp(1381);
    const isIOSResult = tmpResult.isIOS();
    const intl2 = tmp(1126).intl;
    const string = intl2.string;
    const t = tmp(1126).t;
    if (isIOSResult) {
      stringResult1 = string(t["7yxR9t"]);
    } else {
      stringResult1 = string(t.d6uxJy);
    }
    class I {
      constructor() {
        const obj = PasskeyUpsellManagerDefault;
        return obj.markDismissed(constants.USER_DISMISS);
      }
    }
    cResult[3] = stringResult;
    cResult[4] = stringResult1;
    cResult[5] = I;
    tmp11 = stringResult1;
    tmp12 = I;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { size: "lg", onPress: tmp8, text: intl3.string(tmp(1126).t.NIFmCJ) };
    const Button = tmp(5375).Button;
    intl3 = tmp(1126).intl;
    const tmp18 = closure_7(Button, obj3);
    class I {
      constructor() {
        const obj = PasskeyUpsellManagerDefault;
        return obj.markDismissed(constants.USER_DISMISS);
      }
    }
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = { illustration: first, title: tmp10, description: tmp11, onDismiss: tmp12, actions: closure_8(ButtonGroup, obj5) };
    const PromoSheet = tmp(10303).PromoSheet;
    obj5 = { children: tmp22 };
    class I {
      constructor() {
        const obj = PasskeyUpsellManagerDefault;
        return obj.markDismissed(constants.USER_DISMISS);
      }
    }
    tmp22[0] = tmp16;
    ButtonGroup = tmp(5963).ButtonGroup;
    const obj6 = { size: "lg", variant: "secondary", onPress: tmp9, text: intl4.string(tmp(1126).t["7J6/nG"]) };
    const Button2 = tmp(5375).Button;
    intl4 = tmp(1126).intl;
    tmp22[1] = closure_7(Button2, obj6);
    const tmp23 = closure_7(PromoSheet, obj4);
    cResult[7] = tmp23;
    tmp19 = tmp23;
  } else {
    tmp19 = cResult[7];
  }
  return tmp19;
}) : (function PasswordlessUpsellPromoSheet() {
  let ButtonGroup;
  let intl;
  let intl3;
  let intl4;
  let items;
  let obj4;
  let ref;
  let stringResult;
  const tmp = closure_7;
  let obj = { source: require("AssetRegistry"), style: { height: 190, width: 220, resizeMode: "contain" } };
  const tmp4 = closure_7(Image, obj);
  _require = react.useRef(false);
  let obj2 = {
    illustration: tmp4,
    title: intl.string(require("intl").t.CjleBl),
    description: stringResult,
    onDismiss() {
      const obj = PasskeyUpsellManagerDefault;
      return obj.markDismissed(constants.USER_DISMISS);
    },
    actions: closure_8(ButtonGroup, obj4)
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
  ButtonGroup = tmp2(5963).ButtonGroup;
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
  const Button = tmp2(5375).Button;
  intl3 = tmp2(1126).intl;
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
  const Button2 = tmp2(5375).Button;
  intl4 = tmp2(1126).intl;
  items[1] = tmp(Button2, obj6);
  return tmp(PromoSheet, obj2);
});
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoSheet.tsx");

export default tmp3;
