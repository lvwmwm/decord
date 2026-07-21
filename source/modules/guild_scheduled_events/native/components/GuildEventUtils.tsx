// Module ID: 8442
// Function ID: 67358
// Name: getEventLocationIconSource
// Dependencies: []
// Exports: getEventLocationIconComponent, getEventLocationIconSource

// Module 8442 (getEventLocationIconSource)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventUtils.tsx");

export const getEventLocationIconSource = function getEventLocationIconSource(event, channel, stateFromStores2) {
  if (null != obj.getLocationFromEvent(event)) {
    let tmp = importDefault(dependencyMap[1]);
  } else {
    tmp = null;
    if (null != channel) {
      const obj2 = require(dependencyMap[2]);
      if (stateFromStores2) {
        let channelIcon = obj2.getChannelIcon(channel);
      } else {
        channelIcon = obj2.getSimpleChannelIcon(channel);
      }
    }
  }
  return tmp;
};
export const getEventLocationIconComponent = function getEventLocationIconComponent(event, channel, stateFromStores1) {
  if (null != obj.getLocationFromEvent(event)) {
    let LocationIcon = require(dependencyMap[3]).LocationIcon;
  } else {
    LocationIcon = null;
    if (null != channel) {
      const obj2 = require(dependencyMap[2]);
      if (stateFromStores1) {
        let channelIconComponent = obj2.getChannelIconComponent(channel);
      } else {
        channelIconComponent = obj2.getSimpleChannelIconComponent(channel);
      }
      LocationIcon = null;
      if (null != channelIconComponent) {
        LocationIcon = channelIconComponent;
      }
    }
  }
  return LocationIcon;
};
