// Module ID: 8342
// Function ID: 66434
// Name: _getLocationFromEvent
// Dependencies: []
// Exports: getChannelFromEvent, getChannelTypeFromEntity, getLocationFromEvent, getLocationFromEventData

// Module 8342 (_getLocationFromEvent)
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
let closure_0 = importDefault(dependencyMap[0]);
({ GuildScheduledEventEntityTypes: closure_1, EntityChannelTypes: closure_2 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/guild_scheduled_events/utils/EntityUtils.tsx");

export const getChannelFromEvent = function getChannelFromEvent(entity_type) {
  let tmp2 = entity_type.entity_type in closure_2;
  if (tmp2) {
    tmp2 = null != tmp;
  }
  let tmp4;
  if (tmp2) {
    const channel = channel.getChannel(entity_type.channel_id);
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
    const tmp2 = closure_2[entityType];
  }
  return tmp2;
};
