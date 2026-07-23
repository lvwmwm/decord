// Module ID: 10386
// Function ID: 80076
// Dependencies: [31, 27, 4808, 1352, 1348, 4349, 653, 33, 4130, 689, 3989, 566, 1212, 4345, 5723, 5450, 10387, 10388, 6707, 5690, 9527, 5069, 10390, 10402, 10439, 11101, 11501, 477, 11669, 11670, 11374, 11674, 11677, 10856, 11680, 4662, 14, 9348, 11695, 1273, 10010, 10012, 11697, 11795, 2]

// Module 10386
import importAllResult from "module_11674";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { createChannelRecord } from "_callSuper";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";
import jsxProd from "setLevels";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
let obj = {};
obj = { flex: 1, borderTopWidth: require("set").StyleSheet.hairlineWidth, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.empty = obj;
obj.messages = { flex: 1, overflow: "hidden" };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CHANNEL_BACKGROUND_DEFAULT, justifyContent: "flex-start", overflow: "hidden", flex: 1 };
obj.chat = _createForOfIteratorHelperLoose;
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function ChatView(alwaysRespectKeyboard) {
  let c10;
  let c19;
  let c20;
  let channel;
  let _isNativeReflectConstruct;
  let closure_6;
  let closure_7;
  let createChannelRecord;
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
  const guildId = alwaysRespectKeyboard.guildId;
  ({ HACK_fixModalInteraction: _isNativeReflectConstruct, screenIndex: createChannelRecord, secondaryTextFieldRef: closure_6, setNoExtractUI: closure_7 } = alwaysRespectKeyboard);
  let closure_8;
  let stateFromStores;
  c10 = undefined;
  channel = undefined;
  let callback;
  let closure_13;
  let closure_14;
  let ref;
  let closure_16;
  let closure_17;
  let c18;
  c19 = undefined;
  c20 = undefined;
  let closure_21;
  let closure_22;
  let closure_23;
  let closure_24;
  function renderMessagesWrapper() {
    let obj = {};
    obj = { style: closure_8.messages, channelId };
    obj = { channel, ref: closure_16, scrollToNewMessages: closure_23 };
    obj.stickyHeader = stateFromStores(channelId(chatInputRef[23]), obj);
    const obj1 = { alwaysRespectKeyboard: flag, channel, screenIndex: closure_5, chatInputRef, HACK_fixModalInteraction: _isNativeReflectConstruct, isResourceChannel: c18, onPressKey: closure_22, onScroll: closure_21, ref, style: closure_8.chat, visibleMessagesWindowHandler: closure_17 };
    const tmp2 = channel;
    const tmp3 = channelId(chatInputRef[22]);
    const items = [stateFromStores(channelId(chatInputRef[25]), { ref: chatInputRef, channel, isResourceChannel: c18, screenIndex: closure_5, secondaryTextFieldRef: closure_6, setNoExtractUI: closure_7, onJumpToPresent: closure_24 }), ];
    const obj3 = { channelId };
    const obj2 = { ref: chatInputRef, channel, isResourceChannel: c18, screenIndex: closure_5, secondaryTextFieldRef: closure_6, setNoExtractUI: closure_7, onJumpToPresent: closure_24 };
    const tmp4 = channelId(chatInputRef[24]);
    obj3.guildId = channel.getGuildId();
    obj3.shouldRender = c20;
    items[1] = stateFromStores(channelId(chatInputRef[26]), obj3);
    obj1.children = items;
    const items1 = [_undefined(tmp4, obj1), , , ];
    let obj6 = flag(chatInputRef[27]);
    let tmp6 = null;
    if (!obj6.isAndroid()) {
      const obj4 = { channelId: channel.id, messagesRef: ref };
      tmp6 = stateFromStores(channelId(chatInputRef[28]), obj4);
    }
    items1[1] = tmp6;
    let tmp12 = null;
    if (c19) {
      const obj5 = { screenIndex: closure_5 };
      tmp12 = stateFromStores(channelId(chatInputRef[29]), obj5);
    }
    items1[2] = tmp12;
    const tmp5 = channelId(chatInputRef[26]);
    let tmp17 = null;
    if (obj10.isAndroid()) {
      obj6 = { channelId, screenIndex: closure_5, onJumpToPresent: closure_24 };
      tmp17 = stateFromStores(channelId(chatInputRef[30]), obj6);
    }
    items1[3] = tmp17;
    obj.children = items1;
    const items2 = [_undefined(tmp3, obj), stateFromStores(channelId(chatInputRef[31]), { channelId }), stateFromStores(channelId(chatInputRef[32]), { channelId })];
    obj.children = items2;
    return _undefined(tmp2, obj);
  }
  closure_8 = callback();
  let items = [channelId, flag];
  const effect = guildId.useEffect(() => {
    if (!flag) {
      flag(chatInputRef[10]).dismissKeyboard();
      const obj = flag(chatInputRef[10]);
    }
  }, items);
  let obj = flag(chatInputRef[11]);
  let items1 = [closure_6];
  stateFromStores = obj.useStateFromStores(items1, () => outer1_6.getChannel(channelId));
  let items2 = [stateFromStores, channelId];
  const memo = guildId.useMemo(() => {
    let obj = {};
    if (null == stateFromStores) {
      obj = { id: channelId, type: closure_8.GUILD_TEXT };
      const intl = flag(chatInputRef[12]).intl;
      obj.name = intl.string(flag(chatInputRef[12]).t.ZTNur7);
      let tmp = outer1_5(obj);
    } else {
      tmp = stateFromStores;
    }
    obj.channel = tmp;
    obj.channelIsLoading = null == stateFromStores;
    return obj;
  }, items2);
  ({ channelIsLoading: c10, channel } = memo);
  callback = flag(chatInputRef[13]).useIsChannelContentGated(channel);
  let obj2 = flag(chatInputRef[13]);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = stateFromStores;
  }
  closure_13 = flag(chatInputRef[14]).useGetSpoilerGatingChannelId(tmp4);
  closure_14 = guildId.useRef(channelId);
  ref = guildId.useRef(null);
  closure_16 = guildId.useRef(null);
  closure_17 = channelId(chatInputRef[15])(() => {
    let tmp = channelId(chatInputRef[16]);
    tmp = new tmp();
    return tmp;
  });
  let tmp6 = channelId(chatInputRef[17])(channelId);
  c18 = tmp6;
  let obj3 = flag(chatInputRef[14]);
  const items3 = [closure_7];
  const items4 = [channelId, tmp6];
  const stateFromStoresObject = flag(chatInputRef[11]).useStateFromStoresObject(items3, () => {
    const messages = outer1_7.getMessages(channelId);
    const obj = {};
    let tmp = 0 === messages.length;
    if (tmp) {
      tmp = messages.loadingMore || !messages.ready;
      const tmp2 = messages.loadingMore || !messages.ready;
    }
    obj.shouldRenderPlaceholder = tmp;
    let tmp3 = !messages.hasMoreBefore;
    if (tmp3) {
      tmp3 = !c18;
    }
    obj.shouldRenderBegginingRow = tmp3;
    return obj;
  }, items4);
  ({ shouldRenderPlaceholder: c19, shouldRenderBegginingRow: c20 } = stateFromStoresObject);
  closure_21 = guildId.useCallback((isFirstMessageVisible) => {
    const current = ref.current;
    if (null != current) {
      current.onChatViewScrolled(isFirstMessageVisible);
    }
  }, []);
  const items5 = [chatInputRef];
  closure_22 = guildId.useCallback((arg0) => {
    const current = chatInputRef.current;
    if (null != current) {
      current.handlePressKey(tmp);
    }
  }, items5);
  const items6 = [ref];
  closure_23 = guildId.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      current.scrollToNewMessages();
    }
  }, items6);
  const items7 = [ref];
  closure_24 = guildId.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      current.jumpToPresent();
    }
  }, items7);
  const layoutEffect = guildId.useLayoutEffect(() => flag(chatInputRef[18]).trackAppUIViewed(), []);
  const items8 = [channelId];
  const effect1 = guildId.useEffect(() => {
    const thread = channelId(chatInputRef[19]).loadThread(channelId);
    const obj = channelId(chatInputRef[19]);
    const summaries = flag(chatInputRef[20]).fetchSummaries(channelId);
  }, items8);
  const items9 = [channel.id];
  const effect2 = guildId.useEffect(() => {
    closure_14.current = channel.id;
  }, items9);
  const effect3 = guildId.useEffect(() => () => {
    const result = flag(chatInputRef[21]).clearOldestUnreadMessageId(outer1_14.current);
  }, []);
  obj = {};
  let obj4 = flag(chatInputRef[11]);
  let tmp12 = c10;
  obj.profile = flag(chatInputRef[33]).Profiles.ChatView;
  const items10 = [stateFromStores(channelId(chatInputRef[34]), { channelId, guildId }), , ];
  let tmp14 = null;
  if (!flag2) {
    obj = { absolute: true };
    tmp14 = stateFromStores(channelId(chatInputRef[35]), obj);
  }
  items10[1] = tmp14;
  items10[2] = (() => {
    function renderWithTTITracking(arg0, ChannelSpoiler) {
      channelId(chatInputRef[36]).setInterstitial(ChannelSpoiler);
      return arg0;
    }
    let obj = flag(chatInputRef[37]);
    if (obj.shouldNSFWGateGuild(guildId)) {
      const tmp52 = stateFromStores(channelId(chatInputRef[38]), {});
      const result = renderWithTTITracking(tmp52, "NsfwGateChat");
      let tmp4 = tmp52;
    } else {
      if (c10) {
        if (!outer1_4.isConnected()) {
          tmp4 = renderMessagesWrapper();
        }
      }
      if (c10) {
        obj = { style: closure_8.empty };
        const intl = flag(chatInputRef[12]).intl;
        obj.title = intl.string(flag(chatInputRef[12]).t.ai6Lbr);
        const intl2 = flag(chatInputRef[12]).intl;
        obj.body = intl2.string(flag(chatInputRef[12]).t["LTr+x9"]);
        const tmp46 = stateFromStores(flag(chatInputRef[39]).EmptyState, obj);
        const result1 = renderWithTTITracking(tmp46, "EmptyState");
        let tmp13 = tmp46;
      } else if (closure_12) {
        obj = { guildId, channelId };
        const tmp40 = stateFromStores(channelId(chatInputRef[40]), obj);
        const result2 = renderWithTTITracking(tmp40, "GuildNSFW");
        tmp13 = tmp40;
      } else {
        if (null != closure_13) {
          if (null != closure_13) {
            const obj1 = { guildId, channelId: closure_13 };
            const tmp33 = stateFromStores(channelId(chatInputRef[41]), obj1, channelId);
            const result3 = renderWithTTITracking(tmp33, "ChannelSpoiler");
            tmp13 = tmp33;
          }
        }
        if (channel.isDirectory()) {
          const obj2 = { channel, guildId };
          const tmp25 = stateFromStores(channelId(chatInputRef[42]), obj2);
          const result4 = renderWithTTITracking(tmp25, "GuildDirectory");
          tmp13 = tmp25;
        } else if (channel.isForumLikeChannel()) {
          const obj3 = { channel };
          const tmp18 = stateFromStores(channelId(chatInputRef[43]), obj3);
          const result5 = renderWithTTITracking(tmp18, "ForumChannel");
          tmp13 = tmp18;
        } else {
          tmp13 = renderMessagesWrapper();
        }
      }
    }
    return tmp4;
  })();
  obj.children = items10;
  return tmp12(channelId(chatInputRef[33]), obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/chat/native/ChatView.tsx");

export default memoResult;
