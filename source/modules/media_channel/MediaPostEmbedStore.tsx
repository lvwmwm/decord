// Module ID: 10470
// Function ID: 80681
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 10470 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED", FAILED: 3, [3]: "FAILED" };
let closure_6 = {};
let closure_7 = {};
let tmp2 = ((Store) => {
  class MediaPostEmbedStore {
    constructor() {
      self = this;
      tmp = MediaPostEmbedStore(this, MediaPostEmbedStore);
      obj = outer1_3(MediaPostEmbedStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(MediaPostEmbedStore, Store);
  let obj = {
    key: "getMediaPostEmbed",
    value(arg0) {
      if (null != arg0) {
        return outer1_6[arg0];
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getEmbedFetchState",
    value(arg0) {
      let NOT_FETCHED = outer1_7[arg0];
      if (null == NOT_FETCHED) {
        NOT_FETCHED = outer1_5.NOT_FETCHED;
      }
      return NOT_FETCHED;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMediaPostEmbeds",
    value() {
      return outer1_6;
    }
  };
  items[2] = obj;
  return callback(MediaPostEmbedStore, items);
})(require("initialize").Store);
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
    const merged = Object.assign(obj);
    obj[threadId] = threadId.mediaPostEmbed;
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
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/media_channel/MediaPostEmbedStore.tsx");

export default tmp2;
export const FetchState = obj;
