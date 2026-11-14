// Module ID: 19981
// Function ID: 19982
// Name: useVoicePanelDockStatus
// Dependencies: [32, 19, 7016, 6369, 502, 6071, 6941, 1388, 5981, 19202, 5983, 6371, 11984, 504, 1089, 572, 2]
// Exports: default

// Module 19981 (useVoicePanelDockStatus)
import DurationsDefault from "Durations" /* 1089 */;
import CallConstants from "CallConstants" /* 5983 */;
import SoundboardConstants from "SoundboardConstants" /* 6371 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 7016 */;
import SoundboardStore from "SoundboardStore" /* 6369 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;
import SpeakingStore from "SpeakingStore" /* 6941 */;
import UserStore from "UserStore" /* 1388 */;
import VoiceStateStore from "VoiceStateStore" /* 5981 */;
import VoicePanelDockStatusStore from "VoicePanelDockStatusStore" /* 19202 */;
import size from "module_2" /* 2 */;

let importDefault, map, set, speakers, streamParticipants;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
({ releaseDockStatus: closure_12, initDockStatus: map1, setDockActiveSpeakers: closure_14, setDockHasStreamers: closure_15, showVoiceMoment: closure_16 } = VoicePanelDockStatusStore);
const ParticipantTypes = CallConstants.ParticipantTypes;
let result = SoundboardConstants.MAX_SOUND_LENGTH_SECONDS * DurationsDefault.Millis.SECOND;
let closure_18 = result + 3 * DurationsDefault.Millis.SECOND;
let result1 = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockStatus.tsx");

export default function useVoicePanelDockStatus() {
  let c1;
  let channelId;
  let id;
  let tmp3;
  let voiceStatesForChannel;
  let obj = channelId(504);
  let items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  importDefault = undefined;
  channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  let tmp2 = _slicedToArray(react.useState(null), 2);
  [tmp3, c1] = tmp2;
  let items1 = [channelId];
  const effect = react.useEffect(() => {
    let closure_0 = false;
    const items = [channelId];
    const batchedStoreListener = new channelId(dependencyMap[13]).BatchedStoreListener(items, function update() {
      const tmp2 = RTCConnectionStore.getChannelId() === channelId;
      closure_0 = tmp2;
      if (tmp2 !== closure_0) {
        if (tmp2) {
          map1(channelId);
          batchedStoreListener(channelId);
        } else {
          authStore2(channelId);
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
        closure_1_13(tmp2);
        batchedStoreListener(tmp2);
      } else {
        closure_1_12(tmp2);
        batchedStoreListener(null);
      }
    }
    return () => {
      batchedStoreListener.detach();
      authStore2(channelId);
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
              let tmp10 = closure_3_16(channelId, tmp5, "joined");
            }
            continue;
          }
          const iter = set[Symbol.iterator]();
          const nextResult1 = iter.next();
          while (iter !== undefined) {
            let tmp16 = nextResult1;
            if (!set.has(nextResult1)) {
              let tmp20 = closure_3_16(channelId, tmp16, "left");
            }
            continue;
          }
        }
      }
      let items = [voiceStatesForChannel];
      const self = this;
      const self2 = this;
      let tmp5 = update;
      const batchedStoreListener = new tmp3(closure_1_2[13]).BatchedStoreListener(items, update);
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
              let tmp12 = closure_3_16(channelId, tmp7, "streaming");
            }
            continue;
          }
        }
        closure_3_15(channelId, set.size > 0);
      }
      let tmp2 = closure_1_2;
      const tmp3 = streamParticipants;
      let items = [streamParticipants];
      const self = this;
      const self2 = this;
      const batchedStoreListener = new tmp3(closure_1_2[13]).BatchedStoreListener(items, update);
      batchedStoreListener.attach("useVoicePanelDockStatus.stream");
      update();
      return () => batchedStoreListener.detach();
    }
  }, items3);
  let closure_0 = tmp3;
  const items4 = [tmp3, stateFromStores];
  const effect3 = react.useEffect(function() {
    if (null != map) {
      let tmp = globalThis;
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
      let tmp3 = map;
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map1 = new Map();
      let tmp5 = map1;
      let closure_2 = [];
      function removePlayingSound(arg0) {
        map.delete(arg0);
        clearTimeout(map1.get(arg0));
        map1.delete(arg0);
      }
      function update() {
        let found;
        let found1;
        const keys = found.keys();
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let isUserPlayingSoundsResult = null != streamParticipants.getParticipant(map, nextResult);
          if (isUserPlayingSoundsResult) {
            isUserPlayingSoundsResult = userPlayingSounds.isUserPlayingSounds(tmp3);
          }
          if (!isUserPlayingSoundsResult) {
            let tmp11 = removePlayingSound(tmp3);
          }
          continue;
        }
        speakers = speakers.getSpeakers();
        found = speakers.filter((item) => {
          const tmp = item !== map1 && null != handlePlayStart.getParticipant(found, item) && null != user.getUser(item);
          return tmp;
        });
        found1 = found1.filter((item) => {
          const hasItem = found.includes(item) || map.has(item);
          return hasItem;
        });
        const items = [...found, ...found.keys()];
        for (const item10049 of items) {
          let tmp13 = item10049;
          if (!found1.includes(item10049)) {
            let arr = found1.push(tmp13);
          }
          continue;
        }
        map = new Map(found);
        closure_2_14(map, found1, map);
      }
      function handlePlayStart(userId) {
        userId = userId.userId;
        let tmp = userId !== map1;
        const soundId = userId.soundId;
        if (tmp) {
          tmp = null != streamParticipants.getParticipant(map, userId);
        }
        if (tmp) {
          tmp = null != user.getUser(userId);
        }
        if (tmp) {
          const _String = String;
          const result = userId.set(userId, String(soundId));
          let _clearTimeout = clearTimeout;
          clearTimeout(map1.get(userId));
          const _setTimeout = setTimeout;
          const result1 = map1.set(userId, setTimeout(() => {
            if (typeof removePlayingSound === "function") {
              map.delete(userId);
              const _clearTimeout = clearTimeout;
              clearTimeout(map1.get(userId));
              map1.delete(userId);
              update();
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }, closure_2_18));
          update();
        }
      }
      let tmp7 = closure_1_2;
      let tmp8 = speakers;
      let items = [speakers, , ];
      let tmp9 = streamParticipants;
      items[1] = streamParticipants;
      let tmp10 = userPlayingSounds;
      items[2] = userPlayingSounds;
      const self5 = this;
      const self6 = this;
      let tmp11 = items;
      const batchedStoreListener = new tmp3(closure_1_2[13]).BatchedStoreListener(items, update);
      let tmp13 = batchedStoreListener;
      batchedStoreListener.attach("useVoicePanelDockStatus.speakers");
      const obj2 = stateFromStores(closure_1_2[15]);
      const subscription = obj2.subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_START", handlePlayStart);
      update();
      return () => {
        batchedStoreListener.detach();
        const obj = map1(dependencyMap[15]);
        obj.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_START", handlePlayStart);
        const item = map1.forEach((item) => clearTimeout(item));
      };
    }
  }, items4);
};
