// Module ID: 9212
// Function ID: 9213
// Name: GuildEventUtils
// Dependencies: [9100, 9134, 8727, 9135, 2]
// Exports: getEventLocationIconComponent, getEventLocationIconSource

// Module 9212 (GuildEventUtils)
import EntityUtils from "EntityUtils" /* 9100 */;
import AssetRegistryDefault from "AssetRegistry" /* 9134 */;
import size from "module_2" /* 2 */;

let tmp;
const utils_ChannelUtils = tmp(8727);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventUtils.tsx");

export function getEventLocationIconSource(event, channel, stateFromStores2) {
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
}
export function getEventLocationIconComponent(event, channel, stateFromStores1) {
  let LocationIcon;
  const obj = EntityUtils;
  if (null != obj.getLocationFromEvent(event)) {
    LocationIcon = tmp(9135).LocationIcon;
  } else {
    LocationIcon = null;
    if (null != channel) {
      let channelIconComponent;
      const tmpResult = utils_ChannelUtils;
      if (stateFromStores1) {
        channelIconComponent = tmpResult.getChannelIconComponent(channel);
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
}
