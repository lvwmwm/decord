// Module ID: 8370
// Function ID: 66712
// Name: GuildEventSchedule
// Dependencies: [31, 33, 3712, 8346, 8371, 1212, 2]
// Exports: default

// Module 8370 (GuildEventSchedule)
import result from "result";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
const result = require("t").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventSchedule.tsx");

export default function GuildEventSchedule(schedule) {
  let guildEvent;
  let recurrenceId;
  schedule = schedule.schedule;
  const onChange = schedule.onChange;
  ({ guildEvent, recurrenceId } = schedule);
  let obj = onChange(3712)();
  const addResult = obj.add(schedule(8346).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  const items = [schedule.startDate];
  const memo = React.useMemo(() => onChange(outer1_2[2])(schedule.startDate).add(15, "minutes"), items);
  const tmp = onChange(3712)();
  const addResult1 = onChange(3712)().add(schedule(8346).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  if (null != recurrenceId) {
    addResult.add(schedule(8346).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
    addResult1.add(schedule(8346).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
  }
  obj = {};
  obj = {
    date: schedule.startDate,
    onChange(arg0) {
      const obj = {};
      const merged = Object.assign(schedule);
      obj["startDate"] = arg0;
      onChange(obj);
    },
    minimumDate: tmp,
    maximumDate: addResult
  };
  const intl = schedule(1212).intl;
  obj.dateLabel = intl.string(schedule(1212).t.kKOIwJ);
  const intl2 = schedule(1212).intl;
  obj.timeLabel = intl2.string(schedule(1212).t["6dGmCD"]);
  const items1 = [callback(schedule(8371).GuildEventDatetime, obj), ];
  let tmp9 = null != guildEvent.scheduled_end_time;
  if (tmp9) {
    const obj1 = {
      date: schedule.endDate,
      onChange(arg0) {
          const obj = {};
          const merged = Object.assign(schedule);
          obj["endDate"] = arg0;
          onChange(obj);
        },
      minimumDate: memo,
      maximumDate: addResult1
    };
    const intl3 = schedule(1212).intl;
    obj1.dateLabel = intl3.string(schedule(1212).t.CTLgZJ);
    const intl4 = schedule(1212).intl;
    obj1.timeLabel = intl4.string(schedule(1212).t.j2RuXF);
    tmp9 = callback(schedule(8371).GuildEventDatetime, obj1);
  }
  items1[1] = tmp9;
  obj.children = items1;
  return closure_6(closure_5, obj);
};
