// Module ID: 10269
// Function ID: 10270
// Name: LongPressMessageChatItemPreview
// Dependencies: [21, 4344, 712, 8082, 8634, 2]
// Exports: default

// Module 10269 (LongPressMessageChatItemPreview)
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let obj = { chatItem: null };
obj = { maxHeight: 2 * require("Themes").space.PX_80 };
obj[0] = obj;
let closure_3 = createCacheKey.createStyles(obj);
let c4 = new require("setOptions")();
const tmp2 = new require("setOptions")();
const result = require("Themes").fileFinishedImporting("modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx");

export default function LongPressMessageChatItemPreview(message) {
  const obj = { rowGenerator: closure_4, message: message.message, maxHeight: callback().chatItem.maxHeight, backgroundColor: null };
  const tmp = callback();
  obj[3] = importDefault(712).colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
  return jsx(importDefault(8634), { rowGenerator: closure_4, message: message.message, maxHeight: callback().chatItem.maxHeight, backgroundColor: null });
};
