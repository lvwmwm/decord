// Module ID: 12015
// Function ID: 12016
// Name: LongPressMessageChatItemPreview
// Dependencies: [21, 4794, 575, 8549, 9980, 2]
// Exports: default

// Module 12015 (LongPressMessageChatItemPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import RowGeneratorDefault from "RowGenerator" /* 8549 */;
import ChatItemDefault from "ChatItem" /* 9980 */;
import createStyles from "createStyles" /* 4794 */;
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
