// Module ID: 11384
// Function ID: 11385
// Name: getCurrentUserProfile
// Dependencies: [1372, 7889, 2]
// Exports: default

// Module 11384 (getCurrentUserProfile)
import UserStore from "UserStore" /* 1372 */;
import UserProfileStore from "UserProfileStore" /* 7889 */;

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
