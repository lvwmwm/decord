// Module ID: 9553
// Function ID: 9554
// Name: canAddNewReactions
// Dependencies: [6799, 4975, 1071, 2]
// Exports: default

// Module 9553 (canAddNewReactions)
import Constants from "Constants" /* 1071 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6799 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
