// Module ID: 8363
// Function ID: 66663
// Name: GuildEventSchedule
// Dependencies: []
// Exports: default

// Module 8363 (GuildEventSchedule)
let closure_3 = importAll(dependencyMap[0]);
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventSchedule.tsx");

export default function GuildEventSchedule(schedule) {
  let guildEvent;
  let recurrenceId;
  schedule = schedule.schedule;
  const arg1 = schedule;
  const importDefault = schedule.onChange;
  ({ guildEvent, recurrenceId } = schedule);
  let obj = importDefault(dependencyMap[2])();
  const addResult = obj.add(arg1(dependencyMap[3]).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  const items = [schedule.startDate];
  const memo = React.useMemo(() => onChange(closure_2[2])(schedule.startDate).add(15, "minutes"), items);
  const tmp = importDefault(dependencyMap[2])();
  const addResult1 = importDefault(dependencyMap[2])().add(arg1(dependencyMap[3]).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  if (null != recurrenceId) {
    addResult.add(arg1(dependencyMap[3]).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
    addResult1.add(arg1(dependencyMap[3]).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
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
  const intl = arg1(dependencyMap[5]).intl;
  obj.dateLabel = intl.string(arg1(dependencyMap[5]).t.kKOIwJ);
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.timeLabel = intl2.string(arg1(dependencyMap[5]).t.6dGmCD);
  const items1 = [callback(arg1(dependencyMap[4]).GuildEventDatetime, obj), ];
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
    const intl3 = arg1(dependencyMap[5]).intl;
    obj1.dateLabel = intl3.string(arg1(dependencyMap[5]).t.CTLgZJ);
    const intl4 = arg1(dependencyMap[5]).intl;
    obj1.timeLabel = intl4.string(arg1(dependencyMap[5]).t.j2RuXF);
    tmp9 = callback(arg1(dependencyMap[4]).GuildEventDatetime, obj1);
  }
  items1[1] = tmp9;
  obj.children = items1;
  return closure_6(closure_5, obj);
};
