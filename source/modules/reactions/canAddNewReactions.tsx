// Module ID: 7880
// Function ID: 7881
// Dependencies: [5357, 4121, 676, 2]
// Exports: default

// Module 7880
import closure_0 from "recomputeGuild" /* 5357 */;
import closure_1 from "getUncachedChannelPermissions" /* 4121 */;
import { Permissions } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  let canChatInGuildResult = null != guildId;
  if (canChatInGuildResult) {
    canChatInGuildResult = closure_0.canChatInGuild(guildId);
  }
  if (canChatInGuildResult) {
    canChatInGuildResult = closure_1.can(Permissions.ADD_REACTIONS, getGuildId);
  }
  if (!canChatInGuildResult) {
    canChatInGuildResult = getGuildId.isPrivate();
  }
  if (canChatInGuildResult) {
    canChatInGuildResult = !getGuildId.isSystemDM();
  }
  return canChatInGuildResult;
};
