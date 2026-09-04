// Module ID: 7902
// Function ID: 7903
// Dependencies: [5374, 4120, 673, 2]
// Exports: default

// Module 7902
import closure_0 from "recomputeGuild" /* 5374 */;
import closure_1 from "getUncachedChannelPermissions" /* 4120 */;
import { Permissions } from "ME" /* 673 */;

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
