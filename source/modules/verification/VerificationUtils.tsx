// Module ID: 9189
// Function ID: 71965
// Name: UserRequiredActions
// Dependencies: [653, 1212, 22, 2]

// Module 9189 (UserRequiredActions)
import ME from "ME";

let EMAIL;
let PHONE;
let REVERIFY_EMAIL;
let REVERIFY_PHONE;
const UserRequiredActions = ME.UserRequiredActions;
const VerificationTypes = ME.VerificationTypes;
({ EMAIL, PHONE, REVERIFY_EMAIL, REVERIFY_PHONE } = VerificationTypes);
const items = [EMAIL];
const items1 = [PHONE];
const items2 = [REVERIFY_EMAIL];
const items3 = [REVERIFY_PHONE];
const items4 = [EMAIL, PHONE];
const items5 = [PHONE, REVERIFY_EMAIL];
const items6 = [EMAIL, REVERIFY_PHONE];
const items7 = [REVERIFY_EMAIL, REVERIFY_PHONE];
const items8 = [VerificationTypes.CAPTCHA];
let closure_5 = { [UserRequiredActions.REQUIRE_VERIFIED_EMAIL]: items, [UserRequiredActions.REQUIRE_VERIFIED_PHONE]: items1, [UserRequiredActions.REQUIRE_REVERIFIED_EMAIL]: items2, [UserRequiredActions.REQUIRE_REVERIFIED_PHONE]: items3, [UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: items4, [UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: items5, [UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: items6, [UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: items7, [UserRequiredActions.REQUIRE_CAPTCHA]: items8, [UserRequiredActions.AGREEMENTS]: [], [UserRequiredActions.REQUIRE_SAFETY_FLOWS]: [] };
let result = require("apply").fileFinishedImporting("modules/verification/VerificationUtils.tsx");

export default {
  isPhoneReverification(currentUser, action) {
    let tmp = undefined !== currentUser && currentUser.isPhoneVerified();
    if (tmp) {
      let tmp3 = action === UserRequiredActions.REQUIRE_REVERIFIED_PHONE;
      if (!tmp3) {
        tmp3 = action === UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
      }
      if (!tmp3) {
        tmp3 = action === UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
      }
      tmp = tmp3;
    }
    return tmp;
  },
  isEmailReverification(stateFromStores1) {
    let tmp = stateFromStores1 === UserRequiredActions.REQUIRE_REVERIFIED_EMAIL;
    if (!tmp) {
      tmp = stateFromStores1 === UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
    }
    if (!tmp) {
      tmp = stateFromStores1 === UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE;
    }
    return tmp;
  },
  isFullScreenVerification(action) {
    const self = this;
    let result = action === UserRequiredActions.REQUIRE_CAPTCHA;
    if (!result) {
      result = action === UserRequiredActions.REQUIRE_VERIFIED_EMAIL;
    }
    if (!result) {
      result = action === UserRequiredActions.REQUIRE_VERIFIED_PHONE;
    }
    if (!result) {
      result = action === UserRequiredActions.REQUIRE_REVERIFIED_PHONE;
    }
    if (!result) {
      result = action === UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
    }
    if (!result) {
      result = action === UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
    }
    if (!result) {
      result = self.isEmailReverification(action);
    }
    return result;
  },
  getVerificationTypes(action) {
    if (null != action) {
      return [];
    }
  },
  getButtonTitle(arg0) {
    if (VerificationTypes.EMAIL === arg0) {
      const intl5 = require(1212) /* getSystemLocale */.intl;
      return intl5.string(require(1212) /* getSystemLocale */.t["1MPz27"]);
    } else if (VerificationTypes.PHONE === arg0) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      return intl4.string(require(1212) /* getSystemLocale */.t.mjJeco);
    } else if (VerificationTypes.REVERIFY_EMAIL === arg0) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      return intl3.string(require(1212) /* getSystemLocale */.t.nmdPFX);
    } else if (VerificationTypes.REVERIFY_PHONE === arg0) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      return intl2.string(require(1212) /* getSystemLocale */.t.of2125);
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t["oF6+Ww"]);
    }
  },
  areVerificationTypesEqual(arg0, arg1) {
    return importDefault(22).isEqual(arg0, arg1);
  }
};
