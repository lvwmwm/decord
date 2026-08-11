// Module ID: 9038
// Function ID: 9039
// Name: getEventLocationIconSource
// Dependencies: [8951, 8978, 4764, 8979, 2]
// Exports: getEventLocationIconComponent, getEventLocationIconSource

// Module 9038 (getEventLocationIconSource)
const result = require("getChannelIcon").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventUtils.tsx");

export const getEventLocationIconSource = function getEventLocationIconSource(event, channel, stateFromStores2) {
  if (null != obj.getLocationFromEvent(event)) {
    let tmp4 = importDefault(8978);
  } else {
    tmp4 = null;
    if (null != channel) {
      const tmpResult = require(4764) /* getChannelIcon */;
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
    let LocationIcon = tmp(8979).LocationIcon;
  } else {
    LocationIcon = null;
    if (null != channel) {
      const tmpResult = tmp(4764);
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
