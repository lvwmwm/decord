// Module ID: 18648
// Function ID: 18649
// Name: MemberRowPlaceholder
// Dependencies: [19, 21, 4794, 18642, 2]
// Exports: default

// Module 18648 (MemberRowPlaceholder)
import Fragment from "Fragment" /* 21 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 18642 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4794 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ container: { paddingHorizontal: 0 } });
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MemberRowPlaceholder.tsx");

export default function MemberRowPlaceholderItem() {
  return jsx(FormRowPlaceholderDefault, { style: closure_3().container });
};
