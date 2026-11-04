// Module ID: 19023
// Function ID: 19024
// Name: MemberRowPlaceholder
// Dependencies: [19, 21, 5141, 19017, 2]
// Exports: default

// Module 19023 (MemberRowPlaceholder)
import Fragment from "Fragment" /* 21 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 19017 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ container: { paddingHorizontal: 0 } });
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MemberRowPlaceholder.tsx");

export default function MemberRowPlaceholderItem() {
  return jsx(FormRowPlaceholderDefault, { style: closure_3().container });
};
