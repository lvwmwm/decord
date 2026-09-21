// Module ID: 9771
// Function ID: 9772
// Name: GuildEventSchedule
// Dependencies: [19, 21, 558, 568, 4352, 9749, 1119, 9772, 2]

// Module 9771 (GuildEventSchedule)
import c from "c" /* 568 */;
import _modDef4352 from "module_4352" /* 4352 */;
import ScheduleUtils from "ScheduleUtils" /* 9749 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventSchedule.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onChange) => {
  const cResult = c.c(29);
  ({ guildEvent, recurrenceId, schedule } = onChange);
  onChange = onChange.onChange;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = _modDef4352();
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === recurrenceId) {
    if (cResult[2] === schedule) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
      class C {
        constructor(arg0) {
          obj = {};
          merged = Object.assign(schedule);
          obj.startDate = onChange;
          tmp2 = onChange(obj);
          return;
        }
      }
    }
    if (cResult[8] === onChange) {
      if (cResult[9] === schedule) {
        let tmp15 = cResult[10];
      }
      if (cResult[11] === onChange) {
        if (cResult[12] === schedule) {
          let tmp16 = cResult[13];
        }
        const _Symbol = Symbol;
        class T {
          constructor(arg0) {
            obj = {};
            merged = Object.assign(schedule);
            obj.endDate = onChange;
            tmp2 = onChange(obj);
            return;
          }
        }
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const string = tmp(1119).intl.string;
          class T {
            constructor(arg0) {
              obj = {};
              merged = Object.assign(schedule);
              obj.endDate = onChange;
              tmp2 = onChange(obj);
              return;
            }
          }
          const intl = tmp(1119).intl;
          const stringResult = intl.string(tmp(1119).t["6dGmCD"]);
          cResult[14] = tmp20;
          cResult[15] = stringResult;
          let tmp19 = stringResult;
          let tmp18 = tmp20;
        } else {
          tmp18 = cResult[14];
          tmp19 = cResult[15];
        }
        if (cResult[16] === tmp15) {
          if (cResult[17] === tmp8) {
            if (cResult[18] === schedule.startDate) {
              let tmp22 = cResult[19];
            }
            if (cResult[20] === guildEvent.scheduled_end_time) {
              if (cResult[21] === tmp16) {
                if (cResult[22] === tmp7) {
                  if (cResult[23] === tmp9) {
                    if (cResult[24] === schedule.endDate) {
                      let tmp25 = cResult[25];
                    }
                    if (cResult[26] === tmp22) {
                      if (cResult[27] === tmp25) {
                        let tmp28 = cResult[28];
                      }
                      return tmp28;
                    }
                    class T {
                      constructor(arg0) {
                        obj = {};
                        merged = Object.assign(schedule);
                        obj.endDate = onChange;
                        tmp2 = onChange(obj);
                        return;
                      }
                    }
                    const obj5 = { children: null };
                    const items = [tmp22, tmp25];
                    obj5.children = items;
                    const tmp30 = timestampProducer(hasOwnProperty, obj5);
                    cResult[26] = tmp22;
                    cResult[27] = tmp25;
                    cResult[28] = tmp30;
                    tmp28 = tmp30;
                  }
                }
              }
            }
            class T {
              constructor(arg0) {
                obj = {};
                merged = Object.assign(schedule);
                obj.endDate = onChange;
                tmp2 = onChange(obj);
                return;
              }
            }
            let tmp26 = null != guildEvent.scheduled_end_time;
            if (tmp26) {
              const obj6 = { date: null, onChange: null, minimumDate: null, maximumDate: null, dateLabel: null, timeLabel: null };
              class T {
                constructor(arg0) {
                  obj = {};
                  merged = Object.assign(schedule);
                  obj.endDate = onChange;
                  tmp2 = onChange(obj);
                  return;
                }
              }
              obj6.onChange = tmp16;
              obj6.minimumDate = tmp9;
              obj6.maximumDate = tmp7;
              const intl2 = tmp(1119).intl;
              obj6.dateLabel = intl2.string(tmp(1119).t.CTLgZJ);
              const intl3 = tmp(1119).intl;
              obj6.timeLabel = intl3.string(tmp(1119).t.j2RuXF);
              tmp26 = React4(tmp(9772).GuildEventDatetime, obj6);
            }
            cResult[20] = guildEvent.scheduled_end_time;
            cResult[21] = tmp16;
            cResult[22] = tmp7;
            cResult[23] = tmp9;
            cResult[24] = schedule.endDate;
            cResult[25] = tmp26;
            tmp25 = tmp26;
          }
        }
        const obj7 = { date: tmp17, onChange: tmp15, minimumDate: first, maximumDate: tmp8, dateLabel: tmp18, timeLabel: tmp19 };
        const tmp24 = React4(tmp(9772).GuildEventDatetime, obj7);
        cResult[16] = tmp15;
        cResult[17] = tmp8;
        cResult[18] = schedule.startDate;
        cResult[19] = tmp24;
        tmp22 = tmp24;
      }
      class T {
        constructor(arg0) {
          obj = {};
          merged = Object.assign(schedule);
          obj.endDate = onChange;
          tmp2 = onChange(obj);
          return;
        }
      }
      cResult[11] = onChange;
      cResult[12] = schedule;
      cResult[13] = T;
      tmp16 = T;
    }
    class C {
      constructor(arg0) {
        obj = {};
        merged = Object.assign(schedule);
        obj.startDate = onChange;
        tmp2 = onChange(obj);
        return;
      }
    }
    cResult[8] = onChange;
    cResult[9] = schedule;
    cResult[10] = C;
    tmp15 = C;
  }
  const addResult = _modDef4352().add(ScheduleUtils.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  if (cResult[6] !== schedule.startDate) {
    class T {
      constructor(arg0) {
        obj = {};
        merged = Object.assign(schedule);
        obj.endDate = onChange;
        tmp2 = onChange(obj);
        return;
      }
    }
    const addResult1 = tmp10(4352)(schedule.startDate).add(15, "minutes");
    cResult[6] = schedule.startDate;
    cResult[7] = addResult1;
    let tmp12 = addResult1;
    const obj3 = tmp10(4352)(schedule.startDate);
  } else {
    tmp12 = cResult[7];
  }
  const obj2 = _modDef4352();
  const addResult2 = _modDef4352().add(ScheduleUtils.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  if (null != recurrenceId) {
    const add = addResult.add;
    class T {
      constructor(arg0) {
        obj = {};
        merged = Object.assign(schedule);
        obj.endDate = onChange;
        tmp2 = onChange(obj);
        return;
      }
    }
    addResult2.add(tmp(9749).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
  }
  cResult[1] = recurrenceId;
  cResult[2] = schedule;
  cResult[3] = addResult2;
  cResult[4] = addResult;
  cResult[5] = tmp12;
  tmp8 = addResult;
  tmp7 = addResult2;
}) : ((schedule) => {
  schedule = schedule.schedule;
  const onChange = schedule.onChange;
  ({ guildEvent, recurrenceId } = schedule);
  const tmp2 = onChange(4352)();
  const addResult = onChange(4352)().add(schedule(9749).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  const items = [schedule.startDate];
  const memo = noop.useMemo(() => _modDef4352(schedule.startDate).add(15, "minutes"), items);
  let obj = onChange(4352)();
  const addResult1 = onChange(4352)().add(schedule(9749).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  if (null != recurrenceId) {
    addResult.add(tmp3(9749).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
    addResult1.add(tmp3(9749).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
  }
  const obj2 = {
    date: schedule.startDate,
    onChange(startDate) {
      const obj = {};
      const merged = Object.assign(schedule);
      obj.startDate = startDate;
      onChange(obj);
    },
    minimumDate: tmp2,
    maximumDate: addResult,
    dateLabel: null,
    timeLabel: null
  };
  const intl = tmp3(1119).intl;
  obj2.dateLabel = intl.string(schedule(1119).t.kKOIwJ);
  const intl2 = tmp3(1119).intl;
  obj2.timeLabel = intl2.string(schedule(1119).t["6dGmCD"]);
  const children = [closure_4(schedule(9772).GuildEventDatetime, obj2), ];
  let tmp9Result = null != guildEvent.scheduled_end_time;
  if (tmp9Result) {
    const obj4 = {
      date: schedule.endDate,
      onChange(endDate) {
          const obj = {};
          const merged = Object.assign(schedule);
          obj.endDate = endDate;
          onChange(obj);
        },
      minimumDate: memo,
      maximumDate: addResult1,
      dateLabel: null,
      timeLabel: null
    };
    const intl3 = tmp3(1119).intl;
    obj4.dateLabel = intl3.string(tmp3(1119).t.CTLgZJ);
    const intl4 = tmp3(1119).intl;
    obj4.timeLabel = intl4.string(tmp3(1119).t.j2RuXF);
    tmp9Result = closure_4(tmp3(9772).GuildEventDatetime, obj4);
  }
  children[1] = tmp9Result;
  return closure_6(closure_5, { children });
});
