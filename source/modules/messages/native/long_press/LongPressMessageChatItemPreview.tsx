// Module ID: 9859
// Function ID: 76259
// Name: LongPressMessageChatItemPreview
// Dependencies: [33, 4165, 689, 7690, 9266, 2]
// Exports: default

// Module 9859 (LongPressMessageChatItemPreview)
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "RowManager";

let obj = {};
obj = { maxHeight: 2 * require("_createForOfIteratorHelperLoose").space.PX_80 };
obj.chatItem = obj;
let closure_3 = _createForOfIteratorHelperLoose.createStyles(obj);
importDefaultResult = new importDefaultResult();
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx");

export default function LongPressMessageChatItemPreview(message) {
  const obj = { rowGenerator: closure_4, message: message.message, maxHeight: callback().chatItem.maxHeight };
  const tmp = callback();
  obj.backgroundColor = importDefault(689).colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
  return jsx(importDefault(9266), { rowGenerator: closure_4, message: message.message, maxHeight: callback().chatItem.maxHeight });
};
