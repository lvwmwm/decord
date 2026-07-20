// Module ID: 10319
// Function ID: 79687
// Name: useNativeForumPostHandlers
// Dependencies: []
// Exports: default

// Module 10319 (useNativeForumPostHandlers)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ AnalyticsObjectTypes: closure_10, AnalyticsPages: closure_11, AnalyticsSections: closure_12, EMPTY_STRING_SNOWFLAKE_ID: closure_13 } = arg1(dependencyMap[7]));
let closure_14 = arg1(dependencyMap[8]).OpenThreadAnalyticsLocations;
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/forums/native/posts/hooks/useNativeForumPostHandlers.tsx");

export default function useNativeForumPostHandlers(threadId) {
  threadId = threadId.threadId;
  const arg1 = threadId;
  let NORMAL = threadId.reactionType;
  if (NORMAL === undefined) {
    NORMAL = arg1(dependencyMap[9]).ReactionTypes.NORMAL;
  }
  const importDefault = NORMAL;
  let dependencyMap;
  const items = [threadId];
  const items1 = [threadId];
  const callback = React.useCallback((containerRef) => {
    let initialIndex;
    let mediaItems;
    ({ messageId: closure_0, mediaItems, initialIndex } = containerRef);
    if (initialIndex === undefined) {
      initialIndex = 0;
    }
    let NORMAL;
    const channel = store.getChannel(threadId);
    NORMAL = channel;
    NORMAL(callback1[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    let obj = threadId(callback1[11]);
    const channelName = obj.computeChannelName(channel, closure_7, closure_6, false);
    const channelIcon = threadId(callback1[12]).getChannelIcon(channel);
    const mapped = mediaItems.map((src) => {
      src = src.src;
      let obj = channel(closure_2[13]);
      let str = obj.toURLSafe(src);
      let tmp = null != str;
      if (src.srcIsAnimated) {
        if (tmp) {
          const formatted = str.pathname.toLowerCase();
          let endsWithResult = formatted.endsWith(".webp");
          if (!endsWithResult) {
            const formatted1 = str.pathname.toLowerCase();
            endsWithResult = formatted1.endsWith(".avif");
            const str8 = str.pathname;
          }
          tmp = endsWithResult;
          const str6 = str.pathname;
        }
        if (tmp) {
          let isAttachmentUrlResult = src.type === callback(closure_2[14]).ForumPostMediaTypes.ATTACHMENT;
          if (isAttachmentUrlResult) {
            isAttachmentUrlResult = callback(closure_2[15]).isAttachmentUrl(str);
            const obj5 = callback(closure_2[15]);
          }
          if (!isAttachmentUrlResult) {
            let result = src.type === callback(closure_2[14]).ForumPostMediaTypes.EMBED;
            if (result) {
              result = callback(closure_2[15]).isExternalProxiedAttachmentUrl(str);
              const obj6 = callback(closure_2[15]);
            }
            isAttachmentUrlResult = result;
          }
          tmp = isAttachmentUrlResult;
        }
        str = src;
        if (tmp) {
          const searchParams2 = str.searchParams;
          const result1 = searchParams2.set("animated", "true");
          const formatted2 = str.pathname.toLowerCase();
          if (formatted2.endsWith(".avif")) {
            const searchParams3 = str.searchParams;
            const result2 = searchParams3.set("format", "webp");
          }
          str = str.toString();
          const str12 = str.pathname;
        }
      } else {
        let endsWithResult1 = tmp;
        if (tmp) {
          const formatted3 = str.pathname.toLowerCase();
          endsWithResult1 = formatted3.endsWith(".avif");
          const str2 = str.pathname;
        }
        str = src;
        if (endsWithResult1) {
          const searchParams = str.searchParams;
          const result3 = searchParams.set("format", "webp");
          str = str.toString();
        }
      }
      obj = { uri: str, guildId: channel.guild_id, messageId: null != callback ? callback : closure_13, channelId: channel.id };
      ({ mediaIndex: obj8.mediaIndex, width: obj8.width, height: obj8.height, type: obj8.accessoryType, attachmentId: obj8.attachmentId } = src);
      return obj;
    });
    const obj2 = threadId(callback1[12]);
    obj = { initialIndex, initialSources: mapped, channelId: channel.id, contextName: channelName, contextIcon: channelIcon, originViewOrOriginLayout: containerRef.containerRef.current };
    threadId(callback1[16]).openMediaModal(obj);
  }, items);
  const callback1 = React.useCallback(() => {
    let obj = threadId(callback1[17]);
    if (obj.isAndroid()) {
      let obj1 = threadId(callback1[18]);
      const result = obj1.triggerHapticFeedback(NORMAL(callback1[19]).IMPACT_LIGHT);
    }
    const channel = store.getChannel(threadId);
    NORMAL(callback1[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channel1 = store.getChannel(channel.parent_id);
    NORMAL(callback1[10])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
    obj = { guildId: channel1.guild_id, channelId: channel1.id, postId: threadId, location: obj };
    obj = { page: constants2.GUILD_CHANNEL, section: constants3.FORUM_CHANNEL_POST };
    const result1 = threadId(callback1[20]).trackForumPostClicked(obj);
    const obj3 = threadId(callback1[20]);
    obj1 = { source: constants4.FORUM, navigationReplace: false };
    threadId(callback1[21]).transitionToThread(channel, obj1);
  }, items1);
  dependencyMap = callback1;
  const items2 = [callback1, threadId];
  const items3 = [threadId];
  const callback2 = React.useCallback(() => {
    const channel = store.getChannel(threadId);
    NORMAL(callback1[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channel1 = store.getChannel(channel.parent_id);
    NORMAL(callback1[10])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
    const messageState = messageState.getMessageState(threadId);
    const message = messageState.message;
    if (messageState.loaded) {
      if (null != message) {
        let obj = threadId(callback1[20]);
        obj = {};
        ({ guild_id: obj2.guildId, id: obj2.channelId } = channel1);
        obj.postId = threadId;
        obj = { page: constants2.GUILD_CHANNEL, section: constants3.FORUM_CHANNEL_POST };
        obj.location = obj;
        const result = obj.trackForumPostClicked(obj);
        const obj1 = { source: constants4.FORUM, navigationReplace: false };
        const result1 = threadId(callback1[21]).transitionToThreadMessage(channel, message.id, obj1);
        const obj4 = threadId(callback1[21]);
      }
    }
    callback1();
  }, items2);
  const items4 = [threadId];
  const callback3 = React.useCallback(() => {
    const channel = store.getChannel(threadId);
    NORMAL(callback1[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channel1 = store.getChannel(channel.parent_id);
    NORMAL(callback1[10])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
    NORMAL(callback1[10])(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
    let tmp6 = null != content.getContent();
    if (!tmp6) {
      tmp6 = null == user.getUser(channel.ownerId);
    }
    if (!tmp6) {
      threadId(callback1[22]).dismissKeyboard();
      NORMAL(callback1[23])(channel, channel1);
      const obj2 = threadId(callback1[22]);
    }
  }, items3);
  const items5 = [threadId];
  const callback4 = React.useCallback((arg0) => {
    let disableReactionCreates;
    let disableReactionUpdates;
    let locationAnalyticsObject;
    let reaction;
    let reactionLocation;
    ({ reaction, reactionLocation } = arg0);
    ({ disableReactionCreates, disableReactionUpdates, locationAnalyticsObject } = arg0);
    const channel = store.getChannel(threadId);
    NORMAL(callback1[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const firstMessage = store2.getMessage(threadId).firstMessage;
    NORMAL(callback1[10])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
    if (disableReactionCreates) {
      if (disableReactionUpdates) {
        let obj = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
        obj = { object: locationAnalyticsObject, objectType: constants.CANT_ADD_OR_REMOVE };
        obj.location = obj;
        threadId(callback1[24]).handleViewReactions(obj);
        const obj2 = threadId(callback1[24]);
      }
    }
    let tmp4 = null != reaction;
    if (tmp4) {
      tmp4 = reaction.burst_count > 0;
    }
    obj = threadId(callback1[25]);
    const result = obj.handleAddOrRemoveReaction(firstMessage.id, channel, reaction, tmp4, reactionLocation);
  }, items4);
  const items6 = [threadId];
  const callback5 = React.useCallback((emoji) => {
    const firstMessage = store2.getMessage(threadId).firstMessage;
    NORMAL(callback1[10])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
    let obj = threadId(callback1[24]);
    obj = { messageId: firstMessage.id, channelId: threadId, emoji: emoji.emoji, reactions: firstMessage.reactions };
    obj.handleViewReactions(obj);
  }, items5);
  const items7 = [threadId, NORMAL];
  const callback6 = React.useCallback(() => {
    const firstMessage = store2.getMessage(threadId).firstMessage;
    NORMAL(callback1[10])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
    let obj = threadId(callback1[24]);
    obj = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
    obj.handleViewReactions(obj);
  }, items6);
  return {
    onTapMedia: callback,
    onTapPost: callback1,
    onLongTapPost: callback3,
    onTapReaction: callback4,
    onLongTapReaction: callback5,
    onTapReactionCount: callback6,
    onTapAddReaction: React.useCallback(() => {
      const channel = store.getChannel(threadId);
      NORMAL(callback1[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
      const firstMessage = store2.getMessage(threadId).firstMessage;
      NORMAL(callback1[10])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
      const result = threadId(callback1[25]).handleAddOrRemoveReaction(firstMessage.id, channel, null, NORMAL === threadId(callback1[9]).ReactionTypes.BURST);
    }, items7),
    onTapMostRecentMessage: callback2
  };
};
