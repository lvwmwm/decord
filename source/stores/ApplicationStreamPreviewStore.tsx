// Module ID: 4307
// Function ID: 37732
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4307 (_isNativeReflectConstruct)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const StreamTypes = arg1(dependencyMap[5]).StreamTypes;
let closure_9 = {};
let closure_10 = {};
const set = new Set();
let tmp3 = (Store) => {
  class ApplicationStreamPreviewStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ApplicationStreamPreviewStore);
      obj = closure_6(ApplicationStreamPreviewStore);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ApplicationStreamPreviewStore;
  callback2(ApplicationStreamPreviewStore, Store);
  let obj = {
    key: "getPreviewURL",
    value(guildId, channelId, ownerId) {
      let obj = ApplicationStreamPreviewStore(closure_2[7]);
      obj = {};
      if (null != guildId) {
        let CALL = constants.GUILD;
      } else {
        CALL = constants.CALL;
      }
      obj.streamType = CALL;
      obj.guildId = guildId;
      obj.channelId = channelId;
      obj.ownerId = ownerId;
      let url;
      if (null != closure_9[obj.encodeStreamKey(obj, obj)]) {
        url = tmp3.url;
      }
      return url;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "shouldFetchPreview",
    value(guildId, channelId, ownerId) {
      let obj = ApplicationStreamPreviewStore(closure_2[7]);
      obj = {};
      if (null != guildId) {
        let CALL = constants.GUILD;
      } else {
        CALL = constants.CALL;
      }
      obj.streamType = CALL;
      obj.guildId = guildId;
      obj.channelId = channelId;
      obj.ownerId = ownerId;
      const encodeStreamKeyResult = obj.encodeStreamKey(obj);
      let num = 0;
      if (null != closure_10[encodeStreamKeyResult]) {
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
        tmp8 = !set.has(encodeStreamKeyResult);
      }
      return tmp8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPreviewURLForStreamKey",
    value(streamKey) {
      const decodeStreamKeyResult = ApplicationStreamPreviewStore(closure_2[7]).decodeStreamKey(streamKey);
      return this.getPreviewURL(decodeStreamKeyResult.guildId, decodeStreamKeyResult.channelId, decodeStreamKeyResult.ownerId);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getIsPreviewLoading",
    value(guildId, channelId, ownerId) {
      let obj = ApplicationStreamPreviewStore(closure_2[7]);
      obj = {};
      if (null != guildId) {
        let CALL = constants.GUILD;
      } else {
        CALL = constants.CALL;
      }
      obj.streamType = CALL;
      obj.guildId = guildId;
      obj.channelId = channelId;
      obj.ownerId = ownerId;
      return set.has(obj.encodeStreamKey(obj));
    }
  };
  return callback(ApplicationStreamPreviewStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp3.displayName = "ApplicationStreamPreviewStore";
tmp3 = new tmp3(importDefault(dependencyMap[9]), {
  CONNECTION_OPEN: reset,
  LOGOUT: reset,
  STREAM_PREVIEW_FETCH_START: function handleStreamPreviewFetch(streamKey) {
    streamKey = streamKey.streamKey;
    let num = 0;
    if (null != closure_10[streamKey]) {
      num = tmp2;
    }
    closure_10[streamKey] = num + 1;
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
      retryAfter = 10000 * closure_10[streamKey];
    }
    obj.expires = timestamp + retryAfter;
    closure_9[streamKey] = obj;
    set.delete(streamKey);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    let reduced = !importDefault(dependencyMap[6]).isEmpty(closure_9);
    if (!reduced) {
      reduced = !importDefault(dependencyMap[6]).isEmpty(closure_10);
      const obj2 = importDefault(dependencyMap[6]);
    }
    if (reduced) {
      reduced = voiceStates.reduce((arg0, guildId) => {
        guildId = guildId.guildId;
        if (guildId.selfStream) {
          return arg0;
        } else {
          let obj = callback(closure_2[7]);
          obj = {};
          if (null != guildId) {
            let CALL = constants.GUILD;
          } else {
            CALL = constants.CALL;
          }
          obj.streamType = CALL;
          obj.guildId = guildId;
          obj.channelId = tmp2;
          obj.ownerId = tmp;
          obj.encodeStreamKey(obj);
          delete r2[r1];
          delete r0[r1];
          return true;
        }
      }, false);
    }
    return reduced;
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("stores/ApplicationStreamPreviewStore.tsx");

export default tmp3;
