// Module ID: 8233
// Function ID: 8234
// Name: canAddNewReactions
// Dependencies: [5632, 4396, 1074, 2]
// Exports: default

// Module 8233 (canAddNewReactions)
import GuildVerificationStore from "GuildVerificationStore" /* 5632 */;
import PermissionStore from "PermissionStore" /* 4396 */;

const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  let canChatInGuildResult = null != guildId;
  if (canChatInGuildResult) {
    canChatInGuildResult = GuildVerificationStore.canChatInGuild(guildId);
  }
  if (canChatInGuildResult) {
    canChatInGuildResult = PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId);
  }
  if (!canChatInGuildResult) {
    canChatInGuildResult = getGuildId.isPrivate();
  }
  if (canChatInGuildResult) {
    canChatInGuildResult = !getGuildId.isSystemDM();
  }
  return canChatInGuildResult;
};
