// Module ID: 9077
// Function ID: 9078
// Name: getEventLocationIconSource
// Dependencies: [8990, 9017, 4804, 9018, 2]
// Exports: getEventLocationIconComponent, getEventLocationIconSource

// Module 9077 (getEventLocationIconSource)
const result = require("getChannelIcon").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventUtils.tsx");

export const getEventLocationIconSource = function getEventLocationIconSource(event, channel, stateFromStores2) {
  if (null != obj.getLocationFromEvent(event)) {
    let tmp4 = importDefault(9017);
  } else {
    tmp4 = null;
    if (null != channel) {
      const tmpResult = require(4804) /* getChannelIcon */;
      if (stateFromStores2) {
        let channelIcon = tmpResult.getChannelIcon(channel);
      } else {
        channelIcon = tmpResult.getSimpleChannelIcon(channel);
      }
    }
  }
  return tmp4;
};
export const getEventLocationIconComponent = function getEventLocationIconComponent(event, channel, stateFromStores1) {
  if (null != obj.getLocationFromEvent(event)) {
    let LocationIcon = tmp(9018).LocationIcon;
  } else {
    LocationIcon = null;
    if (null != channel) {
      const tmpResult = tmp(4804);
      if (stateFromStores1) {
        let channelIconComponent = tmpResult.getChannelIconComponent(channel);
      } else {
        channelIconComponent = tmpResult.getSimpleChannelIconComponent(channel);
      }
      if (channelIconComponent == null) {
        channelIconComponent = null;
      }
      LocationIcon = channelIconComponent;
    }
  }
  return LocationIcon;
};
