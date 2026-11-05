// Module ID: 8575
// Function ID: 8576
// Name: canAddNewReactions
// Dependencies: [6846, 5075, 1072, 2]
// Exports: default

// Module 8575 (canAddNewReactions)
import Constants from "Constants" /* 1072 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6846 */;
import PermissionStore from "PermissionStore" /* 5075 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
