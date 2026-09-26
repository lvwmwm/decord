// Module ID: 15707
// Function ID: 15708
// Name: HappeningNowCardUnifiedVC
// Dependencies: [19, 2044, 4858, 4479, 21, 15708, 15720, 15721, 563, 15698, 2]
// Exports: default, useCallActivityData

// Module 15707 (HappeningNowCardUnifiedVC)
import findActivityWithMostParticipantsDefault from "findActivityWithMostParticipants" /* 15698 */;
import HappeningNowCardActivityDefault from "HappeningNowCardActivity" /* 15708 */;
import HappeningNowCardEmbeddedActivityDefault from "HappeningNowCardEmbeddedActivity" /* 15720 */;
import HappeningNowCardVoiceDefault from "HappeningNowCardVoice" /* 15721 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUnifiedVC.tsx");

export default function HappeningNowCardUnifiedVC(arg0) {
  ({ guildId, index, voiceState, fullwidth, panelVariant } = arg0);
  ({ userId, cardKey } = arg0);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  const channelId = voiceState.channelId;
  const items = [EmbeddedActivitiesStore, ApplicationStreamingStore, RelationshipStore];
  const items1 = [channelId];
  const stateFromStoresObject = channelId(563).useStateFromStoresObject(items, () => {
    if (null == channelId) {
      return {};
    } else {
      const allApplicationStreamsForChannel = ApplicationStreamingStore.getAllApplicationStreamsForChannel(tmp);
      if (allApplicationStreamsForChannel.length > 0) {
        const found = allApplicationStreamsForChannel.find((ownerId) => friend.isFriend(ownerId.ownerId));
        if (null != found) {
          const obj2 = { stream: found };
          return obj2;
        }
      }
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp);
      const tmp7 = findActivityWithMostParticipantsDefault(embeddedActivitiesForChannel);
      if (null != tmp7) {
        const obj3 = { activity: tmp7 };
        let obj = obj3;
      } else if (tmp9) {
        const obj4 = { stream: allApplicationStreamsForChannel[0] };
        obj = obj4;
      } else {
        obj = {};
      }
      return obj;
    }
  }, items1);
  ({ stream, activity } = stateFromStoresObject);
  if (null != stream) {
    let obj2 = { index, userId: stream.ownerId, guildId, stream, fullwidth, panelVariant };
    let tmp5 = jsx(HappeningNowCardActivityDefault, { index, userId: stream.ownerId, guildId, stream, fullwidth, panelVariant });
  } else if (null != activity) {
    let obj3 = { index, voiceState, fullwidth, guildId, activity, userId, cardKey, panelVariant };
    tmp5 = jsx(HappeningNowCardEmbeddedActivityDefault, { index, voiceState, fullwidth, guildId, activity, userId, cardKey, panelVariant });
  } else {
    let obj4 = { index, voiceState, fullwidth, guildId, panelVariant };
    tmp5 = jsx(HappeningNowCardVoiceDefault, { index, voiceState, fullwidth, guildId, panelVariant });
  }
  return tmp5;
};
export const useCallActivityData = function useCallActivityData(channel_id) {
  _require = channel_id;
  const items = [EmbeddedActivitiesStore, ApplicationStreamingStore, RelationshipStore];
  const items1 = [channel_id];
  return require("useStateFromStores").useStateFromStoresObject(items, () => {
    if (null == channelId) {
      return {};
    } else {
      const allApplicationStreamsForChannel = ApplicationStreamingStore.getAllApplicationStreamsForChannel(tmp);
      if (allApplicationStreamsForChannel.length > 0) {
        const found = allApplicationStreamsForChannel.find((ownerId) => friend.isFriend(ownerId.ownerId));
        if (null != found) {
          const obj2 = { stream: found };
          return obj2;
        }
      }
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp);
      const tmp7 = findActivityWithMostParticipantsDefault(embeddedActivitiesForChannel);
      if (null != tmp7) {
        const obj3 = { activity: tmp7 };
        let obj = obj3;
      } else if (tmp9) {
        const obj4 = { stream: allApplicationStreamsForChannel[0] };
        obj = obj4;
      } else {
        obj = {};
      }
      return obj;
    }
  }, items1);
};
