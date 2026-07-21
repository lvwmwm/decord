// Module ID: 10633
// Function ID: 83015
// Name: ScheduleEventPrompt
// Dependencies: []
// Exports: ScheduleEventPrompt, StartEventPrompt

// Module 10633 (ScheduleEventPrompt)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = { actionBarCTAContainer: { marginVertical: 4 } };
obj = { 0: "Golive Simulcast without prober 720p@500k", 0: 144.002, 0: null, tintColor: importDefault(dependencyMap[3]).colors.WHITE };
obj.iconStyle = obj;
obj.iconContainerStyle = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[3]).radii.lg, padding: 4 };
const obj1 = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[3]).radii.lg, padding: 4 };
obj.greenIcon = { backgroundColor: importDefault(dependencyMap[3]).unsafe_rawColors.GREEN_360 };
let closure_4 = obj.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[3]).unsafe_rawColors.GREEN_360 };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventPrompts.tsx");

export const ScheduleEventPrompt = function ScheduleEventPrompt(isLive) {
  let channel;
  ({ guild: closure_0, channel } = isLive);
  const importDefault = channel;
  const tmp = callback();
  let obj = arg1(dependencyMap[4]);
  let tmp2 = null;
  if (obj.useManageResourcePermissions(channel).canCreateGuildEvent) {
    obj = {
      style: tmp.actionBarCTAContainer,
      onPress() {
          let obj = callback(closure_2[6]);
          obj = { channel };
          const result = obj.openCreateOrEditGuildEventModal(callback, obj);
        },
      iconSource: importDefault(dependencyMap[7])
    };
    ({ iconStyle: obj2.iconStyle, iconContainerStyle: obj2.iconContainerStyle } = tmp);
    obj.completed = isLive.isLive;
    const intl = arg1(dependencyMap[8]).intl;
    obj.title = intl.string(arg1(dependencyMap[8]).t.60lJ0C);
    const intl2 = arg1(dependencyMap[8]).intl;
    obj.subtitle = intl2.string(arg1(dependencyMap[8]).t.EYn7/y);
    tmp2 = jsx(arg1(dependencyMap[5]).FormCTA, obj);
  }
  return tmp2;
};
export const StartEventPrompt = function StartEventPrompt(event) {
  let channel;
  let isLive;
  let name;
  let scheduled_start_time;
  event = event.event;
  const arg1 = event;
  const importDefault = event.recurrenceId;
  ({ channel, isLive } = event);
  const tmp = callback();
  ({ name, scheduled_start_time } = event);
  let obj = arg1(dependencyMap[4]);
  let tmp2 = null;
  if (obj.useManageResourcePermissions(channel).canManageGuildEvent(event)) {
    obj = {
      style: tmp.actionBarCTAContainer,
      onPress() {
          const result = event(closure_2[6]).openStartGuildEventModal(event, recurrenceId);
        },
      iconSource: importDefault(dependencyMap[7]),
      iconStyle: tmp.iconStyle
    };
    const items = [, ];
    ({ iconContainerStyle: arr[0], greenIcon: arr[1] } = tmp);
    obj.iconContainerStyle = items;
    obj.completed = isLive;
    const intl = arg1(dependencyMap[8]).intl;
    obj = { eventName: name };
    obj.title = intl.formatToPlainString(arg1(dependencyMap[8]).t.1vGXqM, obj);
    const intl2 = arg1(dependencyMap[8]).intl;
    const obj1 = { startTime: arg1(dependencyMap[9]).calendarFormat(importDefault(dependencyMap[10])(scheduled_start_time)) };
    obj.subtitle = intl2.formatToPlainString(arg1(dependencyMap[8]).t.PTebCR, obj1);
    tmp2 = jsx(arg1(dependencyMap[5]).FormCTA, obj);
    const obj5 = arg1(dependencyMap[9]);
  }
  return tmp2;
};
