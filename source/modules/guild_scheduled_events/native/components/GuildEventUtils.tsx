// Module ID: 8253
// Function ID: 66301
// Name: getEventLocationIconSource
// Dependencies: [8151, 8188, 4594, 8189, 2]
// Exports: getEventLocationIconComponent, getEventLocationIconSource

// Module 8253 (getEventLocationIconSource)
const result = require("getThreadChannelIcon").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventUtils.tsx");

export const getEventLocationIconSource = function getEventLocationIconSource(event, channel, stateFromStores2) {
  if (null != obj.getLocationFromEvent(event)) {
    let tmp = importDefault(8188);
  } else {
    tmp = null;
    if (null != channel) {
      const obj2 = require(4594) /* getThreadChannelIcon */;
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
    let LocationIcon = require(8189) /* LocationIcon */.LocationIcon;
  } else {
    LocationIcon = null;
    if (null != channel) {
      const obj2 = require(4594) /* getThreadChannelIcon */;
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
