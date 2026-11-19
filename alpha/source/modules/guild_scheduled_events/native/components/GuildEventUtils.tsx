// Module ID: 7889
// Function ID: 7890
// Name: GuildEventUtils
// Dependencies: [7459, 7497, 7517, 7498, 2]
// Exports: getEventLocationIconComponent, getEventLocationIconSource

// Module 7889 (GuildEventUtils)
import EntityUtils from "EntityUtils" /* 7459 */;
import AssetRegistryDefault from "AssetRegistry" /* 7497 */;
import size from "module_2" /* 2 */;

let tmp;
const utils_ChannelUtils = tmp(7517);
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
    LocationIcon = tmp(7498).LocationIcon;
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
