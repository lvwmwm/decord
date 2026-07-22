// Module ID: 5676
// Function ID: 48756
// Name: _shouldRequestFirstMessage
// Dependencies: []
// Exports: preloadForumThreads, useFirstForumPostMessage, useMostRecentForumMessage

// Module 5676 (_shouldRequestFirstMessage)
function _shouldRequestFirstMessage(loaded, firstMessage) {
  let tmp = !loaded;
  if (tmp) {
    tmp = null == firstMessage;
  }
  return tmp;
}
function loadMultipleForumPostData(stateFromStores, arr) {
  arr = stateFromStores;
  let closure_1 = false;
  const item = arr.forEach((arg0) => {
    const message = message.getMessage(arg0);
    if (callback(message.loaded, message.firstMessage)) {
      closure_12.request(arg0.id, arg0);
      let closure_1 = true;
    }
  });
  let tmp2 = closure_1;
  if (closure_1) {
    tmp2 = null == timeout;
  }
  if (tmp2) {
    const _setTimeout = setTimeout;
    const timeout = setTimeout(loadForumPostData, 0);
  }
}
function loadForumPostData() {
  return _loadForumPostData(...arguments);
}
async function _loadForumPostData() {
  if (closure_12.hasNext()) {
    yield closure_18(closure_12.next());
    do {
      let tmp4 = closure_12;
    } while (closure_12.hasNext());
  }
  let closure_13 = null;
}
function loadForumPostDataForChannelId() {
  return _loadForumPostDataForChannelId(...arguments);
}
async function _loadForumPostDataForChannelId(channelId, arg1) {
  const nextBatch = closure_12.getNextBatch(channelId, 10);
  if (0 === nextBatch.length) {
    closure_12.finishRequesting(tmp, nextBatch);
  } else {
    const channel = channel.getChannel(tmp);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    if (null == guild_id) {
      closure_12.finishRequesting(tmp, nextBatch);
    } else {
      const HTTP = callback(closure_2[11]).HTTP;
      let obj = { url: closure_10.FORUM_POSTS(tmp) };
      obj = { thread_ids: nextBatch };
      obj.body = obj;
      obj.rejectWithError = true;
      obj = callback2(closure_2[12]);
      const obj1 = { type: "LOAD_FORUM_POSTS", guildId: guild_id, threads: yield HTTP.post(obj).body.threads };
      obj.dispatch(obj1);
      closure_12.finishRequesting(tmp, nextBatch);
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const computeThreadIdsSnapshot = arg1(dependencyMap[4]).computeThreadIdsSnapshot;
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const Endpoints = arg1(dependencyMap[7]).Endpoints;
let closure_11 = () => {
  class DefaultDict {
    constructor(arg0) {
      tmp = closure_4(this, DefaultDict);
      this._set = {};
      this._defaultValueFunc = arg0;
      return;
    }
  }
  const arg1 = DefaultDict;
  let obj = {
    key: "get",
    value(arg0) {
      const self = this;
      const _set = this._set;
      if (!_set.hasOwnProperty(arg0)) {
        self._set[arg0] = self._defaultValueFunc();
      }
      return self._set[arg0];
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "delete",
    value(arg0) {
      delete r1[r0];
    }
  };
  items[1] = obj;
  obj = {
    key: "hasNext",
    value() {
      return !callback(closure_2[8]).isEmpty(this._set);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "next",
    value() {
      return callback(closure_2[9]).keys(this._set)[0];
    }
  };
  return callback2(DefaultDict, items);
}();
let tmp2 = () => {
  class RequestQueue {
    constructor() {
      tmp = closure_4(this, RequestQueue);
      tmp2 = new closure_11(() => new Set());
      this.requested = tmp2;
      return;
    }
  }
  const arg1 = RequestQueue;
  let obj = {
    key: "request",
    value(arg0, arg1) {
      const requested = this.requested;
      const value = requested.get(arg0);
      value.add(arg1);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "hasRequested",
    value(arg0, arg1) {
      const requested = this.requested;
      const value = requested.get(arg0);
      return value.has(arg1);
    }
  };
  items[1] = obj;
  obj = {
    key: "finishRequesting",
    value(arg0, arr) {
      const requested = this.requested;
      let closure_0 = requested.get(arg0);
      const item = arr.forEach((arg0) => set.delete(arg0));
      closure_12.compact(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getRequested",
    value(arg0) {
      const requested = this.requested;
      return requested.get(arg0);
    }
  };
  items[4] = {
    key: "getNextBatch",
    value(arg0, arg1) {
      const requested = this.requested;
      return Array.from(requested.get(arg0)).slice(0, arg1);
    }
  };
  items[5] = {
    key: "hasNext",
    value() {
      const requested = this.requested;
      return requested.hasNext();
    }
  };
  items[6] = {
    key: "next",
    value() {
      return this.requested.next();
    }
  };
  items[7] = {
    key: "compact",
    value(arg0) {
      const requested = this.requested;
      if (0 === requested.get(arg0).size) {
        const requested2 = this.requested;
        requested2.delete(arg0);
      }
    }
  };
  return callback2(RequestQueue, items);
}();
tmp2 = new tmp2();
let closure_13 = null;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/forums/ForumPostDataLoader.tsx");

export const BATCH_SIZE = 10;
export const useFirstForumPostMessage = function useFirstForumPostMessage(stateFromStores, arg1) {
  let firstMessage;
  let loaded;
  let obj = arg1;
  arg1 = stateFromStores;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.enabled;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = obj.allowArchived;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const items = [closure_8];
  const stateFromStoresObject = arg1(dependencyMap[10]).useStateFromStoresObject(items, () => message.getMessage(arg0.id));
  ({ loaded, firstMessage } = stateFromStoresObject);
  const obj2 = arg1(dependencyMap[10]);
  const items1 = [closure_6];
  stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items1, () => channel.getChannel(arg0.parent_id));
  let tmp3 = flag;
  if (flag) {
    tmp3 = null != stateFromStores;
  }
  if (tmp3) {
    tmp3 = _shouldRequestFirstMessage(loaded, firstMessage);
  }
  if (tmp3) {
    if (flag2) {
      const items2 = [stateFromStores.id];
      loadMultipleForumPostData(stateFromStores, items2);
    } else {
      function preloadForumPostDataFrom(stateFromStores, id) {
        if (!closure_12.hasRequested(stateFromStores.id, id)) {
          const arr = callback(stateFromStores.id);
          const findIndexResult = arr.findIndex((arg0) => arg0 === arg1);
          const substr = arr.slice(findIndexResult, findIndexResult + 5);
          callback2(stateFromStores, substr.filter((arg0) => !closure_12.hasRequested(arg0.id, arg0)));
        }
      }(stateFromStores, stateFromStores.id);
    }
  }
  obj = { loaded };
  let tmp9 = null;
  if (flag) {
    tmp9 = firstMessage;
  }
  obj.firstMessage = tmp9;
  return obj;
};
export const useMostRecentForumMessage = function useMostRecentForumMessage(arg0, arg1) {
  let obj = arg1(dependencyMap[10]);
  const items = [closure_9];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => messageState.getMessageState(arg1.id));
  obj = { loaded: stateFromStoresObject.loaded, mostRecentMessage: stateFromStoresObject.message };
  return obj;
};
export const preloadForumThreads = function preloadForumThreads(channel) {
  loadMultipleForumPostData(channel, computeThreadIdsSnapshot(channel.id).slice(0, 10));
};
