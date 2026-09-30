// Module ID: 6593
// Function ID: 6594
// Name: AuthNavbarPlaceholder
// Dependencies: [19, 21, 4866, 576, 6132, 2]
// Exports: default

// Module 6593 (AuthNavbarPlaceholder)
import nativeDefault from "native" /* 576 */;
import NavigatorHeader from "NavigatorHeader" /* 6132 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4866);
const obj2 = { navBar: { backgroundColor: nativeDefault.unsafe_rawColors.TRANSPARENT, borderBottomWidth: 0 } };
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthNavbarPlaceholder.tsx");

export default function AuthNavbarPlaceholder() {
  const tmp = closure_3();
  return jsx(NavigatorHeader.FauxHeader, { style: closure_3().navBar, children: null });
};
