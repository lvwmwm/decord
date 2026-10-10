// Module ID: 8539
// Function ID: 8540
// Name: GuildEventSchedule
// Dependencies: [19, 21, 558, 576, 4702, 8520, 1126, 8540, 2]

// Module 8539 (GuildEventSchedule)
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import _modDef4702 from "module_4702" /* 4702 */;
import ScheduleUtils from "ScheduleUtils" /* 8520 */;
import GuildEventModalComponents from "GuildEventModalComponents" /* 8540 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventSchedule(onChange) {
  let first;
  let guildEvent;
  let intl3;
  let intl4;
  let items;
  let recurrenceId;
  let schedule;
  let tmp11;
  let obj = react2;
  const cResult = obj.c(29);
  ({ guildEvent, recurrenceId, schedule } = onChange);
  onChange = onChange.onChange;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = _modDef4702();
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === recurrenceId) {
    let tmp7;
    let tmp8;
    let tmp9;
    if (cResult[2] === schedule) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
      tmp9 = cResult[5];
    }
    if (cResult[8] === onChange) {
      let tmp15;
      if (cResult[9] === schedule) {
        tmp15 = cResult[10];
      }
      if (cResult[11] === onChange) {
        let tmp16;
        let tmp18;
        let tmp17;
        if (cResult[12] === schedule) {
          tmp16 = cResult[13];
        }
        const _Symbol = Symbol;
        const startDate = schedule.startDate;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(intl5.t.kKOIwJ);
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(intl5.t["6dGmCD"]);
          cResult[14] = stringResult;
          cResult[15] = stringResult1;
          tmp18 = stringResult1;
          tmp17 = stringResult;
        } else {
          tmp17 = cResult[14];
          tmp18 = cResult[15];
        }
        if (cResult[16] === tmp15) {
          if (cResult[17] === tmp8) {
            let tmp21;
            if (cResult[18] === schedule.startDate) {
              tmp21 = cResult[19];
            }
            if (cResult[20] === guildEvent.scheduled_end_time) {
              if (cResult[21] === tmp16) {
                if (cResult[22] === tmp7) {
                  if (cResult[23] === tmp9) {
                    let tmp24;
                    if (cResult[24] === schedule.endDate) {
                      tmp24 = cResult[25];
                    }
                    if (cResult[26] === tmp21) {
                      let tmp28;
                      if (cResult[27] === tmp24) {
                        tmp28 = cResult[28];
                      }
                      return tmp28;
                    }
                    const obj3 = { children: items };
                    items = [tmp21, tmp24];
                    const tmp31 = metroRequire(hasOwnProperty, obj3);
                    cResult[26] = tmp21;
                    cResult[27] = tmp24;
                    cResult[28] = tmp31;
                    tmp28 = tmp31;
                  }
                }
              }
            }
            let tmp26 = null != guildEvent.scheduled_end_time;
            if (tmp26) {
              const obj6 = { date: schedule.endDate, onChange: tmp16, minimumDate: tmp9, maximumDate: tmp7, dateLabel: intl3.string(intl5.t.CTLgZJ), timeLabel: intl4.string(intl5.t.j2RuXF) };
              const GuildEventDatetime = tmp(8540).GuildEventDatetime;
              intl3 = tmp(1126).intl;
              intl4 = tmp(1126).intl;
              tmp26 = React3(GuildEventDatetime, obj6);
            }
            cResult[20] = guildEvent.scheduled_end_time;
            cResult[21] = tmp16;
            cResult[22] = tmp7;
            cResult[23] = tmp9;
            cResult[24] = schedule.endDate;
            cResult[25] = tmp26;
            tmp24 = tmp26;
          }
        }
        const obj7 = { date: startDate, onChange: tmp15, minimumDate: first, maximumDate: tmp8, dateLabel: tmp17, timeLabel: tmp18 };
        const tmp23 = React3(GuildEventModalComponents.GuildEventDatetime, obj7);
        cResult[16] = tmp15;
        cResult[17] = tmp8;
        cResult[18] = schedule.startDate;
        cResult[19] = tmp23;
        tmp21 = tmp23;
      }
      function handleChangeEventEndTime(endDate) {
        const obj = { endDate };
        const merged = Object.assign(schedule);
        onChange(obj);
      }
      cResult[11] = onChange;
      cResult[12] = schedule;
      cResult[13] = handleChangeEventEndTime;
      tmp16 = handleChangeEventEndTime;
    }
    function handleChangeEventStartTime(startDate) {
      const obj = { startDate };
      const merged = Object.assign(schedule);
      onChange(obj);
    }
    cResult[8] = onChange;
    cResult[9] = schedule;
    cResult[10] = handleChangeEventStartTime;
    tmp15 = handleChangeEventStartTime;
  }
  const obj2 = _modDef4702();
  const addResult = obj2.add(ScheduleUtils.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  if (cResult[6] !== schedule.startDate) {
    const obj4 = _modDef4702(schedule.startDate);
    const addResult1 = obj4.add(15, "minutes");
    cResult[6] = schedule.startDate;
    cResult[7] = addResult1;
    tmp11 = addResult1;
  } else {
    tmp11 = cResult[7];
  }
  const obj5 = _modDef4702();
  const addResult2 = obj5.add(ScheduleUtils.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  if (null != recurrenceId) {
    addResult.add(ScheduleUtils.MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
    addResult2.add(ScheduleUtils.MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
  }
  cResult[1] = recurrenceId;
  cResult[2] = schedule;
  cResult[3] = addResult2;
  cResult[4] = addResult;
  cResult[5] = tmp11;
  tmp9 = tmp11;
  tmp8 = addResult;
  tmp7 = addResult2;
}) : (function GuildEventSchedule(schedule) {
  let guildEvent;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let recurrenceId;
  schedule = schedule.schedule;
  const onChange = schedule.onChange;
  ({ guildEvent, recurrenceId } = schedule);
  const tmp2 = onChange(4702)();
  let obj = onChange(4702)();
  const addResult = obj.add(schedule(8520).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  const items = [schedule.startDate];
  const memo = react.useMemo(() => {
    const obj = _modDef4702(schedule.startDate);
    return obj.add(15, "minutes");
  }, items);
  const obj3 = onChange(4702)();
  const addResult1 = obj3.add(schedule(8520).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  if (null != recurrenceId) {
    addResult.add(schedule(8520).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
    addResult1.add(schedule(8520).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
  }
  const obj2 = {
    date: schedule.startDate,
    onChange: function handleChangeEventStartTime(startDate) {
      const obj = { startDate };
      const merged = Object.assign(schedule);
      onChange(obj);
    },
    minimumDate: tmp2,
    maximumDate: addResult,
    dateLabel: intl.string(schedule(1126).t.kKOIwJ),
    timeLabel: intl2.string(schedule(1126).t["6dGmCD"])
  };
  const GuildEventDatetime = tmp3(8540).GuildEventDatetime;
  intl = tmp3(1126).intl;
  intl2 = tmp3(1126).intl;
  const children = [closure_4(GuildEventDatetime, obj2), ];
  let tmp9Result = null != guildEvent.scheduled_end_time;
  const tmp7 = closure_6;
  const tmp8 = closure_5;
  const tmp9 = closure_4;
  if (tmp9Result) {
    const obj4 = {
      date: schedule.endDate,
      onChange: function handleChangeEventEndTime(endDate) {
          const obj = { endDate };
          const merged = Object.assign(schedule);
          onChange(obj);
        },
      minimumDate: memo,
      maximumDate: addResult1,
      dateLabel: intl3.string(schedule(1126).t.CTLgZJ),
      timeLabel: intl4.string(schedule(1126).t.j2RuXF)
    };
    const GuildEventDatetime2 = tmp3(8540).GuildEventDatetime;
    intl3 = tmp3(1126).intl;
    intl4 = tmp3(1126).intl;
    tmp9Result = tmp9(GuildEventDatetime2, obj4);
  }
  children[1] = tmp9Result;
  return tmp7(tmp8, { children });
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventSchedule.tsx");

export default tmp3;
