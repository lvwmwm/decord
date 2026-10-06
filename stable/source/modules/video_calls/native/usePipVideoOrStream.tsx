// Module ID: 8843
// Function ID: 8844
// Name: usePipVideoOrStream
// Dependencies: [2050, 4853, 8844, 4859, 502, 2051, 1999, 4860, 4858, 558, 576, 4889, 4694, 8830, 504, 2]

// Module 8843 (usePipVideoOrStream)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4694 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 8830 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4853 */;
import VideoSpeakerStore from "VideoSpeakerStore" /* 8844 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4859 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4860 */;
import CallConstants from "CallConstants" /* 4858 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, isActivityViewFocused;

let closure_12;
let map1;
let unpackModuleId;
({ isStreamParticipant: unpackModuleId, isUserParticipant: closure_12, ParticipantTypes: map1 } = CallConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp8;
  let tmp9;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, VideoSpeakerStore, ApplicationStreamingStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let allActiveStreamsForChannel;
      let tmp8;
      let videoParticipants;
      let videoParticipants1;
      if (null != closure_0) {
        videoParticipants = ChannelRTCStore.getVideoParticipants(tmp);
      } else {
        videoParticipants = [];
      }
      let selectedParticipant = null;
      if (null != closure_0) {
        selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
      }
      const found = videoParticipants.find((type) => type.type === constants.USER && !type.localVideoDisabled);
      let obj = VideoSpeakerStore;
      let obj2 = ChannelRTCStore;
      if (null != closure_0) {
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
      if (null != closure_0) {
        participant = obj2.getParticipant(tmp, obj.getSpeaker(tmp));
      }
      if (participant == null) {
        participant = found1;
      }
      if (!closure_12(participant)) {
        tmp8 = participant;
      } else {
        tmp8 = null;
      }
      if (null != closure_0) {
        allActiveStreamsForChannel = ApplicationStreamingStore.getAllActiveStreamsForChannel(tmp);
      } else {
        allActiveStreamsForChannel = [];
      }
      let c0 = tmp8;
      let tmp10 = tmp8;
      if (unpackModuleId(tmp8)) {
        if (allActiveStreamsForChannel.filter((streamType) => {
          let id;
          const obj = closure_2_0(closure_2_2[11]);
          const obj2 = { streamType: streamType.streamType, guildId: streamType.guildId, channelId: streamType.channelId, ownerId: streamType.ownerId };
          const encodeStreamKeyResult = obj.encodeStreamKey(obj2);
          if (_undefined != null) {
            id = _undefined.id;
          }
          return encodeStreamKeyResult === id;
        }).length <= 0) {
          c0 = undefined;
        }
        tmp10 = tmp8;
      }
      let tmp11 = tmp10;
      if (tmp10 == null) {
        tmp11 = found;
      }
      let isModalOpenResult = null != tmp && null != selectedParticipant;
      if (isModalOpenResult) {
        let id1;
        let id = selectedParticipant.id;
        if (tmp10 != null) {
          id1 = tmp10.id;
        }
        isModalOpenResult = id === id1;
      }
      if (isModalOpenResult) {
        isModalOpenResult = null != tmp11;
      }
      if (isModalOpenResult) {
        let id3;
        const id2 = tmp11.id;
        if (tmp10 != null) {
          id3 = tmp10.id;
        }
        isModalOpenResult = id2 === id3;
      }
      if (isModalOpenResult) {
        const obj3 = NavigationRouteUtils;
        isModalOpenResult = obj3.isModalOpen(ChannelCallModalDefault);
      }
      if (isModalOpenResult) {
        isModalOpenResult = !obj2.getChatOpen(tmp);
      }
      if (isModalOpenResult) {
        tmp11 = found;
      }
      let tmp18 = null;
      if (null != tmp11) {
        tmp18 = null;
        if (tmp11.type !== map1.ACTIVITY) {
          tmp18 = null;
          if (null != tmp11.streamId) {
            tmp18 = tmp11;
          }
        }
      }
      return tmp18;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp8, tmp9);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ChannelRTCStore, VideoSpeakerStore, ApplicationStreamingStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    let allActiveStreamsForChannel;
    let tmp8;
    let videoParticipants;
    let videoParticipants1;
    let tmp = closure_0;
    if (null != closure_0) {
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
    if (!closure_12(participant)) {
      tmp8 = participant;
    } else {
      tmp8 = null;
    }
    if (null != tmp) {
      allActiveStreamsForChannel = ApplicationStreamingStore.getAllActiveStreamsForChannel(tmp);
    } else {
      allActiveStreamsForChannel = [];
    }
    let c0 = tmp8;
    let tmp10 = tmp8;
    if (unpackModuleId(tmp8)) {
      if (allActiveStreamsForChannel.filter((streamType) => {
        id = undefined;
        const obj = closure_2_0(closure_2_2[11]);
        const obj2 = { streamType: streamType.streamType, guildId: streamType.guildId, channelId: streamType.channelId, ownerId: streamType.ownerId };
        const encodeStreamKeyResult = obj.encodeStreamKey(obj2);
        if (_undefined != null) {
          id = _undefined.id;
        }
        return encodeStreamKeyResult === id;
      }).length <= 0) {
        c0 = undefined;
      }
      tmp10 = tmp8;
    }
    let tmp11 = tmp10;
    if (tmp10 == null) {
      tmp11 = found;
    }
    let isModalOpenResult = null != tmp && null != selectedParticipant;
    if (isModalOpenResult) {
      let id1;
      let id = selectedParticipant.id;
      if (tmp10 != null) {
        id1 = tmp10.id;
      }
      isModalOpenResult = id === id1;
    }
    if (isModalOpenResult) {
      isModalOpenResult = null != tmp11;
    }
    if (isModalOpenResult) {
      let id3;
      const id2 = tmp11.id;
      if (tmp10 != null) {
        id3 = tmp10.id;
      }
      isModalOpenResult = id2 === id3;
    }
    if (isModalOpenResult) {
      const obj3 = NavigationRouteUtils;
      isModalOpenResult = obj3.isModalOpen(ChannelCallModalDefault);
    }
    if (isModalOpenResult) {
      isModalOpenResult = !obj2.getChatOpen(tmp);
    }
    if (isModalOpenResult) {
      tmp11 = found;
    }
    let tmp18 = null;
    if (null != tmp11) {
      tmp18 = null;
      if (tmp11.type !== map1.ACTIVITY) {
        tmp18 = null;
        if (null != tmp11.streamId) {
          tmp18 = tmp11;
        }
      }
    }
    return tmp18;
  }, items1);
});
let closure_14 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((isActivityViewFocused) => {
  let channelId;
  let streamId;
  let tmp11;
  let tmp4;
  let tmp5;
  const obj = isActivityViewFocused(576);
  const cResult = obj.c(8);
  isActivityViewFocused = isActivityViewFocused.isActivityViewFocused;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = RTCConnectionStore;
    const items = [RTCConnectionStore];
    const fn = function o() {
      return channelId.getChannelId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = isActivityViewFocused(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmp8 = closure_14;
  const tmp8Result = tmp8(stateFromStores);
  dependencyMap = tmp8Result;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore, EmbeddedActivitiesStore, MediaEngineStore];
    cResult[2] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === isActivityViewFocused) {
      let tmp15;
      let tmp16;
      if (cResult[5] === tmp8Result) {
        tmp15 = cResult[6];
        tmp16 = cResult[7];
      }
      const tmpResult2 = isActivityViewFocused(504);
      return tmpResult2.useStateFromStores(tmp11, tmp15, tmp16);
    }
  }
  const fn2 = function v() {
    if (null == ChannelStore.getChannel(stateFromStores)) {
      return false;
    } else {
      let isLocalVideoDisabledResult = null != streamId;
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      if (isLocalVideoDisabledResult) {
        isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp3.id);
      }
      let tmp6 = null != currentEmbeddedActivity && !isActivityViewFocused;
      if (!tmp6) {
        tmp6 = null != streamId && null != streamId.streamId && !isLocalVideoDisabledResult;
      }
      return tmp6;
    }
  };
  const items2 = [stateFromStores, tmp8Result, isActivityViewFocused];
  cResult[3] = stateFromStores;
  cResult[4] = isActivityViewFocused;
  cResult[5] = tmp8Result;
  cResult[6] = fn2;
  cResult[7] = items2;
  tmp16 = items2;
  tmp15 = fn2;
}) : ((isActivityViewFocused) => {
  let channelId;
  let streamId;
  isActivityViewFocused = isActivityViewFocused.isActivityViewFocused;
  const items = [RTCConnectionStore];
  const obj = isActivityViewFocused(504);
  const stateFromStores = obj.useStateFromStores(items, () => channelId.getChannelId());
  const tmp4Result = closure_14(stateFromStores);
  dependencyMap = tmp4Result;
  const items1 = [ChannelStore, EmbeddedActivitiesStore, MediaEngineStore];
  const items2 = [stateFromStores, tmp4Result, isActivityViewFocused];
  const tmpResult = isActivityViewFocused(504);
  return tmpResult.useStateFromStores(items1, () => {
    if (null == ChannelStore.getChannel(stateFromStores)) {
      return false;
    } else {
      let isLocalVideoDisabledResult = null != streamId;
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      if (isLocalVideoDisabledResult) {
        isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp3.id);
      }
      let tmp6 = null != currentEmbeddedActivity && !isActivityViewFocused;
      if (!tmp6) {
        tmp6 = null != streamId && null != streamId.streamId && !isLocalVideoDisabledResult;
      }
      return tmp6;
    }
  }, items2);
});
const result = size.fileFinishedImporting("modules/video_calls/native/usePipVideoOrStream.tsx");

export default tmp3;
export const useHasPipParticipant = tmp4;
