// Module ID: 8327
// Function ID: 8328
// Name: canAddNewReactions
// Dependencies: [6634, 4901, 1087, 2]
// Exports: default

// Module 8327 (canAddNewReactions)
import Constants from "Constants" /* 1087 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6634 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
