// Module ID: 8589
// Function ID: 8590
// Name: canAddNewReactions
// Dependencies: [6412, 4726, 1071, 2]
// Exports: default

// Module 8589 (canAddNewReactions)
import Constants from "Constants" /* 1071 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6412 */;
import PermissionStore from "PermissionStore" /* 4726 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
