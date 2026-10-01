// Module ID: 10964
// Function ID: 10965
// Name: ChatBanner
// Dependencies: [19, 17, 5589, 4851, 10965, 1074, 21, 4836, 576, 10966, 10967, 504, 11, 1241, 5016, 6534, 4832, 1115, 5281, 6687, 7184, 5435, 6531, 7415, 2]
// Exports: default

// Module 10964 (ChatBanner)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6531 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 6534 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7184 */;
import ChatOverlayConstants from "ChatOverlayConstants" /* 10965 */;
import useShowChannelOptInNoticeDefault from "useShowChannelOptInNotice" /* 10966 */;
import useAllowedChatOverlaysDefault from "useAllowedChatOverlays" /* 10967 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_4;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
class OptInChannelBanner {
  constructor(channel) {
    let Button;
    let intl;
    let intl2;
    let items3;
    let obj4;
    channel = channel.channel;
    const ctaProps = channel.ctaProps;
    const topBorder = channel.topBorder;
    const tmp = closure_14();
    const items = [channel];
    const effect = react.useEffect(() => {
      const obj = { banner_type: "channel_opt_in" };
      const track = AnalyticsUtilsDefault.track;
      const CHANNEL_BANNER_VIEWED = constants.CHANNEL_BANNER_VIEWED;
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = AppAnalyticsUtils;
      const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
      track(CHANNEL_BANNER_VIEWED, obj);
    }, items);
    const items1 = [channel];
    const items2 = [tmp.optInChannelBannerContainer, ];
    let topBorder1 = null;
    const callback = react.useCallback(() => {
      const obj = { banner_type: "channel_opt_in", cta_type: "add channel" };
      const track = AnalyticsUtilsDefault.track;
      const CHANNEL_BANNER_CTA_CLICKED = constants.CHANNEL_BANNER_CTA_CLICKED;
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = AppAnalyticsUtils;
      const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
      track(CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = OptInChannelsActionCreators;
      const obj5 = { section: unpackModuleId.CHANNEL };
      obj4.setOptInChannel(channel.guild_id, channel.id, true, obj5);
    }, items1);
    const tmp4 = closure_13;
    if (topBorder) {
      topBorder1 = tmp.topBorder;
    }
    let obj = { style: items2, children: items3 };
    items2[1] = topBorder1;
    let obj2 = { lineClamp: 2, style: tmp.optInChannelBannerText, variant: "text-sm/semibold", children: intl.string(channel(1115).t.iOWmmB) };
    const Text = channel(4832).Text;
    intl = channel(1115).intl;
    items3 = [closure_12(Text, obj2), ];
    let obj3 = { style: tmp.optInChannelBannerButtonContainer, children: closure_12(Button, obj4) };
    obj4 = { onPress: callback, size: "sm", text: intl2.string(channel(1115).t["TD/+zP"]) };
    Button = channel(5281).Button;
    let merged = Object.assign(ctaProps);
    intl2 = channel(1115).intl;
    items3[1] = closure_12(closure_4, obj3);
    return tmp4(closure_4, obj);
  }
}
function ArchivedLockedThreadChatBanner(channel) {
  let Button;
  let intl2;
  let items1;
  let obj5;
  let stringResult;
  channel = channel.channel;
  const tmp = closure_14();
  const items = [channel];
  const effect = react.useEffect(() => {
    const obj = { banner_type: "thread" };
    const track = AnalyticsUtilsDefault.track;
    const CHANNEL_BANNER_VIEWED = constants.CHANNEL_BANNER_VIEWED;
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
    const obj3 = AppAnalyticsUtils;
    const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
    track(CHANNEL_BANNER_VIEWED, obj);
  }, items);
  let obj = channel(6687);
  let canUnarchiveThread = obj.useCanUnarchiveThread(channel);
  let obj2 = { style: tmp.threadBannerContainer, children: items1 };
  let obj3 = { lineClamp: 4, style: tmp.threadBannerTitle, variant: "text-sm/medium", color: "text-default", children: stringResult };
  const Text = channel(4832).Text;
  const isForumPostResult = channel.isForumPost();
  const intl = channel(1115).intl;
  const string = intl.string;
  const t = channel(1115).t;
  const tmp6 = closure_13;
  if (isForumPostResult) {
    stringResult = string(t["833FDn"]);
  } else {
    stringResult = string(t.rEeodK);
  }
  items1 = [closure_12(Text, obj3), ];
  if (canUnarchiveThread) {
    let obj4 = { style: tmp.threadBannerButton, children: closure_12(Button, obj5) };
    obj5 = {
      variant: "secondary",
      size: "sm",
      text: intl2.string(channel(1115).t["0dvvEi"]),
      onPress() {
          const obj = { banner_type: "thread", cta_type: "unarchive" };
          const track = AnalyticsUtilsDefault.track;
          const CHANNEL_BANNER_CTA_CLICKED = constants.CHANNEL_BANNER_CTA_CLICKED;
          AnalyticsUtilsDefault;
          const obj2 = AppAnalyticsUtils;
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const obj3 = AppAnalyticsUtils;
          const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
          track(CHANNEL_BANNER_CTA_CLICKED, obj);
          const obj4 = ThreadActionCreatorsDefault;
          obj4.unarchiveThread(channel, false);
        }
    };
    Button = tmp3(5281).Button;
    intl2 = tmp3(1115).intl;
    canUnarchiveThread = tmp8(tmp7, obj4);
  }
  items1[1] = canUnarchiveThread;
  return tmp6(closure_4, obj2);
}
function LockedThreadChatBanner(channel) {
  let Button;
  let intl2;
  let items1;
  let obj5;
  let stringResult;
  channel = channel.channel;
  const tmp = closure_14();
  const items = [channel];
  const effect = react.useEffect(() => {
    const obj = { banner_type: "thread" };
    const track = AnalyticsUtilsDefault.track;
    const CHANNEL_BANNER_VIEWED = constants.CHANNEL_BANNER_VIEWED;
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
    const obj3 = AppAnalyticsUtils;
    const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
    track(CHANNEL_BANNER_VIEWED, obj);
  }, items);
  let obj = channel(6687);
  let isThreadModerator = obj.useIsThreadModerator(channel);
  let obj2 = { style: tmp.threadBannerContainer, children: items1 };
  let obj3 = { lineClamp: 4, style: tmp.threadBannerTitle, variant: "text-sm/medium", color: "text-default", children: stringResult };
  const Text = channel(4832).Text;
  const isForumPostResult = channel.isForumPost();
  const intl = channel(1115).intl;
  const string = intl.string;
  const t = channel(1115).t;
  const tmp6 = closure_13;
  if (isForumPostResult) {
    stringResult = string(t.E7oO8u);
  } else {
    stringResult = string(t["V/JF2N"]);
  }
  items1 = [closure_12(Text, obj3), ];
  if (isThreadModerator) {
    let obj4 = { style: tmp.threadBannerButton, children: closure_12(Button, obj5) };
    obj5 = {
      variant: "secondary",
      size: "sm",
      text: intl2.string(channel(1115).t.zA9d1J),
      onPress() {
          const obj = { banner_type: "thread", cta_type: "unlock" };
          const track = AnalyticsUtilsDefault.track;
          const CHANNEL_BANNER_CTA_CLICKED = constants.CHANNEL_BANNER_CTA_CLICKED;
          AnalyticsUtilsDefault;
          const obj2 = AppAnalyticsUtils;
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const obj3 = AppAnalyticsUtils;
          const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
          track(CHANNEL_BANNER_CTA_CLICKED, obj);
          const obj4 = ThreadActionCreatorsDefault;
          obj4.unlockThread(channel);
        }
    };
    Button = tmp3(5281).Button;
    intl2 = tmp3(1115).intl;
    isThreadModerator = tmp8(tmp7, obj4);
  }
  items1[1] = isThreadModerator;
  return tmp6(closure_4, obj2);
}
function NewMessagesChatBar(channel) {
  let Text;
  let XSmallBoldIcon;
  let connected;
  let handleScrollToNewMessages;
  let intl;
  let intl2;
  let items1;
  let obj4;
  let obj5;
  let obj7;
  let oldestUnreadTimestamp;
  channel = channel.channel;
  const unreadCount = channel.unreadCount;
  ({ oldestUnreadTimestamp, handleScrollToNewMessages } = channel);
  const tmp = closure_14();
  let obj = channel(504);
  const items = [GatewayConnectionStore];
  let tmp4 = null;
  if (obj.useStateFromStores(items, () => connected.isConnected(), [])) {
    let tmp5 = null;
    if (unreadCount > 0) {
      const isEstimatedResult = ReadStateStore.isEstimated(channel.id);
      const t = tmp2(1115).t;
      let obj2 = { style: tmp.newMessageBar, children: items1 };
      const obj3 = { accessibilityRole: "button", style: tmp.newMessageBarTextContainer, onPress: handleScrollToNewMessages, children: closure_12(Text, obj4) };
      const tmp8 = isEstimatedResult ? t.wvtbbG : t["BctFH/"];
      const PressableOpacity = tmp2(5435).PressableOpacity;
      obj4 = { variant: "text-sm/semibold", color: "text-overlay-light", children: intl.format(tmp8, obj5) };
      Text = tmp2(4832).Text;
      intl = tmp2(1115).intl;
      obj5 = { count: unreadCount, timestamp: oldestUnreadTimestamp };
      items1 = [closure_12(PressableOpacity, obj3), ];
      const obj6 = {
        style: tmp.newMessageBarCloseButton,
        accessibilityRole: "button",
        accessibilityLabel: intl2.string(channel(1115).t.e6RscS),
        onPress() {
              const obj = ReadStateActionCreators;
              const obj2 = { section: unpackModuleId.NEW_MESSAGES_BANNER, object: constants.MARK_CHANNEL_AS_READ_BUTTON, objectType: metroImportAll.ACK_MANUAL };
              return obj.ack(channel.id, obj2);
            },
        children: closure_12(XSmallBoldIcon, obj7)
      };
      const PressableOpacity2 = tmp2(5435).PressableOpacity;
      intl2 = tmp2(1115).intl;
      obj7 = { size: "sm", color: nativeDefault.colors.WHITE };
      XSmallBoldIcon = tmp2(7415).XSmallBoldIcon;
      items1[1] = closure_12(PressableOpacity2, obj6);
      tmp5 = closure_13(closure_4, obj2);
    }
    tmp4 = tmp5;
  }
  return tmp4;
}
({ StyleSheet, View: closure_4 } = react_native);
const ChatOverlays = ChatOverlayConstants.ChatOverlays;
({ AnalyticsObjectTypes: metroImportAll, AnalyticsObjects: c9, AnalyticEvents: c10, AnalyticsSections: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { threadBannerContainer: obj2, threadBannerTitle: { flex: 1, lineHeight: 18 }, threadBannerButton: { flexGrow: 0, paddingVertical: 7, paddingHorizontal: 16, marginLeft: 16 }, newMessageBar: obj3, newMessageBarTextContainer: { flex: 1, paddingLeft: 16, paddingVertical: 10 }, newMessageBarCloseButton: { paddingHorizontal: 12 }, optInChannelBannerContainer: obj4, topBorder: obj5, optInChannelBannerText: { flex: 1 }, optInChannelBannerButtonContainer: { flexShrink: 0, marginLeft: 8 } };
obj2 = { alignSelf: "stretch", minHeight: 60, flexDirection: "row", paddingHorizontal: 16, paddingVertical: 12, alignItems: "center", flexGrow: 0, zIndex: 100, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, flexDirection: "row", justifyContent: "center", alignItems: "center", overflow: "hidden", zIndex: 100, minHeight: 45 };
obj4 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", overflow: "hidden", padding: 8, paddingLeft: 16, paddingRight: 16, zIndex: 100, backgroundColor: nativeDefault.colors.CHAT_BANNER_BG, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.CHAT_BORDER };
obj5 = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.CHAT_BORDER };
const authStore2 = createStyles(obj);
const result = size.fileFinishedImporting("modules/messages/native/ChatBanner.tsx");

export default function ChatBanner(channel) {
  let oldestUnreadTimestamp;
  let tmp4;
  let unreadCount;
  channel = channel.channel;
  const handleScrollToNewMessages = channel.handleScrollToNewMessages;
  let tmp = useShowChannelOptInNoticeDefault(channel);
  let obj = useAllowedChatOverlaysDefault();
  let obj2 = channel(504);
  const items = [ReadStateStore];
  const items1 = [channel.id];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let oldestUnreadTimestamp = ReadStateStore.getOldestUnreadTimestamp(channel.id);
    const obj = { unreadCount: ReadStateStore.getUnreadCount(channel.id), oldestUnreadTimestamp };
    const tmp = channel;
    if (0 === oldestUnreadTimestamp) {
      const obj2 = SnowflakeUtilsDefault;
      oldestUnreadTimestamp = obj2.extractTimestamp(tmp.id);
    }
    return obj;
  }, items1);
  ({ unreadCount, oldestUnreadTimestamp } = stateFromStoresObject);
  if (channel.isArchivedLockedThread()) {
    const obj3 = { channel };
    tmp4 = closure_12(ArchivedLockedThreadChatBanner, obj3);
  } else if (channel.isLockedThread()) {
    const obj4 = { channel };
    tmp4 = closure_12(LockedThreadChatBanner, obj4);
  } else {
    if (unreadCount > 0) {
      if (obj.includes(ChatOverlays.NEW_MESSAGES)) {
        const obj5 = { unreadCount, oldestUnreadTimestamp, channel, handleScrollToNewMessages };
        tmp4 = closure_12(NewMessagesChatBar, obj5);
      }
    }
    tmp4 = null;
    if (tmp) {
      tmp4 = null;
      if (obj.includes(ChatOverlays.OPT_IN_CHANNEL)) {
        const obj6 = { channel };
        tmp4 = closure_12(OptInChannelBanner, obj6);
      }
    }
  }
  return tmp4;
};
export { OptInChannelBanner };
