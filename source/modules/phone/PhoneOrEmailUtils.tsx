// Module ID: 9251
// Function ID: 72330
// Name: PhoneOrEmailSelectorForceMode
// Dependencies: [2]
// Exports: getPhoneOrEmail, shouldShowCountryCodeSelector

// Module 9251 (PhoneOrEmailSelectorForceMode)
let obj = { PHONE: "phone", EMAIL: "email" };
const re1 = /^[-() \d]+$/;
const result = require("set").fileFinishedImporting("modules/phone/PhoneOrEmailUtils.tsx");

export const PhoneOrEmailSelectorForceMode = obj;
export const shouldShowCountryCodeSelector = function shouldShowCountryCodeSelector(forceMode, value) {
  if (forceMode === obj.PHONE) {
    let tmp2 = !value.startsWith("+");
  } else {
    tmp2 = forceMode !== obj.EMAIL;
    if (tmp2) {
      let isMatch = !tmp3;
      if (value.length >= 3) {
        isMatch = regex.test(value);
      }
      tmp2 = isMatch;
    }
  }
  return tmp2;
};
export const getPhoneOrEmail = function getPhoneOrEmail(arg0) {
  const obj = /^\+\d/;
  return obj.test(arg0) ? obj.PHONE : obj.EMAIL;
};
