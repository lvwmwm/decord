// Module ID: 7916
// Function ID: 63124
// Name: useNSFWAllowed
// Dependencies: []
// Exports: useNSFWAllowed

// Module 7916 (useNSFWAllowed)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/user_settings/content_and_social/useNSFWAllowed.tsx");

export const useNSFWAllowed = function useNSFWAllowed() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
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
