// Module ID: 15518
// Function ID: 15519
// Name: CustomStatusEntryRow
// Dependencies: [19, 21, 15514, 15519, 2]
// Exports: default

// Module 15518 (CustomStatusEntryRow)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useReplyActions").fileFinishedImporting("modules/icymi/native/content_inventory/CustomStatusEntryRow.tsx");

export default function CustomStatusEntryRow(content) {
  let openEmojiPicker;
  let openReplyActionSheet;
  let renderForScreenshot;
  let visible;
  content = content.content;
  ({ renderForScreenshot, visible } = content);
  let obj = require(15514) /* useReplyActions */;
  const replyActions = obj.useReplyActions({ content });
  ({ openEmojiPicker, openReplyActionSheet } = replyActions);
  obj = { id: content.id, userId: content.author_id, customStatusExtra: content.extra, renderForScreenshot, visible, variant: { kind: "otherUserStatus", handlePressPrimary: openReplyActionSheet, handlePressSecondary: openEmojiPicker } };
  return jsx(importDefault(15519), { id: content.id, userId: content.author_id, customStatusExtra: content.extra, renderForScreenshot, visible, variant: { kind: "otherUserStatus", handlePressPrimary: openReplyActionSheet, handlePressSecondary: openEmojiPicker } });
};
