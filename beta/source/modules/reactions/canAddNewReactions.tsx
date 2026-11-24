// Module ID: 8709
// Function ID: 8710
// Name: canAddNewReactions
// Dependencies: [6531, 4845, 1071, 2]
// Exports: default

// Module 8709 (canAddNewReactions)
import Constants from "Constants" /* 1071 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6531 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
