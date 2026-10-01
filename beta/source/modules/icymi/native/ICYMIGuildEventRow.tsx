// Module ID: 16155
// Function ID: 16156
// Name: ICYMIGuildEventRow
// Dependencies: [19, 17, 6946, 2045, 2067, 21, 16091, 576, 8949, 1115, 8946, 4989, 8983, 9059, 7799, 9080, 6760, 9071, 16132, 11, 4832, 9061, 5403, 1177, 504, 2]
// Exports: default

// Module 16155 (ICYMIGuildEventRow)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import transitionToGuild from "transitionToGuild" /* 6760 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7799 */;
import ScheduleUtils from "ScheduleUtils" /* 8946 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 9080 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 6946 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16091 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function ICYMIGuildEventRow(event) {
  let Text;
  let c3;
  let channel;
  let closure_2;
  let guild;
  let id1;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj10;
  let obj6;
  let str;
  let tmp19Result2;
  let tmp23;
  let tmp2Result4;
  let tmp8Result;
  event = event.event;
  ({ channel, guild } = event);
  react = undefined;
  const tmp = closure_13();
  const tmp4 = guild(8949)(event, null);
  const tmp5 = closure_7(event);
  dependencyMap = tmp5;
  let toISOStringResult;
  if (tmp4 != null) {
    const startTime = tmp4.startTime;
    toISOStringResult = startTime.toISOString();
  }
  react = toISOStringResult;
  const items = [toISOStringResult, tmp5];
  const startDateTimeString = react.useMemo(() => {
    let eventTimeData;
    let intl;
    if (closure_2) {
      const obj = { startDateTimeString: intl.string(intl3.t.TxqPQR) };
      intl = tmp(1115).intl;
      eventTimeData = obj;
    } else {
      const tmpResult = ScheduleUtils;
      eventTimeData = tmpResult.getEventTimeData(c3);
    }
    return eventTimeData;
  }, items).startDateTimeString;
  const tmp7 = guild(4989)(channel);
  let obj = event(8983);
  const locationFromEvent = obj.getLocationFromEvent(event);
  let obj2 = event(9059);
  const eventLocationIconSource = obj2.getEventLocationIconSource(event, channel, true);
  let obj3 = event(9059);
  const eventLocationIconComponent = obj3.getEventLocationIconComponent(event, channel, true);
  let obj4 = event(8946);
  const items1 = [event];
  const nextRecurrenceIdInEvent = obj4.getNextRecurrenceIdInEvent(event);
  const items2 = [guild.id, event.id];
  const callback = react.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(event.id, "guild_event", "press_event");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
    obj2.feedItemActioned(obj3);
    const obj4 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
    const obj5 = { eventId: event.id, event };
    const result = obj4.openGuildEventDetails(obj5);
  }, items1);
  const callback1 = react.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(event.id, "guild_event", "press_event");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
    obj2.feedItemActioned(obj3);
    const obj4 = transitionToGuild;
    obj4.transitionToGuild(guild.id);
  }, items2);
  let title = null != event.description && event.description.length > 0;
  let guild_id;
  const tmp2Result = guild(9071);
  if (event != null) {
    guild_id = event.guild_id;
  }
  let id;
  if (event != null) {
    id = event.id;
  }
  let obj5 = { actionLabel: intl.string(event(1115).t["6pFsLQ"]), id: event.id, interactionType: "guild_event", channelId: id1, guildId: guild.id, timestamp: tmp2Result4.extractTimestamp(event.id), onHeaderPress: callback1, onHeaderLongPress: callback1, children: closure_12(tmp23, obj6) };
  const tmp2ResultResult = tmp2Result(guild_id, id, nextRecurrenceIdInEvent);
  const tmp2Result3 = guild(16132);
  intl = tmp8(1115).intl;
  id1 = undefined;
  if (channel != null) {
    id1 = channel.id;
  }
  obj6 = { onPress: callback, style: tmp.container, children: items3 };
  tmp2Result4 = guild(11);
  const obj7 = { style: tmp.timeAndUserPillContainer, children: closure_11(Text, { variant: "text-sm/semibold", color: str, children: startDateTimeString }) };
  str = "text-brand";
  Text = tmp8(4832).Text;
  tmp23 = closure_4;
  if (tmp5) {
    str = "status-positive";
  }
  items3 = [closure_11(closure_5, obj7), , , , ];
  const Text2 = tmp8(4832).Text;
  if (title) {
    title = tmp.title;
  }
  const obj8 = { style: title, variant: "text-lg/semibold", children: event.name };
  items3[1] = closure_11(Text2, obj8);
  let tmp19Result = null != event.description && event.description.length > 0;
  if (tmp19Result) {
    const obj9 = { variant: "text-md/normal", color: "text-subtle", lineClamp: 5, children: tmp8Result.guildEventDetailsParser(event.description, true, obj10) };
    const Text3 = tmp8(4832).Text;
    obj10 = { guildId: guild.id };
    tmp8Result = event(9061);
    tmp19Result = tmp19(Text3, obj9);
  }
  items3[2] = tmp19Result;
  const obj11 = { style: tmp.separator };
  items3[3] = closure_11(closure_5, obj11);
  const obj13 = { style: tmp.locationContainer, children: items4 };
  items4 = [, ];
  const obj12 = { style: tmp.infoContainer, children: items5 };
  const obj14 = { size: "xs", style: tmp.eventsChannelIcon };
  items4[0] = closure_11(event(5403).GroupIcon, obj14);
  const obj15 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: intl2.format(event(1115).t["+DLsD8"], { count: tmp2ResultResult }) };
  const Text4 = tmp8(4832).Text;
  intl2 = tmp8(1115).intl;
  items4[1] = closure_11(Text4, obj15);
  items5 = [closure_12(closure_5, obj13), ];
  const obj16 = { style: tmp.locationContainer, children: items6 };
  if (null != eventLocationIconComponent) {
    const obj17 = { size: "xs", style: tmp.eventsChannelIcon };
    tmp19Result2 = tmp19(eventLocationIconComponent, obj17);
  } else {
    tmp19Result2 = null != eventLocationIconSource;
    if (tmp19Result2) {
      const obj18 = { source: eventLocationIconSource, size: event(1177).Icon.Sizes.EXTRA_SMALL, style: tmp.eventsChannelIcon, disableColor: true };
      const Icon = tmp8(1177).Icon;
      tmp19Result2 = tmp19(Icon, obj18);
    }
  }
  items6 = [tmp19Result2, ];
  let tmp27 = tmp7;
  const Text5 = tmp8(4832).Text;
  if (tmp7 == null) {
    let result = null;
    if (null != locationFromEvent) {
      const tmp8Result2 = event(9061);
      result = tmp8Result2.guildEventLocationParser(locationFromEvent, true);
    }
    tmp27 = result;
  }
  items6[1] = closure_11(Text5, { lineClamp: 2, variant: "text-xs/normal", color: "text-muted", children: tmp27 });
  items5[1] = closure_12(closure_5, obj16);
  items3[4] = closure_12(closure_5, obj12);
  return closure_11(tmp2Result3, obj5);
}
let react = react_mod;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
({ isGuildEventEnded: metroRequire, isGuildScheduledEventActive: metroImportDefault } = GuildScheduledEventStore);
GuildScheduledEventStore = GuildScheduledEventStore_mod;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  const obj = { container: { marginHorizontal: marginHorizontal.margin, marginBottom: marginHorizontal.margin, marginLeft: marginHorizontal.margin + marginHorizontal.inset }, card: { marginTop: nativeDefault.space.PX_12 }, title: { marginBottom: nativeDefault.space.PX_4 }, timeAndUserPillContainer: { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_8, justifyContent: "space-between" }, separator: size, eventsChannelIcon: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, infoContainer: { gap: nativeDefault.space.PX_4 }, locationContainer: { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 } };
  ({ marginTop: nativeDefault.space.PX_12 });
  ({ marginBottom: nativeDefault.space.PX_4 });
  ({ flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_8, justifyContent: "space-between" });
  size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: nativeDefault.space.PX_12 };
  ({ tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
  ({ gap: nativeDefault.space.PX_4 });
  ({ alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 });
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIGuildEventRow.tsx");

export default function ICYMIGuildEventRowWrapper(eventId) {
  eventId = eventId.eventId;
  const items = [GuildScheduledEventStore];
  const obj = eventId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(eventId));
  const items1 = [GuildStore];
  const obj2 = eventId(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return getGuild(guild_id);
  });
  eventId(504);
  [][0] = ChannelStore;
  let tmp5 = null;
  if (null != stateFromStores) {
    tmp5 = null;
    if (null != stateFromStores1) {
      tmp5 = null;
      if (!closure_6(stateFromStores)) {
        const obj3 = { event: stateFromStores, channel: tmp4, guild: stateFromStores1 };
        tmp5 = closure_11(ICYMIGuildEventRow, obj3);
      }
    }
  }
  return tmp5;
};
