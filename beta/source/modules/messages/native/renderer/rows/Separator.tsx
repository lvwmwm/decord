// Module ID: 12821
// Function ID: 12822
// Name: Separator
// Dependencies: [7375, 4836, 576, 1370, 2]
// Exports: generateSeparatorRowData

// Module 12821 (Separator)
import nativeDefault from "native" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7375 */;
import createStyles from "createStyles" /* 4836 */;
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
