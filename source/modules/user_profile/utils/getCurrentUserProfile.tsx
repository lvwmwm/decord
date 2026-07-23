// Module ID: 9781
// Function ID: 76052
// Name: getCurrentUserProfile
// Dependencies: [1849, 6856, 2]
// Exports: default

// Module 9781 (getCurrentUserProfile)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/user_profile/utils/getCurrentUserProfile.tsx");

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
