// Module ID: 8458
// Function ID: 67466
// Name: useGuildEventRecurrences
// Dependencies: []
// Exports: default

// Module 8458 (useGuildEventRecurrences)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_scheduled_events/useGuildEventRecurrences.tsx");

export default function useGuildEventRecurrences(arg0, arg1, byWeekday) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = byWeekday;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => first.getGuildScheduledEvent(arg0));
  const callback = stateFromStores;
  const tmp2 = importDefault(dependencyMap[4])(byWeekday);
  const React = tmp2;
  if (null != byWeekday) {
    if (null != stateFromStores) {
      const obj2 = arg1(dependencyMap[5]);
      const _Date = Date;
      const rRule = arg1(dependencyMap[5]).getRRule(byWeekday);
      const date = new Date(stateFromStores.scheduled_start_time);
      const nextRecurrences = obj2.generateNextRecurrences(4, rRule, date);
      const obj3 = arg1(dependencyMap[5]);
    }
    const tmp15 = callback(tmp4([]), 2);
    const first = tmp15[0];
    closure_5 = first;
    let closure_6 = tmp15[1];
    const items1 = [byWeekday, first.length, stateFromStores, tmp2];
    const effect = React.useEffect(() => {
      if (null != tmp2) {
        if (null != arg2) {
          if (null != stateFromStores) {
            if (!obj3.isEqual(tmp2, arg2)) {
              const rRule = arg0(arg2[5]).getRRule(arg2);
              const obj = arg0(arg2[5]);
              const _Date = Date;
              const date = new Date(stateFromStores.scheduled_start_time);
              callback(arg0(arg2[5]).generateNextRecurrences(first.length, rRule, date));
              const obj2 = arg0(arg2[5]);
            }
            const obj3 = arg1(arg2[6]);
          }
        }
      }
    }, items1);
    const items2 = [arg0, arg1, first];
    const effect1 = React.useEffect(() => {
      if (null != arg1) {
        const mapped = first.map((getTime) => {
          const time = getTime.getTime();
          const rounded = Math.floor(time / callback(closure_2[8]).Millis.SECOND);
          return callback(closure_2[7]).fromTimestamp(rounded * callback(closure_2[8]).Millis.SECOND);
        });
        const guildEventUserCounts = arg1(arg2[9]).getGuildEventUserCounts(arg1, arg0, mapped);
        const obj = arg1(arg2[9]);
      }
    }, items2);
    const items3 = [byWeekday, first, ];
    let scheduled_start_time;
    if (null != stateFromStores) {
      scheduled_start_time = stateFromStores.scheduled_start_time;
    }
    items3[2] = scheduled_start_time;
    obj = {
      recurrenceStartTimes: first,
      canViewMoreRecurrences: React.useMemo(() => {
          if (null != arg2) {
            if (0 !== first.length) {
              let scheduled_start_time;
              if (null != stateFromStores) {
                scheduled_start_time = stateFromStores.scheduled_start_time;
              }
              if (null != scheduled_start_time) {
                const _Date = Date;
                const date = new Date();
                const fullYear = date.getFullYear();
                date.setFullYear(fullYear + arg0(arg2[5]).MAX_YEARS_AHEAD_RECURRING_EVENT);
                const rRule = arg0(arg2[5]).getRRule(arg2);
                const afterResult = rRule.after(first[closure_5.length - 1]);
                return null != afterResult && afterResult <= date;
              }
            }
          }
          return false;
        }, items3),
      updateRecurrenceStartTimes() {
          if (null != arg2) {
            if (null != stateFromStores) {
              const rRule = arg0(arg2[5]).getRRule(arg2);
              const items = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(first, 0);
              const obj2 = arg0(arg2[5]);
              arraySpreadResult = HermesBuiltin.arraySpread(obj2.generateNextRecurrences(4, rRule, tmp7, true), arraySpreadResult);
              callback(items);
              const obj = arg0(arg2[5]);
            }
          }
        }
    };
    return obj;
  }
};
