// Module ID: 7773
// Function ID: 61709
// Name: getInitialParserStateFromMessage
// Dependencies: []
// Exports: default, renderAutomodMessageMarkup, renderAutomodMessageMarkupToAST, renderMessageContentMarkup, renderMessageMarkupToAST, renderMessageMarkupWithParser

// Module 7773 (getInitialParserStateFromMessage)
function getInitialParserStateFromMessage(message, closure_7) {
  let mentionGames;
  let obj = { channelId: message.channel_id, messageId: message.id };
  const author = message.author;
  let id;
  if (null != author) {
    id = author.id;
  }
  obj.authorId = id;
  obj.renderOptions = closure_7;
  const tmpResult = getInitialParserState(obj);
  obj = {};
  const merged = Object.assign(tmpResult);
  let allowLinks = tmp4;
  if (null == message.webhookId) {
    allowLinks = tmpResult.allowLinks;
  }
  obj["allowLinks"] = allowLinks;
  obj["allowEmojiLinks"] = null != message.webhookId;
  ({ mentionChannels: obj2["mentionChannels"], mentionGames } = message);
  if (null == mentionGames) {
    const _Map = Map;
    mentionGames = new Map();
  }
  obj["mentionGames"] = mentionGames;
  let soundboardSounds = message.soundboardSounds;
  if (null == soundboardSounds) {
    soundboardSounds = [];
  }
  obj["soundboardSounds"] = soundboardSounds;
  return obj;
}
function getInitialParserState(channelId) {
  const renderOptions = channelId.renderOptions;
  const obj = { channelId: channelId.channelId, messageId: channelId.messageId, authorId: channelId.authorId, allowLinks: Boolean(renderOptions.allowLinks), allowDevLinks: Boolean(renderOptions.allowDevLinks), allowGameMentions: Boolean(renderOptions.allowGameMentions), allowTimeMentionInput: Boolean(renderOptions.allowTimeMentionInput), formatInline: Boolean(renderOptions.formatInline), noStyleAndInteraction: Boolean(renderOptions.noStyleAndInteraction), allowHeading: Boolean(renderOptions.allowHeading), allowList: Boolean(renderOptions.allowList), previewLinkTarget: Boolean(renderOptions.previewLinkTarget), disableAnimatedEmoji: Boolean(renderOptions.disableAnimatedEmoji), allowEmojiLinks: false, disableAutoBlockNewlines: true, mentionChannels: [], mentionGames: new Map(), soundboardSounds: [], muted: false, unknownUserMentionPlaceholder: true, viewingChannelId: renderOptions.viewingChannelId, forceWhite: Boolean(renderOptions.forceWhite), textColor: renderOptions.textColor, disablePressableChannelMention: Boolean(renderOptions.disablePressableChannelMention) };
  return obj;
}
function render(arg0, arg1, toAST) {
  let contentMessage;
  const require = arg1;
  toAST = toAST.toAST;
  let closure_1 = undefined !== toAST && toAST;
  const hideSimpleEmbedContent = toAST.hideSimpleEmbedContent;
  let closure_2 = undefined === hideSimpleEmbedContent || hideSimpleEmbedContent;
  const formatInline = toAST.formatInline;
  const getInitialParserStateFromMessage = undefined !== formatInline && formatInline;
  ({ postProcessor: closure_4, contentMessage } = toAST);
  const render = contentMessage;
  let closure_6 = false;
  let closure_7 = false;
  let tmp = arg1;
  if (null != contentMessage) {
    tmp = contentMessage;
  }
  const content = tmp.content;
  return {
    hasSpoilerEmbeds: closure_6,
    hasBailedAst: closure_7,
    content: arg0(content, true, getInitialParserStateFromMessage(arg1, toAST), (ast, inline) => {
      let closure_7 = null != arg2 && arg2;
      let obj = inline(closure_2[0]);
      obj = { ast, inline, hasBailedAst: closure_7, message: inline, contentMessage, messageContent: content, hideSimpleEmbedContent: closure_2, formatInline: closure_3, toAST: closure_1 };
      const result = obj.runMessageMarkupPostProcessors(obj);
      ({ ast, hasSpoilerEmbeds: closure_6 } = result);
      let tmp2 = ast;
      if (null != callback) {
        tmp2 = callback(ast, inline);
      }
      return tmp2;
    })
  };
}
function renderAutomodMessageMarkupWithParser(parseAutoModerationSystemMessage, arg1, highlightWord, channelId) {
  const obj = { mentionChannels: [], mentionGames: new Map(), soundboardSounds: [], highlightWord, disableAnimatedEmoji: false, channelId, muted: false };
  return parseAutoModerationSystemMessage(arg1, true, obj, (arg0) => {
    let tmp = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      tmp = items;
    }
    return tmp;
  });
}
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/messages/renderMessageMarkup.tsx");

export default function renderMessageMarkup(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const tmp2 = importDefault(dependencyMap[1]);
  return render(obj.formatInline ? tmp2.parseInlineReply : tmp2.parse, arg0, obj);
};
export { getInitialParserStateFromMessage };
export { getInitialParserState };
export const renderMessageMarkupWithParser = function renderMessageMarkupWithParser(NativeSearchResultLinkPreviewParser, stateFromStores, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  return render(NativeSearchResultLinkPreviewParser, stateFromStores, obj);
};
export const renderMessageMarkupToAST = function renderMessageMarkupToAST(message, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const tmp2 = importDefault(dependencyMap[1]);
  obj = {};
  const merged = Object.assign(obj);
  obj["toAST"] = true;
  return render(obj.formatInline ? tmp2.parseInlineReplyToAST : tmp2.parseToAST, message, obj);
};
export const renderMessageContentMarkup = function renderMessageContentMarkup(notifCenterV2MessagePreviewParser, arg1, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  return function renderMessageContentMarkupWithParser(notifCenterV2MessagePreviewParser, arg1, arg2) {
    let authorId;
    let channelId;
    let content;
    let guildId;
    let messageId;
    const obj = { borderColor: null, Oppo: "custom", video_game: 60, EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED: 60, isSelected: 0.8, isTryItOut: null, initialPlaybackTimeSec: true, FILTER_LINK_FROM: "contain", GIFTING_BADGE_COACHMARK: null, useImminentUpcomingGuildEvents: true, triggeredByStatusChange: "no-hide-descendants", reviewRow: false, GET_GUILDS: true, isEncryptionAvailable: "/assets/.cache/intl/ZGVzaWdu", mentionChannels: [] };
    ({ content, guildId, channelId, messageId, authorId } = arg1);
    obj.mentionGames = new Map();
    obj.soundboardSounds = [];
    obj.guildId = guildId;
    obj.channelId = channelId;
    obj.messageId = messageId;
    obj.authorId = authorId;
    obj.muted = false;
    obj.disablePressableChannelMention = true;
    return notifCenterV2MessagePreviewParser(content, true, obj, (arg0) => {
      let tmp = arg0;
      if (!Array.isArray(arg0)) {
        const items = [arg0];
        tmp = items;
      }
      return tmp;
    });
  }(notifCenterV2MessagePreviewParser, arg1, obj);
};
export const renderAutomodMessageMarkup = function renderAutomodMessageMarkup(arg0, highlightWord, channelId) {
  return renderAutomodMessageMarkupWithParser(importDefault(dependencyMap[1]).parseAutoModerationSystemMessage, arg0, highlightWord, channelId);
};
export const renderAutomodMessageMarkupToAST = function renderAutomodMessageMarkupToAST(arg0, highlightWord, channelId) {
  return renderAutomodMessageMarkupWithParser(importDefault(dependencyMap[1]).parseAutoModerationSystemMessageToAST, arg0, highlightWord, channelId);
};
