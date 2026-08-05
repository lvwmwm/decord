// Module ID: 8926
// Function ID: 8927
// Name: getEventLocationIconSource
// Dependencies: [8839, 8866, 4715, 8867, 2]
// Exports: getEventLocationIconComponent, getEventLocationIconSource

// Module 8926 (getEventLocationIconSource)
const result = require("getChannelIcon").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventUtils.tsx");

export const getEventLocationIconSource = function getEventLocationIconSource(event, channel, stateFromStores2) {
  if (null != obj.getLocationFromEvent(event)) {
    let tmp4 = importDefault(8866);
  } else {
    tmp4 = null;
    if (null != channel) {
      const tmpResult = require(4715) /* getChannelIcon */;
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
    let LocationIcon = tmp(8867).LocationIcon;
  } else {
    LocationIcon = null;
    if (null != channel) {
      const tmpResult = tmp(4715);
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
