// Module ID: 16723
// Function ID: 16724
// Name: getInvitableChannelForGuild
// Dependencies: [1932, 3883, 676, 2]
// Exports: getInvitableChannelForGuild

// Module 16723 (getInvitableChannelForGuild)
import comparator from "comparator";
import closure_2 from "comparator";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";

let c0;
let closure_1;
({ GUILD_SELECTABLE_CHANNELS_KEY: c0, GUILD_VOCAL_CHANNELS_KEY: closure_1 } = comparator);
const result = require("ME").fileFinishedImporting("utils/CreateInstantInviteUtils.tsx");

export const getInvitableChannelForGuild = function getInvitableChannelForGuild(guildId) {
  channels = channels.getChannels(guildId);
  const items = [...channels[closure_1]];
  return items.find((channel) => getUncachedChannelPermissions.can(constants.CREATE_INSTANT_INVITE, channel.channel));
};
