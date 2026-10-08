// Module ID: 17470
// Function ID: 17471
// Name: ActivityPanelUtils
// Dependencies: [2063, 2115, 2062, 6072, 4696, 10458, 1106, 558, 576, 504, 2]
// Exports: isActivityPanelFullscreen, isConnectedToActivityInText

// Module 17470 (ActivityPanelUtils)
import react from "react" /* 576 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4696 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6072 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 10458 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const get_initialized = tmp(504);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsActivityPanelFullscreen() {
  let tmp4;
  let tmp5;
  let tmp = require;
  let obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    const fn = function n() {
      const obj = embeddedActivityLocationUtils;
      const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
      let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL;
      const tmp = dependencyMap;
      if (tmp3) {
        tmp3 = !require("isVoiceEmbeddedActivity")(embeddedActivityLocationChannelId);
      }
      return tmp3;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useIsActivityPanelFullscreen() {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsConnectedToActivityInText() {
  let tmp4;
  let tmp5;
  let voiceChannelId;
  let tmp2 = dependencyMap;
  let obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore, , ];
    let tmp7 = ChannelStore;
    items[1] = ChannelStore;
    items[2] = SelectedChannelStore;
    const fn = function s() {
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
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useIsConnectedToActivityInText() {
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
});
function isConnectedToActivityInText() {
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
      let tmp4 = type === tmp8(1106).ChannelTypes.GUILD_TEXT;
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
const result = size.fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const isActivityPanelFullscreen = function isActivityPanelFullscreen() {
  const obj = embeddedActivityLocationUtils;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
  const tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === ActivityPanelModes.PANEL && !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
  return tmp3;
};
export { isConnectedToActivityInText };
export const useIsActivityPanelFullscreen = tmp2;
export const useIsConnectedToActivityInText = tmp3;
