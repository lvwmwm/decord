// Module ID: 8393
// Function ID: 66722
// Name: _getLocationFromEvent
// Dependencies: [1348, 1354, 2]
// Exports: getChannelFromEvent, getChannelTypeFromEntity, getLocationFromEvent, getLocationFromEventData

// Module 8393 (_getLocationFromEvent)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";

let closure_1;
let closure_2;
function _getLocationFromEvent(entityType, entityMetadata) {
  let tmp = entityType === constants.EXTERNAL;
  if (tmp) {
    tmp = null != entityMetadata;
  }
  if (tmp) {
    tmp = "location" in entityMetadata;
  }
  let _location = null;
  if (tmp) {
    _location = entityMetadata.location;
  }
  return _location;
}
({ GuildScheduledEventEntityTypes: closure_1, EntityChannelTypes: closure_2 } = GUILD_EVENT_MAX_NAME_LENGTH);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/utils/EntityUtils.tsx");

export const getChannelFromEvent = function getChannelFromEvent(entity_type) {
  let tmp2 = entity_type.entity_type in closure_2;
  if (tmp2) {
    tmp2 = null != tmp;
  }
  let tmp4;
  if (tmp2) {
    channel = channel.getChannel(entity_type.channel_id);
    let tmp8;
    if (null != channel) {
      tmp8 = channel;
    }
    tmp4 = tmp8;
  }
  return tmp4;
};
export const getLocationFromEvent = function getLocationFromEvent(event) {
  return _getLocationFromEvent(event.entity_type, event.entity_metadata);
};
export const getLocationFromEventData = function getLocationFromEventData(guildEvent) {
  return _getLocationFromEvent(guildEvent.entityType, guildEvent.entityMetadata);
};
export const getChannelTypeFromEntity = function getChannelTypeFromEntity(entityType) {
  if (entityType === constants.VOICE) {
    const tmp2 = table[entityType];
  }
  return tmp2;
};
