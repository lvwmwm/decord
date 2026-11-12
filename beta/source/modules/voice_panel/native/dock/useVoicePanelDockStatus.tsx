// Module ID: 19638
// Function ID: 19639
// Name: useVoicePanelDockStatus
// Dependencies: [32, 19, 6931, 502, 5925, 6844, 1385, 5835, 19639, 5837, 11394, 504, 2]
// Exports: default

// Module 19638 (useVoicePanelDockStatus)
import CallConstants from "CallConstants" /* 5837 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11394 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6931 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5925 */;
import SpeakingStore from "SpeakingStore" /* 6844 */;
import UserStore from "UserStore" /* 1385 */;
import VoiceStateStore from "VoiceStateStore" /* 5835 */;
import VoicePanelDockStatusStore from "VoicePanelDockStatusStore" /* 19639 */;
import size from "module_2" /* 2 */;

let importDefault, set, streamParticipants;

let closure_12;
let closure_14;
let closure_15;
let map1;
let unpackModuleId;
({ releaseDockStatus: unpackModuleId, initDockStatus: closure_12, setDockHasStreamers: map1, setDockSpeakingIds: closure_14, showVoiceMoment: closure_15 } = VoicePanelDockStatusStore);
const ParticipantTypes = CallConstants.ParticipantTypes;
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockStatus.tsx");

export default function useVoicePanelDockStatus() {
  let c1;
  let channelId;
  let id;
  let tmp3;
  let voiceStatesForChannel;
  let items = [AuthenticationStore];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  importDefault = undefined;
  channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  let tmp2 = _slicedToArray(react.useState(null), 2);
  [tmp3, c1] = tmp2;
  let items1 = [channelId];
  const effect = react.useEffect(() => {
    let closure_0 = false;
    const items = [channelId];
    const batchedStoreListener = new channelId(dependencyMap[11]).BatchedStoreListener(items, function update() {
      const tmp2 = RTCConnectionStore.getChannelId() === channelId;
      closure_0 = tmp2;
      if (tmp2 !== closure_0) {
        if (tmp2) {
          authStore2(channelId);
          batchedStoreListener(channelId);
        } else {
          unpackModuleId(channelId);
          batchedStoreListener(null);
        }
      }
    });
    batchedStoreListener.attach("useVoicePanelDockStatus.connection");
    let tmp2 = closure_0;
    const tmp3 = channelId.getChannelId() === closure_0;
    closure_0 = tmp3;
    if (tmp3 !== closure_0) {
      if (tmp3) {
        closure_1_12(tmp2);
        batchedStoreListener(tmp2);
      } else {
        closure_1_11(tmp2);
        batchedStoreListener(null);
      }
    }
    return () => {
      batchedStoreListener.detach();
      unpackModuleId(channelId);
    };
  }, items1);
  const items2 = [tmp3, stateFromStores];
  const effect1 = react.useEffect(function() {
    if (null != set) {
      set = null;
      function update() {
        const values = Object.values(voiceStatesForChannel.getVoiceStatesForChannel(channelId));
        set = new Set(values.flatMap((userId) => {
          let items1;
          if (userId.userId !== batchedStoreListener) {
            const items = [userId.userId];
            items1 = items;
          } else {
            items1 = [];
          }
          return items1;
        }));
        if (null != set) {
          const iter2 = set[Symbol.iterator]();
          const nextResult = iter2.next();
          while (iter2 !== undefined) {
            let tmp5 = nextResult;
            if (!set.has(nextResult)) {
              let tmp10 = closure_3_15(channelId, tmp5, "joined");
            }
            continue;
          }
          const iter = set[Symbol.iterator]();
          const nextResult1 = iter.next();
          while (iter !== undefined) {
            let tmp16 = nextResult1;
            if (!set.has(nextResult1)) {
              let tmp20 = closure_3_15(channelId, tmp16, "left");
            }
            continue;
          }
        }
      }
      let items = [voiceStatesForChannel];
      const self = this;
      const self2 = this;
      let tmp5 = update;
      const batchedStoreListener = new tmp3(closure_1_2[11]).BatchedStoreListener(items, update);
      let tmp6 = batchedStoreListener;
      batchedStoreListener.attach("useVoicePanelDockStatus.voiceState");
      update();
      return () => batchedStoreListener.detach();
    }
  }, items2);
  const items3 = [tmp3, stateFromStores];
  const effect2 = react.useEffect(function() {
    if (null != set) {
      set = null;
      function update() {
        streamParticipants = streamParticipants.getStreamParticipants(channelId);
        set = new Set(streamParticipants.flatMap((type) => {
          if (type.type === constants.STREAM) {
            if (null != type.user) {
              if (type.user.id !== batchedStoreListener) {
                const items = [type.user.id];
              }
              return [];
            }
          }
        }));
        const tmp2 = set;
        if (null != set) {
          const iter = tmp2[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp7 = nextResult;
            if (!set.has(nextResult)) {
              let tmp12 = closure_3_15(channelId, tmp7, "streaming");
            }
            continue;
          }
        }
        closure_3_13(channelId, set.size > 0);
      }
      let tmp2 = closure_1_2;
      const tmp3 = streamParticipants;
      let items = [streamParticipants];
      const self = this;
      const self2 = this;
      const batchedStoreListener = new tmp3(closure_1_2[11]).BatchedStoreListener(items, update);
      batchedStoreListener.attach("useVoicePanelDockStatus.stream");
      update();
      return () => batchedStoreListener.detach();
    }
  }, items3);
  let closure_0 = tmp3;
  const items4 = [tmp3, stateFromStores];
  const effect3 = react.useEffect(function() {
    let batchedStoreListener;
    let participant;
    let tmp;
    let user;
    const f143066 = (item) => {
      const tmp = item !== closure_1_1 && null != participant.getParticipant(batchedStoreListener, item) && null != user.getUser(item);
      return tmp;
    };
    if (null != batchedStoreListener) {
      const items = [closure_1_8, ];
      items[1] = streamParticipants;
      const self = this;
      const self2 = this;
      batchedStoreListener = new tmp3(closure_1_2[11]).BatchedStoreListener(items, function update() {
        const speakers = closure_2_8.getSpeakers();
        let tmp = closure_2_14(batchedStoreListener, speakers.filter(f143066));
      });
      batchedStoreListener.attach("useVoicePanelDockStatus.speakers");
      let speakers = closure_1_8.getSpeakers();
      closure_1_14(tmp, speakers.filter(f143066));
      return () => batchedStoreListener.detach();
    }
  }, items4);
};
