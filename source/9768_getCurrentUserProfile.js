// Module ID: 9768
// Function ID: 75971
// Name: getCurrentUserProfile
// Dependencies: []
// Exports: default

// Module 9768 (getCurrentUserProfile)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/user_profile/utils/getCurrentUserProfile.tsx");

export default function getCurrentUserProfile(arg0) {
  let id = currentUser.getCurrentUser();
  if (null == id) {
    return null;
  } else if (null != arg0) {
    id = id.id;
    let guildMemberProfile = authStore.getGuildMemberProfile(id, arg0);
  } else {
    guildMemberProfile = authStore.getUserProfile(id.id);
  }
};
