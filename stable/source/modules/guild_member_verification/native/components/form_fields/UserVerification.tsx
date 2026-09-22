// Module ID: 5700
// Function ID: 5701
// Name: UserVerification
// Dependencies: [19, 21, 4636, 4461, 5701, 4632, 1114, 2]
// Exports: default

// Module 5700 (UserVerification)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4461 */;
import Text_Text from "Text/Text" /* 4632 */;
import IdentityVerificationFieldDefault from "IdentityVerificationField" /* 5701 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let closure_6 = createStyles.createStyles({ emailPhoneNote: { marginTop: 8, marginBottom: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/UserVerification.tsx");

export default function UserVerification(arg0) {
  ({ verification, field } = arg0);
  if (null == field.platform) {
    return null;
  } else {
    const platform = field.platform;
    let tmp5 = platform === MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE;
    if (tmp5) {
      const obj = { passesVerification: verification[tmp12(undefined, 4461).UserVerificationFieldPlatforms.PHONE], platform: tmp12(4461).UserVerificationFieldPlatforms.PHONE };
      tmp5 = React3(IdentityVerificationFieldDefault, obj);
    }
    const items = [tmp5, , ];
    const obj2 = { passesVerification: verification[MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL], platform: MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL };
    items[1] = React3(IdentityVerificationFieldDefault, obj2);
    const obj3 = { style: tmp.emailPhoneNote, variant: "heading-deprecated-12/medium", color: "text-default", children: null };
    if (platform === MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE) {
      const intl2 = tmp12(1114).intl;
      let stringResult = intl2.string(tmp12(1114).t["jMh+TY"]);
    } else {
      const intl = tmp12(1114).intl;
      stringResult = intl.string(tmp12(1114).t.Vgv9ip);
    }
    const obj4 = { children: null };
    obj3.children = stringResult;
    items[2] = React3(Text_Text.Text, obj3);
    obj4.children = items;
    return hasOwnProperty(React4, obj4);
  }
};
