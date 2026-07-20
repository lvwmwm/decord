// Module ID: 11901
// Function ID: 92152
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11901 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function entryToKey(author_id) {
  return "" + author_id.author_id + ":" + author_id.id;
}
function getMatchingActivity(author_type) {
  const arg1 = author_type;
  let tmp = null;
  if (!obj.isEntryExpired(author_type)) {
    let found;
    if (obj2.isEntryActive(author_type)) {
      if (author_type.author_type === arg1(dependencyMap[10]).ContentInventoryAuthorType.USER) {
        const activities = activities.getActivities(author_type.author_id);
        found = activities.find((type) => {
          if (type.type === constants.PLAYING) {
            if (obj.isApplicationEntry(type)) {
              let result = type(closure_2[12]).isMatchingApplicationActivity(type, type);
              const obj4 = type(closure_2[12]);
            }
            return result;
          }
          let tmp4 = type.type !== constants.LISTENING;
          if (!tmp4) {
            tmp4 = !type(closure_2[11]).isListenedSessionEntry(type);
            const obj2 = type(closure_2[11]);
          }
          result = !tmp4;
          if (!tmp4) {
            result = type(closure_2[12]).isMatchingListeningActivity(type, type);
            const obj3 = type(closure_2[12]);
          }
        });
      }
    }
    tmp = found;
    const obj2 = arg1(dependencyMap[9]);
  }
  return tmp;
}
function detectMatchingActivityForEntries(entries) {
  let iter3;
  const updatedKeys = new Set();
  const matchedKeys = new Set();
  const tmp = _createForOfIteratorHelperLoose(entries);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp2 = closure_17;
      let tmp3 = closure_17(value.content);
      if (undefined !== tmp3) {
        let tmp4 = closure_16;
        let tmp5 = closure_16(value.content);
        let addResult = matchedKeys.add(tmp5);
        let tmp7 = closure_12;
        let tmp8 = tmp5;
        if (tmp3 !== closure_12.get(tmp5)) {
          let addResult1 = updatedKeys.add(tmp5);
          let tmp10 = closure_12;
          let result = closure_12.set(tmp5, tmp3);
          let tmp12 = tmp5;
        }
      }
      iter3 = tmp();
      iter2 = iter3;
    } while (!iter3.done);
  }
  return { updatedKeys, matchedKeys };
}
function handlePresenceUpdates() {
  let done3;
  let iter7;
  const set = new Set();
  const arg1 = set;
  const set1 = new Set();
  const feeds = feeds.getFeeds();
  const tmp2 = _createForOfIteratorHelperLoose(feeds.values());
  const iter = tmp2();
  let iter2 = iter;
  let flag = false;
  let flag2 = false;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp3 = closure_18;
      if (set.size > 0) {
        let entries = value.entries;
        entries = entries.filter((content) => !set.has(callback(content.content)));
      } else {
        entries = value.entries;
      }
      let tmp3Result = tmp3(entries);
      let updatedKeys = tmp3Result.updatedKeys;
      let tmp5 = closure_14;
      let tmp6 = closure_14(updatedKeys);
      let iter3 = tmp6();
      if (!iter3.done) {
        do {
          let addResult = set.add(iter3.value);
          let iter4 = tmp6();
          iter3 = iter4;
          let done = iter4.done;
        } while (!done);
      }
      let tmp8 = closure_14;
      let tmp9 = closure_14(tmp3Result.matchedKeys);
      let iter5 = tmp9();
      if (!iter5.done) {
        do {
          let addResult1 = set1.add(iter5.value);
          let iter6 = tmp9();
          iter5 = iter6;
          let done2 = iter6.done;
        } while (!done2);
      }
      if (!flag) {
        flag = updatedKeys.size > 0;
      }
      iter7 = tmp2();
      iter2 = iter7;
      flag2 = flag;
    } while (!iter7.done);
  }
  const arr = Array.from(map.keys());
  const items = [...set1];
  const tmp11 = _createForOfIteratorHelperLoose(importDefault(dependencyMap[13]).difference(arr, items));
  let iter8 = tmp11();
  if (!iter8.done) {
    do {
      let tmp12 = closure_12;
      let deleteResult = closure_12.delete(iter8.value);
      let iter9 = tmp11();
      iter8 = iter9;
      flag2 = true;
      done3 = iter9.done;
    } while (!done3);
  }
  return flag2;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const ActivityTypes = arg1(dependencyMap[7]).ActivityTypes;
const items = [arg1(dependencyMap[8]).ContentInventoryEntryType.LISTENED_SESSION];
const set = new Set(items);
const map = new Map();
let tmp4 = (Store) => {
  class ContentInventoryActivityStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, ContentInventoryActivityStore);
      items1 = [...items];
      obj = closure_6(ContentInventoryActivityStore);
      tmp2 = closure_5;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      ContentInventoryActivityStore = tmp2Result;
      tmp2Result.canRenderContent = (content_type) => {
        let tmp = !tmp2Result(closure_2[9]).isEntryExpired(content_type);
        if (tmp) {
          let tmp3 = !set.has(content_type.content_type);
          if (!tmp3) {
            tmp3 = null != tmp2Result.getMatchingActivity(content_type);
          }
          tmp = tmp3;
        }
        return tmp;
      };
      return tmp2Result;
    }
  }
  const arg1 = ContentInventoryActivityStore;
  callback2(ContentInventoryActivityStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_8);
      const items = [closure_8];
      this.syncWith(items, closure_19);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getMatchingActivity",
    value(content) {
      let value = null;
      if (!obj.isEntryExpired(content)) {
        value = closure_12.get(callback4(content));
      }
      return value;
    }
  };
  items[1] = obj;
  return callback(ContentInventoryActivityStore, items);
}(importDefault(dependencyMap[14]).Store);
tmp4.displayName = "ContentInventoryActivityStore";
tmp4 = new tmp4(importDefault(dependencyMap[15]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
  },
  CONTENT_INVENTORY_SET_FEED: function handleSetContentInventoryFeed(feed) {
    return detectMatchingActivityForEntries(feed.feed.entries).updatedKeys.size > 0;
  }
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/content_inventory/ContentInventoryActivityStore.tsx");

export default tmp4;
export { entryToKey };
