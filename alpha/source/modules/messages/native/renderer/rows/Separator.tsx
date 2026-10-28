// Module ID: 14834
// Function ID: 14835
// Name: Separator
// Dependencies: [8166, 5004, 587, 5180, 1385, 2]
// Exports: generateSeparatorRowData

// Module 14834 (Separator)
import nativeDefault from "native" /* 587 */;
import GlobalUtils from "GlobalUtils" /* 1385 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 5180 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8166 */;
import createStyles from "createStyles" /* 5004 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ RowType: c2, SeparatorType: c3 } = RowGeneratorConstants);
let obj = { dayColor: nativeDefault.colors.TEXT_MUTED, unreadTextColor: nativeDefault.colors.MOBILE_CHAT_NEW_MESSAGE_TEXT, unreadBorderColor: nativeDefault.colors.MOBILE_CHAT_NEW_MESSAGE_BORDER, summaryColor: nativeDefault.colors.TEXT_BRAND };
let closure_4 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/messages/native/renderer/rows/Separator.tsx");

export const generateSeparatorRowData = function generateSeparatorRowData(text, theme) {
  let changeType;
  let obj3;
  let rowType;
  ({ rowType, changeType } = text);
  const tmp = closure_4(theme);
  if (constants2.DAY === rowType) {
    return { type: constants.SEPARATOR, id: rowType, color: tmp.dayColor, text: text.text, changeType };
  } else if (constants2.UNREAD === rowType) {
    const obj4 = { type: constants.SEPARATOR, id: rowType, color: null, borderColor: null, changeType, text: text.text };
    ({ unreadTextColor: obj5.color, unreadBorderColor: obj5.borderColor } = tmp);
    return obj4;
  } else if (constants2.SUMMARY === rowType) {
    const summary = text.summary;
    return { type: constants.SEPARATOR, id: rowType, color: tmp.summaryColor, text: summary.topic, summary, isBeforeContent: text.isBeforeContent, changeType };
  } else if (constants2.CONVERSATION === rowType) {
    const conversationHeader = text.conversationHeader;
    const obj10 = { type: constants.SEPARATOR, id: rowType, text: conversationHeader.title, conversationHeader, isCustomTheme: obj3.isCustomThemeActive(), changeType };
    obj3 = client_themes_ClientThemesUtils;
    return obj10;
  } else {
    const obj = GlobalUtils;
    obj.assertNever(rowType);
  }
};
