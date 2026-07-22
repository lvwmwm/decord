// Module ID: 7610
// Function ID: 61010
// Name: useUserIsTeen
// Dependencies: []
// Exports: useUserIsTeen

// Module 7610 (useUserIsTeen)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/self_mod/hooks/useUserIsTeen.tsx");

export const useUserIsTeen = function useUserIsTeen() {
  const items = [closure_2];
  return false === arg1(dependencyMap[1]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
};
