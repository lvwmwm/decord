// Module ID: 7139
// Function ID: 7140
// Name: AuthNavbarPlaceholder
// Dependencies: [19, 21, 5009, 575, 6992, 2]
// Exports: default

// Module 7139 (AuthNavbarPlaceholder)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = { navBar: { backgroundColor: nativeDefault.unsafe_rawColors.TRANSPARENT, borderBottomWidth: 0 } };
({ backgroundColor: nativeDefault.unsafe_rawColors.TRANSPARENT, borderBottomWidth: 0 });
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthNavbarPlaceholder.tsx");

export default function AuthNavbarPlaceholder() {
  return jsx(NavigatorHeader.FauxHeader, { style: closure_3().navBar, children: null });
};
