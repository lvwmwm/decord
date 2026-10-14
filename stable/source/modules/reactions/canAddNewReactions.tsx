// Module ID: 7630
// Function ID: 7631
// Name: canAddNewReactions
// Dependencies: [5570, 4509, 1085, 2]
// Exports: default

// Module 7630 (canAddNewReactions)
import Constants from "Constants" /* 1085 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5570 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
