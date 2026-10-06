// Module ID: 12823
// Function ID: 12824
// Name: Separator
// Dependencies: [7379, 4837, 588, 1376, 2]
// Exports: generateSeparatorRowData

// Module 12823 (Separator)
import nativeDefault from "native" /* 588 */;
import GlobalUtils from "GlobalUtils" /* 1376 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7379 */;
import createStyles from "createStyles" /* 4837 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ RowType: c2, SeparatorType: c3 } = RowGeneratorConstants);
let obj = { dayColor: nativeDefault.colors.TEXT_MUTED, unreadTextColor: nativeDefault.colors.MOBILE_CHAT_NEW_MESSAGE_TEXT, unreadBorderColor: nativeDefault.colors.MOBILE_CHAT_NEW_MESSAGE_BORDER, summaryColor: nativeDefault.colors.TEXT_BRAND };
let closure_4 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/messages/native/renderer/rows/Separator.tsx");

export const generateSeparatorRowData = function generateSeparatorRowData(text, theme) {
  let changeType;
  let rowType;
  ({ rowType, changeType } = text);
  const tmp = closure_4(theme);
  if (constants2.DAY === rowType) {
    return { type: constants.SEPARATOR, id: rowType, color: tmp.dayColor, text: text.text, changeType };
  } else if (constants2.UNREAD === rowType) {
    const obj4 = { type: constants.SEPARATOR, id: rowType, color: null, borderColor: null, changeType, text: text.text };
    ({ unreadTextColor: obj3.color, unreadBorderColor: obj3.borderColor } = tmp);
    return obj4;
  } else if (constants2.SUMMARY === rowType) {
    const summary = text.summary;
    return { type: constants.SEPARATOR, id: rowType, color: tmp.summaryColor, text: summary.topic, summary, isBeforeContent: text.isBeforeContent, changeType };
  } else {
    const obj = GlobalUtils;
    obj.assertNever(rowType);
  }
};
