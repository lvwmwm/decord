// Module ID: 5932
// Function ID: 5933
// Name: IdentityVerificationField
// Dependencies: [19, 17, 21, 4836, 576, 4832, 1115, 4783, 5281, 4658, 5933, 5039, 6463, 1981, 6466, 6502, 6379, 2]
// Exports: default

// Module 5932 (IdentityVerificationField)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4783 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
let obj2;
let tmp;
const MobilePhoneIcon = tmp(6379);
const EnvelopeIcon = tmp(6502);
function BaseIdentityVerificationField(icon) {
  let Button;
  let intl;
  let intl2;
  let items;
  let items1;
  let label;
  let obj5;
  let obj6;
  let onPress;
  let passesVerification;
  icon = icon.icon;
  ({ label, passesVerification, onPress } = icon);
  const tmp = closure_6();
  let tmp4 = null;
  const obj = { style: tmp.container, children: items };
  const tmp2 = hasOwnProperty;
  if (null != icon) {
    const obj2 = { style: tmp.icon };
    tmp4 = React3(icon, obj2);
  }
  items = [tmp4, , ];
  const obj3 = { style: items1, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
  items1 = [tmp.label];
  items[1] = React3(Text_Text.Text, obj3);
  if (passesVerification) {
    const obj4 = { style: tmp.verifiedContainer, accessible: true, accessibilityLabel: intl2.string(intl4.t.g62IJl), children: React3(CheckmarkLargeIcon.CheckmarkLargeIcon, { color: "status-positive" }) };
    intl2 = tmp7(1115).intl;
    obj5 = obj4;
  } else {
    obj5 = { style: tmp.ctaButton, children: React3(Button, obj6) };
    obj6 = { variant: "primary", size: "sm", grow: true, text: intl.string(intl4.t["13ofGu"]), onPress };
    Button = tmp7(5281).Button;
    intl = tmp7(1115).intl;
  }
  items[2] = React3(View, obj5);
  return tmp2(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, icon: { marginLeft: 4, marginRight: 8 }, label: { flex: 1, marginLeft: 4, lineHeight: 20 }, verifiedContainer: { paddingVertical: 7, paddingHorizontal: 4, flexDirection: "row", alignItems: "center" }, ctaButton: { flexGrow: 0, alignSelf: "center", paddingHorizontal: 16 } };
obj2 = { padding: 8, marginTop: 8, borderRadius: nativeDefault.radii.sm, height: 48, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/IdentityVerificationField.tsx");

export default function IdentityVerificationField(arg0) {
  let icon;
  let label;
  let onPress;
  let passesVerification;
  let paths;
  let platform;
  ({ platform, passesVerification } = arg0);
  let tmp2 = dependencyMap;
  if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
    let string2Result;
    const intl3 = intl4.intl;
    const string2 = intl3.string;
    const t2 = intl4.t;
    if (passesVerification) {
      string2Result = string2(t2.INsLgA);
    } else {
      string2Result = string2(t2.c6EUJI);
    }
    label = string2Result;
  } else if (MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === platform) {
    let stringResult;
    const intl2 = intl4.intl;
    const string = intl2.string;
    const t = intl4.t;
    if (passesVerification) {
      stringResult = string(t["xO2XI/"]);
    } else {
      stringResult = string(t.woMjLV);
    }
    label = stringResult;
  } else {
    const intl = intl4.intl;
    label = intl.string(intl4.t.mhv8BM);
  }
  if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
    icon = EnvelopeIcon.EnvelopeIcon;
  } else if (MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === platform) {
    icon = MobilePhoneIcon.MobilePhoneIcon;
  } else {
    icon = EnvelopeIcon.EnvelopeIcon;
  }
  if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
    onPress = () => {
      const obj = require("EmailVerificationModalActionCreators");
      obj.open();
    };
  } else {
    onPress = MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === platform ? (() => {
      const pushLazy = require("ModalActionCreators").pushLazy;
      const obj = { reason: require("PhoneActionCreators").ChangePhoneReason.GUILD_PHONE_REQUIRED };
      require("ModalActionCreators");
      const tmp2 = require("asyncRequire")(paths[12], paths.paths);
      pushLazy(tmp2, obj);
    }) : (() => {

    });
  }
  return React3(BaseIdentityVerificationField, { label, icon, passesVerification, onPress });
};
