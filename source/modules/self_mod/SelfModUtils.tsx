// Module ID: 5664
// Function ID: 48657
// Name: isCurrentUserTeen
// Dependencies: []
// Exports: isCurrentUserTeen

// Module 5664 (isCurrentUserTeen)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/self_mod/SelfModUtils.tsx");

export const isCurrentUserTeen = function isCurrentUserTeen() {
  const currentUser = currentUser.getCurrentUser();
  let nsfwAllowed;
  if (null != currentUser) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};
