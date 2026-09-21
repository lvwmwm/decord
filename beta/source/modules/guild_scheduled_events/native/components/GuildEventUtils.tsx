// Module ID: 9844
// Function ID: 9845
// Name: GuildEventUtils
// Dependencies: [9766, 9776, 5241, 9777, 2]
// Exports: getEventLocationIconComponent, getEventLocationIconSource

// Module 9844 (GuildEventUtils)
import utils_ChannelUtils from "utils/ChannelUtils" /* 5241 */;
import _modDef9776 from "module_9776" /* 9776 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventUtils.tsx");

export const getEventLocationIconSource = function getEventLocationIconSource(event, channel, stateFromStores2) {
  if (null != obj.getLocationFromEvent(event)) {
    let tmp4 = _modDef9776;
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
    let LocationIcon = tmp(9777).LocationIcon;
  } else {
    LocationIcon = null;
    if (null != stateFromStores) {
      const tmpResult = tmp(5241);
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
