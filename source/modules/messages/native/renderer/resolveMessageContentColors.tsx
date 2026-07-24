// Module ID: 7731
// Function ID: 61474
// Name: result
// Dependencies: [4130, 3976, 689, 2]
// Exports: default

// Module 7731 (result)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const result = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  const obj = require(3976) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  return require(3976) /* AccessibilityAnnouncer */.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_300 : unsafe_rawColors.PRIMARY_630;
});
let obj = {};
const result1 = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  const obj = require(3976) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  return require(3976) /* AccessibilityAnnouncer */.isThemeDark(theme.theme) ? unsafe_rawColors.BRAND_260 : unsafe_rawColors.BRAND_200;
});
obj.textColor = require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG;
obj.linkColor = require("_createForOfIteratorHelperLoose").colors.TEXT_LINK;
obj.timestampColor = require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED;
obj.highlightColor = require("_createForOfIteratorHelperLoose").colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
obj.unsupportedColor = require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED;
obj.embedProviderColor = result;
obj.embedBorderLeftColor = require("_createForOfIteratorHelperLoose").colors.BORDER_NORMAL;
obj.embedBodyTextColor = require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT;
obj.embedHeaderTextColor = require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY;
obj.opTagTextColor = require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_560;
obj.opTagBackgroundColor = result1;
obj.failedMessageBodyTextColor = require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400;
obj.automodBlockedBodyTextColor = require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED;
obj.aiBotTagColor = require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_POSITIVE;
obj.editedColor = require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED;
obj.defaultUsernameColor = require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE;
obj.feedbackColor = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED;
obj.reportFpTextColor = require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_TEXT_DEFAULT;
obj.reportFpBackgroundColor = require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
obj.retryTextColor = require("_createForOfIteratorHelperLoose").colors.WHITE;
obj.retryBackgroundColor = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND;
obj.clipTagBackgroundColor = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND;
obj.clipTagTextColor = require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE;
let closure_4 = _createForOfIteratorHelperLoose.createNativeStyleProperties((arg0) => {
  const obj = {};
  const colors = importDefault(689).colors;
  obj.embedBackgroundColor = arg0 ? colors.EMBED_BACKGROUND_ALTERNATE : colors.EMBED_BACKGROUND;
  const merged = Object.assign(obj);
  return obj;
});
const result2 = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/native/renderer/resolveMessageContentColors.tsx");

export default function resolveMessageContentColors(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  return callback(arg0, flag);
};
