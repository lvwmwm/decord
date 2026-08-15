// Module ID: 10911
// Function ID: 10912
// Dependencies: [4977, 4021, 676, 2]
// Exports: default

// Module 10911
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
