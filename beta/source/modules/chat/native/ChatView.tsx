// Module ID: 10882
// Function ID: 10883
// Name: ChatView
// Dependencies: [19, 17, 5589, 2049, 2045, 5056, 1074, 21, 4836, 576, 4701, 504, 1115, 5046, 6747, 5910, 10883, 10884, 6895, 6732, 10886, 6531, 10891, 10904, 10968, 11440, 11961, 1364, 12134, 12135, 11749, 12139, 12142, 11027, 12145, 5437, 9, 9757, 12160, 1177, 12162, 12164, 12165, 12276, 2]

// Module 10882 (ChatView)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 6732 */;
import SummaryActionCreators from "SummaryActionCreators" /* 10886 */;
import ChatViewWrapperDefault from "ChatViewWrapper" /* 10891 */;
import ChatViewStickyHeaderDefault from "ChatViewStickyHeader" /* 10904 */;
import MessagesDefault from "Messages" /* 10968 */;
import ChatInputDefault from "ChatInput" /* 11440 */;
import ChatBeginningRowDefault from "ChatBeginningRow" /* 11961 */;
import ChannelSafeAreaBottomDefault from "ChannelSafeAreaBottom" /* 12139 */;
import VoiceMessageOverlayDefault from "VoiceMessageOverlay" /* 12142 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MessageStore from "MessageStore" /* 5056 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
  let c15;
  let c16;
  let channel;
  let channelIsLoading;
  let guildId;
  let intl;
  let intl2;
  let items10;
  let screenIndex;
  let secondaryTextFieldRef;
  let setNoExtractUI;
  let shouldRender;
  let tmp20Result3;
  let flag = alwaysRespectKeyboard.alwaysRespectKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const channelId = alwaysRespectKeyboard.channelId;
  const chatInputRef = alwaysRespectKeyboard.chatInputRef;
  let flag2 = alwaysRespectKeyboard.disableGradient;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ guildId, HACK_fixModalInteraction: react, screenIndex: GatewayConnectionStore, secondaryTextFieldRef: createChannelRecord, setNoExtractUI: ChannelStore } = alwaysRespectKeyboard);
  channel = undefined;
  let closure_10;
  let ref;
  let visibleMessagesWindowHandler;
  let isResourceChannel;
  c15 = undefined;
  c16 = undefined;
  let onScroll;
  let onPressKey;
  let scrollToNewMessages;
  let onJumpToPresent;
  let tmp = ref();
  let closure_7 = tmp;
  let obj = react;
  let items = [channelId, flag];
  const effect = react.useEffect(() => {
    const tmp = flag;
    if (!tmp) {
      const obj = ChatInputUtils;
      obj.dismissKeyboard();
    }
  }, items);
  const tmp3 = flag;
  let obj2 = flag(chatInputRef[11]);
  let items1 = [ChannelStore];
  let stateFromStores = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let items2 = [stateFromStores, channelId];
  const memo = react.useMemo(() => {
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
  let obj3 = flag(chatInputRef[13]);
  const isChannelContentGated = obj3.useIsChannelContentGated(channel);
  let tmp8 = flag(chatInputRef[14]);
  const useGetSpoilerGatingChannelId = tmp8.useGetSpoilerGatingChannelId;
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const getSpoilerGatingChannelId = useGetSpoilerGatingChannelId(stateFromStores);
  closure_10 = obj.useRef(channelId);
  obj.useRef(null);
  ref = obj.useRef(null);
  let tmp11 = channelId;
  visibleMessagesWindowHandler = channelId(tmp4[15])(() => {
    const tmp = new channelId(chatInputRef[16])();
    return tmp;
  });
  let tmp12 = channelId(tmp4[17])(channelId);
  isResourceChannel = tmp12;
  const items3 = [closure_7];
  const items4 = [channelId, tmp12];
  const tmp3Result = tmp3(chatInputRef[11]);
  const stateFromStoresObject = tmp3Result.useStateFromStoresObject(items3, () => {
    const messages = MessageStore.getMessages(channelId);
    let tmp = 0 === messages.length;
    if (tmp) {
      tmp = messages.loadingMore || !messages.ready;
    }
    const obj = { shouldRenderPlaceholder: tmp, shouldRenderBegginingRow: tmp3 };
    return obj;
  }, items4);
  ({ shouldRenderPlaceholder: c15, shouldRenderBegginingRow: c16 } = stateFromStoresObject);
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
    const obj = flag(chatInputRef[18]);
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
    closure_10.current = channel.id;
  }, items9);
  const effect3 = obj.useEffect(() => () => {
    const obj = flag(chatInputRef[21]);
    const result = obj.clearOldestUnreadMessageId(ref.current);
  }, []);
  let obj4 = { profile: tmp3(tmp4[33]).Profiles.ChatView, children: items10 };
  const tmp19 = channelId(chatInputRef[33]);
  items10 = [channel(channelId(tmp4[34]), { channelId, guildId }), , ];
  let tmp20Result = null;
  const tmp18 = closure_10;
  if (!flag2) {
    tmp20Result = tmp20(tmp11(tmp4[35]), { absolute: true });
  }
  items10[1] = tmp20Result;
  const tmp3Result2 = tmp3(chatInputRef[37]);
  if (tmp3Result2.shouldNSFWGateGuild(guildId)) {
    tmp20Result3 = tmp20(tmp11(tmp4[38]), {});
    const tmp11Result = tmp11(chatInputRef[36]);
    tmp11Result.setInterstitial("NsfwGateChat");
  } else {
    let tmp20Result4;
    function renderMessagesWrapper() {
      let items;
      let items1;
      let items2;
      let obj2;
      const obj = { style: closure_7.messages, channelId, stickyHeader: React4(ChatViewStickyHeaderDefault, obj2), children: items1 };
      obj2 = { channel, ref, scrollToNewMessages };
      const obj3 = { alwaysRespectKeyboard: flag, channel, screenIndex: GatewayConnectionStore, chatInputRef, HACK_fixModalInteraction: react, isResourceChannel, onPressKey, onScroll, ref, style: closure_7.chat, visibleMessagesWindowHandler, children: items };
      items = [, ];
      const obj4 = { ref: chatInputRef, channel, isResourceChannel, screenIndex: GatewayConnectionStore, secondaryTextFieldRef: createChannelRecord, setNoExtractUI: ChannelStore, onJumpToPresent };
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
        tmp7Result = tmp7(tmp3(12134), obj7);
      }
      items1[1] = tmp7Result;
      let tmp7Result3 = null;
      if (c15) {
        const obj8 = { screenIndex: GatewayConnectionStore };
        tmp7Result3 = tmp7(tmp3(12135), obj8);
      }
      items1[2] = tmp7Result3;
      let tmp7Result4 = null;
      const tmp14Result = PlatformUtils;
      if (tmp14Result.isAndroid()) {
        const obj9 = { channelId, screenIndex: GatewayConnectionStore, onJumpToPresent: tmp12 };
        tmp7Result4 = tmp7(tmp3(11749), obj9);
      }
      const obj10 = { children: items2 };
      items1[3] = tmp7Result4;
      items2 = [authStore(tmp5, obj), React4(ChannelSafeAreaBottomDefault, { channelId }), React4(VoiceMessageOverlayDefault, { channelId })];
      return authStore(tmp2, obj10);
    }
    if (channelIsLoading) {
      if (!GatewayConnectionStore.isConnected()) {
        tmp20Result3 = renderMessagesWrapper();
      }
    }
    if (channelIsLoading) {
      let obj5 = { style: tmp.empty, title: intl.string(tmp3(tmp4[12]).t.ai6Lbr), body: intl2.string(tmp3(tmp4[12]).t["LTr+x9"]) };
      const EmptyState = tmp3(tmp4[39]).EmptyState;
      intl = tmp3(tmp4[12]).intl;
      intl2 = tmp3(tmp4[12]).intl;
      tmp20Result4 = tmp20(EmptyState, obj5);
      const tmp11Result6 = tmp11(chatInputRef[36]);
      tmp11Result6.setInterstitial("EmptyState");
    } else if (isChannelContentGated) {
      let obj6 = { guildId, channelId };
      tmp20Result4 = tmp20(tmp11(tmp4[40]), obj6);
      const tmp11Result7 = tmp11(chatInputRef[36]);
      tmp11Result7.setInterstitial("GuildNSFW");
    } else {
      if (null != getSpoilerGatingChannelId) {
        if (null != getSpoilerGatingChannelId) {
          let obj7 = { guildId, channelId: getSpoilerGatingChannelId };
          tmp20Result4 = tmp20(tmp11(tmp4[41]), obj7, channelId);
          const tmp11Result8 = tmp11(chatInputRef[36]);
          tmp11Result8.setInterstitial("ChannelSpoiler");
        }
      }
      if (channel.isDirectory()) {
        let obj8 = { channel, guildId };
        tmp20Result4 = tmp20(tmp11(tmp4[42]), obj8);
        const tmp11Result9 = tmp11(chatInputRef[36]);
        tmp11Result9.setInterstitial("GuildDirectory");
      } else if (channel.isForumLikeChannel()) {
        let obj9 = { channel };
        tmp20Result4 = tmp20(tmp11(tmp4[43]), obj9);
        const tmp11Result10 = tmp11(chatInputRef[36]);
        tmp11Result10.setInterstitial("ForumChannel");
      } else {
        tmp20Result4 = renderMessagesWrapper();
      }
    }
    tmp20Result3 = tmp20Result4;
  }
  items10[2] = tmp20Result3;
  return tmp18(tmp19, obj4);
});
let result = size.fileFinishedImporting("modules/chat/native/ChatView.tsx");

export default memoResult;
