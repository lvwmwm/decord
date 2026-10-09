// Module ID: 6200
// Function ID: 6201
// Name: UserVerification
// Dependencies: [19, 21, 5091, 558, 576, 4903, 6201, 1126, 5087, 2]

// Module 6200 (UserVerification)
import react2 from "react" /* 576 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4903 */;
import Text_Text from "Text/Text" /* 5087 */;
import IdentityVerificationFieldDefault from "IdentityVerificationField" /* 6201 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ emailPhoneNote: { marginTop: 8, marginBottom: 12 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserVerification(arg0) {
  let field;
  let items;
  let verification;
  const obj = react2;
  const cResult = obj.c(14);
  ({ verification, field } = arg0);
  const tmp4 = closure_6();
  if (null == field.platform) {
    return null;
  } else {
    const platform = field.platform;
    if (cResult[0] === platform) {
      let tmp5;
      let tmp11;
      let tmp16;
      if (cResult[1] === verification) {
        tmp5 = cResult[2];
      }
      const tmp10 = verification[MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL];
      if (cResult[3] !== tmp10) {
        const obj2 = { passesVerification: tmp10, platform: MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL };
        const tmp14 = IdentityVerificationFieldDefault;
        const tmp15 = _false(tmp14, obj2);
        cResult[3] = tmp10;
        cResult[4] = tmp15;
        tmp11 = tmp15;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== platform) {
        let stringResult;
        if (platform === MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE) {
          const intl2 = tmp(1126).intl;
          stringResult = intl2.string(tmp(1126).t["jMh+TY"]);
        } else {
          const intl = tmp(1126).intl;
          stringResult = intl.string(tmp(1126).t.Vgv9ip);
        }
        cResult[5] = platform;
        cResult[6] = stringResult;
        tmp16 = stringResult;
      } else {
        tmp16 = cResult[6];
      }
      if (cResult[7] === tmp4.emailPhoneNote) {
        let tmp18;
        if (cResult[8] === tmp16) {
          tmp18 = cResult[9];
        }
        if (cResult[10] === tmp5) {
          if (cResult[11] === tmp11) {
            let tmp21;
            if (cResult[12] === tmp18) {
              tmp21 = cResult[13];
            }
            return tmp21;
          }
        }
        const obj3 = { children: items };
        items = [tmp5, tmp11, tmp18];
        const tmp24 = hasOwnProperty(React3, obj3);
        cResult[10] = tmp5;
        cResult[11] = tmp11;
        cResult[12] = tmp18;
        cResult[13] = tmp24;
        tmp21 = tmp24;
      }
      const obj4 = { style: tmp4.emailPhoneNote, variant: "heading-deprecated-12/medium", color: "text-default", children: tmp16 };
      const tmp20 = _false(Text_Text.Text, obj4);
      cResult[7] = tmp4.emailPhoneNote;
      cResult[8] = tmp16;
      cResult[9] = tmp20;
      tmp18 = tmp20;
    }
    let tmp6 = platform === tmp(4903).UserVerificationFieldPlatforms.PHONE;
    if (tmp6) {
      const obj5 = { passesVerification: verification[MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE], platform: MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE };
      const tmp9 = IdentityVerificationFieldDefault;
      tmp6 = _false(tmp9, obj5);
    }
    cResult[0] = platform;
    cResult[1] = verification;
    cResult[2] = tmp6;
    tmp5 = tmp6;
  }
}) : (function UserVerification(arg0) {
  let field;
  let stringResult;
  let verification;
  ({ verification, field } = arg0);
  if (null == field.platform) {
    return null;
  } else {
    const platform = field.platform;
    let tmp5 = platform === MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE;
    const tmp10 = hasOwnProperty;
    const tmp11 = React3;
    if (tmp5) {
      const obj = { passesVerification: verification[MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE], platform: MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE };
      const tmp4 = IdentityVerificationFieldDefault;
      tmp5 = _false(tmp4, obj);
    }
    const items = [tmp5, , ];
    const obj2 = { passesVerification: verification[MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL], platform: MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL };
    const tmp8 = IdentityVerificationFieldDefault;
    items[1] = _false(tmp8, obj2);
    const obj3 = { style: tmp.emailPhoneNote, variant: "heading-deprecated-12/medium", color: "text-default", children: stringResult };
    const Text = tmp12(5087).Text;
    const tmp6 = _false;
    if (platform === MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE) {
      const intl2 = tmp12(1126).intl;
      stringResult = intl2.string(tmp12(1126).t["jMh+TY"]);
    } else {
      const intl = tmp12(1126).intl;
      stringResult = intl.string(tmp12(1126).t.Vgv9ip);
    }
    const obj4 = { children: items };
    items[2] = tmp6(Text, obj3);
    return tmp10(tmp11, obj4);
  }
});
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/UserVerification.tsx");

export default tmp4;
