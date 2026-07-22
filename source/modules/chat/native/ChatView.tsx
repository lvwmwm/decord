// Module ID: 10376
// Function ID: 80026
// Dependencies: []

// Module 10376
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[2]);
const createChannelRecord = arg1(dependencyMap[3]).createChannelRecord;
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const ChannelTypes = arg1(dependencyMap[6]).ChannelTypes;
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[7]));
let obj1 = arg1(dependencyMap[8]);
let obj = {};
obj = { flex: 1, borderTopWidth: arg1(dependencyMap[1]).StyleSheet.hairlineWidth, borderTopColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE };
obj.empty = obj;
obj.messages = {};
obj1 = { backgroundColor: importDefault(dependencyMap[9]).colors.CHANNEL_BACKGROUND_DEFAULT };
obj.chat = obj1;
let closure_12 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(function ChatView(alwaysRespectKeyboard) {
  let channel;
  let flag = alwaysRespectKeyboard.alwaysRespectKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const arg1 = flag;
  const channelId = alwaysRespectKeyboard.channelId;
  const importDefault = channelId;
  const chatInputRef = alwaysRespectKeyboard.chatInputRef;
  const dependencyMap = chatInputRef;
  let flag2 = alwaysRespectKeyboard.disableGradient;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const guildId = alwaysRespectKeyboard.guildId;
  ({ HACK_fixModalInteraction: closure_4, screenIndex: closure_5, secondaryTextFieldRef: closure_6, setNoExtractUI: closure_7 } = alwaysRespectKeyboard);
  let closure_8;
  let stateFromStores;
  let closure_10;
  channel = undefined;
  let callback;
  let closure_13;
  let closure_14;
  let ref;
  let closure_16;
  let closure_17;
  let tmp6;
  let closure_19;
  let closure_20;
  let closure_21;
  let closure_22;
  let closure_23;
  let closure_24;
  function renderMessagesWrapper() {
    let obj = {};
    obj = { style: closure_8.messages, channelId };
    obj = { channel, ref: closure_16, scrollToNewMessages: closure_23 };
    obj.stickyHeader = stateFromStores(channelId(chatInputRef[23]), obj);
    const obj1 = { alwaysRespectKeyboard: flag, channel, screenIndex: closure_5, chatInputRef, HACK_fixModalInteraction: closure_4, isResourceChannel: tmp6, onPressKey: closure_22, onScroll: closure_21, ref, style: closure_8.chat, visibleMessagesWindowHandler: closure_17 };
    const tmp2 = channel;
    const tmp3 = channelId(chatInputRef[22]);
    const items = [stateFromStores(channelId(chatInputRef[25]), { ref: chatInputRef, channel, isResourceChannel: tmp6, screenIndex: closure_5, secondaryTextFieldRef: closure_6, setNoExtractUI: closure_7, onJumpToPresent: closure_24 }), ];
    const obj3 = { channelId };
    const obj2 = { ref: chatInputRef, channel, isResourceChannel: tmp6, screenIndex: closure_5, secondaryTextFieldRef: closure_6, setNoExtractUI: closure_7, onJumpToPresent: closure_24 };
    const tmp4 = channelId(chatInputRef[24]);
    obj3.guildId = channel.getGuildId();
    obj3.shouldRender = closure_20;
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
    if (closure_19) {
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
  const items = [channelId, flag];
  const effect = importAllResult.useEffect(() => {
    if (!flag) {
      flag(chatInputRef[10]).dismissKeyboard();
      const obj = flag(chatInputRef[10]);
    }
  }, items);
  let obj = arg1(dependencyMap[11]);
  const items1 = [closure_6];
  stateFromStores = obj.useStateFromStores(items1, () => channel.getChannel(channelId));
  const items2 = [stateFromStores, channelId];
  const memo = importAllResult.useMemo(() => {
    let obj = {};
    if (null == stateFromStores) {
      obj = { id: channelId, type: closure_8.GUILD_TEXT };
      const intl = flag(chatInputRef[12]).intl;
      obj.name = intl.string(flag(chatInputRef[12]).t.ZTNur7);
      let tmp = callback(obj);
    } else {
      tmp = stateFromStores;
    }
    obj.channel = tmp;
    obj.channelIsLoading = null == stateFromStores;
    return obj;
  }, items2);
  ({ channelIsLoading: closure_10, channel } = memo);
  callback = arg1(dependencyMap[13]).useIsChannelContentGated(channel);
  const obj2 = arg1(dependencyMap[13]);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = stateFromStores;
  }
  closure_13 = arg1(dependencyMap[14]).useGetSpoilerGatingChannelId(tmp4);
  closure_14 = importAllResult.useRef(channelId);
  ref = importAllResult.useRef(null);
  closure_16 = importAllResult.useRef(null);
  closure_17 = importDefault(dependencyMap[15])(() => {
    let tmp = channelId(chatInputRef[16]);
    tmp = new tmp();
    return tmp;
  });
  tmp6 = importDefault(dependencyMap[17])(channelId);
  const obj3 = arg1(dependencyMap[14]);
  const items3 = [closure_7];
  const items4 = [channelId, tmp6];
  const stateFromStoresObject = arg1(dependencyMap[11]).useStateFromStoresObject(items3, () => {
    const messages = messages.getMessages(channelId);
    const obj = {};
    let tmp = 0 === messages.length;
    if (tmp) {
      tmp = messages.loadingMore || !messages.ready;
      const tmp2 = messages.loadingMore || !messages.ready;
    }
    obj.shouldRenderPlaceholder = tmp;
    let tmp3 = !messages.hasMoreBefore;
    if (tmp3) {
      tmp3 = !tmp6;
    }
    obj.shouldRenderBegginingRow = tmp3;
    return obj;
  }, items4);
  ({ shouldRenderPlaceholder: closure_19, shouldRenderBegginingRow: closure_20 } = stateFromStoresObject);
  closure_21 = importAllResult.useCallback((isFirstMessageVisible) => {
    const current = ref.current;
    if (null != current) {
      current.onChatViewScrolled(isFirstMessageVisible);
    }
  }, []);
  const items5 = [chatInputRef];
  closure_22 = importAllResult.useCallback((arg0) => {
    const current = chatInputRef.current;
    if (null != current) {
      current.handlePressKey(tmp);
    }
  }, items5);
  const items6 = [ref];
  closure_23 = importAllResult.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      current.scrollToNewMessages();
    }
  }, items6);
  const items7 = [ref];
  closure_24 = importAllResult.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      current.jumpToPresent();
    }
  }, items7);
  const layoutEffect = importAllResult.useLayoutEffect(() => flag(chatInputRef[18]).trackAppUIViewed(), []);
  const items8 = [channelId];
  const effect1 = importAllResult.useEffect(() => {
    const thread = channelId(chatInputRef[19]).loadThread(channelId);
    const obj = channelId(chatInputRef[19]);
    const summaries = flag(chatInputRef[20]).fetchSummaries(channelId);
  }, items8);
  const items9 = [channel.id];
  const effect2 = importAllResult.useEffect(() => {
    closure_14.current = channel.id;
  }, items9);
  const effect3 = importAllResult.useEffect(() => () => {
    const result = callback(closure_2[21]).clearOldestUnreadMessageId(ref.current);
  }, []);
  obj = {};
  const obj4 = arg1(dependencyMap[11]);
  const tmp12 = closure_10;
  obj.profile = arg1(dependencyMap[33]).Profiles.ChatView;
  const items10 = [stateFromStores(importDefault(dependencyMap[34]), { channelId, guildId }), , ];
  let tmp14 = null;
  if (!flag2) {
    obj = { absolute: true };
    tmp14 = stateFromStores(importDefault(dependencyMap[35]), obj);
  }
  items10[1] = tmp14;
  items10[2] = () => {
    function renderWithTTITracking(arg0, ChannelSpoiler) {
      callback(closure_2[36]).setInterstitial(ChannelSpoiler);
      return arg0;
    }
    let obj = flag(chatInputRef[37]);
    if (obj.shouldNSFWGateGuild(guildId)) {
      const tmp52 = stateFromStores(channelId(chatInputRef[38]), {});
      const result = renderWithTTITracking(tmp52, "NsfwGateChat");
      let tmp4 = tmp52;
    } else {
      if (closure_10) {
        if (!connected.isConnected()) {
          tmp4 = renderMessagesWrapper();
        }
      }
      if (closure_10) {
        obj = { style: closure_8.empty };
        const intl = flag(chatInputRef[12]).intl;
        obj.title = intl.string(flag(chatInputRef[12]).t.ai6Lbr);
        const intl2 = flag(chatInputRef[12]).intl;
        obj.body = intl2.string(flag(chatInputRef[12]).t.LTr+x9);
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
  }();
  obj.children = items10;
  return tmp12(importDefault(dependencyMap[33]), obj);
});
const result = arg1(dependencyMap[44]).fileFinishedImporting("modules/chat/native/ChatView.tsx");

export default memoResult;
