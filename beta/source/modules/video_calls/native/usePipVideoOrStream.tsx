// Module ID: 8848
// Function ID: 8849
// Name: usePipVideoOrStream
// Dependencies: [2044, 4852, 8849, 4858, 502, 2045, 1993, 4859, 4857, 504, 4888, 4692, 8835, 2]
// Exports: default, useHasPipParticipant

// Module 8848 (usePipVideoOrStream)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import VideoSpeakerStore from "VideoSpeakerStore" /* 8849 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import CallConstants from "CallConstants" /* 4857 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, allActiveStreamsForChannel;

let closure_12;
let map1;
let unpackModuleId;
({ isStreamParticipant: unpackModuleId, isUserParticipant: closure_12, ParticipantTypes: map1 } = CallConstants);
const result = size.fileFinishedImporting("modules/video_calls/native/usePipVideoOrStream.tsx");

export default function usePipVideoOrStream(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ChannelRTCStore, VideoSpeakerStore, ApplicationStreamingStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let videoParticipants;
    let videoParticipants1;
    let tmp = stateFromStores;
    if (null != stateFromStores) {
      videoParticipants = ChannelRTCStore.getVideoParticipants(tmp);
    } else {
      videoParticipants = [];
    }
    let selectedParticipant = null;
    if (null != tmp) {
      selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
    }
    const found = videoParticipants.find((type) => type.type === constants.USER && !type.localVideoDisabled);
    let obj = VideoSpeakerStore;
    let obj2 = ChannelRTCStore;
    if (null != tmp) {
      videoParticipants1 = obj2.getVideoParticipants(tmp);
    } else {
      videoParticipants1 = [];
    }
    let participant = null;
    const found1 = videoParticipants1.find((id) => {
      let tmp = id.id !== id.getId();
      if (tmp) {
        const tmp3 = closure_1_12(id);
        let localVideoDisabled = !tmp3;
        if (tmp3) {
          localVideoDisabled = id.localVideoDisabled;
        }
        tmp = localVideoDisabled;
      }
      return tmp;
    });
    if (null != tmp) {
      participant = obj2.getParticipant(tmp, obj.getSpeaker(tmp));
    }
    if (participant == null) {
      participant = found1;
    }
    let tmp8 = participant;
    if (closure_2_12(participant)) {
      let tmp9 = null;
      if (!participant.localVideoDisabled) {
        tmp9 = participant;
      }
      tmp8 = tmp9;
    }
    if (null != tmp) {
      allActiveStreamsForChannel = allActiveStreamsForChannel.getAllActiveStreamsForChannel(tmp);
    } else {
      allActiveStreamsForChannel = [];
    }
    let c0 = tmp8;
    let tmp11 = tmp8;
    if (closure_2_11(tmp8)) {
      if (allActiveStreamsForChannel.filter((streamType) => {
        id = undefined;
        const obj = stateFromStores(closure_2_2[10]);
        const obj2 = { streamType: streamType.streamType, guildId: streamType.guildId, channelId: streamType.channelId, ownerId: streamType.ownerId };
        const encodeStreamKeyResult = obj.encodeStreamKey(obj2);
        if (_undefined != null) {
          id = _undefined.id;
        }
        return encodeStreamKeyResult === id;
      }).length <= 0) {
        c0 = undefined;
      }
      tmp11 = tmp8;
    }
    let tmp12 = tmp11;
    if (tmp11 == null) {
      tmp12 = found;
    }
    let isModalOpenResult = null != tmp && null != selectedParticipant;
    if (isModalOpenResult) {
      let id1;
      let id = selectedParticipant.id;
      if (tmp11 != null) {
        id1 = tmp11.id;
      }
      isModalOpenResult = id === id1;
    }
    if (isModalOpenResult) {
      isModalOpenResult = null != tmp12;
    }
    if (isModalOpenResult) {
      let id3;
      const id2 = tmp12.id;
      if (tmp11 != null) {
        id3 = tmp11.id;
      }
      isModalOpenResult = id2 === id3;
    }
    if (isModalOpenResult) {
      const obj3 = isActivityViewFocused(stateFromStores1[11]);
      isModalOpenResult = obj3.isModalOpen(stateFromStores(stateFromStores1[12]));
    }
    if (isModalOpenResult) {
      isModalOpenResult = !obj2.getChatOpen(tmp);
    }
    if (isModalOpenResult) {
      tmp12 = found;
    }
    let tmp19 = null;
    if (null != tmp12) {
      tmp19 = null;
      if (tmp12.type !== constants.ACTIVITY) {
        tmp19 = null;
        if (null != tmp12.streamId) {
          tmp19 = tmp12;
        }
      }
    }
    return tmp19;
  }, items1);
};
export const useHasPipParticipant = function useHasPipParticipant(isActivityViewFocused) {
  let channelId;
  isActivityViewFocused = isActivityViewFocused.isActivityViewFocused;
  let stateFromStores1;
  let tmp = isActivityViewFocused;
  const tmp2 = stateFromStores1;
  let obj = isActivityViewFocused(stateFromStores1[9]);
  const items = [RTCConnectionStore];
  obj.useStateFromStores(items, () => channelId.getChannelId());
  const stateFromStores = tmp4;
  const items1 = [ChannelRTCStore, VideoSpeakerStore, ApplicationStreamingStore];
  const items2 = [tmp4];
  const tmpResult = tmp(tmp2[9]);
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let videoParticipants;
    let videoParticipants1;
    let tmp = stateFromStores;
    if (null != stateFromStores) {
      videoParticipants = ChannelRTCStore.getVideoParticipants(tmp);
    } else {
      videoParticipants = [];
    }
    let selectedParticipant = null;
    if (null != tmp) {
      selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
    }
    const found = videoParticipants.find((type) => type.type === constants.USER && !type.localVideoDisabled);
    let obj = VideoSpeakerStore;
    let obj2 = ChannelRTCStore;
    if (null != tmp) {
      videoParticipants1 = obj2.getVideoParticipants(tmp);
    } else {
      videoParticipants1 = [];
    }
    let participant = null;
    const found1 = videoParticipants1.find((id) => {
      let tmp = id.id !== id.getId();
      if (tmp) {
        const tmp3 = closure_1_12(id);
        let localVideoDisabled = !tmp3;
        if (tmp3) {
          localVideoDisabled = id.localVideoDisabled;
        }
        tmp = localVideoDisabled;
      }
      return tmp;
    });
    if (null != tmp) {
      participant = obj2.getParticipant(tmp, obj.getSpeaker(tmp));
    }
    if (participant == null) {
      participant = found1;
    }
    let tmp8 = participant;
    if (closure_2_12(participant)) {
      let tmp9 = null;
      if (!participant.localVideoDisabled) {
        tmp9 = participant;
      }
      tmp8 = tmp9;
    }
    if (null != tmp) {
      allActiveStreamsForChannel = allActiveStreamsForChannel.getAllActiveStreamsForChannel(tmp);
    } else {
      allActiveStreamsForChannel = [];
    }
    let c0 = tmp8;
    let tmp11 = tmp8;
    if (closure_2_11(tmp8)) {
      if (allActiveStreamsForChannel.filter((streamType) => {
        id = undefined;
        const obj = stateFromStores(closure_2_2[10]);
        const obj2 = { streamType: streamType.streamType, guildId: streamType.guildId, channelId: streamType.channelId, ownerId: streamType.ownerId };
        const encodeStreamKeyResult = obj.encodeStreamKey(obj2);
        if (_undefined != null) {
          id = _undefined.id;
        }
        return encodeStreamKeyResult === id;
      }).length <= 0) {
        c0 = undefined;
      }
      tmp11 = tmp8;
    }
    let tmp12 = tmp11;
    if (tmp11 == null) {
      tmp12 = found;
    }
    let isModalOpenResult = null != tmp && null != selectedParticipant;
    if (isModalOpenResult) {
      let id1;
      let id = selectedParticipant.id;
      if (tmp11 != null) {
        id1 = tmp11.id;
      }
      isModalOpenResult = id === id1;
    }
    if (isModalOpenResult) {
      isModalOpenResult = null != tmp12;
    }
    if (isModalOpenResult) {
      let id3;
      const id2 = tmp12.id;
      if (tmp11 != null) {
        id3 = tmp11.id;
      }
      isModalOpenResult = id2 === id3;
    }
    if (isModalOpenResult) {
      const obj3 = isActivityViewFocused(stateFromStores1[11]);
      isModalOpenResult = obj3.isModalOpen(stateFromStores(stateFromStores1[12]));
    }
    if (isModalOpenResult) {
      isModalOpenResult = !obj2.getChatOpen(tmp);
    }
    if (isModalOpenResult) {
      tmp12 = found;
    }
    let tmp19 = null;
    if (null != tmp12) {
      tmp19 = null;
      if (tmp12.type !== constants.ACTIVITY) {
        tmp19 = null;
        if (null != tmp12.streamId) {
          tmp19 = tmp12;
        }
      }
    }
    return tmp19;
  }, items2);
  const items3 = [ChannelStore, EmbeddedActivitiesStore, MediaEngineStore];
  const items4 = [stateFromStores, stateFromStores1, isActivityViewFocused];
  const tmpResult2 = tmp(tmp2[9]);
  return tmpResult2.useStateFromStores(items3, () => {
    if (null == ChannelStore.getChannel(stateFromStores)) {
      return false;
    } else {
      let isLocalVideoDisabledResult = null != stateFromStores1;
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      if (isLocalVideoDisabledResult) {
        isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp3.id);
      }
      let tmp6 = null != currentEmbeddedActivity && !isActivityViewFocused;
      if (!tmp6) {
        tmp6 = null != stateFromStores1 && null != stateFromStores1.streamId && !isLocalVideoDisabledResult;
      }
      return tmp6;
    }
  }, items4);
};
