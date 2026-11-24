// Module ID: 17103
// Function ID: 17104
// Name: PasskeyUpsellPromoSheet
// Dependencies: [19, 1071, 4759, 21, 5600, 17104, 11225, 1112, 1378, 17105, 6545, 5511, 17102, 7377, 8194, 2]
// Exports: default

// Module 17103 (PasskeyUpsellPromoSheet)
import Constants from "Constants" /* 1071 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4759 */;
import FastImageDefault from "FastImage" /* 5600 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 7377 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 17102 */;
import PasskeyUpsellManagerDefault from "PasskeyUpsellManager" /* 17105 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoSheet.tsx");

export default function PasswordlessUpsellPromoSheet() {
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
  ButtonGroup = tmp4(6545).ButtonGroup;
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
              obj2 = { ticket, credential, name: intl.string(ref(closure_1_2[7]).t["8H5RmH"]) };
              const openUserSettings = ref(closure_1_2[14]).openUserSettings;
              ref(closure_1_2[14]);
              intl = ref(closure_1_2[7]).intl;
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
  const Button = tmp4(5511).Button;
  intl3 = tmp4(1112).intl;
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
  const Button2 = tmp4(5511).Button;
  intl4 = tmp4(1112).intl;
  items[1] = tmp(Button2, obj6);
  return tmp(PromoSheet, obj2);
};
