// Module ID: 7826
// Function ID: 7827
// Dependencies: [5322, 4090, 676, 2]
// Exports: default

// Module 7826
import closure_0 from "recomputeGuild" /* 5322 */;
import closure_1 from "getUncachedChannelPermissions" /* 4090 */;
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
