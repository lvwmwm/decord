// Module ID: 12206
// Function ID: 93757
// Name: generateSeparatorRowData
// Dependencies: []
// Exports: generateSeparatorRowData

// Module 12206 (generateSeparatorRowData)
const _module = require(dependencyMap[0]);
({ RowType: closure_2, SeparatorType: closure_3 } = _module);
const _module1 = require(dependencyMap[1]);
let closure_4 = _module1.createNativeStyleProperties({ dayColor: importDefault(dependencyMap[2]).colors.TEXT_MUTED, unreadTextColor: importDefault(dependencyMap[2]).colors.MOBILE_CHAT_NEW_MESSAGE_TEXT, unreadBorderColor: importDefault(dependencyMap[2]).colors.MOBILE_CHAT_NEW_MESSAGE_BORDER, summaryColor: importDefault(dependencyMap[2]).colors.TEXT_BRAND });
const _module2 = require(dependencyMap[5]);
const result = _module2.fileFinishedImporting("modules/messages/native/renderer/rows/Separator.tsx");

export const generateSeparatorRowData = function generateSeparatorRowData(text, theme) {
  let changeType;
  let rowType;
  ({ rowType, changeType } = text);
  const tmp = callback(theme);
  if (constants2.DAY === rowType) {
    let obj = { type: constants.SEPARATOR, id: rowType, color: tmp.dayColor, text: text.text, changeType };
    return obj;
  } else if (constants2.UNREAD === rowType) {
    obj = { type: constants.SEPARATOR, id: rowType, color: tmp.unreadTextColor };
    let unreadBorderColor;
    if (obj4.isMobileVisualRefreshEnabled("Separator")) {
      unreadBorderColor = tmp.unreadBorderColor;
    }
    obj.borderColor = unreadBorderColor;
    obj.changeType = changeType;
    obj.text = text.text;
    return obj;
  } else if (constants2.SUMMARY === rowType) {
    const summary = text.summary;
    const obj1 = { type: constants.SEPARATOR, id: rowType, color: tmp.summaryColor, text: summary.topic, summary, isBeforeContent: text.isBeforeContent, changeType };
    return obj1;
  } else {
    obj = require(dependencyMap[4]);
    obj.assertNever(rowType);
  }
};
