// Module ID: 10202
// Function ID: 78836
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: diffSchedules, getRestrictedScheduleNotificationSubtitle, getRestrictedScheduleNotificationTitle, restrictedScheduleNotificationKey, toScheduleSnapshot

// Module 10202 (_createForOfIteratorHelperLoose)
let Created;
let Disabled;
let Enabled;
let Multiple;
let Removed;
let Updated;
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
function isOnlyDayLoss(label, label2) {
  if (label.label !== label2.label) {
    return false;
  } else {
    if (obj2.isEqual(label.startTime, label2.startTime)) {
      if (obj.isEqual(label.endTime, label2.endTime)) {
        const _Set = Set;
        const set = new Set(label.days);
        const require = set;
        let everyResult = label2.days.length < label.days.length;
        if (everyResult) {
          const days = label2.days;
          everyResult = days.every((arg0) => set.has(arg0));
        }
        return everyResult;
      } else {
        return false;
      }
      const obj = importDefault(dependencyMap[0]);
    } else {
      return false;
    }
    const obj2 = importDefault(dependencyMap[0]);
  }
}
let obj = { Created: "created", Enabled: "enabled", Disabled: "disabled", Updated: "updated", Removed: "removed", Multiple: "multiple" };
const map = new Map();
obj = { [Created]: importDefault(dependencyMap[1]).5V7eBH, [Enabled]: importDefault(dependencyMap[1]).iefrVg, [Disabled]: importDefault(dependencyMap[1]).k+s9cM, [Updated]: importDefault(dependencyMap[1]).Nm6hZV, [Multiple]: importDefault(dependencyMap[1]).Nm6hZV, [Removed]: importDefault(dependencyMap[1]).jR6uOs };
({ Created, Enabled, Disabled, Updated, Multiple, Removed } = obj);
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/parent_tools/RestrictedScheduleNotificationUtils.tsx");

export const RestrictedScheduleNotificationKind = obj;
export const EMPTY_SCHEDULE_SNAPSHOT = map;
export const toScheduleSnapshot = function toScheduleSnapshot(currentRestrictedSchedule) {
  if (null != currentRestrictedSchedule) {
    if (0 !== currentRestrictedSchedule.rules.length) {
      const _Map = Map;
      const rules = currentRestrictedSchedule.rules;
      const map = new Map(rules.map((ruleId) => {
        const items = [ruleId.ruleId, ruleId];
        return items;
      }));
    }
    return map;
  }
};
export const diffSchedules = function diffSchedules(EMPTY_SCHEDULE_SNAPSHOT, toScheduleSnapshotResult) {
  let iter2;
  let tmp45;
  let tmp46;
  function record(Created, value) {
    if (0 === closure_4) {
      let closure_0 = Created;
      let closure_1 = value;
    }
    closure_4 = closure_4 + 1;
    if (Created === _null.Removed) {
      closure_5 = closure_5 + 1;
    } else if (Created === _null.Created) {
      let closure_2 = value;
      closure_6 = closure_6 + 1;
    } else if (Created === _null.Updated) {
      const _null = value;
      closure_7 = closure_7 + 1;
    } else {
      const items = [, ];
      ({ Enabled: arr[0], Disabled: arr[1] } = _null);
      if (items.includes(Created)) {
        closure_8 = closure_8 + 1;
      }
    }
  }
  let closure_0 = null;
  let closure_1 = null;
  let closure_2 = null;
  let obj = null;
  let closure_4 = 0;
  let closure_5 = 0;
  const _createForOfIteratorHelperLoose = 0;
  let closure_7 = 0;
  const isOnlyDayLoss = 0;
  const items = [];
  const items1 = [...EMPTY_SCHEDULE_SNAPSHOT.keys(), ...toScheduleSnapshotResult.keys()];
  const tmp2 = _createForOfIteratorHelperLoose(new Set(items1));
  let iter = tmp2();
  if (!iter.done) {
    do {
      let value = iter.value;
      value = EMPTY_SCHEDULE_SNAPSHOT.get(value);
      value = toScheduleSnapshotResult.get(value);
      if (null == value) {
        let tmp33 = null != value && value.enabled;
        let tmp22 = tmp3;
        let tmp23 = tmp4;
        if (tmp33) {
          let tmp34 = closure_3;
          let recordResult = record(closure_3.Removed, value);
          tmp22 = tmp3;
          tmp23 = tmp4;
        }
      } else if (null == value) {
        tmp22 = tmp3;
        tmp23 = tmp4;
        if (value.enabled) {
          let tmp31 = closure_3;
          let recordResult1 = record(closure_3.Created, value);
          tmp22 = tmp3;
          tmp23 = tmp4;
        }
      } else if (value.enabled !== value.enabled) {
        let tmp27 = closure_3;
        let tmp29 = value;
        let tmp28 = value.enabled ? tmp27.Enabled : tmp27.Disabled;
        if (value.enabled) {
          tmp29 = value;
        }
        let recordResult2 = record(tmp28, tmp29);
        tmp22 = tmp3;
        tmp23 = tmp4;
      } else {
        let tmp19 = !value.enabled;
        let tmp20 = tmp3;
        let tmp21 = tmp4;
        if (!tmp19) {
          let isEqualResult = value.label === value.label;
          if (isEqualResult) {
            let tmp8 = closure_1;
            let tmp9 = closure_2;
            obj = closure_1(closure_2[0]);
            isEqualResult = obj.isEqual(value.startTime, value.startTime);
          }
          if (isEqualResult) {
            let tmp10 = closure_1;
            let tmp11 = closure_2;
            let obj1 = closure_1(closure_2[0]);
            isEqualResult = obj1.isEqual(value.endTime, value.endTime);
          }
          if (isEqualResult) {
            let tmp12 = closure_1;
            let tmp13 = closure_2;
            let obj2 = closure_1(closure_2[0]);
            let items2 = [];
            let tmp14 = items2;
            let num = 0;
            let arraySpreadResult = HermesBuiltin.arraySpread(value.days, 0);
            let items3 = [];
            let tmp17 = items3;
            let sorted = items2.sort();
            arraySpreadResult = HermesBuiltin.arraySpread(value.days, 0);
            isEqualResult = obj2.isEqual(sorted, items3.sort());
          }
          tmp19 = isEqualResult;
          tmp20 = value;
          tmp21 = value;
        }
        tmp22 = tmp20;
        tmp23 = tmp21;
        if (!tmp19) {
          let tmp24 = closure_3;
          let recordResult3 = record(closure_3.Updated, value);
          obj = { oldRule: value, newRule: value };
          let arr = items.push(obj);
          tmp22 = tmp20;
          tmp23 = tmp21;
        }
      }
      iter2 = tmp2();
      let tmp3 = tmp22;
      let tmp4 = tmp23;
      iter = iter2;
    } while (!iter2.done);
  }
  if (0 === closure_4) {
    return null;
  } else {
    if (1 === _createForOfIteratorHelperLoose) {
      if (0 === isOnlyDayLoss) {
        if (tmp59) {
          obj = {};
          obj.kind = obj.Created;
          obj.rule = closure_2;
          return obj;
        }
      }
    }
    if (1 === closure_7) {
      if (0 === _createForOfIteratorHelperLoose) {
        if (closure_5 >= 1) {
          if (0 === isOnlyDayLoss) {
            obj1 = { kind: obj.Updated, rule: obj };
            return obj1;
          }
        }
      }
    }
    if (2 === closure_7) {
      if (0 === _createForOfIteratorHelperLoose) {
        if (0 === closure_5) {
          if (0 === isOnlyDayLoss) {
            [tmp45, tmp46] = items;
            if (isOnlyDayLoss(tmp45.oldRule, tmp45.newRule)) {
              obj2 = { kind: obj.Updated, rule: tmp46.newRule };
              return obj2;
            } else if (isOnlyDayLoss(tmp46.oldRule, tmp46.newRule)) {
              const obj3 = { kind: obj.Updated, rule: tmp45.newRule };
              return obj3;
            }
          }
        }
      }
    }
    if (closure_4 > 1) {
      const obj4 = { kind: obj.Multiple, rule: null };
      let obj5 = obj4;
    } else {
      obj5 = { kind: closure_0, rule: closure_1 };
    }
    return obj5;
  }
  const set = new Set(items1);
};
export const getRestrictedScheduleNotificationTitle = function getRestrictedScheduleNotificationTitle(kind) {
  const intl = require(dependencyMap[2]).intl;
  return intl.string(obj[kind]);
};
export const getRestrictedScheduleNotificationSubtitle = function getRestrictedScheduleNotificationSubtitle(rule) {
  let result = null;
  if (null != rule) {
    result = require(dependencyMap[3]).formatRestrictedScheduleInAppSubtitle(rule);
    const obj = require(dependencyMap[3]);
  }
  if (null == result) {
    const intl = require(dependencyMap[2]).intl;
    result = intl.string(importDefault(dependencyMap[1]).8OlpoY);
  }
  return result;
};
export const restrictedScheduleNotificationKey = function restrictedScheduleNotificationKey(kind) {
  return "restricted-schedule-" + kind;
};
