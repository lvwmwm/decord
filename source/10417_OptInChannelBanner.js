// Module ID: 10417
// Function ID: 80264
// Name: OptInChannelBanner
// Dependencies: []
// Exports: default

// Module 10417 (OptInChannelBanner)
let StyleSheet;
class OptInChannelBanner {
  constructor(arg0) {
    channel = global.channel;
    arg1 = channel;
    ({ flush, topBorder } = global);
    tmp = closure_14();
    items = [];
    items[0] = channel;
    tmp2 = importDefault(dependencyMap[13])("OptInChannelBanner");
    effect = importAll.useEffect(() => {
      let obj = callback(closure_2[14]);
      obj = {};
      const merged = Object.assign(channel(closure_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(closure_2[15]);
      const merged1 = Object.assign(channel(closure_2[15]).collectChannelAnalyticsMetadata(channel));
      obj["banner_type"] = "channel_opt_in";
      obj.track(constants.CHANNEL_BANNER_VIEWED, obj);
    }, items);
    items1 = [];
    items1[0] = channel;
    obj = {};
    items2 = [, , , ];
    items2[0] = tmp.optInChannelBannerContainer;
    prop = null;
    callback = importAll.useCallback(() => {
      let obj = callback(closure_2[14]);
      obj = {};
      const merged = Object.assign(channel(closure_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(closure_2[15]);
      const merged1 = Object.assign(channel(closure_2[15]).collectChannelAnalyticsMetadata(channel));
      obj["banner_type"] = "channel_opt_in";
      obj["cta_type"] = "add channel";
      obj.track(constants.CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = channel(closure_2[15]);
      obj = { section: constants2.CHANNEL };
      channel(closure_2[16]).setOptInChannel(channel.guild_id, channel.id, true, obj);
    }, items1);
    tmp5 = jsxs;
    tmp6 = View;
    if (!tmp2) {
      prop = tmp.optInChannelBannerLegacyBorder;
    }
    items2[1] = prop;
    topBorder = null;
    if (topBorder) {
      topBorder = tmp.topBorder;
    }
    items2[2] = topBorder;
    prop1 = null;
    if (flush) {
      prop1 = tmp.optInChannelBannerFlush;
    }
    items2[3] = prop1;
    obj.style = items2;
    obj = { style: tmp.optInChannelBannerText };
    intl = arg1(dependencyMap[18]).intl;
    obj.children = intl.string(arg1(dependencyMap[18]).t.iOWmmB);
    items3 = [, ];
    items3[0] = jsx(arg1(dependencyMap[17]).Text, obj);
    obj1 = { style: tmp.optInChannelBannerButtonContainer };
    obj2 = {};
    merged = Object.assign(global.ctaProps);
    obj2["onPress"] = callback;
    obj2["size"] = "sm";
    intl2 = arg1(dependencyMap[18]).intl;
    obj2["text"] = intl2.string(arg1(dependencyMap[18]).t.TD/+zP);
    obj1.children = jsx(arg1(dependencyMap[19]).Button, obj2);
    items3[1] = jsx(View, obj1);
    obj.children = items3;
    return tmp5(tmp6, obj);
  }
}
function ArchivedLockedThreadChatBanner(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback3();
  const items = [channel];
  const effect = React.useEffect(() => {
    let obj = callback(closure_2[14]);
    obj = {};
    const merged = Object.assign(channel(closure_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
    const obj3 = channel(closure_2[15]);
    const merged1 = Object.assign(channel(closure_2[15]).collectChannelAnalyticsMetadata(channel));
    obj["banner_type"] = "thread";
    obj.track(constants.CHANNEL_BANNER_VIEWED, obj);
  }, items);
  let obj = arg1(dependencyMap[20]);
  let canUnarchiveThread = obj.useCanUnarchiveThread(channel);
  obj = { style: tmp.threadBannerContainer };
  obj = { style: tmp.threadBannerTitle };
  const intl = arg1(dependencyMap[18]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[18]).t;
  if (isForumPostResult) {
    let stringResult = string(t.833FDn);
  } else {
    stringResult = string(t.rEeodK);
  }
  obj.children = stringResult;
  const items1 = [callback(arg1(dependencyMap[17]).Text, obj), ];
  if (canUnarchiveThread) {
    const obj1 = { style: tmp.threadBannerButton };
    const obj2 = { <string:1522289750>: false, <string:570601313>: null };
    const intl2 = arg1(dependencyMap[18]).intl;
    obj2.text = intl2.string(arg1(dependencyMap[18]).t.0dvvEi);
    obj2.onPress = function onPress() {
      let obj = callback(closure_2[14]);
      obj = {};
      const merged = Object.assign(channel(closure_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(closure_2[15]);
      const merged1 = Object.assign(channel(closure_2[15]).collectChannelAnalyticsMetadata(channel));
      obj["banner_type"] = "thread";
      obj["cta_type"] = "unarchive";
      obj.track(constants.CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = channel(closure_2[15]);
      callback(closure_2[21]).unarchiveThread(channel, false);
    };
    obj1.children = callback(arg1(dependencyMap[19]).Button, obj2);
    canUnarchiveThread = callback(closure_4, obj1);
  }
  items1[1] = canUnarchiveThread;
  obj.children = items1;
  return closure_13(closure_4, obj);
}
function LockedThreadChatBanner(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback3();
  const items = [channel];
  const effect = React.useEffect(() => {
    let obj = callback(closure_2[14]);
    obj = {};
    const merged = Object.assign(channel(closure_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
    const obj3 = channel(closure_2[15]);
    const merged1 = Object.assign(channel(closure_2[15]).collectChannelAnalyticsMetadata(channel));
    obj["banner_type"] = "thread";
    obj.track(constants.CHANNEL_BANNER_VIEWED, obj);
  }, items);
  let obj = arg1(dependencyMap[20]);
  let isThreadModerator = obj.useIsThreadModerator(channel);
  obj = { style: tmp.threadBannerContainer };
  obj = { style: tmp.threadBannerTitle };
  const intl = arg1(dependencyMap[18]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[18]).t;
  if (isForumPostResult) {
    let stringResult = string(t.E7oO8u);
  } else {
    stringResult = string(t.V/JF2N);
  }
  obj.children = stringResult;
  const items1 = [callback(arg1(dependencyMap[17]).Text, obj), ];
  if (isThreadModerator) {
    const obj1 = { style: tmp.threadBannerButton };
    const obj2 = { <string:1522289750>: false, <string:570601313>: null };
    const intl2 = arg1(dependencyMap[18]).intl;
    obj2.text = intl2.string(arg1(dependencyMap[18]).t.zA9d1J);
    obj2.onPress = function onPress() {
      let obj = callback(closure_2[14]);
      obj = {};
      const merged = Object.assign(channel(closure_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(closure_2[15]);
      const merged1 = Object.assign(channel(closure_2[15]).collectChannelAnalyticsMetadata(channel));
      obj["banner_type"] = "thread";
      obj["cta_type"] = "unlock";
      obj.track(constants.CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = channel(closure_2[15]);
      callback(closure_2[21]).unlockThread(channel);
    };
    obj1.children = callback(arg1(dependencyMap[19]).Button, obj2);
    isThreadModerator = callback(closure_4, obj1);
  }
  items1[1] = isThreadModerator;
  obj.children = items1;
  return closure_13(closure_4, obj);
}
function NewMessagesChatBar(channel) {
  let handleScrollToNewMessages;
  let unreadCount;
  channel = channel.channel;
  const arg1 = channel;
  ({ unreadCount, handleScrollToNewMessages } = channel);
  let intl = callback3();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_5];
  let tmp = null;
  if (obj.useStateFromStores(items, () => connected.isConnected(), [])) {
    if (unreadCount <= 0) {
      tmp = null;
    } else {
      let num2 = 18;
      let t = arg1(dependencyMap[18]).t;
      const isEstimatedResult = estimated.isEstimated(channel.id);
      t = { style: intl.newMessageBar };
      obj = { accessibilityRole: "button", style: intl.newMessageBarTextContainer, onPress: handleScrollToNewMessages };
      obj = { INTEGRATION_CREATE: null, ConstraintReasonCode: "flex-start" };
      const intl2 = arg1(dependencyMap[num2]).intl;
      const obj1 = { count: unreadCount, timestamp: channel.oldestUnreadTimestamp };
      obj.children = intl2.format(estimated.isEstimated(channel.id) ? t.wvtbbG : t.BctFH/, obj1);
      handleScrollToNewMessages = callback(arg1(dependencyMap[17]).Text, obj);
      obj.children = handleScrollToNewMessages;
      const items1 = [callback(arg1(dependencyMap[22]).PressableOpacity, obj), ];
      const obj2 = { style: intl.newMessageBarCloseButton, accessibilityRole: "button" };
      intl = arg1(dependencyMap[num2]).intl;
      obj2.accessibilityLabel = intl.string(arg1(dependencyMap[num2]).t.e6RscS);
      obj2.onPress = function onPress() {
        let obj = channel(closure_2[23]);
        obj = { section: constants3.NEW_MESSAGES_BANNER, object: constants2.MARK_CHANNEL_AS_READ_BUTTON, objectType: constants.ACK_MANUAL };
        return obj.ack(channel.id, obj);
      };
      num2 = callback;
      const obj3 = { size: "sm", color: importDefault(dependencyMap[8]).colors.WHITE };
      obj2.children = callback(arg1(dependencyMap[24]).XSmallBoldIcon, obj3);
      items1[1] = callback(arg1(dependencyMap[22]).PressableOpacity, obj2);
      t.children = items1;
      callback2(closure_4, t);
      const tmp7 = estimated.isEstimated(channel.id) ? t.wvtbbG : t.BctFH/;
    }
  }
  return tmp;
}
let closure_3 = importAll(dependencyMap[0]);
({ StyleSheet, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const ChatOverlays = arg1(dependencyMap[4]).ChatOverlays;
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: closure_9, AnalyticEvents: closure_10, AnalyticsSections: closure_11 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { 0: null, 9223372036854775807: null, 0: null, 0: null, -9223372036854775808: null, -121871127848: null, 9223372036854775807: null, 9223372036854775807: null, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
obj.threadBannerContainer = obj;
obj.threadBannerTitle = { -1593928941: 304752, 1554836306: -1941892863 };
obj.threadBannerButton = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
const tmp4 = arg1(dependencyMap[6]);
obj.newMessageBar = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND };
obj.newMessageBarTextContainer = { -1035800735: null, "Bool(true)": null, "Bool(true)": null };
obj.newMessageBarCloseButton = { paddingHorizontal: 12 };
const obj2 = { 0: true, 9223372036854775807: true, 0: 100, 9223372036854775807: 67, 9223372036854775807: "contain", 9223372036854775807: 0, -9223372036854775808: true, 0: true, backgroundColor: importDefault(dependencyMap[8]).colors.CHAT_BANNER_BG, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: importDefault(dependencyMap[8]).colors.CHAT_BORDER };
obj.optInChannelBannerContainer = obj2;
const obj1 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND };
obj.optInChannelBannerLegacyBorder = { borderBottomWidth: 1, borderBottomColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
obj.optInChannelBannerFlush = { backgroundColor: "transparent" };
const obj3 = { borderBottomWidth: 1, borderBottomColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
obj.topBorder = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: importDefault(dependencyMap[8]).colors.CHAT_BORDER };
obj.optInChannelBannerText = { flex: 1 };
obj.optInChannelBannerButtonContainer = {};
let closure_14 = obj.createStyles(obj);
const obj4 = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: importDefault(dependencyMap[8]).colors.CHAT_BORDER };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/messages/native/ChatBanner.tsx");

export default function ChatBanner(channel) {
  let oldestUnreadTimestamp;
  let unreadCount;
  channel = channel.channel;
  const arg1 = channel;
  let obj = importDefault(dependencyMap[10])();
  let obj1 = arg1(dependencyMap[11]);
  const items = [closure_6];
  const items1 = [channel.id];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => {
    let oldestUnreadTimestamp = store.getOldestUnreadTimestamp(channel.id);
    const obj = { unreadCount: store.getUnreadCount(channel.id) };
    if (0 === oldestUnreadTimestamp) {
      oldestUnreadTimestamp = callback(closure_2[12]).extractTimestamp(channel.id);
      const obj2 = callback(closure_2[12]);
    }
    obj.oldestUnreadTimestamp = oldestUnreadTimestamp;
    return obj;
  }, items1);
  ({ unreadCount, oldestUnreadTimestamp } = stateFromStoresObject);
  if (channel.isArchivedLockedThread()) {
    obj = { channel };
    let tmp4 = callback(ArchivedLockedThreadChatBanner, obj);
  } else if (channel.isLockedThread()) {
    obj = { channel };
    tmp4 = callback(LockedThreadChatBanner, obj);
  } else {
    if (unreadCount > 0) {
      if (obj.includes(ChatOverlays.NEW_MESSAGES)) {
        obj1 = { unreadCount, oldestUnreadTimestamp, channel, handleScrollToNewMessages: channel.handleScrollToNewMessages };
        tmp4 = callback(NewMessagesChatBar, obj1);
      }
    }
    tmp4 = null;
    if (tmp) {
      tmp4 = null;
      if (obj.includes(ChatOverlays.OPT_IN_CHANNEL)) {
        const obj2 = { channel };
        tmp4 = callback(OptInChannelBanner, obj2);
      }
    }
  }
  return tmp4;
};
export { OptInChannelBanner };
