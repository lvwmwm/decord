// Module ID: 7552
// Function ID: 7553
// Name: MessageWithContent
// Dependencies: [7553, 7548, 7555, 1115, 7747, 2]
// Exports: generateMessageRowData

// Module 7552 (MessageWithContent)
import util from "util" /* 1115 */;
import createMessageContentDefault from "createMessageContent" /* 7555 */;
import RowGeneratorUtilsDefault from "RowGeneratorUtils" /* 7747 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 7553 */;

require = fn;
const RowType = fn(7548).RowType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/MessageWithContent.tsx");

export const generateMessageRowData = function generateMessageRowData(canShowImages, options, theme) {
  ({ message, isEditing, isSystemDM } = canShowImages);
  let tmp = undefined !== isSystemDM;
  ({ changeType, roleStyle, isFirst, separatorBefore, canAddNewReactions, reactionsTheme } = canShowImages);
  if (tmp) {
    tmp = isSystemDM;
  }
  canShowImages = canShowImages.canShowImages;
  ({ renderContentOnly, alwaysShowAddReaction } = canShowImages);
  let tmp3 = undefined !== alwaysShowAddReaction;
  ({ truncation, pushFeedbackType } = canShowImages);
  if (tmp3) {
    tmp3 = alwaysShowAddReaction;
  }
  let overrideBackgroundHighlight = canShowImages.overrideBackgroundHighlight;
  const obj = { type: RowType.MESSAGE, message: createMessageContentDefault({ options, message, roleStyle, isFirst, isEditing, canShowImages: undefined === canShowImages || canShowImages, isSystemDM: tmp, isInlineReplyPreview: false, pushFeedbackType, renderContentOnly, showContentInventoryEntryFallbackEmbed: canShowImages.showContentInventoryEntryFallbackEmbed }), canAddNewReactions, addNewReactionAccessibilityLabel: null, reactionsTheme: null, highlightLabel: null, renderContentOnly: null, separatorBefore: null, changeType: null, truncation: null, alwaysShowAddReaction: null, backgroundHighlight: null, swipeActions: null, replyAccessibilityLabel: null, forwardAccessibilityLabel: null, threadAccessibilityLabel: null, forcedTheme: null };
  const intl = util.intl;
  obj.addNewReactionAccessibilityLabel = intl.string(util.t.lfIHs4);
  obj.reactionsTheme = reactionsTheme;
  const intl2 = util.intl;
  obj.highlightLabel = intl2.string(util.t["IOS/dU"]);
  obj.renderContentOnly = renderContentOnly;
  obj.separatorBefore = separatorBefore;
  obj.changeType = changeType;
  obj.truncation = truncation;
  obj.alwaysShowAddReaction = tmp3;
  if (overrideBackgroundHighlight == null) {
    const obj3 = { message, theme, isEditing, isAutomodBlockedMessage: null != GuildAutomodMessageStore.getMessage(message.id) };
    overrideBackgroundHighlight = tmp4(7747).createBackgroundHighlight(obj3);
    const tmp4Result = tmp4(7747);
  }
  obj.backgroundHighlight = overrideBackgroundHighlight;
  let canReply = options.enableSwipeActions;
  if (canReply) {
    canReply = canShowImages.canReply;
  }
  obj.swipeActions = RowGeneratorUtilsDefault.createSwipeActions(canReply, options.enableSwipeActions && canShowImages.canEdit);
  const intl3 = tmp6(1115).intl;
  obj.replyAccessibilityLabel = intl3.string(util.t["5IEsGx"]);
  const intl4 = tmp6(1115).intl;
  obj.forwardAccessibilityLabel = intl4.string(util.t.I3ltXO);
  const intl5 = tmp6(1115).intl;
  obj.threadAccessibilityLabel = intl5.string(util.t.rBIGBL);
  const forcedTheme = options.forcedTheme;
  obj.forcedTheme = forcedTheme;
  return obj;
};
