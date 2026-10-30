// Module ID: 8552
// Function ID: 8553
// Name: MarkupParsers
// Dependencies: [1072, 1090, 1452, 5749, 8553, 8557, 8574, 8583, 1243, 2]
// Exports: parseEmbedDescriptionMarkup, parseEmbedTitleMarkup, parseEmbedTitleMarkupWithoutLinks, parseMessageMarkup

// Module 8552 (MarkupParsers)
import Constants from "Constants" /* 1072 */;
import DurationsDefault from "Durations" /* 1090 */;
import SentryUtilsDefault from "SentryUtils" /* 1243 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5749 */;
import NativeMarkdownExperiment from "NativeMarkdownExperiment" /* 8553 */;
import renderMessageMarkup from "renderMessageMarkup" /* 8574 */;
import parseNativeMarkupDefault from "parseNativeMarkup" /* 8583 */;
import LRUCache_mod from "LRUCache" /* 1452 */;
import size from "module_2" /* 2 */;

let LRUCache;
let tmp;
const ChangeLogStandardTemplate = tmp(8557);
const MessageTypes = Constants.MessageTypes;
let obj = { max: Infinity, maxAge: 15 * DurationsDefault.Millis.MINUTE, updateAgeOnGet: true };
const tmp2 = new LRUCache(obj);
let closure_4 = tmp2;
let closure_5 = new LRUCache(obj);
let obj2 = { updateAgeOnGet: false };
const tmp3 = new LRUCache(obj);
LRUCache = LRUCache_mod;
let merged = Object.assign(obj);
const importDefaultResult1 = new LRUCache(obj2);
const tmp7 = new LRUCache(obj);
let closure_7 = tmp7;
let result = size.fileFinishedImporting("modules/messages/native/renderer/MarkupParsers.tsx");

export function parseEmbedTitleMarkup(rawName, channelId) {
  const combined = "" + rawName + "-" + channelId;
  let value = closure_4.get(combined);
  const obj = closure_4;
  if (null == value) {
    const obj3 = { channelId };
    const obj2 = MarkupUtilsDefault;
    const parseEmbedTitleToASTResult = obj2.parseEmbedTitleToAST(rawName, true, obj3);
    const result = obj.set(combined, parseEmbedTitleToASTResult);
    value = parseEmbedTitleToASTResult;
  }
  return value;
}
export function parseEmbedTitleMarkupWithoutLinks(arg0, channelId) {
  const combined = "" + arg0 + "-" + channelId + "-nolinks";
  let value = closure_5.get(combined);
  const obj = closure_5;
  if (null == value) {
    const obj3 = { channelId };
    const obj2 = MarkupUtilsDefault;
    const result = obj2.parseEmbedTitleWithoutLinksToAST(arg0, true, obj3);
    const result1 = obj.set(combined, result);
    value = result;
  }
  return value;
}
export function parseEmbedDescriptionMarkup(arg0) {
  let channelId;
  let description;
  let ignoreCache;
  let isField;
  let replaceMap;
  let showListsAndHeaders;
  let showMaskedLinks;
  let tmp9;
  ({ description, channelId, isField, replaceMap, showListsAndHeaders } = arg0);
  ({ ignoreCache, showMaskedLinks } = arg0);
  const combined = "" + description + "-" + channelId;
  const value = importDefaultResult1.get(combined);
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
      replaced = replaced.replaceAll(tmp7, replaceMap[tmp7]);
      continue;
    }
  }
  const obj = { channelId, allowGameMentions: true, allowLinks: true, allowEmojiLinks: true, allowHeading: tmp9, allowList: showListsAndHeaders, previewLinkTarget: showMaskedLinks };
  tmp9 = !isField;
  const parseToAST = MarkupUtilsDefault.parseToAST;
  MarkupUtilsDefault;
  if (!isField) {
    tmp9 = showListsAndHeaders;
  }
  const parseToASTResult = parseToAST(tmp4, true, obj);
  const result = importDefaultResult1.set(combined, parseToASTResult);
  return parseToASTResult;
}
export function parseMessageMarkup(message, message2, forceHideSimpleEmbedContent, isInlineReplyPreview, arg4, result, result2) {
  let tmp10;
  function parseMessageContentToAST(message, arg1, result) {
    const tmp = result;
    if (!tmp) {
      const obj3 = renderMessageMarkup;
      return obj3.renderMessageMarkupToAST(message, arg1);
    } else {
      try {
        const obj = renderMessageMarkup;
        return obj.renderMessageMarkupToASTWithParser(parseNativeMarkupDefault, message, arg1);
      } catch (tmp5) {
        const obj2 = SentryUtilsDefault;
        obj2.captureException(tmp5);
      }
    }
  }
  let flag = isInlineReplyPreview;
  if (isInlineReplyPreview === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = false;
  }
  let flag3 = result;
  if (result === undefined) {
    flag3 = false;
  }
  let flag4 = result2;
  if (result2 === undefined) {
    flag4 = false;
  }
  let tmp = require;
  let obj = NativeMarkdownExperiment;
  result = obj.isNativeMarkdownEnabled({ location: "parseMessageMarkup" });
  let obj2 = closure_7;
  const value = closure_7.get(message);
  if (null != value) {
    if (value.isInlineReplyPreview === flag) {
      if (value.nativeMarkdownEnabled === result) {
        return value;
      }
    }
  }
  if (message.type === MessageTypes.CHANGELOG) {
    if (null != message.changelogId) {
      const astParserFor = MarkupUtilsDefault.astParserFor;
      MarkupUtilsDefault;
      let obj3 = { hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowHeading: tmp10, allowList: flag2, allowLinks: flag4, previewLinkTarget: flag4 };
      tmp10 = flag2;
      const content = message.content;
      const tmpResult = ChangeLogStandardTemplate;
      const astParserForResult = astParserFor(tmpResult.changelogRules(message.changelogId, true));
      if (!flag2) {
        tmp10 = flag3;
      }
      if (!flag2) {
        flag2 = flag3;
      }
      const obj4 = { content: astParserForResult(content, false, obj3), isInlineReplyPreview: false, hasSpoilerEmbeds: false, hasBailedAst: false, nativeMarkdownEnabled: result };
      const result1 = obj2.set(message, obj4);
      return obj4;
    }
  }
  const obj6 = { isInlineReplyPreview: flag, nativeMarkdownEnabled: result };
  const obj5 = { contentMessage: message2, hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowGameMentions: true, allowHeading: flag2 || flag3, allowList: flag2 || flag3, allowLinks: flag4, previewLinkTarget: flag4 };
  const merged = Object.assign(parseMessageContentToAST(message, obj5, result));
  result2 = obj2.set(message, obj6);
  return obj6;
}
