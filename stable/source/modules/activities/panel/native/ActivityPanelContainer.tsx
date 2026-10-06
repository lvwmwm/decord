// Module ID: 16799
// Function ID: 16800
// Name: ActivityPanelContainer
// Dependencies: [19, 2051, 2102, 2050, 21, 558, 576, 4461, 1107, 504, 16800, 16809, 2]

// Module 16799 (ActivityPanelContainer)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4461 */;
import ActivityPanelControllerDefault from "ActivityPanelController" /* 16800 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2102 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel, connectedActivityLocation;

let tmp;
const get_initialized = tmp(504);
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp6;
  let voiceChannelId;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore, , ];
    let tmp8 = ChannelStore;
    items[1] = ChannelStore;
    let tmp9 = SelectedChannelStore;
    items[2] = SelectedChannelStore;
    const fn = function u() {
      connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
      if (null == connectedActivityLocation) {
        return false;
      } else {
        const obj2 = embeddedActivityLocationUtils;
        const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
        const tmp8 = require;
        const tmp9 = dependencyMap;
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
      }
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp6 = items1;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5, tmp6);
  if (cResult[3] !== stateFromStores) {
    let tmp12 = null;
    if (stateFromStores) {
      ActivityPanelControllerDefault;
      tmp12 = <tmp15>{null}</tmp15>;
    }
    cResult[3] = stateFromStores;
    cResult[4] = tmp12;
    tmp11 = tmp12;
  } else {
    tmp11 = cResult[4];
  }
  return tmp11;
}) : (() => {
  let voiceChannelId;
  const items = [EmbeddedActivitiesStore, ChannelStore, SelectedChannelStore];
  let tmp2 = null;
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => {
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    if (null == connectedActivityLocation) {
      return false;
    } else {
      const obj2 = embeddedActivityLocationUtils;
      const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      const tmp8 = require;
      const tmp9 = dependencyMap;
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
    }
  }, [])) {
    let tmp4 = importDefault;
    ActivityPanelControllerDefault;
    tmp2 = <tmp5>{null}</tmp5>;
  }
  return tmp2;
}));
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default memoResult;
