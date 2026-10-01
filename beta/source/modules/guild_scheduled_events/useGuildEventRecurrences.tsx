// Module ID: 9088
// Function ID: 9089
// Name: useGuildEventRecurrences
// Dependencies: [32, 19, 6946, 504, 9089, 8946, 12, 11, 1091, 9072, 2]
// Exports: default

// Module 9088 (useGuildEventRecurrences)
import _modDef12 from "module_12" /* 12 */;
import ScheduleUtils from "ScheduleUtils" /* 8946 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9072 */;
import reactDefault from "react" /* 9089 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6946 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildEventRecurrences.tsx");

export default function useGuildEventRecurrences(arg0, arg1, byWeekday) {
  let closure_0;
  let closure_1;
  let recurrenceStartTimes;
  _require = arg0;
  importDefault = arg1;
  dependencyMap = byWeekday;
  const tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("get initialized");
  let items = [recurrenceStartTimes];
  const stateFromStores = obj.useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(closure_0));
  const tmp4 = reactDefault(byWeekday);
  let closure_4 = tmp4;
  let obj2 = closure_4;
  if (null != byWeekday) {
    if (null != stateFromStores) {
      let generateNextRecurrences = tmp(8946).generateNextRecurrences;
      tmp(8946);
      let _Date = Date;
      let self = this;
      let self2 = this;
      const tmpResult2 = tmp(8946);
      let rRule = tmpResult2.getRRule(byWeekday);
      let date = new Date(stateFromStores.scheduled_start_time);
      const tmp11 = date;
      const nextRecurrences = generateNextRecurrences(4, rRule, date);
    }
    const tmp12 = stateFromStores;
    const tmp13 = stateFromStores(tmp5([]), 2);
    recurrenceStartTimes = tmp13[0];
    let closure_6 = tmp13[1];
    const items1 = [byWeekday, recurrenceStartTimes.length, stateFromStores, tmp4];
    const effect = obj2.useEffect(function() {
      if (null != closure_4) {
        if (null != byWeekday) {
          if (null != stateFromStores) {
            const obj2 = _modDef12;
            if (!obj2.isEqual(tmp, byWeekday)) {
              const obj = ScheduleUtils;
              const rRule = obj.getRRule(tmp11);
              const _Date = Date;
              const self = this;
              const self2 = this;
              const generateNextRecurrences = ScheduleUtils.generateNextRecurrences;
              const length = first.length;
              ScheduleUtils;
              const date = new Date(tmp12.scheduled_start_time);
              closure_6(generateNextRecurrences(length, rRule, date));
            }
          }
        }
      }
    }, items1);
    const items2 = [arg0, arg1, recurrenceStartTimes];
    const effect1 = obj2.useEffect(() => {
      if (null != closure_1) {
        const mapped = first.map((getTime) => {
          const fromTimestamp = closure_1_1(byWeekday[7]).fromTimestamp;
          closure_1_1(byWeekday[7]);
          const time = getTime.getTime();
          const floorResult = floor(time / closure_1_1(byWeekday[8]).Millis.SECOND);
          return fromTimestamp(floorResult * closure_1_1(byWeekday[8]).Millis.SECOND);
        });
        const obj = GuildScheduledEventManagerDefault;
        const guildEventUserCounts = obj.getGuildEventUserCounts(tmp, closure_0, mapped);
      }
    }, items2);
    const items3 = [byWeekday, recurrenceStartTimes, ];
    let scheduled_start_time;
    const useMemo = obj2.useMemo;
    if (stateFromStores != null) {
      scheduled_start_time = stateFromStores.scheduled_start_time;
    }
    items3[2] = scheduled_start_time;
    const obj3 = {
      recurrenceStartTimes,
      canViewMoreRecurrences: useMemo(function() {
          if (null != byWeekday) {
            if (0 !== first.length) {
              let scheduled_start_time;
              if (stateFromStores != null) {
                scheduled_start_time = stateFromStores.scheduled_start_time;
              }
              if (null != scheduled_start_time) {
                const _Date = Date;
                const self = this;
                const self2 = this;
                const date = new Date();
                const setFullYear = date.setFullYear;
                const fullYear = date.getFullYear();
                setFullYear(fullYear + ScheduleUtils.MAX_YEARS_AHEAD_RECURRING_EVENT);
                const tmp10 = first[first.length - 1];
                const obj2 = ScheduleUtils;
                const rRule = obj2.getRRule(tmp);
                const afterResult = rRule.after(tmp10);
                return null != afterResult && afterResult <= date;
              }
            }
          }
          return false;
        }, items3),
      updateRecurrenceStartTimes() {
          if (null != byWeekday) {
            if (null != stateFromStores) {
              const obj = ScheduleUtils;
              const rRule = obj.getRRule(tmp2);
              const items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(items, first, 0);
              const obj2 = ScheduleUtils;
              HermesBuiltin.arraySpread(items, obj2.generateNextRecurrences(4, rRule, first[first.length - 1], true), arraySpreadResult);
              closure_6(items);
            }
          }
        }
    };
    return obj3;
  }
};
