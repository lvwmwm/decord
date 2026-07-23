// Module ID: 8471
// Function ID: 67568
// Name: createStageChannelForEvent
// Dependencies: [5, 1352, 1348, 1838, 1354, 653, 8411, 44, 7490, 8344, 2]
// Exports: preStartEventActions, setEventAsActive

// Module 8471 (createStageChannelForEvent)
import ME from "ME";
import { createChannelRecordFromServer as closure_4 } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import { ChannelTypes } from "ME";

let closure_7;
let closure_8;
const require = arg1;
function createStageChannelForEvent(guild, name, arg2) {
  return _createStageChannelForEvent(...arguments);
}
function _createStageChannelForEvent() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function findOrCreateEventChannel(guild_id) {
  guild = guild.getGuild(guild_id.guild_id);
  if (null == guild) {
    return Promise.resolve(null);
  } else {
    channel = channel.getChannel(guild_id.channel_id);
    if (null == channel) {
      let resolved = createStageChannelForEvent(guild, guild_id.name, arg1);
    } else {
      resolved = Promise.resolve(channel);
    }
    return resolved;
  }
}
function _preStartEventActions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _setEventAsActive() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ GuildScheduledEventEntityTypes: closure_7, GuildScheduledEventPrivacyLevel: closure_8 } = GUILD_EVENT_MAX_NAME_LENGTH);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/StartEventUtils.tsx");

export { createStageChannelForEvent };
export { findOrCreateEventChannel };
export const preStartEventActions = function preStartEventActions(arg0, permissionOverwrites) {
  return _preStartEventActions(...arguments);
};
export const setEventAsActive = function setEventAsActive(arg0, arg1) {
  return _setEventAsActive(...arguments);
};
