// Module ID: 9423
// Function ID: 9424
// Name: getCurrentUserProfile
// Dependencies: [1386, 6956, 2]
// Exports: default

// Module 9423 (getCurrentUserProfile)
import UserStore from "UserStore" /* 1386 */;
import UserProfileStore from "UserProfileStore" /* 6956 */;
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
