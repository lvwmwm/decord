// Module ID: 15290
// Function ID: 116632
// Name: ICYMIGuildEventRow
// Dependencies: [31, 27, 6758, 1348, 1838, 33, 15226, 689, 8396, 1212, 8390, 4320, 8393, 8493, 8365, 8397, 5737, 8400, 15267, 21, 4126, 8495, 4646, 1273, 566, 2]
// Exports: default

// Module 15290 (ICYMIGuildEventRow)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import createICYMIStyles from "createICYMIStyles";

let closure_11;
let closure_12;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function ICYMIGuildEventRow(event) {
  let channel;
  let guild;
  event = event.event;
  ({ channel, guild } = event);
  let React;
  const tmp = callback5();
  const tmp2 = guild(8396)(event, null);
  const tmp3 = callback2(event);
  const dependencyMap = tmp3;
  let toISOStringResult;
  if (null != tmp2) {
    const startTime = tmp2.startTime;
    toISOStringResult = startTime.toISOString();
  }
  React = toISOStringResult;
  const items = [toISOStringResult, tmp3];
  const tmp5 = guild(4320)(channel);
  let obj = event(8393);
  let locationFromEvent = obj.getLocationFromEvent(event);
  if (null != tmp5) {
    locationFromEvent = tmp5;
  }
  let obj1 = event(8493);
  const eventLocationIconSource = obj1.getEventLocationIconSource(event, channel, true);
  let obj2 = event(8493);
  const eventLocationIconComponent = obj2.getEventLocationIconComponent(event, channel, true);
  let obj3 = event(8390);
  const items1 = [event];
  const nextRecurrenceIdInEvent = obj3.getNextRecurrenceIdInEvent(event);
  const items2 = [guild.id, event.id];
  const callback = React.useCallback(() => {
    let obj = guild(tmp3[14]);
    obj.itemInteracted(event.id, "guild_event", "press_event");
    obj = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
    guild(tmp3[14]).feedItemActioned(obj);
    const obj2 = guild(tmp3[14]);
    obj = { eventId: event.id, event };
    const result = event(tmp3[15]).openGuildEventDetails(obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    let obj = guild(tmp3[14]);
    obj.itemInteracted(event.id, "guild_event", "press_event");
    obj = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
    guild(tmp3[14]).feedItemActioned(obj);
    const obj2 = guild(tmp3[14]);
    event(tmp3[16]).transitionToGuild(guild.id);
  }, items2);
  let title = null != event.description;
  if (title) {
    title = event.description.length > 0;
  }
  let guild_id;
  if (null != event) {
    guild_id = event.guild_id;
  }
  let id;
  if (null != event) {
    id = event.id;
  }
  const tmp12 = guild(8400);
  obj = {};
  const tmp12Result = guild(8400)(guild_id, id, nextRecurrenceIdInEvent);
  const tmp16 = callback3;
  let intl = event(1212).intl;
  obj.actionLabel = intl.string(event(1212).t["6pFsLQ"]);
  obj.id = event.id;
  obj.interactionType = "guild_event";
  let id1;
  if (null != channel) {
    id1 = channel.id;
  }
  obj.channelId = id1;
  obj.guildId = guild.id;
  let obj5 = guild(21);
  obj.timestamp = obj5.extractTimestamp(event.id);
  obj.onHeaderPress = callback1;
  obj.onHeaderLongPress = callback1;
  obj = { onPress: callback, style: tmp.container };
  obj1 = { style: tmp.timeAndUserPillContainer };
  obj2 = { variant: "text-sm/semibold" };
  let str = "text-brand";
  if (tmp3) {
    str = "status-positive";
  }
  obj2.color = str;
  obj2.children = React.useMemo(() => {
    if (closure_2) {
      const obj = {};
      const intl = tmp(tmp2[9]).intl;
      obj.startDateTimeString = intl.string(tmp(tmp2[9]).t.TxqPQR);
      let eventTimeData = obj;
    } else {
      eventTimeData = tmp(tmp2[10]).getEventTimeData(c3);
      const tmpResult = tmp(tmp2[10]);
    }
    return eventTimeData;
  }, items).startDateTimeString;
  obj1.children = callback3(event(4126).Text, obj2);
  const items3 = [callback3(closure_5, obj1), , , , ];
  obj3 = {};
  if (title) {
    title = tmp.title;
  }
  obj3.style = title;
  obj3.variant = "text-lg/semibold";
  obj3.children = event.name;
  items3[1] = callback3(event(4126).Text, obj3);
  let tmp25 = null != event.description;
  if (tmp25) {
    tmp25 = event.description.length > 0;
  }
  if (tmp25) {
    const obj4 = { variant: "text-md/normal", color: "text-subtle", lineClamp: 5 };
    let obj11 = event(8495);
    obj5 = { guildId: guild.id };
    obj4.children = obj11.guildEventDetailsParser(event.description, true, obj5);
    tmp25 = callback3(event(4126).Text, obj4);
  }
  items3[2] = tmp25;
  items3[3] = callback3(closure_5, { style: tmp.separator });
  const obj7 = { style: tmp.infoContainer };
  const obj8 = { style: tmp.locationContainer };
  const items4 = [callback3(event(4646).GroupIcon, { size: "xs", style: tmp.eventsChannelIcon }), ];
  const obj10 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted" };
  const intl2 = event(1212).intl;
  obj10.children = intl2.format(event(1212).t["+DLsD8"], { count: tmp12Result });
  items4[1] = callback3(event(4126).Text, obj10);
  obj8.children = items4;
  const items5 = [callback4(closure_5, obj8), ];
  obj11 = { style: tmp.locationContainer };
  if (null != eventLocationIconComponent) {
    const obj12 = { size: "xs", style: tmp.eventsChannelIcon };
    let tmp33 = callback3(eventLocationIconComponent, obj12);
  } else {
    tmp33 = null != eventLocationIconSource;
    if (tmp33) {
      const obj13 = { source: eventLocationIconSource, size: event(1273).Icon.Sizes.EXTRA_SMALL, style: tmp.eventsChannelIcon, disableColor: true };
      tmp33 = callback3(event(1273).Icon, obj13);
    }
  }
  const items6 = [tmp33, ];
  const obj14 = { lineClamp: 2, variant: "text-xs/normal", color: "text-muted" };
  let result = null;
  if (null != locationFromEvent) {
    result = event(8495).guildEventDetailsParser(locationFromEvent, true);
    const obj23 = event(8495);
  }
  obj14.children = result;
  items6[1] = callback3(event(4126).Text, obj14);
  obj11.children = items6;
  items5[1] = callback4(closure_5, obj11);
  obj7.children = items5;
  items3[4] = callback4(closure_5, obj7);
  obj.children = items3;
  obj.children = callback4(closure_4, obj);
  return tmp16(guild(15267), obj);
}
({ Pressable: closure_4, View: closure_5 } = get_ActivityIndicator);
({ isGuildEventEnded: closure_6, isGuildScheduledEventActive: closure_7 } = _isNativeReflectConstruct);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = createICYMIStyles.createICYMIStyles((margin) => {
  obj = { container: obj };
  obj = { marginHorizontal: margin.margin, marginBottom: margin.margin, marginLeft: margin.margin + margin.inset };
  obj = { marginTop: importDefault(689).space.PX_12 };
  obj.card = obj;
  obj.title = { marginBottom: importDefault(689).space.PX_4 };
  const obj2 = { flexDirection: "row", alignItems: "center", marginBottom: importDefault(689).space.PX_8, justifyContent: "space-between" };
  obj.timeAndUserPillContainer = obj2;
  const obj3 = { height: 1, width: "100%", backgroundColor: importDefault(689).colors.BORDER_SUBTLE, marginVertical: importDefault(689).space.PX_12 };
  obj.separator = obj3;
  const obj1 = { marginBottom: importDefault(689).space.PX_4 };
  obj.eventsChannelIcon = { tintColor: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT };
  const obj4 = { tintColor: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT };
  obj.infoContainer = { gap: importDefault(689).space.PX_4 };
  const obj6 = { alignItems: "center", flexDirection: "row", gap: importDefault(689).space.PX_8 };
  obj.locationContainer = obj6;
  return obj;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/icymi/native/ICYMIGuildEventRow.tsx");

export default function ICYMIGuildEventRowWrapper(eventId) {
  eventId = eventId.eventId;
  let obj = eventId(566);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuildScheduledEvent(eventId));
  const items1 = [_createForOfIteratorHelperLoose];
  const stateFromStores1 = eventId(566).useStateFromStores(items1, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return outer1_10.getGuild(guild_id);
  });
  eventId(566);
  [][0] = closure_9;
  let tmp5 = null;
  if (null != stateFromStores) {
    tmp5 = null;
    if (null != stateFromStores1) {
      tmp5 = null;
      if (!callback(stateFromStores)) {
        obj = { event: stateFromStores, channel: tmp4, guild: stateFromStores1 };
        tmp5 = callback3(ICYMIGuildEventRow, obj);
      }
    }
  }
  return tmp5;
};
