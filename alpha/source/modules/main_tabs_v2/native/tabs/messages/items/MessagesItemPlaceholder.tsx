// Module ID: 17436
// Function ID: 17437
// Name: MessagesItemPlaceholder
// Dependencies: [19, 21, 7945, 2]

// Module 17436 (MessagesItemPlaceholder)
import Fragment from "Fragment" /* 21 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 7945 */;
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
