// Module ID: 8653
// Function ID: 8654
// Name: GuildEventRecurrence
// Dependencies: [19, 17, 2064, 2086, 6061, 21, 5091, 587, 558, 576, 504, 8509, 8556, 8510, 8504, 1126, 8518, 8514, 6191, 5087, 1200, 8654, 2]

// Module 8653 (GuildEventRecurrence)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ScheduleUtils from "ScheduleUtils" /* 8504 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 8518 */;
import react from "react" /* 19 */;
import ChannelStore_mod from "ChannelStore" /* 2064 */;
import GuildStore_mod from "GuildStore" /* 2086 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6061 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
let ChannelStore = ChannelStore_mod;
let GuildStore = GuildStore_mod;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, eventHeader: { marginStart: 8, flexShrink: 0, flexGrow: 1 }, active: obj2, actions: { alignItems: "center", flexDirection: "row", flexShrink: 0 }, secondarySmallButton: obj3, secondarySmallIcon: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED, borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 0, alignItems: "center", flexDirection: "row", padding: 8, marginLeft: 8, borderRadius: nativeDefault.radii.xs };
obj4 = { tintColor: nativeDefault.colors.TEXT_STRONG };
let closure_10 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventRecurrence(recurrenceId) {
  let canManageGuildEventResult;
  let closure_6;
  let first;
  let onPress;
  let tmp11;
  let tmp13;
  let tmp16;
  let tmp18;
  let tmp7;
  const tmp = recurrenceId;
  let tmp2 = onPress;
  let obj = recurrenceId(onPress[9]);
  const cResult = obj.c(59);
  recurrenceId = recurrenceId.recurrenceId;
  const guildEventId = recurrenceId.guildEventId;
  onPress = recurrenceId.onPress;
  closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildEventId) {
    class S {
      constructor() {
        return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      }
    }
    cResult[1] = guildEventId;
    cResult[2] = S;
    tmp7 = S;
  } else {
    class S {
      constructor() {
        return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  const tmpResult = tmp(tmp2[10]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmp9 = guildEventId(tmp2[11]);
  if (stateFromStores != null) {
    class S {
      constructor() {
        return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  tmp9(recurrenceId, undefined);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      }
    }
    const items1 = [GuildStore];
    cResult[3] = items1;
    tmp11 = items1;
  } else {
    class S {
      constructor() {
        return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  const tmp12 = cResult[4];
  if (stateFromStores != null) {
    class S {
      constructor() {
        return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  if (tmp12 !== undefined) {
    class S {
      constructor() {
        return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      }
    }
    if (stateFromStores != null) {
      class S {
        constructor() {
          return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
        }
      }
    }
    class R {
      constructor() {
        let guild_id;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        return getGuild(guild_id);
      }
    }
    cResult[4] = tmp14;
    cResult[5] = R;
    tmp13 = R;
  } else {
    class S {
      constructor() {
        return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  const tmpResult4 = tmp(tmp2[10]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp11, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      }
    }
    const items2 = [];
    class R {
      constructor() {
        let guild_id;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        return getGuild(guild_id);
      }
    }
    cResult[6] = items2;
    tmp16 = items2;
  } else {
    class S {
      constructor() {
        return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  const tmp17 = cResult[7];
  if (stateFromStores != null) {
    class S {
      constructor() {
        return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  if (tmp17 !== undefined) {
    class S {
      constructor() {
        return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      }
    }
    if (stateFromStores != null) {
      class S {
        constructor() {
          return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
        }
      }
    }
    class G {
      constructor() {
        let channel_id;
        const getChannel = ChannelStore.getChannel;
        if (stateFromStores != null) {
          channel_id = stateFromStores.channel_id;
        }
        return getChannel(channel_id);
      }
    }
    cResult[7] = tmp19;
    cResult[8] = G;
    tmp18 = G;
  } else {
    class S {
      constructor() {
        return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  const tmpResult5 = tmp(tmp2[10]);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp16, tmp18);
  const useManageResourcePermissions = tmp(tmp2[12]).useManageResourcePermissions;
  tmp(tmp2[12]);
  if (stateFromStores2 == null) {
    class S {
      constructor() {
        return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  const canManageGuildEvent = useManageResourcePermissions(stateFromStores2).canManageGuildEvent;
  if (cResult[9] === canManageGuildEvent) {
    let tmp29;
    class S {
      constructor() {
        return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      }
    }
    ChannelStore = canManageGuildEventResult;
    class G {
      constructor() {
        let channel_id;
        const getChannel = ChannelStore.getChannel;
        if (stateFromStores != null) {
          channel_id = stateFromStores.channel_id;
        }
        return getChannel(channel_id);
      }
    }
    const eventScheduleById = obj5.useEventScheduleById(guildEventId, recurrenceId);
    const tmp24 = cResult[12];
    if (eventScheduleById != null) {
      class S {
        constructor() {
          return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
        }
      }
    }
    if (tmp24 !== undefined) {
      let toISOStringResult;
      class S {
        constructor() {
          return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
        }
      }
      if (eventScheduleById != null) {
        class S {
          constructor() {
            return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
          }
        }
        toISOStringResult = obj6.toISOString();
      }
      class G {
        constructor() {
          let channel_id;
          const getChannel = ChannelStore.getChannel;
          if (stateFromStores != null) {
            channel_id = stateFromStores.channel_id;
          }
          return getChannel(channel_id);
        }
      }
      if (eventScheduleById != null) {
        class S {
          constructor() {
            return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
          }
        }
      }
      cResult[12] = tmp28;
      cResult[13] = toISOStringResult;
    } else {
      class S {
        constructor() {
          return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
        }
      }
    }
    if (cResult[14] !== tmp26) {
      let eventTimeData;
      class S {
        constructor() {
          return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
        }
      }
      if (null != tmp26) {
        class S {
          constructor() {
            return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
          }
        }
        eventTimeData = obj7.getEventTimeData(tmp26);
      }
      class G {
        constructor() {
          let channel_id;
          const getChannel = ChannelStore.getChannel;
          if (stateFromStores != null) {
            channel_id = stateFromStores.channel_id;
          }
          return getChannel(channel_id);
        }
      }
      cResult[14] = tmp26;
      cResult[15] = eventTimeData;
      tmp29 = eventTimeData;
    } else {
      class S {
        constructor() {
          return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
        }
      }
    }
    if (null == stateFromStores) {
      class S {
        constructor() {
          return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
        }
      }
    } else {
      class S {
        constructor() {
          return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
        }
      }
      const is_canceled = tmp31.is_canceled;
      class G {
        constructor() {
          let channel_id;
          const getChannel = ChannelStore.getChannel;
          if (stateFromStores != null) {
            channel_id = stateFromStores.channel_id;
          }
          return getChannel(channel_id);
        }
      }
      GuildStore = tmp32;
      if (cResult[18] !== tmp32) {
        class S {
          constructor() {
            return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
          }
        }
        class G {
          constructor() {
            let channel_id;
            const getChannel = ChannelStore.getChannel;
            if (stateFromStores != null) {
              channel_id = stateFromStores.channel_id;
            }
            return getChannel(channel_id);
          }
        }
        cResult[18] = tmp32;
        cResult[19] = "";
      } else {
        class S {
          constructor() {
            return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
          }
        }
      }
      const sum = tmp33 + stateFromStores.name;
      if (null != tmp29) {
        class S {
          constructor() {
            return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
          }
        }
        class G {
          constructor() {
            let channel_id;
            const getChannel = ChannelStore.getChannel;
            if (stateFromStores != null) {
              channel_id = stateFromStores.channel_id;
            }
            return getChannel(channel_id);
          }
        }
      }
      const sum1 = sum + str3;
      if (cResult[20] === tmp32) {
        class S {
          constructor() {
            return GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
          }
        }
      }
      function handlePress(stopPropagation) {
        stopPropagation.stopPropagation();
        const tmp2 = GuildStore;
        if (!tmp2) {
          if (onPress != null) {
            tmp3(recurrenceId);
          }
        }
      }
      cResult[20] = tmp32;
      cResult[21] = onPress;
      cResult[22] = recurrenceId;
      cResult[23] = handlePress;
    }
  }
  canManageGuildEventResult = canManageGuildEvent(stateFromStores);
  cResult[9] = canManageGuildEvent;
  cResult[10] = stateFromStores;
  cResult[11] = canManageGuildEventResult;
}) : (function GuildEventRecurrence(recurrenceId) {
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
  const tmp6 = guildEventId(8509);
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
  const useManageResourcePermissions = tmp2(8556).useManageResourcePermissions;
  tmp2(8556);
  if (stateFromStores2 == null) {
    stateFromStores2 = stateFromStores1;
  }
  closure_5 = useManageResourcePermissions(stateFromStores2).canManageGuildEvent(stateFromStores);
  const tmp2Result6 = tmp2(8510);
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
      const intl = tmp2(1126).intl;
      const _HermesInternal = HermesInternal;
      str2 = "" + intl.string(tmp2(1126).t.fyBVRm) + ", ";
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
      onPress: function handlePress(stopPropagation) {
          stopPropagation.stopPropagation();
          const tmp2 = closure_7;
          if (!tmp2) {
            if (dependencyMap != null) {
              tmp3(recurrenceId);
            }
          }
        },
      style: tmp.eventHeader,
      children: closure_8(tmp2(8514).GuildEventCardHeader, obj5)
    };
    const PressableOpacity = tmp2(6191).PressableOpacity;
    obj5 = { isActive, event: stateFromStores, showUserCount: false, showCreator: false, recurrenceId };
    items5 = [closure_8(PressableOpacity, obj4), ];
    const obj6 = { style: tmp.actions, children: items6 };
    if (tmp22Result) {
      const obj7 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: intl2.string(tmp2(1126).t.fyBVRm) };
      const Text = tmp2(5087).Text;
      intl2 = tmp2(1126).intl;
      tmp22Result = tmp22(Text, obj7);
    }
    items6 = [tmp22Result, ];
    const obj8 = {
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: "" + intl3.string(tmp2(1126).t.HIgA5a) + ", " + sum1,
      onPress: function handlePressOverflow(stopPropagation) {
          if (null != stateFromStores) {
            stopPropagation.stopPropagation();
            if (null != stateFromStores1) {
              const obj = guild_scheduled_events_GuildScheduledEventModalActionCreators;
              const result = obj.showGuildEventModeratorActionSheet(tmp, closure_5, recurrenceId);
            }
          }
        },
      style: tmp.secondarySmallButton,
      children: closure_8(Icon, obj9)
    };
    const PressableOpacity2 = tmp2(6191).PressableOpacity;
    intl3 = tmp2(1126).intl;
    const _HermesInternal3 = HermesInternal;
    obj9 = { source: tmp5(8654), size: tmp2(1200).Icon.Sizes.REFRESH_SMALL_16, style: tmp.secondarySmallIcon };
    Icon = tmp2(1200).Icon;
    items6[1] = closure_8(PressableOpacity2, obj8);
    items5[1] = closure_9(stateFromStores1, obj6);
    return closure_9(stateFromStores1, obj3);
  }
});
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrence.tsx");

export default tmp4;
