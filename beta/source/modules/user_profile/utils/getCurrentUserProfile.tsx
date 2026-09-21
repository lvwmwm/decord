// Module ID: 11386
// Function ID: 11387
// Name: getCurrentUserProfile
// Dependencies: [1376, 7862, 2]
// Exports: default

// Module 11386 (getCurrentUserProfile)
import UserStore from "UserStore" /* 1376 */;
import UserProfileStore from "UserProfileStore" /* 7862 */;

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
