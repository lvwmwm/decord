// Module ID: 10463
// Function ID: 80553
// Name: OptInChannelBanner
// Dependencies: [31, 27, 4808, 4142, 10464, 653, 33, 4130, 689, 10465, 10466, 566, 21, 1324, 675, 4324, 5072, 4126, 1212, 4543, 5650, 7006, 4660, 5069, 7749, 2]
// Exports: default

// Module 10463 (OptInChannelBanner)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { ChatOverlays } from "ChatOverlays";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_4;
let closure_8;
let closure_9;
const require = arg1;
class OptInChannelBanner {
  constructor(arg0) {
    channel = global.channel;
    tmp = c14();
    items = [];
    items[0] = channel;
    tmp2 = require("useIsMobileVisualRefreshExperimentEnabled")("OptInChannelBanner");
    effect = result.useEffect(() => {
      let obj = outer1_1(outer1_2[14]);
      obj = {};
      const merged = Object.assign(channel(outer1_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(outer1_2[15]);
      const merged1 = Object.assign(channel(outer1_2[15]).collectChannelAnalyticsMetadata(channel));
      obj["banner_type"] = "channel_opt_in";
      obj.track(outer1_10.CHANNEL_BANNER_VIEWED, obj);
    }, items);
    items1 = [];
    items1[0] = channel;
    obj = {};
    items2 = [, , ];
    items2[0] = tmp.optInChannelBannerContainer;
    prop = null;
    callback = result.useCallback(() => {
      let obj = outer1_1(outer1_2[14]);
      obj = {};
      const merged = Object.assign(channel(outer1_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(outer1_2[15]);
      const merged1 = Object.assign(channel(outer1_2[15]).collectChannelAnalyticsMetadata(channel));
      obj["banner_type"] = "channel_opt_in";
      obj["cta_type"] = "add channel";
      obj.track(outer1_10.CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = channel(outer1_2[15]);
      obj = { section: outer1_11.CHANNEL };
      channel(outer1_2[16]).setOptInChannel(channel.guild_id, channel.id, true, obj);
    }, items1);
    tmp5 = jsxs;
    tmp6 = View;
    if (!tmp2) {
      prop = tmp.optInChannelBannerLegacyBorder;
    }
    items2[1] = prop;
    topBorder = null;
    if (global.topBorder) {
      topBorder = tmp.topBorder;
    }
    items2[2] = topBorder;
    obj.style = items2;
    obj = { lineClamp: 2, style: null, variant: "text-sm/semibold" };
    obj.style = tmp.optInChannelBannerText;
    intl = require("getSystemLocale").intl;
    obj.children = intl.string(require("getSystemLocale").t.iOWmmB);
    items3 = [, ];
    items3[0] = jsx(require("Text").Text, obj);
    obj1 = { style: tmp.optInChannelBannerButtonContainer };
    obj2 = {};
    merged = Object.assign(global.ctaProps);
    obj2["onPress"] = callback;
    obj2["size"] = "sm";
    intl2 = require("getSystemLocale").intl;
    obj2["text"] = intl2.string(require("getSystemLocale").t["TD/+zP"]);
    obj1.children = jsx(require("Button").Button, obj2);
    items3[1] = jsx(View, obj1);
    obj.children = items3;
    return tmp5(tmp6, obj);
  }
}
function ArchivedLockedThreadChatBanner(channel) {
  channel = channel.channel;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [channel];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[14]);
    obj = {};
    const merged = Object.assign(channel(outer1_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
    const obj3 = channel(outer1_2[15]);
    const merged1 = Object.assign(channel(outer1_2[15]).collectChannelAnalyticsMetadata(channel));
    obj["banner_type"] = "thread";
    obj.track(outer1_10.CHANNEL_BANNER_VIEWED, obj);
  }, items);
  let obj = channel(5650);
  let canUnarchiveThread = obj.useCanUnarchiveThread(channel);
  obj = { style: tmp.threadBannerContainer };
  obj = { lineClamp: 4, style: tmp.threadBannerTitle, variant: "text-sm/medium", color: "text-default" };
  const intl = channel(1212).intl;
  const string = intl.string;
  const t = channel(1212).t;
  if (isForumPostResult) {
    let stringResult = string(t["833FDn"]);
  } else {
    stringResult = string(t.rEeodK);
  }
  obj.children = stringResult;
  const items1 = [callback(channel(4126).Text, obj), ];
  if (canUnarchiveThread) {
    const obj1 = { style: tmp.threadBannerButton };
    const obj2 = { variant: "secondary", size: "sm" };
    const intl2 = channel(1212).intl;
    obj2.text = intl2.string(channel(1212).t["0dvvEi"]);
    obj2.onPress = function onPress() {
      let obj = outer1_1(outer1_2[14]);
      obj = {};
      const merged = Object.assign(channel(outer1_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(outer1_2[15]);
      const merged1 = Object.assign(channel(outer1_2[15]).collectChannelAnalyticsMetadata(channel));
      obj["banner_type"] = "thread";
      obj["cta_type"] = "unarchive";
      obj.track(outer1_10.CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = channel(outer1_2[15]);
      outer1_1(outer1_2[21]).unarchiveThread(channel, false);
    };
    obj1.children = callback(channel(4543).Button, obj2);
    canUnarchiveThread = callback(closure_4, obj1);
  }
  items1[1] = canUnarchiveThread;
  obj.children = items1;
  return closure_13(closure_4, obj);
}
function LockedThreadChatBanner(channel) {
  channel = channel.channel;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [channel];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[14]);
    obj = {};
    const merged = Object.assign(channel(outer1_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
    const obj3 = channel(outer1_2[15]);
    const merged1 = Object.assign(channel(outer1_2[15]).collectChannelAnalyticsMetadata(channel));
    obj["banner_type"] = "thread";
    obj.track(outer1_10.CHANNEL_BANNER_VIEWED, obj);
  }, items);
  let obj = channel(5650);
  let isThreadModerator = obj.useIsThreadModerator(channel);
  obj = { style: tmp.threadBannerContainer };
  obj = { lineClamp: 4, style: tmp.threadBannerTitle, variant: "text-sm/medium", color: "text-default" };
  const intl = channel(1212).intl;
  const string = intl.string;
  const t = channel(1212).t;
  if (isForumPostResult) {
    let stringResult = string(t.E7oO8u);
  } else {
    stringResult = string(t["V/JF2N"]);
  }
  obj.children = stringResult;
  const items1 = [callback(channel(4126).Text, obj), ];
  if (isThreadModerator) {
    const obj1 = { style: tmp.threadBannerButton };
    const obj2 = { variant: "secondary", size: "sm" };
    const intl2 = channel(1212).intl;
    obj2.text = intl2.string(channel(1212).t.zA9d1J);
    obj2.onPress = function onPress() {
      let obj = outer1_1(outer1_2[14]);
      obj = {};
      const merged = Object.assign(channel(outer1_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(outer1_2[15]);
      const merged1 = Object.assign(channel(outer1_2[15]).collectChannelAnalyticsMetadata(channel));
      obj["banner_type"] = "thread";
      obj["cta_type"] = "unlock";
      obj.track(outer1_10.CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = channel(outer1_2[15]);
      outer1_1(outer1_2[21]).unlockThread(channel);
    };
    obj1.children = callback(channel(4543).Button, obj2);
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
  ({ unreadCount, handleScrollToNewMessages } = channel);
  let intl = _createForOfIteratorHelperLoose();
  let obj = channel(566);
  const items = [_isNativeReflectConstruct];
  let tmp = null;
  if (obj.useStateFromStores(items, () => outer1_5.isConnected(), [])) {
    if (unreadCount <= 0) {
      tmp = null;
    } else {
      let num2 = 18;
      let t = channel(1212).t;
      const isEstimatedResult = estimated.isEstimated(channel.id);
      t = { style: intl.newMessageBar };
      obj = { accessibilityRole: "button", style: intl.newMessageBarTextContainer, onPress: handleScrollToNewMessages };
      obj = { variant: "text-sm/semibold", color: "text-overlay-light" };
      const intl2 = channel(dependencyMap[num2]).intl;
      const obj1 = { count: unreadCount, timestamp: channel.oldestUnreadTimestamp };
      obj.children = intl2.format(estimated.isEstimated(channel.id) ? t.wvtbbG : t["BctFH/"], obj1);
      handleScrollToNewMessages = callback(channel(4126).Text, obj);
      obj.children = handleScrollToNewMessages;
      const items1 = [callback(channel(4660).PressableOpacity, obj), ];
      const obj2 = { style: intl.newMessageBarCloseButton, accessibilityRole: "button" };
      intl = channel(dependencyMap[num2]).intl;
      obj2.accessibilityLabel = intl.string(channel(dependencyMap[num2]).t.e6RscS);
      obj2.onPress = function onPress() {
        let obj = channel(outer1_2[23]);
        obj = { section: outer1_11.NEW_MESSAGES_BANNER, object: outer1_9.MARK_CHANNEL_AS_READ_BUTTON, objectType: outer1_8.ACK_MANUAL };
        return obj.ack(channel.id, obj);
      };
      num2 = callback;
      const obj3 = { size: "sm", color: importDefault(689).colors.WHITE };
      obj2.children = callback(channel(7749).XSmallBoldIcon, obj3);
      items1[1] = callback(channel(4660).PressableOpacity, obj2);
      t.children = items1;
      callback2(closure_4, t);
      const tmp7 = estimated.isEstimated(channel.id) ? t.wvtbbG : t["BctFH/"];
    }
  }
  return tmp;
}
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: closure_9, AnalyticEvents: closure_10, AnalyticsSections: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignSelf: "stretch", minHeight: 60, flexDirection: "row", paddingHorizontal: 16, paddingVertical: 12, alignItems: "center", flexGrow: 0, zIndex: 100, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.threadBannerContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.threadBannerTitle = { flex: 1, lineHeight: 18 };
_createForOfIteratorHelperLoose.threadBannerButton = { flexGrow: 0, paddingVertical: 7, paddingHorizontal: 16, marginLeft: 16 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, flexDirection: "row", justifyContent: "center", alignItems: "center", overflow: "hidden", zIndex: 100, minHeight: 45 };
_createForOfIteratorHelperLoose.newMessageBar = obj1;
_createForOfIteratorHelperLoose.newMessageBarTextContainer = { flex: 1, paddingLeft: 16, paddingVertical: 10 };
_createForOfIteratorHelperLoose.newMessageBarCloseButton = { paddingHorizontal: 12 };
let obj2 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", overflow: "hidden", padding: 8, paddingLeft: 16, paddingRight: 16, zIndex: 100, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CHAT_BANNER_BG, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.CHAT_BORDER };
_createForOfIteratorHelperLoose.optInChannelBannerContainer = obj2;
_createForOfIteratorHelperLoose.optInChannelBannerLegacyBorder = { borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let obj3 = { borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.topBorder = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: require("_createForOfIteratorHelperLoose").colors.CHAT_BORDER };
_createForOfIteratorHelperLoose.optInChannelBannerText = { flex: 1 };
_createForOfIteratorHelperLoose.optInChannelBannerButtonContainer = { flexShrink: 0, marginLeft: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: require("_createForOfIteratorHelperLoose").colors.CHAT_BORDER };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/ChatBanner.tsx");

export default function ChatBanner(channel) {
  let oldestUnreadTimestamp;
  let unreadCount;
  channel = channel.channel;
  let obj = importDefault(10466)();
  let obj1 = channel(566);
  const items = [closure_6];
  const items1 = [channel.id];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => {
    let oldestUnreadTimestamp = outer1_6.getOldestUnreadTimestamp(channel.id);
    const obj = { unreadCount: outer1_6.getUnreadCount(channel.id) };
    if (0 === oldestUnreadTimestamp) {
      oldestUnreadTimestamp = outer1_1(outer1_2[12]).extractTimestamp(channel.id);
      const obj2 = outer1_1(outer1_2[12]);
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
        let obj2 = { channel };
        tmp4 = callback(OptInChannelBanner, obj2);
      }
    }
  }
  return tmp4;
};
export { OptInChannelBanner };
