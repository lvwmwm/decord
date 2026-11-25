// Module ID: 19332
// Function ID: 19333
// Name: ActivityPanelUtils
// Dependencies: [4861, 4915, 4860, 5638, 4933, 5659, 1092, 504, 2]
// Exports: isActivityPanelFullscreen, isConnectedToActivityInText, useIsActivityPanelFullscreen, useIsConnectedToActivityInText

// Module 19332 (ActivityPanelUtils)
import get_initialized from "get initialized" /* 504 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4933 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5638 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5659 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4915 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4860 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const result = size.fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export function isActivityPanelFullscreen() {
  const obj = embeddedActivityLocationUtils;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
  const tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === ActivityPanelModes.PANEL && !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
  return tmp3;
}
export function isConnectedToActivityInText() {
  const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
  if (null == connectedActivityLocation) {
    return false;
  } else {
    const obj2 = embeddedActivityLocationUtils;
    const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    const tmp8 = require;
    if (null == embeddedActivityLocationChannelId) {
      return false;
    } else {
      const channel = ChannelStore.getChannel(embeddedActivityLocationChannelId);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      let tmp4 = type === tmp8(1092).ChannelTypes.GUILD_TEXT;
      if (!tmp4) {
        let isPrivateResult;
        if (channel != null) {
          isPrivateResult = channel.isPrivate();
        }
        tmp4 = true === isPrivateResult && SelectedChannelStore.getVoiceChannelId() !== embeddedActivityLocationChannelId;
        const tmp6 = true === isPrivateResult && SelectedChannelStore.getVoiceChannelId() !== embeddedActivityLocationChannelId;
      }
      return tmp4;
    }
  }
}
export function useIsActivityPanelFullscreen() {
  let obj = get_initialized;
  const items = [EmbeddedActivitiesStore];
  return obj.useStateFromStores(items, () => {
    const obj = embeddedActivityLocationUtils;
    const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
    let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL;
    const tmp = dependencyMap;
    if (tmp3) {
      tmp3 = !require("isVoiceEmbeddedActivity")(embeddedActivityLocationChannelId);
    }
    return tmp3;
  });
}
export function useIsConnectedToActivityInText() {
  let voiceChannelId;
  let obj = get_initialized;
  const items = [EmbeddedActivitiesStore, ChannelStore, SelectedChannelStore];
  return obj.useStateFromStores(items, () => {
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    let flag = false;
    if (null != connectedActivityLocation) {
      const obj = embeddedActivityLocationUtils;
      const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      flag = false;
      const tmp2 = require;
      const tmp3 = dependencyMap;
      if (null != embeddedActivityLocationChannelId) {
        channel = channel.getChannel(embeddedActivityLocationChannelId);
        let type;
        if (channel != null) {
          type = channel.type;
        }
        let tmp7 = type === tmp2(tmp3[6]).ChannelTypes.GUILD_TEXT;
        if (!tmp7) {
          let isPrivateResult;
          if (channel != null) {
            isPrivateResult = channel.isPrivate();
          }
          tmp7 = true === isPrivateResult && voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
          const tmp9 = true === isPrivateResult && voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
        }
        flag = tmp7;
      }
    }
    return flag;
  });
}
