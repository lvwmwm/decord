// Module ID: 10884
// Function ID: 84480
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 31, 9349, 1917, 3758, 4142, 4175, 7711, 653, 33, 14, 10885, 9348, 9918, 9346, 7710, 9476, 10486, 22, 21, 10888, 9480, 9510, 9475, 10890, 6691, 10891, 11121, 4062, 1184, 9478, 10874, 620, 4119, 6977, 11126, 10055, 9564, 477, 1555, 4979, 11127, 2]

// Module 10884 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import importAllResult from "weakMap";
import { updateShouldShowJumpToPresentButton as closure_6 } from "getChatInputContainerHeight";
import { getUserCommunicationDisabledVersion as closure_7 } from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { Changeset } from "Changeset";
import ME from "ME";
import jsxProd from "shallowEqual";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
  importDefault(14).recordMessageRender(arg0, mapped, hasFetched, arr.hasMoreAfter);
}
function handleTapShowAltText(description) {
  importDefault(10885)({ description: description.nativeEvent.description });
}
function handleMediaPlayFinishedAnalytics(nativeEvent) {
  const result = require(9348) /* _createForOfIteratorHelperLoose */.handleMediaPlayFinishedAnalytics(nativeEvent.nativeEvent);
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
({ ActivityActionTypes: closure_12, MAX_MESSAGES_PER_CHANNEL: closure_13, MessageFlags: closure_14, MessageTypes: closure_15, Permissions: closure_16 } = ME);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
const forwardRefResult = importAllResult.forwardRef((messages) => {
  let _arrayLikeToArray;
  let _createForOfIteratorHelperLoose;
  let closure_16;
  let closure_17;
  let closure_18;
  let closure_19;
  let closure_27;
  let _isNativeReflectConstruct;
  let computeForceReload;
  let dependencyMap;
  let handleMediaPlayFinishedAnalytics;
  let handleScrollPosition;
  let handleTapShowAltText;
  let loadMoreAfter;
  let loadMoreBefore;
  let recordTimings;
  let scrollToTopMessage;
  let updateNativeRows;
  const _require = messages;
  function handleVisibleMessagesChange(arg0) {
    let firstVisibleMessagePercentVisible;
    let firstVisibleMessageRowIndex;
    let lastVisibleMessagePercentVisible;
    let lastVisibleMessageRowIndex;
    let source;
    ({ firstVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessageRowIndex, lastVisibleMessagePercentVisible, source } = arg0);
    let obj = messages(outer1_2[13]);
    obj = { firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, chatManager: first, channelId: messages.channelId };
    const visibleMessages = obj.getVisibleMessages(obj);
    if (visibleMessages.length > 0) {
      obj = { visibleMessages, source };
      const result = messages(outer1_2[22]).questsVisibleMobileMessagesChanged(obj);
      const obj5 = messages(outer1_2[23]);
      const result1 = obj5.handleAnnouncementMessageViewTracking(visibleMessages, messages.shouldTrackAnnouncementMessageViews, messages.guildId, messages.channel);
      const obj6 = messages(outer1_2[23]);
      const result2 = obj6.handleOfficialMessageViewTracking(visibleMessages, messages.shouldTrackOfficialMessageViews, messages.guildId, messages.channel);
      const obj7 = messages(outer1_2[23]);
      const result3 = obj7.handleRichPresenceInviteEmbedViewTracking(visibleMessages, messages.shouldTrackRichPresenceInviteEmbedViews, messages.guildId, messages.channel);
      const obj8 = messages(outer1_2[23]);
      const result4 = obj8.handleVoiceInviteEmbedViewTracking(visibleMessages, messages.shouldTrackVoiceInviteEmbedViews, messages.guildId, messages.channel);
      const obj3 = messages(outer1_2[22]);
    }
  }
  function findMessageIndex(focusTargetId) {
    if (null != focusTargetId) {
      return messages(outer1_2[24]).findMessageRowIndex(first.getPreviousRows(), focusTargetId);
    }
  }
  function _handleTapNavBar() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_3(tmp);
    return obj(...arguments);
  }
  function scrollToBottom() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    callback3({ eventTimestamp: Date.now(), isAtBottom: true });
    const obj = { eventTimestamp: Date.now(), isAtBottom: true };
    if (flag) {
      flag = !messages.useReducedMotion;
    }
    first(outer1_2[17]).scrollToBottom(ref5.current, flag);
  }
  function jumpToPresent() {
    let channel;
    let messages;
    ({ messages, channel } = closure_0);
    if (null == messages.jumpReturnTargetId) {
      if (!messages.loadingMore) {
        if (messages.hasMoreAfter) {
          let obj = { channelId: channel.id, limit: callback2 };
          obj = { present: true };
          obj.jump = obj;
          messages = first(outer1_2[26]).fetchMessages(obj);
          const obj3 = first(outer1_2[26]);
        } else {
          scrollToBottom();
        }
      }
    } else {
      obj = first(outer1_2[26]);
      const obj1 = { channelId: channel.id, messageId: jumpReturnTargetId, flash: true };
      obj.jumpToMessage(obj1);
    }
  }
  function scrollToNewMessages() {
    let id = ref3.ackMessageId(messages.channel.id);
    let obj = first(outer1_2[26]);
    obj = { channelId: messages.channel.id };
    if (null == id) {
      id = messages.channel.id;
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
    let obj = first(outer1_2[17]);
    obj.clearRows(ref5.current);
    obj = { category: "chat.queue.clear", message: "clearRows (" + reason + "): queue=" + length + " blockers=" + size + " jsRows=" + length2 };
    obj = { reason };
    const obj2 = first(outer1_2[30]);
    obj.changesetUpdateId = messages(outer1_2[31]).getChangesetIdForChat(ref5.current);
    obj.queueLength = chatUpdatesQueue.queue.length;
    obj.blockers = size;
    obj.chatManagerRows = length2;
    obj.data = obj;
    obj2.addBreadcrumb(obj);
  }
  function clearRows() {
    clearRowsState("channel-change");
    ref(messages.channelId, messages.screenIndex, false);
  }
  let first = first1(importAllResult.useState(() => {
    let tmp = first(outer1_2[15]);
    tmp = new tmp();
    return tmp;
  }), 1)[0];
  [dependencyMap, _isNativeReflectConstruct] = first1(importAllResult.useState(false), 2);
  let tmp3 = first1(importAllResult.useState(false), 2);
  first1 = tmp3[0];
  const ref = importAllResult.useRef(false);
  const ref1 = importAllResult.useRef(false);
  let ref2 = importAllResult.useRef([]);
  const ref3 = importAllResult.useRef(null);
  const ref4 = importAllResult.useRef(false);
  const ref5 = importAllResult.useRef(null);
  let callback = importAllResult.useCallback((rows) => {
    let HACK_iOSForceAnimations;
    let forceReload;
    let hasMoreMessagesAfter;
    let isAnimated;
    let scrollData;
    ({ rows, hasMoreMessagesAfter, scrollData, HACK_iOSForceAnimations, forceReload, isAnimated } = rows);
    const tmp = ref6(rows.rows, ref1.current);
    first(outer1_2[17]).updateRows(ref5.current, { rows, isLoadingAtTop: tmp, scrollData, HACK_iOSForceAnimations, forceReload, isAnimated });
    ref1.current = hasMoreMessagesAfter;
  }, []);
  let obj = _require(10486);
  let chatUpdatesQueue = obj.useChatUpdatesQueue(ref5, callback);
  let items = [, ];
  ({ canChat: arr[0], channel: arr[1] } = messages);
  const items1 = [messages.messages];
  const callback1 = importAllResult.useCallback(() => {
    let canChat = messages.canChat;
    if (canChat) {
      canChat = ref2.can(outer1_16.ADD_REACTIONS, messages.channel);
    }
    if (!canChat) {
      const channel = messages.channel;
      canChat = channel.isPrivate();
    }
    return canChat;
  }, items);
  let callback2 = importAllResult.useCallback((arg0) => {
    let messages = arg0;
    messages = messages.messages;
    return first(outer1_2[19]).find(messages.toArray(), (id) => {
      let tmp2 = id.id === closure_0;
      if (!tmp2) {
        tmp2 = tmp === closure_0;
      }
      return tmp2;
    });
  }, items1);
  const items2 = [, , ];
  ({ channel: arr3[0], channelId: arr3[1] } = messages);
  items2[2] = messages.messages.jumpTargetId;
  let callback3 = importAllResult.useCallback((arg0) => {
    const channel = messages.channel;
    let isForumPostResult = channel.isForumPost();
    if (isForumPostResult) {
      isForumPostResult = first(outer1_2[20]).castChannelIdAsMessageId(messages.channelId) === messages.messages.jumpTargetId;
      const obj = first(outer1_2[20]);
    }
    if (isForumPostResult) {
      isForumPostResult = !arg0;
    }
    return isForumPostResult;
  }, items2);
  obj = { channelId: messages.channelId, jumpTargetId: messages.messages.jumpTargetId, oldestUnreadMessageId: messages.oldestUnreadMessageId, shouldJumpToOriginalPost: callback3 };
  let tmp16 = first(10888)(obj);
  let closure_15 = tmp16.startOrCancelLatestMessagesLoad;
  obj = {
    chatRef: ref5,
    chatManager: first,
    chatUpdatesQueue,
    pendingUpdatesQueueRef: ref2,
    animatedRef: ref,
    fetchMoreBefore() {
      messages = messages.messages;
      let hasMoreBefore = messages.hasMoreBefore;
      if (hasMoreBefore) {
        hasMoreBefore = !messages.loadingMore;
      }
      if (hasMoreBefore) {
        let id;
        let obj = first(outer1_2[26]);
        obj = { channelId: messages.channelId };
        const firstResult = messages.first();
        if (null != firstResult) {
          id = firstResult.id;
        }
        obj.before = id;
        obj.limit = callback2;
        messages = obj.fetchMessages(obj);
      }
    },
    fetchMoreAfter() {
      messages = messages.messages;
      let hasMoreAfter = messages.hasMoreAfter;
      if (hasMoreAfter) {
        hasMoreAfter = !messages.loadingMore;
      }
      if (hasMoreAfter) {
        let id;
        let obj = first(outer1_2[26]);
        obj = { channelId: messages.channelId };
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
  let tmp2 = first1(importAllResult.useState(false), 2);
  ({ hasHandledScrollRef: closure_16, isAtBottomRef: closure_17, isNearBottomRef: closure_18, isNearTopRef: closure_19, deceleratingRef: _createForOfIteratorHelperLoose, draggingRef: _arrayLikeToArray, firstIgnoredScrollEventTimestampRef: recordTimings, scrollToTop: handleTapShowAltText, handleScrollCallbacks: handleMediaPlayFinishedAnalytics, loadMoreBefore, loadMoreAfter, scrollToTopMessage, updateNativeRows, handleScrollPosition } = first(10890)(obj));
  const ref6 = importAllResult.useRef(null);
  ref6.current = { getMessage: callback2, chatInputRef: messages.chatInputRef, selectedChannelId: messages.channelId, revealedMessageId: messages.messages.revealedMessageId, uploads: messages.uploads, paymentsBlocked: messages.paymentsBlocked, loadMoreBefore, loadMoreAfter };
  const first2 = first1(importAllResult.useState(() => new messages(outer1_2[27]).MessagesHandlers(() => outer1_25.current)), 1)[0];
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({ scrollToBottom, jumpToPresent, scrollToNewMessages, getChatRef }));
  let tmp17 = first(10890)(obj);
  let obj1 = {
    chatManager: first,
    rowGenerator: first1(tmp3[1].useState(() => {
      let tmp = first(outer1_2[16]);
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
    isLoadingAtTop: ref6,
    channelLatestMessageLoadingStatsManager: tmp16.channelLatestMessageLoadingStatsManager,
    channelId: messages.channelId,
    isMessagesCached: messages.isMessagesCached,
    chatUpdatesQueue,
    shouldJumpToOriginalPost: callback3,
    findMessageIndex,
    scrollToTopMessage,
    useReducedMotion: messages.useReducedMotion
  };
  ({ updateRows: computeForceReload, scrollToMessageId: closure_27 } = first(11121)({
    chatManager: first,
    rowGenerator: first1(tmp3[1].useState(() => {
      let tmp = first(outer1_2[16]);
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
    isLoadingAtTop: ref6,
    channelLatestMessageLoadingStatsManager: tmp16.channelLatestMessageLoadingStatsManager,
    channelId: messages.channelId,
    isMessagesCached: messages.isMessagesCached,
    chatUpdatesQueue,
    shouldJumpToOriginalPost: callback3,
    findMessageIndex,
    scrollToTopMessage,
    useReducedMotion: messages.useReducedMotion
  }));
  const effect = importAllResult.useEffect(() => {
    (function syncMessageDisplay() {
      const messages = outer1_0.messages;
      const oldestUnreadMessageId = outer1_0.oldestUnreadMessageId;
      if (outer1_0.isMessagesReady) {
        let obj = {};
        ({ jumpTargetId: obj2.scrollToMessageId, jumpTargetId: obj2.jumpTargetId } = messages);
        obj.jumpType = callback(outer2_2[29]).JumpType.INSTANT;
        obj.focusTargetId = messages.focusTargetId;
        obj.hasJumpedToOriginalPost = outer1_2;
        tmp(obj);
        if (null != messages.jumpTargetId) {
          obj = {};
          ({ jumpTargetId: obj3.scrollToMessageId, jumpTargetId: obj3.jumpTargetId } = messages);
          obj.jumpType = callback(outer2_2[29]).JumpType.INSTANT;
          obj.hasJumpedToOriginalPost = outer1_2;
          outer1_27(obj);
        } else if (null != oldestUnreadMessageId) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => outer2_27({ scrollToMessageId: oldestUnreadMessageId, jumpTargetId: messages.jumpTargetId, jumpType: messages(outer3_2[29]).JumpType.INSTANT, hasJumpedToOriginalPost: outer2_2 }), 50);
        }
      } else {
        obj = { hasJumpedToOriginalPost: outer1_2 };
        tmp(obj);
      }
      outer2_22(outer1_0.channelId, outer1_0.messages);
    })();
    outer1_22(messages.channelId, messages.messages);
    return () => {
      outer1_36("unmount");
    };
  }, []);
  const items3 = [, ];
  ({ channelId: arr4[0], screenIndex: arr4[1] } = messages);
  const effect1 = importAllResult.useEffect(() => () => {
    ref(outer1_0.channelId, outer1_0.screenIndex, false);
  }, items3);
  let closure_28 = importAllResult.useRef({ props: messages, shouldForceRender: first1 });
  const layoutEffect = importAllResult.useLayoutEffect(() => {
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
    const props = ref2.current.props;
    let obj = { props, shouldForceRender: first1 };
    ref2.current = obj;
    if (null != props.currentUserId) {
      let voiceChannelIdChangedAuthorIds = props;
      const messages2 = props.messages;
      const messages3 = props.messages;
      voiceChannelIdChangedAuthorIds = props.channelId !== props.channelId;
      if (voiceChannelIdChangedAuthorIds) {
        callback(false);
      }
      let tmp4 = !voiceChannelIdChangedAuthorIds;
      if (!voiceChannelIdChangedAuthorIds) {
        tmp4 = closure_2;
      }
      const channelId = props.channelId;
      obj = { clearRows, startOrCancelChannelLatestMessagesLoad: closure_15, hasJumpedToOriginalPost: tmp4, firstIgnoredScrollEventTimestampRef: closure_22 };
      if (props.channelId !== channelId) {
        obj.clearRows();
        let obj2 = first(outer1_2[14]);
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
      obj = { shouldJumpToOriginalPost: callback3, hasJumpedToOriginalPost: tmp4, scrollToTop: closure_23, prevMessages: messages3, currentMessages: messages2, setHasJumpedToOriginalPost: callback };
      ({ scrollToTop, prevMessages, currentMessages, setHasJumpedToOriginalPost } = obj);
      if (obj.shouldJumpToOriginalPost(obj.hasJumpedToOriginalPost)) {
        scrollToTop(false);
        if (prevMessages.jumpSequenceId === currentMessages.jumpSequenceId) {
          const result2 = setHasJumpedToOriginalPost(true);
        }
      }
      let isMessagesCached = tmp5.isMessagesReady;
      if (isMessagesCached) {
        isMessagesCached = !props.isMessagesCached;
      }
      if (isMessagesCached) {
        isMessagesCached = props.isMessagesCached;
      }
      const obj1 = { isAtBottom: ref.current, hasPreviousMessages: null != first.getPreviousMessages() };
      const tmp23Result = first(outer1_2[32])(props, obj1, props);
      ({ jumpTargetId, focusTargetId } = tmp23Result);
      ({ scrollToMessageId, jumpType, minimizeScrolling, shouldInitialScroll } = tmp23Result);
      let tmp29 = outer1_26(props, props);
      let tmp31 = outer1_26(props, props) || props.inlineAttachmentMedia !== tmp24.inlineAttachmentMedia || props.inlineEmbedMedia !== tmp24.inlineEmbedMedia || props.renderEmbeds !== tmp24.renderEmbeds || props.renderReactions !== tmp24.renderReactions || props.animateEmoji !== tmp24.animateEmoji || props.animateStickers !== tmp24.animateStickers || props.gifAutoPlay !== tmp24.gifAutoPlay || props.timestampHourCycle !== tmp24.timestampHourCycle || props.containerWidth !== tmp24.containerWidth || props.guildSystemChannelFlags !== tmp24.guildSystemChannelFlags || props.userSettingsLocale !== tmp24.userSettingsLocale || props.roleStyle !== tmp24.roleStyle || props.officialMessageStyle !== tmp24.officialMessageStyle || props.canSendMessages !== tmp24.canSendMessages || props.showPushFeedback !== tmp24.showPushFeedback || props.selectedSummary !== tmp24.selectedSummary || props.shouldObscureSpoiler !== tmp24.shouldObscureSpoiler || props.explicitMediaFalsePositiveInfo !== tmp24.explicitMediaFalsePositiveInfo || props.familyCenterPendingConnection !== tmp24.familyCenterPendingConnection || props.isStaff !== tmp24.isStaff || props.isAgeVerified !== tmp24.isAgeVerified;
      if (!tmp31) {
        tmp31 = voiceChannelIdChangedAuthorIds !== tmp30 && tmp30;
        const tmp32 = voiceChannelIdChangedAuthorIds !== tmp30 && tmp30;
      }
      if (!tmp31) {
        tmp31 = props.displayNameStylesEnabled !== tmp24.displayNameStylesEnabled;
      }
      first = tmp33;
      const tmp34 = !first(outer1_2[33])(props.interactionStates, props.interactionStates);
      closure_2 = tmp34;
      callback = tmp35;
      first1 = tmp36;
      let callback2 = tmp37;
      let closure_6 = props.shouldDisableInteractiveComponents !== tmp24.shouldDisableInteractiveComponents;
      ref2 = tmp39;
      let channel = tmp24.channel;
      let isForumPostResult = channel.isForumPost();
      if (isForumPostResult) {
        isForumPostResult = props.isFollowingForumPost !== props.isFollowingForumPost;
      }
      const chatUpdatesQueue = tmp45;
      callback2 = tmp46;
      callback3 = tmp47;
      let tmp48 = props.activityInstanceIds !== props.activityInstanceIds;
      if (!tmp48) {
        tmp48 = props.activityParticipants !== props.activityParticipants;
      }
      if (!tmp48) {
        tmp48 = props.applicationAssetFetchingIds !== props.applicationAssetFetchingIds;
      }
      if (!tmp48) {
        tmp48 = props.activityInstancePresenceDetails !== props.activityInstancePresenceDetails;
      }
      if (!tmp48) {
        tmp48 = props.messagesWithActivitiesLaunching !== props.messagesWithActivitiesLaunching;
      }
      if (!tmp48) {
        tmp48 = tmp47;
      }
      closure_15 = tmp48;
      tmp14 = closure_16;
      let tmp21 = first;
      let tmp22 = outer1_2;
      let tmp23 = first(outer1_2[32]);
      const tmp56 = !messages(outer1_2[33]).areArraysShallowEqual(props.activityInviteMessageIds, props.activityInviteMessageIds);
      closure_16 = tmp56;
      let obj6 = messages(outer1_2[33]);
      let tmp57 = !messages(outer1_2[33]).areArraysShallowEqual(props.resolvedReferralTrialOfferIds, props.resolvedReferralTrialOfferIds);
      if (!tmp57) {
        tmp57 = props.referralTrialOfferId !== props.referralTrialOfferId;
      }
      if (!tmp57) {
        tmp57 = props.isPremiumTier2User !== props.isPremiumTier2User;
      }
      let closure_18 = tmp61;
      let closure_19 = tmp62;
      let closure_20 = tmp63;
      let closure_21 = tmp64;
      closure_22 = tmp66;
      closure_23 = tmp67;
      const currentUserDisplayNameStyles = props.currentUserDisplayNameStyles;
      let fontId;
      if (null != currentUserDisplayNameStyles) {
        fontId = currentUserDisplayNameStyles.fontId;
      }
      const currentUserDisplayNameStyles2 = props.currentUserDisplayNameStyles;
      let fontId1;
      if (null != currentUserDisplayNameStyles2) {
        fontId1 = currentUserDisplayNameStyles2.fontId;
      }
      let closure_24 = tmp71;
      const obj7 = messages(outer1_2[33]);
      const tmp75 = !messages(outer1_2[33]).areArraysShallowEqual(props.fetchingSkuIds, props.fetchingSkuIds);
      let closure_26 = tmp76;
      if (!tmp31) {
        if (!tmp33) {
          if (props.uploads === tmp24.uploads) {
            if (!tmp48) {
              if (props.messages === props.messages) {
                voiceChannelIdChangedAuthorIds = props;
                if (props.editingMessageId === props.editingMessageId) {
                  voiceChannelIdChangedAuthorIds = props;
                  if (props.replyingMessageId === props.replyingMessageId) {
                    if (!tmp65) {
                      if (props.messageAuthorActivities === props.messageAuthorActivities) {
                        voiceChannelIdChangedAuthorIds = props;
                        if (props.oldestUnreadMessageId === props.oldestUnreadMessageId) {
                          voiceChannelIdChangedAuthorIds = props;
                          if (props.invites === props.invites) {
                            voiceChannelIdChangedAuthorIds = props;
                            if (props.appDirectoryEmbedApplications === props.appDirectoryEmbedApplications) {
                              voiceChannelIdChangedAuthorIds = props;
                              if (props.invalidAppDirectoryEmbedApplicationIds === props.invalidAppDirectoryEmbedApplicationIds) {
                                voiceChannelIdChangedAuthorIds = props;
                                if (props.appDirectoryEmbedApplicationFetchStates === props.appDirectoryEmbedApplicationFetchStates) {
                                  voiceChannelIdChangedAuthorIds = props;
                                  if (props.guildTemplates === props.guildTemplates) {
                                    voiceChannelIdChangedAuthorIds = props;
                                    if (props.buildOverrides === props.buildOverrides) {
                                      voiceChannelIdChangedAuthorIds = props;
                                      if (props.experimentEmbeds === props.experimentEmbeds) {
                                        voiceChannelIdChangedAuthorIds = props;
                                        if (props.quests === props.quests) {
                                          voiceChannelIdChangedAuthorIds = props;
                                          if (props.isFetchingCurrentQuests === props.isFetchingCurrentQuests) {
                                            voiceChannelIdChangedAuthorIds = props;
                                            if (props.participantsLength === props.participantsLength) {
                                              voiceChannelIdChangedAuthorIds = props;
                                              if (props.isMessagesReady === props.isMessagesReady) {
                                                voiceChannelIdChangedAuthorIds = props;
                                                if (props.channelThreadsVersion === props.channelThreadsVersion) {
                                                  voiceChannelIdChangedAuthorIds = props;
                                                  if (props.rsvpVersion === props.rsvpVersion) {
                                                    voiceChannelIdChangedAuthorIds = props;
                                                    if (props.repliedIds === props.repliedIds) {
                                                      voiceChannelIdChangedAuthorIds = props;
                                                      if (props.hasLoadedExperiments === props.hasLoadedExperiments) {
                                                        voiceChannelIdChangedAuthorIds = props;
                                                        if (props.isMessageRequest === props.isMessageRequest) {
                                                          voiceChannelIdChangedAuthorIds = props;
                                                          if (props.isSpamMessageRequest === props.isSpamMessageRequest) {
                                                            voiceChannelIdChangedAuthorIds = props;
                                                            if (props.currentUserCommunicationDisabled === props.currentUserCommunicationDisabled) {
                                                              voiceChannelIdChangedAuthorIds = props;
                                                              if (props.userSettingsLocale === props.userSettingsLocale) {
                                                                voiceChannelIdChangedAuthorIds = props;
                                                                if (props.selectedSummary === props.selectedSummary) {
                                                                  voiceChannelIdChangedAuthorIds = props;
                                                                  if (props.showPushFeedback === props.showPushFeedback) {
                                                                    voiceChannelIdChangedAuthorIds = props;
                                                                    if (props.cacheStoreLoaded === props.cacheStoreLoaded) {
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
                                                                                            voiceChannelIdChangedAuthorIds = props;
                                                                                            if (props.androidKeyboardHeight === props.androidKeyboardHeight) {
                                                                                              voiceChannelIdChangedAuthorIds = props;
                                                                                              if (props.mediaPostPreviewEmbeds === props.mediaPostPreviewEmbeds) {
                                                                                                voiceChannelIdChangedAuthorIds = props;
                                                                                                if (props.shouldObscureSpoiler === props.shouldObscureSpoiler) {
                                                                                                  if (props.shouldDisableInteractiveComponents === props.shouldDisableInteractiveComponents) {
                                                                                                    if (!tmp35) {
                                                                                                      if (!tmp36) {
                                                                                                        if (!tmp45) {
                                                                                                          if (props.threadStartingReferenceMessage === props.threadStartingReferenceMessage) {
                                                                                                            if (!tmp46) {
                                                                                                              if (!tmp56) {
                                                                                                                if (!tmp57) {
                                                                                                                  if (!tmp61) {
                                                                                                                    if (props.guildEmojis === props.guildEmojis) {
                                                                                                                      if (!tmp62) {
                                                                                                                        if (!tmp66) {
                                                                                                                          if (!tmp67) {
                                                                                                                            if (props.displayNameStylesEnabled === props.displayNameStylesEnabled) {
                                                                                                                              if (!tmp71) {
                                                                                                                                if (!tmp64) {
                                                                                                                                  if (!tmp76) {
                                                                                                                                    if (!tmp75) {
                                                                                                                                      outer1_22(props.channelId, props.messages);
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
      if (props.editingMessageId !== props.editingMessageId) {
        if (null != props.editingMessageId) {
          set.add(props.editingMessageId);
        }
        if (null != props.editingMessageId) {
          set.add(props.editingMessageId);
        }
      }
      if (props.replyingMessageId !== props.replyingMessageId) {
        if (null != props.replyingMessageId) {
          set.add(props.replyingMessageId);
        }
        if (null != props.replyingMessageId) {
          set.add(props.replyingMessageId);
        }
      }
      if (props.isMessagesReady === props.isMessagesReady) {
        if (props.isCallActive === props.isCallActive) {
          if (!tmp65) {
            voiceChannelIdChangedAuthorIds = props;
          }
          voiceChannelIdChangedAuthorIds = props;
          ref2 = props.channelThreadsVersion !== props.channelThreadsVersion;
          let closure_29 = props.rsvpVersion !== props.rsvpVersion;
          let closure_30 = props.repliedIds !== props.repliedIds;
          let closure_31 = props.hasLoadedExperiments !== props.hasLoadedExperiments;
          const communicationDisabledVersion = props.communicationDisabledVersion;
          let num5 = -1;
          if (null != communicationDisabledVersion) {
            num5 = communicationDisabledVersion;
          }
          let cacheStoreLoaded = !props.cacheStoreLoaded;
          if (cacheStoreLoaded) {
            voiceChannelIdChangedAuthorIds = props;
            cacheStoreLoaded = props.cacheStoreLoaded;
          }
          voiceChannelIdChangedAuthorIds = null;
          if (tmp64) {
            voiceChannelIdChangedAuthorIds = messages;
            voiceChannelIdChangedAuthorIds = outer1_2;
            const voiceStateChannelIdSummaryForGuild = props.voiceStateChannelIdSummaryForGuild;
            voiceChannelIdChangedAuthorIds = null;
            if (null != voiceStateChannelIdSummaryForGuild) {
              voiceChannelIdChangedAuthorIds = voiceStateChannelIdSummaryForGuild;
            }
            voiceChannelIdChangedAuthorIds = props;
            const voiceStateChannelIdSummaryForGuild2 = props.voiceStateChannelIdSummaryForGuild;
            voiceChannelIdChangedAuthorIds = null;
            if (null != voiceStateChannelIdSummaryForGuild2) {
              voiceChannelIdChangedAuthorIds = voiceStateChannelIdSummaryForGuild2;
            }
            voiceChannelIdChangedAuthorIds = messages(outer1_2[13]).getVoiceChannelIdChangedAuthorIds(voiceChannelIdChangedAuthorIds, voiceChannelIdChangedAuthorIds);
            const obj11 = messages(outer1_2[13]);
          }
          voiceChannelIdChangedAuthorIds = props;
          messages = props.messages;
          voiceChannelIdChangedAuthorIds = messages.forEach((author) => {
            let code;
            let code2;
            let first;
            let type;
            let type2;
            if (closure_21) {
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
            if (closure_20) {
              const activity = author.activity;
              type = undefined;
              if (null != activity) {
                type = activity.type;
              }
              if (type === chatUpdatesQueue.STREAM_REQUEST) {
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
              if (author.hasFlag(callback3.HAS_THREAD)) {
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
            if (closure_26) {
              if (author.codedLinks.length > 0) {
                addResult = outer2_20;
                addResult = outer2_20(author.codedLinks);
                const iter5 = addResult();
                addResult = null;
                let iter2 = iter5;
                if (!iter5.done) {
                  while (true) {
                    let tmp12 = props;
                    let tmp13 = outer2_2;
                    ({ type, code } = iter2.value);
                    if (type === props(outer2_2[34]).CodedLinkType.INVITE) {
                      let tmp14 = props;
                      let invites = props.invites;
                      let value = invites.get(code);
                      let tmp16 = value;
                      if (null != value) {
                        let tmp17 = value;
                        if (null != value.channel) {
                          let tmp18 = props;
                          let tmp19 = outer2_2;
                          let obj = props(outer2_2[35]);
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
            if (!closure_10) {
              if (closure_8) {
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
              if (closure_9) {
                if (author.author.id === props.currentUserId) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (closure_2) {
                if (props.interactionStates[author.id] !== props.interactionStates[author.id]) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (closure_5) {
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
              if (_isNativeReflectConstruct) {
                if (props.channelPolls[author.id] !== props.channelPolls[author.id]) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (_slicedToArray) {
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
              if (closure_13) {
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
                if (closure_11) {
                  if (author.id === obj2.castChannelIdAsMessageId(props.channelId)) {
                    addResult = set;
                    addResult = set.add(author.id);
                  }
                  obj2 = first(outer2_2[20]);
                }
              }
              if (tmp48) {
                if (null != author.activityInstance) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              let tmp66 = closure_16;
              if (closure_16) {
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
              if (closure_23) {
                if (null != author.application) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (closure_24) {
                const author2 = author.author;
                let id1;
                if (null != author2) {
                  id1 = author2.id;
                }
                if (id1 === props.currentUserId) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (closure_25) {
                if (author.codedLinks.length > 0) {
                  addResult = outer2_20;
                  addResult = outer2_20(author.codedLinks);
                  const iter6 = addResult();
                  addResult = null;
                  let iter4 = iter6;
                  if (!iter6.done) {
                    while (true) {
                      ({ type: type2, code: code2 } = iter4.value);
                      let tmp79 = props;
                      let tmp80 = outer2_2;
                      if (type2 === props(outer2_2[34]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                        let tmp83 = first1;
                        first = first1(code2.split("-"), 1)[0];
                        let tmp85 = props;
                        let fetchingSkuIds = props.fetchingSkuIds;
                        if (fetchingSkuIds.includes(first)) {
                          break;
                        } else {
                          let tmp86 = ref4;
                          let value1 = ref4.get(first);
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
                        let tmp82 = outer2_2;
                      }
                      let iter3 = addResult();
                      iter4 = iter3;
                    }
                    set.add(author.id);
                  }
                }
              }
              if (null != author.author) {
                addResult = first;
                addResult = outer2_2;
                addResult = props;
                addResult = props;
                if (!obj6.messageAuthorActivitiesChanged(author, props, props)) {
                  addResult = props;
                  addResult = props;
                  if (!obj3.codedLinksChanged(author, props, props)) {
                    addResult = closure_1;
                    if (!closure_1) {
                      addResult = first;
                      addResult = outer2_2;
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
                        addResult = closure_14;
                        if (closure_14) {
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
                        addResult = closure_17;
                        if (closure_17) {
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
                        addResult = closure_18;
                        if (closure_18) {
                          addResult = author.codedLinks.length > 0;
                        }
                        if (addResult) {
                          addResult = set;
                          addResult = set.add(author.id);
                        }
                        addResult = closure_19;
                        if (closure_19) {
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
                          addResult = closure_22;
                        }
                      }
                      obj5 = first(outer2_2[36]);
                    } else {
                      addResult = first;
                      addResult = outer2_2;
                      addResult = props;
                      addResult = props;
                      const obj4 = first(outer2_2[36]);
                    }
                  }
                  obj3 = first(outer2_2[36]);
                }
                addResult = set;
                addResult = set.add(author.id);
                obj6 = first(outer2_2[36]);
              }
            }
            addResult = set.add(author.id);
          });
          voiceChannelIdChangedAuthorIds = props.channelId !== props.channelId || messages3.suppressRowAnimationSequenceId === messages2.suppressRowAnimationSequenceId;
          obj2 = { forceRender: tmp31 };
          voiceChannelIdChangedAuthorIds = closure_26;
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
          voiceChannelIdChangedAuthorIds = outer1_22;
          voiceChannelIdChangedAuthorIds = props;
          voiceChannelIdChangedAuthorIds = outer1_22(props.channelId, props.messages);
        }
      }
      voiceChannelIdChangedAuthorIds = first;
      voiceChannelIdChangedAuthorIds = outer1_2;
      const obj8 = messages(outer1_2[33]);
      voiceChannelIdChangedAuthorIds = props;
      messages = props.messages;
      const arr = first(outer1_2[19]);
      voiceChannelIdChangedAuthorIds = arr.find(messages.toArray().reverse(), (type) => type.type === tmp48.CALL);
      if (null != voiceChannelIdChangedAuthorIds) {
        voiceChannelIdChangedAuthorIds = set.add(voiceChannelIdChangedAuthorIds.id);
      }
      const toArrayResult = messages.toArray();
    }
  });
  let obj3 = {};
  const items4 = [
    callback(first(10055), {
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
        const messageId = messages(outer1_2[38]).getNativeSyntheticEventData(nativeEvent).messageId;
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
        callback4({ forceRender: true, updateMessageIds: set });
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
      onTapTableView: function handleTapTableView() {
        let isIOSResult = messages(outer1_2[39]).isIOS();
        if (isIOSResult) {
          isIOSResult = messages.keyboardType !== messages(outer1_2[40]).KeyboardTypes.SYSTEM;
        }
        if (isIOSResult) {
          const current = messages.chatInputRef.current;
          if (null != current) {
            current.closeCustomKeyboard();
          }
        }
      },
      onFirstLayout: function handleFirstLayout(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        handleVisibleMessagesChange({ firstVisibleMessageRowIndex: nativeEvent.firstVisibleMessageIndex, lastVisibleMessageRowIndex: nativeEvent.lastVisibleMessageIndex, firstVisibleMessagePercentVisible: nativeEvent.firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible: nativeEvent.lastVisibleMessagePercentVisible, source: messages(outer1_2[41]).QuestsVisibleMessagesChangedSource.FIRST_LAYOUT });
      },
      onMediaPlayFinishedAnalytics: handleMediaPlayFinishedAnalytics,
      onMessageVisibilityChanged: function handleMessageVisibilityChanged(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        handleVisibleMessagesChange({ firstVisibleMessageRowIndex: nativeEvent.firstVisibleMessageIndex, lastVisibleMessageRowIndex: nativeEvent.lastVisibleMessageIndex, firstVisibleMessagePercentVisible: nativeEvent.firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible: nativeEvent.lastVisibleMessagePercentVisible, source: messages(outer1_2[41]).QuestsVisibleMessagesChangedSource.VISIBILITY_CHANGED });
      }
    }),
    callback(_require(11127).ChatTTITracker, { messages: messages.messages })
  ];
  obj3.children = items4;
  return callback2(closure_18, obj3);
});
forwardRefResult.displayName = "Messages";
const memoResult = importAllResult.memo(forwardRefResult, (interactionStates, interactionStates2) => {
  const tmp = !importDefault(620)(interactionStates, interactionStates2, ["interactionStates"], { shouldWarnLargeObjects: false });
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = importDefault(620)(interactionStates.interactionStates, interactionStates2.interactionStates);
  }
  return tmp2;
});
let result = require("result").fileFinishedImporting("modules/messages/native/MessagesRenderer.tsx");

export default memoResult;
