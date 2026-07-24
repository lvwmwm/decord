// Module ID: 8399
// Function ID: 66753
// Name: GuildScheduledEventDetailsActionSheet
// Dependencies: [57, 31, 27, 1838, 6758, 1354, 33, 4130, 689, 1212, 5462, 5482, 566, 8400, 8402, 8403, 8401, 1557, 8404, 8405, 8799, 5187, 5189, 12231, 12232, 2]
// Exports: default

// Module 8399 (GuildScheduledEventDetailsActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import closure_6 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_8;
let closure_9;
const require = arg1;
({ EventDetailSections: closure_8, MAX_RSVP_USER_DISPLAY_COUNT: closure_9 } = GUILD_EVENT_MAX_NAME_LENGTH);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.segmentedControl = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { flexDirection: "column" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventDetailsActionSheet.tsx");

export default function GuildScheduledEventDetailsActionSheet(eventId) {
  let c5;
  let c6;
  let error;
  let loading;
  let tmp14;
  let tmp16;
  eventId = eventId.eventId;
  const event = eventId.event;
  const onCloseActionSheet = eventId.onCloseActionSheet;
  let callback;
  let React;
  c5 = undefined;
  c6 = undefined;
  let _isNativeReflectConstruct;
  let items4;
  let tmp = _createForOfIteratorHelperLoose();
  const tmp3 = callback(React.useState(eventId.recurrenceId), 2);
  const first = tmp3[0];
  let obj = eventId(stateFromStores[12]);
  let items = [_isNativeReflectConstruct];
  const items1 = [eventId, event];
  stateFromStores = obj.useStateFromStores(items, () => {
    guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(eventId);
    if (null == guildScheduledEvent) {
      guildScheduledEvent = event;
    }
    return guildScheduledEvent;
  }, items1);
  let obj1 = eventId(stateFromStores[12]);
  const items2 = [c6];
  let id;
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return null != _undefined3.getGuild(guild_id);
  });
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  let guild_id;
  let tmp2 = event(stateFromStores[10]);
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  const tmp8Result = event(stateFromStores[13])(guild_id, id, first);
  callback = tmp8Result;
  const tmp11 = event(stateFromStores[14])(id, first);
  React = tmp11;
  const items3 = [tmp11, tmp8Result];
  const memo = React.useMemo(() => {
    let tmp2 = length >= outer1_9;
    if (tmp2) {
      tmp2 = tmp > outer1_9;
    }
    let num = 0;
    if (tmp2) {
      const _Math = Math;
      num = Math.max(tmp - length, 0);
    }
    if (num > 0) {
      if (_undefined.length > 0) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(_undefined, 0);
        const obj = { count: num };
        items[arraySpreadResult] = obj;
        const sum = arraySpreadResult + 1;
        let tmp6 = items;
      }
      return tmp6;
    }
    tmp6 = _undefined;
  }, items3);
  const tmp8 = event(stateFromStores[13]);
  [c5, tmp14] = callback(event(stateFromStores[15])(() => {
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
  const tmp13 = callback(event(stateFromStores[15])(() => {
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
  [tmp16, c6] = callback(React.useState(0), 2);
  const tmp17 = callback(React.useState(0), 2);
  _isNativeReflectConstruct = tmp17[1];
  const bottom = event(stateFromStores[17])().bottom;
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
  eventId(stateFromStores[18]);
  obj = {
    pageWidth: 0,
    defaultIndex: tmp16,
    onSetActiveIndex(arg0) {
      let tmp = arg0 < items4.length;
      if (tmp) {
        tmp = items4[arg0] === items4.RSVP_LIST;
      }
      if (tmp) {
        _undefined2();
      }
      _undefined3(arg0);
    },
    items: items4.map((arg0) => {
      if (items4.EVENT_INFO === arg0) {
        const intl3 = eventId(stateFromStores[9]).intl;
        let stringResult = intl3.string(eventId(stateFromStores[9]).t.iW6Xuo);
      } else if (items4.RSVP_LIST === arg0) {
        const intl2 = eventId(stateFromStores[9]).intl;
        let obj = { userCount: tmp };
        stringResult = intl2.formatToPlainString(eventId(stateFromStores[9]).t["ZrTT/N"], obj);
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
    const items5 = [callback2(eventId(stateFromStores[19]).GuildEventCardImageHeader, obj1), ];
    let tmp28 = null;
    if (items4.length > 1) {
      const obj2 = { style: tmp.segmentedControl };
      const obj3 = { state: tmp23 };
      obj2.children = callback2(eventId(stateFromStores[20]).SegmentedControl, obj3);
      tmp28 = callback2(c5, obj2);
    }
    items5[1] = tmp28;
    obj.children = items5;
    if (tmp16 < items4.length) {
      let EVENT_INFO = items4[tmp16];
    } else {
      EVENT_INFO = items4.EVENT_INFO;
    }
    const obj4 = { value: tmp2(event(stateFromStores[11]).GUILD_EVENT_MODAL).analyticsLocations };
    const obj5 = { scrollable: true, startExpanded: true, onDismiss: onCloseActionSheet, header: closure_11(c5, obj) };
    if (EVENT_INFO === items4.EVENT_INFO) {
      const obj6 = {};
      const obj7 = { guildEvent: stateFromStores, safeBottomPadding: bottom, onCloseActionSheet, onLayout: callback, recurrenceId: first, onRecurrencePress: tmp3[1] };
      obj6.children = callback2(event(stateFromStores[23]), obj7);
      let tmp38 = callback2(eventId(stateFromStores[22]).BottomSheetScrollView, obj6);
    } else {
      const obj8 = { userListItems: memo, guildId: stateFromStores.guild_id, loading, error, contentHeight: tmp17[0] - bottom, safeBottomPadding: bottom };
      tmp38 = callback2(event(stateFromStores[24]), obj8);
    }
    obj5.children = tmp38;
    obj4.children = callback2(eventId(stateFromStores[21]).BottomSheet, obj5);
    return callback2(eventId(stateFromStores[10]).AnalyticsLocationProvider, obj4);
  }
  const tmp15 = callback(React.useState(0), 2);
};
