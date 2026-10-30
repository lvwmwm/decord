// Module ID: 11195
// Function ID: 11196
// Name: ChatView
// Dependencies: [19, 17, 6562, 4862, 4858, 6056, 1072, 21, 5009, 575, 5202, 504, 1114, 11196, 5607, 11213, 11214, 7647, 7478, 10163, 7273, 11216, 11229, 11324, 13673, 13991, 1376, 14161, 14162, 13774, 14166, 14169, 11528, 14172, 10716, 9, 1188, 14186, 14320, 2]

// Module 11195 (ChatView)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import ChatInputUtils from "ChatInputUtils" /* 5202 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 7478 */;
import SummaryActionCreators from "SummaryActionCreators" /* 10163 */;
import ChatViewWrapperDefault from "ChatViewWrapper" /* 11216 */;
import ChatViewStickyHeaderDefault from "ChatViewStickyHeader" /* 11229 */;
import MessagesDefault from "Messages" /* 11324 */;
import ChatInputDefault from "ChatInput" /* 13673 */;
import ChatBeginningRowDefault from "ChatBeginningRow" /* 13991 */;
import ChannelSafeAreaBottomDefault from "ChannelSafeAreaBottom" /* 14166 */;
import VoiceMessageOverlayDefault from "VoiceMessageOverlay" /* 14169 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6562 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import MessageStore from "MessageStore" /* 6056 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
let obj3;
let unpackModuleId;
const StyleSheet = react_native.StyleSheet;
const createChannelRecord = ChannelRecord.createChannelRecord;
const ChannelTypes = Constants.ChannelTypes;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { empty: obj2, messages: { flex: 1, overflow: "hidden" }, chat: obj3 };
obj2 = { flex: 1, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.CHANNEL_BACKGROUND_DEFAULT, justifyContent: "flex-start", overflow: "hidden", flex: 1 };
let closure_12 = createStyles(obj);
const memoResult = react.memo(function ChatView(alwaysRespectKeyboard) {
  let HACK_fixModalInteraction;
  let c16;
  let c17;
  let channel;
  let channelIsLoading;
  let chatInputRef;
  let guildId;
  let intl;
  let intl2;
  let isActive;
  let items10;
  let result;
  let screenIndex;
  let secondaryTextFieldRef;
  let setNoExtractUI;
  let shouldRender;
  let flag = alwaysRespectKeyboard.alwaysRespectKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const channelId = alwaysRespectKeyboard.channelId;
  ({ isActive: dependencyMap, chatInputRef } = alwaysRespectKeyboard);
  let flag2 = alwaysRespectKeyboard.disableGradient;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ guildId, HACK_fixModalInteraction: GatewayConnectionStore, screenIndex: createChannelRecord, secondaryTextFieldRef: ChannelStore, setNoExtractUI: MessageStore } = alwaysRespectKeyboard);
  channel = undefined;
  let closure_11;
  let ref;
  let visibleMessagesWindowHandler;
  let isResourceChannel;
  c16 = undefined;
  c17 = undefined;
  let onScroll;
  let onPressKey;
  let scrollToNewMessages;
  let onJumpToPresent;
  let tmp = ref();
  let closure_8 = tmp;
  let obj = chatInputRef;
  let items = [channelId, flag];
  const effect = chatInputRef.useEffect(() => {
    const tmp = flag;
    if (!tmp) {
      const obj = ChatInputUtils;
      obj.dismissKeyboard();
    }
  }, items);
  const tmp3 = flag;
  let obj2 = flag(504);
  let items1 = [ChannelStore];
  let stateFromStores = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let items2 = [stateFromStores, channelId];
  const memo = chatInputRef.useMemo(() => {
    let intl;
    let tmp2 = stateFromStores;
    const tmp = stateFromStores;
    if (null == stateFromStores) {
      const obj = { id: channelId, type: ChannelTypes.GUILD_TEXT, name: intl.string(intl3.t.ZTNur7) };
      intl = intl3.intl;
      tmp2 = createChannelRecord(obj);
    }
    return { channel: tmp2, channelIsLoading: null == tmp };
  }, items2);
  ({ channelIsLoading, channel } = memo);
  const tmp7 = flag(11196);
  const useChannelContentGate = tmp7.useChannelContentGate;
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const channelContentGate = useChannelContentGate(guildId, stateFromStores);
  closure_11 = obj.useRef(channelId);
  obj.useRef(null);
  ref = obj.useRef(null);
  visibleMessagesWindowHandler = channelId(5607)(() => {
    const tmp = new channelId(dependencyMap[15])();
    return tmp;
  });
  let tmp11 = channelId(11214)(channelId);
  isResourceChannel = tmp11;
  const items3 = [MessageStore];
  const items4 = [channelId, tmp11];
  const tmp3Result = tmp3(504);
  const stateFromStoresObject = tmp3Result.useStateFromStoresObject(items3, () => {
    const messages = MessageStore.getMessages(channelId);
    let tmp = 0 === messages.length;
    if (tmp) {
      tmp = messages.loadingMore || !messages.ready;
    }
    const obj = { shouldRenderPlaceholder: tmp, shouldRenderBegginingRow: tmp3 };
    return obj;
  }, items4);
  ({ shouldRenderPlaceholder: c16, shouldRenderBegginingRow: c17 } = stateFromStoresObject);
  onScroll = obj.useCallback((isFirstMessageVisible) => {
    const current = ref.current;
    if (current != null) {
      current.onChatViewScrolled(isFirstMessageVisible);
    }
  }, []);
  const items5 = [chatInputRef];
  onPressKey = obj.useCallback((arg0) => {
    const current = chatInputRef.current;
    if (current != null) {
      current.handlePressKey(tmp);
    }
  }, items5);
  const items6 = [ref];
  scrollToNewMessages = obj.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToNewMessages();
    }
  }, items6);
  const items7 = [ref];
  onJumpToPresent = obj.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.jumpToPresent();
    }
  }, items7);
  const layoutEffect = obj.useLayoutEffect(() => {
    const obj = flag(dependencyMap[17]);
    return obj.trackAppUIViewed();
  }, []);
  const items8 = [channelId];
  const effect1 = obj.useEffect(() => {
    const obj = LazyLoadedThreadManagerDefault;
    const thread = obj.loadThread(channelId);
    const obj2 = SummaryActionCreators;
    const summaries = obj2.fetchSummaries(channelId);
  }, items8);
  const items9 = [channel.id];
  const effect2 = obj.useEffect(() => {
    closure_11.current = channel.id;
  }, items9);
  const effect3 = obj.useEffect(() => () => {
    const obj = flag(dependencyMap[20]);
    const result = obj.clearOldestUnreadMessageId(ref.current);
  }, []);
  let obj3 = { profile: tmp3(11528).Profiles.ChatView, children: items10 };
  const tmp18 = channelId(11528);
  items10 = [stateFromStores(channelId(14172), { channelId, guildId }), , ];
  let tmp19Result = null;
  const tmp17 = channel;
  if (!flag2) {
    tmp19Result = tmp19(tmp10(10716), { absolute: true });
  }
  items10[1] = tmp19Result;
  if (null != channelContentGate) {
    const tmp3Result2 = tmp3(11196);
    result = tmp3Result2.renderChannelContentGate(channelContentGate);
    const kind = channelContentGate.kind;
    const tmp10Result = channelId(9);
    tmp10Result.setInterstitial(kind);
  } else {
    let tmp19Result2;
    function renderMessagesWrapper() {
      let items;
      let items1;
      let items2;
      let obj2;
      const obj = { style: closure_8.messages, channelId, stickyHeader: React4(ChatViewStickyHeaderDefault, obj2), children: items1 };
      obj2 = { channel, ref, scrollToNewMessages };
      const obj3 = { alwaysRespectKeyboard: flag, channel, isActive: dependencyMap, screenIndex: createChannelRecord, chatInputRef, HACK_fixModalInteraction: GatewayConnectionStore, isResourceChannel, onPressKey, onScroll, ref, style: closure_8.chat, visibleMessagesWindowHandler, children: items };
      items = [, ];
      const obj4 = { ref: chatInputRef, channel, isResourceChannel, screenIndex: createChannelRecord, secondaryTextFieldRef: ChannelStore, setNoExtractUI: MessageStore, onJumpToPresent };
      const tmp5 = ChatViewWrapperDefault;
      const tmp9 = MessagesDefault;
      items[0] = React4(ChatInputDefault, obj4);
      const obj5 = { channelId, guildId: channel.getGuildId(), shouldRender };
      const tmp13 = ChatBeginningRowDefault;
      items[1] = React4(tmp13, obj5);
      items1 = [authStore(tmp9, obj3), , , ];
      let tmp7Result = null;
      const obj6 = PlatformUtils;
      const tmp11 = ref;
      const tmp12 = onJumpToPresent;
      const tmp2 = unpackModuleId;
      const tmp8 = channel;
      if (!obj6.isAndroid()) {
        const obj7 = { channelId: tmp8.id, messagesRef: tmp11 };
        tmp7Result = tmp7(tmp3(14161), obj7);
      }
      items1[1] = tmp7Result;
      let tmp7Result3 = null;
      if (c16) {
        const obj8 = { screenIndex: createChannelRecord };
        tmp7Result3 = tmp7(tmp3(14162), obj8);
      }
      items1[2] = tmp7Result3;
      let tmp7Result4 = null;
      const tmp14Result = PlatformUtils;
      if (tmp14Result.isAndroid()) {
        const obj9 = { channelId, screenIndex: createChannelRecord, onJumpToPresent: tmp12 };
        tmp7Result4 = tmp7(tmp3(13774), obj9);
      }
      const obj10 = { children: items2 };
      items1[3] = tmp7Result4;
      items2 = [authStore(tmp5, obj), React4(ChannelSafeAreaBottomDefault, { channelId }), React4(VoiceMessageOverlayDefault, { channelId })];
      return authStore(tmp2, obj10);
    }
    if (channelIsLoading) {
      if (!GatewayConnectionStore.isConnected()) {
        result = renderMessagesWrapper();
      }
    }
    if (channelIsLoading) {
      let obj4 = { style: tmp.empty, title: intl.string(tmp3(1114).t.ai6Lbr), body: intl2.string(tmp3(1114).t["LTr+x9"]) };
      const EmptyState = tmp3(1188).EmptyState;
      intl = tmp3(1114).intl;
      intl2 = tmp3(1114).intl;
      tmp19Result2 = tmp19(EmptyState, obj4);
      const tmp10Result4 = channelId(9);
      tmp10Result4.setInterstitial("EmptyState");
    } else if (channel.isDirectory()) {
      let obj5 = { channel, guildId };
      tmp19Result2 = tmp19(tmp10(14186), obj5);
      const tmp10Result5 = channelId(9);
      tmp10Result5.setInterstitial("GuildDirectory");
    } else if (channel.isForumLikeChannel()) {
      let obj6 = { channel };
      tmp19Result2 = tmp19(tmp10(14320), obj6);
      const tmp10Result6 = channelId(9);
      tmp10Result6.setInterstitial("ForumChannel");
    } else {
      tmp19Result2 = renderMessagesWrapper();
    }
    result = tmp19Result2;
  }
  items10[2] = result;
  return tmp17(tmp18, obj3);
});
let result = size.fileFinishedImporting("modules/chat/native/ChatView.tsx");

export default memoResult;
