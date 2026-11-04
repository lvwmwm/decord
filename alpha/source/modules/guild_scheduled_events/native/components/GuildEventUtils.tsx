// Module ID: 9229
// Function ID: 9230
// Name: GuildEventUtils
// Dependencies: [9117, 9151, 8744, 9152, 2]
// Exports: getEventLocationIconComponent, getEventLocationIconSource

// Module 9229 (GuildEventUtils)
import EntityUtils from "EntityUtils" /* 9117 */;
import AssetRegistryDefault from "AssetRegistry" /* 9151 */;
import size from "module_2" /* 2 */;

let tmp;
const utils_ChannelUtils = tmp(8744);
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
    LocationIcon = tmp(9152).LocationIcon;
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
