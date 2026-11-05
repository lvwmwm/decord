// Module ID: 11242
// Function ID: 11243
// Name: MessagePreviewMarkup
// Dependencies: [6170, 6171, 6172, 11243, 2072, 5891, 5828, 1453, 2]
// Exports: getMessagePreviewASTParser, renderASTToReact, renderMeasuredMessagePreviewMarkup, renderMessagePreviewMarkup

// Module 11242 (MessagePreviewMarkup)
import LRUCacheDefault from "LRUCache" /* 1453 */;
import _modDef2072 from "module_2072" /* 2072 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 5828 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5891 */;
import MarkupTypes from "MarkupTypes" /* 6170 */;
import combineMarkupRulesDefault from "combineMarkupRules" /* 6171 */;
import MarkupRulesDefault from "MarkupRules" /* 6172 */;
import MarkupMessagePreviewReactRulesDefault from "MarkupMessagePreviewReactRules" /* 11243 */;
import size from "module_2" /* 2 */;

function parseMessagePreviewMarkup(fontScale) {
  let channelId;
  let color;
  let content;
  let disableAnimatedEmoji;
  let guildId;
  let layout;
  let muted;
  let postProcessor;
  ({ muted, layout } = fontScale);
  ({ content, guildId, channelId } = fontScale);
  if (layout === undefined) {
    layout = ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT;
  }
  ({ color, disableAnimatedEmoji, postProcessor } = fontScale);
  if (disableAnimatedEmoji === undefined) {
    disableAnimatedEmoji = true;
  }
  let num = fontScale.fontScale;
  if (num === undefined) {
    num = 1;
  }
  const maxFontSizeMultiplier = fontScale.maxFontSizeMultiplier;
  const obj = { allowLinks: true, allowDevLinks: false, allowEmojiLinks: false, allowGameMentions: true, mentionChannels: [], soundboardSounds: [], formatInline: true, noStyleAndInteraction: true, allowHeading: true, allowList: true, disableAutoBlockNewlines: true, previewLinkTarget: false, disableAnimatedEmoji, unknownUserMentionPlaceholder: true, guildId, channelId, muted };
  if (muted == null) {
    muted = false;
  }
  const obj2 = { tree: getOrParseMessagePreviewMarkupAST({ content, layout, color, initialParserState: obj, fontScale: num, maxFontSizeMultiplier, postProcessor }), initialParserState: obj, ruleParams: { layout, color, fontScale: num, maxFontSizeMultiplier } };
  return obj2;
}
function getOrParseMessagePreviewMarkupAST(arg0) {
  let color;
  let content;
  let fontScale;
  let initialParserState;
  let layout;
  let maxFontSizeMultiplier;
  let postProcessor;
  ({ content, layout, color, initialParserState, postProcessor, fontScale, maxFontSizeMultiplier } = arg0);
  const value = closure_5.get(content);
  const obj = closure_5;
  if (null != value) {
    return value;
  } else {
    const items = [, ];
    const tmp11 = combineMarkupRulesDefault;
    items[0] = MarkupRulesDefault.RULES;
    items[1] = MarkupMessagePreviewReactRulesDefault(layout, color, fontScale, maxFontSizeMultiplier);
    const tmp11Result = tmp11(items);
    const obj3 = MarkupUtilsDefault;
    const astParserForResult = obj3.astParserFor(tmp11Result);
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
    const astParserForResultResult = astParserForResult(tmp3, true, initialParserState, postProcessor);
    const result = obj.set(content, astParserForResultResult);
    return astParserForResultResult;
  }
}
let items = [MarkupTypes.AST_KEY.GAME_MENTION];
const set = new Set(items);
let tmp3 = new LRUCacheDefault({ max: 2000 });
let closure_5 = tmp3;
let result = size.fileFinishedImporting("modules/message_previews/native/MessagePreviewMarkup.tsx");

export function renderASTToReact(layout) {
  let color;
  let fontScale;
  let initialParserState;
  let maxFontSizeMultiplier;
  let tree;
  layout = layout.layout;
  ({ tree, initialParserState, color, fontScale, maxFontSizeMultiplier } = layout);
  const items = [, ];
  const tmp = combineMarkupRulesDefault;
  items[0] = MarkupRulesDefault.RULES;
  items[1] = MarkupMessagePreviewReactRulesDefault(layout, color, fontScale, maxFontSizeMultiplier);
  const tmpResult = tmp(items);
  const reactFor = _modDef2072.reactFor;
  _modDef2072;
  const obj = _modDef2072;
  return reactFor(obj.ruleOutput(tmpResult, "react"))(tree, initialParserState);
}
export function getMessagePreviewASTParser(layout) {
  let color;
  let fontScale;
  let maxFontSizeMultiplier;
  layout = layout.layout;
  ({ color, fontScale, maxFontSizeMultiplier } = layout);
  const items = [, ];
  const tmp = combineMarkupRulesDefault;
  items[0] = MarkupRulesDefault.RULES;
  items[1] = MarkupMessagePreviewReactRulesDefault(layout, color, fontScale, maxFontSizeMultiplier);
  const tmpResult = tmp(items);
  const obj = MarkupUtilsDefault;
  return obj.astParserFor(tmpResult);
}
export function renderMessagePreviewMarkup(content) {
  let color;
  let fontScale;
  let initialParserState;
  let maxFontSizeMultiplier;
  let tree;
  if ("" === content.content) {
    return null;
  } else {
    const tmp3 = parseMessagePreviewMarkup(content);
    const obj = { tree: null, initialParserState: null };
    ({ tree: obj.tree, initialParserState: obj.initialParserState } = tmp3);
    const merged = Object.assign(tmp3.ruleParams);
    const layout = obj.layout;
    ({ tree, initialParserState, color, fontScale, maxFontSizeMultiplier } = obj);
    const items = [, ];
    const tmp8 = combineMarkupRulesDefault;
    items[0] = MarkupRulesDefault.RULES;
    items[1] = MarkupMessagePreviewReactRulesDefault(layout, color, fontScale, maxFontSizeMultiplier);
    const tmp8Result = tmp8(items);
    const reactFor = _modDef2072.reactFor;
    _modDef2072;
    const obj2 = _modDef2072;
    return reactFor(obj2.ruleOutput(tmp8Result, "react"))(tree, initialParserState);
  }
}
export function renderMeasuredMessagePreviewMarkup(content) {
  let color;
  let flatMapResult;
  let fontScale;
  let initialParserState;
  let initialParserState2;
  let maxFontSizeMultiplier;
  let obj4;
  let reactFor;
  let tmp7Result;
  let tree;
  let tree2;
  if ("" === content.content) {
    let obj2 = { content: null, mentions: [] };
    return obj2;
  } else {
    const tmp12 = parseMessagePreviewMarkup(content);
    ({ tree: tree2, initialParserState: initialParserState2 } = tmp12);
    const ruleParams = tmp12.ruleParams;
    const _Array = Array;
    let obj = tree2;
    if (!Array.isArray(tree2)) {
      let items = [tree2];
      obj = items;
    }
    let obj3 = { content: reactFor(obj4.ruleOutput(tmp7Result, "react"))(tree, initialParserState), mentions: flatMapResult };
    const obj5 = { tree: tree2, initialParserState: initialParserState2 };
    flatMapResult = obj.flatMap((type, index) => {
      let color;
      let fontScale;
      let initialParserState;
      let items2;
      let maxFontSizeMultiplier;
      let obj3;
      let reactFor;
      let tmp9Result;
      let tree;
      if (set.has(type.type)) {
        obj = { node: type, prefix: reactFor(obj3.ruleOutput(tmp9Result, "react"))(tree, initialParserState) };
        const obj2 = { tree: obj.slice(0, index), initialParserState: initialParserState2 };
        const merged = Object.assign(ruleParams);
        const layout = obj2.layout;
        ({ tree, initialParserState, color, fontScale, maxFontSizeMultiplier } = obj2);
        const items = [, ];
        const tmp9 = combineMarkupRulesDefault;
        items[0] = MarkupRulesDefault.RULES;
        items[1] = MarkupMessagePreviewReactRulesDefault(layout, color, fontScale, maxFontSizeMultiplier);
        tmp9Result = tmp9(items);
        reactFor = _modDef2072.reactFor;
        _modDef2072;
        const items1 = [obj];
        items2 = items1;
        obj3 = _modDef2072;
      } else {
        items2 = [];
      }
      return items2;
    });
    let merged = Object.assign(ruleParams);
    let layout = obj5.layout;
    ({ tree, initialParserState, color, fontScale, maxFontSizeMultiplier } = obj5);
    const tmp7 = ruleParams(obj[1]);
    let items1 = [ruleParams(obj[2]).RULES, ];
    items1[1] = ruleParams(obj[3])(layout, color, fontScale, maxFontSizeMultiplier);
    tmp7Result = tmp7(items1);
    reactFor = ruleParams(obj[4]).reactFor;
    const tmp10 = ruleParams(obj[4]);
    obj4 = ruleParams(obj[4]);
    return obj3;
  }
}
export const messagePreviewASTCache = tmp3;
export { getOrParseMessagePreviewMarkupAST };
