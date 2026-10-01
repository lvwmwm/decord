// Module ID: 6397
// Function ID: 6398
// Name: AuthNavbarPlaceholder
// Dependencies: [19, 21, 4836, 576, 5936, 2]
// Exports: default

// Module 6397 (AuthNavbarPlaceholder)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = { navBar: { backgroundColor: nativeDefault.unsafe_rawColors.TRANSPARENT, borderBottomWidth: 0 } };
({ backgroundColor: nativeDefault.unsafe_rawColors.TRANSPARENT, borderBottomWidth: 0 });
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthNavbarPlaceholder.tsx");

export default function AuthNavbarPlaceholder() {
  return jsx(NavigatorHeader.FauxHeader, { style: closure_3().navBar, children: null });
};
