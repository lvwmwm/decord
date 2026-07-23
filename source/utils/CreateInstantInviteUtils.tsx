// Module ID: 16489
// Function ID: 128513
// Name: getInvitableChannelForGuild
// Dependencies: [1907, 3758, 653, 2]
// Exports: getInvitableChannelForGuild

// Module 16489 (getInvitableChannelForGuild)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_2 from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

let closure_0;
let closure_1;
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_0, GUILD_VOCAL_CHANNELS_KEY: closure_1 } = _isNativeReflectConstruct);
const result = require("ME").fileFinishedImporting("utils/CreateInstantInviteUtils.tsx");

export const getInvitableChannelForGuild = function getInvitableChannelForGuild(guildId) {
  channels = channels.getChannels(guildId);
  const items = [...channels[closure_1]];
  return items.find((channel) => outer1_3.can(outer1_4.CREATE_INSTANT_INVITE, channel.channel));
};
