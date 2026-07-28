// Module ID: 11044
// Function ID: 85676
// Name: useUserIsConsideredAdult
// Dependencies: [1850, 566, 2]
// Exports: default

// Module 11044 (useUserIsConsideredAdult)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsConsideredAdult.tsx");

export default function useUserIsConsideredAdult() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    const currentUser = outer1_2.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
};
