// Module ID: 9133
// Function ID: 9134
// Name: canAddNewReactions
// Dependencies: [6874, 5175, 1072, 2]
// Exports: default

// Module 9133 (canAddNewReactions)
import Constants from "Constants" /* 1072 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6874 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
