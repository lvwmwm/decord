// Module ID: 6382
// Function ID: 6383
// Name: PhoneOrEmailUtils
// Dependencies: [2]
// Exports: getPhoneOrEmail, shouldShowCountryCodeSelector

// Module 6382 (PhoneOrEmailUtils)
import size from "module_2" /* 2 */;

const PhoneOrEmailSelectorForceMode = { PHONE: "phone", EMAIL: "email" };
const re1 = /^[-() \d]+$/;
const result = size.fileFinishedImporting("modules/phone/PhoneOrEmailUtils.tsx");

export { PhoneOrEmailSelectorForceMode };
export const shouldShowCountryCodeSelector = function shouldShowCountryCodeSelector(forceMode, value) {
  let tmp2;
  if (forceMode === obj.PHONE) {
    tmp2 = !value.startsWith("+");
  } else {
    tmp2 = forceMode !== tmp.EMAIL;
    if (tmp2) {
      const isMatch = value.length >= 3 && re1.test(value);
      tmp2 = isMatch;
    }
  }
  return tmp2;
};
export const getPhoneOrEmail = function getPhoneOrEmail(arg0) {
  const obj = /^\+\d/;
  return obj.test(arg0) ? obj.PHONE : obj.EMAIL;
};
