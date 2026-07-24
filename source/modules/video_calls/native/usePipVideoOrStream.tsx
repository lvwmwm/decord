// Module ID: 10572
// Function ID: 82553
// Name: usePipVideoOrStream
// Dependencies: [1347, 4143, 10573, 4149, 1194, 1348, 4177, 4202, 4148, 566, 4194, 3981, 10557, 2]
// Exports: useHasPipParticipant

// Module 10572 (usePipVideoOrStream)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ParticipantTypes from "ParticipantTypes";

let closure_11;
let closure_12;
let closure_13;
const require = arg1;
function usePipVideoOrStream(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, closure_5, closure_6];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => {
    if (null != c0) {
      let videoParticipants = outer1_4.getVideoParticipants(c0);
    } else {
      videoParticipants = [];
    }
    let selectedParticipant = null;
    if (null != c0) {
      selectedParticipant = outer1_4.getSelectedParticipant(c0);
    }
    let found = videoParticipants.find((type) => type.type === outer2_13.USER && !type.localVideoDisabled);
    const tmp7 = (function getVideoOrStreamParticipant(arg0) {
      let ChannelRTCStore;
      let VideoSpeakerStore;
      let channelId;
      ({ channelId, VideoSpeakerStore, ChannelRTCStore } = arg0);
      if (null != channelId) {
        let videoParticipants = ChannelRTCStore.getVideoParticipants(channelId);
      } else {
        videoParticipants = [];
      }
      let found = videoParticipants.find((id) => {
        let tmp = id.id !== outer3_7.getId();
        if (tmp) {
          tmp = !outer3_12(id) || id.localVideoDisabled;
          const tmp3 = !outer3_12(id) || id.localVideoDisabled;
        }
        return tmp;
      });
      let participant = null;
      if (null != channelId) {
        participant = ChannelRTCStore.getParticipant(channelId, VideoSpeakerStore.getSpeaker(channelId));
      }
      if (null != participant) {
        found = participant;
      }
      if (outer2_12(found)) {
        let tmp3 = null;
        if (!found.localVideoDisabled) {
          tmp3 = found;
        }
        return tmp3;
      } else {
        return found;
      }
    })({ channelId: c0, VideoSpeakerStore: outer1_5, ChannelRTCStore: outer1_4 });
    if (null != c0) {
      let allActiveStreamsForChannel = outer1_6.getAllActiveStreamsForChannel(c0);
    } else {
      allActiveStreamsForChannel = [];
    }
    c0 = tmp7;
    let tmp10 = tmp7;
    if (outer1_11(tmp7)) {
      if (allActiveStreamsForChannel.filter((streamType) => {
        let id;
        let obj = _undefined(outer2_2[10]);
        obj = { streamType: streamType.streamType, guildId: streamType.guildId, channelId: streamType.channelId, ownerId: streamType.ownerId };
        if (null != _undefined) {
          id = _undefined.id;
        }
        return obj.encodeStreamKey(obj) === id;
      }).length <= 0) {
        c0 = undefined;
      }
      tmp10 = tmp7;
    }
    let tmp11 = found;
    if (null != tmp10) {
      tmp11 = tmp10;
    }
    let isModalOpenResult = null != selectedParticipant;
    if (isModalOpenResult) {
      let id;
      if (null != tmp10) {
        id = tmp10.id;
      }
      isModalOpenResult = selectedParticipant.id === id;
    }
    if (isModalOpenResult) {
      isModalOpenResult = null != tmp11;
    }
    if (isModalOpenResult) {
      let id1;
      if (null != tmp10) {
        id1 = tmp10.id;
      }
      isModalOpenResult = tmp11.id === id1;
    }
    if (isModalOpenResult) {
      isModalOpenResult = callback(outer1_2[11]).isModalOpen(outer1_1(outer1_2[12]));
      const obj2 = callback(outer1_2[11]);
    }
    if (isModalOpenResult) {
      tmp11 = found;
    }
    let tmp18 = null;
    if (null != tmp11) {
      tmp18 = null;
      if (tmp11.type !== outer1_13.ACTIVITY) {
        tmp18 = null;
        if (null != tmp11.streamId) {
          tmp18 = tmp11;
        }
      }
    }
    return tmp18;
  }, items1);
}
({ isStreamParticipant: closure_11, isUserParticipant: closure_12, ParticipantTypes: closure_13 } = ParticipantTypes);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_calls/native/usePipVideoOrStream.tsx");

export default usePipVideoOrStream;
export const useHasPipParticipant = function useHasPipParticipant(isActivityViewFocused) {
  isActivityViewFocused = isActivityViewFocused.isActivityViewFocused;
  let dependencyMap;
  const items = [closure_10];
  const stateFromStores = isActivityViewFocused(566).useStateFromStores(items, () => outer1_10.getChannelId());
  let tmp3;
  if (null != stateFromStores) {
    tmp3 = stateFromStores;
  }
  const tmp2Result = usePipVideoOrStream(tmp3);
  dependencyMap = tmp2Result;
  const obj = isActivityViewFocused(566);
  const tmp2 = usePipVideoOrStream;
  const items1 = [closure_8, _createForOfIteratorHelperLoose, closure_9];
  const items2 = [stateFromStores, tmp2Result, isActivityViewFocused];
  return isActivityViewFocused(566).useStateFromStores(items1, () => {
    if (null == outer1_8.getChannel(stateFromStores)) {
      return false;
    } else {
      let isLocalVideoDisabledResult = null != _undefined;
      const currentEmbeddedActivity = outer1_3.getCurrentEmbeddedActivity();
      if (isLocalVideoDisabledResult) {
        isLocalVideoDisabledResult = outer1_9.isLocalVideoDisabled(_undefined.id);
      }
      let tmp7 = null != currentEmbeddedActivity;
      if (tmp7) {
        tmp7 = !isActivityViewFocused;
      }
      if (!tmp7) {
        let tmp10 = null != _undefined;
        if (tmp10) {
          tmp10 = null != _undefined.streamId;
        }
        if (tmp10) {
          tmp10 = !isLocalVideoDisabledResult;
        }
        tmp7 = tmp10;
      }
      return tmp7;
    }
  }, items2);
};
