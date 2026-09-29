// Module ID: 6097
// Function ID: 6098
// Name: UserVerification
// Dependencies: [19, 21, 4836, 4658, 6098, 4832, 1115, 2]
// Exports: default

// Module 6097 (UserVerification)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import Text_Text from "Text/Text" /* 4832 */;
import IdentityVerificationFieldDefault from "IdentityVerificationField" /* 6098 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4836);
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
      const obj = { passesVerification: verification[tmp12(undefined, 4658).UserVerificationFieldPlatforms.PHONE], platform: tmp12(4658).UserVerificationFieldPlatforms.PHONE };
      tmp5 = React3(IdentityVerificationFieldDefault, obj);
    }
    const items = [tmp5, , ];
    const obj2 = { passesVerification: verification[MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL], platform: MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL };
    items[1] = React3(IdentityVerificationFieldDefault, obj2);
    const obj3 = { style: tmp.emailPhoneNote, variant: "heading-deprecated-12/medium", color: "text-default", children: null };
    if (platform === MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE) {
      const intl2 = tmp12(1115).intl;
      let stringResult = intl2.string(tmp12(1115).t["jMh+TY"]);
    } else {
      const intl = tmp12(1115).intl;
      stringResult = intl.string(tmp12(1115).t.Vgv9ip);
    }
    const obj4 = { children: null };
    obj3.children = stringResult;
    items[2] = React3(Text_Text.Text, obj3);
    obj4.children = items;
    return hasOwnProperty(React4, obj4);
  }
};
