// Module ID: 7616
// Function ID: 61047
// Name: useUserIsTeen
// Dependencies: [1849, 566, 2]
// Exports: useUserIsTeen

// Module 7616 (useUserIsTeen)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/hooks/useUserIsTeen.tsx");

export const useUserIsTeen = function useUserIsTeen() {
  const items = [_isNativeReflectConstruct];
  return false === require(566) /* initialize */.useStateFromStores(items, () => {
    const currentUser = outer1_2.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
};
