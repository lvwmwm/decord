// Module ID: 10840
// Function ID: 84195
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 10840 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function recordTimings(arg0, arr) {
  const mapped = arr.map((id) => id.id);
  let hasFetched = arr.hasFetched;
  if (!hasFetched) {
    hasFetched = arr.ready && !arr.cached;
    const tmp2 = arr.ready && !arr.cached;
  }
  importDefault(dependencyMap[11]).recordMessageRender(arg0, mapped, hasFetched, arr.hasMoreAfter);
}
function handleTapShowAltText(description) {
  importDefault(dependencyMap[12])({ description: description.nativeEvent.description });
}
function handleMediaPlayFinishedAnalytics(nativeEvent) {
  const result = arg1(dependencyMap[13]).handleMediaPlayFinishedAnalytics(nativeEvent.nativeEvent);
}
function isLoadingAtTop(arg0, arg1) {
  if (arg1) {
    const tmp3 = _createForOfIteratorHelperLoose(arg0);
    const iter = tmp3();
    let iter2 = iter;
    if (!iter.done) {
      const value = iter2.value;
      while (value.changeType !== Changeset.INSERT) {
        let iter3 = tmp3();
        iter2 = iter3;
      }
      return value.index <= 1;
    }
    return false;
  } else {
    return false;
  }
}
function computeForceReload(theme, theme2) {
  return theme.theme !== theme2.theme || theme.saturation !== theme2.saturation || theme.isVisualRefreshEnabled !== theme2.isVisualRefreshEnabled;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).updateShouldShowJumpToPresentButton;
let closure_7 = arg1(dependencyMap[4]).getUserCommunicationDisabledVersion;
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const Changeset = arg1(dependencyMap[8]).Changeset;
({ ActivityActionTypes: closure_12, MAX_MESSAGES_PER_CHANNEL: closure_13, MessageFlags: closure_14, MessageTypes: closure_15, Permissions: closure_16 } = arg1(dependencyMap[9]));
const tmp2 = arg1(dependencyMap[9]);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = arg1(dependencyMap[10]));
const forwardRefResult = importAllResult.forwardRef((messages) => {
  let handleScrollPosition;
  let loadMoreAfter;
  let loadMoreBefore;
  let scrollToTopMessage;
  let updateNativeRows;
  const arg1 = messages;
  function handleVisibleMessagesChange(self) {
    let firstVisibleMessagePercentVisible;
    let firstVisibleMessageRowIndex;
    let lastVisibleMessagePercentVisible;
    let lastVisibleMessageRowIndex;
    let source;
    ({ firstVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessageRowIndex, lastVisibleMessagePercentVisible, source } = self);
    let obj = self(closure_2[13]);
    obj = { firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, chatManager: first, channelId: self.channelId };
    const visibleMessages = obj.getVisibleMessages(obj);
    if (visibleMessages.length > 0) {
      obj = { visibleMessages, source };
      const result = self(closure_2[22]).questsVisibleMobileMessagesChanged(obj);
      const obj5 = self(closure_2[23]);
      const result1 = obj5.handleAnnouncementMessageViewTracking(visibleMessages, self.shouldTrackAnnouncementMessageViews, self.guildId, self.channel);
      const obj6 = self(closure_2[23]);
      const result2 = obj6.handleOfficialMessageViewTracking(visibleMessages, self.shouldTrackOfficialMessageViews, self.guildId, self.channel);
      const obj7 = self(closure_2[23]);
      const result3 = obj7.handleRichPresenceInviteEmbedViewTracking(visibleMessages, self.shouldTrackRichPresenceInviteEmbedViews, self.guildId, self.channel);
      const obj8 = self(closure_2[23]);
      const result4 = obj8.handleVoiceInviteEmbedViewTracking(visibleMessages, self.shouldTrackVoiceInviteEmbedViews, self.guildId, self.channel);
      const obj3 = self(closure_2[22]);
    }
  }
  function findMessageIndex(focusTargetId) {
    if (null != focusTargetId) {
      return focusTargetId(closure_2[24]).findMessageRowIndex(first.getPreviousRows(), focusTargetId);
    }
  }
  function _handleTapNavBar() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _handleTapNavBar = obj;
    return obj(...arguments);
  }
  function scrollToBottom() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    callback4({ eventTimestamp: Date.now(), isAtBottom: true });
    const obj = { eventTimestamp: Date.now(), isAtBottom: true };
    if (flag) {
      flag = !arg0.useReducedMotion;
    }
    first(closure_2[17]).scrollToBottom(ref5.current, flag);
  }
  function jumpToPresent() {
    let channel;
    let messages;
    ({ messages, channel } = arg0);
    if (null == messages.jumpReturnTargetId) {
      if (!messages.loadingMore) {
        if (messages.hasMoreAfter) {
          let obj = { channelId: channel.id, limit: callback2 };
          obj = { present: true };
          obj.jump = obj;
          messages = first(closure_2[26]).fetchMessages(obj);
          const obj3 = first(closure_2[26]);
        } else {
          scrollToBottom();
        }
      }
    } else {
      obj = first(closure_2[26]);
      const obj1 = { channelId: channel.id, messageId: jumpReturnTargetId, flash: true };
      obj.jumpToMessage(obj1);
    }
  }
  function scrollToNewMessages() {
    let id = ref3.ackMessageId(arg0.channel.id);
    let obj = first(closure_2[26]);
    obj = { channelId: arg0.channel.id };
    if (null == id) {
      id = arg0.channel.id;
    }
    obj.messageId = id;
    obj.offset = 1;
    obj.context = "Mark As Read";
    obj.jumpToMessage(obj);
  }
  function getChatRef() {
    return ref5;
  }
  function clearRowsState(reason) {
    ref.current = false;
    closure_16.current = false;
    closure_18.current = false;
    closure_17.current = false;
    closure_19.current = false;
    closure_20.current = false;
    closure_21.current = false;
    ref1.current = false;
    ref2.current = [];
    ref4.current = false;
    ref3.current = null;
    const size = chatUpdatesQueue.blockers.size;
    const length2 = first.getPreviousRows().length;
    first.clear();
    chatUpdatesQueue.clear();
    let obj = first(closure_2[17]);
    obj.clearRows(ref5.current);
    obj = { category: "chat.queue.clear", message: "clearRows (" + reason + "): queue=" + length + " blockers=" + size + " jsRows=" + length2 };
    obj = { reason };
    const obj2 = first(closure_2[30]);
    obj.changesetUpdateId = reason(closure_2[31]).getChangesetIdForChat(ref5.current);
    obj.queueLength = chatUpdatesQueue.queue.length;
    obj.blockers = size;
    obj.chatManagerRows = length2;
    obj.data = obj;
    obj2.addBreadcrumb(obj);
  }
  function clearRows(self) {
    clearRowsState("channel-change");
    ref(self.channelId, self.screenIndex, false);
  }
  const first = callback(React.useState(() => {
    let tmp = first(closure_2[15]);
    tmp = new tmp();
    return tmp;
  }), 1)[0];
  const importDefault = first;
  [closure_2, closure_3] = callback(React.useState(false), 2);
  const tmp3 = callback(React.useState(false), 2);
  const first1 = tmp3[0];
  let callback = first1;
  const React = tmp3[1];
  const ref = React.useRef(false);
  let closure_6 = ref;
  const ref1 = React.useRef(false);
  let closure_7 = ref1;
  const ref2 = React.useRef([]);
  let closure_8 = ref2;
  const ref3 = React.useRef(null);
  let closure_9 = ref3;
  const ref4 = React.useRef(false);
  let closure_10 = ref4;
  const ref5 = React.useRef(null);
  const Changeset = ref5;
  callback = React.useCallback((rows) => {
    let HACK_iOSForceAnimations;
    let forceReload;
    let hasMoreMessagesAfter;
    let isAnimated;
    let scrollData;
    ({ rows, hasMoreMessagesAfter, scrollData, HACK_iOSForceAnimations, forceReload, isAnimated } = rows);
    const tmp = ref6(rows.rows, ref1.current);
    first(closure_2[17]).updateRows(ref5.current, { rows, isLoadingAtTop: tmp, scrollData, HACK_iOSForceAnimations, forceReload, isAnimated });
    ref1.current = hasMoreMessagesAfter;
  }, []);
  let obj = arg1(dependencyMap[18]);
  const chatUpdatesQueue = obj.useChatUpdatesQueue(ref5, callback);
  const items = [, ];
  ({ canChat: arr[0], channel: arr[1] } = messages);
  const items1 = [messages.messages];
  const callback1 = React.useCallback((self) => {
    let canChat = self.canChat;
    if (canChat) {
      canChat = ref2.can(constants.ADD_REACTIONS, self.channel);
    }
    if (!canChat) {
      const channel = self.channel;
      canChat = channel.isPrivate();
    }
    return canChat;
  }, items);
  const callback2 = React.useCallback((arg0) => {
    const messages = arg0.messages;
    return first(closure_2[19]).find(messages.toArray(), (id) => {
      let tmp2 = id.id === id;
      if (!tmp2) {
        tmp2 = tmp === id;
      }
      return tmp2;
    });
  }, items1);
  const items2 = [, , ];
  ({ channel: arr3[0], channelId: arr3[1] } = messages);
  items2[2] = messages.messages.jumpTargetId;
  const callback3 = React.useCallback((self) => {
    const channel = self.channel;
    let isForumPostResult = channel.isForumPost();
    if (isForumPostResult) {
      isForumPostResult = first(closure_2[20]).castChannelIdAsMessageId(self.channelId) === self.messages.jumpTargetId;
      const obj = first(closure_2[20]);
    }
    if (isForumPostResult) {
      isForumPostResult = !self;
    }
    return isForumPostResult;
  }, items2);
  obj = { channelId: messages.channelId, jumpTargetId: messages.messages.jumpTargetId, oldestUnreadMessageId: messages.oldestUnreadMessageId, shouldJumpToOriginalPost: callback3 };
  const tmp16 = importDefault(dependencyMap[21])(obj);
  let closure_15 = tmp16.startOrCancelLatestMessagesLoad;
  obj = {
    chatRef: ref5,
    chatManager: first,
    chatUpdatesQueue,
    pendingUpdatesQueueRef: ref2,
    animatedRef: ref,
    fetchMoreBefore(self) {
      let messages = self.messages;
      let hasMoreBefore = messages.hasMoreBefore;
      if (hasMoreBefore) {
        hasMoreBefore = !messages.loadingMore;
      }
      if (hasMoreBefore) {
        let id;
        let obj = first(closure_2[26]);
        obj = { channelId: self.channelId };
        const firstResult = messages.first();
        if (null != firstResult) {
          id = firstResult.id;
        }
        obj.before = id;
        obj.limit = callback2;
        messages = obj.fetchMessages(obj);
      }
    },
    fetchMoreAfter(self) {
      let messages = self.messages;
      let hasMoreAfter = messages.hasMoreAfter;
      if (hasMoreAfter) {
        hasMoreAfter = !messages.loadingMore;
      }
      if (hasMoreAfter) {
        let id;
        let obj = first(closure_2[26]);
        obj = { channelId: self.channelId };
        const lastResult = messages.last();
        if (null != lastResult) {
          id = lastResult.id;
        }
        obj.after = id;
        obj.limit = callback2;
        messages = obj.fetchMessages(obj);
      }
    },
    handleVisibleMessagesChange,
    applyNativeRowsUpdate: callback,
    messages: messages.messages,
    channel: messages.channel,
    channelId: messages.channelId,
    screenIndex: messages.screenIndex,
    onScroll: messages.onScroll,
    useReducedMotion: messages.useReducedMotion,
    isStaff: messages.isStaff,
    visibleMessagesWindowHandler: messages.visibleMessagesWindowHandler
  };
  const tmp2 = callback(React.useState(false), 2);
  ({ hasHandledScrollRef: closure_16, isAtBottomRef: closure_17, isNearBottomRef: closure_18, isNearTopRef: closure_19, deceleratingRef: closure_20, draggingRef: closure_21, firstIgnoredScrollEventTimestampRef: closure_22, scrollToTop: closure_23, handleScrollCallbacks: closure_24, loadMoreBefore, loadMoreAfter, scrollToTopMessage, updateNativeRows, handleScrollPosition } = importDefault(dependencyMap[25])(obj));
  const ref6 = React.useRef(null);
  const isLoadingAtTop = ref6;
  ref6.current = { getMessage: callback2, chatInputRef: messages.chatInputRef, selectedChannelId: messages.channelId, revealedMessageId: messages.messages.revealedMessageId, uploads: messages.uploads, paymentsBlocked: messages.paymentsBlocked, loadMoreBefore, loadMoreAfter };
  const first2 = callback(React.useState(() => new arg0(closure_2[27]).MessagesHandlers(() => ref.current)), 1)[0];
  const imperativeHandle = React.useImperativeHandle(arg1, () => ({ scrollToBottom, jumpToPresent, scrollToNewMessages, getChatRef }));
  const tmp17 = importDefault(dependencyMap[25])(obj);
  const obj1 = {
    chatManager: first,
    rowGenerator: callback(React.useState(() => {
      let tmp = first(closure_2[16]);
      tmp = new tmp();
      return tmp;
    }), 1)[0],
    animatingStickerMessageIdRef: ref3,
    canAddNewReactions: callback1,
    channel: messages.channel,
    messages: messages.messages,
    isMessagesReady: messages.isMessagesReady,
    uploads: messages.uploads,
    roleStyle: messages.roleStyle,
    oldestUnreadMessageId: messages.oldestUnreadMessageId,
    replyingMessageId: messages.replyingMessageId,
    inlineAttachmentMedia: messages.inlineAttachmentMedia,
    inlineEmbedMedia: messages.inlineEmbedMedia,
    renderEmbeds: messages.renderEmbeds,
    renderReactions: messages.renderReactions,
    animateEmoji: messages.animateEmoji,
    gifAutoPlay: messages.gifAutoPlay,
    timestampHourCycle: messages.timestampHourCycle,
    currentUserId: messages.currentUserId,
    renderCommunicationDisabled: messages.renderCommunicationDisabled,
    selectedSummary: messages.selectedSummary,
    enableSwipeActions: messages.enableSwipeActions,
    isResourceChannel: messages.isResourceChannel,
    shouldObscureSpoiler: messages.shouldObscureSpoiler,
    shouldDisableInteractiveComponents: messages.shouldDisableInteractiveComponents,
    unloadableContentEntryMessageIds: messages.unloadableContentEntryMessageIds,
    containerWidth: messages.containerWidth,
    chatRef: ref5,
    loadedRef: ref4,
    animatedRef: ref,
    hasMoreMessagesAfterForLastUpdateRef: ref1,
    updateNativeRows,
    isLoadingAtTop,
    channelLatestMessageLoadingStatsManager: tmp16.channelLatestMessageLoadingStatsManager,
    channelId: messages.channelId,
    isMessagesCached: messages.isMessagesCached,
    chatUpdatesQueue,
    shouldJumpToOriginalPost: callback3,
    findMessageIndex,
    scrollToTopMessage,
    useReducedMotion: messages.useReducedMotion
  };
  ({ updateRows: closure_26, scrollToMessageId: closure_27 } = importDefault(dependencyMap[28])({
    chatManager: first,
    rowGenerator: callback(React.useState(() => {
      let tmp = first(closure_2[16]);
      tmp = new tmp();
      return tmp;
    }), 1)[0],
    animatingStickerMessageIdRef: ref3,
    canAddNewReactions: callback1,
    channel: messages.channel,
    messages: messages.messages,
    isMessagesReady: messages.isMessagesReady,
    uploads: messages.uploads,
    roleStyle: messages.roleStyle,
    oldestUnreadMessageId: messages.oldestUnreadMessageId,
    replyingMessageId: messages.replyingMessageId,
    inlineAttachmentMedia: messages.inlineAttachmentMedia,
    inlineEmbedMedia: messages.inlineEmbedMedia,
    renderEmbeds: messages.renderEmbeds,
    renderReactions: messages.renderReactions,
    animateEmoji: messages.animateEmoji,
    gifAutoPlay: messages.gifAutoPlay,
    timestampHourCycle: messages.timestampHourCycle,
    currentUserId: messages.currentUserId,
    renderCommunicationDisabled: messages.renderCommunicationDisabled,
    selectedSummary: messages.selectedSummary,
    enableSwipeActions: messages.enableSwipeActions,
    isResourceChannel: messages.isResourceChannel,
    shouldObscureSpoiler: messages.shouldObscureSpoiler,
    shouldDisableInteractiveComponents: messages.shouldDisableInteractiveComponents,
    unloadableContentEntryMessageIds: messages.unloadableContentEntryMessageIds,
    containerWidth: messages.containerWidth,
    chatRef: ref5,
    loadedRef: ref4,
    animatedRef: ref,
    hasMoreMessagesAfterForLastUpdateRef: ref1,
    updateNativeRows,
    isLoadingAtTop,
    channelLatestMessageLoadingStatsManager: tmp16.channelLatestMessageLoadingStatsManager,
    channelId: messages.channelId,
    isMessagesCached: messages.isMessagesCached,
    chatUpdatesQueue,
    shouldJumpToOriginalPost: callback3,
    findMessageIndex,
    scrollToTopMessage,
    useReducedMotion: messages.useReducedMotion
  }));
  const effect = React.useEffect((self) => {
    function syncMessageDisplay() {
      const messages = messages.messages;
      const oldestUnreadMessageId = messages.oldestUnreadMessageId;
      if (messages.isMessagesReady) {
        let obj = {};
        ({ jumpTargetId: obj2.scrollToMessageId, jumpTargetId: obj2.jumpTargetId } = messages);
        obj.jumpType = messages(closure_2[29]).JumpType.INSTANT;
        obj.focusTargetId = messages.focusTargetId;
        obj.hasJumpedToOriginalPost = closure_2;
        tmp(obj);
        if (null != messages.jumpTargetId) {
          obj = {};
          ({ jumpTargetId: obj3.scrollToMessageId, jumpTargetId: obj3.jumpTargetId } = messages);
          obj.jumpType = messages(closure_2[29]).JumpType.INSTANT;
          obj.hasJumpedToOriginalPost = closure_2;
          callback2(obj);
        } else if (null != oldestUnreadMessageId) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => callback({ scrollToMessageId: oldestUnreadMessageId, jumpTargetId: messages.jumpTargetId, jumpType: messages(closure_2[29]).JumpType.INSTANT, hasJumpedToOriginalPost: closure_2 }), 50);
        }
      } else {
        obj = { hasJumpedToOriginalPost: closure_2 };
        tmp(obj);
      }
      callback(messages.channelId, messages.messages);
    }();
    callback3(self.channelId, self.messages);
    return () => {
      callback3("unmount");
    };
  }, []);
  const items3 = [, ];
  ({ channelId: arr4[0], screenIndex: arr4[1] } = messages);
  const effect1 = React.useEffect(() => () => {
    callback(closure_0.channelId, closure_0.screenIndex, false);
  }, items3);
  let closure_28 = React.useRef({ props: messages, shouldForceRender: first1 });
  const layoutEffect = React.useLayoutEffect((self) => {
    let currentMessages;
    let focusTargetId;
    let jumpTargetId;
    let jumpType;
    let minimizeScrolling;
    let prevMessages;
    let scrollToMessageId;
    let scrollToTop;
    let setHasJumpedToOriginalPost;
    let shouldInitialScroll;
    const props = ref.current.props;
    self = props;
    let obj = { props: self, shouldForceRender: first1 };
    ref.current = obj;
    if (null != self.currentUserId) {
      let voiceChannelIdChangedAuthorIds = self;
      const messages2 = self.messages;
      const messages3 = props.messages;
      voiceChannelIdChangedAuthorIds = props.channelId !== self.channelId;
      if (voiceChannelIdChangedAuthorIds) {
        tmp35(false);
      }
      let tmp4 = !voiceChannelIdChangedAuthorIds;
      if (!voiceChannelIdChangedAuthorIds) {
        tmp4 = tmp34;
      }
      const channelId = self.channelId;
      obj = { clearRows, startOrCancelChannelLatestMessagesLoad: closure_15, hasJumpedToOriginalPost: tmp4, firstIgnoredScrollEventTimestampRef: tmp66 };
      if (props.channelId !== channelId) {
        obj.clearRows();
        let obj2 = first(tmp34[14]);
        const result = obj2.clearChannelDimensions(channelId);
        const result1 = obj.startOrCancelChannelLatestMessagesLoad(obj.hasJumpedToOriginalPost);
        obj.firstIgnoredScrollEventTimestampRef.current = undefined;
      }
      let isMessagesAckable = !props.isMessagesAckable;
      if (isMessagesAckable) {
        isMessagesAckable = tmp5.isMessagesAckable;
      }
      if (isMessagesAckable) {
        tmp14.current = false;
      }
      obj = { shouldJumpToOriginalPost: callback3, hasJumpedToOriginalPost: tmp4, scrollToTop: tmp67, prevMessages: messages3, currentMessages: messages2, setHasJumpedToOriginalPost: tmp35 };
      ({ scrollToTop, prevMessages, currentMessages, setHasJumpedToOriginalPost } = obj);
      if (obj.shouldJumpToOriginalPost(obj.hasJumpedToOriginalPost)) {
        scrollToTop(false);
        if (prevMessages.jumpSequenceId === currentMessages.jumpSequenceId) {
          const result2 = setHasJumpedToOriginalPost(true);
        }
      }
      let isMessagesCached = tmp5.isMessagesReady;
      if (isMessagesCached) {
        isMessagesCached = !self.isMessagesCached;
      }
      if (isMessagesCached) {
        isMessagesCached = props.isMessagesCached;
      }
      const tmp24 = self;
      const obj1 = { isAtBottom: tmp57.current, hasPreviousMessages: null != first.getPreviousMessages() };
      const tmp23Result = first(tmp34[32])(self, obj1, props);
      ({ jumpTargetId, focusTargetId } = tmp23Result);
      ({ scrollToMessageId, jumpType, minimizeScrolling, shouldInitialScroll } = tmp23Result);
      let tmp29 = tmp76(props, self);
      let tmp31 = tmp76(props, self) || props.inlineAttachmentMedia !== tmp24.inlineAttachmentMedia || props.inlineEmbedMedia !== tmp24.inlineEmbedMedia || props.renderEmbeds !== tmp24.renderEmbeds || props.renderReactions !== tmp24.renderReactions || props.animateEmoji !== tmp24.animateEmoji || props.animateStickers !== tmp24.animateStickers || props.gifAutoPlay !== tmp24.gifAutoPlay || props.timestampHourCycle !== tmp24.timestampHourCycle || props.containerWidth !== tmp24.containerWidth || props.guildSystemChannelFlags !== tmp24.guildSystemChannelFlags || props.userSettingsLocale !== tmp24.userSettingsLocale || props.roleStyle !== tmp24.roleStyle || props.officialMessageStyle !== tmp24.officialMessageStyle || props.canSendMessages !== tmp24.canSendMessages || props.showPushFeedback !== tmp24.showPushFeedback || props.selectedSummary !== tmp24.selectedSummary || props.shouldObscureSpoiler !== tmp24.shouldObscureSpoiler || props.explicitMediaFalsePositiveInfo !== tmp24.explicitMediaFalsePositiveInfo || props.familyCenterPendingConnection !== tmp24.familyCenterPendingConnection || props.isStaff !== tmp24.isStaff || props.isAgeVerified !== tmp24.isAgeVerified;
      if (!tmp31) {
        tmp31 = voiceChannelIdChangedAuthorIds !== tmp30 && tmp30;
        const tmp32 = voiceChannelIdChangedAuthorIds !== tmp30 && tmp30;
      }
      if (!tmp31) {
        tmp31 = props.displayNameStylesEnabled !== tmp24.displayNameStylesEnabled;
      }
      const first = tmp33;
      const tmp34 = !first(tmp34[33])(props.interactionStates, tmp24.interactionStates);
      const tmp35 = props.channelPolls !== tmp24.channelPolls;
      const first1 = tmp36;
      let callback2 = tmp37;
      let closure_6 = props.shouldDisableInteractiveComponents !== tmp24.shouldDisableInteractiveComponents;
      const channel = tmp24.channel;
      let isForumPostResult = channel.isForumPost();
      if (isForumPostResult) {
        isForumPostResult = props.isFollowingForumPost !== self.isFollowingForumPost;
      }
      const chatUpdatesQueue = tmp45;
      callback2 = tmp46;
      const callback3 = tmp47;
      let tmp48 = props.activityInstanceIds !== self.activityInstanceIds;
      if (!tmp48) {
        tmp48 = props.activityParticipants !== self.activityParticipants;
      }
      if (!tmp48) {
        tmp48 = props.applicationAssetFetchingIds !== self.applicationAssetFetchingIds;
      }
      if (!tmp48) {
        tmp48 = props.activityInstancePresenceDetails !== self.activityInstancePresenceDetails;
      }
      if (!tmp48) {
        tmp48 = props.messagesWithActivitiesLaunching !== self.messagesWithActivitiesLaunching;
      }
      if (!tmp48) {
        tmp48 = tmp47;
      }
      closure_15 = tmp48;
      const tmp14 = tmp56;
      const tmp21 = first;
      const tmp22 = tmp34;
      const tmp23 = first(tmp34[32]);
      const tmp56 = !self(tmp34[33]).areArraysShallowEqual(props.activityInviteMessageIds, self.activityInviteMessageIds);
      const obj6 = self(tmp34[33]);
      let tmp57 = !self(tmp34[33]).areArraysShallowEqual(props.resolvedReferralTrialOfferIds, self.resolvedReferralTrialOfferIds);
      if (!tmp57) {
        tmp57 = props.referralTrialOfferId !== self.referralTrialOfferId;
      }
      if (!tmp57) {
        tmp57 = props.isPremiumTier2User !== self.isPremiumTier2User;
      }
      const tmp61 = props.guildInviteColorsFetched !== self.guildInviteColorsFetched;
      const tmp62 = props.selfActivities !== self.selfActivities;
      const tmp63 = props.currentClientVoiceChannelId !== self.currentClientVoiceChannelId;
      const tmp64 = props.voiceStateChannelIdSummaryForGuild !== self.voiceStateChannelIdSummaryForGuild;
      const tmp66 = props.activityLaunchJoinStates !== self.activityLaunchJoinStates;
      const tmp67 = props.authorizedAppsTokens !== self.authorizedAppsTokens;
      const currentUserDisplayNameStyles = props.currentUserDisplayNameStyles;
      let fontId;
      if (null != currentUserDisplayNameStyles) {
        fontId = currentUserDisplayNameStyles.fontId;
      }
      const currentUserDisplayNameStyles2 = self.currentUserDisplayNameStyles;
      let fontId1;
      if (null != currentUserDisplayNameStyles2) {
        fontId1 = currentUserDisplayNameStyles2.fontId;
      }
      const tmp71 = fontId !== fontId1;
      const obj7 = self(tmp34[33]);
      const tmp75 = !self(tmp34[33]).areArraysShallowEqual(props.fetchingSkuIds, self.fetchingSkuIds);
      const tmp76 = props.voiceInviteDataByChannelId !== self.voiceInviteDataByChannelId;
      if (!tmp31) {
        if (!tmp33) {
          if (props.uploads === tmp24.uploads) {
            if (!tmp48) {
              if (props.messages === self.messages) {
                voiceChannelIdChangedAuthorIds = self;
                if (props.editingMessageId === self.editingMessageId) {
                  voiceChannelIdChangedAuthorIds = self;
                  if (props.replyingMessageId === self.replyingMessageId) {
                    if (!tmp65) {
                      if (props.messageAuthorActivities === self.messageAuthorActivities) {
                        voiceChannelIdChangedAuthorIds = self;
                        if (props.oldestUnreadMessageId === self.oldestUnreadMessageId) {
                          voiceChannelIdChangedAuthorIds = self;
                          if (props.invites === self.invites) {
                            voiceChannelIdChangedAuthorIds = self;
                            if (props.appDirectoryEmbedApplications === self.appDirectoryEmbedApplications) {
                              voiceChannelIdChangedAuthorIds = self;
                              if (props.invalidAppDirectoryEmbedApplicationIds === self.invalidAppDirectoryEmbedApplicationIds) {
                                voiceChannelIdChangedAuthorIds = self;
                                if (props.appDirectoryEmbedApplicationFetchStates === self.appDirectoryEmbedApplicationFetchStates) {
                                  voiceChannelIdChangedAuthorIds = self;
                                  if (props.guildTemplates === self.guildTemplates) {
                                    voiceChannelIdChangedAuthorIds = self;
                                    if (props.buildOverrides === self.buildOverrides) {
                                      voiceChannelIdChangedAuthorIds = self;
                                      if (props.experimentEmbeds === self.experimentEmbeds) {
                                        voiceChannelIdChangedAuthorIds = self;
                                        if (props.quests === self.quests) {
                                          voiceChannelIdChangedAuthorIds = self;
                                          if (props.isFetchingCurrentQuests === self.isFetchingCurrentQuests) {
                                            voiceChannelIdChangedAuthorIds = self;
                                            if (props.participantsLength === self.participantsLength) {
                                              voiceChannelIdChangedAuthorIds = self;
                                              if (props.isMessagesReady === self.isMessagesReady) {
                                                voiceChannelIdChangedAuthorIds = self;
                                                if (props.channelThreadsVersion === self.channelThreadsVersion) {
                                                  voiceChannelIdChangedAuthorIds = self;
                                                  if (props.rsvpVersion === self.rsvpVersion) {
                                                    voiceChannelIdChangedAuthorIds = self;
                                                    if (props.repliedIds === self.repliedIds) {
                                                      voiceChannelIdChangedAuthorIds = self;
                                                      if (props.hasLoadedExperiments === self.hasLoadedExperiments) {
                                                        voiceChannelIdChangedAuthorIds = self;
                                                        if (props.isMessageRequest === self.isMessageRequest) {
                                                          voiceChannelIdChangedAuthorIds = self;
                                                          if (props.isSpamMessageRequest === self.isSpamMessageRequest) {
                                                            voiceChannelIdChangedAuthorIds = self;
                                                            if (props.currentUserCommunicationDisabled === self.currentUserCommunicationDisabled) {
                                                              voiceChannelIdChangedAuthorIds = self;
                                                              if (props.userSettingsLocale === self.userSettingsLocale) {
                                                                voiceChannelIdChangedAuthorIds = self;
                                                                if (props.selectedSummary === self.selectedSummary) {
                                                                  voiceChannelIdChangedAuthorIds = self;
                                                                  if (props.showPushFeedback === self.showPushFeedback) {
                                                                    voiceChannelIdChangedAuthorIds = self;
                                                                    if (props.cacheStoreLoaded === self.cacheStoreLoaded) {
                                                                      if (!tmp63) {
                                                                        if (!tmp38) {
                                                                          if (!tmp39) {
                                                                            if (!tmp40) {
                                                                              if (props.forwardGuildsVersion === tmp24.forwardGuildsVersion) {
                                                                                if (!tmp41) {
                                                                                  if (!tmp34) {
                                                                                    if (!tmp37) {
                                                                                      if (!isForumPostResult) {
                                                                                        if (null == jumpTargetId) {
                                                                                          if (null == focusTargetId) {
                                                                                            voiceChannelIdChangedAuthorIds = self;
                                                                                            if (props.androidKeyboardHeight === self.androidKeyboardHeight) {
                                                                                              voiceChannelIdChangedAuthorIds = self;
                                                                                              if (props.mediaPostPreviewEmbeds === self.mediaPostPreviewEmbeds) {
                                                                                                voiceChannelIdChangedAuthorIds = self;
                                                                                                if (props.shouldObscureSpoiler === self.shouldObscureSpoiler) {
                                                                                                  if (props.shouldDisableInteractiveComponents === self.shouldDisableInteractiveComponents) {
                                                                                                    if (!tmp35) {
                                                                                                      if (!tmp36) {
                                                                                                        if (!tmp45) {
                                                                                                          if (props.threadStartingReferenceMessage === self.threadStartingReferenceMessage) {
                                                                                                            if (!tmp46) {
                                                                                                              if (!tmp56) {
                                                                                                                if (!tmp57) {
                                                                                                                  if (!tmp61) {
                                                                                                                    if (props.guildEmojis === self.guildEmojis) {
                                                                                                                      if (!tmp62) {
                                                                                                                        if (!tmp66) {
                                                                                                                          if (!tmp67) {
                                                                                                                            if (props.displayNameStylesEnabled === self.displayNameStylesEnabled) {
                                                                                                                              if (!tmp71) {
                                                                                                                                if (!tmp64) {
                                                                                                                                  if (!tmp76) {
                                                                                                                                    if (!tmp75) {
                                                                                                                                      tmp66(self.channelId, self.messages);
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const _Set = Set;
      const set = new Set();
      if (props.editingMessageId !== self.editingMessageId) {
        if (null != self.editingMessageId) {
          set.add(self.editingMessageId);
        }
        if (null != props.editingMessageId) {
          set.add(props.editingMessageId);
        }
      }
      if (props.replyingMessageId !== self.replyingMessageId) {
        if (null != self.replyingMessageId) {
          set.add(self.replyingMessageId);
        }
        if (null != props.replyingMessageId) {
          set.add(props.replyingMessageId);
        }
      }
      if (props.isMessagesReady === self.isMessagesReady) {
        if (props.isCallActive === self.isCallActive) {
          if (!tmp65) {
            voiceChannelIdChangedAuthorIds = self;
          }
          voiceChannelIdChangedAuthorIds = self;
          let closure_29 = props.rsvpVersion !== self.rsvpVersion;
          let closure_30 = props.repliedIds !== self.repliedIds;
          let closure_31 = props.hasLoadedExperiments !== self.hasLoadedExperiments;
          const communicationDisabledVersion = props.communicationDisabledVersion;
          let num5 = -1;
          if (null != communicationDisabledVersion) {
            num5 = communicationDisabledVersion;
          }
          const scrollToBottom = num5;
          let cacheStoreLoaded = !props.cacheStoreLoaded;
          if (cacheStoreLoaded) {
            voiceChannelIdChangedAuthorIds = self;
            cacheStoreLoaded = self.cacheStoreLoaded;
          }
          const jumpToPresent = cacheStoreLoaded;
          voiceChannelIdChangedAuthorIds = null;
          if (tmp64) {
            voiceChannelIdChangedAuthorIds = self;
            voiceChannelIdChangedAuthorIds = tmp34;
            const voiceStateChannelIdSummaryForGuild = props.voiceStateChannelIdSummaryForGuild;
            voiceChannelIdChangedAuthorIds = null;
            if (null != voiceStateChannelIdSummaryForGuild) {
              voiceChannelIdChangedAuthorIds = voiceStateChannelIdSummaryForGuild;
            }
            voiceChannelIdChangedAuthorIds = self;
            const voiceStateChannelIdSummaryForGuild2 = self.voiceStateChannelIdSummaryForGuild;
            voiceChannelIdChangedAuthorIds = null;
            if (null != voiceStateChannelIdSummaryForGuild2) {
              voiceChannelIdChangedAuthorIds = voiceStateChannelIdSummaryForGuild2;
            }
            voiceChannelIdChangedAuthorIds = self(tmp34[13]).getVoiceChannelIdChangedAuthorIds(voiceChannelIdChangedAuthorIds, voiceChannelIdChangedAuthorIds);
            const obj11 = self(tmp34[13]);
          }
          const scrollToNewMessages = voiceChannelIdChangedAuthorIds;
          voiceChannelIdChangedAuthorIds = self;
          let messages = self.messages;
          voiceChannelIdChangedAuthorIds = messages.forEach((author) => {
            let code;
            let code2;
            let type;
            let type2;
            if (tmp64) {
              let addResult = voiceChannelIdChangedAuthorIds;
              if (null != voiceChannelIdChangedAuthorIds) {
                if (null != author.author) {
                  if (voiceChannelIdChangedAuthorIds.has(author.author.id)) {
                    addResult = set;
                    addResult = set.add(author.id);
                  }
                }
              }
            }
            if (tmp63) {
              const activity = author.activity;
              type = undefined;
              if (null != activity) {
                type = activity.type;
              }
              if (type === tmp45.STREAM_REQUEST) {
                addResult = set;
                addResult = set.add(author.id);
              }
            }
            if (closure_31) {
              if (author.type === tmp48.USER_JOIN) {
                addResult = set;
                addResult = set.add(author.id);
              }
            }
            if (closure_30) {
              if (author.type === tmp48.REPLY) {
                const messageReference = author.messageReference;
                if (null != messageReference) {
                  const repliedIds = props.repliedIds;
                  if (repliedIds.has(messageReference.message_id)) {
                    addResult = set;
                    addResult = set.add(author.id);
                  }
                }
              }
            }
            if (closure_28) {
              if (author.hasFlag(tmp47.HAS_THREAD)) {
                addResult = set;
                addResult = set.add(author.id);
              }
            }
            if (closure_29) {
              if (author.codedLinks.length > 0) {
                addResult = set;
                addResult = set.add(author.id);
              }
            }
            if (tmp76) {
              if (author.codedLinks.length > 0) {
                addResult = tmp63;
                addResult = tmp63(author.codedLinks);
                const iter5 = addResult();
                addResult = null;
                let iter2 = iter5;
                if (!iter5.done) {
                  while (true) {
                    let tmp12 = props;
                    let tmp13 = tmp34;
                    ({ type, code } = iter2.value);
                    if (type === props(tmp34[34]).CodedLinkType.INVITE) {
                      let tmp14 = props;
                      let invites = props.invites;
                      let value = invites.get(code);
                      let tmp16 = value;
                      if (null != value) {
                        let tmp17 = value;
                        if (null != value.channel) {
                          let tmp18 = props;
                          let tmp19 = tmp34;
                          let obj = props(tmp34[35]);
                          let tmp20 = value;
                          if (obj.isVoiceChannelInvite(value)) {
                            let id = value.channel.id;
                            let tmp21 = props;
                            let tmp22 = props;
                            let tmp23 = value;
                            if (props.voiceInviteDataByChannelId[id] !== props.voiceInviteDataByChannelId[id]) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    let iter = addResult();
                    iter2 = iter;
                  }
                  set.add(author.id);
                }
              }
            }
            if (!tmp41) {
              if (tmp39) {
                if (null != props.guildId) {
                  author = author.author;
                  id = undefined;
                  if (null != author) {
                    id = author.id;
                  }
                  if (null != id) {
                    addResult = props;
                    addResult = props;
                    if (props.messageAuthorMembers[author.author.id] !== props.messageAuthorMembers[author.author.id]) {
                      addResult = set;
                      addResult = set.add(author.id);
                    }
                  }
                }
              }
              if (tmp40) {
                if (author.author.id === props.currentUserId) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (tmp34) {
                if (props.interactionStates[author.id] !== props.interactionStates[author.id]) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (tmp37) {
                const interactionComponentStates = props.interactionComponentStates;
                const interactionComponentStates2 = props.interactionComponentStates;
                value = interactionComponentStates.get(author.id);
                if (value !== interactionComponentStates2.get(author.id)) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (closure_6) {
                if (0 !== author.components.length) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (tmp35) {
                if (props.channelPolls[author.id] !== props.channelPolls[author.id]) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (tmp40) {
                const messageReference2 = author.messageReference;
                let message_id;
                if (null != messageReference2) {
                  message_id = messageReference2.message_id;
                }
                if (null != message_id) {
                  if (props.messageReferencePolls[message_id] !== props.messageReferencePolls[message_id]) {
                    addResult = set;
                    addResult = set.add(author.id);
                  }
                }
              }
              if (tmp35) {
                const unloadedContentEntryMessageIds = props.unloadedContentEntryMessageIds;
                const unloadedContentEntryMessageIds2 = props.unloadedContentEntryMessageIds;
                const hasItem = unloadedContentEntryMessageIds.has(author.id);
                if (hasItem !== unloadedContentEntryMessageIds2.has(author.id)) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              const channel = props.channel;
              if (channel.isForumPost()) {
                if (isForumPostResult) {
                  if (author.id === obj2.castChannelIdAsMessageId(props.channelId)) {
                    addResult = set;
                    addResult = set.add(author.id);
                  }
                  const obj2 = tmp33(tmp34[20]);
                }
              }
              if (tmp48) {
                if (null != author.activityInstance) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              let tmp66 = tmp56;
              if (tmp56) {
                const activity2 = author.activity;
                let party_id;
                if (null != activity2) {
                  party_id = activity2.party_id;
                }
                tmp66 = null != party_id;
              }
              if (tmp66) {
                set.add(author.id);
              }
              if (tmp67) {
                if (null != author.application) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (tmp67) {
                const author2 = author.author;
                let id1;
                if (null != author2) {
                  id1 = author2.id;
                }
                if (id1 === props.currentUserId) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
                const tmp76 = props;
              }
              if (tmp75) {
                if (author.codedLinks.length > 0) {
                  addResult = tmp63;
                  addResult = tmp63(author.codedLinks);
                  const iter6 = addResult();
                  addResult = null;
                  let iter4 = iter6;
                  if (!iter6.done) {
                    while (true) {
                      ({ type: type2, code: code2 } = iter4.value);
                      let tmp79 = props;
                      let tmp80 = tmp34;
                      if (type2 === props(tmp34[34]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                        let tmp83 = tmp36;
                        let first = tmp36(code2.split("-"), 1)[0];
                        let tmp85 = props;
                        let fetchingSkuIds = props.fetchingSkuIds;
                        if (fetchingSkuIds.includes(first)) {
                          break;
                        } else {
                          let tmp86 = tmp41;
                          let value1 = tmp41.get(first);
                          let tmp88 = first;
                          let tmp89 = value1;
                          if (null != value1) {
                            let tmp90 = props;
                            let invalidApplicationIds = props.invalidApplicationIds;
                            let tmp91 = first;
                            let tmp92 = value1;
                            if (invalidApplicationIds.includes(value1.applicationId)) {
                              let tmp93 = set;
                              let addResult3 = set.add(author.id);
                            }
                          }
                        }
                      } else {
                        let tmp81 = props;
                        let tmp82 = tmp34;
                      }
                      let iter3 = addResult();
                      iter4 = iter3;
                    }
                    set.add(author.id);
                  }
                }
              }
              if (null != author.author) {
                addResult = tmp33;
                addResult = tmp34;
                addResult = props;
                addResult = props;
                if (!obj6.messageAuthorActivitiesChanged(author, props, props)) {
                  addResult = props;
                  addResult = props;
                  if (!obj3.codedLinksChanged(author, props, props)) {
                    addResult = tmp33;
                    if (!tmp33) {
                      addResult = tmp33;
                      addResult = tmp34;
                      addResult = props;
                      addResult = props;
                      if (!obj5.mediaPostPreviewEmbedsChanged(author, props, props)) {
                        addResult = cacheStoreLoaded;
                        if (cacheStoreLoaded) {
                          addResult = author.embeds.length > 0;
                        }
                        if (addResult) {
                          addResult = set;
                          addResult = set.add(author.id);
                        }
                        addResult = tmp48;
                        addResult = author.type === tmp48.THREAD_STARTER_MESSAGE;
                        if (addResult) {
                          addResult = props;
                          addResult = props;
                          addResult = props.threadStartingReferenceMessage !== props.threadStartingReferenceMessage;
                        }
                        if (addResult) {
                          addResult = set;
                          addResult = set.add(author.id);
                        }
                        addResult = tmp47;
                        if (tmp47) {
                          addResult = null != author.applicationId;
                        }
                        if (addResult) {
                          addResult = props;
                          const invalidApplicationIds2 = props.invalidApplicationIds;
                          addResult = invalidApplicationIds2.includes(author.applicationId);
                        }
                        if (addResult) {
                          addResult = set;
                          addResult = set.add(author.id);
                        }
                        addResult = tmp57;
                        if (tmp57) {
                          const referralTrialOfferId = author.referralTrialOfferId;
                          addResult = null != referralTrialOfferId;
                          if (addResult) {
                            addResult = props;
                            const resolvedReferralTrialOfferIds = props.resolvedReferralTrialOfferIds;
                            addResult = resolvedReferralTrialOfferIds.includes(referralTrialOfferId);
                          }
                          if (addResult) {
                            addResult = set;
                            addResult = set.add(author.id);
                          }
                        }
                        addResult = tmp61;
                        if (tmp61) {
                          addResult = author.codedLinks.length > 0;
                        }
                        if (addResult) {
                          addResult = set;
                          addResult = set.add(author.id);
                        }
                        addResult = tmp62;
                        if (tmp62) {
                          const activity3 = author.activity;
                          addResult = undefined;
                          if (null != activity3) {
                            addResult = activity3.party_id;
                          }
                          if (null != addResult) {
                            addResult = set;
                            addResult = set.add(author.id);
                          }
                        } else {
                          addResult = tmp66;
                        }
                      }
                      const obj5 = tmp33(tmp34[36]);
                    } else {
                      addResult = tmp33;
                      addResult = tmp34;
                      addResult = props;
                      addResult = props;
                      const obj4 = tmp33(tmp34[36]);
                    }
                  }
                  const obj3 = tmp33(tmp34[36]);
                }
                addResult = set;
                addResult = set.add(author.id);
                const obj6 = tmp33(tmp34[36]);
              }
              const tmp64 = tmp48;
            }
            addResult = set.add(author.id);
          });
          voiceChannelIdChangedAuthorIds = props.channelId !== self.channelId || messages3.suppressRowAnimationSequenceId === messages2.suppressRowAnimationSequenceId;
          obj2 = { forceRender: tmp31 };
          voiceChannelIdChangedAuthorIds = tmp76;
          if (!tmp29) {
            tmp29 = voiceChannelIdChangedAuthorIds;
          }
          obj2.forceReload = tmp29;
          obj2.updateMessageIds = set;
          obj2.scrollToMessageId = scrollToMessageId;
          obj2.jumpTargetId = jumpTargetId;
          obj2.jumpType = jumpType;
          obj2.focusTargetId = focusTargetId;
          obj2.ignoreEmbedDescriptionCache = cacheStoreLoaded;
          obj2.messagesNewlyLoaded = isMessagesCached;
          obj2.shouldInitialScroll = shouldInitialScroll;
          obj2.minimizeScrolling = minimizeScrolling;
          obj2.isAnimated = voiceChannelIdChangedAuthorIds;
          obj2.hasJumpedToOriginalPost = tmp4;
          voiceChannelIdChangedAuthorIds = voiceChannelIdChangedAuthorIds(obj2);
          voiceChannelIdChangedAuthorIds = callback2;
          voiceChannelIdChangedAuthorIds = callback2(false);
          voiceChannelIdChangedAuthorIds = tmp66;
          voiceChannelIdChangedAuthorIds = self;
          voiceChannelIdChangedAuthorIds = tmp66(self.channelId, self.messages);
        }
      }
      voiceChannelIdChangedAuthorIds = first;
      voiceChannelIdChangedAuthorIds = tmp34;
      const obj8 = self(tmp34[33]);
      voiceChannelIdChangedAuthorIds = self;
      messages = self.messages;
      const arr = first(tmp34[19]);
      voiceChannelIdChangedAuthorIds = arr.find(messages.toArray().reverse(), (type) => type.type === tmp48.CALL);
      if (null != voiceChannelIdChangedAuthorIds) {
        voiceChannelIdChangedAuthorIds = set.add(voiceChannelIdChangedAuthorIds.id);
      }
      const toArrayResult = messages.toArray();
    }
  });
  const obj3 = {};
  const items4 = [
    callback2(importDefault(dependencyMap[37]), {
      ref: ref5,
      style: messages.style,
      inverted: true,
      channelId: messages.channelId,
      alwaysRespectKeyboard: messages.alwaysRespectKeyboard,
      onChatScrollPosition: handleScrollPosition,
      onTapImage: first2.handleTapImage,
      onTapChannel: first2.handleTapChannel,
      onLongPressChannel: first2.handleLongPressChannel,
      onTapAttachmentLink: first2.handleTapAttachmentLink,
      onLongPressAttachmentLink: first2.handleLongPressAttachmentLink,
      onTapCall: first2.handleTapCall,
      onTapMention: first2.handleTapMention,
      onTapCommandMention: first2.handleTapCommandMention,
      onLongPressCommandMention: first2.handleLongPressCommandMention,
      onTapGameMention: first2.handleTapGameMention,
      onTapLink: first2.handleTapLink,
      onLongPressLink: first2.handleLongPressLink,
      onTapReaction: first2.handleTapReaction,
      onLongPressReaction: first2.handleLongPressReaction,
      onTapAvatar: first2.handleTapAvatar,
      onTapUsername: first2.handleTapUsername,
      onLongPressUsername: first2.handleLongPressUsername,
      onTapSticker: first2.handleOpenSticker,
      onLongPressSticker: function handleLongPressSticker(nativeEvent) {
        const messageId = nativeEvent(closure_2[38]).getNativeSyntheticEventData(nativeEvent).messageId;
        const current = ref3.current;
        const items = [messageId];
        const set = new Set(items);
        if (null != current) {
          set.add(current);
        }
        let tmp3 = null;
        if (current !== messageId) {
          tmp3 = messageId;
        }
        ref3.current = tmp3;
        callback5({ forceRender: true, updateMessageIds: set });
      },
      onLongPressMessage: first2.handleLongPressMessage,
      onInitiateReply: first2.handleInitiateReply,
      onInitiateEdit: first2.handleInitiateEdit,
      onInitiateThread: first2.handleInitiateThread,
      onTapMessage: first2.handleTapMessage,
      onDoubleTapMessage: first2.handleDoubleTapMessage,
      onTapSeparator: first2.handleTapSeparator,
      onTapInviteEmbed: first2.handleTapInviteEmbed,
      onTapInviteEmbedAccept: first2.handleTapInviteEmbedAccept,
      onTapJoinActivity: first2.handleTapJoinActivity,
      onTapJoinRichPresence: first2.handleTapJoinRichPresence,
      onPressKey: messages.onPressKey,
      animateEmoji: messages.animateEmoji,
      onTapGiftCodeEmbed: first2.handleTapGiftCodeEmbed,
      onTapCancelUploadItem: first2.handleTapCancelUploadItem,
      onTapMessageReply: first2.handleTapReply,
      onTapSummary: first2.handleTapSummary,
      onTapSummaryJump: first2.handleTapSummaryJump,
      onTapGiftCodeAccept: first2.handleTapGiftCodeAccept,
      onTapReferralRedeem: first2.handleTapReferralRedeem,
      onGiftIntentCardViewed: first2.handleGiftIntentCardViewed,
      onTapGiftIntentPrimaryCta: first2.handleTapGiftIntentPrimaryCta,
      onTapGiftIntentSecondaryCta: first2.handleTapGiftIntentSecondaryCta,
      onTapThreadEmbed: first2.handleTapThreadEmbed,
      onTapEmoji: first2.handleTapEmoji,
      onTapTimestamp: first2.handleTapTimestamp,
      onTapInlineCode: first2.handleTapInlineCode,
      onTapRoleIcon: first2.handleTapRoleIcon,
      onTapVoiceChannelBadge: first2.handleTapVoiceChannelBadge,
      onTapGameIcon: first2.handleTapGameIcon,
      onTapSuppressNotificationsIcon: first2.handleTapSuppressNotificationsIcon,
      onTapConnectionsRoleTag: first2.handleTapConnectionsRoleTag,
      onTapTimeoutIcon: first2.handleTapTimeoutIcon,
      onTapButtonActionComponent: first2.handleTapButtonActionComponent,
      onTapSelectActionComponent: first2.handleTapSelectActionComponent,
      onTapWelcomeReply: first2.handleTapWelcomeReply,
      onTapInviteToSpeak: first2.handleTapInviteToSpeak,
      onTapAutoModerationActions: first2.handleTapAutoModerationActions,
      onTapAutoModerationFeedback: first2.handleTapAutoModerationFeedback,
      onTapFollowForumPost: first2.handleTapFollowForumPost,
      onTapShareForumPost: first2.handleTapShareForumPost,
      onTapReactionOverflow: first2.handleTapReactionOverflow,
      onTapNavBar: function handleTapNavBar() {
        return _handleTapNavBar(...arguments);
      },
      onTapCopyText: first2.handleCopyText,
      onTapOpTag: first2.handleTapOpTag,
      onTapTag: first2.handleTapTag,
      onMediaAttachmentPlaybackEnded: first2.handleMediaAttachmentPlaybackEnded,
      onMediaAttachmentPlaybackStarted: first2.handleMediaAttachmentPlaybackStarted,
      onVoiceMessagePlaybackFailed: first2.handleVoiceMessagePlaybackFailed,
      onTapShowAltText: handleTapShowAltText,
      onTapPostPreviewEmbed: first2.handleTapPostPreviewEmbed,
      onTapDismissMediaPostSharePrompt: first2.handleTapDismissMediaPostSharePrompt,
      onTapObscuredMediaLearnMore: first2.handleTapObscuredMediaLearnMore,
      onTapObscuredMediaToggle: first2.onTapObscuredMediaToggle,
      onTapSafetyPolicyNoticeEmbed: first2.handleTapSafetyPolicyNoticeEmbed,
      onTapSafetySystemNotificationCta: first2.handleTapSafetySystemNotificationCta,
      onTapPollAnswer: first2.handleTapPollAnswer,
      onTapPollSubmitVote: first2.handleTapPollSubmitVote,
      onTapPollAction: first2.handleTapPollAction,
      onLongPressPollImage: first2.handleLongPressPollImage,
      onTapCtaButton: first2.handleTapCtaButton,
      onMessageAccessibilityAction: first2.handleMessageAccessibilityAction,
      onTapForwardFooter: first2.handleTapForwardFooter,
      onTapInlineForward: first2.handleTapInlineForward,
      onTapClanTagChiplet: first2.handleTapClanTagChiplet,
      onTapContentInventoryEntryEmbed: first2.handleTapContentInventoryEntryEmbed,
      onTapCheckpointCard: first2.handleTapCheckpointCard,
      onTapSoundmoji: first2.handleTapSoundmoji,
      onTapAppMessageEmbed: first2.handleTapAppMessageEmbed,
      onTapPreviewSharedClientTheme: first2.handleTapPreviewSharedClientTheme,
      onSharedClientThemeViewed: first2.handleSharedClientThemeViewed,
      children: messages.children,
      HACK_fixModalInteraction: messages.HACK_fixModalInteraction,
      onTapTableView: function handleTapTableView(self) {
        let isIOSResult = self(closure_2[39]).isIOS();
        if (isIOSResult) {
          isIOSResult = self.keyboardType !== self(closure_2[40]).KeyboardTypes.SYSTEM;
        }
        if (isIOSResult) {
          const current = self.chatInputRef.current;
          if (null != current) {
            current.closeCustomKeyboard();
          }
        }
      },
      onFirstLayout: function handleFirstLayout(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        handleVisibleMessagesChange({ firstVisibleMessageRowIndex: nativeEvent.firstVisibleMessageIndex, lastVisibleMessageRowIndex: nativeEvent.lastVisibleMessageIndex, firstVisibleMessagePercentVisible: nativeEvent.firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible: nativeEvent.lastVisibleMessagePercentVisible, source: nativeEvent(closure_2[41]).QuestsVisibleMessagesChangedSource.FIRST_LAYOUT });
      },
      onMediaPlayFinishedAnalytics: handleMediaPlayFinishedAnalytics,
      onMessageVisibilityChanged: function handleMessageVisibilityChanged(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        handleVisibleMessagesChange({ firstVisibleMessageRowIndex: nativeEvent.firstVisibleMessageIndex, lastVisibleMessageRowIndex: nativeEvent.lastVisibleMessageIndex, firstVisibleMessagePercentVisible: nativeEvent.firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible: nativeEvent.lastVisibleMessagePercentVisible, source: nativeEvent(closure_2[41]).QuestsVisibleMessagesChangedSource.VISIBILITY_CHANGED });
      }
    }),
    callback2(arg1(dependencyMap[42]).ChatTTITracker, { messages: messages.messages })
  ];
  obj3.children = items4;
  return callback3(closure_18, obj3);
});
forwardRefResult.displayName = "Messages";
const tmp3 = arg1(dependencyMap[10]);
const memoResult = importAllResult.memo(forwardRefResult, (interactionStates, interactionStates2) => {
  const tmp = !importDefault(dependencyMap[33])(interactionStates, interactionStates2, ["STOREFRONT_MARKETING_GUILD_ID_TEST"], { shouldWarnLargeObjects: false });
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = importDefault(dependencyMap[33])(interactionStates.interactionStates, interactionStates2.interactionStates);
  }
  return tmp2;
});
const result = arg1(dependencyMap[43]).fileFinishedImporting("modules/messages/native/MessagesRenderer.tsx");

export default memoResult;
