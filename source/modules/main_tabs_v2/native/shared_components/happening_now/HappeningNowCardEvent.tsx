// Module ID: 14950
// Function ID: 113960
// Name: HAPPENING_NOW_CONTENT_HEIGHT
// Dependencies: [31, 27, 1921, 1849, 14183, 653, 33, 4130, 689, 1273, 7873, 566, 14951, 8346, 8356, 675, 8353, 1392, 12199, 14184, 4646, 4126, 1827, 1212, 2]

// Module 14950 (HAPPENING_NOW_CONTENT_HEIGHT)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_4;
let closure_5;
let closure_9;
const require = arg1;
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
const HAPPENING_NOW_CONTENT_HEIGHT = HAPPENING_NOW_PANELS_CONTAINER_PADDING.HAPPENING_NOW_CONTENT_HEIGHT;
({ HappeningNowCardTrackingType: closure_9, HAPPENING_NOW_CARD_HEIGHT: closure_10 } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let obj = { info: { alignSelf: "center", flexShrink: 1, marginLeft: 12, gap: 2 } };
obj = { alignSelf: "center", justifyContent: "center", flexShrink: 1, flexGrow: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, height: HAPPENING_NOW_CONTENT_HEIGHT, gap: 2, marginRight: -4, paddingLeft: 8, paddingRight: 8, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.infoNoImage = obj;
_createForOfIteratorHelperLoose = { borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.sm, alignSelf: "center", width: HAPPENING_NOW_PANELS_CONTAINER_PADDING.HAPPENING_NOW_EVENT_BANNER_WIDTH, height: HAPPENING_NOW_CONTENT_HEIGHT };
obj.decorationImage = _createForOfIteratorHelperLoose;
obj.dottedLineContainer = { flexDirection: "column", gap: 4, position: "absolute", right: 0, top: 0, bottom: 0, overflow: "hidden" };
let obj2 = { width: 2, height: 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, opacity: 0.8 };
obj.shortDottedLineSegment = obj2;
let obj3 = { width: 2, height: 4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, opacity: 0.8 };
obj.dottedLineSegment = obj3;
obj.interestedUsersContainer = { justifyContent: "center", alignItems: "center" };
obj.interestedUsersIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: HAPPENING_NOW_CONTENT_HEIGHT, padding: 6, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.ticketContainer = obj5;
const obj6 = { width: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.XSMALL_20] };
obj.avatarContainer = obj6;
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj4 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
let items = [{ shape: require("SolidCutout").CutoutShape.Circle, x: -8, y: HAPPENING_NOW_CONTENT_HEIGHT / 2 - 8, size: 16 }];
let closure_16 = importAllResult.memo(() => {
  const tmp = callback2();
  const items = [];
  let num = 0;
  if (0 <= HAPPENING_NOW_CONTENT_HEIGHT) {
    do {
      let obj = { style: 0 === num ? tmp.shortDottedLineSegment : tmp.dottedLineSegment };
      let arr = items.push(callback(closure_4, obj, num));
      num = num + 8;
      let tmp3 = HAPPENING_NOW_CONTENT_HEIGHT;
    } while (num <= HAPPENING_NOW_CONTENT_HEIGHT);
  }
  return items;
});
let obj7 = { shape: require("SolidCutout").CutoutShape.Circle, x: -8, y: HAPPENING_NOW_CONTENT_HEIGHT / 2 - 8, size: 16 };
const memoResult = importAllResult.memo((event) => {
  let isLive;
  let panelVariant;
  event = event.event;
  const index = event.index;
  ({ isLive, panelVariant } = event);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let creator_id;
  let tmp = callback2();
  let obj = event(creator_id[11]);
  let items = [_isNativeReflectConstruct];
  creator_id = event.host_id;
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.locale);
  if (null == creator_id) {
    creator_id = event.creator_id;
  }
  let obj1 = event(creator_id[12]);
  if (null != creator_id) {
    const items1 = [creator_id];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const ensureHydratedUsers = obj1.useEnsureHydratedUsers(event.guild_id, items2);
  let obj2 = event(creator_id[11]);
  const items3 = [closure_7];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => outer1_7.getUser(creator_id));
  let nextRecurrenceIdInEvent = null;
  if (null != event) {
    let obj3 = event(creator_id[13]);
    nextRecurrenceIdInEvent = obj3.getNextRecurrenceIdInEvent(event);
  }
  const tmp8 = index(creator_id[14])(event.guild_id, event.id, nextRecurrenceIdInEvent);
  const items4 = [event, index, creator_id];
  let source = null;
  const callback = importAllResult.useCallback(() => {
    let obj = index(creator_id[15]);
    obj = { order: index, guild_id: event.guild_id, type: outer1_9.GUILD_EVENT_CARD };
    let tmp = null;
    if (null != creator_id) {
      const items = [creator_id];
      tmp = items;
    }
    obj.highlighted_user_ids = tmp;
    obj.destination_channel_id = event.channel_id;
    obj.track(outer1_11.ACTIVITY_CARD_CLICKED, obj);
    obj = { eventId: event.id, event };
    const result = event(creator_id[16]).openGuildEventDetails(obj);
  }, items4);
  if (null != event.image) {
    let obj4 = event(creator_id[17]);
    source = obj4.makeSource(index(creator_id[18])(event, 200));
  }
  let obj5 = event(creator_id[13]);
  let startDateTimeString = obj5.getEventTimeData(event.scheduled_start_time).startDateTimeString;
  const items5 = [];
  let num5 = 0;
  if (0 < closure_10) {
    do {
      let tmp14 = callback;
      let tmp15 = closure_4;
      obj = { style: tmp.dottedLineSegment };
      let arr = items5.push(callback(closure_4, obj, num5));
      num5 = num5 + 8;
      let tmp17 = closure_10;
    } while (num5 < closure_10);
  }
  obj = { onPress: callback };
  let str = "stretchy";
  if (event.fullwidth) {
    str = "full";
  }
  obj.width = str;
  obj.panelVariant = panelVariant;
  obj1 = { cutouts: items };
  obj2 = { style: tmp.ticketContainer };
  obj3 = { style: tmp.avatarContainer };
  let tmp24 = null != stateFromStores1;
  const tmp18 = closure_13;
  const tmp19 = index(creator_id[19]);
  if (tmp24) {
    obj4 = { user: stateFromStores1, avatarDecoration: stateFromStores1.avatarDecoration, guildId: event.guild_id, size: event(creator_id[9]).AvatarSizes.XSMALL_20 };
    tmp24 = callback(event(creator_id[9]).Avatar, obj4);
  }
  obj3.children = tmp24;
  const items6 = [callback(closure_4, obj3), ];
  obj5 = { style: tmp.interestedUsersContainer };
  const items7 = [callback(event(creator_id[20]).GroupIcon, { style: tmp.interestedUsersIcon, size: "xxs" }), ];
  let tmp30 = tmp8 > 0;
  if (tmp30) {
    const obj7 = { color: "mobile-text-heading-primary", variant: "text-xs/semibold", children: event(creator_id[22]).humanizeValue(tmp8, stateFromStores) };
    tmp30 = callback(event(creator_id[21]).Text, obj7);
    const obj16 = event(creator_id[22]);
  }
  items7[1] = tmp30;
  obj5.children = items7;
  items6[1] = closure_13(closure_4, obj5);
  obj2.children = items6;
  const items8 = [closure_13(closure_4, obj2), ];
  let tmp34 = null == source;
  if (tmp34) {
    const obj8 = { style: tmp.dottedLineContainer, children: callback(closure_16, {}) };
    tmp34 = callback(closure_4, obj8);
  }
  items8[1] = tmp34;
  obj1.children = items8;
  const items9 = [closure_13(index(creator_id[10]), obj1), , ];
  let tmp38 = null != source;
  if (tmp38) {
    const obj9 = { style: tmp.decorationImage, source, resizeMode: "cover" };
    tmp38 = callback(closure_5, obj9);
  }
  items9[1] = tmp38;
  const obj10 = { style: null == source ? tmp.infoNoImage : tmp.info };
  const obj11 = { lineClamp: 3, noMargin: true, children: event.name };
  const items10 = [callback(event(creator_id[19]).HappeningNowCardHeader, obj11), ];
  const obj12 = {};
  let str3;
  if (isLive) {
    str3 = "text-feedback-positive";
  }
  obj12.color = str3;
  let str4;
  if (isLive) {
    str4 = "text-xs/bold";
  }
  obj12.variant = str4;
  if (isLive) {
    const intl = event(creator_id[23]).intl;
    const _HermesInternal = HermesInternal;
    startDateTimeString = "\u00B7 " + intl.string(event(creator_id[23]).t.dI3q4h).toUpperCase();
    const str5 = intl.string(event(creator_id[23]).t.dI3q4h);
  }
  obj12.children = startDateTimeString;
  items10[1] = callback(event(creator_id[19]).HappeningNowCardSubtitle, obj12);
  obj10.children = items10;
  items9[2] = closure_13(closure_4, obj10);
  obj.children = items9;
  return tmp18(tmp19, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEvent.tsx");

export default memoResult;
