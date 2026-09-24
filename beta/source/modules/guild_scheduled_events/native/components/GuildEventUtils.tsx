// Module ID: 9876
// Function ID: 9877
// Name: GuildEventUtils
// Dependencies: [9798, 9808, 5273, 9809, 2]
// Exports: getEventLocationIconComponent, getEventLocationIconSource

// Module 9876 (GuildEventUtils)
import utils_ChannelUtils from "utils/ChannelUtils" /* 5273 */;
import _modDef9808 from "module_9808" /* 9808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventUtils.tsx");

export const getEventLocationIconSource = function getEventLocationIconSource(event, channel, stateFromStores2) {
  if (null != obj.getLocationFromEvent(event)) {
    let tmp4 = _modDef9808;
  } else {
    tmp4 = null;
    if (null != channel) {
      const tmpResult = utils_ChannelUtils;
      if (stateFromStores2) {
        let channelIcon = tmpResult.getChannelIcon(channel);
      } else {
        channelIcon = tmpResult.getSimpleChannelIcon(channel);
      }
    }
  }
  return tmp4;
};
export const getEventLocationIconComponent = function getEventLocationIconComponent(event, stateFromStores, stateFromStores1) {
  if (null != obj.getLocationFromEvent(event)) {
    let LocationIcon = tmp(9809).LocationIcon;
  } else {
    LocationIcon = null;
    if (null != stateFromStores) {
      const tmpResult = tmp(5273);
      if (stateFromStores1) {
        let channelIconComponent = tmpResult.getChannelIconComponent(stateFromStores);
      } else {
        channelIconComponent = tmpResult.getSimpleChannelIconComponent(stateFromStores);
      }
      if (channelIconComponent == null) {
        channelIconComponent = null;
      }
      LocationIcon = channelIconComponent;
    }
  }
  return LocationIcon;
};
