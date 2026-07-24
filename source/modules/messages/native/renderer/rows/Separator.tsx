// Module ID: 12351
// Function ID: 96174
// Name: generateSeparatorRowData
// Dependencies: [7711, 4130, 689, 1324, 1327, 2]
// Exports: generateSeparatorRowData

// Module 12351 (generateSeparatorRowData)
import Changeset from "Changeset";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
({ RowType: closure_2, SeparatorType: closure_3 } = Changeset);
let closure_4 = _createForOfIteratorHelperLoose.createNativeStyleProperties({ dayColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, unreadTextColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_CHAT_NEW_MESSAGE_TEXT, unreadBorderColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_CHAT_NEW_MESSAGE_BORDER, summaryColor: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND });
let obj = { dayColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, unreadTextColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_CHAT_NEW_MESSAGE_TEXT, unreadBorderColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_CHAT_NEW_MESSAGE_BORDER, summaryColor: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/native/renderer/rows/Separator.tsx");

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
    obj = require(1327) /* isDiscordFrontendDevelopment */;
    obj.assertNever(rowType);
  }
};
