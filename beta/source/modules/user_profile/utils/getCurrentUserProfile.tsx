// Module ID: 11422
// Function ID: 11423
// Name: getCurrentUserProfile
// Dependencies: [1376, 7894, 2]
// Exports: default

// Module 11422 (getCurrentUserProfile)
import UserStore from "UserStore" /* 1376 */;
import UserProfileStore from "UserProfileStore" /* 7894 */;

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
