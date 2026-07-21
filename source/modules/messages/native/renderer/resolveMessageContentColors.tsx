// Module ID: 7635
// Function ID: 61129
// Name: result
// Dependencies: []
// Exports: default

// Module 7635 (result)
const _module = require(dependencyMap[0]);
const result = _module.experimental_createToken((theme) => {
  const obj = require(dependencyMap[1]);
  const unsafe_rawColors = importDefault(dependencyMap[2]).unsafe_rawColors;
  return require(dependencyMap[1]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_300 : unsafe_rawColors.PRIMARY_630;
});
const _module1 = require(dependencyMap[0]);
const obj = {};
const result1 = _module1.experimental_createToken((theme) => {
  const obj = require(dependencyMap[1]);
  const unsafe_rawColors = importDefault(dependencyMap[2]).unsafe_rawColors;
  return require(dependencyMap[1]).isThemeDark(theme.theme) ? unsafe_rawColors.BRAND_260 : unsafe_rawColors.BRAND_200;
});
obj.textColor = importDefault(dependencyMap[2]).colors.TEXT_STRONG;
obj.linkColor = importDefault(dependencyMap[2]).colors.TEXT_LINK;
obj.timestampColor = importDefault(dependencyMap[2]).colors.TEXT_MUTED;
obj.highlightColor = importDefault(dependencyMap[2]).colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
obj.unsupportedColor = importDefault(dependencyMap[2]).colors.TEXT_MUTED;
obj.embedProviderColor = result;
obj.embedBorderLeftColor = importDefault(dependencyMap[2]).colors.BORDER_NORMAL;
obj.embedBodyTextColor = importDefault(dependencyMap[2]).colors.TEXT_DEFAULT;
obj.embedHeaderTextColor = importDefault(dependencyMap[2]).colors.MOBILE_TEXT_HEADING_PRIMARY;
obj.opTagTextColor = importDefault(dependencyMap[2]).unsafe_rawColors.BRAND_560;
obj.opTagBackgroundColor = result1;
obj.failedMessageBodyTextColor = importDefault(dependencyMap[2]).unsafe_rawColors.RED_400;
obj.automodBlockedBodyTextColor = importDefault(dependencyMap[2]).colors.TEXT_MUTED;
obj.aiBotTagColor = importDefault(dependencyMap[2]).colors.TEXT_FEEDBACK_POSITIVE;
obj.editedColor = importDefault(dependencyMap[2]).colors.TEXT_MUTED;
obj.defaultUsernameColor = importDefault(dependencyMap[2]).colors.INTERACTIVE_TEXT_ACTIVE;
obj.feedbackColor = importDefault(dependencyMap[2]).colors.BACKGROUND_MOD_MUTED;
obj.reportFpTextColor = importDefault(dependencyMap[2]).colors.CONTROL_SECONDARY_TEXT_DEFAULT;
obj.reportFpBackgroundColor = importDefault(dependencyMap[2]).colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
obj.retryTextColor = importDefault(dependencyMap[2]).colors.WHITE;
obj.retryBackgroundColor = importDefault(dependencyMap[2]).colors.BACKGROUND_BRAND;
obj.clipTagBackgroundColor = importDefault(dependencyMap[2]).colors.BACKGROUND_BRAND;
obj.clipTagTextColor = importDefault(dependencyMap[2]).unsafe_rawColors.WHITE;
const _module2 = require(dependencyMap[0]);
let closure_4 = _module2.createNativeStyleProperties((arg0) => {
  const obj = {};
  const colors = importDefault(dependencyMap[2]).colors;
  obj.embedBackgroundColor = arg0 ? colors.EMBED_BACKGROUND_ALTERNATE : colors.EMBED_BACKGROUND;
  const merged = Object.assign(obj);
  return obj;
});
const _module3 = require(dependencyMap[3]);
const result2 = _module3.fileFinishedImporting("modules/messages/native/renderer/resolveMessageContentColors.tsx");

export default function resolveMessageContentColors(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  return callback(arg0, flag);
};
