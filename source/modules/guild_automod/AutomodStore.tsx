// Module ID: 16231
// Function ID: 126378
// Name: useSyncAutomodRules
// Dependencies: [57, 5, 31, 11007, 653, 677, 16232, 682, 11012, 4029, 3743, 2]
// Exports: getRuleCountByTriggerType, useAutomodRulesList, useSyncAutomodRulesEffect

// Module 16231 (useSyncAutomodRules)
import _slicedToArray from "_slicedToArray";
import closure_3 from "useStoreWithEqualityFn";
import result from "result";
import { AutomodTriggerType } from "AutomodEventType";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

let require = arg1;
function useSyncAutomodRules(arg0) {
  const _require = arg0;
  const tmp2 = first(React.useState(false), 2);
  const dependencyMap = tmp2[1];
  const tmp3 = first(withEqualityFn((arg0) => {
    const items = [, ];
    ({ syncRules: arr[0], fetching: arr[1] } = arg0);
    return items;
  }, _require(3743).shallow), 2);
  first = tmp3[0];
  const callback2 = tmp5;
  let items = [tmp2[0], ];
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [arg0, tmp3[1], first];
  items[1] = React.useCallback(callback2(tmp), items1);
  return items;
}
let closure_7 = {};
const withEqualityFn = useStoreWithEqualityFn.createWithEqualityFn((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    rules: {},
    fetching: false,
    error: null,
    updateRule(guildId) {
      let _slicedToArray;
      let triggerType;
      const callback = guildId;
      guildId = guildId.guildId;
      ({ id: _slicedToArray, triggerType } = guildId);
      const rules = guildId().rules;
      let obj = rules[guildId];
      if (null == obj) {
        obj = {};
      }
      let items = obj[triggerType];
      if (null == items) {
        items = [];
      }
      const found = items.filter((id) => {
        let tmp = !guildId(guildId2[6]).isDefaultRuleId(id.id);
        if (!tmp) {
          tmp = id.triggerType !== triggerType;
        }
        return tmp;
      });
      if (someResult) {
        let mapped = found.map((id) => {
          let tmp = id;
          if (id.id === _slicedToArray) {
            tmp = closure_0;
          }
          return tmp;
        });
      } else {
        mapped = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(found, 0);
        mapped[arraySpreadResult] = guildId;
        const sum = arraySpreadResult + 1;
      }
      someResult = items.some((id) => id.id === _slicedToArray);
      callback(682).batchUpdates(() => {
        let obj = {};
        obj = {};
        const merged = Object.assign(rules);
        obj = {};
        const merged1 = Object.assign(obj);
        obj[triggerType] = mapped;
        obj[guildId] = obj;
        obj.rules = obj;
        obj.error = null;
        guildId(obj);
      });
    }
  };
  function removeRule(arg0, arg1) {
    const callback = arg0;
    const dependencyMap = arg1;
    const rules = dependencyMap().rules;
    let closure_3 = tmp;
    const keys = Object.keys(tmp);
    let result = keys.reduce((arg0, arg1) => {
      const NumberResult = Number(arg1);
      let items = tmp[NumberResult];
      if (null == items) {
        items = [];
      }
      arg0[NumberResult] = items.filter((id) => id.id !== outer1_0);
      return arg0;
    }, {});
    callback(682).batchUpdates(() => {
      let obj = {};
      obj = {};
      const merged = Object.assign(rules);
      obj[closure_1] = result;
      obj.rules = obj;
      obj.error = null;
      callback(obj);
    });
  }
  obj.removeRule = removeRule;
  // CreateGeneratorClosureLongIndex (0x67)
  let _slicedToArray = callback2(removeRule);
  obj.syncRules = function() {
    return callback2(...arguments);
  };
  return obj;
});
const result = require("result").fileFinishedImporting("modules/guild_automod/AutomodStore.tsx");

export const useAutomodStore = withEqualityFn;
export const getRuleCountByTriggerType = function getRuleCountByTriggerType(guildId, triggerType) {
  const tmp = withEqualityFn.getState().rules[guildId];
  let items;
  if (null != tmp) {
    items = tmp[triggerType];
  }
  if (null == items) {
    items = [];
  }
  return items.length;
};
export { useSyncAutomodRules };
export const useSyncAutomodRulesEffect = function useSyncAutomodRulesEffect(arg0) {
  const tmp = callback(useSyncAutomodRules(arg0), 2);
  const require = tmp2;
  const items = [arg0, tmp[1]];
  const effect = React.useEffect(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    outer1_3(tmp)();
  }, items);
  const items1 = [tmp[0], tmp[1]];
  return items1;
};
export const useAutomodRulesList = function useAutomodRulesList(arg0) {
  const _require = arg0;
  return withEqualityFn((arg0) => {
    let obj = {};
    obj = arg0.rules[null != closure_0 ? closure_0 : outer1_6];
    if (null == obj) {
      obj = {};
    }
    obj.rulesByTriggerType = obj;
    ({ updateRule: obj.updateRule, removeRule: obj.removeRule } = arg0);
    return obj;
  }, _require(3743).shallow);
};
