// Module ID: 10246
// Function ID: 79211
// Name: getRules
// Dependencies: []
// Exports: renderMessagePreviewMarkup

// Module 10246 (getRules)
function getRules(layout) {
  let color;
  let fontScale;
  let maxFontSizeMultiplier;
  ({ color, fontScale, maxFontSizeMultiplier } = layout);
  const items = [importDefault(dependencyMap[1]).RULES, importDefault(dependencyMap[2])(layout.layout, color, fontScale, maxFontSizeMultiplier)];
  return importDefault(dependencyMap[0])(items);
}
function renderASTToReact(layout) {
  let initialParserState;
  let tree;
  ({ tree, initialParserState } = layout);
  const obj = { layout: layout.layout, color: layout.color, fontScale: layout.fontScale, maxFontSizeMultiplier: layout.maxFontSizeMultiplier };
  const tmp = getRules({ layout: layout.layout, color: layout.color, fontScale: layout.fontScale, maxFontSizeMultiplier: layout.maxFontSizeMultiplier });
  const obj2 = importDefault(dependencyMap[3]);
  return obj2.reactFor(importDefault(dependencyMap[3]).ruleOutput(tmp, "react"))(tree, initialParserState);
}
function getMessagePreviewASTParser(layout) {
  const obj = { layout: layout.layout, color: layout.color, fontScale: layout.fontScale, maxFontSizeMultiplier: layout.maxFontSizeMultiplier };
  const tmp = getRules({ layout: layout.layout, color: layout.color, fontScale: layout.fontScale, maxFontSizeMultiplier: layout.maxFontSizeMultiplier });
  return importDefault(dependencyMap[4]).astParserFor(tmp);
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
let importDefaultResult = importDefault(dependencyMap[6]);
importDefaultResult = new importDefaultResult({ max: 2000 });
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/message_previews/native/MessagePreviewMarkup.tsx");

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
    layout = arg1(dependencyMap[5]).ChannelListLayoutTypes.COMPACT;
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
    let obj = { mentionChannels: [] };
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
