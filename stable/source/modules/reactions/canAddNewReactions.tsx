// Module ID: 8533
// Function ID: 8534
// Name: canAddNewReactions
// Dependencies: [6795, 5102, 1072, 2]
// Exports: default

// Module 8533 (canAddNewReactions)
import Constants from "Constants" /* 1072 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6795 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
