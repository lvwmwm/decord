// Module ID: 4311
// Function ID: 37764
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4195, 22, 4194, 566, 686, 2]

// Module 4311 (_isNativeReflectConstruct)
import apply from "apply";
import isStreamKey from "isStreamKey";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { StreamTypes } from "StreamIssueReportReasons";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function reset() {
  let closure_9 = {};
  let closure_10 = {};
}
let closure_9 = {};
let closure_10 = {};
let set = new Set();
let tmp3 = ((Store) => {
  class ApplicationStreamPreviewStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ApplicationStreamPreviewStore);
      obj = outer1_6(ApplicationStreamPreviewStore);
      tmp2 = outer1_5;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ApplicationStreamPreviewStore, Store);
  let obj = {
    key: "getPreviewURL",
    value(guildId, channelId, ownerId) {
      let obj = ApplicationStreamPreviewStore(outer1_2[7]);
      obj = {};
      if (null != guildId) {
        let CALL = outer1_8.GUILD;
      } else {
        CALL = outer1_8.CALL;
      }
      obj.streamType = CALL;
      obj.guildId = guildId;
      obj.channelId = channelId;
      obj.ownerId = ownerId;
      const tmp3 = outer1_9[obj.encodeStreamKey(obj, obj)];
      let url;
      if (null != tmp3) {
        url = tmp3.url;
      }
      return url;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "shouldFetchPreview",
    value(guildId, channelId, ownerId) {
      let obj = ApplicationStreamPreviewStore(outer1_2[7]);
      obj = {};
      if (null != guildId) {
        let CALL = outer1_8.GUILD;
      } else {
        CALL = outer1_8.CALL;
      }
      obj.streamType = CALL;
      obj.guildId = guildId;
      obj.channelId = channelId;
      obj.ownerId = ownerId;
      const encodeStreamKeyResult = obj.encodeStreamKey(obj);
      let num = 0;
      if (null != outer1_10[encodeStreamKeyResult]) {
        num = tmp5;
      }
      let tmp6 = null != tmp4;
      if (tmp6) {
        const _Date = Date;
        tmp6 = Date.now() > tmp4.expires;
      }
      let tmp8 = null == tmp4;
      if (tmp8) {
        tmp8 = num < 5;
      }
      if (!tmp8) {
        tmp8 = tmp6;
      }
      if (tmp8) {
        tmp8 = !outer1_11.has(encodeStreamKeyResult);
      }
      return tmp8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPreviewURLForStreamKey",
    value(streamKey) {
      const decodeStreamKeyResult = ApplicationStreamPreviewStore(outer1_2[7]).decodeStreamKey(streamKey);
      return this.getPreviewURL(decodeStreamKeyResult.guildId, decodeStreamKeyResult.channelId, decodeStreamKeyResult.ownerId);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getIsPreviewLoading",
    value(guildId, channelId, ownerId) {
      let obj = ApplicationStreamPreviewStore(outer1_2[7]);
      obj = {};
      if (null != guildId) {
        let CALL = outer1_8.GUILD;
      } else {
        CALL = outer1_8.CALL;
      }
      obj.streamType = CALL;
      obj.guildId = guildId;
      obj.channelId = channelId;
      obj.ownerId = ownerId;
      return outer1_11.has(obj.encodeStreamKey(obj));
    }
  };
  return callback(ApplicationStreamPreviewStore, items);
})(require("initialize").Store);
tmp3.displayName = "ApplicationStreamPreviewStore";
tmp3 = new tmp3(require("dispatcher"), {
  CONNECTION_OPEN: reset,
  LOGOUT: reset,
  STREAM_PREVIEW_FETCH_START: function handleStreamPreviewFetch(streamKey) {
    streamKey = streamKey.streamKey;
    let num = 0;
    if (null != dependencyMap[streamKey]) {
      num = tmp2;
    }
    dependencyMap[streamKey] = num + 1;
    set.add(streamKey);
  },
  STREAM_PREVIEW_FETCH_SUCCESS: function handleStreamPreviewFetchSuccess(streamKey) {
    streamKey = streamKey.streamKey;
    closure_9[streamKey] = { url: streamKey.previewURL, expires: Date.now() + 120000 };
    closure_10[streamKey] = 0;
    set.delete(streamKey);
  },
  STREAM_PREVIEW_FETCH_FAIL: function handleStreamPreviewFetchFail(arg0) {
    let retryAfter;
    let streamKey;
    ({ streamKey, retryAfter } = arg0);
    const obj = { url: null };
    const timestamp = Date.now();
    if (null == retryAfter) {
      retryAfter = 10000 * dependencyMap[streamKey];
    }
    obj.expires = timestamp + retryAfter;
    closure_9[streamKey] = obj;
    set.delete(streamKey);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    let reduced = !importDefault(22).isEmpty(closure_9);
    if (!reduced) {
      reduced = !importDefault(22).isEmpty(closure_10);
      const obj2 = importDefault(22);
    }
    if (reduced) {
      reduced = voiceStates.reduce((arg0, guildId) => {
        guildId = guildId.guildId;
        if (guildId.selfStream) {
          return arg0;
        } else {
          let obj = outer1_0(outer1_2[7]);
          obj = {};
          if (null != guildId) {
            let CALL = outer1_8.GUILD;
          } else {
            CALL = outer1_8.CALL;
          }
          obj.streamType = CALL;
          obj.guildId = guildId;
          obj.channelId = tmp5;
          obj.ownerId = tmp4;
          obj.encodeStreamKey(obj);
          delete tmp3[tmp2];
          delete tmp[tmp2];
          return true;
        }
      }, false);
    }
    return reduced;
  }
});
let result = set.fileFinishedImporting("stores/ApplicationStreamPreviewStore.tsx");

export default tmp3;
