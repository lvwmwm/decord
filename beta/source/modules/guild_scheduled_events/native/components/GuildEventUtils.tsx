// Module ID: 9016
// Function ID: 9017
// Name: GuildEventUtils
// Dependencies: [8893, 8929, 8502, 8930, 2]
// Exports: getEventLocationIconComponent, getEventLocationIconSource

// Module 9016 (GuildEventUtils)
import EntityUtils from "EntityUtils" /* 8893 */;
import AssetRegistryDefault from "AssetRegistry" /* 8929 */;
import size from "module_2" /* 2 */;

let tmp;
const utils_ChannelUtils = tmp(8502);
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
    LocationIcon = tmp(8930).LocationIcon;
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
