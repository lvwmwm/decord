// Module ID: 7413
// Function ID: 7414
// Name: canAddNewReactions
// Dependencies: [5725, 4469, 1074, 2]
// Exports: default

// Module 7413 (canAddNewReactions)
import Constants from "Constants" /* 1074 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5725 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
