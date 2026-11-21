// Module ID: 18147
// Function ID: 18148
// Name: CustomStatusEntryRow
// Dependencies: [19, 21, 18143, 18148, 2]
// Exports: default

// Module 18147 (CustomStatusEntryRow)
import Fragment from "Fragment" /* 21 */;
import useReplyActions from "useReplyActions" /* 18143 */;
import ICYMICustomStatusRowDefault from "ICYMICustomStatusRow" /* 18148 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/CustomStatusEntryRow.tsx");

export default function CustomStatusEntryRow(content) {
  let openEmojiPicker;
  let openReplyActionSheet;
  let renderForScreenshot;
  let visible;
  content = content.content;
  ({ renderForScreenshot, visible } = content);
  const obj = useReplyActions;
  const replyActions = obj.useReplyActions({ content });
  ({ openEmojiPicker, openReplyActionSheet } = replyActions);
  return jsx(ICYMICustomStatusRowDefault, { id: content.id, userId: content.author_id, customStatusExtra: content.extra, renderForScreenshot, visible, variant: { kind: "otherUserStatus", handlePressPrimary: openReplyActionSheet, handlePressSecondary: openEmojiPicker } });
};
