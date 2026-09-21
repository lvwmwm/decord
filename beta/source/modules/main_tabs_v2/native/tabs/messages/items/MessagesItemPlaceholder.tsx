// Module ID: 16379
// Function ID: 16380
// Name: MessagesItemPlaceholder
// Dependencies: [19, 21, 10085, 2]

// Module 16379 (MessagesItemPlaceholder)
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 10085 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default noop.memo(function MessagesItemPlaceholder(arg0) {
  ({ row, height } = arg0);
  return jsx(UserPlaceholderRowDefault, { row, height });
});
