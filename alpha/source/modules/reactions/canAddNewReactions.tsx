// Module ID: 7989
// Function ID: 7990
// Name: canAddNewReactions
// Dependencies: [5891, 4750, 1085, 2]
// Exports: default

// Module 7989 (canAddNewReactions)
import Constants from "Constants" /* 1085 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5891 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
