// Module ID: 8465
// Function ID: 67526
// Name: useGuildEventRecurrences
// Dependencies: [57, 31, 6758, 566, 8466, 8346, 22, 21, 664, 8357, 2]
// Exports: default

// Module 8465 (useGuildEventRecurrences)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/useGuildEventRecurrences.tsx");

export default function useGuildEventRecurrences(arg0, arg1, closure_2) {
  const _require = arg0;
  const importDefault = arg1;
  const dependencyMap = closure_2;
  let obj = _require(566);
  let items = [first];
  const stateFromStores = obj.useStateFromStores(items, () => first.getGuildScheduledEvent(closure_0));
  const tmp2 = importDefault(8466)(closure_2);
  const React = tmp2;
  if (null != closure_2) {
    if (null != stateFromStores) {
      let obj2 = _require(8346);
      let _Date = Date;
      let rRule = _require(8346).getRRule(closure_2);
      let date = new Date(stateFromStores.scheduled_start_time);
      const nextRecurrences = obj2.generateNextRecurrences(4, rRule, date);
      let obj3 = _require(8346);
    }
    const tmp15 = stateFromStores(tmp4([]), 2);
    first = tmp15[0];
    let closure_6 = tmp15[1];
    const items1 = [closure_2, first.length, stateFromStores, tmp2];
    const effect = React.useEffect(() => {
      if (null != result) {
        if (null != dependencyMap) {
          if (null != stateFromStores) {
            if (!obj3.isEqual(result, dependencyMap)) {
              const rRule = callback(8346).getRRule(dependencyMap);
              const obj = callback(8346);
              const _Date = Date;
              const date = new Date(stateFromStores.scheduled_start_time);
              callback3(callback(8346).generateNextRecurrences(first.length, rRule, date));
              const obj2 = callback(8346);
            }
            obj3 = callback2(22);
          }
        }
      }
    }, items1);
    const items2 = [arg0, arg1, first];
    const effect1 = React.useEffect(() => {
      if (null != callback2) {
        const mapped = first.map((getTime) => {
          const time = getTime.getTime();
          const rounded = Math.floor(time / callback(664).Millis.SECOND);
          return callback(21).fromTimestamp(rounded * callback(664).Millis.SECOND);
        });
        const guildEventUserCounts = callback2(8357).getGuildEventUserCounts(callback2, closure_0, mapped);
        const obj = callback2(8357);
      }
    }, items2);
    const items3 = [closure_2, first, ];
    let scheduled_start_time;
    if (null != stateFromStores) {
      scheduled_start_time = stateFromStores.scheduled_start_time;
    }
    items3[2] = scheduled_start_time;
    obj = {
      recurrenceStartTimes: first,
      canViewMoreRecurrences: React.useMemo(() => {
          if (null != dependencyMap) {
            if (0 !== first.length) {
              let scheduled_start_time;
              if (null != stateFromStores) {
                scheduled_start_time = stateFromStores.scheduled_start_time;
              }
              if (null != scheduled_start_time) {
                const _Date = Date;
                const date = new Date();
                const fullYear = date.getFullYear();
                date.setFullYear(fullYear + callback(8346).MAX_YEARS_AHEAD_RECURRING_EVENT);
                const rRule = callback(8346).getRRule(dependencyMap);
                const afterResult = rRule.after(first[first.length - 1]);
                return null != afterResult && afterResult <= date;
              }
            }
          }
          return false;
        }, items3),
      updateRecurrenceStartTimes() {
          if (null != dependencyMap) {
            if (null != stateFromStores) {
              const rRule = callback(8346).getRRule(dependencyMap);
              const items = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(first, 0);
              const obj2 = callback(8346);
              arraySpreadResult = HermesBuiltin.arraySpread(obj2.generateNextRecurrences(4, rRule, tmp7, true), arraySpreadResult);
              callback3(items);
              const obj = callback(8346);
            }
          }
        }
    };
    return obj;
  }
};
