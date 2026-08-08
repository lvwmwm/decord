// Module ID: 11144
// Function ID: 11145
// Dependencies: [5131, 3929, 676, 2]
// Exports: default

// Module 11144
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
