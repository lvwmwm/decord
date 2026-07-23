// Module ID: 7010
// Function ID: 56190
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 566, 686, 2]

// Module 7010 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
function isForumLikeChannel(channelId) {
  channel = channel.getChannel(channelId);
  return !(null == channel || !channel.isForumLikeChannel());
}
function getOrCreateSearchState(arg0) {
  let obj = dependencyMap[arg0];
  if (null == obj) {
    obj = { query: null, loading: false, results: null };
  }
  dependencyMap[arg0] = obj;
  return obj;
}
let closure_6 = {};
let tmp2 = ((Store) => {
  class ForumSearchStore {
    constructor() {
      self = this;
      tmp = ForumSearchStore(this, ForumSearchStore);
      obj = outer1_3(ForumSearchStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
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
  callback2(ForumSearchStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_5);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getSearchQuery",
    value(arg0) {
      let query;
      if (null != outer1_6[arg0]) {
        query = tmp.query;
      }
      return query;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSearchLoading",
    value(arg0) {
      let loading;
      if (null != outer1_6[arg0]) {
        loading = tmp.loading;
      }
      return null != loading && loading;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSearchResults",
    value(arg0) {
      let results;
      if (null != outer1_6[arg0]) {
        results = tmp.results;
      }
      return results;
    }
  };
  items[4] = {
    key: "getHasSearchResults",
    value(arg0) {
      let results;
      if (null != outer1_6[arg0]) {
        results = tmp.results;
      }
      let tmp3 = null != results;
      if (tmp3) {
        tmp3 = tmp.results.length > 0;
      }
      return tmp3;
    }
  };
  return callback(ForumSearchStore, items);
})(require("initialize").Store);
tmp2.displayName = "ForumSearchStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_6 = {};
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    const parent_id = channel.parent_id;
    if (null == parent_id) {
      return false;
    } else if (null == dependencyMap[parent_id]) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(tmp2);
      const results = tmp2.results;
      let found;
      if (null != results) {
        found = results.filter((arg0) => channel.id !== arg0);
      }
      obj["results"] = found;
      dependencyMap[parent_id] = obj;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    delete tmp2[tmp];
    return channel.channel.id;
  },
  FORUM_SEARCH_QUERY_UPDATED: function handleForumSearchQueryUpdated(channelId) {
    channelId = channelId.channelId;
    if (isForumLikeChannel(channelId)) {
      const obj = {};
      const merged = Object.assign(getOrCreateSearchState(channelId));
      obj["query"] = channelId.query;
      closure_6[channelId] = obj;
    } else {
      return false;
    }
  },
  FORUM_SEARCH_START: function handleForumSearchStart(channelId) {
    channelId = channelId.channelId;
    if (isForumLikeChannel(channelId)) {
      const obj = {};
      const merged = Object.assign(getOrCreateSearchState(channelId));
      obj["loading"] = true;
      closure_6[channelId] = obj;
    } else {
      return false;
    }
  },
  FORUM_SEARCH_SUCCESS: function handleForumSearchSuccess(channelId) {
    channelId = channelId.channelId;
    if (isForumLikeChannel(channelId)) {
      const obj = {};
      const merged = Object.assign(getOrCreateSearchState(channelId));
      obj["loading"] = false;
      obj["results"] = channelId.threadIds;
      closure_6[channelId] = obj;
    } else {
      return false;
    }
  },
  FORUM_SEARCH_FAILURE: function handleForumSearchFailure(channelId) {
    channelId = channelId.channelId;
    if (isForumLikeChannel(channelId)) {
      const obj = {};
      const merged = Object.assign(getOrCreateSearchState(channelId));
      obj["loading"] = false;
      obj["results"] = [];
      closure_6[channelId] = obj;
    } else {
      return false;
    }
  },
  FORUM_SEARCH_CLEAR: function handleForumSearchClear(channelId) {
    const tmp3 = isForumLikeChannel(channelId.channelId);
    if (tmp3) {
      delete tmp[tmp2];
    }
    return tmp3;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/forums/ForumSearchStore.tsx");

export default tmp2;
