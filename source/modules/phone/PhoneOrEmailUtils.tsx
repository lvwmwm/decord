// Module ID: 9208
// Function ID: 72080
// Name: PhoneOrEmailSelectorForceMode
// Dependencies: []
// Exports: getPhoneOrEmail, shouldShowCountryCodeSelector

// Module 9208 (PhoneOrEmailSelectorForceMode)
const obj = { PHONE: "phone", EMAIL: "email" };
let closure_1 = /^[-() \d]+$/;
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/phone/PhoneOrEmailUtils.tsx");

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
