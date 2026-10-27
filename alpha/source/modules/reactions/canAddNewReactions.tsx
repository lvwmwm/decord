// Module ID: 8328
// Function ID: 8329
// Name: canAddNewReactions
// Dependencies: [6637, 4904, 1084, 2]
// Exports: default

// Module 8328 (canAddNewReactions)
import Constants from "Constants" /* 1084 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6637 */;
import PermissionStore from "PermissionStore" /* 4904 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
