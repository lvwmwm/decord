// Module ID: 10966
// Function ID: 10967
// Name: getCurrentUserProfile
// Dependencies: [1392, 7586, 2]
// Exports: default

// Module 10966 (getCurrentUserProfile)
import UserStore from "UserStore" /* 1392 */;
import UserProfileStore from "UserProfileStore" /* 7586 */;
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
