// Module ID: 8362
// Function ID: 8363
// Name: canAddNewReactions
// Dependencies: [6671, 4936, 1084, 2]
// Exports: default

// Module 8362 (canAddNewReactions)
import Constants from "Constants" /* 1084 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6671 */;
import PermissionStore from "PermissionStore" /* 4936 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
