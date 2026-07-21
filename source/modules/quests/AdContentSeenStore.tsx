// Module ID: 13860
// Function ID: 104823
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13860 (_isNativeReflectConstruct)
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
function getOrCreateSet(QUEST) {
  let value = map.get(QUEST);
  if (null == value) {
    const _Set = Set;
    const set = new Set();
    const result = map.set(QUEST, set);
    value = set;
  }
  return value;
}
function syncWithQuestStore() {
  let iter3;
  let iter5;
  let iter7;
  let tmp4;
  let tmp5;
  const quests = store.quests;
  const obj = getOrCreateSet(arg1(dependencyMap[7]).AdCreativeType.QUEST);
  const tmp = _createForOfIteratorHelperLoose(quests);
  const iter = tmp();
  let iter2 = iter;
  let flag = false;
  let flag2 = false;
  if (!iter.done) {
    do {
      let tmp2 = closure_7;
      let tmp3 = closure_7(iter2.value, 2);
      [tmp4, tmp5] = tmp3;
      let hasItem = obj.has(tmp4);
      if (!hasItem) {
        let tmp7 = closure_0;
        let tmp8 = closure_1;
        let obj2 = closure_0(closure_1[8]);
        hasItem = obj2.isQuestExpired(tmp5);
      }
      if (!hasItem) {
        let userStatus = tmp5.userStatus;
        let tmp9 = null == userStatus;
        if (!tmp9) {
          let tmp10 = null == userStatus.enrolledAt && null == userStatus.completedAt && null == userStatus.claimedAt && 0 === userStatus.dismissedQuestContent;
          tmp9 = tmp10;
        }
        hasItem = tmp9;
        let tmp11 = userStatus;
      }
      if (!hasItem) {
        let addResult = obj.add(tmp4);
        flag = true;
      }
      iter3 = tmp();
      iter2 = iter3;
      flag2 = flag;
    } while (!iter3.done);
  }
  let tmp13 = flag2;
  if (0 !== store.lastFetchedCurrentQuests) {
    tmp13 = flag2;
    if (quests.size > 0) {
      const tmp15 = _createForOfIteratorHelperLoose(obj);
      let iter4 = tmp15();
      let flag3 = flag2;
      tmp13 = flag2;
      if (!iter4.done) {
        do {
          let value = iter4.value;
          value = quests.get(value);
          let isQuestExpiredResult = null == value;
          if (!isQuestExpiredResult) {
            let tmp18 = closure_0;
            let tmp19 = closure_1;
            let obj3 = closure_0(closure_1[8]);
            isQuestExpiredResult = obj3.isQuestExpired(value);
          }
          if (isQuestExpiredResult) {
            let deleteResult = obj.delete(value);
            flag3 = true;
          }
          iter5 = tmp15();
          iter4 = iter5;
          tmp13 = flag3;
        } while (!iter5.done);
      }
    }
  }
  const obj4 = getOrCreateSet(arg1(dependencyMap[7]).AdCreativeType.QUEST_HOME_HERO);
  let tmp21 = tmp13;
  if (null != store.getLastFetchedQuestHomeHero()) {
    tmp21 = tmp13;
    if (obj4.size > 0) {
      const questHomeHero = store.getQuestHomeHero();
      const tmp25 = _createForOfIteratorHelperLoose(obj4);
      let iter6 = tmp25();
      let flag4 = tmp13;
      tmp21 = tmp13;
      if (!iter6.done) {
        do {
          value = iter6.value;
          let tmp26 = null != questHomeHero && value === questHomeHero.id;
          if (!tmp26) {
            let deleteResult1 = obj4.delete(value);
            flag4 = true;
          }
          iter7 = tmp25();
          iter6 = iter7;
          tmp21 = flag4;
        } while (!iter7.done);
      }
    }
  }
  return tmp21;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const map = new Map();
let tmp3 = (PersistedStore) => {
  class AdContentSeenStore {
    constructor() {
      self = this;
      tmp = closure_2(this, AdContentSeenStore);
      obj = closure_5(AdContentSeenStore);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = AdContentSeenStore;
  callback2(AdContentSeenStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(seenContentIds) {
      let length;
      const self = this;
      this.waitFor(closure_8);
      const map = new Map();
      if (null != seenContentIds) {
        const _Object = Object;
        const entries = Object.entries(seenContentIds.seenContentIds);
        let num = 0;
        if (0 < entries.length) {
          do {
            let tmp3 = closure_7;
            let tmp4 = closure_7(entries[num], 2);
            let tmp5 = tmp4[1];
            let tmp6 = closure_9;
            let _Number = Number;
            let _Set = Set;
            let tmp8 = new.target;
            let tmp9 = new.target;
            let tmp10 = tmp5;
            let NumberResult = Number(tmp4[0]);
            let set = new Set(tmp5);
            let tmp12 = set;
            let result = closure_9.set(NumberResult, set);
            num = num + 1;
            length = entries.length;
          } while (num < length);
        }
      }
      const items = [closure_8];
      self.syncWith(items, closure_14);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getState",
    value() {
      let done;
      const seenContentIds = {};
      const tmp = callback4(closure_9);
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = closure_7;
          let tmp3 = closure_7(iter.value, 2);
          let _Array = Array;
          seenContentIds[tmp3[0]] = Array.from(tmp3[1]);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      return { seenContentIds };
    }
  };
  items[1] = obj;
  obj = {
    key: "hasSeen",
    value(arg0, arg1) {
      const value = closure_9.get(arg0);
      let hasItem;
      if (null != value) {
        hasItem = value.has(arg1);
      }
      return null != hasItem && hasItem;
    }
  };
  items[2] = obj;
  return callback(AdContentSeenStore, items);
}(importDefault(dependencyMap[9]).PersistedStore);
tmp3.displayName = "AdContentSeenStore";
tmp3.persistKey = "AdContentSeenStore";
tmp3 = new tmp3(importDefault(dependencyMap[10]), {
  AD_CONTENT_MARK_SEEN: function handleMarkSeen(adCreativeType) {
    let iter3;
    const obj = getOrCreateSet(adCreativeType.adCreativeType);
    const tmp = _createForOfIteratorHelperLoose(adCreativeType.contentIds);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        if (!obj.has(value)) {
          let addResult = obj.add(value);
          flag = true;
        }
        iter3 = tmp();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    return flag2;
  },
  AD_CONTENT_MARK_UNSEEN: function handleMarkUnseen(adCreativeType) {
    let iter3;
    let value = map.get(adCreativeType.adCreativeType);
    if (null == value) {
      return false;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(adCreativeType.contentIds);
      const iter = tmp2();
      let iter2 = iter;
      let flag = false;
      let flag2 = false;
      if (!iter.done) {
        do {
          value = iter2.value;
          if (value.has(value)) {
            let deleteResult = value.delete(value);
            flag = true;
          }
          iter3 = tmp2();
          iter2 = iter3;
          flag2 = flag;
        } while (!iter3.done);
      }
      return flag2;
    }
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/quests/AdContentSeenStore.tsx");

export default tmp3;
