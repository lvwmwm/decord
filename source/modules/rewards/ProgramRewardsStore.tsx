// Module ID: 12648
// Function ID: 98427
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 1849, 12649, 3374, 3402, 3357, 12650, 664, 12653, 566, 686, 2]

// Module 12648 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import NetworkTtlCache from "NetworkTtlCache";
import dispatcher from "dispatcher";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_9 from "_isNativeReflectConstruct";

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
function updateTtl() {
  let msUntilReward;
  let state;
  const value = networkTtlCache.getValue();
  if (null == value) {
    let obj = { state: closure_13.MORE_THAN_24H_BEFORE_REWARD };
    let obj1 = obj;
  } else {
    const _Date2 = Date;
    const date = new Date();
    const tmp27 = _createForOfIteratorHelperLoose(value.values());
    const iter3 = tmp27();
    let iter2 = iter3;
    if (!iter3.done) {
      while (true) {
        let _Date = Date;
        let tmp = new.target;
        let tmp2 = new.target;
        let date1 = new Date(iter2.value.next_reward_date);
        let tmp3 = date1;
        let _isNaN = isNaN;
        if (isNaN(date1.getTime())) {
          let iter = tmp27();
          iter2 = iter;
        } else {
          let tmp4 = importDefault;
          let tmp5 = dependencyMap;
          let tmp6 = importDefault(3374)(date1, 10);
          if (date >= tmp6) {
            break;
          } else if (date >= date1) {
            let tmp10 = importDefault;
            let tmp11 = dependencyMap;
            let num = 9;
            obj = {};
            let tmp12 = closure_13;
            obj.state = closure_13.LESS_THAN_24H_BEFORE_REWARD;
            obj.msUntilReward = importDefault(3402)(tmp6, date);
            obj1 = obj;
          } else {
            let tmp7 = importDefault;
            let tmp8 = dependencyMap;
            let tmp9 = tmp6;
            if (date >= importDefault(3357)(date1, -1)) {
              let tmp28 = importDefault;
              let tmp29 = dependencyMap;
              let num5 = 9;
              obj1 = {};
              let tmp30 = closure_13;
              obj1.state = closure_13.LESS_THAN_24H_BEFORE_REWARD;
              obj1.msUntilReward = importDefault(3402)(tmp6, date);
            }
          }
        }
      }
      const obj2 = { state: closure_13.PAST_REWARD_DATE };
      obj1 = obj2;
    }
    const obj3 = { state: closure_13.MORE_THAN_24H_BEFORE_REWARD };
    obj1 = obj3;
  }
  ({ state, msUntilReward } = obj1);
  if (closure_13.LESS_THAN_24H_BEFORE_REWARD === state) {
    if (null == msUntilReward) {
      msUntilReward = c11;
    }
    let tmp19 = msUntilReward;
  } else {
    if (closure_13.MORE_THAN_24H_BEFORE_REWARD !== state) {
      const PAST_REWARD_DATE = closure_13.PAST_REWARD_DATE;
    }
    tmp19 = c11;
  }
  networkTtlCache.setTtl(tmp19);
}
let obj = { NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD: "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD", CACHE_SHOULD_NOT_FETCH: "CACHE_SHOULD_NOT_FETCH" };
let c11 = 86400000;
obj = { ttlMs: 86400000 };
const networkTtlCache = new require("NetworkTtlCache").NetworkTtlCache(obj);
let closure_13 = { MORE_THAN_24H_BEFORE_REWARD: "MORE_THAN_24H_BEFORE_REWARD", LESS_THAN_24H_BEFORE_REWARD: "LESS_THAN_24H_BEFORE_REWARD", PAST_REWARD_DATE: "PAST_REWARD_DATE" };
let tmp3 = ((PersistedStore) => {
  class ProgramRewardsStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_4(this, apply);
      items1 = [...items];
      obj = outer1_7(apply);
      tmp2 = outer1_6;
      if (outer1_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items1, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.__getLocalVars = () => {
        let iter3;
        const state = tmp2Result.getState();
        let obj = {};
        let items;
        if (null != state.cache) {
          items = iter.value;
        }
        if (null == items) {
          items = [];
        }
        tmp2Result = outer2_15(items);
        let iter2 = tmp2Result();
        if (!iter2.done) {
          do {
            let tmp4 = outer2_3;
            let tmp5 = outer2_3(iter2.value, 2);
            let first = tmp5[0];
            let tmp7 = ProgramRewardsStore;
            let tmp8 = outer2_2;
            let StringResult = ProgramRewardsStore(outer2_2[11]).RewardProgram[first];
            if (null == StringResult) {
              let _String = String;
              StringResult = String(first);
            }
            obj[StringResult] = tmp5[1];
            iter3 = tmp2Result();
            iter2 = iter3;
          } while (!iter3.done);
        }
        obj = { status: tmp2Result.getStatus(), isFetching: tmp2Result.isFetching(), isFetched: tmp2Result.isFetched(), hasCachedValue: tmp2Result.hasCachedValue(), isError: tmp2Result.isError(), isReady: tmp2Result.isReady(), shouldFetch: tmp2Result.shouldFetch() };
        const cache = state.cache;
        let fetchedAt;
        if (null != cache) {
          fetchedAt = cache.fetchedAt;
        }
        let tmp11 = null;
        if (null != fetchedAt) {
          tmp11 = fetchedAt;
        }
        obj.fetchedAt = tmp11;
        let tmp12 = null;
        if (Object.keys(obj).length > 0) {
          tmp12 = obj;
        }
        obj.rewards = tmp12;
        return obj;
      };
      tmp2Result.__getLocalVarsEditConfig = () => {
        const items = [{ type: "PROGRAM_REWARDS_FETCH" }];
        return {
          preDispatches: items,
          actionType: "PROGRAM_REWARDS_FETCH_SUCCESS",
          buildPayload(rewards) {
            rewards = rewards.rewards;
            let tmp = null;
            if (null != rewards) {
              tmp = rewards;
            }
            if (null != tmp) {
              const _Object = Object;
              if (0 !== Object.keys(tmp).length) {
                let obj = {};
                const _Object2 = Object;
                const entries = Object.entries(tmp);
                obj.programRewards = entries.map((arg0) => {
                  let tmp;
                  let tmp2;
                  [tmp, tmp2] = arg0;
                  const obj = {};
                  const merged = Object.assign(tmp2);
                  let NumberResult = ProgramRewardsStore(outer4_2[11]).RewardProgram[tmp];
                  if (null == NumberResult) {
                    const _Number = Number;
                    NumberResult = Number(tmp);
                  }
                  obj["reward_program"] = NumberResult;
                  return obj;
                });
              }
              return obj;
            }
            obj = { programRewards: [] };
          },
          getPurgeVars() {
            return { rewards: null };
          }
        };
      };
      return tmp2Result;
    }
  }
  callback2(ProgramRewardsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(cache) {
      this.waitFor(outer1_9);
      cache = undefined;
      if (null != cache) {
        cache = cache.cache;
      }
      if (null != cache) {
        const _Map = Map;
        const map = new Map(cache.cache.value);
        const obj = { value: map, fetchedAt: cache.cache.fetchedAt };
        outer1_12.restore(obj);
      }
      outer1_17();
    }
  };
  let items = [obj, , , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      const iter = outer1_12.serialize();
      let obj = {};
      let tmp = null;
      if (null != iter) {
        obj = {};
        const _Array = Array;
        const value = iter.value;
        obj.value = Array.from(value.entries());
        obj.fetchedAt = iter.fetchedAt;
        tmp = obj;
      }
      obj.cache = tmp;
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "getTotalDaysInDuration",
    value(arg0) {
      const rewardForProgram = this.getRewardForProgram(arg0);
      if (null == rewardForProgram) {
        return null;
      } else {
        const total_countdown_duration_ms = rewardForProgram.total_countdown_duration_ms;
        let rounded = null;
        if (null != total_countdown_duration_ms) {
          rounded = null;
          if (total_countdown_duration_ms > 0) {
            const _Math = Math;
            rounded = Math.ceil(total_countdown_duration_ms / outer1_1(outer1_2[12]).Millis.DAY);
          }
        }
        return rounded;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isFetching",
    value() {
      return outer1_12.isLoading();
    }
  };
  items[4] = {
    key: "isFetched",
    value() {
      return outer1_12.isValid();
    }
  };
  items[5] = {
    key: "hasCachedValue",
    value() {
      return null != outer1_12.getValue();
    }
  };
  items[6] = {
    key: "isReady",
    value() {
      const self = this;
      let tmp = !this.isFetching();
      if (tmp) {
        let hasCachedValueResult = self.hasCachedValue();
        if (!hasCachedValueResult) {
          hasCachedValueResult = !ProgramRewardsStore(outer1_2[13]).canFetchAnyProgramReward("ProgramRewardsStore");
          const obj = ProgramRewardsStore(outer1_2[13]);
        }
        if (!hasCachedValueResult) {
          hasCachedValueResult = self.isError();
        }
        tmp = hasCachedValueResult;
      }
      return tmp;
    }
  };
  items[7] = {
    key: "shouldFetch",
    value() {
      let obj = ProgramRewardsStore(outer1_2[13]);
      if (obj.canFetchAnyProgramReward("ProgramRewardsStore.shouldFetch")) {
        if (outer1_12.shouldFetch()) {
          obj = { shouldFetch: true };
        } else {
          obj = { shouldFetch: false, reason: outer1_10.CACHE_SHOULD_NOT_FETCH };
        }
      } else {
        const obj1 = { shouldFetch: false, reason: outer1_10.NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD };
        return obj1;
      }
    }
  };
  items[8] = {
    key: "isError",
    value() {
      return outer1_12.isError();
    }
  };
  items[9] = {
    key: "getStatus",
    value() {
      return outer1_12.getStatus();
    }
  };
  items[10] = {
    key: "getRewardForProgram",
    value(arg0) {
      let value = outer1_12.getValue();
      value = undefined;
      if (null != value) {
        value = value.get(arg0);
      }
      return value;
    }
  };
  items[11] = {
    key: "forceExpire",
    value() {
      outer1_12.forceExpire();
    }
  };
  return callback(ProgramRewardsStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "ProgramRewardsStore";
tmp3.persistKey = "ProgramRewardsStore";
obj = {
  LOGOUT: function handleReset() {
    networkTtlCache.clear();
  },
  PROGRAM_REWARDS_FETCH: function handleProgramRewardsFetch() {
    networkTtlCache.setLoading();
  },
  PROGRAM_REWARDS_FETCH_SUCCESS: function handleProgramRewardsFetchSuccess(programRewards) {
    programRewards = programRewards.programRewards;
    let map;
    if (networkTtlCache.isLoading()) {
      const _Map = Map;
      map = new Map();
      const item = programRewards.forEach((reward_program) => {
        const result = map.set(reward_program.reward_program, reward_program);
      });
      networkTtlCache.setValue(map);
      updateTtl();
    } else {
      return false;
    }
  },
  PROGRAM_REWARDS_FETCH_FAILURE: function handleProgramRewardsFetchFailure() {
    if (networkTtlCache.isLoading()) {
      networkTtlCache.setError();
    } else {
      return false;
    }
  },
  CURRENT_USER_UPDATE: updateTtl,
  CONNECTION_OPEN: updateTtl
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = require("_defineProperties").fileFinishedImporting("modules/rewards/ProgramRewardsStore.tsx");

export default tmp3;
export const DidNotFetchReason = obj;
