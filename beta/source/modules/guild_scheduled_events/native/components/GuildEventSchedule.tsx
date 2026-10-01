// Module ID: 8987
// Function ID: 8988
// Name: GuildEventSchedule
// Dependencies: [19, 21, 4421, 8946, 8988, 1115, 2]
// Exports: default

// Module 8987 (GuildEventSchedule)
import _modDef4421 from "module_4421" /* 4421 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventSchedule.tsx");

export default function GuildEventSchedule(schedule) {
  let guildEvent;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let recurrenceId;
  schedule = schedule.schedule;
  const onChange = schedule.onChange;
  ({ guildEvent, recurrenceId } = schedule);
  const tmp2 = onChange(4421)();
  let obj = onChange(4421)();
  const addResult = obj.add(schedule(8946).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  const items = [schedule.startDate];
  const memo = react.useMemo(() => {
    const obj = _modDef4421(schedule.startDate);
    return obj.add(15, "minutes");
  }, items);
  const obj3 = onChange(4421)();
  const addResult1 = obj3.add(schedule(8946).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  if (null != recurrenceId) {
    addResult.add(schedule(8946).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
    addResult1.add(schedule(8946).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
  }
  const obj2 = {
    date: schedule.startDate,
    onChange(startDate) {
      const obj = { startDate };
      const merged = Object.assign(schedule);
      onChange(obj);
    },
    minimumDate: tmp2,
    maximumDate: addResult,
    dateLabel: intl.string(schedule(1115).t.kKOIwJ),
    timeLabel: intl2.string(schedule(1115).t["6dGmCD"])
  };
  const GuildEventDatetime = tmp3(8988).GuildEventDatetime;
  intl = tmp3(1115).intl;
  intl2 = tmp3(1115).intl;
  const children = [closure_4(GuildEventDatetime, obj2), ];
  let tmp9Result = null != guildEvent.scheduled_end_time;
  const tmp7 = closure_6;
  const tmp8 = closure_5;
  const tmp9 = closure_4;
  if (tmp9Result) {
    const obj4 = {
      date: schedule.endDate,
      onChange(endDate) {
          const obj = { endDate };
          const merged = Object.assign(schedule);
          onChange(obj);
        },
      minimumDate: memo,
      maximumDate: addResult1,
      dateLabel: intl3.string(schedule(1115).t.CTLgZJ),
      timeLabel: intl4.string(schedule(1115).t.j2RuXF)
    };
    const GuildEventDatetime2 = tmp3(8988).GuildEventDatetime;
    intl3 = tmp3(1115).intl;
    intl4 = tmp3(1115).intl;
    tmp9Result = tmp9(GuildEventDatetime2, obj4);
  }
  children[1] = tmp9Result;
  return tmp7(tmp8, { children });
};
