// Module ID: 9084
// Function ID: 9085
// Name: EntityUtils
// Dependencies: [5019, 5025, 2]
// Exports: getChannelFromEvent, getChannelTypeFromEntity, getLocationFromEvent, getLocationFromEventData

// Module 9084 (EntityUtils)
import ChannelStore from "ChannelStore" /* 5019 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 5025 */;
import size from "module_2" /* 2 */;

let c2;
let map;
({ GuildScheduledEventEntityTypes: map, EntityChannelTypes: c2 } = GuildScheduledEventsConstants);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/utils/EntityUtils.tsx");

export function getChannelFromEvent(entity_type) {
  let tmp4;
  const tmp2 = entity_type.entity_type in React2 && null != tmp;
  if (tmp2) {
    const channel = ChannelStore.getChannel(entity_type.channel_id);
    tmp4 = channel;
  }
  return tmp4;
}
export function getLocationFromEvent(event) {
  const entity_metadata = event.entity_metadata;
  let _location = null;
  const tmp = event.entity_type === map.EXTERNAL && null != entity_metadata && "location" in entity_metadata;
  if (tmp) {
    _location = entity_metadata.location;
  }
  return _location;
}
export function getLocationFromEventData(guildEvent) {
  const entityMetadata = guildEvent.entityMetadata;
  let _location = null;
  const tmp = guildEvent.entityType === map.EXTERNAL && null != entityMetadata && "location" in entityMetadata;
  if (tmp) {
    _location = entityMetadata.location;
  }
  return _location;
}
export function getChannelTypeFromEntity(entityType) {
  let tmp2;
  if (entityType === map.VOICE) {
    tmp2 = React2[entityType];
  }
  return tmp2;
}
