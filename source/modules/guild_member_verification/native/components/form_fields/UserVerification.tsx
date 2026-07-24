// Module ID: 9215
// Function ID: 72108
// Name: UserVerification
// Dependencies: [31, 33, 4130, 3950, 9216, 4126, 1212, 2]
// Exports: default

// Module 9215 (UserVerification)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ emailPhoneNote: { marginTop: 8, marginBottom: 12 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/UserVerification.tsx");

export default function UserVerification(arg0) {
  let field;
  let verification;
  ({ verification, field } = arg0);
  if (null == field.platform) {
    return null;
  } else {
    const platform = field.platform;
    let obj = {};
    let tmp7 = platform === require(3950) /* isTermsFormField */.UserVerificationFieldPlatforms.PHONE;
    if (tmp7) {
      obj = { passesVerification: verification[require(undefined, 3950) /* isTermsFormField */.UserVerificationFieldPlatforms.PHONE], platform: require(3950) /* isTermsFormField */.UserVerificationFieldPlatforms.PHONE };
      tmp7 = callback(importDefault(9216), obj);
      const tmp5 = importDefault(9216);
    }
    const items = [tmp7, , ];
    obj = { passesVerification: verification[require(undefined, 3950) /* isTermsFormField */.UserVerificationFieldPlatforms.EMAIL], platform: require(3950) /* isTermsFormField */.UserVerificationFieldPlatforms.EMAIL };
    items[1] = callback(importDefault(9216), obj);
    const obj1 = { style: tmp.emailPhoneNote, variant: "heading-deprecated-12/medium", color: "text-default" };
    if (platform === require(3950) /* isTermsFormField */.UserVerificationFieldPlatforms.PHONE) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl2.string(require(1212) /* getSystemLocale */.t["jMh+TY"]);
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1212) /* getSystemLocale */.t.Vgv9ip);
    }
    obj1.children = stringResult;
    items[2] = callback(require(4126) /* Text */.Text, obj1);
    obj.children = items;
    return closure_5(closure_4, obj);
  }
};
