// Module ID: 16390
// Function ID: 16391
// Name: MessagesItemPlaceholder
// Dependencies: [19, 21, 10091, 2]

// Module 16390 (MessagesItemPlaceholder)
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 10091 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default noop.memo(function MessagesItemPlaceholder(arg0) {
  ({ row, height } = arg0);
  return jsx(UserPlaceholderRowDefault, { row, height });
});
