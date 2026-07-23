// Module ID: 7626
// Function ID: 61077
// Name: generateMessageRowData
// Dependencies: [7627, 7622, 7628, 1212, 7789, 2]
// Exports: generateMessageRowData

// Module 7626 (generateMessageRowData)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { RowType } from "Changeset";

const require = arg1;
const result = require("createThreadEmbed").fileFinishedImporting("modules/messages/native/renderer/MessageWithContent.tsx");

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
  obj = { type: RowType.MESSAGE, message: importDefault(7628)(obj), canAddNewReactions };
  obj = { options, message, roleStyle, isFirst, isEditing, canShowImages: undefined === canShowImages || canShowImages, isSystemDM: tmp, isInlineReplyPreview: false, pushFeedbackType, renderContentOnly, showContentInventoryEntryFallbackEmbed: canShowImages.showContentInventoryEntryFallbackEmbed };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.addNewReactionAccessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.lfIHs4);
  obj.reactionsTheme = reactionsTheme;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.highlightLabel = intl2.string(require(1212) /* getSystemLocale */.t["IOS/dU"]);
  obj.renderContentOnly = renderContentOnly;
  obj.separatorBefore = separatorBefore;
  obj.changeType = changeType;
  obj.truncation = truncation;
  obj.alwaysShowAddReaction = tmp3;
  if (null == overrideBackgroundHighlight) {
    obj = { message, theme, isEditing, isAutomodBlockedMessage: null != message.getMessage(message.id) };
    overrideBackgroundHighlight = importDefault(7789).createBackgroundHighlight(obj);
    const obj3 = importDefault(7789);
  }
  obj.backgroundHighlight = overrideBackgroundHighlight;
  let canReply = options.enableSwipeActions;
  if (canReply) {
    canReply = canShowImages.canReply;
  }
  obj.swipeActions = importDefault(7789).createSwipeActions(canReply, options.enableSwipeActions && canShowImages.canEdit);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.replyAccessibilityLabel = intl3.string(require(1212) /* getSystemLocale */.t["5IEsGx"]);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.forwardAccessibilityLabel = intl4.string(require(1212) /* getSystemLocale */.t.I3ltXO);
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj.threadAccessibilityLabel = intl5.string(require(1212) /* getSystemLocale */.t.rBIGBL);
  const forcedTheme = options.forcedTheme;
  let tmp9;
  if (null != forcedTheme) {
    tmp9 = forcedTheme;
  }
  obj.forcedTheme = tmp9;
  return obj;
};
