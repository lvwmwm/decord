// Module ID: 7004
// Function ID: 56133
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7004 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isForumLikeChannel(channelId) {
  const channel = channel.getChannel(channelId);
  return !(null == channel || !channel.isForumLikeChannel());
}
function getOrCreateSearchState(arg0) {
  let obj = closure_6[arg0];
  if (null == obj) {
    obj = {};
  }
  closure_6[arg0] = obj;
  return obj;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = {};
let tmp2 = (Store) => {
  class ForumSearchStore {
    constructor() {
      self = this;
      tmp = ForumSearchStore(this, ForumSearchStore);
      obj = closure_3(ForumSearchStore);
      tmp2 = closure_2;
      if (closure_7()) {
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
  let closure_0 = ForumSearchStore;
  callback2(ForumSearchStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_5);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getSearchQuery",
    value(arg0) {
      let query;
      if (null != closure_6[arg0]) {
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
      if (null != closure_6[arg0]) {
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
      if (null != closure_6[arg0]) {
        results = tmp.results;
      }
      return results;
    }
  };
  items[4] = {
    key: "getHasSearchResults",
    value(arg0) {
      let results;
      if (null != closure_6[arg0]) {
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
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "ForumSearchStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_6 = {};
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    let closure_0 = channel;
    const parent_id = channel.parent_id;
    if (null == parent_id) {
      return false;
    } else if (null == closure_6[parent_id]) {
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
      closure_6[parent_id] = obj;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    delete r1[r0];
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
    const tmp = isForumLikeChannel(channelId.channelId);
    if (tmp) {
      delete r1[r2];
    }
    return tmp;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/forums/ForumSearchStore.tsx");

export default tmp2;
