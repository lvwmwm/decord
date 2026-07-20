// Module ID: 7615
// Function ID: 61006
// Name: generateMessageRowData
// Dependencies: []
// Exports: generateMessageRowData

// Module 7615 (generateMessageRowData)
let closure_3 = importDefault(dependencyMap[0]);
const RowType = arg1(dependencyMap[1]).RowType;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/messages/native/renderer/MessageWithContent.tsx");

export const generateMessageRowData = function generateMessageRowData(canShowImages, options, theme) {
  let alwaysShowAddReaction;
  let canAddNewReactions;
  let changeType;
  let isEditing;
  let isFirst;
  let isSystemDM;
  let message;
  let pushFeedbackType;
  let reactionsTheme;
  let renderContentOnly;
  let roleStyle;
  let separatorBefore;
  let truncation;
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
  let obj = { type: RowType.MESSAGE, message: importDefault(dependencyMap[2])(obj), canAddNewReactions };
  obj = { options, message, roleStyle, isFirst, isEditing, canShowImages: undefined === canShowImages || canShowImages, isSystemDM: tmp, isInlineReplyPreview: false, pushFeedbackType, renderContentOnly, showContentInventoryEntryFallbackEmbed: canShowImages.showContentInventoryEntryFallbackEmbed };
  const intl = options(dependencyMap[3]).intl;
  obj.addNewReactionAccessibilityLabel = intl.string(options(dependencyMap[3]).t.lfIHs4);
  obj.reactionsTheme = reactionsTheme;
  const intl2 = options(dependencyMap[3]).intl;
  obj.highlightLabel = intl2.string(options(dependencyMap[3]).t.IOS/dU);
  obj.renderContentOnly = renderContentOnly;
  obj.separatorBefore = separatorBefore;
  obj.changeType = changeType;
  obj.truncation = truncation;
  obj.alwaysShowAddReaction = tmp3;
  if (null == overrideBackgroundHighlight) {
    obj = { message, theme, isEditing, isAutomodBlockedMessage: null != message.getMessage(message.id) };
    overrideBackgroundHighlight = importDefault(dependencyMap[4]).createBackgroundHighlight(obj);
    const obj3 = importDefault(dependencyMap[4]);
  }
  obj.backgroundHighlight = overrideBackgroundHighlight;
  let canReply = options.enableSwipeActions;
  if (canReply) {
    canReply = canShowImages.canReply;
  }
  obj.swipeActions = importDefault(dependencyMap[4]).createSwipeActions(canReply, options.enableSwipeActions && canShowImages.canEdit);
  const intl3 = options(dependencyMap[3]).intl;
  obj.replyAccessibilityLabel = intl3.string(options(dependencyMap[3]).t.5IEsGx);
  const intl4 = options(dependencyMap[3]).intl;
  obj.forwardAccessibilityLabel = intl4.string(options(dependencyMap[3]).t.I3ltXO);
  const intl5 = options(dependencyMap[3]).intl;
  obj.threadAccessibilityLabel = intl5.string(options(dependencyMap[3]).t.rBIGBL);
  return obj;
};
