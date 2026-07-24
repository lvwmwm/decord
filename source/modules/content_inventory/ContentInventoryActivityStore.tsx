// Module ID: 11948
// Function ID: 92492
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4217, 8351, 653, 7901, 7906, 8370, 8356, 8352, 22, 566, 686, 2]

// Module 11948 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import dispatcher from "dispatcher";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { ActivityTypes } from "ME";
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
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
function entryToKey(content) {
  return "" + content.author_id + ":" + content.id;
}
function getMatchingActivity(closure_0) {
  const _require = closure_0;
  let tmp = null;
  if (!obj.isEntryExpired(closure_0)) {
    let found;
    if (obj2.isEntryActive(closure_0)) {
      if (closure_0.author_type === _require(8370).ContentInventoryAuthorType.USER) {
        activities = activities.getActivities(closure_0.author_id);
        found = activities.find((type) => {
          if (type.type === outer1_10.PLAYING) {
            if (obj.isApplicationEntry(callback)) {
              let result = callback(outer1_2[12]).isMatchingApplicationActivity(callback, type);
              const obj4 = callback(outer1_2[12]);
            }
            return result;
          }
          let tmp4 = type.type !== outer1_10.LISTENING;
          if (!tmp4) {
            tmp4 = !callback(outer1_2[11]).isListenedSessionEntry(callback);
            const obj2 = callback(outer1_2[11]);
          }
          result = !tmp4;
          if (!tmp4) {
            result = callback(outer1_2[12]).isMatchingListeningActivity(callback, type);
            const obj3 = callback(outer1_2[12]);
          }
        });
      }
    }
    tmp = found;
    obj2 = _require(7906);
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
      let tmp2 = getMatchingActivity;
      let tmp3 = getMatchingActivity(value.content);
      if (undefined !== tmp3) {
        let tmp4 = entryToKey;
        let tmp5 = entryToKey(value.content);
        let addResult = matchedKeys.add(tmp5);
        let tmp7 = map;
        let tmp8 = tmp5;
        if (tmp3 !== map.get(tmp5)) {
          let addResult1 = updatedKeys.add(tmp5);
          let tmp10 = map;
          let result = map.set(tmp5, tmp3);
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
  const set1 = new Set();
  feeds = feeds.getFeeds();
  const tmp2 = _createForOfIteratorHelperLoose(feeds.values());
  const iter = tmp2();
  let iter2 = iter;
  let flag = false;
  let flag2 = false;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp3 = detectMatchingActivityForEntries;
      if (set.size > 0) {
        let entries = value.entries;
        entries = entries.filter((content) => !set.has(outer1_16(content.content)));
      } else {
        entries = value.entries;
      }
      let tmp3Result = tmp3(entries);
      let updatedKeys = tmp3Result.updatedKeys;
      let tmp5 = _createForOfIteratorHelperLoose;
      let tmp6 = _createForOfIteratorHelperLoose(updatedKeys);
      let iter3 = tmp6();
      if (!iter3.done) {
        do {
          let addResult = set.add(iter3.value);
          let iter4 = tmp6();
          iter3 = iter4;
          done = iter4.done;
        } while (!done);
      }
      let tmp8 = _createForOfIteratorHelperLoose;
      let tmp9 = _createForOfIteratorHelperLoose(tmp3Result.matchedKeys);
      let iter5 = tmp9();
      if (!iter5.done) {
        do {
          let addResult1 = set1.add(iter5.value);
          let iter6 = tmp9();
          iter5 = iter6;
          done2 = iter6.done;
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
  const tmp11 = _createForOfIteratorHelperLoose(importDefault(22).difference(arr, items));
  let iter8 = tmp11();
  if (!iter8.done) {
    do {
      let tmp12 = map;
      let deleteResult = map.delete(iter8.value);
      let iter9 = tmp11();
      iter8 = iter9;
      flag2 = true;
      done3 = iter9.done;
    } while (!done3);
  }
  return flag2;
}
let items = [require("ContentInventoryEntryType").ContentInventoryEntryType.LISTENED_SESSION];
let set = new Set(items);
const map = new Map();
let tmp4 = ((Store) => {
  class ContentInventoryActivityStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.canRenderContent = (content_type) => {
        let tmp = !ContentInventoryActivityStore(outer2_2[9]).isEntryExpired(content_type);
        if (tmp) {
          let tmp3 = !outer2_11.has(content_type.content_type);
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
  callback2(ContentInventoryActivityStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_8);
      const items = [outer1_8];
      this.syncWith(items, outer1_19);
    }
  };
  let items = [obj, ];
  obj = {
    key: "getMatchingActivity",
    value(content) {
      let value = null;
      if (!obj.isEntryExpired(content)) {
        value = outer1_12.get(outer1_16(content));
      }
      return value;
    }
  };
  items[1] = obj;
  return callback(ContentInventoryActivityStore, items);
})(require("initialize").Store);
tmp4.displayName = "ContentInventoryActivityStore";
tmp4 = new tmp4(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
  },
  CONTENT_INVENTORY_SET_FEED: function handleSetContentInventoryFeed(feed) {
    return detectMatchingActivityForEntries(feed.feed.entries).updatedKeys.size > 0;
  }
});
let result = set.fileFinishedImporting("modules/content_inventory/ContentInventoryActivityStore.tsx");

export default tmp4;
export { entryToKey };
