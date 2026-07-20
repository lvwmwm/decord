// Module ID: 15090
// Function ID: 113795
// Name: isMediaEmbed
// Dependencies: []

// Module 15090 (isMediaEmbed)
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
  ({ lineClamp: closure_0, messageOptions } = pointerEvents);
  const importDefault = messageOptions;
  let str = pointerEvents.pointerEvents;
  ({ message, messageSizeCacheRef, maxHeight } = pointerEvents);
  if (str === undefined) {
    str = "none";
  }
  let closure_2;
  let importAllResult;
  let MessageEmbedTypes;
  let jsx;
  let obj = arg1(closure_2[8]);
  obj = { seeMoreLabelColor: importDefault(closure_2[9]).colors.TEXT_DEFAULT };
  closure_2 = obj.createNativeStyleProperties(obj)(importDefault(closure_2[7])());
  const RenderEmbeds = arg1(closure_2[10]).RenderEmbeds;
  const setting = RenderEmbeds.getSetting();
  importAllResult = setting;
  const InlineEmbedMedia = arg1(closure_2[10]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.getSetting();
  MessageEmbedTypes = setting1;
  const InlineAttachmentMedia = arg1(closure_2[10]).InlineAttachmentMedia;
  const setting2 = InlineAttachmentMedia.getSetting();
  jsx = setting2;
  const items = [setting, setting1, setting2, messageOptions];
  const memo = importAllResult.useMemo(() => {
    let tmp = messageOptions(closure_2[11]);
    tmp = new tmp();
    const merged = Object.assign(messageOptions);
    tmp.setOptions({ renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2 });
    return tmp;
  }, items);
  obj = {
    pointerEvents: str,
    horizontalOffset: 0,
    modifyRow(arg0) {
      arg0.contextType = callback(seeMoreLabelColor[13]).MessageContextType.SEARCH;
      if (null != callback) {
        const obj = { numberOfLines: callback, expandable: false };
        const intl = callback(seeMoreLabelColor[14]).intl;
        obj.seeMoreLabel = intl.string(callback(seeMoreLabelColor[14]).t.qCozu3);
        obj.seeMoreLabelColor = seeMoreLabelColor.seeMoreLabelColor;
        arg0.truncation = obj;
      }
    },
    message,
    rowGenerator: memo,
    messageSizeCacheRef,
    maxHeight
  };
  return jsx(importDefault(closure_2[12]), obj);
}
const importAllResult = importAll(dependencyMap[0]);
const MessageEmbedTypes = arg1(dependencyMap[1]).MessageEmbedTypes;
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = importAllResult.memo((message) => {
  message = message.message;
  const arg1 = message;
  let obj = Object.create(null);
  obj.message = 0;
  obj.messageOptions = 0;
  const merged = Object.assign(message, obj);
  const importDefault = merged;
  const items = [message];
  const memo = importAllResult.useMemo(() => {
    const result = message.set("content", null);
    const embeds = result.embeds;
    const result1 = result.set("embeds", embeds.filter((type) => callback2(type.type)));
    const attachments = result1.attachments;
    const result2 = result1.set("attachments", attachments.filter((arg0) => callback(closure_2[3]).isMediaAttachment(arg0)));
    return result2.set("editedTimestamp", null);
  }, items);
  const dependencyMap = memo;
  const items1 = [memo, , ];
  ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
  obj = {};
  const merged1 = Object.assign(importAllResult.useMemo(() => {
    const muted = merged.muted;
    return { message: memo, layout: message(memo[4]).ChannelListLayoutTypes.COZY, muted: tmp, lineClamp: merged.lineClamp };
  }, items1));
  obj = {};
  const merged2 = Object.assign(arg1(dependencyMap[5]).DEFAULT_OPTIONS);
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
  return <ICYMIMessageRowPreview {...obj} />;
});
const memoResult1 = importAllResult.memo((message) => {
  message = message.message;
  const arg1 = message;
  let obj = Object.create(null);
  obj.message = 0;
  obj.messageOptions = 0;
  const merged = Object.assign(message, obj);
  const importDefault = merged;
  const items = [message];
  const memo = importAllResult.useMemo(() => {
    const result = message.set("content", null);
    const embeds = result.embeds;
    const found = embeds.filter((type) => !callback2(type.type));
    const result1 = result.set("embeds", found.slice(0, 1));
    const attachments = result1.attachments;
    const found1 = attachments.filter((arg0) => !callback(closure_2[3]).isMediaAttachment(arg0));
    const result2 = result1.set("attachments", found1.slice(0, 1));
    return result2.set("editedTimestamp", null);
  }, items);
  const dependencyMap = memo;
  const items1 = [memo, , ];
  ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
  obj = {};
  const merged1 = Object.assign(importAllResult.useMemo(() => {
    const muted = merged.muted;
    return { message: memo, layout: message(memo[4]).ChannelListLayoutTypes.COZY, muted: tmp, lineClamp: merged.lineClamp };
  }, items1));
  obj = {};
  const merged2 = Object.assign(arg1(dependencyMap[5]).DEFAULT_OPTIONS);
  obj["ignoreMentioned"] = true;
  obj["renderReplies"] = false;
  obj["renderThreadEmbeds"] = false;
  obj["renderReactions"] = false;
  obj["renderEmbeds"] = true;
  obj["renderAttachments"] = true;
  const merged3 = Object.assign(message.messageOptions);
  obj["messageOptions"] = obj;
  return <ICYMIMessageRowPreview {...obj} />;
});
const memoResult2 = importAllResult.memo((message) => {
  message = message.message;
  const arg1 = message;
  let obj = Object.create(null);
  obj.message = 0;
  obj.messageOptions = 0;
  const merged = Object.assign(message, obj);
  const importDefault = merged;
  const items = [message, , , ];
  ({ lineClamp: arr[1], muted: arr[2], pointerEvents: arr[3] } = merged);
  const memo = importAllResult.useMemo(() => {
    const muted = merged.muted;
    return { message, lineClamp: merged.lineClamp, layout: message(closure_2[4]).ChannelListLayoutTypes.COZY, muted: tmp, pointerEvents: merged.pointerEvents };
  }, items);
  const tmp4 = importDefault(dependencyMap[6])(message);
  obj = {};
  const merged1 = Object.assign(memo);
  obj = {};
  const merged2 = Object.assign(arg1(dependencyMap[5]).DEFAULT_OPTIONS);
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
  return <ICYMIMessageRowPreview {...obj} />;
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/icymi/native/ICYMIMessageRowPreview.tsx");

export const MediaOnlyRowPreview = memoResult;
export const NonMediaEmbedsRowPreview = memoResult1;
export const MessageRowPreview = memoResult2;
