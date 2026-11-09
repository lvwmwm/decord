// Module ID: 7057
// Function ID: 7058
// Name: UserVerification
// Dependencies: [19, 21, 5140, 5174, 7058, 5751, 1113, 2]
// Exports: default

// Module 7057 (UserVerification)
import MemberVerificationTypes from "MemberVerificationTypes" /* 5174 */;
import IdentityVerificationFieldDefault from "IdentityVerificationField" /* 7058 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ emailPhoneNote: { marginTop: 8, marginBottom: 12 } });
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/UserVerification.tsx");

export default function UserVerification(arg0) {
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
    const obj3 = { style: tmp.emailPhoneNote, variant: "body-xs/medium", color: "text-default", children: stringResult };
    const Text = tmp12(5751).Text;
    const tmp6 = _false;
    if (platform === MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE) {
      const intl2 = tmp12(1113).intl;
      stringResult = intl2.string(tmp12(1113).t["jMh+TY"]);
    } else {
      const intl = tmp12(1113).intl;
      stringResult = intl.string(tmp12(1113).t.Vgv9ip);
    }
    const obj4 = { children: items };
    items[2] = tmp6(Text, obj3);
    return tmp10(tmp11, obj4);
  }
};
