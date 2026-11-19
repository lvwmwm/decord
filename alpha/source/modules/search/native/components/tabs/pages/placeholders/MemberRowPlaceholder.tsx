// Module ID: 18824
// Function ID: 18825
// Name: MemberRowPlaceholder
// Dependencies: [19, 21, 4792, 18818, 2]
// Exports: default

// Module 18824 (MemberRowPlaceholder)
import Fragment from "Fragment" /* 21 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 18818 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ container: { paddingHorizontal: 0 } });
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MemberRowPlaceholder.tsx");

export default function MemberRowPlaceholderItem() {
  return jsx(FormRowPlaceholderDefault, { style: closure_3().container });
};
