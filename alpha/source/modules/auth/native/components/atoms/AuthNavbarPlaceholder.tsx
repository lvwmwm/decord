// Module ID: 6651
// Function ID: 6652
// Name: AuthNavbarPlaceholder
// Dependencies: [19, 21, 5090, 587, 558, 576, 6203, 2]

// Module 6651 (AuthNavbarPlaceholder)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const NavigatorHeader = tmp(6203);
const jsx = Fragment.jsx;
let obj = { navBar: obj2 };
obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.TRANSPARENT, borderBottomWidth: 0 };
let closure_3 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AuthNavbarPlaceholder() {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp4 = closure_3();
  if (cResult[0] !== tmp4.navBar) {
    const tmp7 = jsx(NavigatorHeader.FauxHeader, { style: tmp4.navBar, children: null });
    cResult[0] = tmp4.navBar;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function AuthNavbarPlaceholder() {
  return jsx(NavigatorHeader.FauxHeader, { style: closure_3().navBar, children: null });
});
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthNavbarPlaceholder.tsx");

export default tmp3;
