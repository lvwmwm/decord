// Module ID: 9759
// Function ID: 9760
// Name: GuildScheduledEventPrompts
// Dependencies: [19, 21, 4758, 580, 558, 568, 9755, 9760, 1119, 8876, 9859, 4442, 4352, 2]

// Module 9759 (GuildScheduledEventPrompts)
import nativeDefault from "native" /* 580 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9760 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { actionBarCTAContainer: { marginVertical: 4 }, iconStyle: null, iconContainerStyle: null, greenIcon: null };
let size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20 };
obj2.iconStyle = size;
obj2.iconContainerStyle = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, padding: 4 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, padding: 4 };
obj2.greenIcon = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
let closure_4 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(568).c(11);
  guild = guild.guild;
  const channel = guild.channel;
  const isLive = guild.isLive;
  const tmp4 = closure_4();
  const obj = guild(568);
  if (obj2.useManageResourcePermissions(channel).canCreateGuildEvent) {
    if (cResult[0] === channel) {
      if (cResult[1] === guild) {
        let tmp6 = cResult[2];
      }
      const _Symbol = Symbol;
      ({ actionBarCTAContainer, iconStyle, iconContainerStyle } = tmp4);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1119).intl;
        const stringResult = intl.string(tmp(1119).t["60lJ0C"]);
        const intl2 = tmp(1119).intl;
        const stringResult1 = intl2.string(tmp(1119).t["EYn7/y"]);
        cResult[3] = stringResult;
        cResult[4] = stringResult1;
        let tmp9 = stringResult1;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      if (cResult[5] === tmp6) {
        if (cResult[6] === isLive) {
          if (cResult[7] === tmp4.actionBarCTAContainer) {
            if (cResult[8] === tmp4.iconContainerStyle) {
              if (cResult[9] === tmp4.iconStyle) {
                let tmp12 = cResult[10];
              }
              return tmp12;
            }
          }
        }
      }
      const obj3 = { style: actionBarCTAContainer, onPress: tmp6, iconSource: channel(9859), iconStyle, iconContainerStyle, completed: isLive, title: tmp8, subtitle: tmp9 };
      const tmp15 = jsx(tmp(8876).FormCTA, { style: actionBarCTAContainer, onPress: tmp6, iconSource: channel(9859), iconStyle, iconContainerStyle, completed: isLive, title: tmp8, subtitle: tmp9 });
      cResult[5] = tmp6;
      cResult[6] = isLive;
      cResult[7] = tmp4.actionBarCTAContainer;
      cResult[8] = tmp4.iconContainerStyle;
      cResult[9] = tmp4.iconStyle;
      cResult[10] = tmp15;
      tmp12 = tmp15;
    }
    const fn = function l() {
      const result = GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(guild, { channel });
    };
    cResult[0] = channel;
    cResult[1] = guild;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    return null;
  }
}) : ((isLive) => {
  ({ guild: require, channel } = isLive);
  const tmp = closure_4();
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canCreateGuildEvent) {
    const obj3 = {
      style: tmp.actionBarCTAContainer,
      onPress() {
          const result = GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(closure_1_0, { channel });
        },
      iconSource: channel(9859),
      iconStyle: null,
      iconContainerStyle: null,
      completed: null,
      title: null,
      subtitle: null
    };
    ({ iconStyle: obj2.iconStyle, iconContainerStyle: obj2.iconContainerStyle } = tmp);
    obj3.completed = isLive.isLive;
    const intl = tmp2(1119).intl;
    obj3.title = intl.string(tmp2(1119).t["60lJ0C"]);
    const intl2 = tmp2(1119).intl;
    obj3.subtitle = intl2.string(tmp2(1119).t["EYn7/y"]);
    tmp4 = jsx(tmp2(8876).FormCTA, {
      style: tmp.actionBarCTAContainer,
      onPress() {
          const result = GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(closure_1_0, { channel });
        },
      iconSource: channel(9859),
      iconStyle: null,
      iconContainerStyle: null,
      completed: null,
      title: null,
      subtitle: null
    });
  }
  return tmp4;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventPrompts.tsx");

export const ScheduleEventPrompt = tmp3;
export const StartEventPrompt = ReactCompilerGating.isReactCompilerEnabled() ? ((event) => {
  const cResult = event(568).c(18);
  event = event.event;
  const recurrenceId = event.recurrenceId;
  const isLive = event.isLive;
  const tmp4 = closure_4();
  ({ name, scheduled_start_time } = event);
  const obj = event(568);
  if (obj2.useManageResourcePermissions(event.channel).canManageGuildEvent(event)) {
    if (cResult[0] === event) {
      if (cResult[1] === recurrenceId) {
        let tmp6 = cResult[2];
      }
      if (cResult[3] === tmp4.greenIcon) {
        if (cResult[4] === tmp4.iconContainerStyle) {
          let tmp9 = cResult[5];
        }
        if (cResult[6] !== name) {
          const intl = tmp(1119).intl;
          const obj3 = { eventName: name };
          const formatToPlainStringResult = intl.formatToPlainString(tmp(1119).t["1vGXqM"], obj3);
          cResult[6] = name;
          cResult[7] = formatToPlainStringResult;
          let tmp10 = formatToPlainStringResult;
        } else {
          tmp10 = cResult[7];
        }
        if (cResult[8] !== scheduled_start_time) {
          const intl2 = tmp(1119).intl;
          const obj4 = { startTime: tmp(4442).calendarFormat(recurrenceId(4352)(scheduled_start_time)) };
          const formatToPlainStringResult1 = intl2.formatToPlainString(tmp(1119).t.PTebCR, obj4);
          cResult[8] = scheduled_start_time;
          cResult[9] = formatToPlainStringResult1;
          let tmp12 = formatToPlainStringResult1;
          const tmpResult = tmp(4442);
        } else {
          tmp12 = cResult[9];
        }
        if (cResult[10] === tmp6) {
          if (cResult[11] === isLive) {
            if (cResult[12] === tmp4.actionBarCTAContainer) {
              if (cResult[13] === tmp4.iconStyle) {
                if (cResult[14] === tmp9) {
                  if (cResult[15] === tmp10) {
                    if (cResult[16] === tmp12) {
                      let tmp15 = cResult[17];
                    }
                    return tmp15;
                  }
                }
              }
            }
          }
        }
        const obj5 = { style: tmp7, onPress: tmp6, iconSource: recurrenceId(9859), iconStyle: tmp8, iconContainerStyle: tmp9, completed: isLive, title: tmp10, subtitle: tmp12 };
        const tmp18 = jsx(tmp(8876).FormCTA, { style: tmp7, onPress: tmp6, iconSource: recurrenceId(9859), iconStyle: tmp8, iconContainerStyle: tmp9, completed: isLive, title: tmp10, subtitle: tmp12 });
        cResult[10] = tmp6;
        cResult[11] = isLive;
        cResult[12] = tmp4.actionBarCTAContainer;
        cResult[13] = tmp4.iconStyle;
        cResult[14] = tmp9;
        cResult[15] = tmp10;
        cResult[16] = tmp12;
        cResult[17] = tmp18;
        tmp15 = tmp18;
      }
      const items = [, ];
      ({ iconContainerStyle: arr[0], greenIcon: arr[1] } = tmp4);
      cResult[3] = tmp4.greenIcon;
      cResult[4] = tmp4.iconContainerStyle;
      cResult[5] = items;
      tmp9 = items;
    }
    const fn = function l() {
      const result = GuildScheduledEventModalActionCreators.openStartGuildEventModal(event, recurrenceId);
    };
    cResult[0] = event;
    cResult[1] = recurrenceId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    return null;
  }
}) : ((event) => {
  event = event.event;
  const recurrenceId = event.recurrenceId;
  ({ channel, isLive } = event);
  const tmp = closure_4();
  ({ name, scheduled_start_time } = event);
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canManageGuildEvent(event)) {
    const obj2 = {
      style: tmp.actionBarCTAContainer,
      onPress() {
          const result = GuildScheduledEventModalActionCreators.openStartGuildEventModal(event, recurrenceId);
        },
      iconSource: recurrenceId(9859),
      iconStyle: tmp.iconStyle,
      iconContainerStyle: null,
      completed: null,
      title: null,
      subtitle: null
    };
    const items = [, ];
    ({ iconContainerStyle: arr[0], greenIcon: arr[1] } = tmp);
    obj2.iconContainerStyle = items;
    obj2.completed = isLive;
    const intl = tmp2(1119).intl;
    const obj3 = { eventName: name };
    obj2.title = intl.formatToPlainString(tmp2(1119).t["1vGXqM"], obj3);
    const intl2 = tmp2(1119).intl;
    const obj4 = { startTime: tmp2(4442).calendarFormat(recurrenceId(4352)(scheduled_start_time)) };
    obj2.subtitle = intl2.formatToPlainString(tmp2(1119).t.PTebCR, obj4);
    tmp4 = jsx(tmp2(8876).FormCTA, {
      style: tmp.actionBarCTAContainer,
      onPress() {
          const result = GuildScheduledEventModalActionCreators.openStartGuildEventModal(event, recurrenceId);
        },
      iconSource: recurrenceId(9859),
      iconStyle: tmp.iconStyle,
      iconContainerStyle: null,
      completed: null,
      title: null,
      subtitle: null
    });
    const tmp2Result = tmp2(4442);
  }
  return tmp4;
});
