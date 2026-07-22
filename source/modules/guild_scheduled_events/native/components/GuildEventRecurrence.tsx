// Module ID: 8461
// Function ID: 67499
// Name: GuildEventRecurrence
// Dependencies: []
// Exports: default

// Module 8461 (GuildEventRecurrence)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { container: { useFramePreviewOverrideStore: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008691694761874, stickerOpaque: -53728521742446590000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, lineHeight: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020451186863600537, youtube_video_id: -139311843875643900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }, eventHeader: {} };
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_BACKGROUND_SELECTED, borderRadius: importDefault(dependencyMap[7]).radii.xs };
obj.active = obj;
obj.actions = { -9223372036854775808: true, 9223372036854775807: true, 0: true };
const obj1 = { "Null": "/assets/images/native/icons", "Null": 24, "Null": 24, "Null": null, "Null": "d7e806908635ad007fa68ad7fb2ccc9f", borderRadius: importDefault(dependencyMap[7]).radii.xs };
obj.secondarySmallButton = obj1;
const tmp2 = arg1(dependencyMap[5]);
obj.secondarySmallIcon = { tintColor: importDefault(dependencyMap[7]).colors.TEXT_STRONG };
let closure_10 = obj.createStyles(obj);
const obj2 = { tintColor: importDefault(dependencyMap[7]).colors.TEXT_STRONG };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrence.tsx");

export default function GuildEventRecurrence(recurrenceId) {
  let isActive;
  recurrenceId = recurrenceId.recurrenceId;
  const arg1 = recurrenceId;
  const guildEventId = recurrenceId.guildEventId;
  const importDefault = guildEventId;
  ({ onPress: closure_2, isActive } = recurrenceId);
  let View;
  let closure_5;
  let closure_6;
  let closure_7;
  const tmp = callback2();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => tmp10.getGuildScheduledEvent(guildEventId));
  const React = stateFromStores;
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  obj = importDefault(dependencyMap[9])(recurrenceId, id);
  let obj3 = arg1(dependencyMap[8]);
  const items1 = [closure_6];
  let stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return toISOStringResult.getGuild(guild_id);
  });
  View = stateFromStores1;
  let obj4 = arg1(dependencyMap[8]);
  const items2 = [closure_5];
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let channel_id;
    if (null != stateFromStores) {
      channel_id = stateFromStores.channel_id;
    }
    return channel.getChannel(channel_id);
  });
  let obj5 = arg1(dependencyMap[10]);
  if (null != stateFromStores2) {
    stateFromStores1 = stateFromStores2;
  }
  closure_5 = obj5.useManageResourcePermissions(stateFromStores1).canManageGuildEvent(stateFromStores);
  let obj6 = arg1(dependencyMap[11]);
  const eventScheduleById = obj6.useEventScheduleById(guildEventId, recurrenceId);
  let toISOStringResult;
  if (null != eventScheduleById) {
    const startTime = eventScheduleById.startTime;
    toISOStringResult = startTime.toISOString();
  }
  closure_6 = toISOStringResult;
  const items3 = [toISOStringResult];
  const memo = React.useMemo(() => {
    let eventTimeData = null;
    if (null != toISOStringResult) {
      eventTimeData = recurrenceId(closure_2[12]).getEventTimeData(toISOStringResult);
      const obj = recurrenceId(closure_2[12]);
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
    closure_7 = tmp10;
    let str2 = "";
    if (tmp10) {
      const intl = arg1(dependencyMap[13]).intl;
      const _HermesInternal = HermesInternal;
      str2 = "" + intl.string(arg1(dependencyMap[13]).t.fyBVRm) + ", ";
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
      marginBottom: null,
      borderWidth: null,
      accessibilityLabel: sum1,
      onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          let tmp2 = tmp10;
          if (!tmp10) {
            tmp2 = null == callback;
          }
          if (!tmp2) {
            callback(recurrenceId);
          }
        },
      style: tmp.eventHeader
    };
    const obj2 = { isActive, event: stateFromStores, showUserCount: false, showCreator: false, recurrenceId };
    obj1.children = callback(arg1(dependencyMap[15]).GuildEventCardHeader, obj2);
    const items5 = [callback(arg1(dependencyMap[14]).PressableOpacity, obj1), ];
    obj3 = { style: tmp.actions };
    if (tmp10) {
      obj4 = {};
      const intl2 = arg1(dependencyMap[13]).intl;
      obj4.children = intl2.string(arg1(dependencyMap[13]).t.fyBVRm);
      tmp10 = callback(arg1(dependencyMap[16]).Text, obj4);
    }
    const items6 = [tmp10, ];
    obj5 = { marginBottom: null, borderWidth: null };
    const intl3 = arg1(dependencyMap[13]).intl;
    const _HermesInternal3 = HermesInternal;
    obj5.accessibilityLabel = "" + intl3.string(arg1(dependencyMap[13]).t.HIgA5a) + ", " + sum1;
    obj5.onPress = function onPress(stopPropagation) {
      if (null != stateFromStores) {
        stopPropagation.stopPropagation();
        if (null != stateFromStores1) {
          const result = recurrenceId(closure_2[17]).showGuildEventModeratorActionSheet(stateFromStores, closure_5, recurrenceId);
          const obj = recurrenceId(closure_2[17]);
        }
      }
    };
    obj5.style = tmp.secondarySmallButton;
    obj6 = { source: importDefault(dependencyMap[19]), size: arg1(dependencyMap[18]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.secondarySmallIcon };
    obj5.children = callback(arg1(dependencyMap[18]).Icon, obj6);
    items6[1] = callback(arg1(dependencyMap[14]).PressableOpacity, obj5);
    obj3.children = items6;
    items5[1] = closure_9(View, obj3);
    obj.children = items5;
    return closure_9(View, obj);
  }
  const tmp3 = importDefault(dependencyMap[9]);
};
