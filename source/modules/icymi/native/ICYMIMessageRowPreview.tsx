// Module ID: 15223
// Function ID: 116065
// Name: isMediaEmbed
// Dependencies: [31, 653, 33, 8328, 3808, 7623, 5679, 4066, 4130, 689, 3803, 7621, 9293, 7808, 1212, 2]

// Module 15223 (isMediaEmbed)
import importAllResult from "result";
import { MessageEmbedTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function isMediaEmbed(arg0) {
  let tmp = arg0 === MessageEmbedTypes.IMAGE;
  if (!tmp) {
    tmp = arg0 === MessageEmbedTypes.GIFV;
  }
  return tmp;
}
function ICYMIMessageRowPreview(pointerEvents) {
  let maxHeight;
  let message;
  let messageOptions;
  let messageSizeCacheRef;
  let require;
  ({ lineClamp: require, messageOptions } = pointerEvents);
  let str = pointerEvents.pointerEvents;
  ({ message, messageSizeCacheRef, maxHeight } = pointerEvents);
  if (str === undefined) {
    str = "none";
  }
  let dependencyMap;
  let setting;
  let setting1;
  let setting2;
  let obj = require(4130) /* _createForOfIteratorHelperLoose */;
  obj = { seeMoreLabelColor: messageOptions(689).colors.TEXT_DEFAULT };
  dependencyMap = obj.createNativeStyleProperties(obj)(messageOptions(4066)());
  const RenderEmbeds = require(3803) /* explicitContentFromProto */.RenderEmbeds;
  setting = RenderEmbeds.getSetting();
  const InlineEmbedMedia = require(3803) /* explicitContentFromProto */.InlineEmbedMedia;
  setting1 = InlineEmbedMedia.getSetting();
  const InlineAttachmentMedia = require(3803) /* explicitContentFromProto */.InlineAttachmentMedia;
  setting2 = InlineAttachmentMedia.getSetting();
  const items = [setting, setting1, setting2, messageOptions];
  const memo = setting.useMemo(() => {
    let tmp = messageOptions(seeMoreLabelColor[11]);
    tmp = new tmp();
    const obj = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReactions: false, animateEmoji: false, gifAutoPlay: false, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true };
    const merged = Object.assign(messageOptions);
    tmp.setOptions(obj);
    return tmp;
  }, items);
  obj = {
    pointerEvents: str,
    horizontalOffset: 0,
    modifyRow(arg0) {
      arg0.contextType = outer1_0(seeMoreLabelColor[13]).MessageContextType.SEARCH;
      if (null != closure_0) {
        const obj = { numberOfLines: closure_0, expandable: false };
        const intl = outer1_0(seeMoreLabelColor[14]).intl;
        obj.seeMoreLabel = intl.string(outer1_0(seeMoreLabelColor[14]).t.qCozu3);
        obj.seeMoreLabelColor = seeMoreLabelColor.seeMoreLabelColor;
        arg0.truncation = obj;
      }
    },
    message,
    rowGenerator: memo,
    messageSizeCacheRef,
    maxHeight
  };
  return setting2(messageOptions(9293), obj);
}
const memoResult = importAllResult.memo((message) => {
  message = message.message;
  let obj = Object.create(null);
  obj.message = 0;
  obj.messageOptions = 0;
  const merged = Object.assign(message, obj);
  const items = [message];
  const memo = importAllResult.useMemo(() => {
    const result = message.set("content", null);
    const embeds = result.embeds;
    const result1 = result.set("embeds", embeds.filter((type) => outer2_6(type.type)));
    const attachments = result1.attachments;
    const result2 = result1.set("attachments", attachments.filter((arg0) => message(memo[3]).isMediaAttachment(arg0)));
    return result2.set("editedTimestamp", null);
  }, items);
  const items1 = [memo, , ];
  ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
  obj = {};
  const merged1 = Object.assign(importAllResult.useMemo(() => {
    const muted = merged.muted;
    return { message: memo, layout: message(memo[4]).ChannelListLayoutTypes.COZY, muted: tmp, lineClamp: merged.lineClamp };
  }, items1));
  obj = {};
  const merged2 = Object.assign(message(memo[5]).DEFAULT_OPTIONS);
  obj["ignoreMentioned"] = true;
  obj["renderReplies"] = false;
  obj["renderThreadEmbeds"] = false;
  obj["renderReactions"] = false;
  obj["renderEmbeds"] = true;
  obj["gifAutoPlay"] = true;
  obj["animateEmoji"] = true;
  obj["renderPolls"] = true;
  obj["inlineEmbedMedia"] = true;
  obj["renderForumPostActions"] = false;
  obj["renderAttachments"] = true;
  const merged3 = Object.assign(message.messageOptions);
  obj["messageOptions"] = obj;
  return <ICYMIMessageRowPreview />;
});
const memoResult1 = importAllResult.memo((message) => {
  message = message.message;
  let obj = Object.create(null);
  obj.message = 0;
  obj.messageOptions = 0;
  const merged = Object.assign(message, obj);
  const items = [message];
  const memo = importAllResult.useMemo(() => {
    const result = message.set("content", null);
    const embeds = result.embeds;
    const found = embeds.filter((type) => !outer2_6(type.type));
    const result1 = result.set("embeds", found.slice(0, 1));
    const attachments = result1.attachments;
    const found1 = attachments.filter((arg0) => !message(memo[3]).isMediaAttachment(arg0));
    const result2 = result1.set("attachments", found1.slice(0, 1));
    return result2.set("editedTimestamp", null);
  }, items);
  const items1 = [memo, , ];
  ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
  obj = {};
  const merged1 = Object.assign(importAllResult.useMemo(() => {
    const muted = merged.muted;
    return { message: memo, layout: message(memo[4]).ChannelListLayoutTypes.COZY, muted: tmp, lineClamp: merged.lineClamp };
  }, items1));
  obj = {};
  const merged2 = Object.assign(message(memo[5]).DEFAULT_OPTIONS);
  obj["ignoreMentioned"] = true;
  obj["renderReplies"] = false;
  obj["renderThreadEmbeds"] = false;
  obj["renderReactions"] = false;
  obj["renderEmbeds"] = true;
  obj["renderAttachments"] = true;
  const merged3 = Object.assign(message.messageOptions);
  obj["messageOptions"] = obj;
  return <ICYMIMessageRowPreview />;
});
const memoResult2 = importAllResult.memo((message) => {
  message = message.message;
  let obj = Object.create(null);
  obj.message = 0;
  obj.messageOptions = 0;
  const merged = Object.assign(message, obj);
  const items = [message, , , ];
  ({ lineClamp: arr[1], muted: arr[2], pointerEvents: arr[3] } = merged);
  const memo = importAllResult.useMemo(() => {
    const muted = merged.muted;
    return { message, lineClamp: merged.lineClamp, layout: message(outer1_2[4]).ChannelListLayoutTypes.COZY, muted: tmp, pointerEvents: merged.pointerEvents };
  }, items);
  const tmp4 = merged(5679)(message);
  obj = {};
  const merged1 = Object.assign(memo);
  obj = {};
  const merged2 = Object.assign(message(7623).DEFAULT_OPTIONS);
  obj["ignoreMentioned"] = true;
  obj["renderReplies"] = false;
  obj["renderThreadEmbeds"] = false;
  obj["renderReactions"] = false;
  obj["gifAutoPlay"] = true;
  obj["animateEmoji"] = true;
  obj["renderPolls"] = true;
  obj["renderForumPostActions"] = false;
  obj["renderAttachments"] = tmp4;
  obj["renderEmbeds"] = tmp4;
  obj["inlineEmbedMedia"] = tmp4;
  const merged3 = Object.assign(message.messageOptions);
  obj["messageOptions"] = obj;
  obj["seeMoreLabel"] = "...";
  return <ICYMIMessageRowPreview />;
});
let result = require("jsxProd").fileFinishedImporting("modules/icymi/native/ICYMIMessageRowPreview.tsx");

export const MediaOnlyRowPreview = memoResult;
export const NonMediaEmbedsRowPreview = memoResult1;
export const MessageRowPreview = memoResult2;
