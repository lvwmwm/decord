// Module ID: 11078
// Function ID: 11079
// Dependencies: [5130, 3929, 676, 2]
// Exports: default

// Module 11078
import recomputeGuild from "recomputeGuild";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";

const result = require("ME").fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  let canChatInGuildResult = null != guildId;
  if (canChatInGuildResult) {
    canChatInGuildResult = recomputeGuild.canChatInGuild(guildId);
  }
  if (canChatInGuildResult) {
    canChatInGuildResult = getUncachedChannelPermissions.can(Permissions.ADD_REACTIONS, getGuildId);
  }
  if (!canChatInGuildResult) {
    canChatInGuildResult = getGuildId.isPrivate();
  }
  return canChatInGuildResult;
};
