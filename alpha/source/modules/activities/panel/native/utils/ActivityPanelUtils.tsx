// Module ID: 17075
// Function ID: 17076
// Name: ActivityPanelUtils
// Dependencies: [2044, 2098, 2043, 8693, 4487, 8995, 1095, 504, 2]
// Exports: isActivityPanelFullscreen, isConnectedToActivityInText, useIsActivityPanelFullscreen, useIsConnectedToActivityInText

// Module 17075 (ActivityPanelUtils)
import initialize from "initialize" /* 504 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4487 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 8995 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2098 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;

require = fn;
const ActivityPanelModes = fn(8693).ActivityPanelModes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const isActivityPanelFullscreen = function isActivityPanelFullscreen() {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
  let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === ActivityPanelModes.PANEL;
  if (tmp3) {
    tmp3 = !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
  }
  return tmp3;
};
export const isConnectedToActivityInText = function isConnectedToActivityInText() {
  const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
  if (null == connectedActivityLocation) {
    return false;
  } else {
    const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    if (null == embeddedActivityLocationChannelId) {
      return false;
    } else {
      const channel = ChannelStore.getChannel(embeddedActivityLocationChannelId);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      let tmp4 = type === tmp8(1095).ChannelTypes.GUILD_TEXT;
      if (!tmp4) {
        let isPrivateResult;
        if (channel != null) {
          isPrivateResult = channel.isPrivate();
        }
        let tmp6 = true === isPrivateResult;
        if (tmp6) {
          tmp6 = SelectedChannelStore.getVoiceChannelId() !== embeddedActivityLocationChannelId;
        }
        tmp4 = tmp6;
      }
      return tmp4;
    }
    tmp8 = require;
  }
};
export const useIsActivityPanelFullscreen = function useIsActivityPanelFullscreen() {
  const items = [EmbeddedActivitiesStore];
  return initialize.useStateFromStores(items, () => {
    const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
    let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL;
    if (tmp3) {
      tmp3 = !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
    }
    return tmp3;
  });
};
export const useIsConnectedToActivityInText = function useIsConnectedToActivityInText() {
  const items = [EmbeddedActivitiesStore, ChannelStore, SelectedChannelStore];
  return initialize.useStateFromStores(items, () => {
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    let flag = false;
    if (null != connectedActivityLocation) {
      const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      flag = false;
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
          let tmp9 = true === isPrivateResult;
          if (tmp9) {
            tmp9 = voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
          }
          tmp7 = tmp9;
        }
        flag = tmp7;
      }
      tmp2 = require;
      tmp3 = dependencyMap;
    }
    return flag;
  });
};
