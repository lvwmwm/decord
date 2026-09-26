// Module ID: 5932
// Function ID: 5933
// Name: IdentityVerificationField
// Dependencies: [19, 17, 21, 4836, 576, 4832, 1115, 4783, 5281, 4658, 5933, 5039, 6463, 1981, 6466, 6502, 6379, 2]
// Exports: default

// Module 5932 (IdentityVerificationField)
import nativeDefault from "native" /* 576 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import Text_Text from "Text/Text" /* 4832 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function BaseIdentityVerificationField(icon) {
  icon = icon.icon;
  ({ label, passesVerification, onPress } = icon);
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  let tmp4 = null;
  if (null != icon) {
    const obj2 = { style: tmp.icon };
    tmp4 = React4(icon, obj2);
  }
  const items = [tmp4, , ];
  const obj3 = { style: null, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
  const items1 = [tmp.label];
  obj3.style = items1;
  items[1] = React4(Text_Text.Text, obj3);
  if (passesVerification) {
    const obj4 = { style: tmp.verifiedContainer, accessible: true, accessibilityLabel: null, children: null };
    const intl2 = tmp7(1115).intl;
    obj4.accessibilityLabel = intl2.string(tmp7(1115).t.g62IJl);
    obj4.children = tmp6(tmp7(4783).CheckmarkLargeIcon, { color: "status-positive" });
    let obj5 = obj4;
  } else {
    obj5 = { style: tmp.ctaButton, children: null };
    const obj6 = { variant: "primary", size: "sm", grow: true, text: null, onPress: null };
    const intl = tmp7(1115).intl;
    obj6.text = intl.string(tmp7(1115).t["13ofGu"]);
    obj6.onPress = onPress;
    obj5.children = tmp6(tmp7(5281).Button, obj6);
  }
  items[2] = React4(View, obj5);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4836);
let obj2 = { container: { padding: 8, marginTop: 8, borderRadius: nativeDefault.radii.sm, height: 48, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, icon: { marginLeft: 4, marginRight: 8 }, label: { flex: 1, marginLeft: 4, lineHeight: 20 }, verifiedContainer: { paddingVertical: 7, paddingHorizontal: 4, flexDirection: "row", alignItems: "center" }, ctaButton: { flexGrow: 0, alignSelf: "center", paddingHorizontal: 16 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/IdentityVerificationField.tsx");

export default function IdentityVerificationField(arg0) {
  ({ platform, passesVerification } = arg0);
  if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
    const intl3 = tmp(1115).intl;
    const string2 = intl3.string;
    let INsLgA = tmp(1115).t;
    if (passesVerification) {
      INsLgA = INsLgA.INsLgA;
      let string2Result = string2(INsLgA);
    } else {
      string2Result = string2(INsLgA.c6EUJI);
    }
  } else {
    if (tmp(4658).UserVerificationFieldPlatforms.PHONE === platform) {
      const intl2 = tmp(1115).intl;
      const string = intl2.string;
      const t = tmp(1115).t;
      if (passesVerification) {
        let stringResult = string(t["xO2XI/"]);
      } else {
        stringResult = string(t.woMjLV);
      }
      let stringResult1 = stringResult;
    } else {
      const intl = tmp(1115).intl;
      stringResult1 = intl.string(tmp(1115).t.mhv8BM);
    }
    if (tmp(4658).UserVerificationFieldPlatforms.EMAIL === platform) {
      let EnvelopeIcon = tmp(6502).EnvelopeIcon;
    } else if (tmp(4658).UserVerificationFieldPlatforms.PHONE === platform) {
      EnvelopeIcon = tmp(6379).MobilePhoneIcon;
    } else {
      EnvelopeIcon = tmp(6502).EnvelopeIcon;
    }
    if (tmp(4658).UserVerificationFieldPlatforms.EMAIL === platform) {
      let fn = () => {
        require("EmailVerificationModalActionCreators").open();
      };
    } else {
      fn = tmp(4658).UserVerificationFieldPlatforms.PHONE === platform ? (() => {
        const obj2 = { reason: null };
        const obj = require("ModalActionCreators");
        obj2.reason = require("PhoneActionCreators").ChangePhoneReason.GUILD_PHONE_REQUIRED;
        obj.pushLazy(require("asyncRequireImpl")(paths[12], paths.paths), obj2);
      }) : (() => {

      });
    }
    let obj = { label: stringResult1, icon: EnvelopeIcon, passesVerification, onPress: fn };
    return React4(BaseIdentityVerificationField, obj);
  }
};
