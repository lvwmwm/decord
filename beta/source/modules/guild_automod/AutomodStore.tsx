// Module ID: 17306
// Function ID: 17307
// Name: AutomodStore
// Dependencies: [32, 5, 19, 11341, 1074, 1243, 17307, 1248, 11346, 4735, 4452, 2]
// Exports: getRuleCountByTriggerType, useAutomodRulesList, useSyncAutomodRules, useSyncAutomodRulesEffect

// Module 17306 (AutomodStore)
import Constants from "Constants" /* 1074 */;
import _slicedToArray2 from "_slicedToArray" /* 4452 */;
import Constants2 from "Constants" /* 11341 */;
import SystemRulesUtils from "SystemRulesUtils" /* 17307 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import module_1243 from "module_1243" /* 1243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, c6, c7, closure_5;

const f107680 = (arg0) => {
  const items = [, ];
  ({ syncRules: arr[0], fetching: arr[1] } = arg0);
  return items;
};
const AutomodTriggerType = Constants2.AutomodTriggerType;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let closure_7 = {};
const withEqualityFn = module_1243.createWithEqualityFn((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    rules: {},
    fetching: false,
    error: null,
    updateRule(guildId) {
      let mapped;
      let triggerType;
      guildId = guildId.guildId;
      ({ id: closure_2, triggerType } = guildId);
      const rules = guildId().rules;
      let obj = rules[guildId];
      if (obj == null) {
        obj = {};
      }
      let items = obj[triggerType];
      if (items == null) {
        items = [];
      }
      const someResult = items.some((id) => id.id === closure_2);
      const found = items.filter((id) => {
        obj = SystemRulesUtils;
        const isDefaultRuleIdResult = obj.isDefaultRuleId(id.id);
        let tmp2 = !isDefaultRuleIdResult;
        if (isDefaultRuleIdResult) {
          tmp2 = id.triggerType !== triggerType;
        }
        return tmp2;
      });
      if (someResult) {
        mapped = found.map((id) => {
          let tmp = id;
          if (id.id === closure_2) {
            tmp = guildId;
          }
          return tmp;
        });
      } else {
        mapped = [];
        mapped[HermesBuiltin.arraySpread(mapped, found, 0)] = guildId;
      }
      let obj2 = guildId(closure_1[7]);
      obj2.batchUpdates(() => {
        let obj2;
        obj = { rules: obj2, error: null };
        obj2 = {};
        const merged = Object.assign(rules);
        const obj3 = {};
        const merged1 = Object.assign(obj);
        obj3[triggerType] = mapped;
        obj2[guildId] = obj3;
        guildId(obj);
      });
    },
    removeRule(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      const rules = closure_1().rules;
      let closure_3 = tmp;
      const keys = Object.keys(tmp);
      let closure_4 = keys.reduce((acc, item) => {
        const NumberResult = Number(item);
        let items = closure_3[NumberResult];
        if (items == null) {
          items = [];
        }
        acc[NumberResult] = items.filter((id) => id.id !== closure_1_0);
        return acc;
      }, {});
      let obj = closure_0(closure_1[7]);
      obj.batchUpdates(() => {
        let obj2;
        const obj = { rules: obj2, error: null };
        obj2 = {};
        const merged = Object.assign(rules);
        obj2[closure_1] = closure_4;
        closure_0(obj);
      });
    },
    syncRules: function() {
      return closure_2(...arguments);
    }
  };
  let closure_2 = _asyncToGenerator(async function(arg0, value) {
    let closure_3;
    let obj4;
    function isSyncNeeded(arg0) {
      let num = closure_1_7[arg0];
      const timestamp = Date.now();
      if (num == null) {
        num = 0;
      }
      return timestamp - num > 20000;
    }
    closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let convertToRulesByTriggerType;
        let num = 2;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const error = tmp;
            closure_2 = tmp4;
            closure_1 = undefined;
            let rules;
            let aPIError;
            if (isSyncNeeded(closure_0)) {
              const _Date = Date;
              c7[closure_0] = Date.now();
              c4 = 1;
              convertToRulesByTriggerType = function convertToRulesByTriggerType(arr) {
                const obj = { [closure_1_5.KEYWORD]: [], [closure_1_5.ML_SPAM]: [], [closure_1_5.DEFAULT_KEYWORD_LIST]: [], [closure_1_5.MENTION_SPAM]: [], [closure_1_5.USER_PROFILE]: [], [closure_1_5.SERVER_POLICY]: [], [closure_1_5.APPLICATION]: [] };
                const item = arr.forEach((item) => {
                  if (obj[item.triggerType] != null) {
                    obj[item.triggerType].push(item);
                  }
                });
                return obj;
              };
              c6 = 2;
              c7 = 1;
              const obj6 = { value: obj4.fetchAutomodRules(closure_0), done: false };
              obj4 = closure_0(convertToRulesByTriggerType[8]);
              return obj6;
            }
          }
        } else if (1 === c6) {
          c4 = 0;
          let closure_4 = closure_5;
          const self = this;
          const self2 = this;
          aPIError = new closure_0(convertToRulesByTriggerType[9]).APIError(closure_4);
          const obj3 = closure_0(convertToRulesByTriggerType[7]);
          obj3.batchUpdates(() => {
            const obj = { error };
            closure_0(obj);
          });
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_1 = convertToRulesByTriggerType(value);
          rules = closure_131_1().rules;
          let obj = closure_0(convertToRulesByTriggerType[7]);
          obj.batchUpdates(() => {
            let obj2;
            const obj = { rules: obj2, error: null };
            obj2 = {};
            const merged = Object.assign(closure_1_2);
            obj2[closure_1_0] = convertToRulesByTriggerType;
            closure_0(obj);
          });
          c4 = 0;
        }
        c7 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp27) {
        closure_5 = tmp27;
        if (0 === c4) {
          c7 = 3;
          throw tmp27;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj;
});
const result = size.fileFinishedImporting("modules/guild_automod/AutomodStore.tsx");

export const useAutomodStore = withEqualityFn;
export const getRuleCountByTriggerType = function getRuleCountByTriggerType(guildId, triggerType) {
  const tmp = withEqualityFn.getState().rules[guildId];
  let items;
  if (tmp != null) {
    items = tmp[triggerType];
  }
  if (items == null) {
    items = [];
  }
  return items.length;
};
export const useSyncAutomodRules = function useSyncAutomodRules(arg0) {
  let closure_1;
  let first;
  let closure_0 = arg0;
  [first, closure_1] = react.useState(false);
  const tmp3 = _slicedToArray(withEqualityFn(f107680, _slicedToArray2.shallow), 2);
  const first1 = tmp3[0];
  let closure_3 = tmp5;
  const items = [first, ];
  const items1 = [arg0, tmp3[1], first1];
  items[1] = react.useCallback(_asyncToGenerator(async (arg0, value) => {
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
            closure_0 = tmp;
            const tmp16 = closure_3;
            if (!tmp16) {
              if (null != closure_0) {
                c3 = 1;
                v1(true);
                c1 = 2;
                c4 = 1;
                const obj4 = { value: first1(tmp17), done: false };
                return obj4;
              }
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_1(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_1(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_1(false);
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp21) {
        closure_2 = tmp21;
        if (0 === c3) {
          c4 = 3;
          throw tmp21;
        } else {
          c1 = 1;
        }
      }
    }
  }), items1);
  return items;
};
export const useSyncAutomodRulesEffect = function useSyncAutomodRulesEffect(arg0) {
  let closure_1;
  let first;
  let first1;
  let first2;
  let tmp5;
  let tmp8;
  _require = arg0;
  [first, closure_1] = react.useState(false);
  [first1, tmp5] = withEqualityFn(f107680, require("_slicedToArray").shallow);
  let closure_3 = tmp5;
  let items = [first, ];
  const items1 = [arg0, tmp5, first1];
  items[1] = react.useCallback(_asyncToGenerator(async (arg0, value) => {
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
            closure_0 = tmp;
            const tmp16 = closure_3;
            if (!tmp16) {
              if (null != closure_0) {
                c3 = 1;
                v1(true);
                c1 = 2;
                c4 = 1;
                const obj4 = { value: first1(tmp17), done: false };
                return obj4;
              }
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_1(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_1(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_1(false);
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp21) {
        closure_2 = tmp21;
        if (0 === c3) {
          c4 = 3;
          throw tmp21;
        } else {
          c1 = 1;
        }
      }
    }
  }), items1);
  [first2, tmp8] = items;
  _require = tmp8;
  const items2 = [arg0, tmp8];
  const effect = react.useEffect(() => {
    (async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c1 = 1;
              c0 = 1;
              const obj4 = { value: closure_2_0(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          c0 = 3;
          throw tmp5;
        }
      }
    })();
  }, items2);
  const items3 = [first2, tmp8];
  return items3;
};
export const useAutomodRulesList = function useAutomodRulesList(arg0) {
  let closure_0;
  _require = arg0;
  return withEqualityFn((rules) => {
    let tmp = closure_0;
    rules = rules.rules;
    if (closure_0 == null) {
      tmp = EMPTY_STRING_SNOWFLAKE_ID;
    }
    let obj = rules[tmp];
    if (obj == null) {
      obj = {};
    }
    return { rulesByTriggerType: obj, updateRule: rules.updateRule, removeRule: rules.removeRule };
  }, require("_slicedToArray").shallow);
};
