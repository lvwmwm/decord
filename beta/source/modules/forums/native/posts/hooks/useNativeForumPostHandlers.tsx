// Module ID: 10031
// Function ID: 10032
// Name: useNativeForumPostHandlers
// Dependencies: [19, 4561, 2051, 4519, 1377, 6780, 6811, 1085, 1125, 558, 576, 7259, 38, 5043, 5812, 1371, 7540, 7518, 7933, 1369, 4855, 4856, 7263, 4901, 4745, 10032, 9855, 9854, 2]

// Module 10031 (useNativeForumPostHandlers)
import _modDef38 from "module_38" /* 38 */;
import ThreadConstants from "ThreadConstants" /* 1125 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ChatInputUtils from "ChatInputUtils" /* 4745 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4856 */;
import transitionToChannel from "transitionToChannel" /* 4901 */;
import useChannelName from "useChannelName" /* 5043 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5812 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7259 */;
import tracking_Tracking from "tracking/Tracking" /* 7263 */;
import openMediaModal from "openMediaModal" /* 7933 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9854 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 9855 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4561 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 6780 */;
import ForumPostRecentMessageStore from "ForumPostRecentMessageStore" /* 6811 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let src, threadId;

let closure_12;
let closure_14;
let map1;
let tmp2;
let unpackModuleId;
const showLongPressForumPostActionSheetDefault = tmp2(10032);
({ AnalyticsObjectTypes: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1, EMPTY_STRING_SNOWFLAKE_ID: closure_14 } = Constants);
const constants4 = ThreadConstants.OpenThreadAnalyticsLocations;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((threadId) => {
  let tmp12;
  let tmp4;
  let tmp6;
  let tmp = threadId;
  let tmp2 = dependencyMap;
  let obj = threadId(576);
  const cResult = obj.c(27);
  threadId = threadId.threadId;
  let NORMAL = threadId.reactionType;
  if (undefined === NORMAL) {
    NORMAL = tmp(7259).ReactionTypes.NORMAL;
  }
  if (cResult[0] !== threadId) {
    const fn = function h(containerRef) {
      let closure_129_0;
      let initialIndex;
      let mediaItems;
      ({ messageId: closure_129_0, mediaItems, initialIndex } = containerRef);
      let num = 0;
      containerRef = containerRef.containerRef;
      if (undefined !== initialIndex) {
        num = initialIndex;
      }
      const channel = ChannelStore.getChannel(threadId);
      _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
      let obj = useChannelName;
      const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, false);
      const obj2 = utils_ChannelUtils;
      const channelIcon = obj2.getChannelIcon(channel);
      const mapped = mediaItems.map((src) => {
        let str1;
        let tmp17;
        let tmp18;
        src = src.src;
        const srcIsAnimated = src.srcIsAnimated;
        const obj = NORMAL(closure_2_3[15]);
        const str = obj.toURLSafe(src);
        let tmp = null != str;
        if (srcIsAnimated) {
          if (tmp) {
            const str6 = str.pathname;
            const formatted = str6.toLowerCase();
            let endsWithResult = formatted.endsWith(".webp");
            if (!endsWithResult) {
              const str8 = str.pathname;
              const formatted1 = str8.toLowerCase();
              endsWithResult = formatted1.endsWith(".avif");
            }
            tmp = endsWithResult;
          }
          if (tmp) {
            let isAttachmentPathUrlResult = src.type === threadId(closure_2_3[16]).ForumPostMediaTypes.ATTACHMENT;
            const tmp6 = threadId;
            if (isAttachmentPathUrlResult) {
              const obj5 = closure_2_2(closure_2_3[17]);
              isAttachmentPathUrlResult = obj5.isAttachmentPathUrl(str);
            }
            if (!isAttachmentPathUrlResult) {
              let result = src.type === tmp6(closure_2_3[16]).ForumPostMediaTypes.EMBED;
              if (result) {
                const obj6 = closure_2_2(closure_2_3[17]);
                result = obj6.isExternalProxiedAttachmentUrl(str);
              }
              isAttachmentPathUrlResult = result;
            }
            tmp = isAttachmentPathUrlResult;
          }
          str1 = src;
          if (tmp) {
            const searchParams2 = str.searchParams;
            const result1 = searchParams2.set("animated", "true");
            const str12 = str.pathname;
            const formatted2 = str12.toLowerCase();
            if (formatted2.endsWith(".avif")) {
              const searchParams3 = str.searchParams;
              const result2 = searchParams3.set("format", "webp");
            }
            str1 = str.toString();
          }
        } else {
          let endsWithResult1 = tmp;
          if (endsWithResult1) {
            const str2 = str.pathname;
            const formatted3 = str2.toLowerCase();
            endsWithResult1 = formatted3.endsWith(".avif");
          }
          str1 = src;
          if (endsWithResult1) {
            const searchParams = str.searchParams;
            const result3 = searchParams.set("format", "webp");
            str1 = str.toString();
          }
        }
        size = { uri: str1, guildId: channel.guild_id, messageId: tmp18, channelId: tmp17.id, mediaIndex: null, width: null, height: null, accessoryType: null, attachmentId: null };
        tmp18 = closure_1_0;
        tmp17 = channel;
        if (closure_1_0 == null) {
          tmp18 = closure_2_14;
        }
        ({ mediaIndex: obj8.mediaIndex, width: obj8.width, height: obj8.height, type: obj8.accessoryType, attachmentId: obj8.attachmentId } = src);
        return size;
      });
      const obj3 = openMediaModal;
      const obj4 = { initialIndex: num, initialSources: mapped, channelId: channel.id, contextName: channelName, contextIcon: channelIcon, originViewOrOriginLayout: containerRef.current };
      obj3.openMediaModal(obj4);
    };
    let num = 0;
    cResult[0] = threadId;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== threadId) {
    class F {
      constructor() {
        let obj3;
        const obj = PlatformUtils;
        if (obj.isAndroid()) {
          const tmpResult = HapticUtils;
          const result = tmpResult.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        }
        const channel = ChannelStore.getChannel(threadId);
        _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
        const channel1 = ChannelStore.getChannel(channel.parent_id);
        _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
        const obj2 = { guildId: channel1.guild_id, channelId: channel1.id, postId: threadId, location: obj3 };
        obj3 = { page: constants.GUILD_CHANNEL, section: map1.FORUM_CHANNEL_POST };
        const tmpResult3 = tracking_Tracking;
        const result1 = tmpResult3.trackForumPostClicked(obj2);
        const obj4 = { source: constants.FORUM, navigationReplace: false };
        const tmpResult4 = transitionToChannel;
        tmpResult4.transitionToThread(channel, obj4);
      }
    }
    cResult[2] = threadId;
    cResult[3] = F;
  } else {
    class F {
      constructor() {
        let obj3;
        const obj = PlatformUtils;
        if (obj.isAndroid()) {
          const tmpResult = HapticUtils;
          const result = tmpResult.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        }
        const channel = ChannelStore.getChannel(threadId);
        _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
        const channel1 = ChannelStore.getChannel(channel.parent_id);
        _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
        const obj2 = { guildId: channel1.guild_id, channelId: channel1.id, postId: threadId, location: obj3 };
        obj3 = { page: constants.GUILD_CHANNEL, section: map1.FORUM_CHANNEL_POST };
        const tmpResult3 = tracking_Tracking;
        const result1 = tmpResult3.trackForumPostClicked(obj2);
        const obj4 = { source: constants.FORUM, navigationReplace: false };
        const tmpResult4 = transitionToChannel;
        tmpResult4.transitionToThread(channel, obj4);
      }
    }
  }
  F = tmp5;
  if (cResult[4] === tmp5) {
    let tmp8;
    class F {
      constructor() {
        let obj3;
        const obj = PlatformUtils;
        if (obj.isAndroid()) {
          const tmpResult = HapticUtils;
          const result = tmpResult.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        }
        const channel = ChannelStore.getChannel(threadId);
        _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
        const channel1 = ChannelStore.getChannel(channel.parent_id);
        _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
        const obj2 = { guildId: channel1.guild_id, channelId: channel1.id, postId: threadId, location: obj3 };
        obj3 = { page: constants.GUILD_CHANNEL, section: map1.FORUM_CHANNEL_POST };
        const tmpResult3 = tracking_Tracking;
        const result1 = tmpResult3.trackForumPostClicked(obj2);
        const obj4 = { source: constants.FORUM, navigationReplace: false };
        const tmpResult4 = transitionToChannel;
        tmpResult4.transitionToThread(channel, obj4);
      }
    }
    if (cResult[7] !== threadId) {
      class L {
        constructor() {
          const channel = ChannelStore.getChannel(threadId);
          _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
          const channel1 = ChannelStore.getChannel(channel.parent_id);
          _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
          const tmp6 = _modDef38;
          tmp6(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
          let tmp8 = null != ActionSheetStore.getContent();
          if (!tmp8) {
            tmp8 = null == UserStore.getUser(channel.ownerId);
          }
          if (!tmp8) {
            const obj2 = ChatInputUtils;
            obj2.dismissKeyboard();
            showLongPressForumPostActionSheetDefault(channel, channel1);
          }
        }
      }
      cResult[7] = threadId;
      cResult[8] = L;
    } else {
      class L {
        constructor() {
          const channel = ChannelStore.getChannel(threadId);
          _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
          const channel1 = ChannelStore.getChannel(channel.parent_id);
          _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
          const tmp6 = _modDef38;
          tmp6(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
          let tmp8 = null != ActionSheetStore.getContent();
          if (!tmp8) {
            tmp8 = null == UserStore.getUser(channel.ownerId);
          }
          if (!tmp8) {
            const obj2 = ChatInputUtils;
            obj2.dismissKeyboard();
            showLongPressForumPostActionSheetDefault(channel, channel1);
          }
        }
      }
    }
    if (cResult[9] !== threadId) {
      class L {
        constructor() {
          const channel = ChannelStore.getChannel(threadId);
          _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
          const channel1 = ChannelStore.getChannel(channel.parent_id);
          _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
          const tmp6 = _modDef38;
          tmp6(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
          let tmp8 = null != ActionSheetStore.getContent();
          if (!tmp8) {
            tmp8 = null == UserStore.getUser(channel.ownerId);
          }
          if (!tmp8) {
            const obj2 = ChatInputUtils;
            obj2.dismissKeyboard();
            showLongPressForumPostActionSheetDefault(channel, channel1);
          }
        }
      }
      cResult[9] = threadId;
      cResult[10] = tmp9;
      tmp8 = tmp9;
    } else {
      class L {
        constructor() {
          const channel = ChannelStore.getChannel(threadId);
          _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
          const channel1 = ChannelStore.getChannel(channel.parent_id);
          _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
          const tmp6 = _modDef38;
          tmp6(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
          let tmp8 = null != ActionSheetStore.getContent();
          if (!tmp8) {
            tmp8 = null == UserStore.getUser(channel.ownerId);
          }
          if (!tmp8) {
            const obj2 = ChatInputUtils;
            obj2.dismissKeyboard();
            showLongPressForumPostActionSheetDefault(channel, channel1);
          }
        }
      }
    }
    if (cResult[11] !== threadId) {
      class N {
        constructor(emoji) {
          const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
          _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
          const obj = reactions_ReactionUtils;
          const obj2 = { messageId: firstMessage.id, channelId: threadId, emoji: emoji.emoji, reactions: firstMessage.reactions };
          obj.handleViewReactions(obj2);
        }
      }
      cResult[11] = threadId;
      cResult[12] = N;
    } else {
      class N {
        constructor(emoji) {
          const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
          _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
          const obj = reactions_ReactionUtils;
          const obj2 = { messageId: firstMessage.id, channelId: threadId, emoji: emoji.emoji, reactions: firstMessage.reactions };
          obj.handleViewReactions(obj2);
        }
      }
    }
    if (cResult[13] !== threadId) {
      class U {
        constructor() {
          const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
          _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
          const obj = reactions_ReactionUtils;
          const obj2 = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
          obj.handleViewReactions(obj2);
        }
      }
      cResult[13] = threadId;
      cResult[14] = U;
    } else {
      class U {
        constructor() {
          const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
          _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
          const obj = reactions_ReactionUtils;
          const obj2 = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
          obj.handleViewReactions(obj2);
        }
      }
    }
    if (cResult[15] === NORMAL) {
      class U {
        constructor() {
          const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
          _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
          const obj = reactions_ReactionUtils;
          const obj2 = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
          obj.handleViewReactions(obj2);
        }
      }
      if (cResult[18] === tmp7) {
        class U {
          constructor() {
            const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
            _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
            const obj = reactions_ReactionUtils;
            const obj2 = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
            obj.handleViewReactions(obj2);
          }
        }
      }
      let obj2 = { onTapMedia: tmp4, onTapPost: tmp5, onLongTapPost: tmp7, onTapReaction: tmp8, onLongTapReaction: tmp10, onTapReactionCount: tmp11, onTapAddReaction: tmp12, onTapMostRecentMessage: tmp6 };
      cResult[18] = tmp7;
      cResult[19] = tmp10;
      class H {
        constructor() {
          let obj5;
          const channel = ChannelStore.getChannel(threadId);
          _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
          const channel1 = ChannelStore.getChannel(channel.parent_id);
          _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
          const messageState = ForumPostRecentMessageStore.getMessageState(threadId);
          const message = messageState.message;
          const tmp = threadId;
          if (messageState.loaded) {
            if (null != message) {
              const obj3 = { guildId: null, channelId: null, postId: tmp, location: obj5 };
              ({ guild_id: obj2.guildId, id: obj2.channelId } = channel1);
              obj5 = { page: constants.GUILD_CHANNEL, section: map1.FORUM_CHANNEL_POST };
              const obj = tracking_Tracking;
              const result = obj.trackForumPostClicked(obj3);
              const obj8 = { source: constants.FORUM, navigationReplace: false };
              const obj4 = transitionToChannel;
              const result1 = obj4.transitionToThreadMessage(channel, message.id, obj8);
            }
          }
          F();
        }
      }
      cResult[21] = tmp4;
      cResult[22] = tmp6;
      cResult[23] = tmp5;
      cResult[24] = tmp8;
      cResult[25] = tmp11;
      cResult[26] = obj2;
    }
    const fn2 = function k() {
      const channel = ChannelStore.getChannel(threadId);
      _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
      const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
      _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
      const obj = messages_MessagesUtils;
      const result = obj.handleAddOrRemoveReaction(firstMessage.id, channel, null, NORMAL === MessageReactionsTypes.ReactionTypes.BURST);
    };
    cResult[15] = NORMAL;
    cResult[16] = threadId;
    cResult[17] = fn2;
    tmp12 = fn2;
  }
  class H {
    constructor() {
      let obj5;
      const channel = ChannelStore.getChannel(threadId);
      _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
      const channel1 = ChannelStore.getChannel(channel.parent_id);
      _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
      const messageState = ForumPostRecentMessageStore.getMessageState(threadId);
      const message = messageState.message;
      const tmp = threadId;
      if (messageState.loaded) {
        if (null != message) {
          const obj3 = { guildId: null, channelId: null, postId: tmp, location: obj5 };
          ({ guild_id: obj2.guildId, id: obj2.channelId } = channel1);
          obj5 = { page: constants.GUILD_CHANNEL, section: map1.FORUM_CHANNEL_POST };
          const obj = tracking_Tracking;
          const result = obj.trackForumPostClicked(obj3);
          const obj8 = { source: constants.FORUM, navigationReplace: false };
          const obj4 = transitionToChannel;
          const result1 = obj4.transitionToThreadMessage(channel, message.id, obj8);
        }
      }
      F();
    }
  }
  cResult[4] = tmp5;
  cResult[5] = threadId;
  cResult[6] = H;
  tmp6 = H;
}) : ((threadId) => {
  threadId = threadId.threadId;
  let NORMAL = threadId.reactionType;
  if (NORMAL === undefined) {
    let tmp = threadId;
    let tmp2 = dependencyMap;
    NORMAL = threadId(7259).ReactionTypes.NORMAL;
  }
  const items = [threadId];
  const items1 = [threadId];
  const callback = react.useCallback((containerRef) => {
    let closure_129_0;
    let initialIndex;
    let mediaItems;
    ({ messageId: closure_129_0, mediaItems, initialIndex } = containerRef);
    containerRef = containerRef.containerRef;
    if (initialIndex === undefined) {
      initialIndex = 0;
    }
    const channel = ChannelStore.getChannel(threadId);
    _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    let obj = useChannelName;
    const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, false);
    const obj2 = utils_ChannelUtils;
    const channelIcon = obj2.getChannelIcon(channel);
    const mapped = mediaItems.map((src) => {
      let str1;
      let tmp17;
      let tmp18;
      src = src.src;
      const srcIsAnimated = src.srcIsAnimated;
      const obj = NORMAL(closure_2_3[15]);
      const str = obj.toURLSafe(src);
      let tmp = null != str;
      if (srcIsAnimated) {
        if (tmp) {
          const str6 = str.pathname;
          const formatted = str6.toLowerCase();
          let endsWithResult = formatted.endsWith(".webp");
          if (!endsWithResult) {
            const str8 = str.pathname;
            const formatted1 = str8.toLowerCase();
            endsWithResult = formatted1.endsWith(".avif");
          }
          tmp = endsWithResult;
        }
        if (tmp) {
          let isAttachmentPathUrlResult = src.type === threadId(closure_2_3[16]).ForumPostMediaTypes.ATTACHMENT;
          const tmp6 = threadId;
          if (isAttachmentPathUrlResult) {
            const obj5 = callback1(closure_2_3[17]);
            isAttachmentPathUrlResult = obj5.isAttachmentPathUrl(str);
          }
          if (!isAttachmentPathUrlResult) {
            let result = src.type === tmp6(closure_2_3[16]).ForumPostMediaTypes.EMBED;
            if (result) {
              const obj6 = callback1(closure_2_3[17]);
              result = obj6.isExternalProxiedAttachmentUrl(str);
            }
            isAttachmentPathUrlResult = result;
          }
          tmp = isAttachmentPathUrlResult;
        }
        str1 = src;
        if (tmp) {
          const searchParams2 = str.searchParams;
          const result1 = searchParams2.set("animated", "true");
          const str12 = str.pathname;
          const formatted2 = str12.toLowerCase();
          if (formatted2.endsWith(".avif")) {
            const searchParams3 = str.searchParams;
            const result2 = searchParams3.set("format", "webp");
          }
          str1 = str.toString();
        }
      } else {
        let endsWithResult1 = tmp;
        if (endsWithResult1) {
          const str2 = str.pathname;
          const formatted3 = str2.toLowerCase();
          endsWithResult1 = formatted3.endsWith(".avif");
        }
        str1 = src;
        if (endsWithResult1) {
          const searchParams = str.searchParams;
          const result3 = searchParams.set("format", "webp");
          str1 = str.toString();
        }
      }
      size = { uri: str1, guildId: channel.guild_id, messageId: tmp18, channelId: tmp17.id, mediaIndex: null, width: null, height: null, accessoryType: null, attachmentId: null };
      tmp18 = closure_1_0;
      tmp17 = channel;
      if (closure_1_0 == null) {
        tmp18 = closure_2_14;
      }
      ({ mediaIndex: obj8.mediaIndex, width: obj8.width, height: obj8.height, type: obj8.accessoryType, attachmentId: obj8.attachmentId } = src);
      return size;
    });
    const obj3 = openMediaModal;
    const obj4 = { initialIndex, initialSources: mapped, channelId: channel.id, contextName: channelName, contextIcon: channelIcon, originViewOrOriginLayout: containerRef.current };
    obj3.openMediaModal(obj4);
  }, items);
  const callback1 = react.useCallback(() => {
    let obj3;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const tmpResult = HapticUtils;
      const result = tmpResult.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    }
    const channel = ChannelStore.getChannel(threadId);
    _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channel1 = ChannelStore.getChannel(channel.parent_id);
    _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
    const obj2 = { guildId: channel1.guild_id, channelId: channel1.id, postId: threadId, location: obj3 };
    obj3 = { page: constants.GUILD_CHANNEL, section: map1.FORUM_CHANNEL_POST };
    const tmpResult3 = tracking_Tracking;
    const result1 = tmpResult3.trackForumPostClicked(obj2);
    const obj4 = { source: constants.FORUM, navigationReplace: false };
    const tmpResult4 = transitionToChannel;
    tmpResult4.transitionToThread(channel, obj4);
  }, items1);
  const items2 = [callback1, threadId];
  const items3 = [threadId];
  const callback2 = react.useCallback(() => {
    let obj5;
    const channel = ChannelStore.getChannel(threadId);
    _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channel1 = ChannelStore.getChannel(channel.parent_id);
    _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
    const messageState = ForumPostRecentMessageStore.getMessageState(threadId);
    const message = messageState.message;
    const tmp = threadId;
    if (messageState.loaded) {
      if (null != message) {
        const obj3 = { guildId: null, channelId: null, postId: tmp, location: obj5 };
        ({ guild_id: obj2.guildId, id: obj2.channelId } = channel1);
        obj5 = { page: constants.GUILD_CHANNEL, section: map1.FORUM_CHANNEL_POST };
        const obj = tracking_Tracking;
        const result = obj.trackForumPostClicked(obj3);
        const obj8 = { source: constants.FORUM, navigationReplace: false };
        const obj4 = transitionToChannel;
        const result1 = obj4.transitionToThreadMessage(channel, message.id, obj8);
      }
    }
    callback1();
  }, items2);
  const items4 = [threadId];
  const callback3 = react.useCallback(() => {
    const channel = ChannelStore.getChannel(threadId);
    _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channel1 = ChannelStore.getChannel(channel.parent_id);
    _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
    const tmp6 = _modDef38;
    tmp6(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
    let tmp8 = null != ActionSheetStore.getContent();
    if (!tmp8) {
      tmp8 = null == UserStore.getUser(channel.ownerId);
    }
    if (!tmp8) {
      const obj2 = ChatInputUtils;
      obj2.dismissKeyboard();
      showLongPressForumPostActionSheetDefault(channel, channel1);
    }
  }, items3);
  const items5 = [threadId];
  const callback4 = react.useCallback((arg0) => {
    let disableReactionCreates;
    let disableReactionUpdates;
    let locationAnalyticsObject;
    let obj4;
    let reaction;
    let reactionLocation;
    ({ reaction, reactionLocation } = arg0);
    ({ disableReactionCreates, disableReactionUpdates, locationAnalyticsObject } = arg0);
    const channel = ChannelStore.getChannel(threadId);
    _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
    _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
    const tmp = threadId;
    if (disableReactionCreates) {
      if (disableReactionUpdates) {
        const obj3 = { messageId: firstMessage.id, channelId: tmp, reactions: firstMessage.reactions, location: obj4 };
        obj4 = { object: locationAnalyticsObject, objectType: unpackModuleId.CANT_ADD_OR_REMOVE };
        const obj2 = reactions_ReactionUtils;
        obj2.handleViewReactions(obj3);
      }
    }
    const tmp6 = null != reaction && reaction.burst_count > 0;
    const obj = messages_MessagesUtils;
    const result = obj.handleAddOrRemoveReaction(firstMessage.id, channel, reaction, tmp6, reactionLocation);
  }, items4);
  const items6 = [threadId];
  const callback5 = react.useCallback((emoji) => {
    const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
    _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
    const obj = reactions_ReactionUtils;
    const obj2 = { messageId: firstMessage.id, channelId: threadId, emoji: emoji.emoji, reactions: firstMessage.reactions };
    obj.handleViewReactions(obj2);
  }, items5);
  const items7 = [threadId, NORMAL];
  const callback6 = react.useCallback(() => {
    const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
    _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
    const obj = reactions_ReactionUtils;
    const obj2 = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
    obj.handleViewReactions(obj2);
  }, items6);
  let obj = {
    onTapMedia: callback,
    onTapPost: callback1,
    onLongTapPost: callback3,
    onTapReaction: callback4,
    onLongTapReaction: callback5,
    onTapReactionCount: callback6,
    onTapAddReaction: react.useCallback(() => {
      const channel = ChannelStore.getChannel(threadId);
      _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
      const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
      _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
      const obj = messages_MessagesUtils;
      const result = obj.handleAddOrRemoveReaction(firstMessage.id, channel, null, NORMAL === MessageReactionsTypes.ReactionTypes.BURST);
    }, items7),
    onTapMostRecentMessage: callback2
  };
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/forums/native/posts/hooks/useNativeForumPostHandlers.tsx");

export default tmp3;
