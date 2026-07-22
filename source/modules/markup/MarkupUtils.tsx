// Module ID: 4118
// Function ID: 34088
// Name: combineAndInjectMentionRule
// Dependencies: []

// Module 4118 (combineAndInjectMentionRule)
function combineAndInjectMentionRule(RULES, items, arg2) {
  items = [RULES, ];
  const tmp = importDefault(dependencyMap[1]);
  items[HermesBuiltin.arraySpread(items, 1)] = {};
  return tmp(items);
}
let closure_3 = [];
let obj = { "Bool(false)": 1766088043, "Bool(false)": 827788593 };
let closure_5 = importDefault(dependencyMap[2]).once(() => {
  const items = [importDefault(dependencyMap[0])({ enableBuildOverrides: true })];
  return combineAndInjectMentionRule(importDefault(dependencyMap[3]).RULES, items);
});
const importDefaultResult = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[2]).once(() => {
  const obj = importDefault(dependencyMap[2]);
  const items = [importDefault(dependencyMap[0])(obj)];
  return obj.omit(combineAndInjectMentionRule(importDefault(dependencyMap[3]).RULES, items), "paragraph", "newline");
});
const importDefaultResult1 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[2]).once(() => {
  let obj = {};
  const merged = Object.assign(obj);
  obj["emojiTooltipPosition"] = "bottom";
  obj["shouldCloseDefaultModals"] = true;
  obj["shouldStopPropagation"] = true;
  const items = [importDefault(dependencyMap[0])(obj), ];
  obj = {};
  obj = { react: importDefault(dependencyMap[3]).RULES.text.react };
  obj.codeBlock = obj;
  items[1] = obj;
  return combineAndInjectMentionRule(importDefault(dependencyMap[3]).CHANNEL_TOPIC_RULES, items, { shouldStopPropagation: true });
});
const importDefaultResult2 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[2]).once(() => {
  const obj = {};
  const merged = Object.assign(obj);
  obj["enableEmojiClick"] = false;
  const items = [importDefault(dependencyMap[0])(obj)];
  return combineAndInjectMentionRule(importDefault(dependencyMap[3]).VOICE_CHANNEL_STATUS_RULES, items);
});
const importDefaultResult3 = importDefault(dependencyMap[2]);
let closure_9 = importDefault(dependencyMap[2]).once(() => {
  const items = [importDefault(dependencyMap[0])(obj)];
  return combineAndInjectMentionRule(importDefault(dependencyMap[3]).EMBED_TITLE_RULES, items);
});
const importDefaultResult4 = importDefault(dependencyMap[2]);
let closure_10 = importDefault(dependencyMap[2]).once(() => {
  const obj = importDefault(dependencyMap[2]);
  const items = [importDefault(dependencyMap[0])(obj)];
  return obj.omit(combineAndInjectMentionRule(importDefault(dependencyMap[3]).EMBED_TITLE_RULES, items), closure_3);
});
const importDefaultResult5 = importDefault(dependencyMap[2]);
let closure_11 = importDefault(dependencyMap[2]).once(() => {
  const items = [importDefault(dependencyMap[0])(obj)];
  return combineAndInjectMentionRule(importDefault(dependencyMap[3]).INLINE_REPLY_RULES, items);
});
const importDefaultResult6 = importDefault(dependencyMap[2]);
let closure_12 = importDefault(dependencyMap[2]).once(() => {
  const items = [importDefault(dependencyMap[0])(obj)];
  return combineAndInjectMentionRule(importDefault(dependencyMap[3]).GUILD_VERIFICATION_FORM_RULES, items);
});
const importDefaultResult7 = importDefault(dependencyMap[2]);
let closure_13 = importDefault(dependencyMap[2]).once(() => {
  const obj = {};
  const merged = Object.assign(obj);
  obj["shouldStopPropagation"] = true;
  const items = [importDefault(dependencyMap[0])(obj)];
  return combineAndInjectMentionRule(importDefault(dependencyMap[3]).GUILD_EVENT_RULES, items, obj);
});
const importDefaultResult8 = importDefault(dependencyMap[2]);
let closure_14 = importDefault(dependencyMap[2]).once(() => {
  const items = [importDefault(dependencyMap[0])(obj)];
  return combineAndInjectMentionRule(importDefault(dependencyMap[3]).AUTO_MODERATION_SYSTEM_MESSAGE_RULES, items);
});
const importDefaultResult9 = importDefault(dependencyMap[2]);
let closure_15 = importDefault(dependencyMap[2]).once(() => {
  const items = [importDefault(dependencyMap[0])(obj)];
  const items1 = [combineAndInjectMentionRule(importDefault(dependencyMap[3]).RULES, items), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "list", "heading", "subtext", ...closure_3];
  return importDefault(dependencyMap[2]).omit.apply(items1);
});
obj = { text: importDefault(dependencyMap[3]).RULES.text };
const importDefaultResult10 = importDefault(dependencyMap[2]);
let closure_16 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).reactParserFor(callback()));
const importDefaultResult11 = importDefault(dependencyMap[2]);
let closure_17 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).reactParserFor(callback3()));
const importDefaultResult12 = importDefault(dependencyMap[2]);
let closure_18 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).reactParserFor(callback4()));
const importDefaultResult13 = importDefault(dependencyMap[2]);
let closure_19 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).reactParserFor(callback5()));
const importDefaultResult14 = importDefault(dependencyMap[2]);
let closure_20 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).reactParserFor(callback6()));
const importDefaultResult15 = importDefault(dependencyMap[2]);
let closure_21 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).reactParserFor(callback7()));
const importDefaultResult16 = importDefault(dependencyMap[2]);
let closure_22 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).reactParserFor(callback8()));
const importDefaultResult17 = importDefault(dependencyMap[2]);
let closure_23 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).reactParserFor(callback9()));
const importDefaultResult18 = importDefault(dependencyMap[2]);
let closure_24 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).reactParserFor(callback10()));
const importDefaultResult19 = importDefault(dependencyMap[2]);
let closure_25 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).reactParserFor(callback2()));
const importDefaultResult20 = importDefault(dependencyMap[2]);
let closure_26 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).astParserFor(callback()));
const importDefaultResult21 = importDefault(dependencyMap[2]);
let closure_27 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).astParserFor(callback3()));
const importDefaultResult22 = importDefault(dependencyMap[2]);
let closure_28 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).astParserFor(callback5()));
const importDefaultResult23 = importDefault(dependencyMap[2]);
let closure_29 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).astParserFor(callback6()));
const importDefaultResult24 = importDefault(dependencyMap[2]);
let closure_30 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).astParserFor(callback7()));
const importDefaultResult25 = importDefault(dependencyMap[2]);
let closure_31 = importDefault(dependencyMap[2]).once(() => importAll(dependencyMap[4]).astParserFor(callback10()));
obj = { combineAndInjectMentionRule, createReactRules: importDefault(dependencyMap[0]), defaultReactRuleOptions: obj };
Object.defineProperty(obj, "defaultRules", { get: () => callback(), set: undefined });
Object.defineProperty(obj, "guildEventRules", { get: () => callback9(), set: undefined });
Object.defineProperty(obj, "notifCenterV2MessagePreviewRules", { get: () => callback11(), set: undefined });
obj.lockscreenWidgetMessageRules = obj;
obj.astParserFor = importAll(dependencyMap[4]).astParserFor;
obj.reactParserFor = importAll(dependencyMap[4]).reactParserFor;
obj.parse = function parse(arg0) {
  const items = [...arguments];
  return callback12()(...items);
};
obj.parseTopic = function parseTopic(topic, arg1, arg2) {
  const merged = Object.assign(arg2);
  return callback13()(topic, arg1, { allowLinks: true }, arg3);
};
obj.parseVoiceChannelStatus = function parseVoiceChannelStatus(gameMentionsAsPlainText, arg1, arg2) {
  const items = [...arguments];
  return callback14()(...items);
};
obj.parseEmbedTitle = function parseEmbedTitle(arg0) {
  const items = [...arguments];
  return callback15()(...items);
};
obj.parseEmbedTitleWithoutLinks = function parseEmbedTitleWithoutLinks(arg0) {
  const items = [...arguments];
  return callback16()(...items);
};
obj.parseInlineReply = function parseInlineReply(content, arg1) {
  const items = [...arguments];
  return callback17()(...items);
};
obj.parseGuildVerificationFormRule = function parseGuildVerificationFormRule(rule, arg1, arg2) {
  const items = [...arguments];
  return callback18()(...items);
};
obj.parseGuildEventDescription = function parseGuildEventDescription(arg0) {
  const items = [...arguments];
  return callback19()(...items);
};
obj.parseAutoModerationSystemMessage = function parseAutoModerationSystemMessage(arg0) {
  const items = [...arguments];
  return callback20()(...items);
};
obj.parseForumPostGuidelines = function parseForumPostGuidelines(topic, arg1, arg2) {
  const items = [...arguments];
  return callback21()(...items);
};
obj.parseToAST = function parseToAST(content, arg1, initialParserState) {
  const items = [...arguments];
  return callback22()(...items);
};
obj.parseTopicToAST = function parseTopicToAST(arg0) {
  const items = [...arguments];
  return callback23()(...items);
};
obj.parseEmbedTitleToAST = function parseEmbedTitleToAST(rawName, arg1, arg2) {
  const items = [...arguments];
  return callback24()(...items);
};
obj.parseEmbedTitleWithoutLinksToAST = function parseEmbedTitleWithoutLinksToAST(arg0, arg1, arg2) {
  const items = [...arguments];
  return callback25()(...items);
};
obj.parseInlineReplyToAST = function parseInlineReplyToAST(arg0) {
  const items = [...arguments];
  return callback26()(...items);
};
obj.parseAutoModerationSystemMessageToAST = function parseAutoModerationSystemMessageToAST(arg0) {
  const items = [...arguments];
  return callback27()(...items);
};
const importDefaultResult26 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/markup/MarkupUtils.tsx");

export default obj;
