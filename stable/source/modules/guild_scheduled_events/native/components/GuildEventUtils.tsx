// Module ID: 9258
// Function ID: 9259
// Name: GuildEventUtils
// Dependencies: [9180, 9190, 5812, 9191, 2]
// Exports: getEventLocationIconComponent, getEventLocationIconSource

// Module 9258 (GuildEventUtils)
import EntityUtils from "EntityUtils" /* 9180 */;
import AssetRegistryDefault from "AssetRegistry" /* 9190 */;
import size from "module_2" /* 2 */;

let tmp;
const utils_ChannelUtils = tmp(5812);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventUtils.tsx");

export const getEventLocationIconSource = function getEventLocationIconSource(event, channel, stateFromStores2) {
  let tmp4;
  const obj = EntityUtils;
  if (null != obj.getLocationFromEvent(event)) {
    tmp4 = AssetRegistryDefault;
  } else {
    tmp4 = null;
    if (null != channel) {
      let channelIcon;
      const tmpResult = utils_ChannelUtils;
      if (stateFromStores2) {
        channelIcon = tmpResult.getChannelIcon(channel);
      } else {
        channelIcon = tmpResult.getSimpleChannelIcon(channel);
      }
      tmp4 = channelIcon;
    }
  }
  return tmp4;
};
export const getEventLocationIconComponent = function getEventLocationIconComponent(event, stateFromStores, stateFromStores1) {
  let LocationIcon;
  const obj = EntityUtils;
  if (null != obj.getLocationFromEvent(event)) {
    LocationIcon = tmp(9191).LocationIcon;
  } else {
    LocationIcon = null;
    if (null != stateFromStores) {
      let channelIconComponent;
      const tmpResult = utils_ChannelUtils;
      if (stateFromStores1) {
        channelIconComponent = tmpResult.getChannelIconComponent(stateFromStores);
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
