// Module ID: 7417
// Function ID: 7418
// Name: canAddNewReactions
// Dependencies: [5726, 4472, 1086, 2]
// Exports: default

// Module 7417 (canAddNewReactions)
import Constants from "Constants" /* 1086 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5726 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
