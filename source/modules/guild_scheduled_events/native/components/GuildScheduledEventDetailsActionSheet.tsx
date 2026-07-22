// Module ID: 8349
// Function ID: 66488
// Name: GuildScheduledEventDetailsActionSheet
// Dependencies: []
// Exports: default

// Module 8349 (GuildScheduledEventDetailsActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ EventDetailSections: closure_8, MAX_RSVP_USER_DISPLAY_COUNT: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_12 };
obj.segmentedControl = obj;
obj.header = { flexDirection: "column" };
let closure_12 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventDetailsActionSheet.tsx");

export default function GuildScheduledEventDetailsActionSheet(eventId) {
  let error;
  let loading;
  let tmp14;
  let tmp16;
  eventId = eventId.eventId;
  const arg1 = eventId;
  const event = eventId.event;
  const importDefault = event;
  const onCloseActionSheet = eventId.onCloseActionSheet;
  let callback;
  let React;
  let closure_5;
  let closure_6;
  let closure_7;
  let items4;
  const tmp = callback3();
  const tmp3 = callback(React.useState(eventId.recurrenceId), 2);
  const first = tmp3[0];
  let obj = arg1(dependencyMap[12]);
  const items = [closure_7];
  const items1 = [eventId, event];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(eventId);
    if (null == guildScheduledEvent) {
      guildScheduledEvent = event;
    }
    return guildScheduledEvent;
  }, items1);
  const dependencyMap = stateFromStores;
  let obj1 = arg1(dependencyMap[12]);
  const items2 = [closure_6];
  let id;
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return null != guild.getGuild(guild_id);
  });
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  let guild_id;
  const tmp2 = importDefault(dependencyMap[10]);
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  const tmp8Result = importDefault(dependencyMap[13])(guild_id, id, first);
  callback = tmp8Result;
  const tmp11 = importDefault(dependencyMap[14])(id, first);
  React = tmp11;
  const items3 = [tmp11, tmp8Result];
  const memo = React.useMemo(() => {
    let tmp2 = length >= closure_9;
    if (tmp2) {
      tmp2 = tmp > closure_9;
    }
    let num = 0;
    if (tmp2) {
      const _Math = Math;
      num = Math.max(tmp - length, 0);
    }
    if (num > 0) {
      if (tmp11.length > 0) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(tmp11, 0);
        const obj = { count: num };
        items[arraySpreadResult] = obj;
        const sum = arraySpreadResult + 1;
        let tmp6 = items;
      }
      return tmp6;
    }
    tmp6 = tmp11;
  }, items3);
  const tmp8 = importDefault(dependencyMap[13]);
  [closure_5, tmp14] = callback(importDefault(dependencyMap[15])(() => {
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return event(stateFromStores[16]).getGuildEventUsers(id, null, guild_id);
  }), 2);
  ({ loading, error } = tmp14);
  const tmp13 = callback(importDefault(dependencyMap[15])(() => {
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return event(stateFromStores[16]).getGuildEventUsers(id, null, guild_id);
  }), 2);
  [tmp16, closure_6] = callback(React.useState(0), 2);
  const tmp17 = callback(React.useState(0), 2);
  closure_7 = tmp17[1];
  const bottom = importDefault(dependencyMap[17])().bottom;
  callback = React.useCallback((nativeEvent) => {
    guildScheduledEvent(nativeEvent.nativeEvent.layout.height);
  }, []);
  items4 = [];
  items4[0] = items4.EVENT_INFO;
  const callback1 = React.useCallback(() => {

  }, []);
  if (stateFromStores1) {
    items4.push(items4.RSVP_LIST);
  }
  arg1(dependencyMap[18]);
  obj = {
    pageWidth: 0,
    defaultIndex: tmp16,
    onSetActiveIndex(arg0) {
      let tmp = arg0 < items4.length;
      if (tmp) {
        tmp = items4[arg0] === items4.RSVP_LIST;
      }
      if (tmp) {
        _undefined();
      }
      guild(arg0);
    },
    items: items4.map((arg0) => {
      if (items4.EVENT_INFO === arg0) {
        const intl3 = eventId(stateFromStores[9]).intl;
        let stringResult = intl3.string(eventId(stateFromStores[9]).t.iW6Xuo);
      } else if (items4.RSVP_LIST === arg0) {
        const intl2 = eventId(stateFromStores[9]).intl;
        let obj = { userCount: tmp };
        stringResult = intl2.formatToPlainString(eventId(stateFromStores[9]).t.ZrTT/N, obj);
      } else {
        const intl = eventId(stateFromStores[9]).intl;
        stringResult = intl.string(eventId(stateFromStores[9]).t.iW6Xuo);
      }
      obj = { id: stringResult, label: stringResult, page: null };
      return obj;
    })
  };
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { style: tmp.header, onLayout: callback1 };
    obj1 = { event: stateFromStores };
    const items5 = [callback2(arg1(dependencyMap[19]).GuildEventCardImageHeader, obj1), ];
    let tmp28 = null;
    if (items4.length > 1) {
      const obj2 = { style: tmp.segmentedControl };
      const obj3 = { state: tmp23 };
      obj2.children = callback2(arg1(dependencyMap[20]).SegmentedControl, obj3);
      tmp28 = callback2(closure_5, obj2);
    }
    items5[1] = tmp28;
    obj.children = items5;
    if (tmp16 < items4.length) {
      let EVENT_INFO = items4[tmp16];
    } else {
      EVENT_INFO = items4.EVENT_INFO;
    }
    const obj4 = { value: tmp2(importDefault(dependencyMap[11]).GUILD_EVENT_MODAL).analyticsLocations };
    const obj5 = { openDisableCommunication: null, freezeEnabled: null, onDismiss: onCloseActionSheet, header: closure_11(closure_5, obj) };
    if (EVENT_INFO === items4.EVENT_INFO) {
      const obj6 = {};
      const obj7 = { guildEvent: stateFromStores, safeBottomPadding: bottom, onCloseActionSheet, onLayout: callback, recurrenceId: first, onRecurrencePress: tmp3[1] };
      obj6.children = callback2(importDefault(dependencyMap[23]), obj7);
      let tmp38 = callback2(arg1(dependencyMap[22]).BottomSheetScrollView, obj6);
    } else {
      const obj8 = { userListItems: memo, guildId: stateFromStores.guild_id, loading, error, contentHeight: tmp17[0] - bottom, safeBottomPadding: bottom };
      tmp38 = callback2(importDefault(dependencyMap[24]), obj8);
    }
    obj5.children = tmp38;
    obj4.children = callback2(arg1(dependencyMap[21]).BottomSheet, obj5);
    return callback2(arg1(dependencyMap[10]).AnalyticsLocationProvider, obj4);
  }
  const tmp15 = callback(React.useState(0), 2);
};
