// Module ID: 16091
// Function ID: 124071
// Name: useSyncAutomodRules
// Dependencies: []
// Exports: getRuleCountByTriggerType, useAutomodRulesList, useSyncAutomodRulesEffect

// Module 16091 (useSyncAutomodRules)
function useSyncAutomodRules(arg0) {
  const arg1 = arg0;
  const tmp2 = callback(React.useState(false), 2);
  let closure_1 = tmp2[1];
  const tmp3 = callback(withEqualityFn((arg0) => {
    const items = [, ];
    ({ syncRules: arr[0], fetching: arr[1] } = arg0);
    return items;
  }, arg1(closure_1[10]).shallow), 2);
  const first = tmp3[0];
  const callback = first;
  const callback2 = tmp5;
  const items = [tmp2[0], ];
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [arg0, tmp3[1], first];
  items[1] = React.useCallback(callback2(tmp), items1);
  return items;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
const AutomodTriggerType = arg1(dependencyMap[3]).AutomodTriggerType;
const EMPTY_STRING_SNOWFLAKE_ID = arg1(dependencyMap[4]).EMPTY_STRING_SNOWFLAKE_ID;
let closure_7 = {};
const withEqualityFn = arg1(dependencyMap[5]).createWithEqualityFn((arg0, arg1) => {
  arg1 = arg0;
  const dependencyMap = arg1;
  const obj = {
    rules: {},
    updateRule(guildId) {
      let triggerType;
      guildId = guildId.guildId;
      const arg1 = guildId;
      ({ id: closure_2, triggerType } = guildId);
      const rules = arg1().rules;
      let obj = rules[guildId];
      if (null == obj) {
        obj = {};
      }
      let items = obj[triggerType];
      if (null == items) {
        items = [];
      }
      const found = items.filter((id) => {
        let tmp = !id(guildId[6]).isDefaultRuleId(id.id);
        if (!tmp) {
          tmp = id.triggerType !== triggerType;
        }
        return tmp;
      });
      if (someResult) {
        let mapped = found.map((id) => {
          let tmp = id;
          if (id.id === closure_2) {
            tmp = id;
          }
          return tmp;
        });
      } else {
        mapped = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(found, 0);
        mapped[arraySpreadResult] = guildId;
        const sum = arraySpreadResult + 1;
      }
      const someResult = items.some((id) => id.id === closure_2);
      guildId(arg1[7]).batchUpdates(() => {
        let obj = {};
        obj = {};
        const merged = Object.assign(rules);
        obj = {};
        const merged1 = Object.assign(obj);
        obj[triggerType] = mapped;
        obj[guildId] = obj;
        obj.rules = obj;
        obj.error = null;
        arg0(obj);
      });
    },
    removeRule
  };
  function removeRule(arg0, arg1) {
    const rules = arg1().rules;
    let closure_2 = rules;
    const tmp = rules[arg1];
    const keys = Object.keys(tmp);
    let closure_4 = keys.reduce((arg0, arg1) => {
      const NumberResult = Number(arg1);
      let items = tmp[NumberResult];
      if (null == items) {
        items = [];
      }
      arg0[NumberResult] = items.filter((id) => id.id !== closure_0);
      return arg0;
    }, {});
    arg0(arg1[7]).batchUpdates(() => {
      let obj = {};
      obj = {};
      const merged = Object.assign(rules);
      obj[arg1] = closure_4;
      obj.rules = obj;
      obj.error = null;
      arg0(obj);
    });
  }
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_2 = callback2(removeRule);
  obj.syncRules = function() {
    return callback(...arguments);
  };
  return obj;
});
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_automod/AutomodStore.tsx");

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
  const arg1 = tmp2;
  const items = [arg0, tmp[1]];
  const effect = React.useEffect(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    callback(tmp)();
  }, items);
  const items1 = [tmp[0], tmp[1]];
  return items1;
};
export const useAutomodRulesList = function useAutomodRulesList(arg0) {
  const arg1 = arg0;
  return withEqualityFn((arg0) => {
    let obj = {};
    obj = arg0.rules[null != closure_0 ? closure_0 : closure_6];
    if (null == obj) {
      obj = {};
    }
    obj.rulesByTriggerType = obj;
    ({ updateRule: obj.updateRule, removeRule: obj.removeRule } = arg0);
    return obj;
  }, arg1(dependencyMap[10]).shallow);
};
