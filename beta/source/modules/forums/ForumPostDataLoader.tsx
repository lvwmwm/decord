// Module ID: 6722
// Function ID: 6723
// Name: ForumPostDataLoader
// Dependencies: [5, 2045, 6723, 6695, 6726, 1074, 12, 11, 504, 1271, 573, 2]
// Exports: preloadForumThreads, useFirstForumPostMessage, useMostRecentForumMessage

// Module 6722 (ForumPostDataLoader)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1074 */;
import ForumActivePostStore from "ForumActivePostStore" /* 6723 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 6695 */;
import ForumPostRecentMessageStore from "ForumPostRecentMessageStore" /* 6726 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, c6, closure_3, set;

const _defaultValueFunc = () => {
  set = new Set();
  return set;
};
function loadForumPostData() {
  return obj(...arguments);
}
let obj = function _loadForumPostData() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp;
            c3 = 1;
            if (!closure_2_10.hasNext()) {
              c3 = 0;
              c11 = null;
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          c11 = null;
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c11 = null;
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        c1 = 2;
        c4 = 1;
        const obj4 = { value: closure_128_14(closure_128_10.next()), done: false };
        return obj4;
      } catch (tmp16) {
        closure_2 = tmp16;
        if (0 === c3) {
          c4 = 3;
          throw tmp16;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function loadForumPostDataForChannelId() {
  return obj(...arguments);
}
obj = function _loadForumPostDataForChannelId() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj4;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let guild_id;
        let threads;
        let nextBatch;
        let postResult;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            guild_id = undefined;
            threads = undefined;
            nextBatch = closure_2_10.getNextBatch(closure_0, 10);
            c4 = 2;
            if (0 === nextBatch.length) {
              c4 = 0;
              postResult = closure_2_10;
              closure_2_10.finishRequesting(closure_0, nextBatch);
              c6 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              channel = channel.getChannel(tmp44);
              guild_id = undefined;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              if (null == guild_id) {
                c4 = 0;
                postResult = closure_2_10;
                closure_2_10.finishRequesting(closure_0, nextBatch);
                c6 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                const HTTP = require("HTTPUtils").HTTP;
                const request = { url: Endpoints.FORUM_POSTS(closure_0), body: obj4, rejectWithError: true };
                const post = HTTP.post;
                obj4 = { thread_ids: nextBatch };
                postResult = post(request);
                c5 = 3;
                c6 = 1;
                const obj5 = { value: postResult, done: false };
                return obj5;
              }
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          postResult = closure_130_10.finishRequesting(closure_0, nextBatch);
          throw closure_3;
        } else {
          if (2 === c5) {
            c4 = 1;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            postResult = closure_0;
            closure_130_10.finishRequesting(closure_0, nextBatch);
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            threads = value.body.threads;
            const obj7 = { type: "LOAD_FORUM_POSTS", guildId: guild_id, threads };
            obj = closure_130_1(closure_130_2[10]);
            obj.dispatch(obj7);
            c4 = 1;
          }
          c4 = 0;
          postResult = closure_0;
          closure_130_10.finishRequesting(closure_0, nextBatch);
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp37) {
        closure_3 = tmp37;
        if (0 === c4) {
          c6 = 3;
          throw tmp37;
        } else if (1 === tmp39) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const computeThreadIdsSnapshot = ForumActivePostStore.computeThreadIdsSnapshot;
const Endpoints = Constants.Endpoints;
class DefaultDict {
  constructor(_defaultValueFunc) {
    obj = Object.create(new.target.prototype);
    obj._set = {};
    obj._defaultValueFunc = _defaultValueFunc;
    return obj;
  }
  get(keys) {
    const self = this;
    const _set = this._set;
    if (!_set.hasOwnProperty(keys)) {
      self._set[keys] = self._defaultValueFunc();
    }
    return self._set[keys];
  }
  delete(arg0) {
    delete this._set[arg0];
  }
  hasNext() {
    obj = _modDef12;
    return !obj.isEmpty(this._set);
  }
  next() {
    obj = SnowflakeUtilsDefault;
    return obj.keys(this._set)[0];
  }
}
const prototype = DefaultDict.prototype;
class RequestQueue {
  constructor() {
    if (typeof DefaultDict === "function") {
      obj = Object.create(new.target.prototype);
      const fn = _defaultValueFunc;
      const obj2 = Object.create(tmp.prototype);
      obj2._set = {};
      obj2._defaultValueFunc = fn;
      obj.requested = obj2;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  request(arg0, arg1) {
    const requested = this.requested;
    const value = requested.get(arg0);
    value.add(arg1);
  }
  hasRequested(id, id2) {
    const requested = this.requested;
    const value = requested.get(id);
    return value.has(id2);
  }
  finishRequesting(arg0, nextBatch) {
    const requested = this.requested;
    let closure_0 = requested.get(arg0);
    const item = nextBatch.forEach((item) => set.delete(item));
    obj.compact(arg0);
  }
  getRequested(arg0) {
    const requested = this.requested;
    return requested.get(arg0);
  }
  getNextBatch(arg0, arg1) {
    const requested = this.requested;
    const arr = Array.from(requested.get(arg0));
    return arr.slice(0, arg1);
  }
  hasNext() {
    const requested = this.requested;
    return requested.hasNext();
  }
  next() {
    const iter = this.requested;
    return iter.next();
  }
  compact(arg0) {
    const requested = this.requested;
    if (0 === requested.get(arg0).size) {
      const requested2 = this.requested;
      requested2.delete(arg0);
    }
  }
}
const prototype2 = RequestQueue.prototype;
obj = Object.create(RequestQueue.prototype);
let obj3 = Object.create(DefaultDict.prototype);
obj3._set = {};
obj3._defaultValueFunc = _defaultValueFunc;
obj.requested = obj3;
let c11 = null;
const result = size.fileFinishedImporting("modules/forums/ForumPostDataLoader.tsx");

export const BATCH_SIZE = 10;
export const useFirstForumPostMessage = function useFirstForumPostMessage(stateFromStores, arg1) {
  let closure_11;
  let firstMessage;
  let loaded;
  let timeout;
  let tmp22;
  _require = stateFromStores;
  obj = arg1;
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
  const items = [ForumPostMessagesStore];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => ForumPostMessagesStore.getMessage(stateFromStores.id));
  ({ loaded, firstMessage } = stateFromStoresObject);
  const items1 = [ChannelStore];
  const obj3 = require("get initialized");
  stateFromStores = obj3.useStateFromStores(items1, () => ChannelStore.getChannel(stateFromStores.parent_id));
  let tmp3 = flag && null != stateFromStores;
  if (tmp3) {
    tmp3 = !loaded && null == firstMessage;
    const tmp5 = !loaded && null == firstMessage;
  }
  if (tmp3) {
    let c1;
    const id = stateFromStores.id;
    if (flag2) {
      const items2 = [id];
      c1 = false;
      const item = items2.forEach((item) => {
        const message = ForumPostMessagesStore.getMessage(item);
        const tmp3 = !message.loaded && null == tmp2;
        if (tmp3) {
          obj.request(channel.id, item);
          c1 = true;
        }
      });
      const tmp17 = c1 && null == timeout;
      if (tmp17) {
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(loadForumPostData, 0);
      }
    } else if (!obj.hasRequested(stateFromStores.id, id)) {
      const arr3 = computeThreadIdsSnapshot(stateFromStores.id);
      const findIndexResult = arr3.findIndex((item) => item === id);
      const substr = arr3.slice(findIndexResult, findIndexResult + 5);
      const found = substr.filter((item) => !obj.hasRequested(stateFromStores.id, item));
      c1 = false;
      const item1 = found.forEach((item) => {
        const message = ForumPostMessagesStore.getMessage(item);
        const tmp3 = !message.loaded && null == tmp2;
        if (tmp3) {
          obj.request(channel.id, item);
          c1 = true;
        }
      });
      const tmp11 = c1 && null == timeout;
      if (tmp11) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(loadForumPostData, 0);
      }
    }
  }
  const obj4 = { loaded, firstMessage: tmp22 };
  tmp22 = null;
  if (flag) {
    tmp22 = firstMessage;
  }
  return obj4;
};
export const useMostRecentForumMessage = function useMostRecentForumMessage(arg0, arg1) {
  let id;
  _require = arg1;
  const items = [ForumPostRecentMessageStore];
  obj = require("get initialized");
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ForumPostRecentMessageStore.getMessageState(id.id));
  return { loaded: stateFromStoresObject.loaded, mostRecentMessage: stateFromStoresObject.message };
};
export const preloadForumThreads = function preloadForumThreads(channel) {
  let closure_11;
  let timeout;
  const arr = computeThreadIdsSnapshot(channel.id);
  const substr = arr.slice(0, 10);
  let c1 = false;
  const item = substr.forEach((item) => {
    const message = ForumPostMessagesStore.getMessage(item);
    const tmp3 = !message.loaded && null == tmp2;
    if (tmp3) {
      obj.request(channel.id, item);
      c1 = true;
    }
  });
  let tmp2 = c1;
  if (tmp2) {
    let tmp3 = timeout;
    tmp2 = null == timeout;
  }
  if (tmp2) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(loadForumPostData, 0);
  }
};
