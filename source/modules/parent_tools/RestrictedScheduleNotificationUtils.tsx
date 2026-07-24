// Module ID: 10251
// Function ID: 79141
// Name: _createForOfIteratorHelperLoose
// Dependencies: [22, 2198, 1212, 10252, 2]
// Exports: diffSchedules, getRestrictedScheduleNotificationSubtitle, getRestrictedScheduleNotificationTitle, restrictedScheduleNotificationKey, toScheduleSnapshot

// Module 10251 (_createForOfIteratorHelperLoose)
let Created;
let Disabled;
let Enabled;
let Multiple;
let Removed;
let Updated;
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
function isOnlyDayLoss(label, label2) {
  if (label.label !== label2.label) {
    return false;
  } else {
    if (obj2.isEqual(label.startTime, label2.startTime)) {
      if (obj.isEqual(label.endTime, label2.endTime)) {
        const _Set = Set;
        const set = new Set(label.days);
        let everyResult = label2.days.length < label.days.length;
        if (everyResult) {
          const days = label2.days;
          everyResult = days.every((arg0) => set.has(arg0));
        }
        return everyResult;
      } else {
        return false;
      }
      obj = importDefault(22);
    } else {
      return false;
    }
    obj2 = importDefault(22);
  }
}
let obj = { Created: "created", Enabled: "enabled", Disabled: "disabled", Updated: "updated", Removed: "removed", Multiple: "multiple" };
let map = new Map();
obj = { [Created]: require("messagesProxy")["5V7eBH"], [Enabled]: require("messagesProxy").iefrVg, [Disabled]: require("messagesProxy")["k+s9cM"], [Updated]: require("messagesProxy").Nm6hZV, [Multiple]: require("messagesProxy").Nm6hZV, [Removed]: require("messagesProxy").jR6uOs };
({ Created, Enabled, Disabled, Updated, Multiple, Removed } = obj);
let result = require("getSystemLocale").fileFinishedImporting("modules/parent_tools/RestrictedScheduleNotificationUtils.tsx");

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
      let closure_3 = value;
      closure_7 = closure_7 + 1;
    } else {
      const items = [, ];
      ({ Enabled: arr[0], Disabled: arr[1] } = _null);
      if (items.includes(Created)) {
        closure_8 = closure_8 + 1;
      }
    }
  }
  let c0 = null;
  const importDefault = null;
  const dependencyMap = null;
  let obj = null;
  let c4 = 0;
  let c5 = 0;
  const _createForOfIteratorHelperLoose = 0;
  let c7 = 0;
  const isOnlyDayLoss = 0;
  let items = [];
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
          let tmp34 = obj;
          let recordResult = record(obj.Removed, value);
          tmp22 = tmp3;
          tmp23 = tmp4;
        }
      } else if (null == value) {
        tmp22 = tmp3;
        tmp23 = tmp4;
        if (value.enabled) {
          let tmp31 = obj;
          let recordResult1 = record(obj.Created, value);
          tmp22 = tmp3;
          tmp23 = tmp4;
        }
      } else if (value.enabled !== value.enabled) {
        let tmp27 = obj;
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
            let tmp8 = importDefault;
            let tmp9 = dependencyMap;
            obj = importDefault(22);
            isEqualResult = obj.isEqual(value.startTime, value.startTime);
          }
          if (isEqualResult) {
            let tmp10 = importDefault;
            let tmp11 = dependencyMap;
            let obj1 = importDefault(22);
            isEqualResult = obj1.isEqual(value.endTime, value.endTime);
          }
          if (isEqualResult) {
            let tmp12 = importDefault;
            let tmp13 = dependencyMap;
            let obj2 = importDefault(22);
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
          let tmp24 = obj;
          let recordResult3 = record(obj.Updated, value);
          obj = { oldRule: value, newRule: value };
          let arr = items.push(obj);
          tmp22 = tmp20;
          tmp23 = tmp21;
        }
      }
      iter2 = tmp2();
      tmp3 = tmp22;
      tmp4 = tmp23;
      iter = iter2;
    } while (!iter2.done);
  }
  if (0 === c4) {
    return null;
  } else {
    if (1 === _createForOfIteratorHelperLoose) {
      if (0 === isOnlyDayLoss) {
        if (tmp59) {
          obj = {};
          obj.kind = obj.Created;
          obj.rule = dependencyMap;
          return obj;
        }
      }
    }
    if (1 === c7) {
      if (0 === _createForOfIteratorHelperLoose) {
        if (c5 >= 1) {
          if (0 === isOnlyDayLoss) {
            obj1 = { kind: obj.Updated, rule: obj };
            return obj1;
          }
        }
      }
    }
    if (2 === c7) {
      if (0 === _createForOfIteratorHelperLoose) {
        if (0 === c5) {
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
    if (c4 > 1) {
      const obj4 = { kind: obj.Multiple, rule: null };
      let obj5 = obj4;
    } else {
      obj5 = { kind: c0, rule: importDefault };
    }
    return obj5;
  }
  const set = new Set(items1);
};
export const getRestrictedScheduleNotificationTitle = function getRestrictedScheduleNotificationTitle(kind) {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(obj[kind]);
};
export const getRestrictedScheduleNotificationSubtitle = function getRestrictedScheduleNotificationSubtitle(rule) {
  let result = null;
  if (null != rule) {
    result = require(10252) /* _createForOfIteratorHelperLoose */.formatRestrictedScheduleInAppSubtitle(rule);
    const obj = require(10252) /* _createForOfIteratorHelperLoose */;
  }
  if (null == result) {
    const intl = require(1212) /* getSystemLocale */.intl;
    result = intl.string(importDefault(2198)["8OlpoY"]);
  }
  return result;
};
export const restrictedScheduleNotificationKey = function restrictedScheduleNotificationKey(kind) {
  return "restricted-schedule-" + kind;
};
