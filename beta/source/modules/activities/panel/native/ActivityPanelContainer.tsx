// Module ID: 17439
// Function ID: 17440
// Name: ActivityPanelContainer
// Dependencies: [19, 2045, 2099, 2044, 21, 558, 568, 4389, 1099, 504, 17440, 17449, 2]

// Module 17439 (ActivityPanelContainer)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4389 */;
import ActivityPanelControllerDefault from "ActivityPanelController" /* 17440 */;
import ActivityPanelUIDefault from "ActivityPanelUI" /* 17449 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore, ChannelStore, SelectedChannelStore];
    const fn = function u() {
      connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
      if (null == connectedActivityLocation) {
        return false;
      } else {
        const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
        if (null == embeddedActivityLocationChannelId) {
          return false;
        } else {
          channel = channel.getChannel(embeddedActivityLocationChannelId);
          let type;
          if (channel != null) {
            type = channel.type;
          }
          let tmp4 = type === tmp8(tmp9[8]).ChannelTypes.GUILD_TEXT;
          if (!tmp4) {
            let isPrivateResult;
            if (channel != null) {
              isPrivateResult = channel.isPrivate();
            }
            let tmp6;
            if (true === isPrivateResult) {
              tmp6 = voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
            }
            tmp4 = tmp6;
          }
          return tmp4;
        }
        tmp8 = require;
        tmp9 = dependencyMap;
      }
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5, tmp6);
  if (cResult[3] !== stateFromStores) {
    let tmp12 = null;
    if (stateFromStores) {
      let obj2 = { children: jsx(ActivityPanelUIDefault, {}) };
      tmp12 = jsx(ActivityPanelControllerDefault, { children: jsx(ActivityPanelUIDefault, {}) });
    }
    cResult[3] = stateFromStores;
    cResult[4] = tmp12;
    let tmp11 = tmp12;
  } else {
    tmp11 = cResult[4];
  }
  return tmp11;
}) : (() => {
  const items = [EmbeddedActivitiesStore, ChannelStore, SelectedChannelStore];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => {
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    if (null == connectedActivityLocation) {
      return false;
    } else {
      const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      if (null == embeddedActivityLocationChannelId) {
        return false;
      } else {
        channel = channel.getChannel(embeddedActivityLocationChannelId);
        let type;
        if (channel != null) {
          type = channel.type;
        }
        let tmp4 = type === tmp8(tmp9[8]).ChannelTypes.GUILD_TEXT;
        if (!tmp4) {
          let isPrivateResult;
          if (channel != null) {
            isPrivateResult = channel.isPrivate();
          }
          let tmp6;
          if (true === isPrivateResult) {
            tmp6 = voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
          }
          tmp4 = tmp6;
        }
        return tmp4;
      }
      tmp8 = require;
      tmp9 = dependencyMap;
    }
  }, [])) {
    let obj2 = { children: jsx(ActivityPanelUIDefault, {}) };
    tmp2 = jsx(ActivityPanelControllerDefault, { children: jsx(ActivityPanelUIDefault, {}) });
  }
  return tmp2;
}));
