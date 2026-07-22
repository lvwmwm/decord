// Module ID: 15128
// Function ID: 114141
// Name: ICYMIGuildEventRow
// Dependencies: []
// Exports: default

// Module 15128 (ICYMIGuildEventRow)
function ICYMIGuildEventRow(event) {
  let channel;
  let guild;
  event = event.event;
  const arg1 = event;
  ({ channel, guild } = event);
  const importDefault = guild;
  let React;
  const tmp = callback5();
  const tmp2 = importDefault(dependencyMap[8])(event, null);
  const tmp3 = callback2(event);
  const dependencyMap = tmp3;
  let toISOStringResult;
  if (null != tmp2) {
    const startTime = tmp2.startTime;
    toISOStringResult = startTime.toISOString();
  }
  React = toISOStringResult;
  const items = [toISOStringResult, tmp3];
  const tmp5 = importDefault(dependencyMap[11])(channel);
  let obj = arg1(dependencyMap[12]);
  let locationFromEvent = obj.getLocationFromEvent(event);
  if (null != tmp5) {
    locationFromEvent = tmp5;
  }
  let obj1 = arg1(dependencyMap[13]);
  const eventLocationIconSource = obj1.getEventLocationIconSource(event, channel, true);
  let obj2 = arg1(dependencyMap[13]);
  const eventLocationIconComponent = obj2.getEventLocationIconComponent(event, channel, true);
  let obj3 = arg1(dependencyMap[10]);
  const items1 = [event];
  const nextRecurrenceIdInEvent = obj3.getNextRecurrenceIdInEvent(event);
  const items2 = [guild.id, event.id];
  const callback = React.useCallback(() => {
    let obj = guild(tmp3[14]);
    obj.itemInteracted(event.id, "guild_event", "press_event");
    obj = { itemId: event.id, itemType: "guild_event", actionParameters: { "Bool(false)": true, "Bool(false)": "/assets/modules/guild_role_subscriptions/native/images", "Bool(false)": 84.5, "Bool(false)": 90.5 } };
    guild(tmp3[14]).feedItemActioned(obj);
    const obj2 = guild(tmp3[14]);
    obj = { eventId: event.id, event };
    const result = event(tmp3[15]).openGuildEventDetails(obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    let obj = guild(tmp3[14]);
    obj.itemInteracted(event.id, "guild_event", "press_event");
    obj = { itemId: event.id, itemType: "guild_event", actionParameters: { "Bool(false)": "Text", "Bool(false)": "keys", "Bool(false)": "HTTP", "Bool(false)": "r" } };
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
  const tmp12 = importDefault(dependencyMap[17]);
  obj = {};
  const tmp12Result = importDefault(dependencyMap[17])(guild_id, id, nextRecurrenceIdInEvent);
  const tmp16 = callback3;
  const intl = arg1(dependencyMap[9]).intl;
  obj.actionLabel = intl.string(arg1(dependencyMap[9]).t.6pFsLQ);
  obj.id = event.id;
  obj.interactionType = "guild_event";
  let id1;
  if (null != channel) {
    id1 = channel.id;
  }
  obj.channelId = id1;
  obj.guildId = guild.id;
  let obj5 = importDefault(dependencyMap[19]);
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
    if (tmp3) {
      const obj = {};
      const intl = tmp(tmp2[9]).intl;
      obj.startDateTimeString = intl.string(tmp(tmp2[9]).t.TxqPQR);
      let eventTimeData = obj;
    } else {
      eventTimeData = tmp(tmp2[10]).getEventTimeData(toISOStringResult);
      const tmpResult = tmp(tmp2[10]);
    }
    return eventTimeData;
  }, items).startDateTimeString;
  obj1.children = callback3(arg1(dependencyMap[20]).Text, obj2);
  const items3 = [callback3(closure_5, obj1), , , , ];
  obj3 = {};
  if (title) {
    title = tmp.title;
  }
  obj3.style = title;
  obj3.variant = "text-lg/semibold";
  obj3.children = event.name;
  items3[1] = callback3(arg1(dependencyMap[20]).Text, obj3);
  let tmp25 = null != event.description;
  if (tmp25) {
    tmp25 = event.description.length > 0;
  }
  if (tmp25) {
    const obj4 = {};
    let obj11 = arg1(dependencyMap[21]);
    obj5 = { guildId: guild.id };
    obj4.children = obj11.guildEventDetailsParser(event.description, true, obj5);
    tmp25 = callback3(arg1(dependencyMap[20]).Text, obj4);
  }
  items3[2] = tmp25;
  items3[3] = callback3(closure_5, { style: tmp.separator });
  const obj7 = { style: tmp.infoContainer };
  const obj8 = { style: tmp.locationContainer };
  const items4 = [callback3(arg1(dependencyMap[22]).GroupIcon, { size: "xs", style: tmp.eventsChannelIcon }), ];
  const obj10 = {};
  const intl2 = arg1(dependencyMap[9]).intl;
  obj10.children = intl2.format(arg1(dependencyMap[9]).t.+DLsD8, { count: tmp12Result });
  items4[1] = callback3(arg1(dependencyMap[20]).Text, obj10);
  obj8.children = items4;
  const items5 = [callback4(closure_5, obj8), ];
  obj11 = { style: tmp.locationContainer };
  if (null != eventLocationIconComponent) {
    const obj12 = { size: "xs", style: tmp.eventsChannelIcon };
    let tmp33 = callback3(eventLocationIconComponent, obj12);
  } else {
    tmp33 = null != eventLocationIconSource;
    if (tmp33) {
      const obj13 = { source: eventLocationIconSource, size: arg1(dependencyMap[23]).Icon.Sizes.EXTRA_SMALL, style: tmp.eventsChannelIcon, disableColor: true };
      tmp33 = callback3(arg1(dependencyMap[23]).Icon, obj13);
    }
  }
  const items6 = [tmp33, ];
  const obj14 = {};
  let result = null;
  if (null != locationFromEvent) {
    result = arg1(dependencyMap[21]).guildEventDetailsParser(locationFromEvent, true);
    const obj23 = arg1(dependencyMap[21]);
  }
  obj14.children = result;
  items6[1] = callback3(arg1(dependencyMap[20]).Text, obj14);
  obj11.children = items6;
  items5[1] = callback4(closure_5, obj11);
  obj7.children = items5;
  items3[4] = callback4(closure_5, obj7);
  obj.children = items3;
  obj.children = callback4(closure_4, obj);
  return tmp16(importDefault(dependencyMap[18]), obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ Pressable: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ isGuildEventEnded: closure_6, isGuildScheduledEventActive: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[2]);
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
let closure_13 = arg1(dependencyMap[6]).createICYMIStyles((margin) => {
  let obj = { container: obj };
  obj = { marginHorizontal: margin.margin, marginBottom: margin.margin, marginLeft: margin.margin + margin.inset };
  obj = { marginTop: importDefault(dependencyMap[7]).space.PX_12 };
  obj.card = obj;
  obj.title = { marginBottom: importDefault(dependencyMap[7]).space.PX_4 };
  const obj1 = { marginBottom: importDefault(dependencyMap[7]).space.PX_4 };
  obj.timeAndUserPillContainer = { marginBottom: importDefault(dependencyMap[7]).space.PX_8 };
  const obj3 = { hideWhenScrolling: false, autoCapitalize: false, backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE, marginVertical: importDefault(dependencyMap[7]).space.PX_12 };
  obj.separator = obj3;
  const obj2 = { marginBottom: importDefault(dependencyMap[7]).space.PX_8 };
  obj.eventsChannelIcon = { tintColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT };
  const obj4 = { tintColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT };
  obj.infoContainer = { gap: importDefault(dependencyMap[7]).space.PX_4 };
  const obj6 = { width: true, marginHorizontal: true, gap: importDefault(dependencyMap[7]).space.PX_8 };
  obj.locationContainer = obj6;
  return obj;
});
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/icymi/native/ICYMIGuildEventRow.tsx");

export default function ICYMIGuildEventRowWrapper(eventId) {
  const arg1 = eventId.eventId;
  let obj = arg1(dependencyMap[24]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => guildScheduledEvent.getGuildScheduledEvent(eventId));
  const importDefault = stateFromStores;
  const items1 = [closure_10];
  const stateFromStores1 = arg1(dependencyMap[24]).useStateFromStores(items1, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return guild.getGuild(guild_id);
  });
  arg1(dependencyMap[24]);
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
