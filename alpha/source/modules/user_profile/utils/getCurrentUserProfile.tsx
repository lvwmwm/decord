// Module ID: 11654
// Function ID: 11655
// Name: getCurrentUserProfile
// Dependencies: [1385, 7896, 2]
// Exports: default

// Module 11654 (getCurrentUserProfile)
import UserStore from "UserStore" /* 1385 */;
import UserProfileStore from "UserProfileStore" /* 7896 */;
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
