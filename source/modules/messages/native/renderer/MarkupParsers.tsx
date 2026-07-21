// Module ID: 7758
// Function ID: 61594
// Name: importDefaultResult1
// Dependencies: []
// Exports: parseEmbedDescriptionMarkup, parseEmbedTitleMarkup, parseEmbedTitleMarkupWithoutLinks, parseMessageMarkup

// Module 7758 (importDefaultResult1)
const MessageTypes = require(dependencyMap[0]).MessageTypes;
let obj = { maxAge: 15 * importDefault(dependencyMap[1]).Millis.MINUTE };
let importDefaultResult = importDefault(dependencyMap[2]);
importDefaultResult = new importDefaultResult(obj);
let importDefaultResult1 = importDefault(dependencyMap[2]);
importDefaultResult1 = new importDefaultResult1(obj);
let importDefaultResult2 = importDefault(dependencyMap[2]);
obj = {};
const merged = Object.assign(obj);
obj["updateAgeOnGet"] = false;
importDefaultResult2 = new importDefaultResult2(obj);
let importDefaultResult3 = importDefault(dependencyMap[2]);
importDefaultResult3 = new importDefaultResult3(obj);
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/MarkupParsers.tsx");

export const parseEmbedTitleMarkup = function parseEmbedTitleMarkup(rawName, closure_0) {
  const combined = "" + rawName + "-" + closure_0;
  let value = importDefaultResult.get(combined);
  if (null == value) {
    let obj = importDefault(dependencyMap[3]);
    obj = { channelId: closure_0 };
    const parseEmbedTitleToASTResult = obj.parseEmbedTitleToAST(rawName, true, obj);
    const result = importDefaultResult.set(combined, parseEmbedTitleToASTResult);
    value = parseEmbedTitleToASTResult;
  }
  return value;
};
export const parseEmbedTitleMarkupWithoutLinks = function parseEmbedTitleMarkupWithoutLinks(arg0, channelId) {
  const combined = "" + arg0 + "-" + channelId + "-nolinks";
  let value = importDefaultResult1.get(combined);
  if (null == value) {
    let obj = importDefault(dependencyMap[3]);
    obj = { channelId };
    const result = obj.parseEmbedTitleWithoutLinksToAST(arg0, true, obj);
    const result1 = importDefaultResult1.set(combined, result);
    value = result;
  }
  return value;
};
export const parseEmbedDescriptionMarkup = function parseEmbedDescriptionMarkup(arg0) {
  let channelId;
  let description;
  let ignoreCache;
  let isField;
  let replaceMap;
  let showListsAndHeaders;
  let showMaskedLinks;
  ({ description, channelId, replaceMap, showListsAndHeaders } = arg0);
  ({ isField, ignoreCache, showMaskedLinks } = arg0);
  const combined = "" + description + "-" + channelId;
  const value = importDefaultResult2.get(combined);
  if (null != value) {
    if (!ignoreCache) {
      return value;
    }
  }
  let replaced = description;
  let tmp4 = description;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp4 = replaced;
    while (keys[tmp] !== undefined) {
      let tmp10 = tmp6;
      replaced = replaced.replaceAll(tmp6, replaceMap[tmp6]);
      // continue
    }
  }
  const obj = { disabled: null, includeRender: null, includeUpdates: null, channelId };
  let tmp7 = !isField;
  if (tmp7) {
    tmp7 = showListsAndHeaders;
  }
  obj.allowHeading = tmp7;
  obj.allowList = showListsAndHeaders;
  obj.previewLinkTarget = showMaskedLinks;
  const parseToASTResult = importDefault(dependencyMap[3]).parseToAST(tmp4, true, obj);
  const result = importDefaultResult2.set(combined, parseToASTResult);
  return parseToASTResult;
};
export const parseMessageMarkup = function parseMessageMarkup(message, message2, forceHideSimpleEmbedContent, isInlineReplyPreview, arg4, result, result2) {
  let flag = isInlineReplyPreview;
  let flag2 = arg4;
  let flag3 = result;
  let flag4 = result2;
  if (isInlineReplyPreview === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (flag3 === undefined) {
    flag3 = false;
  }
  if (flag4 === undefined) {
    flag4 = false;
  }
  const value = importDefaultResult3.get(message);
  if (null != value) {
    if (value.isInlineReplyPreview === flag) {
      return value;
    }
  }
  if (message.type !== MessageTypes.CHANGELOG) {
    let obj = {};
    let obj1 = require(dependencyMap[5]);
    obj = { contentMessage: message2, hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowGameMentions: true };
    let tmp5 = flag2;
    if (!flag2) {
      tmp5 = flag3;
    }
    obj.allowHeading = tmp5;
    let tmp6 = flag2;
    if (!flag2) {
      tmp6 = flag3;
    }
    obj.allowList = tmp6;
    obj.allowLinks = flag4;
    obj.previewLinkTarget = flag4;
    const merged = Object.assign(obj1.renderMessageMarkupToAST(message, obj));
    obj["isInlineReplyPreview"] = flag;
    result = importDefaultResult3.set(message, obj);
  }
  obj = {};
  const obj5 = importDefault(dependencyMap[3]);
  obj1 = { hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag };
  flag = flag2;
  const obj6 = require(dependencyMap[4]);
  if (!flag2) {
    flag = flag3;
  }
  obj1.allowHeading = flag;
  if (!flag2) {
    flag2 = flag3;
  }
  obj1.allowList = flag2;
  obj1.allowLinks = flag4;
  obj1.previewLinkTarget = flag4;
  obj.content = obj5.astParserFor(require(dependencyMap[4]).changelogRules(message.changelogId, true))(message.content, false, obj1);
  flag4 = importDefaultResult3;
  const result1 = importDefaultResult3.set(message, obj);
};
