// Module ID: 12140
// Function ID: 12141
// Name: LongPressMessageChatItemPreview
// Dependencies: [21, 4913, 575, 8669, 10100, 2]
// Exports: default

// Module 12140 (LongPressMessageChatItemPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import RowGeneratorDefault from "RowGenerator" /* 8669 */;
import ChatItemDefault from "ChatItem" /* 10100 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = { chatItem: { maxHeight: 2 * nativeDefault.space.PX_80 } };
({ maxHeight: 2 * nativeDefault.space.PX_80 });
let closure_3 = createStyles.createStyles(obj);
const tmp2 = new RowGeneratorDefault();
const rowGenerator = tmp2;
const result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx");

export default function LongPressMessageChatItemPreview(message) {
  message = message.message;
  ChatItemDefault;
  return <tmp2 rowGenerator={rowGenerator} message={message} maxHeight={closure_3().chatItem.maxHeight} backgroundColor={nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT} pointerEvents="none" />;
};
