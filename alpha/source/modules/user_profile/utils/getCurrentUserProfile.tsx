// Module ID: 10650
// Function ID: 10651
// Name: getCurrentUserProfile
// Dependencies: [1390, 7327, 2]
// Exports: default

// Module 10650 (getCurrentUserProfile)
import UserStore from "UserStore" /* 1390 */;
import UserProfileStore from "UserProfileStore" /* 7327 */;
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
