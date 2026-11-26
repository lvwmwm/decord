// Module ID: 17574
// Function ID: 17575
// Name: MessagesItemPlaceholder
// Dependencies: [19, 21, 8065, 2]

// Module 17574 (MessagesItemPlaceholder)
import Fragment from "Fragment" /* 21 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 8065 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function MessagesItemPlaceholder(arg0) {
  let height;
  let row;
  ({ row, height } = arg0);
  return jsx(UserPlaceholderRowDefault, { row, height });
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default memoResult;
