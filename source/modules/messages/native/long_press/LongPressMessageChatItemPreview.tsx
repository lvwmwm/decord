// Module ID: 9895
// Function ID: 76534
// Name: LongPressMessageChatItemPreview
// Dependencies: [33, 4130, 689, 7710, 9329, 2]
// Exports: default

// Module 9895 (LongPressMessageChatItemPreview)
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
  return jsx(importDefault(9329), { rowGenerator: closure_4, message: message.message, maxHeight: callback().chatItem.maxHeight });
};
