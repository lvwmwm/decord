// Module ID: 9172
// Function ID: 71858
// Name: UserVerification
// Dependencies: [0, 0, 0, 0, 0]
// Exports: default

// Module 9172 (UserVerification)
import "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = __exportStarResult1);
let closure_6 = __exportStarResult1.createStyles({ emailPhoneNote: { y: null, channelId: null } });
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/UserVerification.tsx");

export default function UserVerification(arg0) {
  let field;
  let verification;
  ({ verification, field } = arg0);
  if (null == field.platform) {
    return null;
  } else {
    const platform = field.platform;
    let obj = {};
    let tmp7 = platform === arg1(dependencyMap[3]).UserVerificationFieldPlatforms.PHONE;
    if (tmp7) {
      obj = { passesVerification: verification[closure_0(undefined, closure_2[3]).UserVerificationFieldPlatforms.PHONE], platform: arg1(dependencyMap[3]).UserVerificationFieldPlatforms.PHONE };
      tmp7 = callback(importDefault(dependencyMap[4]), obj);
      const tmp5 = importDefault(dependencyMap[4]);
    }
    const items = [tmp7, , ];
    obj = { passesVerification: verification[closure_0(undefined, closure_2[3]).UserVerificationFieldPlatforms.EMAIL], platform: arg1(dependencyMap[3]).UserVerificationFieldPlatforms.EMAIL };
    items[1] = callback(importDefault(dependencyMap[4]), obj);
    const obj1 = { style: tmp.emailPhoneNote };
    if (platform === arg1(dependencyMap[3]).UserVerificationFieldPlatforms.PHONE) {
      const intl2 = arg1(dependencyMap[6]).intl;
      let stringResult = intl2.string(arg1(dependencyMap[6]).t.jMh+TY);
    } else {
      const intl = arg1(dependencyMap[6]).intl;
      stringResult = intl.string(arg1(dependencyMap[6]).t.Vgv9ip);
    }
    obj1.children = stringResult;
    items[2] = callback(arg1(dependencyMap[5]).Text, obj1);
    obj.children = items;
    return closure_5(closure_4, obj);
  }
};
