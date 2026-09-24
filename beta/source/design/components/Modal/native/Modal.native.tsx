// Module ID: 11489
// Function ID: 11490
// Name: Modal
// Dependencies: [19, 21, 558, 568, 1616, 5929, 7278, 2]

// Module 11489 (Modal)
import c from "c" /* 568 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import NavigatorConstants from "NavigatorConstants" /* 5929 */;
import noop from "module_19" /* 19 */;

const Navigator = tmp(7278);
require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  const sum = NavigatorConstants.NAV_BAR_HEIGHT + useSafeAreaInsetsDefault().top;
  if (cResult[0] !== sum) {
    const obj2 = { height: sum };
    cResult[0] = sum;
    cResult[1] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === arg0) {
    if (cResult[3] === tmp6) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const obj3 = {};
  const merged = Object.assign(arg0);
  obj3.headerStyle = tmp6;
  const tmp9 = jsx(Navigator.Navigator, {});
  cResult[2] = arg0;
  cResult[3] = tmp6;
  cResult[4] = tmp9;
  tmp7 = tmp9;
}) : ((arg0) => {
  const obj = {};
  const merged = Object.assign(arg0);
  const tmp = useSafeAreaInsetsDefault();
  obj.headerStyle = { height: NavigatorConstants.NAV_BAR_HEIGHT + useSafeAreaInsetsDefault().top };
  return jsx(Navigator.Navigator, {});
});
