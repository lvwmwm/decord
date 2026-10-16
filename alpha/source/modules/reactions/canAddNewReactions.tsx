// Module ID: 8211
// Function ID: 8212
// Name: canAddNewReactions
// Dependencies: [6110, 4809, 1087, 2]
// Exports: default

// Module 8211 (canAddNewReactions)
import Constants from "Constants" /* 1087 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6110 */;
import PermissionStore from "PermissionStore" /* 4809 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
