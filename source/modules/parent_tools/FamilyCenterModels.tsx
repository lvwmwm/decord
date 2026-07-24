// Module ID: 1870
// Function ID: 20835
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 1858, 1867, 2]
// Exports: ensureRestrictedScheduleRecord

// Module 1870 (_createForOfIteratorHelperLoose)
import _callSuper from "_callSuper";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importDefaultResult from "Record";

const require = arg1;
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
function _callSuper(arg0, arg1, arg2) {
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    const items = [];
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, undefined);
  }
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function timeOfDayToMinutes(hours) {
  return 60 * hours.hours + hours.minutes;
}
const frozen = Object.freeze({ [0]: require("_callSuper").DayOfWeek.SUNDAY, [1]: require("_callSuper").DayOfWeek.MONDAY, [2]: require("_callSuper").DayOfWeek.TUESDAY, [3]: require("_callSuper").DayOfWeek.WEDNESDAY, [4]: require("_callSuper").DayOfWeek.THURSDAY, [5]: require("_callSuper").DayOfWeek.FRIDAY, [6]: require("_callSuper").DayOfWeek.SATURDAY });
let closure_8 = Object.freeze({ [arg1(1867).DayOfWeek.DAY_OF_WEEK_UNSPECIFIED]: 0, [arg1(1867).DayOfWeek.MONDAY]: 1, [arg1(1867).DayOfWeek.TUESDAY]: 2, [arg1(1867).DayOfWeek.WEDNESDAY]: 3, [arg1(1867).DayOfWeek.THURSDAY]: 4, [arg1(1867).DayOfWeek.FRIDAY]: 5, [arg1(1867).DayOfWeek.SATURDAY]: 6, [arg1(1867).DayOfWeek.SUNDAY]: 0 });
const tmp4 = ((importDefaultResult) => {
  class ScheduleRuleRecord {
    constructor(arg0) {
      tmp = outer1_2(this, ScheduleRuleRecord);
      tmp2 = outer1_13(this, ScheduleRuleRecord);
      ({ ruleId: tmp2.ruleId, label: tmp2.label, startTime: tmp2.startTime, endTime: tmp2.endTime, days: tmp2.days, enabled: tmp2.enabled } = importDefaultResult);
      return tmp2;
    }
  }
  callback3(ScheduleRuleRecord, importDefaultResult);
  let obj = {
    key: "isActiveAt",
    value(arg0, arg1) {
      const self = this;
      if (null != this.startTime) {
        if (null != self.endTime) {
          if (0 !== self.days.length) {
            if (self.enabled) {
              const tmp2 = outer1_15(self.startTime);
              const tmp3 = outer1_15(self.endTime);
              const days = self.days;
              if (days.includes(arg0)) {
                if (tmp4) {
                  if (arg1 >= tmp2) {
                    return true;
                  }
                } else if (arg1 >= tmp2) {
                  if (arg1 < tmp3) {
                    return true;
                  }
                }
              }
              if (tmp2 > tmp3) {
                if (arg0 === ScheduleRuleRecord(outer1_1[6]).DayOfWeek.MONDAY) {
                  let SUNDAY = ScheduleRuleRecord(outer1_1[6]).DayOfWeek.SUNDAY;
                } else {
                  SUNDAY = arg0 - 1;
                }
                const days2 = self.days;
                if (days2.includes(SUNDAY)) {
                  if (arg1 < tmp3) {
                    return true;
                  }
                }
              }
              return false;
            }
          }
        }
      }
      return false;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getEndMinutes",
    value() {
      let tmp2 = null;
      if (null != this.endTime) {
        tmp2 = outer1_15(tmp.endTime);
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "getStartMinutes",
    value() {
      let tmp2 = null;
      if (null != this.startTime) {
        tmp2 = outer1_15(tmp.startTime);
      }
      return tmp2;
    }
  };
  items[2] = obj;
  const items1 = [
    {
      key: "fromServer",
      value(ruleId) {
        let tmp = ScheduleRuleRecord;
        const obj = { ruleId: ruleId.rule_id, label: ruleId.label };
        const start_time = ruleId.start_time;
        let tmp2;
        if (null != start_time) {
          tmp2 = start_time;
        }
        obj.startTime = tmp2;
        const end_time = ruleId.end_time;
        let tmp3;
        if (null != end_time) {
          tmp3 = end_time;
        }
        obj.endTime = tmp3;
        ({ days: obj.days, enabled: obj.enabled } = ruleId);
        tmp = new tmp(obj);
        return tmp;
      }
    },
    {
      key: "fromCache",
      value(arg0) {
        return new ScheduleRuleRecord(arg0);
      }
    }
  ];
  return callback(ScheduleRuleRecord, items, items1);
})(importDefaultResult);
let closure_9 = tmp4;
const tmp5 = ((importDefaultResult) => {
  class RestrictedScheduleRecord {
    constructor(arg0) {
      tmp = outer1_2(this, RestrictedScheduleRecord);
      tmp2 = outer1_13(this, RestrictedScheduleRecord);
      tmp2.rules = importDefaultResult.rules;
      return tmp2;
    }
  }
  callback3(RestrictedScheduleRecord, importDefaultResult);
  let obj = {
    key: "isInRestrictedHours",
    value() {
      let date = arg0;
      const self = this;
      if (arg0 === undefined) {
        const _Date = Date;
        date = new Date();
      }
      let closure_0;
      let closure_1;
      if (0 === self.rules.length) {
        return false;
      } else {
        closure_0 = outer1_7[date.getDay(date)];
        const result = 60 * date.getHours();
        closure_1 = result + date.getMinutes();
        const rules = self.rules;
        return rules.some((isActiveAt) => isActiveAt.isActiveAt(closure_0, closure_1));
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getNextStartInfo",
    value() {
      let iter5;
      let date = arg0;
      const self = this;
      if (arg0 === undefined) {
        const _Date = Date;
        date = new Date();
      }
      if (0 !== self.rules.length) {
        if (!self.isInRestrictedHours(date)) {
          const day = date.getDay();
          const result = 60 * date.getHours();
          const sum = result + date.getMinutes();
          const rules = self.rules;
          const tmp8 = outer1_11(rules.filter((enabled) => enabled.enabled));
          const iter = tmp8();
          let iter2 = iter;
          let tmp10 = null;
          let tmp15 = null;
          if (!iter.done) {
            do {
              let value = iter2.value;
              let startMinutes = value.getStartMinutes();
              let tmp17 = tmp10;
              let tmp18 = tmp11;
              let tmp19 = tmp12;
              let tmp20 = tmp13;
              let tmp21 = tmp14;
              if (null != startMinutes) {
                tmp17 = tmp10;
                tmp18 = tmp11;
                tmp19 = tmp12;
                tmp20 = tmp13;
                tmp21 = tmp14;
                if (0 !== value.days.length) {
                  let tmp27 = outer1_11;
                  let tmp28 = outer1_11(value.days);
                  let iter6 = tmp28();
                  let tmp26 = tmp10;
                  let iter4 = iter6;
                  tmp17 = tmp10;
                  tmp18 = iter6;
                  tmp19 = tmp28;
                  tmp20 = tmp13;
                  tmp21 = tmp14;
                  if (!iter6.done) {
                    do {
                      let tmp22 = outer1_8;
                      let num4 = (outer1_8[iter4.value] - day + 7) % 7;
                      let tmp23 = 0 === num4 && startMinutes <= sum;
                      if (tmp23) {
                        num4 = 7;
                      }
                      let sum1 = 24 * num4 * 60 - sum + startMinutes;
                      let tmp25 = null == tmp26 || sum1 < tmp26.minutesUntil;
                      if (tmp25) {
                        let obj = { minutesUntil: sum1, rule: value };
                        tmp26 = obj;
                      }
                      iter3 = tmp28();
                      iter4 = iter3;
                      tmp17 = tmp26;
                      tmp18 = iter3;
                      tmp19 = tmp28;
                      tmp20 = num4;
                      tmp21 = sum1;
                    } while (!iter3.done);
                  }
                }
              }
              iter5 = tmp8();
              tmp10 = tmp17;
              tmp11 = tmp18;
              tmp12 = tmp19;
              tmp13 = tmp20;
              tmp14 = tmp21;
              iter2 = iter5;
              tmp15 = tmp17;
            } while (!iter5.done);
          }
          return tmp15;
        }
      }
      return null;
    }
  };
  items[1] = obj;
  obj = {
    key: "getNextEndTime",
    value() {
      let endMinutes;
      let startMinutes;
      let date = arg0;
      const self = this;
      if (arg0 === undefined) {
        const _Date = Date;
        date = new Date();
      }
      let closure_0;
      let c1;
      if (0 === self.rules.length) {
        return null;
      } else {
        closure_0 = outer1_7[date.getDay(date)];
        const result = 60 * date.getHours();
        const sum = result + date.getMinutes();
        c1 = sum;
        const rules = self.rules;
        const tmp24 = outer1_11(rules.filter((isActiveAt) => isActiveAt.isActiveAt(closure_0, c1)));
        let iter2 = tmp24();
        if (!iter2.done) {
          while (true) {
            let value = iter2.value;
            endMinutes = value.getEndMinutes();
            startMinutes = value.getStartMinutes();
            if (null != endMinutes) {
              if (null != startMinutes) {
                break;
              }
            }
            let iter = tmp24();
            iter2 = iter;
          }
          let tmp6 = startMinutes > endMinutes;
          const _Date2 = Date;
          const date1 = new Date(date);
          const _Math = Math;
          const rounded = Math.floor(endMinutes / 60);
          const result1 = endMinutes % 60;
          if (tmp6) {
            tmp6 = sum >= startMinutes;
          }
          if (tmp6) {
            date1.setDate(date1.getDate() + 1);
          }
          date1.setHours(rounded, result1, 0, 0);
          return date1;
        }
        return null;
      }
    }
  };
  items[2] = obj;
  const items1 = [
    {
      key: "fromServer",
      value(rules) {
        let tmp = null;
        if (null != rules) {
          const obj = {};
          rules = rules.rules;
          obj.rules = rules.map(outer1_9.fromServer);
          const prototype = RestrictedScheduleRecord.prototype;
          tmp = new RestrictedScheduleRecord(obj);
        }
        return tmp;
      }
    },
    {
      key: "fromCache",
      value(rules) {
        let tmp = null;
        if (null != rules) {
          const obj = {};
          rules = rules.rules;
          obj.rules = rules.map(outer1_9.fromCache);
          const prototype = RestrictedScheduleRecord.prototype;
          tmp = new RestrictedScheduleRecord(obj);
        }
        return tmp;
      }
    }
  ];
  return callback(RestrictedScheduleRecord, items, items1);
})(importDefaultResult);
let closure_10 = tmp5;
let obj = { [0]: require("_callSuper").DayOfWeek.SUNDAY, [1]: require("_callSuper").DayOfWeek.MONDAY, [2]: require("_callSuper").DayOfWeek.TUESDAY, [3]: require("_callSuper").DayOfWeek.WEDNESDAY, [4]: require("_callSuper").DayOfWeek.THURSDAY, [5]: require("_callSuper").DayOfWeek.FRIDAY, [6]: require("_callSuper").DayOfWeek.SATURDAY };
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/parent_tools/FamilyCenterModels.tsx");

export const JS_DAY_TO_DAY_OF_WEEK = frozen;
export const ScheduleRuleRecord = tmp4;
export const RestrictedScheduleRecord = tmp5;
export const ensureRestrictedScheduleRecord = function ensureRestrictedScheduleRecord(restrictedSchedule) {
  let tmp = null;
  if (null != restrictedSchedule) {
    if (restrictedSchedule instanceof tmp5) {
      tmp = restrictedSchedule;
    } else if (0 === restrictedSchedule.rules.length) {
      let obj = { rules: [] };
      const prototype = tmp5.prototype;
      let fromCacheResult = new tmp5(obj);
    } else {
      obj = tmp5;
      if ("ruleId" in restrictedSchedule.rules[0]) {
        fromCacheResult = obj.fromCache(restrictedSchedule);
      } else {
        fromCacheResult = obj.fromServer(restrictedSchedule);
      }
    }
  }
  return tmp;
};
