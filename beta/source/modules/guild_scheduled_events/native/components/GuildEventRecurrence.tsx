// Module ID: 9090
// Function ID: 9091
// Name: GuildEventRecurrence
// Dependencies: [19, 17, 2045, 2067, 6946, 21, 4836, 576, 504, 8950, 8952, 8949, 8946, 1115, 5435, 9062, 4832, 8976, 1177, 9091, 2]
// Exports: default

// Module 9090 (GuildEventRecurrence)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ScheduleUtils from "ScheduleUtils" /* 8946 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 8976 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6946 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, eventHeader: { marginStart: 8, flexShrink: 0, flexGrow: 1 }, active: obj2, actions: { alignItems: "center", flexDirection: "row", flexShrink: 0 }, secondarySmallButton: obj3, secondarySmallIcon: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED, borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 0, alignItems: "center", flexDirection: "row", padding: 8, marginLeft: 8, borderRadius: nativeDefault.radii.xs };
obj4 = { tintColor: nativeDefault.colors.TEXT_STRONG };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrence.tsx");

export default function GuildEventRecurrence(recurrenceId) {
  let Icon;
  let intl2;
  let intl3;
  let isActive;
  let items5;
  let items6;
  let obj5;
  let obj9;
  recurrenceId = recurrenceId.recurrenceId;
  const guildEventId = recurrenceId.guildEventId;
  ({ onPress: dependencyMap, isActive } = recurrenceId);
  let stateFromStores1;
  let closure_5;
  let c6;
  let closure_7;
  const tmp = closure_10();
  let tmp2 = recurrenceId;
  const tmp3 = dependencyMap;
  let obj = recurrenceId(504);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(guildEventId));
  let id;
  const tmp5 = guildEventId;
  const tmp6 = guildEventId(8950);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let obj2 = tmp6(recurrenceId, id);
  const items1 = [c6];
  const tmp2Result = tmp2(504);
  stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return getGuild(guild_id);
  });
  const items2 = [closure_5];
  const tmp2Result4 = tmp2(504);
  let stateFromStores2 = tmp2Result4.useStateFromStores(items2, () => {
    let channel_id;
    const getChannel = ChannelStore.getChannel;
    if (stateFromStores != null) {
      channel_id = stateFromStores.channel_id;
    }
    return getChannel(channel_id);
  });
  const useManageResourcePermissions = tmp2(8952).useManageResourcePermissions;
  tmp2(8952);
  if (stateFromStores2 == null) {
    stateFromStores2 = stateFromStores1;
  }
  closure_5 = useManageResourcePermissions(stateFromStores2).canManageGuildEvent(stateFromStores);
  const tmp2Result6 = tmp2(8949);
  const eventScheduleById = tmp2Result6.useEventScheduleById(guildEventId, recurrenceId);
  let toISOStringResult;
  if (eventScheduleById != null) {
    const startTime = eventScheduleById.startTime;
    toISOStringResult = startTime.toISOString();
  }
  c6 = toISOStringResult;
  const items3 = [toISOStringResult];
  const memo = stateFromStores.useMemo(() => {
    let eventTimeData = null;
    if (null != c6) {
      const obj = ScheduleUtils;
      eventTimeData = obj.getEventTimeData(tmp);
    }
    return eventTimeData;
  }, items3);
  if (null == stateFromStores) {
    return null;
  } else {
    if (obj2 == null) {
      obj2 = {};
    }
    const is_canceled = obj2.is_canceled;
    let tmp22Result = undefined !== is_canceled && is_canceled;
    closure_7 = tmp22Result;
    let str2 = "";
    if (tmp22Result) {
      const intl = tmp2(1115).intl;
      const _HermesInternal = HermesInternal;
      str2 = "" + intl.string(tmp2(1115).t.fyBVRm) + ", ";
    }
    let str4 = "";
    const sum = str2 + stateFromStores.name;
    if (null != memo) {
      const _HermesInternal2 = HermesInternal;
      str4 = ", " + memo.startDateTimeString;
    }
    const sum1 = sum + str4;
    const items4 = [tmp.container, ];
    let active;
    if (isActive) {
      active = tmp.active;
    }
    const obj3 = { style: items4, children: items5 };
    items4[1] = active;
    const obj4 = {
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: sum1,
      onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          const tmp2 = closure_7;
          if (!tmp2) {
            if (dependencyMap != null) {
              tmp3(recurrenceId);
            }
          }
        },
      style: tmp.eventHeader,
      children: closure_8(tmp2(9062).GuildEventCardHeader, obj5)
    };
    const PressableOpacity = tmp2(5435).PressableOpacity;
    obj5 = { isActive, event: stateFromStores, showUserCount: false, showCreator: false, recurrenceId };
    items5 = [closure_8(PressableOpacity, obj4), ];
    const obj6 = { style: tmp.actions, children: items6 };
    if (tmp22Result) {
      const obj7 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: intl2.string(tmp2(1115).t.fyBVRm) };
      const Text = tmp2(4832).Text;
      intl2 = tmp2(1115).intl;
      tmp22Result = tmp22(Text, obj7);
    }
    items6 = [tmp22Result, ];
    const obj8 = {
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: "" + intl3.string(tmp2(1115).t.HIgA5a) + ", " + sum1,
      onPress(stopPropagation) {
          if (null != stateFromStores) {
            stopPropagation.stopPropagation();
            if (null != stateFromStores1) {
              const obj = GuildScheduledEventModalActionCreators;
              const result = obj.showGuildEventModeratorActionSheet(tmp, closure_5, recurrenceId);
            }
          }
        },
      style: tmp.secondarySmallButton,
      children: closure_8(Icon, obj9)
    };
    const PressableOpacity2 = tmp2(5435).PressableOpacity;
    intl3 = tmp2(1115).intl;
    const _HermesInternal3 = HermesInternal;
    obj9 = { source: tmp5(9091), size: tmp2(1177).Icon.Sizes.REFRESH_SMALL_16, style: tmp.secondarySmallIcon };
    Icon = tmp2(1177).Icon;
    items6[1] = closure_8(PressableOpacity2, obj8);
    items5[1] = closure_9(stateFromStores1, obj6);
    return closure_9(stateFromStores1, obj3);
  }
};
