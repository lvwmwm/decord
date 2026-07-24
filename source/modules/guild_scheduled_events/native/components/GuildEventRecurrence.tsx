// Module ID: 8511
// Function ID: 67764
// Name: GuildEventRecurrence
// Dependencies: [31, 27, 1348, 1838, 6758, 33, 4130, 689, 566, 8395, 8446, 8396, 8390, 1212, 4660, 8405, 4126, 8409, 1273, 8512, 2]
// Exports: default

// Module 8511 (GuildEventRecurrence)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, eventHeader: { marginStart: 8, flexShrink: 0, flexGrow: 1 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_SELECTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.active = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.actions = { alignItems: "center", flexDirection: "row", flexShrink: 0 };
let obj1 = { flexShrink: 0, alignItems: "center", flexDirection: "row", padding: 8, marginLeft: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.secondarySmallButton = obj1;
_createForOfIteratorHelperLoose.secondarySmallIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrence.tsx");

export default function GuildEventRecurrence(recurrenceId) {
  let dependencyMap;
  let isActive;
  recurrenceId = recurrenceId.recurrenceId;
  const guildEventId = recurrenceId.guildEventId;
  ({ onPress: dependencyMap, isActive } = recurrenceId);
  let stateFromStores1;
  let _isNativeReflectConstruct;
  let c6;
  let c7;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = recurrenceId(566);
  const items = [c7];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined2.getGuildScheduledEvent(guildEventId));
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  obj = guildEventId(8395)(recurrenceId, id);
  let obj3 = recurrenceId(566);
  const items1 = [c6];
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return _undefined.getGuild(guild_id);
  });
  let obj4 = recurrenceId(566);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let channel_id;
    if (null != stateFromStores) {
      channel_id = stateFromStores.channel_id;
    }
    return channel.getChannel(channel_id);
  });
  let obj5 = recurrenceId(8446);
  if (null != stateFromStores2) {
    stateFromStores1 = stateFromStores2;
  }
  _isNativeReflectConstruct = obj5.useManageResourcePermissions(stateFromStores1).canManageGuildEvent(stateFromStores);
  let obj6 = recurrenceId(8396);
  const eventScheduleById = obj6.useEventScheduleById(guildEventId, recurrenceId);
  let toISOStringResult;
  if (null != eventScheduleById) {
    const startTime = eventScheduleById.startTime;
    toISOStringResult = startTime.toISOString();
  }
  c6 = toISOStringResult;
  const items3 = [toISOStringResult];
  const memo = stateFromStores.useMemo(() => {
    let eventTimeData = null;
    if (null != c6) {
      eventTimeData = recurrenceId(outer1_2[12]).getEventTimeData(c6);
      const obj = recurrenceId(outer1_2[12]);
    }
    return eventTimeData;
  }, items3);
  if (null == stateFromStores) {
    return null;
  } else {
    if (null == obj) {
      obj = {};
    }
    const is_canceled = obj.is_canceled;
    let tmp10 = undefined !== is_canceled && is_canceled;
    c7 = tmp10;
    let str2 = "";
    if (tmp10) {
      const intl = recurrenceId(1212).intl;
      const _HermesInternal = HermesInternal;
      str2 = "" + intl.string(recurrenceId(1212).t.fyBVRm) + ", ";
    }
    let str4 = "";
    const sum = str2 + stateFromStores.name;
    if (null != memo) {
      const _HermesInternal2 = HermesInternal;
      str4 = ", " + memo.startDateTimeString;
    }
    const sum1 = sum + str4;
    obj = {};
    const items4 = [tmp.container, ];
    let active;
    if (isActive) {
      active = tmp.active;
    }
    items4[1] = active;
    obj.style = items4;
    const obj1 = {
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: sum1,
      onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          let tmp2 = c7;
          if (!c7) {
            tmp2 = null == callback;
          }
          if (!tmp2) {
            callback(recurrenceId);
          }
        },
      style: tmp.eventHeader
    };
    const obj2 = { isActive, event: stateFromStores, showUserCount: false, showCreator: false, recurrenceId };
    obj1.children = callback(recurrenceId(8405).GuildEventCardHeader, obj2);
    const items5 = [callback(recurrenceId(4660).PressableOpacity, obj1), ];
    obj3 = { style: tmp.actions };
    if (tmp10) {
      obj4 = { variant: "text-sm/semibold", color: "text-feedback-critical" };
      const intl2 = recurrenceId(1212).intl;
      obj4.children = intl2.string(recurrenceId(1212).t.fyBVRm);
      tmp10 = callback(recurrenceId(4126).Text, obj4);
    }
    const items6 = [tmp10, ];
    obj5 = { accessible: true, accessibilityRole: "button" };
    const intl3 = recurrenceId(1212).intl;
    const _HermesInternal3 = HermesInternal;
    obj5.accessibilityLabel = "" + intl3.string(recurrenceId(1212).t.HIgA5a) + ", " + sum1;
    obj5.onPress = function onPress(stopPropagation) {
      if (null != stateFromStores) {
        stopPropagation.stopPropagation();
        if (null != stateFromStores1) {
          const result = recurrenceId(outer1_2[17]).showGuildEventModeratorActionSheet(stateFromStores, _isNativeReflectConstruct, recurrenceId);
          const obj = recurrenceId(outer1_2[17]);
        }
      }
    };
    obj5.style = tmp.secondarySmallButton;
    obj6 = { source: guildEventId(8512), size: recurrenceId(1273).Icon.Sizes.REFRESH_SMALL_16, style: tmp.secondarySmallIcon };
    obj5.children = callback(recurrenceId(1273).Icon, obj6);
    items6[1] = callback(recurrenceId(4660).PressableOpacity, obj5);
    obj3.children = items6;
    items5[1] = closure_9(stateFromStores1, obj3);
    obj.children = items5;
    return closure_9(stateFromStores1, obj);
  }
  const tmp3 = guildEventId(8395);
};
