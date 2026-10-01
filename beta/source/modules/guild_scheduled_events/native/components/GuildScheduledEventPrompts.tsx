// Module ID: 8975
// Function ID: 8976
// Name: GuildScheduledEventPrompts
// Dependencies: [19, 21, 4836, 576, 8952, 8053, 8976, 9074, 1115, 4512, 4421, 2]
// Exports: ScheduleEventPrompt, StartEventPrompt

// Module 8975 (GuildScheduledEventPrompts)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 8952 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 8976 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let obj3;
let size;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { actionBarCTAContainer: { marginVertical: 4 }, iconStyle: size, iconContainerStyle: obj2, greenIcon: obj3 };
size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, padding: 4 };
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
let closure_4 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventPrompts.tsx");

export const ScheduleEventPrompt = function ScheduleEventPrompt(isLive) {
  let channel;
  ({ guild: require, channel } = isLive);
  isLive = isLive.isLive;
  const tmp = closure_4();
  let obj = useManageResourcePermissions;
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canCreateGuildEvent) {
    const FormCTA = tmp2(8053).FormCTA;
    ({ iconStyle: obj2.iconStyle, iconContainerStyle: obj2.iconContainerStyle } = tmp);
    const intl = tmp2(1115).intl;
    const intl2 = tmp2(1115).intl;
    tmp4 = <FormCTA style={tmp.actionBarCTAContainer} onPress={function onPress() {
      const obj = GuildScheduledEventModalActionCreators;
      const obj2 = { channel };
      const result = obj.openCreateOrEditGuildEventModal(require, obj2);
    }} iconSource={channel(9074)} iconStyle={null} iconContainerStyle={null} completed={isLive} title={intl.string(intl3.t["60lJ0C"])} subtitle={intl2.string(intl3.t["EYn7/y"])} />;
  }
  return tmp4;
};
export const StartEventPrompt = function StartEventPrompt(event) {
  let channel;
  let isLive;
  let name;
  let scheduled_start_time;
  let tmp2Result;
  event = event.event;
  const recurrenceId = event.recurrenceId;
  ({ channel, isLive } = event);
  const tmp = closure_4();
  ({ name, scheduled_start_time } = event);
  let obj = event(8952);
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canManageGuildEvent(event)) {
    const FormCTA = tmp2(8053).FormCTA;
    const items = [, ];
    ({ iconContainerStyle: arr[0], greenIcon: arr[1] } = tmp);
    const intl = tmp2(1115).intl;
    const obj3 = { eventName: name };
    const intl2 = tmp2(1115).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const obj4 = { startTime: tmp2Result.calendarFormat(recurrenceId(4421)(scheduled_start_time)) };
    const PTebCR = tmp2(1115).t.PTebCR;
    tmp4 = <FormCTA style={tmp.actionBarCTAContainer} onPress={function onPress() {
      const obj = GuildScheduledEventModalActionCreators;
      const result = obj.openStartGuildEventModal(event, recurrenceId);
    }} iconSource={recurrenceId(9074)} iconStyle={tmp.iconStyle} iconContainerStyle={items} completed={isLive} title={intl.formatToPlainString(event(1115).t["1vGXqM"], obj3)} subtitle={formatToPlainString(PTebCR, obj4)} />;
    tmp2Result = event(4512);
  }
  return tmp4;
};
