// Module ID: 16073
// Function ID: 123446
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 16073 (_createForOfIteratorHelperLoose)
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let tmp2 = (arg0) => {
  class MobileGameCommunitiesManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, MobileGameCommunitiesManager);
      items1 = [...items];
      obj = closure_6(MobileGameCommunitiesManager);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      MobileGameCommunitiesManager = tmp2Result;
      tmp2Result.actions = {
        LOCAL_APP_DETECTION_COMPLETE(arg0) {
              return tmp2Result.handleLocalAppDetectionComplete(arg0);
            },
        POST_CONNECTION_OPEN() {
              return tmp2Result.handlePostConnectionOpen();
            }
      };
      return tmp2Result;
    }
  }
  const arg1 = MobileGameCommunitiesManager;
  callback2(MobileGameCommunitiesManager, arg0);
  let obj = {
    key: "_fetchGameCommunities",
    value(arg0) {
      const gameIdsForDetectedGames = MobileGameCommunitiesManager(closure_2[7]).getGameIdsForDetectedGames(arg0);
      const timestamp = Date.now();
      const diff = timestamp - store.getLastFetchedAt();
      if (diff >= 86400000) {
        const dismissedGuildIds = store.getDismissedGuildIds();
        const _Array = Array;
        const mobileGameCommunities = callback(closure_2[8]).fetchMobileGameCommunities(gameIdsForDetectedGames, Array.from(dismissedGuildIds), 6);
        const obj2 = callback(closure_2[8]);
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "handlePostConnectionOpen",
    value() {
      let done;
      const self = this;
      const GameCommunityUpsellMultiExperiment = MobileGameCommunitiesManager(closure_2[9]).GameCommunityUpsellMultiExperiment;
      if (GameCommunityUpsellMultiExperiment.getConfig({ location: "MobileGameCommunitiesManager" }).enabled) {
        if (0 === store.getLastFetchedAt()) {
          const _Object = Object;
          const values = Object.values(userAgnosticState.getUserAgnosticState().apps);
          if (values.some((lastScannedAt) => {
            lastScannedAt = undefined;
            if (null != lastScannedAt) {
              lastScannedAt = lastScannedAt.lastScannedAt;
            }
            return null != lastScannedAt;
          })) {
            const obj = {};
            const tmp5 = callback4(MobileGameCommunitiesManager(closure_2[10]).ALL_DETECTABLE_APP_NAMES);
            let iter = tmp5();
            if (!iter.done) {
              do {
                let value = iter.value;
                let tmp6 = closure_8;
                obj[value] = closure_8.isAppInstalled(value);
                let iter2 = tmp5();
                iter = iter2;
                done = iter2.done;
              } while (!done);
            }
            const result = self._fetchGameCommunities(obj);
          }
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleLocalAppDetectionComplete",
    value(result) {
      const self = this;
      const GameCommunityUpsellMultiExperiment = MobileGameCommunitiesManager(closure_2[9]).GameCommunityUpsellMultiExperiment;
      if (GameCommunityUpsellMultiExperiment.getConfig({ location: "MobileGameCommunitiesManager" }).enabled) {
        result = self._fetchGameCommunities(result.result);
      }
    }
  };
  items[2] = obj;
  return callback(MobileGameCommunitiesManager, items);
}(importDefault(dependencyMap[11]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesManager.tsx");

export default tmp2;
