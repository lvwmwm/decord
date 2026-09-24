// Module ID: 8266
// Function ID: 8267
// Name: canAddNewReactions
// Dependencies: [5664, 4431, 1078, 2]
// Exports: default

// Module 8266 (canAddNewReactions)
import GuildVerificationStore from "GuildVerificationStore" /* 5664 */;
import PermissionStore from "PermissionStore" /* 4431 */;

const Permissions = fn(1078).Permissions;
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
