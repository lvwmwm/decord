// Module ID: 10541
// Function ID: 10542
// Name: getCurrentUserProfile
// Dependencies: [1372, 7030, 2]
// Exports: default

// Module 10541 (getCurrentUserProfile)
import UserStore from "UserStore" /* 1372 */;
import UserProfileStore from "UserProfileStore" /* 7030 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/utils/getCurrentUserProfile.tsx");

export default function getCurrentUserProfile(guildId) {
  let id = UserStore.getCurrentUser();
  if (null == id) {
    return null;
  } else if (null != guildId) {
    id = id.id;
    let guildMemberProfile = UserProfileStore.getGuildMemberProfile(id, guildId);
  } else {
    guildMemberProfile = UserProfileStore.getUserProfile(id.id);
  }
};
