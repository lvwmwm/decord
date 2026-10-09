// Module ID: 6201
// Function ID: 6202
// Name: IdentityVerificationField
// Dependencies: [19, 17, 21, 5091, 587, 558, 576, 5087, 1126, 4776, 5376, 4903, 6202, 5941, 6729, 2000, 6732, 5018, 6640, 2]

// Module 6201 (IdentityVerificationField)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4776 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4903 */;
import Text_Text from "Text/Text" /* 5087 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
let obj2;
let tmp2;
const EnvelopeIcon2 = tmp2(5018);
const MobilePhoneIcon = tmp2(6640);
const f92756 = () => {
  const obj = require("EmailVerificationModalActionCreators");
  obj.open();
};
const f92757 = () => {
  const pushLazy = require("ModalActionCreators").pushLazy;
  const obj = { reason: require("PhoneActionCreators").ChangePhoneReason.GUILD_PHONE_REQUIRED };
  require("ModalActionCreators");
  const tmp2 = require("asyncRequire")(paths[14], paths.paths);
  pushLazy(tmp2, obj);
};
const f92758 = () => {

};
function getLabel(arg0, arg1) {
  if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === arg0) {
    let string2Result;
    const intl3 = tmp(1126).intl;
    const string2 = intl3.string;
    const t2 = tmp(1126).t;
    if (arg1) {
      string2Result = string2(t2.INsLgA);
    } else {
      string2Result = string2(t2.c6EUJI);
    }
    return string2Result;
  } else if (MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === arg0) {
    let stringResult;
    const intl2 = tmp(1126).intl;
    const string = intl2.string;
    const t = tmp(1126).t;
    if (arg1) {
      stringResult = string(t["xO2XI/"]);
    } else {
      stringResult = string(t.woMjLV);
    }
    return stringResult;
  } else {
    const intl = tmp(1126).intl;
    return intl.string(intl4.t.mhv8BM);
  }
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, icon: { marginLeft: 4, marginRight: 8 }, label: { flex: 1, marginLeft: 4, lineHeight: 20 }, verifiedContainer: { paddingVertical: 7, paddingHorizontal: 4, flexDirection: "row", alignItems: "center" }, ctaButton: { flexGrow: 0, alignSelf: "center", paddingHorizontal: 16 } };
obj2 = { padding: 8, marginTop: 8, borderRadius: nativeDefault.radii.sm, height: 48, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseIdentityVerificationField(arg0) {
  let Button;
  let icon;
  let intl;
  let intl2;
  let items;
  let label;
  let obj5;
  let onPress;
  let passesVerification;
  const obj = react2;
  const cResult = obj.c(16);
  ({ label, passesVerification, onPress, icon } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === icon) {
    let tmp5;
    if (cResult[1] === tmp4.icon) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === label) {
      let tmp8;
      let obj4;
      if (cResult[4] === tmp4.label) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === onPress) {
        if (cResult[7] === passesVerification) {
          if (cResult[8] === tmp4.ctaButton) {
            let tmp11;
            if (cResult[9] === tmp4.verifiedContainer) {
              tmp11 = cResult[10];
            }
            if (cResult[11] === tmp4.container) {
              if (cResult[12] === tmp5) {
                if (cResult[13] === tmp8) {
                  let tmp15;
                  if (cResult[14] === tmp11) {
                    tmp15 = cResult[15];
                  }
                  return tmp15;
                }
              }
            }
            const obj2 = { style: tmp4.container, children: items };
            items = [tmp5, tmp8, tmp11];
            const tmp18 = hasOwnProperty(View, obj2);
            cResult[11] = tmp4.container;
            cResult[12] = tmp5;
            cResult[13] = tmp8;
            cResult[14] = tmp11;
            cResult[15] = tmp18;
            tmp15 = tmp18;
          }
        }
      }
      const tmp13 = View;
      if (passesVerification) {
        const obj3 = { style: tmp4.verifiedContainer, accessible: true, accessibilityLabel: intl2.string(intl4.t.g62IJl), children: React3(CheckmarkLargeIcon.CheckmarkLargeIcon, { color: "status-positive" }) };
        intl2 = tmp(1126).intl;
        obj4 = obj3;
      } else {
        obj4 = { style: tmp4.ctaButton, children: React3(Button, obj5) };
        obj5 = { variant: "primary", size: "sm", grow: true, text: intl.string(intl4.t["13ofGu"]), onPress };
        Button = tmp(5376).Button;
        intl = tmp(1126).intl;
      }
      const tmp12Result = React3(tmp13, obj4);
      cResult[6] = onPress;
      cResult[7] = passesVerification;
      cResult[8] = tmp4.ctaButton;
      cResult[9] = tmp4.verifiedContainer;
      cResult[10] = tmp12Result;
      tmp11 = tmp12Result;
    }
    const obj6 = { style: tmp4.label, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
    const tmp10 = React3(Text_Text.Text, obj6);
    cResult[3] = label;
    cResult[4] = tmp4.label;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
  let tmp6 = null;
  if (null != icon) {
    const obj7 = { style: tmp4.icon };
    tmp6 = React3(icon, obj7);
  }
  cResult[0] = icon;
  cResult[1] = tmp4.icon;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function BaseIdentityVerificationField(icon) {
  let Button;
  let intl;
  let intl2;
  let items;
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
  const obj3 = { style: tmp.label, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
  items[1] = React3(Text_Text.Text, obj3);
  if (passesVerification) {
    const obj4 = { style: tmp.verifiedContainer, accessible: true, accessibilityLabel: intl2.string(intl4.t.g62IJl), children: React3(CheckmarkLargeIcon.CheckmarkLargeIcon, { color: "status-positive" }) };
    intl2 = tmp7(1126).intl;
    obj5 = obj4;
  } else {
    obj5 = { style: tmp.ctaButton, children: React3(Button, obj6) };
    obj6 = { variant: "primary", size: "sm", grow: true, text: intl.string(intl4.t["13ofGu"]), onPress };
    Button = tmp7(5376).Button;
    intl = tmp7(1126).intl;
  }
  items[2] = React3(View, obj5);
  return tmp2(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function IdentityVerificationField(arg0) {
  let passesVerification;
  let platform;
  const obj = react2;
  const cResult = obj.c(12);
  ({ platform, passesVerification } = arg0);
  if (cResult[0] === passesVerification) {
    let tmp4;
    let tmp6;
    let tmp7;
    if (cResult[1] === platform) {
      tmp4 = cResult[2];
    }
    if (cResult[3] !== platform) {
      let EnvelopeIcon;
      if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
        EnvelopeIcon = tmp(5018).EnvelopeIcon;
      } else if (MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === platform) {
        EnvelopeIcon = tmp(6640).MobilePhoneIcon;
      } else {
        EnvelopeIcon = tmp(5018).EnvelopeIcon;
      }
      cResult[3] = platform;
      cResult[4] = EnvelopeIcon;
      tmp6 = EnvelopeIcon;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] !== platform) {
      let fn;
      if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
        fn = f92756;
      } else {
        fn = tmp(4903).UserVerificationFieldPlatforms.PHONE === platform ? f92757 : f92758;
      }
      cResult[5] = platform;
      cResult[6] = fn;
      tmp7 = fn;
    } else {
      tmp7 = cResult[6];
    }
    if (cResult[7] === tmp7) {
      if (cResult[8] === tmp6) {
        if (cResult[9] === tmp4) {
          let tmp8;
          if (cResult[10] === passesVerification) {
            tmp8 = cResult[11];
          }
          return tmp8;
        }
      }
    }
    const obj2 = { label: tmp4, icon: tmp6, passesVerification, onPress: tmp7 };
    const tmp11 = React3(closure_7, obj2);
    cResult[7] = tmp7;
    cResult[8] = tmp6;
    cResult[9] = tmp4;
    cResult[10] = passesVerification;
    cResult[11] = tmp11;
    tmp8 = tmp11;
  }
  const tmp5 = getLabel(platform, passesVerification);
  cResult[0] = passesVerification;
  cResult[1] = platform;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function IdentityVerificationField(arg0) {
  let icon;
  let onPress;
  let passesVerification;
  let paths;
  let platform;
  ({ platform, passesVerification } = arg0);
  let tmp2 = require;
  const label = getLabel(platform, passesVerification);
  if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
    icon = EnvelopeIcon2.EnvelopeIcon;
  } else if (MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === platform) {
    icon = MobilePhoneIcon.MobilePhoneIcon;
  } else {
    icon = EnvelopeIcon2.EnvelopeIcon;
  }
  if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
    onPress = f92756;
  } else {
    onPress = MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === platform ? f92757 : f92758;
  }
  return React3(closure_7, { label, icon, passesVerification, onPress });
});
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/IdentityVerificationField.tsx");

export default tmp4;
