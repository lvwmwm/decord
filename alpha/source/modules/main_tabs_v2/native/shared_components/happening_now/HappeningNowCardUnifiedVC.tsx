// Module ID: 18794
// Function ID: 18795
// Name: HappeningNowCardUnifiedVC
// Dependencies: [19, 5154, 6820, 5248, 21, 18795, 18807, 18808, 563, 18785, 2]
// Exports: default, useCallActivityData

// Module 18794 (HappeningNowCardUnifiedVC)
import Fragment from "Fragment" /* 21 */;
import findActivityWithMostParticipantsDefault from "findActivityWithMostParticipants" /* 18785 */;
import HappeningNowCardActivityDefault from "HappeningNowCardActivity" /* 18795 */;
import HappeningNowCardEmbeddedActivityDefault from "HappeningNowCardEmbeddedActivity" /* 18807 */;
import HappeningNowCardVoiceDefault from "HappeningNowCardVoice" /* 18808 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5154 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6820 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUnifiedVC.tsx");

export default function HappeningNowCardUnifiedVC(arg0) {
  let activity;
  let cardKey;
  let fullwidth;
  let guildId;
  let index;
  let panelVariant;
  let stream;
  let tmp5;
  let userId;
  let voiceState;
  ({ guildId, index, voiceState, fullwidth, panelVariant } = arg0);
  ({ userId, cardKey } = arg0);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  const channelId = voiceState.channelId;
  const tmp = dependencyMap;
  let obj = channelId(563);
  const items = [EmbeddedActivitiesStore, ApplicationStreamingStore, RelationshipStore];
  const items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let friend;
    if (null == channelId) {
      return {};
    } else {
      let obj;
      const allApplicationStreamsForChannel = ApplicationStreamingStore.getAllApplicationStreamsForChannel(tmp);
      if (allApplicationStreamsForChannel.length > 0) {
        const found = allApplicationStreamsForChannel.find((ownerId) => friend.isFriend(ownerId.ownerId));
        if (null != found) {
          return { stream: found };
        }
      }
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp);
      const tmp7 = findActivityWithMostParticipantsDefault(embeddedActivitiesForChannel);
      if (null != tmp7) {
        obj = { activity: tmp7 };
        const obj3 = { activity: tmp7 };
      } else if (allApplicationStreamsForChannel.length > 0) {
        obj = { stream: allApplicationStreamsForChannel[0] };
        const obj4 = { stream: allApplicationStreamsForChannel[0] };
      } else {
        obj = {};
      }
      return obj;
    }
  }, items1);
  ({ stream, activity } = stateFromStoresObject);
  if (null != stream) {
    tmp5 = jsx(HappeningNowCardActivityDefault, { index, userId: stream.ownerId, guildId, stream, fullwidth, panelVariant });
  } else if (null != activity) {
    let tmp7 = importDefault;
    tmp5 = jsx(HappeningNowCardEmbeddedActivityDefault, { index, voiceState, fullwidth, guildId, activity, userId, cardKey, panelVariant });
  } else {
    tmp5 = jsx(HappeningNowCardVoiceDefault, { index, voiceState, fullwidth, guildId, panelVariant });
  }
  return tmp5;
};
export function useCallActivityData(channel_id) {
  _require = channel_id;
  const items = [EmbeddedActivitiesStore, ApplicationStreamingStore, RelationshipStore];
  const items1 = [channel_id];
  const obj = require("useStateFromStores");
  return obj.useStateFromStoresObject(items, () => {
    let friend;
    if (null == channelId) {
      return {};
    } else {
      let obj;
      const allApplicationStreamsForChannel = ApplicationStreamingStore.getAllApplicationStreamsForChannel(tmp);
      if (allApplicationStreamsForChannel.length > 0) {
        const found = allApplicationStreamsForChannel.find((ownerId) => friend.isFriend(ownerId.ownerId));
        if (null != found) {
          return { stream: found };
        }
      }
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp);
      const tmp7 = findActivityWithMostParticipantsDefault(embeddedActivitiesForChannel);
      if (null != tmp7) {
        obj = { activity: tmp7 };
        const obj3 = { activity: tmp7 };
      } else if (allApplicationStreamsForChannel.length > 0) {
        obj = { stream: allApplicationStreamsForChannel[0] };
        const obj4 = { stream: allApplicationStreamsForChannel[0] };
      } else {
        obj = {};
      }
      return obj;
    }
  }, items1);
}
