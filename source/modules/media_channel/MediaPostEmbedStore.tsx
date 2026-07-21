// Module ID: 10430
// Function ID: 80415
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10430 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED", FAILED: 3, [3]: "FAILED" };
let closure_6 = {};
let closure_7 = {};
let tmp2 = (Store) => {
  class MediaPostEmbedStore {
    constructor() {
      self = this;
      tmp = MediaPostEmbedStore(this, MediaPostEmbedStore);
      obj = closure_3(MediaPostEmbedStore);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = MediaPostEmbedStore;
  callback2(MediaPostEmbedStore, Store);
  let obj = {
    key: "getMediaPostEmbed",
    value(arg0) {
      if (null != arg0) {
        return closure_6[arg0];
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getEmbedFetchState",
    value(arg0) {
      let NOT_FETCHED = closure_7[arg0];
      if (null == NOT_FETCHED) {
        NOT_FETCHED = constants.NOT_FETCHED;
      }
      return NOT_FETCHED;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMediaPostEmbeds",
    value() {
      return closure_6;
    }
  };
  items[2] = obj;
  return callback(MediaPostEmbedStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "MediaPostEmbedStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_6 = {};
    let closure_7 = {};
  },
  MEDIA_POST_EMBED_FETCH: function handleFetchMediaPostEmbed(threadId) {
    closure_7[threadId.threadId] = obj.FETCHING;
  },
  MEDIA_POST_EMBED_FETCH_SUCCESS: function handleFetchMediaPostEmbedSuccess(threadId) {
    threadId = threadId.threadId;
    const obj = {};
    const merged = Object.assign(closure_6);
    obj[threadId] = threadId.mediaPostEmbed;
    closure_6 = obj;
    closure_7[threadId] = obj.FETCHED;
  },
  MEDIA_POST_EMBED_FETCH_FAILURE: function handleFetchMediaPostFailure(threadId) {
    closure_7[threadId.threadId] = obj.FAILED;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (!isSwitchingAccount.isSwitchingAccount) {
      let closure_6 = {};
      let closure_7 = {};
    }
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[6]), obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/media_channel/MediaPostEmbedStore.tsx");

export default tmp2;
export const FetchState = obj;
