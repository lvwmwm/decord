// Module ID: 5679
// Function ID: 48786
// Name: useNSFWAllowed
// Dependencies: [1850, 566, 2]
// Exports: useNSFWAllowed

// Module 5679 (useNSFWAllowed)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/content_and_social/useNSFWAllowed.tsx");

export const useNSFWAllowed = function useNSFWAllowed() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    const currentUser = outer1_2.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    let tmp3 = null;
    if (null != nsfwAllowed) {
      tmp3 = nsfwAllowed;
    }
    return tmp3;
  });
};
