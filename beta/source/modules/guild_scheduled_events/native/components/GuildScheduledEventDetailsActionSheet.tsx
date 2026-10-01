// Module ID: 9081
// Function ID: 9082
// Name: GuildScheduledEventDetailsActionSheet
// Dependencies: [32, 19, 17, 2067, 6946, 2051, 21, 4836, 576, 1115, 6583, 6603, 504, 9071, 9082, 8979, 9072, 1613, 9083, 9062, 9084, 6571, 6045, 9086, 9092, 2]
// Exports: default

// Module 9081 (GuildScheduledEventDetailsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9072 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6946 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c10;
let c9;
let metroImportAll;
let obj2;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ EventDetailSections: metroImportAll, MAX_RSVP_USER_DISPLAY_COUNT: c9 } = GuildScheduledEventsConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { segmentedControl: obj2, header: { flexDirection: "column" } };
obj2 = { paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_12 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventDetailsActionSheet.tsx");

export default function GuildScheduledEventDetailsActionSheet(eventId) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c5;
  let c6;
  let c7;
  let closure_3;
  let error;
  let first;
  let items5;
  let length;
  let loading;
  let obj10;
  let obj12;
  let obj8;
  let tmp19;
  let tmp21;
  let tmp23;
  let tmp36Result2;
  let tmp8;
  const f88088 = () => {
    let id;
    const getGuildEventUsers = GuildScheduledEventManagerDefault.getGuildEventUsers;
    GuildScheduledEventManagerDefault;
    if (stateFromStores != null) {
      id = tmp2.id;
    }
    let guild_id;
    if (stateFromStores != null) {
      guild_id = tmp2.guild_id;
    }
    return getGuildEventUsers(id, null, guild_id);
  };
  eventId = eventId.eventId;
  const event = eventId.event;
  const onCloseActionSheet = eventId.onCloseActionSheet;
  let stateFromStores;
  _slicedToArray = undefined;
  react = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  let items4;
  const recurrenceId = eventId.recurrenceId;
  let tmp = closure_12();
  const tmp2 = event;
  let tmp3 = stateFromStores;
  let obj = react;
  const tmp4 = event(stateFromStores[10]);
  const analyticsLocations = tmp4(event(stateFromStores[11]).GUILD_EVENT_MODAL).analyticsLocations;
  let tmp5 = _slicedToArray;
  [first, tmp8] = react.useState(recurrenceId);
  let items = [c7];
  const items1 = [eventId, event];
  const obj2 = eventId(stateFromStores[12]);
  stateFromStores = obj2.useStateFromStores(items, () => {
    let guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(eventId);
    if (guildScheduledEvent == null) {
      guildScheduledEvent = event;
    }
    return guildScheduledEvent;
  }, items1);
  const items2 = [c6];
  let id;
  const obj3 = eventId(stateFromStores[12]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return null != getGuild(guild_id);
  });
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let guild_id;
  const tmp2Result = tmp2(tmp3[13]);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const tmp2ResultResult = tmp2Result(guild_id, id, first);
  _slicedToArray = tmp2ResultResult;
  const tmp16 = tmp2(tmp3[14])(id, first);
  react = tmp16;
  const items3 = [tmp16, tmp2ResultResult];
  const memo = obj.useMemo(() => {
    let num = 0;
    const tmp3 = length.length >= React4 && closure_3 > React4;
    if (tmp3) {
      const _Math = Math;
      num = Math.max(tmp2 - length, 0);
    }
    let tmp5 = arr;
    if (num > 0) {
      tmp5 = arr;
      if (length.length > 0) {
        const items = [];
        const obj = { count: num };
        items[HermesBuiltin.arraySpread(items, length, 0)] = obj;
        tmp5 = items;
      }
    }
    return tmp5;
  }, items3);
  [c5, tmp19] = tmp5(tmp2(tmp3[15])(f88088), 2);
  ({ loading, error } = tmp19);
  tmp5(tmp2(tmp3[15])(f88088), 2);
  [tmp21, c6] = tmp5(obj.useState(0), 2);
  tmp5(obj.useState(0), 2);
  [tmp23, c7] = tmp5(obj.useState(0), 2);
  tmp5(obj.useState(0), 2);
  const bottom = tmp2(tmp3[17])().bottom;
  const callback = obj.useCallback((nativeEvent) => {
    _undefined3(nativeEvent.nativeEvent.layout.height);
  }, []);
  items4 = [];
  items4[0] = items4.EVENT_INFO;
  const callback1 = obj.useCallback(() => {

  }, []);
  if (stateFromStores1) {
    const arr = items4.push(tmp26.RSVP_LIST);
  }
  eventId(tmp3[18]);
  ({
    pageWidth: 0,
    defaultIndex: tmp21,
    onSetActiveIndex(arg0) {
      const tmp = arg0 < items4.length && items4[arg0] === metroImportAll.RSVP_LIST;
      if (tmp) {
        _undefined();
      }
      _undefined2(arg0);
    },
    items: items4.map((item) => {
      let id;
      if (metroImportAll.EVENT_INFO === item) {
        const intl3 = intl4.intl;
        id = intl3.string(intl4.t.iW6Xuo);
      } else if (tmp2.RSVP_LIST === item) {
        const intl2 = intl4.intl;
        const obj = { userCount: tmp };
        id = intl2.formatToPlainString(intl4.t["ZrTT/N"], obj);
      } else {
        const intl = intl4.intl;
        id = intl.string(intl4.t.iW6Xuo);
      }
      return { id, label: id, page: null };
    })
  });
  if (null == stateFromStores) {
    return null;
  } else {
    const obj5 = { style: tmp.header, onLayout: callback1, children: items5 };
    const obj6 = { event: stateFromStores };
    items5 = [closure_10(tmp9(tmp3[19]).GuildEventCardImageHeader, obj6), ];
    let num = 1;
    let tmp36Result = null;
    const tmp34 = closure_11;
    if (items4.length > 1) {
      const obj7 = { style: tmp.segmentedControl, children: closure_10(eventId(tmp3[20]).SegmentedControl, obj8) };
      obj8 = { state: tmp29 };
      tmp36Result = tmp36(tmp35, obj7);
    }
    items5[1] = tmp36Result;
    const obj9 = { value: analyticsLocations, children: closure_10(BottomSheet, obj10) };
    const tmp32 = tmp21 < items4.length ? items4[tmp21] : items4.EVENT_INFO;
    const tmp34Result = tmp34(c5, obj5);
    const AnalyticsLocationProvider = tmp9(tmp3[10]).AnalyticsLocationProvider;
    obj10 = { scrollable: true, startExpanded: true, onDismiss: onCloseActionSheet, header: tmp34Result, children: tmp36Result2 };
    BottomSheet = tmp9(tmp3[21]).BottomSheet;
    if (tmp32 === items4.EVENT_INFO) {
      const obj11 = { children: closure_10(tmp2(tmp3[23]), obj12) };
      const BottomSheetScrollView = tmp9(tmp3[22]).BottomSheetScrollView;
      obj12 = { guildEvent: stateFromStores, safeBottomPadding: bottom, onCloseActionSheet, onLayout: callback, recurrenceId: first, onRecurrencePress: tmp8 };
      tmp36Result2 = tmp36(BottomSheetScrollView, obj11);
    } else {
      const obj13 = { userListItems: memo, guildId: stateFromStores.guild_id, loading, error, contentHeight: tmp23 - bottom, safeBottomPadding: bottom };
      tmp36Result2 = tmp36(tmp2(tmp3[24]), obj13);
    }
    return closure_10(AnalyticsLocationProvider, obj9);
  }
};
