// Module ID: 10526
// Function ID: 82264
// Name: usePipVideoOrStream
// Dependencies: [0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: useHasPipParticipant

// Module 10526 (usePipVideoOrStream)
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";
import closure_8 from "result";
import closure_9 from "result";
import closure_10 from "result";
import result from "result";
import result from "result";

function usePipVideoOrStream(arg0) {
  const arg1 = arg0;
  const items = [closure_4, closure_5, closure_6];
  const items1 = [arg0];
  return arg1(dependencyMap[9]).useStateFromStores(items, () => {
    if (null != callback) {
      let videoParticipants = store.getVideoParticipants(callback);
    } else {
      videoParticipants = [];
    }
    let selectedParticipant = null;
    if (null != callback) {
      selectedParticipant = store.getSelectedParticipant(callback);
    }
    const found = videoParticipants.find((type) => type.type === constants.USER && !type.localVideoDisabled);
    const tmp7 = function getVideoOrStreamParticipant(arg0) {
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
        let tmp = id.id !== id.getId();
        if (tmp) {
          tmp = !callback(id) || id.localVideoDisabled;
          const tmp3 = !callback(id) || id.localVideoDisabled;
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
      if (callback(found)) {
        let tmp3 = null;
        if (!found.localVideoDisabled) {
          tmp3 = found;
        }
        return tmp3;
      } else {
        return found;
      }
    }({ channelId: callback, VideoSpeakerStore: closure_5, ChannelRTCStore: store });
    if (null != callback) {
      let allActiveStreamsForChannel = allActiveStreamsForChannel.getAllActiveStreamsForChannel(callback);
    } else {
      allActiveStreamsForChannel = [];
    }
    let callback = tmp7;
    let tmp10 = tmp7;
    if (callback3(tmp7)) {
      if (allActiveStreamsForChannel.filter((streamType) => {
        let id;
        let obj = _undefined(closure_2[10]);
        obj = { streamType: streamType.streamType, guildId: streamType.guildId, channelId: streamType.channelId, ownerId: streamType.ownerId };
        if (null != _undefined) {
          id = _undefined.id;
        }
        return obj.encodeStreamKey(obj) === id;
      }).length <= 0) {
        callback = undefined;
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
      isModalOpenResult = callback(closure_2[11]).isModalOpen(callback2(closure_2[12]));
      const obj2 = callback(closure_2[11]);
    }
    if (isModalOpenResult) {
      tmp11 = found;
    }
    let tmp18 = null;
    if (null != tmp11) {
      tmp18 = null;
      if (tmp11.type !== constants.ACTIVITY) {
        tmp18 = null;
        if (null != tmp11.streamId) {
          tmp18 = tmp11;
        }
      }
    }
    return tmp18;
  }, items1);
}
let closure_7 = importDefault(dependencyMap[4]);
({ isStreamParticipant: closure_11, isUserParticipant: closure_12, ParticipantTypes: closure_13 } = result);
result = result.fileFinishedImporting("modules/video_calls/native/usePipVideoOrStream.tsx");

export default usePipVideoOrStream;
export const useHasPipParticipant = function useHasPipParticipant(isActivityViewFocused) {
  isActivityViewFocused = isActivityViewFocused.isActivityViewFocused;
  const arg1 = isActivityViewFocused;
  let dependencyMap;
  const items = [closure_10];
  const stateFromStores = arg1(dependencyMap[9]).useStateFromStores(items, () => channelId.getChannelId());
  const importDefault = stateFromStores;
  let tmp3;
  if (null != stateFromStores) {
    tmp3 = stateFromStores;
  }
  const tmp2Result = usePipVideoOrStream(tmp3);
  dependencyMap = tmp2Result;
  const obj = arg1(dependencyMap[9]);
  const tmp2 = usePipVideoOrStream;
  const items1 = [closure_8, closure_3, closure_9];
  const items2 = [stateFromStores, tmp2Result, isActivityViewFocused];
  return arg1(dependencyMap[9]).useStateFromStores(items1, () => {
    if (null == channel.getChannel(stateFromStores)) {
      return false;
    } else {
      let isLocalVideoDisabledResult = null != tmp2Result;
      const currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      if (isLocalVideoDisabledResult) {
        isLocalVideoDisabledResult = localVideoDisabled.isLocalVideoDisabled(tmp2Result.id);
      }
      let tmp7 = null != currentEmbeddedActivity;
      if (tmp7) {
        tmp7 = !isActivityViewFocused;
      }
      if (!tmp7) {
        let tmp10 = null != tmp2Result;
        if (tmp10) {
          tmp10 = null != tmp2Result.streamId;
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
