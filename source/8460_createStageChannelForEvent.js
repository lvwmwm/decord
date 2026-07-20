// Module ID: 8460
// Function ID: 67496
// Name: createStageChannelForEvent
// Dependencies: []
// Exports: preStartEventActions, setEventAsActive

// Module 8460 (createStageChannelForEvent)
function createStageChannelForEvent(guild, name, arg2) {
  return _createStageChannelForEvent(...arguments);
}
function _createStageChannelForEvent() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _createStageChannelForEvent = obj;
  return obj(...arguments);
}
function findOrCreateEventChannel(guild_id) {
  const guild = guild.getGuild(guild_id.guild_id);
  if (null == guild) {
    return Promise.resolve(null);
  } else {
    const channel = channel.getChannel(guild_id.channel_id);
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
  const _preStartEventActions = obj;
  return obj(...arguments);
}
function _setEventAsActive() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _setEventAsActive = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).createChannelRecordFromServer;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ GuildScheduledEventEntityTypes: closure_7, GuildScheduledEventPrivacyLevel: closure_8 } = arg1(dependencyMap[4]));
const ChannelTypes = arg1(dependencyMap[5]).ChannelTypes;
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_scheduled_events/StartEventUtils.tsx");

export { createStageChannelForEvent };
export { findOrCreateEventChannel };
export const preStartEventActions = function preStartEventActions(arg0, permissionOverwrites) {
  return _preStartEventActions(...arguments);
};
export const setEventAsActive = function setEventAsActive(arg0, arg1) {
  return _setEventAsActive(...arguments);
};
