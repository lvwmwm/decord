// Module ID: 10686
// Function ID: 10687
// Name: MessagesRenderer
// Dependencies: [5, 32, 19, 9383, 2125, 4750, 6035, 6087, 7747, 1085, 21, 9, 10687, 9382, 10677, 9380, 7746, 9599, 10669, 12, 11, 10690, 9171, 9604, 9598, 10692, 7178, 10693, 11619, 5027, 1255, 9601, 11488, 11626, 10676, 568, 5077, 7422, 11627, 11485, 9676, 1382, 1629, 5975, 11628, 2]

// Module 10686 (MessagesRenderer)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import shallowEqualDefault from "shallowEqual" /* 568 */;
import SentryUtilsDefault from "SentryUtils" /* 1255 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import flow_Client from "flow/Client" /* 5027 */;
import CodedLink from "CodedLink" /* 5077 */;
import QuestTypes from "QuestTypes" /* 5975 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7178 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7422 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7747 */;
import QuestActionCreators from "QuestActionCreators" /* 9171 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9382 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9383 */;
import computeScrollData from "computeScrollData" /* 9598 */;
import NativeChatUtilsDefault from "NativeChatUtils" /* 9599 */;
import ChatChangesetUpdateTracker from "ChatChangesetUpdateTracker" /* 9601 */;
import MessageImpressionAnalyticsHelpers from "MessageImpressionAnalyticsHelpers" /* 9604 */;
import MessageDataSnowflakeUtils from "MessageDataSnowflakeUtils" /* 9676 */;
import openMediaModalOverlayAltTextSheetDefault from "openMediaModalOverlayAltTextSheet" /* 10687 */;
import MessagesHandlers from "MessagesHandlers" /* 10693 */;
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 11488 */;
import NavigationTTIDefinition from "NavigationTTIDefinition" /* 11626 */;
import MessagesUtilsDefault from "MessagesUtils" /* 11627 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import ReadStateStore from "ReadStateStore" /* 6035 */;
import SKUStore from "SKUStore" /* 6087 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let _undefined, _undefined2, author, c1, closure_2, closure_25, closure_5, constants, dependencyMap, firstIgnoredScrollEventTimestampRef, invites, onMediaPlayFinishedAnalytics, onTapShowAltText, set, shouldForceRender, startOrCancelChannelLatestMessagesLoad;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let map1;
let tmp;
const KeyboardTypes = tmp(1629);
function handleTapShowAltText(description) {
  openMediaModalOverlayAltTextSheetDefault({ description: description.nativeEvent.description });
}
function handleMediaPlayFinishedAnalytics(nativeEvent) {
  nativeEvent = nativeEvent.nativeEvent;
  const obj = messages_MessagesUtils;
  const result = obj.handleMediaPlayFinishedAnalytics(nativeEvent);
}
function isLoadingAtTop(arg0, arg1) {
  const tmp = arg1;
  if (tmp) {
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (nextResult.changeType === Changeset.INSERT) {
        let tmp9 = nextResult.index <= 1;
        iter.return();
        return tmp9;
      }
    }
    return false;
  } else {
    return false;
  }
}
let react = react_mod;
let closure_6 = useChatBottomManagerUIStore.updateShouldShowJumpToPresentButton;
let closure_7 = GuildMemberStore.getUserCommunicationDisabledVersion;
const Changeset = RowGeneratorConstants.Changeset;
({ ActivityActionTypes: closure_12, MAX_MESSAGES_PER_CHANNEL: map1, MessageFlags: closure_14, MessageTypes: closure_15, Permissions: closure_16 } = Constants);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = Fragment);
class MessagesRenderer {
  constructor(ref) {
    let _undefined3;
    let _undefined4;
    let _undefined5;
    let c15;
    let c18;
    let c19;
    let c2;
    let c20;
    let c21;
    let c22;
    let c23;
    let c24;
    let c25;
    let c26;
    let c3;
    let c33;
    let c34;
    let channelLatestMessageLoadingStatsManager;
    let handleScrollPosition;
    let hasJumpedToOriginalPost;
    let items4;
    let loadMoreAfter;
    let loadMoreBefore;
    let scrollToTopMessage;
    let updateNativeRows;
    const f105685 = (id) => id.id;
    ref = ref.ref;
    const merged = Object.assign(ref, Object.assign({ ref: 0 }));
    dependencyMap = undefined;
    c3 = undefined;
    let first2;
    react = undefined;
    c15 = undefined;
    c18 = undefined;
    c19 = undefined;
    onTapShowAltText = undefined;
    onMediaPlayFinishedAnalytics = undefined;
    isLoadingAtTop = undefined;
    c23 = undefined;
    c24 = undefined;
    c25 = undefined;
    c26 = undefined;
    c33 = undefined;
    c34 = undefined;
    ref = undefined;
    function handleVisibleMessagesChange(arg0) {
      let firstVisibleMessagePercentVisible;
      let firstVisibleMessageRowIndex;
      let lastVisibleMessagePercentVisible;
      let lastVisibleMessageRowIndex;
      let source;
      ({ firstVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessageRowIndex, lastVisibleMessagePercentVisible, source } = arg0);
      const obj = messages_MessagesUtils;
      const obj2 = { firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, chatManager, channelId: merged.channelId };
      const visibleMessages = obj.getVisibleMessages(obj2);
      if (visibleMessages.length > 0) {
        const obj3 = { visibleMessages, source };
        const tmpResult = QuestActionCreators;
        const result = tmpResult.questsVisibleMobileMessagesChanged(obj3);
        const tmpResult5 = MessageImpressionAnalyticsHelpers;
        const result1 = tmpResult5.handleAnnouncementMessageViewTracking(visibleMessages, tmp3.shouldTrackAnnouncementMessageViews, tmp3.guildId, tmp3.channel);
        const tmpResult6 = MessageImpressionAnalyticsHelpers;
        const result2 = tmpResult6.handleOfficialMessageViewTracking(visibleMessages, tmp3.shouldTrackOfficialMessageViews, tmp3.guildId, tmp3.channel);
        const tmpResult7 = MessageImpressionAnalyticsHelpers;
        const result3 = tmpResult7.handleRichPresenceInviteEmbedViewTracking(visibleMessages, tmp3.shouldTrackRichPresenceInviteEmbedViews, tmp3.guildId, tmp3.channel);
        const tmpResult8 = MessageImpressionAnalyticsHelpers;
        const result4 = tmpResult8.handleVoiceInviteEmbedViewTracking(visibleMessages, tmp3.shouldTrackVoiceInviteEmbedViews, tmp3.guildId, tmp3.channel);
      }
    }
    function findMessageIndex(ChatTTITracker) {
      if (null != ChatTTITracker) {
        const obj = computeScrollData;
        return obj.findMessageRowIndex(first.getPreviousRows(), ChatTTITracker);
      }
    }
    let current = function _handleTapNavBar() {
      let obj = _asyncToGenerator(async (arg0, value) => {
        let channel;
        let obj6;
        let useReducedMotion;
        let v1;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: "+51" };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_0 = tmp;
                useReducedMotion = undefined;
                ({ channel, useReducedMotion } = merged);
                if (channel.isForumPost()) {
                  if (!ref2.current) {
                    const obj2 = c1(c2[20]);
                    if (null == callback2(obj2.castChannelIdAsMessageId(channel.id))) {
                      const obj5 = { channelId: channel.id, jump: obj6, limit };
                      obj6 = { messageId: channel.id, flash: false };
                      const tmp10Result = c1(c2[26]);
                      c1 = 1;
                      c2 = 1;
                      const obj7 = { value: tmp10Result.fetchMessages(obj5), done: false };
                      return obj7;
                    } else {
                      const tmp10Result3 = c1(c2[20]);
                      const tmp24 = findMessageIndex(tmp10Result3.castChannelIdAsMessageId(channel.id));
                      if (null == tmp24) {
                        c2 = 3;
                        return { value: "IconComponent", done: "+51" };
                      } else {
                        const obj8 = { animated: !useReducedMotion };
                        const tmp10Result4 = c1(c2[17]);
                        tmp10Result4.scrollTo(ref.current, tmp24, obj8);
                        const _setTimeout2 = setTimeout;
                        const timerId = setTimeout(() => closure_2_25(!closure_1_0), 10 * tmp24);
                      }
                    }
                  }
                }
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const _setTimeout = setTimeout;
              const timerId1 = setTimeout(() => closure_2_25(!closure_1_0), 50);
            }
            c2 = 3;
            return { value: "IconComponent", done: "+51" };
          } catch (tmp18) {
            c2 = 3;
            throw tmp18;
          }
        }
      });
      return obj(...arguments);
    };
    function scrollToBottom() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      const obj = { eventTimestamp: Date.now(), isAtBottom: true };
      _undefined3(obj);
      scrollToBottom = NativeChatUtilsDefault.scrollToBottom;
      current = ref6.current;
      NativeChatUtilsDefault;
      if (flag) {
        flag = !merged.useReducedMotion;
      }
      scrollToBottom(current, flag);
    }
    function jumpToPresent() {
      let channel;
      let messages;
      ({ messages, channel } = merged);
      if (null == messages.jumpReturnTargetId) {
        if (!messages.loadingMore) {
          if (messages.hasMoreAfter) {
            const obj2 = { channelId: channel.id, limit: map1, jump: { present: true } };
            const obj5 = MessageActionCreatorsDefault;
            const messages1 = obj5.fetchMessages(obj2);
          } else {
            const _Date = Date;
            const obj3 = { eventTimestamp: Date.now(), isAtBottom: true };
            _undefined3(obj3);
            const obj4 = NativeChatUtilsDefault;
            obj4.scrollToBottom(ref6.current, !tmp.useReducedMotion);
          }
        }
      } else {
        const obj6 = { channelId: channel.id, messageId: messages.jumpReturnTargetId, flash: true };
        const obj = MessageActionCreatorsDefault;
        obj.jumpToMessage(obj6);
      }
    }
    function scrollToNewMessages() {
      let id = ReadStateStore.ackMessageId(merged.channel.id);
      const obj = { channelId: merged.channel.id, messageId: id, offset: 1, context: "Mark As Read" };
      const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
      MessageActionCreatorsDefault;
      const tmp = merged;
      if (id == null) {
        id = tmp.channel.id;
      }
      jumpToMessage(obj);
    }
    function getChatRef() {
      return ref6;
    }
    function clearRowsState(reason) {
      let obj3;
      let obj4;
      ref1.current = false;
      c18.current = false;
      c20.current = false;
      c19.current = false;
      c21.current = false;
      c22.current = false;
      c23.current = false;
      ref2.current = false;
      ref3.current = [];
      ref5.current = false;
      ref4.current = null;
      size = chatUpdatesQueue.blockers.size;
      const length2 = first.getPreviousRows().length;
      first.clear();
      chatUpdatesQueue.clear();
      const obj = NativeChatUtilsDefault;
      const clearRowsResult = obj.clearRows(ref6.current);
      const tmp4 = SentryUtilsDefault;
      const addBreadcrumb = tmp4.addBreadcrumb;
      const obj2 = { category: "chat.queue.clear", message: "clearRows (" + reason + "): queue=" + chatUpdatesQueue.queue.length + " blockers=" + size + " jsRows=" + length2, data: obj3 };
      obj3 = { reason, changesetUpdateId: obj4.getChangesetIdForChat(ref6.current), queueLength: chatUpdatesQueue.queue.length, blockers: size, chatManagerRows: length2 };
      obj4 = ChatChangesetUpdateTracker;
      addBreadcrumb(obj2);
      return clearRowsResult;
    }
    function clearRows() {
      const tmp = clearRowsState("channel-change");
      if (null != tmp) {
        const obj = NavigationSpanTrackerDefault;
        const result = obj.recordExpectedChangesetForDestination(NavigationTTIDefinition.CHANNEL_NAVIGATION_TTI, merged.channelId, tmp);
      }
      ref1(merged.channelId, merged.screenIndex, false);
    }
    const chatManager = first2(react.useState(() => {
      const tmp = new first(hasJumpedToOriginalPost[15])();
      return tmp;
    }), 1)[0];
    const first1 = first2(react.useState(() => {
      const tmp = new first(hasJumpedToOriginalPost[16])();
      return tmp;
    }), 1)[0];
    let tmp4 = first2(react.useState(false), 2);
    [c2, c3] = tmp4;
    let tmp5 = first2(react.useState(false), 2);
    first2 = tmp5[0];
    react = tmp5[1];
    const ref1 = react.useRef(false);
    const ref2 = react.useRef(false);
    const ref3 = react.useRef([]);
    const ref4 = react.useRef(null);
    const ref5 = react.useRef(false);
    const ref6 = react.useRef(null);
    const callback = react.useCallback((rows) => {
      let HACK_iOSForceAnimations;
      let forceReload;
      let hasMoreMessagesAfter;
      let isAnimated;
      let scrollData;
      ({ rows, hasMoreMessagesAfter, scrollData, HACK_iOSForceAnimations, forceReload, isAnimated } = rows);
      const tmp = isLoadingAtTop(rows.rows, ref2.current);
      const obj = NativeChatUtilsDefault;
      obj.updateRows(ref6.current, { rows, isLoadingAtTop: tmp, scrollData, HACK_iOSForceAnimations, forceReload, isAnimated });
      ref2.current = hasMoreMessagesAfter;
    }, []);
    current = merged(10669);
    const chatUpdatesQueue = current.useChatUpdatesQueue(ref6, callback);
    let items = [, ];
    ({ canChat: arr[0], channel: arr[1] } = merged);
    const items1 = [merged.messages];
    const callback1 = react.useCallback(() => {
      let canChat = merged.canChat && PermissionStore.can(handleVisibleMessagesChange.ADD_REACTIONS, tmp.channel);
      if (!canChat) {
        const channel = tmp.channel;
        canChat = channel.isPrivate();
      }
      return canChat;
    }, items);
    const callback2 = react.useCallback((arg0) => {
      let closure_0 = arg0;
      const messages = merged.messages;
      const arr = _modDef12;
      return arr.find(messages.toArray(), (id) => id.id === closure_0 || id.nonce === closure_0);
    }, items1);
    const items2 = [, , ];
    ({ channel: arr3[0], channelId: arr3[1] } = merged);
    items2[2] = merged.messages.jumpTargetId;
    let callback3 = react.useCallback((arg0) => {
      const channel = merged.channel;
      let isForumPostResult = channel.isForumPost();
      if (isForumPostResult) {
        const obj = SnowflakeUtilsDefault;
        isForumPostResult = obj.castChannelIdAsMessageId(tmp.channelId) === tmp.messages.jumpTargetId;
      }
      if (isForumPostResult) {
        isForumPostResult = !arg0;
      }
      return isForumPostResult;
    }, items2);
    let obj2 = { channelId: merged.channelId, jumpTargetId: merged.messages.jumpTargetId, oldestUnreadMessageId: merged.oldestUnreadMessageId, shouldJumpToOriginalPost: callback3 };
    let tmp18 = chatManager(10690)(obj2);
    ({ startOrCancelLatestMessagesLoad: c15, channelLatestMessageLoadingStatsManager } = tmp18);
    let obj3 = {
      chatRef: ref6,
      chatManager,
      chatUpdatesQueue,
      pendingUpdatesQueueRef: ref3,
      animatedRef: ref1,
      fetchMoreBefore() {
        let id;
        const messages = merged.messages;
        let hasMoreBefore = messages.hasMoreBefore;
        const channelId = merged.channelId;
        if (hasMoreBefore) {
          hasMoreBefore = !messages.loadingMore;
        }
        if (hasMoreBefore) {
          const obj = { channelId, before: id, limit: map1 };
          const fetchMessages = MessageActionCreatorsDefault.fetchMessages;
          MessageActionCreatorsDefault;
          const firstResult = messages.first();
          id = undefined;
          if (firstResult != null) {
            id = firstResult.id;
          }
          const messages1 = fetchMessages(obj);
        }
      },
      fetchMoreAfter() {
        let id;
        const messages = merged.messages;
        let hasMoreAfter = messages.hasMoreAfter;
        const channelId = merged.channelId;
        if (hasMoreAfter) {
          hasMoreAfter = !messages.loadingMore;
        }
        if (hasMoreAfter) {
          const obj = { channelId, after: id, limit: map1 };
          const fetchMessages = MessageActionCreatorsDefault.fetchMessages;
          MessageActionCreatorsDefault;
          const lastResult = messages.last();
          id = undefined;
          if (lastResult != null) {
            id = lastResult.id;
          }
          const messages1 = fetchMessages(obj);
        }
      },
      handleVisibleMessagesChange,
      applyNativeRowsUpdate: callback,
      messages: merged.messages,
      channel: merged.channel,
      channelId: merged.channelId,
      screenIndex: merged.screenIndex,
      onScroll: merged.onScroll,
      useReducedMotion: merged.useReducedMotion,
      isStaff: merged.isStaff,
      visibleMessagesWindowHandler: merged.visibleMessagesWindowHandler
    };
    ({ hasHandledScrollRef: c18, isAtBottomRef: c19, isNearBottomRef: c20, isNearTopRef: c21, deceleratingRef: c22, draggingRef: c23, firstIgnoredScrollEventTimestampRef: c24, scrollToTop: c25, handleScrollCallbacks: c26, loadMoreBefore, loadMoreAfter, scrollToTopMessage, updateNativeRows, handleScrollPosition } = chatManager(10692)(obj3));
    const tmp19 = chatManager(10692)(obj3);
    const ref7 = react.useRef(null);
    ref7.current = { getMessage: callback2, chatInputRef: merged.chatInputRef, selectedChannelId: merged.channelId, revealedMessageId: merged.messages.revealedMessageId, uploads: merged.uploads, paymentsBlocked: merged.paymentsBlocked, loadMoreBefore, loadMoreAfter };
    const first3 = first2(react.useState(() => {
      const messagesHandlers = new MessagesHandlers.MessagesHandlers(() => ref.current);
      return messagesHandlers;
    }), 1)[0];
    const imperativeHandle = react.useImperativeHandle(ref, () => ({ scrollToBottom, jumpToPresent, scrollToNewMessages, getChatRef }));
    let obj4 = { chatManager, rowGenerator: first1, animatingStickerMessageIdRef: ref4, canAddNewReactions: callback1, channel: merged.channel, messages: merged.messages, isMessagesReady: merged.isMessagesReady, uploads: merged.uploads, roleStyle: merged.roleStyle, oldestUnreadMessageId: merged.oldestUnreadMessageId, replyingMessageId: merged.replyingMessageId, inlineAttachmentMedia: merged.inlineAttachmentMedia, inlineEmbedMedia: merged.inlineEmbedMedia, renderEmbeds: merged.renderEmbeds, renderReactions: merged.renderReactions, animateEmoji: merged.animateEmoji, gifAutoPlay: merged.gifAutoPlay, timestampHourCycle: merged.timestampHourCycle, currentUserId: merged.currentUserId, renderCommunicationDisabled: merged.renderCommunicationDisabled, selectedSummary: merged.selectedSummary, selectedConversation: merged.selectedConversation, enableSwipeActions: merged.enableSwipeActions, isResourceChannel: merged.isResourceChannel, shouldObscureSpoiler: merged.shouldObscureSpoiler, shouldDisableInteractiveComponents: merged.shouldDisableInteractiveComponents, unloadableContentEntryMessageIds: merged.unloadableContentEntryMessageIds, containerWidth: merged.containerWidth, chatRef: ref6, loadedRef: ref5, animatedRef: ref1, hasMoreMessagesAfterForLastUpdateRef: ref2, updateNativeRows, isLoadingAtTop, channelLatestMessageLoadingStatsManager, channelId: merged.channelId, isMessagesCached: merged.isMessagesCached, chatUpdatesQueue, shouldJumpToOriginalPost: callback3, findMessageIndex, scrollToTopMessage, useReducedMotion: merged.useReducedMotion };
    let tmp23 = chatManager(11619)(obj4);
    ({ updateRows: c33, scrollToMessageId: c34 } = tmp23);
    const effect = react.useEffect(() => {
      let channelId;
      let channelId2;
      let messages;
      let messages2;
      let messages3;
      messages = messages.messages;
      const oldestUnreadMessageId = messages.oldestUnreadMessageId;
      if (messages.isMessagesReady) {
        ({ jumpTargetId: obj2.scrollToMessageId, jumpTargetId: obj2.jumpTargetId } = messages);
        const obj5 = { scrollToMessageId: null, jumpTargetId: null, jumpType: merged(hasJumpedToOriginalPost[29]).JumpType.INSTANT, focusTargetId: messages.focusTargetId, hasJumpedToOriginalPost };
        _undefined4(obj5);
        const tmp5 = merged;
        const tmp7 = hasJumpedToOriginalPost;
        if (null != messages.jumpTargetId) {
          ({ jumpTargetId: obj3.scrollToMessageId, jumpTargetId: obj3.jumpTargetId } = messages);
          const obj6 = { scrollToMessageId: null, jumpTargetId: null, jumpType: tmp5(hasJumpedToOriginalPost[29]).JumpType.INSTANT, hasJumpedToOriginalPost: tmp7 };
          _undefined5(obj6);
        } else if (null != oldestUnreadMessageId) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const obj = { scrollToMessageId: oldestUnreadMessageId, jumpTargetId: messages.jumpTargetId, jumpType: flow_Client.JumpType.INSTANT, hasJumpedToOriginalPost };
            return c34(obj);
          }, 50);
        }
      } else {
        let obj = { hasJumpedToOriginalPost };
        _undefined4(obj);
      }
      ({ channelId, messages: messages2 } = messages);
      const recordMessageRender = first(hasJumpedToOriginalPost[11]).recordMessageRender;
      first(hasJumpedToOriginalPost[11]);
      const mapped = messages2.map(f105685);
      let hasFetched = messages2.hasFetched;
      if (!hasFetched) {
        hasFetched = messages2.ready && !messages2.cached;
      }
      recordMessageRender(channelId, mapped, hasFetched, messages2.hasMoreAfter);
      ({ channelId: channelId2, messages: messages3 } = messages);
      const recordMessageRender2 = tmp15(hasJumpedToOriginalPost[11]).recordMessageRender;
      first(hasJumpedToOriginalPost[11]);
      const mapped1 = messages3.map(f105685);
      let hasFetched2 = messages3.hasFetched;
      if (!hasFetched2) {
        hasFetched2 = messages3.ready && !messages3.cached;
      }
      recordMessageRender2(channelId2, mapped1, hasFetched2, messages3.hasMoreAfter);
      return () => {
        clearRowsState("unmount");
      };
    }, []);
    const items3 = [, ];
    ({ channelId: arr4[0], screenIndex: arr4[1] } = merged);
    const effect1 = react.useEffect(() => () => {
      ref1(merged.channelId, merged.screenIndex, false);
    }, items3);
    ref = react.useRef({ props: merged, shouldForceRender: first2 });
    const layoutEffect = react.useLayoutEffect(function() {
      let channelId2;
      let channelId3;
      let closure_1;
      let closure_19;
      let closure_24;
      let closure_3;
      let closure_4;
      let first;
      let focusTargetId;
      let jumpTargetId;
      let jumpType;
      let messages;
      let messages3;
      let minimizeScrolling;
      let scrollToMessageId;
      let shouldInitialScroll;
      let tmp;
      const props = ref.current.props;
      current = { props, shouldForceRender };
      const tmp2 = props;
      let tmp3 = shouldForceRender;
      ref.current = current;
      if (null != props.currentUserId) {
        const messages4 = tmp2.messages;
        const messages5 = props.messages;
        let tmp108 = props.channelId !== tmp2.channelId;
        if (tmp108) {
          _undefined(false);
        }
        const channelId = tmp2.channelId;
        let obj2 = { clearRows, startOrCancelChannelLatestMessagesLoad, hasJumpedToOriginalPost: tmp6, firstIgnoredScrollEventTimestampRef };
        let tmp7 = clearRows;
        let tmp9 = firstIgnoredScrollEventTimestampRef;
        if (props.channelId !== channelId) {
          obj2.clearRows();
          let obj3 = first(hasJumpedToOriginalPost[14]);
          const result = obj3.clearChannelDimensions(channelId);
          const result1 = obj2.startOrCancelChannelLatestMessagesLoad(obj2.hasJumpedToOriginalPost);
          obj2.firstIgnoredScrollEventTimestampRef.current = undefined;
        }
        const isMessagesAckable = props.isMessagesAckable;
        let isMessagesAckable2 = !isMessagesAckable;
        let tmp15 = closure_18;
        if (!isMessagesAckable) {
          isMessagesAckable2 = tmp2.isMessagesAckable;
        }
        if (isMessagesAckable2) {
          tmp15.current = false;
        }
        let tmp16 = callback3;
        const tmp17 = closure_25;
        const tmp18 = _undefined;
        if (callback3(!tmp108 && closure_2)) {
          tmp17(false);
          if (messages5.jumpSequenceId === messages4.jumpSequenceId) {
            tmp18(true);
          }
        }
        let tmp21 = tmp2.isMessagesReady && !tmp2.isMessagesCached && props.isMessagesCached;
        let tmp22 = first;
        let tmp23 = hasJumpedToOriginalPost;
        let tmp25 = _undefined2;
        let tmp26 = first;
        const obj4 = { isAtBottom: _undefined2.current, hasPreviousMessages: null != first.getPreviousMessages() };
        let tmp24 = first(hasJumpedToOriginalPost[34]);
        const tmp24Result = tmp24(tmp2, obj4, props);
        ({ jumpTargetId, focusTargetId } = tmp24Result);
        let tmp28 = props.theme !== tmp2.theme;
        ({ scrollToMessageId, jumpType, minimizeScrolling, shouldInitialScroll } = tmp24Result);
        if (!tmp28) {
          tmp28 = props.saturation !== tmp2.saturation;
        }
        let tmp29 = props.theme !== tmp2.theme || props.saturation !== tmp2.saturation || props.inlineAttachmentMedia !== tmp2.inlineAttachmentMedia || props.inlineEmbedMedia !== tmp2.inlineEmbedMedia || props.renderEmbeds !== tmp2.renderEmbeds || props.renderReactions !== tmp2.renderReactions || props.animateEmoji !== tmp2.animateEmoji || props.animateStickers !== tmp2.animateStickers || props.gifAutoPlay !== tmp2.gifAutoPlay || props.timestampHourCycle !== tmp2.timestampHourCycle || props.containerWidth !== tmp2.containerWidth || props.guildSystemChannelFlags !== tmp2.guildSystemChannelFlags || props.userSettingsLocale !== tmp2.userSettingsLocale || props.roleStyle !== tmp2.roleStyle || props.officialMessageStyle !== tmp2.officialMessageStyle || props.canSendMessages !== tmp2.canSendMessages || props.showPushFeedback !== tmp2.showPushFeedback || props.selectedSummary !== tmp2.selectedSummary || props.selectedConversation !== tmp2.selectedConversation || props.shouldObscureSpoiler !== tmp2.shouldObscureSpoiler || props.explicitMediaFalsePositiveInfo !== tmp2.explicitMediaFalsePositiveInfo || props.familyCenterPendingConnection !== tmp2.familyCenterPendingConnection || props.isStaff !== tmp2.isStaff || props.isAgeVerified !== tmp2.isAgeVerified;
        if (!tmp29) {
          let tmp30 = tmp !== tmp3 && tmp3;
          tmp29 = tmp30;
        }
        if (!tmp29) {
          tmp29 = props.displayNameStylesEnabled !== tmp2.displayNameStylesEnabled;
        }
        first = tmp31;
        let tmp32 = first;
        let tmp33 = hasJumpedToOriginalPost;
        const uploads = props.uploads;
        const uploads2 = tmp2.uploads;
        const tmp34 = first(hasJumpedToOriginalPost[35])(props.interactionStates, tmp2.interactionStates);
        closure_2 = !tmp34;
        _undefined = tmp35;
        shouldForceRender = tmp36;
        closure_5 = tmp37;
        closure_6 = props.shouldDisableInteractiveComponents !== tmp2.shouldDisableInteractiveComponents;
        closure_7 = tmp38;
        let closure_8 = tmp39;
        let tmp40 = props.failedMessagesVersion !== tmp2.failedMessagesVersion;
        let closure_9 = tmp40;
        let closure_10 = tmp41;
        let channel = tmp2.channel;
        const forwardGuildsVersion = props.forwardGuildsVersion;
        const forwardGuildsVersion2 = tmp2.forwardGuildsVersion;
        const tmp42 = channel.isForumPost() && props.isFollowingForumPost !== tmp2.isFollowingForumPost;
        let closure_11 = tmp42;
        constants = tmp43;
        let closure_13 = tmp44;
        let tmp45 = props.invalidApplicationIds !== tmp2.invalidApplicationIds;
        callback3 = tmp45;
        const tmp46 = props.activityInstanceIds !== tmp2.activityInstanceIds || props.activityParticipants !== tmp2.activityParticipants || props.applicationAssetFetchingIds !== tmp2.applicationAssetFetchingIds || props.activityInstancePresenceDetails !== tmp2.activityInstancePresenceDetails || props.messagesWithActivitiesLaunching !== tmp2.messagesWithActivitiesLaunching || tmp45;
        startOrCancelChannelLatestMessagesLoad = tmp46;
        let tmp47 = merged;
        let obj5 = merged(hasJumpedToOriginalPost[35]);
        const result2 = obj5.areArraysShallowEqual(props.activityInviteMessageIds, tmp2.activityInviteMessageIds);
        let closure_16 = !result2;
        let obj6 = merged(hasJumpedToOriginalPost[35]);
        const result3 = obj6.areArraysShallowEqual(props.resolvedReferralTrialOfferIds, tmp2.resolvedReferralTrialOfferIds);
        let tmp52 = !result3;
        if (result3) {
          tmp52 = props.referralTrialOfferId !== tmp2.referralTrialOfferId;
        }
        if (!tmp52) {
          tmp52 = props.isPremiumTier2User !== tmp2.isPremiumTier2User;
        }
        let closure_17 = tmp52;
        closure_18 = tmp53;
        _undefined2 = tmp54;
        let closure_20 = tmp55;
        let tmp56 = props.voiceStateChannelIdSummaryForGuild !== tmp2.voiceStateChannelIdSummaryForGuild;
        let closure_21 = tmp56;
        let tmp57 = props.activityLaunchJoinStates !== tmp2.activityLaunchJoinStates;
        let closure_22 = tmp57;
        let closure_23 = tmp58;
        const currentUserDisplayNameStyles = props.currentUserDisplayNameStyles;
        let fontId;
        const guildEmojis = props.guildEmojis;
        const guildEmojis2 = tmp2.guildEmojis;
        const voiceStatePrivateChannelId = props.voiceStatePrivateChannelId;
        const voiceStatePrivateChannelId2 = tmp2.voiceStatePrivateChannelId;
        const displayNameStylesEnabled = props.displayNameStylesEnabled;
        const displayNameStylesEnabled2 = tmp2.displayNameStylesEnabled;
        if (currentUserDisplayNameStyles != null) {
          fontId = currentUserDisplayNameStyles.fontId;
        }
        const currentUserDisplayNameStyles2 = tmp2.currentUserDisplayNameStyles;
        let fontId1;
        if (currentUserDisplayNameStyles2 != null) {
          fontId1 = currentUserDisplayNameStyles2.fontId;
        }
        let tmp61 = voiceStatePrivateChannelId !== voiceStatePrivateChannelId2;
        firstIgnoredScrollEventTimestampRef = tmp62;
        const tmp47Result = tmp47(hasJumpedToOriginalPost[35]);
        const result4 = tmp47Result.areArraysShallowEqual(props.fetchingSkuIds, tmp2.fetchingSkuIds);
        closure_25 = !result4;
        let closure_26 = tmp65;
        if (!tmp29) {
          if (!(props.resolvingGiftCodes !== tmp2.resolvingGiftCodes || props.resolvedGiftCodes !== tmp2.resolvedGiftCodes || props.acceptingGiftCodes !== tmp2.acceptingGiftCodes)) {
            if (uploads === uploads2) {
              if (!tmp46) {
                if (props.messages === tmp2.messages) {
                  if (props.editingMessageId === tmp2.editingMessageId) {
                    if (props.replyingMessageId === tmp2.replyingMessageId) {
                      if (!tmp61) {
                        if (props.messageAuthorActivities === tmp2.messageAuthorActivities) {
                          if (props.oldestUnreadMessageId === tmp2.oldestUnreadMessageId) {
                            if (props.invites === tmp2.invites) {
                              if (props.appDirectoryEmbedApplications === tmp2.appDirectoryEmbedApplications) {
                                if (props.invalidAppDirectoryEmbedApplicationIds === tmp2.invalidAppDirectoryEmbedApplicationIds) {
                                  if (props.appDirectoryEmbedApplicationFetchStates === tmp2.appDirectoryEmbedApplicationFetchStates) {
                                    if (props.guildTemplates === tmp2.guildTemplates) {
                                      if (props.gameOrganizationInvites === tmp2.gameOrganizationInvites) {
                                        if (props.buildOverrides === tmp2.buildOverrides) {
                                          if (props.experimentEmbeds === tmp2.experimentEmbeds) {
                                            if (props.quests === tmp2.quests) {
                                              if (props.isFetchingCurrentQuests === tmp2.isFetchingCurrentQuests) {
                                                if (props.participantsLength === tmp2.participantsLength) {
                                                  if (props.isMessagesReady === tmp2.isMessagesReady) {
                                                    if (props.channelThreadsVersion === tmp2.channelThreadsVersion) {
                                                      if (props.rsvpVersion === tmp2.rsvpVersion) {
                                                        if (props.repliedIds === tmp2.repliedIds) {
                                                          if (props.hasLoadedExperiments === tmp2.hasLoadedExperiments) {
                                                            if (props.isMessageRequest === tmp2.isMessageRequest) {
                                                              if (props.isSpamMessageRequest === tmp2.isSpamMessageRequest) {
                                                                if (props.currentUserCommunicationDisabled === tmp2.currentUserCommunicationDisabled) {
                                                                  if (props.userSettingsLocale === tmp2.userSettingsLocale) {
                                                                    if (props.selectedSummary === tmp2.selectedSummary) {
                                                                      if (props.selectedConversation === tmp2.selectedConversation) {
                                                                        if (props.showPushFeedback === tmp2.showPushFeedback) {
                                                                          if (props.cacheStoreLoaded === tmp2.cacheStoreLoaded) {
                                                                            if (props.currentClientVoiceChannelId === tmp2.currentClientVoiceChannelId) {
                                                                              if (props.communicationDisabledVersion === tmp2.communicationDisabledVersion) {
                                                                                if (props.messageAuthorMembers === tmp2.messageAuthorMembers) {
                                                                                  if (!tmp40) {
                                                                                    if (forwardGuildsVersion === forwardGuildsVersion2) {
                                                                                      if (props.renderCommunicationDisabled === tmp2.renderCommunicationDisabled) {
                                                                                        if (tmp34) {
                                                                                          if (props.interactionComponentStatesVersion === tmp2.interactionComponentStatesVersion) {
                                                                                            if (!tmp42) {
                                                                                              if (null == jumpTargetId) {
                                                                                                if (null == focusTargetId) {
                                                                                                  if (props.androidKeyboardHeight === tmp2.androidKeyboardHeight) {
                                                                                                    if (props.mediaPostPreviewEmbeds === tmp2.mediaPostPreviewEmbeds) {
                                                                                                      if (props.shouldObscureSpoiler === tmp2.shouldObscureSpoiler) {
                                                                                                        if (props.shouldDisableInteractiveComponents === tmp2.shouldDisableInteractiveComponents) {
                                                                                                          if (props.channelPolls === tmp2.channelPolls) {
                                                                                                            if (props.messageReferencePolls === tmp2.messageReferencePolls) {
                                                                                                              if (props.showMediaPostSharePrompt === tmp2.showMediaPostSharePrompt) {
                                                                                                                if (props.threadStartingReferenceMessage === tmp2.threadStartingReferenceMessage) {
                                                                                                                  if (props.unloadedContentEntryMessageIds === tmp2.unloadedContentEntryMessageIds) {
                                                                                                                    if (result2) {
                                                                                                                      if (!tmp52) {
                                                                                                                        if (props.guildInviteColorsFetched === tmp2.guildInviteColorsFetched) {
                                                                                                                          if (guildEmojis === guildEmojis2) {
                                                                                                                            if (props.selfActivities === tmp2.selfActivities) {
                                                                                                                              if (!tmp57) {
                                                                                                                                if (props.authorizedAppsTokens === tmp2.authorizedAppsTokens) {
                                                                                                                                  if (displayNameStylesEnabled === displayNameStylesEnabled2) {
                                                                                                                                    if (fontId === fontId1) {
                                                                                                                                      if (!tmp56) {
                                                                                                                                        if (props.voiceInviteDataByChannelId === tmp2.voiceInviteDataByChannelId) {
                                                                                                                                          if (result4) {
                                                                                                                                            ({ channelId: channelId2, messages } = tmp2);
                                                                                                                                            let tmp67 = hasJumpedToOriginalPost;
                                                                                                                                            const tmp68 = first(hasJumpedToOriginalPost[11]);
                                                                                                                                            const recordMessageRender = tmp68.recordMessageRender;
                                                                                                                                            const mapped = messages.map(f105685);
                                                                                                                                            let hasFetched = messages.hasFetched;
                                                                                                                                            if (!hasFetched) {
                                                                                                                                              hasFetched = messages.ready && !messages.cached;
                                                                                                                                            }
                                                                                                                                            let tmp73 = mapped;
                                                                                                                                            recordMessageRender(channelId2, mapped, hasFetched, messages.hasMoreAfter);
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
          }
        }
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        if (props.editingMessageId !== tmp2.editingMessageId) {
          if (null != tmp2.editingMessageId) {
            set.add(tmp2.editingMessageId);
          }
          if (null != props.editingMessageId) {
            set.add(props.editingMessageId);
          }
        }
        if (props.replyingMessageId !== tmp2.replyingMessageId) {
          if (null != tmp2.replyingMessageId) {
            set.add(tmp2.replyingMessageId);
          }
          if (null != props.replyingMessageId) {
            set.add(props.replyingMessageId);
          }
        }
        if (props.isMessagesReady === tmp2.isMessagesReady) {
          if (props.isCallActive === tmp2.isCallActive) {
            let closure_28 = props.channelThreadsVersion !== tmp2.channelThreadsVersion;
            let closure_29 = props.rsvpVersion !== tmp2.rsvpVersion;
            let closure_30 = props.repliedIds !== tmp2.repliedIds;
            let closure_31 = props.hasLoadedExperiments !== tmp2.hasLoadedExperiments;
            let num = props.communicationDisabledVersion;
            if (num == null) {
              num = -1;
            }
            let closure_33 = tmp86;
            let voiceChannelIdChangedAuthorIds = null;
            if (tmp56) {
              let prop = props.voiceStateChannelIdSummaryForGuild;
              const getVoiceChannelIdChangedAuthorIds = tmp47(hasJumpedToOriginalPost[13]).getVoiceChannelIdChangedAuthorIds;
              tmp47(hasJumpedToOriginalPost[13]);
              if (prop == null) {
                prop = null;
              }
              let prop1 = tmp2.voiceStateChannelIdSummaryForGuild;
              if (prop1 == null) {
                prop1 = null;
              }
              voiceChannelIdChangedAuthorIds = getVoiceChannelIdChangedAuthorIds(prop, prop1);
            }
            const messages1 = tmp2.messages;
            const item = messages1.forEach((author) => {
              let code2;
              let messageAuthorMembers;
              let type;
              const tmp = closure_21;
              if (tmp) {
                const obj = voiceChannelIdChangedAuthorIds;
                if (null != voiceChannelIdChangedAuthorIds) {
                  if (null != author.author) {
                    if (obj.has(author.author.id)) {
                      set.add(author.id);
                    }
                  }
                }
              }
              const tmp3 = closure_20;
              if (tmp3) {
                const activity = author.activity;
                let type1;
                if (activity != null) {
                  type1 = activity.type;
                }
                if (type1 === constants.STREAM_REQUEST) {
                  set.add(author.id);
                }
              }
              const tmp7 = closure_31;
              if (tmp7) {
                if (author.type === constants3.USER_JOIN) {
                  set.add(author.id);
                }
              }
              const tmp9 = closure_30;
              if (tmp9) {
                if (author.type === constants3.REPLY) {
                  const messageReference = author.messageReference;
                  if (null != messageReference) {
                    const repliedIds = merged.repliedIds;
                    if (repliedIds.has(messageReference.message_id)) {
                      set.add(author.id);
                    }
                  }
                }
              }
              const tmp13 = closure_28;
              if (tmp13) {
                if (author.hasFlag(constants2.HAS_THREAD)) {
                  set.add(author.id);
                }
              }
              const tmp15 = closure_29;
              if (tmp15) {
                if (author.codedLinks.length > 0) {
                  set.add(author.id);
                }
              }
              const tmp16 = closure_26;
              if (tmp16) {
                if (author.codedLinks.length > 0) {
                  const codedLinks = author.codedLinks;
                  const iter = codedLinks[Symbol.iterator]();
                  const nextResult = iter.next();
                  while (iter !== undefined) {
                    let code = nextResult.code;
                    if (nextResult.type === CodedLink.CodedLinkType.INVITE) {
                      invites = merged.invites;
                      let value = invites.get(code);
                      let tmp202 = value;
                      if (null != value) {
                        if (null != tmp202.channel) {
                          let obj2 = InviteTypeUtils;
                          if (obj2.isVoiceChannelInvite(tmp202)) {
                            let id = tmp202.channel.id;
                            if (props.voiceInviteDataByChannelId[id] !== merged.voiceInviteDataByChannelId[id]) {
                              let addResult6 = set.add(author.id);
                              iter.return();
                            }
                          }
                        }
                      }
                    }
                    continue;
                  }
                }
              }
              const tmp33 = closure_10;
              if (!tmp33) {
                const tmp40 = closure_8;
                if (tmp40) {
                  if (null != merged.guildId) {
                    const obj3 = messages_MessagesUtils;
                    const messageAuthorMemberUserIds = obj3.getMessageAuthorMemberUserIds(author);
                    if (messageAuthorMemberUserIds.some((item) => props.messageAuthorMembers[item] !== messageAuthorMembers.messageAuthorMembers[item])) {
                      set.add(author.id);
                    }
                  }
                }
                const tmp45 = closure_9;
                if (tmp45) {
                  if (author.author.id === merged.currentUserId) {
                    set.add(author.id);
                  }
                }
                const tmp47 = closure_2;
                if (tmp47) {
                  if (props.interactionStates[author.id] !== merged.interactionStates[author.id]) {
                    set.add(author.id);
                  }
                }
                const tmp51 = closure_5;
                if (tmp51) {
                  const interactionComponentStates = props.interactionComponentStates;
                  const interactionComponentStates2 = merged.interactionComponentStates;
                  const value3 = interactionComponentStates.get(author.id);
                  if (value3 !== interactionComponentStates2.get(author.id)) {
                    set.add(author.id);
                  }
                }
                const tmp56 = closure_6;
                if (tmp56) {
                  if (0 !== author.components.length) {
                    set.add(author.id);
                  }
                }
                const tmp57 = closure_3;
                if (tmp57) {
                  if (props.channelPolls[author.id] !== merged.channelPolls[author.id]) {
                    set.add(author.id);
                  }
                }
                const tmp61 = closure_4;
                if (tmp61) {
                  const messageReference2 = author.messageReference;
                  let message_id;
                  if (messageReference2 != null) {
                    message_id = messageReference2.message_id;
                  }
                  if (null != message_id) {
                    if (props.messageReferencePolls[message_id] !== merged.messageReferencePolls[message_id]) {
                      set.add(author.id);
                    }
                  }
                }
                const tmp67 = closure_13;
                if (tmp67) {
                  const unloadedContentEntryMessageIds = props.unloadedContentEntryMessageIds;
                  const unloadedContentEntryMessageIds2 = merged.unloadedContentEntryMessageIds;
                  const hasItem = unloadedContentEntryMessageIds.has(author.id);
                  if (hasItem !== unloadedContentEntryMessageIds2.has(author.id)) {
                    set.add(author.id);
                  }
                }
                const channel = merged.channel;
                if (channel.isForumPost()) {
                  const tmp73 = closure_11;
                  if (tmp73) {
                    const id2 = author.id;
                    const obj5 = SnowflakeUtilsDefault;
                    if (id2 === obj5.castChannelIdAsMessageId(merged.channelId)) {
                      set.add(author.id);
                    }
                  }
                }
                const tmp78 = constants3;
                if (tmp78) {
                  if (null != author.activityInstance) {
                    set.add(author.id);
                  }
                }
                let tmp80 = closure_16;
                if (tmp80) {
                  const activity2 = author.activity;
                  let party_id;
                  if (activity2 != null) {
                    party_id = activity2.party_id;
                  }
                  tmp80 = null != party_id;
                }
                if (tmp80) {
                  set.add(author.id);
                }
                const tmp85 = closure_23;
                if (tmp85) {
                  if (null != author.application) {
                    set.add(author.id);
                  }
                }
                const tmp87 = closure_24;
                if (tmp87) {
                  author = author.author;
                  let id1;
                  if (author != null) {
                    id1 = author.id;
                  }
                  if (id1 === merged.currentUserId) {
                    set.add(author.id);
                  }
                }
                const tmp91 = closure_25;
                if (tmp91) {
                  if (author.codedLinks.length > 0) {
                    const codedLinks2 = author.codedLinks;
                    const iter2 = codedLinks2[Symbol.iterator]();
                    const nextResult1 = iter2.next();
                    while (iter2 !== undefined) {
                      ({ type, code: code2 } = nextResult1);
                      if (type === CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                        let first = _slicedToArray(code2.split("-"), 1)[0];
                        let fetchingSkuIds = props.fetchingSkuIds;
                        let tmp105 = first;
                        let tmp107 = props;
                        if (fetchingSkuIds.includes(first)) {
                          let addResult20 = set.add(author.id);
                          iter2.return();
                        } else {
                          let value4 = SKUStore.get(tmp105);
                          if (null != value4) {
                            let invalidApplicationIds = tmp107.invalidApplicationIds;
                            if (invalidApplicationIds.includes(tmp111.applicationId)) {
                              let addResult21 = set.add(author.id);
                              iter2.return();
                            }
                          }
                        }
                      }
                      continue;
                    }
                  }
                }
                if (null != author.author) {
                  const obj9 = MessagesUtilsDefault;
                  if (!obj9.messageAuthorActivitiesChanged(author, props, merged)) {
                    const obj6 = MessagesUtilsDefault;
                    if (!obj6.codedLinksChanged(author, props, merged)) {
                      const tmp125 = closure_1;
                      if (!tmp125) {
                        const obj8 = MessagesUtilsDefault;
                        if (!obj8.mediaPostPreviewEmbedsChanged(author, props, merged)) {
                          const tmp134 = closure_33 && author.embeds.length > 0;
                          if (tmp134) {
                            set.add(author.id);
                          }
                          const tmp138 = author.type === constants3.THREAD_STARTER_MESSAGE && tmp208.threadStartingReferenceMessage !== merged.threadStartingReferenceMessage;
                          if (tmp138) {
                            set.add(author.id);
                          }
                          let hasItem1 = constants2 && null != author.applicationId;
                          if (hasItem1) {
                            const invalidApplicationIds2 = tmp207.invalidApplicationIds;
                            hasItem1 = invalidApplicationIds2.includes(author.applicationId);
                          }
                          if (hasItem1) {
                            set.add(author.id);
                          }
                          const tmp146 = closure_17;
                          if (tmp146) {
                            const referralTrialOfferId = author.referralTrialOfferId;
                            let hasItem2 = null != referralTrialOfferId;
                            if (hasItem2) {
                              const resolvedReferralTrialOfferIds = merged.resolvedReferralTrialOfferIds;
                              hasItem2 = resolvedReferralTrialOfferIds.includes(referralTrialOfferId);
                            }
                            if (hasItem2) {
                              set.add(author.id);
                            }
                          }
                          const tmp151 = closure_18 && author.codedLinks.length > 0;
                          if (tmp151) {
                            set.add(author.id);
                          }
                          let tmp154 = closure_19 || closure_22;
                          if (tmp154) {
                            const activity3 = author.activity;
                            let party_id1;
                            if (activity3 != null) {
                              party_id1 = activity3.party_id;
                            }
                            tmp154 = null != party_id1;
                          }
                          if (tmp154) {
                            set.add(author.id);
                          }
                        }
                      } else {
                        MessagesUtilsDefault;
                      }
                    }
                  }
                  set.add(author.id);
                }
              }
              set.add(author.id);
            });
            const obj7 = { forceRender: tmp29, forceReload: tmp28, updateMessageIds: set, scrollToMessageId, jumpTargetId, jumpType, focusTargetId, ignoreEmbedDescriptionCache: tmp86, messagesNewlyLoaded: tmp21, shouldInitialScroll, minimizeScrolling, isAnimated: props.channelId !== tmp2.channelId || messages5.suppressRowAnimationSequenceId === messages4.suppressRowAnimationSequenceId, hasJumpedToOriginalPost: tmp6 };
            const tmp93 = props.channelId !== tmp2.channelId || messages5.suppressRowAnimationSequenceId === messages4.suppressRowAnimationSequenceId;
            const tmp94 = closure_33;
            if (!tmp28) {
              tmp28 = tmp108;
            }
            tmp94(obj7);
            let tmp96 = closure_5;
            let tmp97 = closure_5(false);
            ({ channelId: channelId3, messages: messages3 } = tmp2);
            let tmp98 = first;
            let tmp99 = hasJumpedToOriginalPost;
            let tmp100 = first(hasJumpedToOriginalPost[11]);
            const recordMessageRender2 = tmp100.recordMessageRender;
            const mapped1 = messages3.map(f105685);
            let hasFetched2 = messages3.hasFetched;
            if (!hasFetched2) {
              let tmp102 = messages3.ready && !messages3.cached;
              hasFetched2 = tmp102;
            }
            let tmp103 = tmp100;
            let tmp105 = mapped1;
            let tmp106 = hasFetched2;
            recordMessageRender2(channelId3, mapped1, hasFetched2, messages3.hasMoreAfter);
          }
        }
        const messages2 = tmp2.messages;
        const find = first(hasJumpedToOriginalPost[19]).find;
        first(hasJumpedToOriginalPost[19]);
        const toArrayResult = messages2.toArray();
        const found = find(toArrayResult.reverse(), (type) => type.type === constants.CALL);
        if (null != found) {
          set.add(found.id);
        }
      }
    });
    let obj5 = { children: items4 };
    let obj6 = {
      ref: ref6,
      style: merged.style,
      inverted: true,
      channelId: merged.channelId,
      alwaysRespectKeyboard: merged.alwaysRespectKeyboard,
      onChatScrollPosition: handleScrollPosition,
      onTapImage: first3.handleTapImage,
      onTapChannel: first3.handleTapChannel,
      onLongPressChannel: first3.handleLongPressChannel,
      onTapAttachmentLink: first3.handleTapAttachmentLink,
      onTapAttachmentTextPreview: first3.handleTapAttachmentTextPreview,
      onLongPressAttachmentLink: first3.handleLongPressAttachmentLink,
      onTapCall: first3.handleTapCall,
      onTapMention: first3.handleTapMention,
      onTapCommandMention: first3.handleTapCommandMention,
      onLongPressCommandMention: first3.handleLongPressCommandMention,
      onTapGameMention: first3.handleTapGameMention,
      onTapLink: first3.handleTapLink,
      onLongPressLink: first3.handleLongPressLink,
      onTapReaction: first3.handleTapReaction,
      onLongPressReaction: first3.handleLongPressReaction,
      onTapAvatar: first3.handleTapAvatar,
      onTapUsername: first3.handleTapUsername,
      onLongPressUsername: first3.handleLongPressUsername,
      onTapSticker: first3.handleOpenSticker,
      onLongPressSticker: function handleLongPressSticker(nativeEvent) {
        const obj = MessageDataSnowflakeUtils;
        const messageId = obj.getNativeSyntheticEventData(nativeEvent).messageId;
        current = ref4.current;
        const items = [messageId];
        set = new Set(items);
        const tmp = ref4;
        if (null != current) {
          set.add(current);
        }
        let tmp3 = null;
        if (current !== messageId) {
          tmp3 = messageId;
        }
        tmp.current = tmp3;
        _undefined4({ forceRender: true, updateMessageIds: set });
      },
      onLongPressMessage: first3.handleLongPressMessage,
      onInitiateReply: first3.handleInitiateReply,
      onInitiateEdit: first3.handleInitiateEdit,
      onInitiateThread: first3.handleInitiateThread,
      onTapMessage: first3.handleTapMessage,
      onDoubleTapMessage: first3.handleDoubleTapMessage,
      onTapSeparator: first3.handleTapSeparator,
      onTapInviteEmbed: first3.handleTapInviteEmbed,
      onTapInviteEmbedAccept: first3.handleTapInviteEmbedAccept,
      onTapJoinActivity: first3.handleTapJoinActivity,
      onTapJoinRichPresence: first3.handleTapJoinRichPresence,
      onPressKey: merged.onPressKey,
      animateEmoji: merged.animateEmoji,
      onTapGiftCodeEmbed: first3.handleTapGiftCodeEmbed,
      onTapCancelUploadItem: first3.handleTapCancelUploadItem,
      onTapMessageReply: first3.handleTapReply,
      onTapSummary: first3.handleTapSummary,
      onTapSummaryJump: first3.handleTapSummaryJump,
      onTapConversationHeader: first3.handleTapConversationHeader,
      onTapGiftCodeAccept: first3.handleTapGiftCodeAccept,
      onTapReferralRedeem: first3.handleTapReferralRedeem,
      onGiftIntentCardViewed: first3.handleGiftIntentCardViewed,
      onTapGiftIntentPrimaryCta: first3.handleTapGiftIntentPrimaryCta,
      onTapGiftIntentSecondaryCta: first3.handleTapGiftIntentSecondaryCta,
      onTapThreadEmbed: first3.handleTapThreadEmbed,
      onTapEmoji: first3.handleTapEmoji,
      onTapTimestamp: first3.handleTapTimestamp,
      onTapInlineCode: first3.handleTapInlineCode,
      onTapRoleIcon: first3.handleTapRoleIcon,
      onTapVoiceChannelBadge: first3.handleTapVoiceChannelBadge,
      onTapGameIcon: first3.handleTapGameIcon,
      onTapSuppressNotificationsIcon: first3.handleTapSuppressNotificationsIcon,
      onTapConnectionsRoleTag: first3.handleTapConnectionsRoleTag,
      onTapTimeoutIcon: first3.handleTapTimeoutIcon,
      onTapButtonActionComponent: first3.handleTapButtonActionComponent,
      onTapSelectActionComponent: first3.handleTapSelectActionComponent,
      onTapWelcomeReply: first3.handleTapWelcomeReply,
      onTapInviteToSpeak: first3.handleTapInviteToSpeak,
      onTapAutoModerationActions: first3.handleTapAutoModerationActions,
      onTapAutoModerationFeedback: first3.handleTapAutoModerationFeedback,
      onTapFollowForumPost: first3.handleTapFollowForumPost,
      onTapShareForumPost: first3.handleTapShareForumPost,
      onTapReactionOverflow: first3.handleTapReactionOverflow,
      onTapNavBar: function handleTapNavBar() {
        return obj(...arguments);
      },
      onTapCopyText: first3.handleCopyText,
      onTapOpTag: first3.handleTapOpTag,
      onTapTag: first3.handleTapTag,
      onMediaAttachmentPlaybackEnded: first3.handleMediaAttachmentPlaybackEnded,
      onMediaAttachmentPlaybackStarted: first3.handleMediaAttachmentPlaybackStarted,
      onVoiceMessagePlaybackFailed: first3.handleVoiceMessagePlaybackFailed,
      onTapShowAltText,
      onTapPostPreviewEmbed: first3.handleTapPostPreviewEmbed,
      onTapDismissMediaPostSharePrompt: first3.handleTapDismissMediaPostSharePrompt,
      onTapObscuredMediaLearnMore: first3.handleTapObscuredMediaLearnMore,
      onTapObscuredMediaToggle: first3.onTapObscuredMediaToggle,
      onTapSafetyPolicyNoticeEmbed: first3.handleTapSafetyPolicyNoticeEmbed,
      onTapSafetySystemNotificationCta: first3.handleTapSafetySystemNotificationCta,
      onTapPollAnswer: first3.handleTapPollAnswer,
      onTapPollSubmitVote: first3.handleTapPollSubmitVote,
      onTapPollAction: first3.handleTapPollAction,
      onLongPressPollImage: first3.handleLongPressPollImage,
      onTapCtaButton: first3.handleTapCtaButton,
      onMessageAccessibilityAction: first3.handleMessageAccessibilityAction,
      onTapForwardFooter: first3.handleTapForwardFooter,
      onTapInlineForward: first3.handleTapInlineForward,
      onTapClanTagChiplet: first3.handleTapClanTagChiplet,
      onTapContentInventoryEntryEmbed: first3.handleTapContentInventoryEntryEmbed,
      onTapCheckpointCard: first3.handleTapCheckpointCard,
      onTapSoundmoji: first3.handleTapSoundmoji,
      onTapAppMessageEmbed: first3.handleTapAppMessageEmbed,
      onTapPreviewSharedClientTheme: first3.handleTapPreviewSharedClientTheme,
      onSharedClientThemeViewed: first3.handleSharedClientThemeViewed,
      children: merged.children,
      HACK_fixModalInteraction: merged.HACK_fixModalInteraction,
      onTapTableView: function handleTapTableView() {
        const obj = PlatformUtils;
        let isIOSResult = obj.isIOS();
        if (isIOSResult) {
          isIOSResult = merged.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
        }
        if (isIOSResult) {
          current = merged.chatInputRef.current;
          if (current != null) {
            current.closeCustomKeyboard();
          }
        }
      },
      onFirstLayout: function handleFirstLayout(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const obj = { firstVisibleMessageRowIndex: nativeEvent.firstVisibleMessageIndex, lastVisibleMessageRowIndex: nativeEvent.lastVisibleMessageIndex, firstVisibleMessagePercentVisible: nativeEvent.firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible: nativeEvent.lastVisibleMessagePercentVisible, source: QuestTypes.QuestsVisibleMessagesChangedSource.FIRST_LAYOUT };
        handleVisibleMessagesChange(obj);
      },
      onMediaPlayFinishedAnalytics,
      onMessageVisibilityChanged: function handleMessageVisibilityChanged(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const obj = { firstVisibleMessageRowIndex: nativeEvent.firstVisibleMessageIndex, lastVisibleMessageRowIndex: nativeEvent.lastVisibleMessageIndex, firstVisibleMessagePercentVisible: nativeEvent.firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible: nativeEvent.lastVisibleMessagePercentVisible, source: QuestTypes.QuestsVisibleMessagesChangedSource.VISIBILITY_CHANGED };
        handleVisibleMessagesChange(obj);
      }
    };
    items4 = [findMessageIndex(chatManager(11485), obj6), ];
    let obj7 = { messages: merged.messages };
    items4[1] = findMessageIndex(merged(11628).ChatTTITracker, obj7);
    return c19(c18, obj5);
  }
}
MessagesRenderer.displayName = "Messages";
const memoResult = react.memo(MessagesRenderer, (interactionStates, interactionStates2) => {
  const tmp3 = shallowEqualDefault(interactionStates, interactionStates2, ["interactionStates"], { shouldWarnLargeObjects: false }) && shallowEqualDefault(interactionStates.interactionStates, interactionStates2.interactionStates);
  return tmp3;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/messages/native/MessagesRenderer.tsx");

export default memoResult;
