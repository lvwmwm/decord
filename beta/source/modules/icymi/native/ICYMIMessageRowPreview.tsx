// Module ID: 16135
// Function ID: 16136
// Name: ICYMIMessageRowPreview
// Dependencies: [19, 1074, 21, 7323, 7304, 7376, 6720, 4767, 4836, 576, 2021, 7374, 8112, 7583, 1115, 2]

// Module 16135 (ICYMIMessageRowPreview)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import createStyles from "createStyles" /* 4836 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7304 */;
import RowGeneratorDefault from "RowGenerator" /* 7374 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 7583 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap, type;

function ICYMIMessageRowPreview(pointerEvents) {
  let maxHeight;
  let message;
  let messageOptions;
  let messageSizeCacheRef;
  let seeMoreLabelColor;
  ({ lineClamp: require, messageOptions } = pointerEvents);
  let str = pointerEvents.pointerEvents;
  ({ message, messageSizeCacheRef, maxHeight } = pointerEvents);
  if (str === undefined) {
    str = "none";
  }
  let tmp = messageOptions(4767)();
  let obj = createStyles;
  const obj2 = { seeMoreLabelColor: messageOptions(576).colors.TEXT_DEFAULT };
  dependencyMap = obj.createNativeStyleProperties(obj2)(tmp);
  const RenderEmbeds = UserSettings.RenderEmbeds;
  const setting = RenderEmbeds.getSetting();
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.getSetting();
  const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
  const setting2 = InlineAttachmentMedia.getSetting();
  const items = [setting, setting1, setting2, messageOptions];
  const memo = setting.useMemo(() => {
    const tmp = new RowGeneratorDefault();
    const setOptions = tmp.setOptions;
    const obj = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReactions: false, animateEmoji: false, gifAutoPlay: false, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true };
    const merged = Object.assign(messageOptions);
    setOptions(obj);
    return tmp;
  }, items);
  const obj3 = {
    pointerEvents: str,
    horizontalOffset: 0,
    modifyRow(arg0) {
      let intl;
      arg0.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
      if (null != require) {
        const obj = { numberOfLines: tmp3, expandable: false, seeMoreLabel: intl.string(intl2.t.qCozu3), seeMoreLabelColor: seeMoreLabelColor.seeMoreLabelColor };
        intl = tmp(1115).intl;
        arg0.truncation = obj;
      }
    },
    message,
    rowGenerator: memo,
    messageSizeCacheRef,
    maxHeight
  };
  return setting2(messageOptions(8112), obj3);
}
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const jsx = Fragment.jsx;
const memoResult = react.memo((message) => {
  message = message.message;
  const messageOptions = message.messageOptions;
  const merged = Object.assign(message, Object.assign({ message: 0, messageOptions: 0 }));
  const items = [message];
  const memo = react.useMemo(() => {
    const result = message.set("content", null);
    const embeds = result.embeds;
    const result1 = result.set("embeds", embeds.filter((type) => {
      type = type.type;
      return type === constants.IMAGE || type === constants.GIFV;
    }));
    const attachments = result1.attachments;
    const result2 = result1.set("attachments", attachments.filter((item) => {
      const obj = message(memo[3]);
      return obj.isMediaAttachment(item);
    }));
    return result2.set("editedTimestamp", null);
  }, items);
  const items1 = [memo, , ];
  ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
  const merged1 = Object.assign(react.useMemo(() => {
    let flag;
    let tmp;
    const obj = { message: memo, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted: flag, lineClamp: tmp.lineClamp };
    flag = merged.muted;
    tmp = merged;
    if (flag == null) {
      flag = false;
    }
    return obj;
  }, items1));
  const obj2 = { ignoreMentioned: true, renderReplies: false, renderThreadEmbeds: false, renderReactions: false, renderEmbeds: true, gifAutoPlay: true, animateEmoji: true, renderPolls: true, inlineEmbedMedia: true, renderForumPostActions: false, renderAttachments: true };
  const merged2 = Object.assign(message(memo[5]).DEFAULT_OPTIONS);
  const merged3 = Object.assign(messageOptions);
  return <ICYMIMessageRowPreview messageOptions={obj2} />;
});
const memoResult1 = react.memo((message) => {
  message = message.message;
  const messageOptions = message.messageOptions;
  const merged = Object.assign(message, Object.assign({ message: 0, messageOptions: 0 }));
  const items = [message];
  const memo = react.useMemo(() => {
    const result = message.set("content", null);
    const embeds = result.embeds;
    const found = embeds.filter((type) => {
      type = type.type;
      return !(type === constants.IMAGE || type === constants.GIFV);
    });
    const result1 = result.set("embeds", found.slice(0, 1));
    const attachments = result1.attachments;
    const found1 = attachments.filter((item) => {
      const obj = message(memo[3]);
      return !obj.isMediaAttachment(item);
    });
    const result2 = result1.set("attachments", found1.slice(0, 1));
    return result2.set("editedTimestamp", null);
  }, items);
  const items1 = [memo, , ];
  ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
  const merged1 = Object.assign(react.useMemo(() => {
    let flag;
    let tmp;
    const obj = { message: memo, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted: flag, lineClamp: tmp.lineClamp };
    flag = merged.muted;
    tmp = merged;
    if (flag == null) {
      flag = false;
    }
    return obj;
  }, items1));
  const obj2 = { ignoreMentioned: true, renderReplies: false, renderThreadEmbeds: false, renderReactions: false, renderEmbeds: true, renderAttachments: true };
  const merged2 = Object.assign(message(memo[5]).DEFAULT_OPTIONS);
  const merged3 = Object.assign(messageOptions);
  return <ICYMIMessageRowPreview messageOptions={obj2} />;
});
const memoResult2 = react.memo((message) => {
  message = message.message;
  const messageOptions = message.messageOptions;
  const merged = Object.assign(message, Object.assign({ message: 0, messageOptions: 0 }));
  const items = [message, , , ];
  ({ lineClamp: arr[1], muted: arr[2], pointerEvents: arr[3] } = merged);
  const memo = react.useMemo(() => {
    let flag;
    let tmp;
    const obj = { message, lineClamp: merged.lineClamp, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted: flag, pointerEvents: tmp.pointerEvents };
    flag = merged.muted;
    tmp = merged;
    if (flag == null) {
      flag = false;
    }
    return obj;
  }, items);
  const tmp3 = merged(6720)(message);
  const merged1 = Object.assign(memo);
  const obj2 = { ignoreMentioned: true, renderReplies: false, renderThreadEmbeds: false, renderReactions: false, gifAutoPlay: true, animateEmoji: true, renderPolls: true, renderForumPostActions: false, renderAttachments: tmp3, renderEmbeds: tmp3, inlineEmbedMedia: tmp3 };
  const merged2 = Object.assign(message(7376).DEFAULT_OPTIONS);
  const merged3 = Object.assign(messageOptions);
  return <ICYMIMessageRowPreview messageOptions={obj2} seeMoreLabel="..." />;
});
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIMessageRowPreview.tsx");

export const MediaOnlyRowPreview = memoResult;
export const NonMediaEmbedsRowPreview = memoResult1;
export const MessageRowPreview = memoResult2;
