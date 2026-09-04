// Module ID: 11605
// Function ID: 11606
// Name: LongPressMessageChatItemPreview
// Dependencies: [21, 4481, 709, 7863, 8582, 2]
// Exports: default

// Module 11605 (LongPressMessageChatItemPreview)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 709 */;
import setOptionsDefault from "setOptions" /* 7863 */;
import DCDChatItemDefault from "DCDChatItem" /* 8582 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const jsx = jsxProd.jsx;
let obj = { chatItem: null };
obj = { maxHeight: 2 * ThemesDefault.space.PX_80 };
obj[0] = obj;
let closure_3 = createCacheKey.createStyles(obj);
let closure_4 = new setOptionsDefault();
const tmp2 = new setOptionsDefault();
const result = set.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx");

export default function LongPressMessageChatItemPreview(message) {
  const obj = { rowGenerator: closure_4, message: message.message, maxHeight: callback().chatItem.maxHeight, backgroundColor: null, pointerEvents: "none" };
  const tmp = callback();
  obj[3] = ThemesDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
  return jsx(DCDChatItemDefault, { rowGenerator: closure_4, message: message.message, maxHeight: callback().chatItem.maxHeight, backgroundColor: null, pointerEvents: "none" });
};
