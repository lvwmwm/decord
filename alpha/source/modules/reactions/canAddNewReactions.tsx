// Module ID: 7962
// Function ID: 7963
// Name: canAddNewReactions
// Dependencies: [5887, 4707, 1085, 2]
// Exports: default

// Module 7962 (canAddNewReactions)
import Constants from "Constants" /* 1085 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5887 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
