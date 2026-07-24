// Module ID: 6943
// Function ID: 55512
// Name: _toPropertyKey
// Dependencies: [29, 677, 3999, 6944, 682, 6945, 2]

// Module 6943 (_toPropertyKey)
import _objectWithoutProperties from "_objectWithoutProperties";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";
import createJSONStorage from "createJSONStorage";
import createJSONStorage from "createJSONStorage";

const require = arg1;
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
let obj = { UNKNOWN: "UNKNOWN", NOT_STARTED: "NOT_STARTED", IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED" };
useStoreWithEqualityFn = useStoreWithEqualityFn.createWithEqualityFn();
obj = { name: "videoQuestUIState" };
obj.storage = createJSONStorage.createJSONStorage(() => importDefault(6945));
obj.partialize = function partialize(volume) {
  return { volume: volume.volume, muted: volume.muted, videoProgress: volume.videoProgress };
};
obj.version = 0;
const withEqualityFnResult = useStoreWithEqualityFn(createJSONStorage.persist((arg0, arg1) => {
  const _require = arg0;
  let closure_1 = arg1;
  let obj = {
    volume: _require(6944).DEFAULT_VIDEO_VOLUME,
    muted: false,
    transcriptEnabled: false,
    captionEnabled: false,
    videoProgress: {},
    transcript: null,
    setVolume(arg0) {
      const callback = arg0;
      callback(outer1_2[4]).batchUpdates(() => callback({ volume: callback }));
    },
    setMuted(arg0) {
      const callback = arg0;
      callback(outer1_2[4]).batchUpdates(() => callback({ muted: callback }));
    },
    setVideoProgress(arg0, arg1, arg2) {
      const callback = arg0;
      const callback2 = arg1;
      let closure_2 = arg2;
      const tmp = callback2().videoProgress[arg0];
      let maxTimestampSec;
      if (null != tmp) {
        maxTimestampSec = tmp.maxTimestampSec;
      }
      let num = 0;
      if (null != maxTimestampSec) {
        num = maxTimestampSec;
      }
      let _objectWithoutProperties = Math.max(num, arg1);
      callback(outer1_2[4]).batchUpdates(() => {
        let obj = {};
        obj = {};
        const merged = Object.assign(callback2().videoProgress);
        obj = { timestampSec: callback2, duration: closure_2, maxTimestampSec: _objectWithoutProperties };
        obj[callback] = obj;
        obj.videoProgress = obj;
        return callback(obj);
      });
    },
    setTranscriptEnabled(arg0) {
      const callback = arg0;
      callback(outer1_2[4]).batchUpdates(() => callback({ transcriptEnabled: callback }));
    },
    setCaptionEnabled(arg0) {
      const callback = arg0;
      callback(outer1_2[4]).batchUpdates(() => callback({ captionEnabled: callback }));
    },
    getVideoProgress(questId) {
      return callback2().videoProgress[questId];
    },
    getVideoProgressState(arg0) {
      const tmp = callback2().videoProgress[arg0];
      if (null == tmp) {
        let IN_PROGRESS = outer1_4.UNKNOWN;
      } else if (0 === tmp.timestampSec) {
        IN_PROGRESS = outer1_4.NOT_STARTED;
      } else if (tmp.timestampSec >= tmp.duration) {
        IN_PROGRESS = outer1_4.COMPLETED;
      } else {
        IN_PROGRESS = outer1_4.IN_PROGRESS;
      }
      return IN_PROGRESS;
    },
    resetQuest(questId) {
      const callback = questId;
      callback(outer1_2[4]).batchUpdates(() => {
        const items = [questId];
        questId({ videoProgress: outer2_3(outer1_1().videoProgress, items.map(outer2_5)) });
      });
    },
    clearState() {
      callback(outer1_2[4]).batchUpdates(() => {
        outer1_0({ videoProgress: {} });
      });
    },
    setTranscriptAsset(arg0) {
      const callback = arg0;
      callback(outer1_2[4]).batchUpdates(() => {
        callback({ transcript: callback });
      });
    }
  };
  return obj;
}, obj));
const result = require("createJSONStorage").fileFinishedImporting("modules/quests/VideoQuestUIStore.tsx");

export default withEqualityFnResult;
export const DEFAULT_VIDEO_PROGRESS = { timestampSec: 0, duration: 10, maxTimestampSec: 0 };
export const VideoProgressState = obj;
export const FetchStatus = { NONE: "NONE", FETCHING: "FETCHING", SUCCESS: "SUCCESS", FAILURE: "FAILURE" };
export const useVideoQuestUIStore = withEqualityFnResult;
