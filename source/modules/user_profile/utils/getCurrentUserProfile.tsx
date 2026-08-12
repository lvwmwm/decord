// Module ID: 10180
// Function ID: 10181
// Name: getCurrentUserProfile
// Dependencies: [1922, 7122, 2]
// Exports: default

// Module 10180 (getCurrentUserProfile)
import mergeGuildAvatar from "mergeGuildAvatar";
import createUserWidgetFromServer from "createUserWidgetFromServer";

const result = require("set").fileFinishedImporting("modules/user_profile/utils/getCurrentUserProfile.tsx");

export default function getCurrentUserProfile(guildId) {
  let id = currentUser.getCurrentUser();
  if (null == id) {
    return null;
  } else if (null != guildId) {
    id = id.id;
    let guildMemberProfile = authStore.getGuildMemberProfile(id, guildId);
  } else {
    guildMemberProfile = authStore.getUserProfile(id.id);
  }
};
