// Module ID: 9510
// Function ID: 9511
// Name: canAddNewReactions
// Dependencies: [6768, 4944, 1071, 2]
// Exports: default

// Module 9510 (canAddNewReactions)
import Constants from "Constants" /* 1071 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6768 */;
import PermissionStore from "PermissionStore" /* 4944 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
