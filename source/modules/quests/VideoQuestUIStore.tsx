// Module ID: 6938
// Function ID: 55446
// Name: _toPropertyKey
// Dependencies: []

// Module 6938 (_toPropertyKey)
function _toPropertyKey(arg0) {
  let StringResult = arg0;
  if ("object" === typeof arg0) {
    StringResult = arg0;
    if (arg0) {
      const _Symbol = Symbol;
      if (undefined !== arg0[Symbol.toPrimitive]) {
        const callResult = obj.call(arg0, "string");
        StringResult = callResult;
        if ("object" === typeof callResult) {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(arg0);
      }
    }
  }
  let text = StringResult;
  if ("symbol" !== typeof StringResult) {
    text = `${tmp}`;
  }
  return text;
}
let closure_3 = importDefault(dependencyMap[0]);
let obj = { UNKNOWN: "UNKNOWN", NOT_STARTED: "NOT_STARTED", IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED" };
const withEqualityFn = arg1(dependencyMap[1]).createWithEqualityFn();
const obj2 = arg1(dependencyMap[1]);
obj = { name: "videoQuestUIState" };
const obj3 = arg1(dependencyMap[2]);
obj.storage = arg1(dependencyMap[2]).createJSONStorage(() => importDefault(dependencyMap[5]));
obj.partialize = function partialize(volume) {
  return { volume: volume.volume, muted: volume.muted, videoProgress: volume.videoProgress };
};
obj.version = 0;
const withEqualityFnResult = withEqualityFn(obj3.persist((arg0, arg1) => {
  arg1 = arg0;
  const importDefault = arg1;
  return {
    volume: arg1(dependencyMap[3]).DEFAULT_VIDEO_VOLUME,
    videoProgress: {},
    setVolume(arg0) {
      arg0(closure_2[4]).batchUpdates(() => arg0({ volume: arg0 }));
    },
    setMuted(arg0) {
      arg0(closure_2[4]).batchUpdates(() => arg0({ muted: arg0 }));
    },
    setVideoProgress(arg0, arg1, arg2) {
      const tmp = arg1().videoProgress[arg0];
      let maxTimestampSec;
      if (null != tmp) {
        maxTimestampSec = tmp.maxTimestampSec;
      }
      let num = 0;
      if (null != maxTimestampSec) {
        num = maxTimestampSec;
      }
      let closure_3 = Math.max(num, arg1);
      arg0(arg2[4]).batchUpdates(() => {
        let obj = {};
        obj = {};
        const merged = Object.assign(arg1().videoProgress);
        obj = { timestampSec: arg1, duration: arg2, maxTimestampSec: closure_3 };
        obj[arg0] = obj;
        obj.videoProgress = obj;
        return arg0(obj);
      });
    },
    setTranscriptEnabled(arg0) {
      arg0(closure_2[4]).batchUpdates(() => arg0({ transcriptEnabled: arg0 }));
    },
    setCaptionEnabled(arg0) {
      arg0(closure_2[4]).batchUpdates(() => arg0({ captionEnabled: arg0 }));
    },
    getVideoProgress(questId) {
      return arg1().videoProgress[questId];
    },
    getVideoProgressState(arg0) {
      const tmp = arg1().videoProgress[arg0];
      if (null == tmp) {
        let IN_PROGRESS = constants.UNKNOWN;
      } else if (0 === tmp.timestampSec) {
        IN_PROGRESS = constants.NOT_STARTED;
      } else if (tmp.timestampSec >= tmp.duration) {
        IN_PROGRESS = constants.COMPLETED;
      } else {
        IN_PROGRESS = constants.IN_PROGRESS;
      }
      return IN_PROGRESS;
    },
    resetQuest(questId) {
      questId(closure_2[4]).batchUpdates(() => {
        const items = [arg0];
        arg0({ videoProgress: callback2(callback().videoProgress, items.map(closure_5)) });
      });
    },
    clearState() {
      arg0(closure_2[4]).batchUpdates(() => {
        callback({ videoProgress: {} });
      });
    },
    setTranscriptAsset(arg0) {
      arg0(closure_2[4]).batchUpdates(() => {
        arg0({ transcript: arg0 });
      });
    }
  };
}, obj));
const obj5 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/quests/VideoQuestUIStore.tsx");

export default withEqualityFnResult;
export const DEFAULT_VIDEO_PROGRESS = { "Null": 1, "Null": null, "Null": 0 };
export const VideoProgressState = obj;
export const FetchStatus = { NONE: "NONE", FETCHING: "FETCHING", SUCCESS: "SUCCESS", FAILURE: "FAILURE" };
export const useVideoQuestUIStore = withEqualityFnResult;
