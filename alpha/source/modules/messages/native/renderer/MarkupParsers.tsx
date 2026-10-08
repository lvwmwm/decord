// Module ID: 8093
// Function ID: 8094
// Name: MarkupParsers
// Dependencies: [1085, 1102, 1456, 5077, 8094, 8095, 8114, 8123, 1254, 2]
// Exports: parseEmbedDescriptionMarkup, parseEmbedTitleMarkup, parseEmbedTitleMarkupWithoutLinks, parseMessageMarkup

// Module 8093 (MarkupParsers)
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import SentryUtilsDefault from "SentryUtils" /* 1254 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5077 */;
import NativeMarkdownExperiment2 from "NativeMarkdownExperiment" /* 8094 */;
import renderMessageMarkup from "renderMessageMarkup" /* 8114 */;
import parseNativeMarkupDefault from "parseNativeMarkup" /* 8123 */;
import LRUCache_mod from "LRUCache" /* 1456 */;
import size from "module_2" /* 2 */;

let LRUCache;
let tmp;
const ChangeLogStandardTemplate = tmp(8095);
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
let tmp7 = new LRUCache(obj);
let closure_7 = tmp7;
let result = size.fileFinishedImporting("modules/messages/native/renderer/MarkupParsers.tsx");

export const parseEmbedTitleMarkup = function parseEmbedTitleMarkup(rawName, channelId) {
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
};
export const parseEmbedTitleMarkupWithoutLinks = function parseEmbedTitleMarkupWithoutLinks(arg0, channelId) {
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
};
export const parseEmbedDescriptionMarkup = function parseEmbedDescriptionMarkup(arg0) {
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
};
export const parseMessageMarkup = function parseMessageMarkup(message, message2, forceHideSimpleEmbedContent, isInlineReplyPreview, arg4, result, result2) {
  let tmp9;
  function parseMessageContentToAST(message, arg1, enabled) {
    const tmp = enabled;
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
  const NativeMarkdownExperiment = NativeMarkdownExperiment2.NativeMarkdownExperiment;
  const enabled = NativeMarkdownExperiment.getConfig({ location: "parseMessageMarkup" }).enabled;
  let obj = closure_7;
  const value = closure_7.get(message);
  if (null != value) {
    if (value.isInlineReplyPreview === flag) {
      if (value.nativeMarkdownEnabled === enabled) {
        return value;
      }
    }
  }
  if (message.type === MessageTypes.CHANGELOG) {
    if (null != message.changelogId) {
      const astParserFor = MarkupUtilsDefault.astParserFor;
      let obj2 = { hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowHeading: tmp9, allowList: flag2, allowLinks: flag4, previewLinkTarget: flag4 };
      tmp9 = flag2;
      const content = message.content;
      const tmpResult = ChangeLogStandardTemplate;
      const astParserForResult = astParserFor(tmpResult.changelogRules(message.changelogId, true));
      if (!flag2) {
        tmp9 = flag3;
      }
      if (!flag2) {
        flag2 = flag3;
      }
      let obj3 = { content: astParserForResult(content, false, obj2), isInlineReplyPreview: false, hasSpoilerEmbeds: false, hasBailedAst: false, nativeMarkdownEnabled: enabled };
      result = obj.set(message, obj3);
      return obj3;
    }
  }
  const obj5 = { isInlineReplyPreview: flag, nativeMarkdownEnabled: enabled };
  const obj4 = { contentMessage: message2, hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowGameMentions: true, allowHeading: flag2 || flag3, allowList: flag2 || flag3, allowLinks: flag4, previewLinkTarget: flag4 };
  const merged = Object.assign(parseMessageContentToAST(message, obj4, enabled));
  const result1 = obj.set(message, obj5);
  return obj5;
};
