// Module ID: 14834
// Function ID: 111792
// Name: HAPPENING_NOW_CONTENT_HEIGHT
// Dependencies: []

// Module 14834 (HAPPENING_NOW_CONTENT_HEIGHT)
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const tmp3 = arg1(dependencyMap[4]);
const HAPPENING_NOW_CONTENT_HEIGHT = tmp3.HAPPENING_NOW_CONTENT_HEIGHT;
({ HappeningNowCardTrackingType: closure_9, HAPPENING_NOW_CARD_HEIGHT: closure_10 } = tmp3);
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
let obj1 = arg1(dependencyMap[7]);
let obj = { info: {} };
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_MUTED, height: HAPPENING_NOW_CONTENT_HEIGHT, borderTopRightRadius: importDefault(dependencyMap[8]).radii.sm, borderBottomRightRadius: importDefault(dependencyMap[8]).radii.sm };
obj.infoNoImage = obj;
obj1 = { borderTopRightRadius: importDefault(dependencyMap[8]).radii.sm, borderBottomRightRadius: importDefault(dependencyMap[8]).radii.sm, alignSelf: "center", width: tmp3.HAPPENING_NOW_EVENT_BANNER_WIDTH, height: HAPPENING_NOW_CONTENT_HEIGHT };
obj.decorationImage = obj1;
obj.dottedLineContainer = { humanizeValue: -3841, displayTypeFromString: 1340159, render: 655360, lastShownChannelActive: 74711040, unsupportedColor: 134217728, szl: 134217728, EMOJI_SEARCH: 402653184 };
const tmp4 = arg1(dependencyMap[6]);
obj.shortDottedLineSegment = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_STRONG };
const obj2 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_STRONG };
obj.dottedLineSegment = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_STRONG };
obj.interestedUsersContainer = { "Bool(false)": null, "Bool(false)": null };
const obj3 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_STRONG };
obj.interestedUsersIcon = { tintColor: importDefault(dependencyMap[8]).colors.TEXT_SUBTLE };
const obj4 = { tintColor: importDefault(dependencyMap[8]).colors.TEXT_SUBTLE };
obj.ticketContainer = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE, height: HAPPENING_NOW_CONTENT_HEIGHT, borderTopLeftRadius: importDefault(dependencyMap[8]).radii.sm, borderBottomLeftRadius: importDefault(dependencyMap[8]).radii.sm };
const obj6 = { width: arg1(dependencyMap[9]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[9]).AvatarSizes.XSMALL_20] };
obj.avatarContainer = obj6;
let closure_14 = obj1.createStyles(obj);
const obj5 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE, height: HAPPENING_NOW_CONTENT_HEIGHT, borderTopLeftRadius: importDefault(dependencyMap[8]).radii.sm, borderBottomLeftRadius: importDefault(dependencyMap[8]).radii.sm };
const items = [{ shape: arg1(dependencyMap[10]).CutoutShape.Circle, x: -8, y: HAPPENING_NOW_CONTENT_HEIGHT / 2 - 8, size: 16 }];
let closure_16 = importAllResult.memo(() => {
  const tmp = callback2();
  const items = [];
  let num = 0;
  if (0 <= HAPPENING_NOW_CONTENT_HEIGHT) {
    do {
      let obj = { style: 0 === num ? tmp.shortDottedLineSegment : tmp.dottedLineSegment };
      let arr = items.push(closure_12(closure_4, obj, num));
      num = num + 8;
      let tmp3 = closure_8;
    } while (num <= closure_8);
  }
  return items;
});
const obj7 = { shape: arg1(dependencyMap[10]).CutoutShape.Circle, x: -8, y: HAPPENING_NOW_CONTENT_HEIGHT / 2 - 8, size: 16 };
const memoResult = importAllResult.memo((event) => {
  let isLive;
  let panelVariant;
  event = event.event;
  const arg1 = event;
  const index = event.index;
  const importDefault = index;
  ({ isLive, panelVariant } = event);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let dependencyMap;
  const tmp = callback2();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_6];
  let creator_id = event.host_id;
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  if (null == creator_id) {
    creator_id = event.creator_id;
  }
  dependencyMap = creator_id;
  let obj1 = arg1(dependencyMap[12]);
  if (null != creator_id) {
    const items1 = [creator_id];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const ensureHydratedUsers = obj1.useEnsureHydratedUsers(event.guild_id, items2);
  let obj2 = arg1(dependencyMap[11]);
  const items3 = [closure_7];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => user.getUser(creator_id));
  let nextRecurrenceIdInEvent = null;
  if (null != event) {
    let obj3 = arg1(dependencyMap[13]);
    nextRecurrenceIdInEvent = obj3.getNextRecurrenceIdInEvent(event);
  }
  const tmp8 = importDefault(dependencyMap[14])(event.guild_id, event.id, nextRecurrenceIdInEvent);
  const items4 = [event, index, creator_id];
  let source = null;
  const callback = importAllResult.useCallback(() => {
    let obj = index(creator_id[15]);
    obj = { order: index, guild_id: event.guild_id, type: constants.GUILD_EVENT_CARD };
    let tmp = null;
    if (null != creator_id) {
      const items = [creator_id];
      tmp = items;
    }
    obj.highlighted_user_ids = tmp;
    obj.destination_channel_id = event.channel_id;
    obj.track(constants2.ACTIVITY_CARD_CLICKED, obj);
    obj = { eventId: event.id, event };
    const result = event(creator_id[16]).openGuildEventDetails(obj);
  }, items4);
  if (null != event.image) {
    let obj4 = arg1(dependencyMap[17]);
    source = obj4.makeSource(importDefault(dependencyMap[18])(event, 200));
  }
  let obj5 = arg1(dependencyMap[13]);
  let startDateTimeString = obj5.getEventTimeData(event.scheduled_start_time).startDateTimeString;
  const items5 = [];
  let num5 = 0;
  if (0 < closure_10) {
    do {
      let tmp14 = closure_12;
      let tmp15 = closure_4;
      obj = { style: tmp.dottedLineSegment };
      let arr = items5.push(closure_12(closure_4, obj, num5));
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
  const tmp19 = importDefault(dependencyMap[19]);
  if (tmp24) {
    obj4 = { user: stateFromStores1, avatarDecoration: stateFromStores1.avatarDecoration, guildId: event.guild_id, size: arg1(dependencyMap[9]).AvatarSizes.XSMALL_20 };
    tmp24 = callback(arg1(dependencyMap[9]).Avatar, obj4);
  }
  obj3.children = tmp24;
  const items6 = [callback(closure_4, obj3), ];
  obj5 = { style: tmp.interestedUsersContainer };
  const items7 = [callback(arg1(dependencyMap[20]).GroupIcon, { style: tmp.interestedUsersIcon, size: "xxs" }), ];
  let tmp30 = tmp8 > 0;
  if (tmp30) {
    const obj7 = { "Null": "424c540aff53032ef3cdcb5f4766723e", "Null": "ic_rulebook_16px", children: arg1(dependencyMap[22]).humanizeValue(tmp8, stateFromStores) };
    tmp30 = callback(arg1(dependencyMap[21]).Text, obj7);
    const obj16 = arg1(dependencyMap[22]);
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
  const items9 = [closure_13(importDefault(dependencyMap[10]), obj1), , ];
  let tmp38 = null != source;
  if (tmp38) {
    const obj9 = { style: tmp.decorationImage, source, resizeMode: "cover" };
    tmp38 = callback(closure_5, obj9);
  }
  items9[1] = tmp38;
  const obj10 = { style: null == source ? tmp.infoNoImage : tmp.info };
  const obj11 = { 760324726: "100%", 1446733020: 16, children: event.name };
  const items10 = [callback(arg1(dependencyMap[19]).HappeningNowCardHeader, obj11), ];
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
    const intl = arg1(dependencyMap[23]).intl;
    const _HermesInternal = HermesInternal;
    startDateTimeString = "\u00B7 " + intl.string(arg1(dependencyMap[23]).t.dI3q4h).toUpperCase();
    const str5 = intl.string(arg1(dependencyMap[23]).t.dI3q4h);
  }
  obj12.children = startDateTimeString;
  items10[1] = callback(arg1(dependencyMap[19]).HappeningNowCardSubtitle, obj12);
  obj10.children = items10;
  items9[2] = closure_13(closure_4, obj10);
  obj.children = items9;
  return tmp18(tmp19, obj);
});
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEvent.tsx");

export default memoResult;
