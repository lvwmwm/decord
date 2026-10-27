// Module ID: 11190
// Function ID: 11191
// Name: getCurrentUserProfile
// Dependencies: [1389, 7704, 2]
// Exports: default

// Module 11190 (getCurrentUserProfile)
import UserStore from "UserStore" /* 1389 */;
import UserProfileStore from "UserProfileStore" /* 7704 */;
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
