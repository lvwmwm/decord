// Module ID: 10287
// Function ID: 79470
// Name: getRules
// Dependencies: [4564, 4565, 10288, 3829, 4120, 3808, 1362, 2]
// Exports: renderMessagePreviewMarkup

// Module 10287 (getRules)
import importDefaultResult from "priv";

const require = arg1;
function getRules(layout) {
  let color;
  let fontScale;
  let maxFontSizeMultiplier;
  ({ color, fontScale, maxFontSizeMultiplier } = layout);
  const items = [importDefault(4565).RULES, importDefault(10288)(layout.layout, color, fontScale, maxFontSizeMultiplier)];
  return importDefault(4564)(items);
}
function renderASTToReact(layout) {
  let initialParserState;
  let tree;
  ({ tree, initialParserState } = layout);
  const obj = { layout: layout.layout, color: layout.color, fontScale: layout.fontScale, maxFontSizeMultiplier: layout.maxFontSizeMultiplier };
  const tmp = getRules({ layout: layout.layout, color: layout.color, fontScale: layout.fontScale, maxFontSizeMultiplier: layout.maxFontSizeMultiplier });
  const obj2 = importDefault(3829);
  return obj2.reactFor(importDefault(3829).ruleOutput(tmp, "react"))(tree, initialParserState);
}
function getMessagePreviewASTParser(layout) {
  const obj = { layout: layout.layout, color: layout.color, fontScale: layout.fontScale, maxFontSizeMultiplier: layout.maxFontSizeMultiplier };
  const tmp = getRules({ layout: layout.layout, color: layout.color, fontScale: layout.fontScale, maxFontSizeMultiplier: layout.maxFontSizeMultiplier });
  return importDefault(4120).astParserFor(tmp);
}
function getOrParseMessagePreviewMarkupAST(arg0) {
  let color;
  let content;
  let fontScale;
  let initialParserState;
  let layout;
  let maxFontSizeMultiplier;
  let postProcessor;
  ({ content, initialParserState, postProcessor } = arg0);
  ({ layout, color, fontScale, maxFontSizeMultiplier } = arg0);
  const value = importDefaultResult.get(content);
  if (null != value) {
    return value;
  } else {
    const obj = { layout, color, fontScale, maxFontSizeMultiplier };
    let startsWithResult = content.startsWith("```");
    let tmp3;
    if (!startsWithResult) {
      const first = content.split("\n")[0];
      startsWithResult = first.includes("||");
      tmp3 = first;
    }
    if (startsWithResult) {
      tmp3 = content;
    }
    const tmp11Result = getMessagePreviewASTParser(obj)(tmp3, true, initialParserState, postProcessor);
    const result = importDefaultResult.set(content, tmp11Result);
    return tmp11Result;
  }
}
importDefaultResult = new importDefaultResult({ max: 2000 });
let result = require("defaultReactFn").fileFinishedImporting("modules/message_previews/native/MessagePreviewMarkup.tsx");

export { renderASTToReact };
export { getMessagePreviewASTParser };
export const renderMessagePreviewMarkup = function renderMessagePreviewMarkup(fontScale) {
  let channelId;
  let color;
  let content;
  let disableAnimatedEmoji;
  let guildId;
  let layout;
  let muted;
  let postProcessor;
  ({ content, muted, layout } = fontScale);
  ({ guildId, channelId } = fontScale);
  if (layout === undefined) {
    layout = require(3808) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT;
  }
  ({ color, disableAnimatedEmoji, postProcessor } = fontScale);
  if (disableAnimatedEmoji === undefined) {
    disableAnimatedEmoji = true;
  }
  let num2 = fontScale.fontScale;
  if (num2 === undefined) {
    num2 = 1;
  }
  const maxFontSizeMultiplier = fontScale.maxFontSizeMultiplier;
  if ("" === content) {
    return null;
  } else {
    let obj = { allowLinks: true, allowDevLinks: false, allowEmojiLinks: false, allowGameMentions: false, mentionChannels: [], mentionGames: null, soundboardSounds: null, formatInline: true, noStyleAndInteraction: true, allowHeading: true, allowList: true, disableAutoBlockNewlines: true, previewLinkTarget: false };
    const _Map = Map;
    const map = new Map();
    obj.mentionGames = map;
    obj.soundboardSounds = [];
    obj.disableAnimatedEmoji = disableAnimatedEmoji;
    obj.unknownUserMentionPlaceholder = true;
    obj.guildId = guildId;
    obj.channelId = channelId;
    obj.muted = null != muted && muted;
    obj = {};
    obj = { content, layout, color };
    obj.initialParserState = obj;
    obj.fontScale = num2;
    obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
    obj.postProcessor = postProcessor;
    obj.tree = getOrParseMessagePreviewMarkupAST(obj);
    obj.initialParserState = obj;
    obj.layout = layout;
    obj.color = color;
    obj.fontScale = num2;
    obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
    return renderASTToReact(obj);
  }
};
export const messagePreviewASTCache = importDefaultResult;
export { getOrParseMessagePreviewMarkupAST };
