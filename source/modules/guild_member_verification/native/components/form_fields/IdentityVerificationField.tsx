// Module ID: 9180
// Function ID: 71901
// Name: BaseIdentityVerificationField
// Dependencies: [31, 27, 33, 4130, 689, 4126, 4082, 4543, 1212, 3950, 9181, 4337, 9236, 1934, 9239, 9265, 9212, 2]
// Exports: default

// Module 9180 (BaseIdentityVerificationField)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function BaseIdentityVerificationField(icon) {
  let label;
  let onPress;
  let passesVerification;
  icon = icon.icon;
  ({ label, passesVerification, onPress } = icon);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  let tmp4 = null;
  if (null != icon) {
    obj = { style: tmp.icon };
    tmp4 = callback(icon, obj);
  }
  const items = [tmp4, , ];
  obj = { style: null, variant: "text-md/medium", color: "mobile-text-heading-primary" };
  const items1 = [tmp.label];
  obj.style = items1;
  obj.children = label;
  items[1] = callback(require(4126) /* Text */.Text, obj);
  const obj1 = {};
  if (passesVerification) {
    obj1.style = tmp.verifiedContainer;
    const obj2 = { color: "status-positive" };
    obj1.children = callback(require(4082) /* CheckmarkLargeIcon */.CheckmarkLargeIcon, obj2);
    let tmp11 = obj1;
  } else {
    obj1.style = tmp.ctaButton;
    const obj3 = { variant: "primary", size: "sm", grow: true };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj3.text = intl.string(require(1212) /* getSystemLocale */.t["13ofGu"]);
    obj3.onPress = onPress;
    obj1.children = callback(require(4543) /* Button */.Button, obj3);
    tmp11 = obj1;
  }
  items[2] = callback(View, tmp11);
  obj.children = items;
  return closure_5(View, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: 8, marginTop: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, height: 48, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.icon = { marginLeft: 4, marginRight: 8 };
_createForOfIteratorHelperLoose.label = { flex: 1, marginLeft: 4, lineHeight: 20 };
_createForOfIteratorHelperLoose.verifiedContainer = { paddingVertical: 7, paddingHorizontal: 4, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.ctaButton = { flexGrow: 0, alignSelf: "center", paddingHorizontal: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/IdentityVerificationField.tsx");

export default function IdentityVerificationField(arg0) {
  let passesVerification;
  let platform;
  ({ platform, passesVerification } = arg0);
  if (require(3950) /* isTermsFormField */.UserVerificationFieldPlatforms.EMAIL === platform) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const string2 = intl3.string;
    let INsLgA = require(1212) /* getSystemLocale */.t;
    if (passesVerification) {
      INsLgA = INsLgA.INsLgA;
      let string2Result = string2(INsLgA);
    } else {
      string2Result = string2(INsLgA.c6EUJI);
    }
  } else {
    if (require(3950) /* isTermsFormField */.UserVerificationFieldPlatforms.PHONE === platform) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const string = intl2.string;
      const t = require(1212) /* getSystemLocale */.t;
      if (passesVerification) {
        let stringResult = string(t["xO2XI/"]);
      } else {
        stringResult = string(t.woMjLV);
      }
      let stringResult1 = stringResult;
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult1 = intl.string(require(1212) /* getSystemLocale */.t.mhv8BM);
    }
    if (require(3950) /* isTermsFormField */.UserVerificationFieldPlatforms.EMAIL === platform) {
      let EnvelopeIcon = require(9265) /* EnvelopeIcon */.EnvelopeIcon;
    } else if (require(3950) /* isTermsFormField */.UserVerificationFieldPlatforms.PHONE === platform) {
      EnvelopeIcon = require(9212) /* MobilePhoneIcon */.MobilePhoneIcon;
    } else {
      EnvelopeIcon = require(9265) /* EnvelopeIcon */.EnvelopeIcon;
    }
    let obj = {
      label: stringResult1,
      icon: EnvelopeIcon,
      passesVerification,
      onPress: (function getHandlePress(platform) {
          if (outer1_0(outer1_2[9]).UserVerificationFieldPlatforms.EMAIL === platform) {
            return () => {
              outer2_1(outer2_2[10]).open();
            };
          } else if (outer1_0(outer1_2[9]).UserVerificationFieldPlatforms.PHONE === platform) {
            return () => {
              let obj = outer2_1(outer2_2[11]);
              obj = { reason: outer2_0(outer2_2[14]).ChangePhoneReason.GUILD_PHONE_REQUIRED };
              obj.pushLazy(outer2_0(outer2_2[13])(outer2_2[12], outer2_2.paths), obj);
            };
          } else {
            return () => {

            };
          }
        })(platform)
    };
    return callback(BaseIdentityVerificationField, obj);
  }
};
