// Module ID: 10033
// Function ID: 10034
// Name: getCurrentUserProfile
// Dependencies: [1388, 7352, 2]
// Exports: default

// Module 10033 (getCurrentUserProfile)
import UserStore from "UserStore" /* 1388 */;
import UserProfileStore from "UserProfileStore" /* 7352 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/getCurrentUserProfile.tsx");

export default function getCurrentUserProfile(guildId) {
  const currentUser = UserStore.getCurrentUser();
  let tmp2 = null;
  if (null != currentUser) {
    let guildMemberProfile;
    if (null != guildId) {
      guildMemberProfile = UserProfileStore.getGuildMemberProfile(currentUser.id, guildId);
    } else {
      guildMemberProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    tmp2 = guildMemberProfile;
  }
  return tmp2;
};
