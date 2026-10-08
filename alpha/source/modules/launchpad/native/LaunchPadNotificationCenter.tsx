// Module ID: 17722
// Function ID: 17723
// Name: LaunchPadNotificationCenter
// Dependencies: [19, 21, 5090, 558, 576, 16643, 2]

// Module 17722 (LaunchPadNotificationCenter)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import notifications_NotificationsDefault from "notifications/Notifications" /* 16643 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ wrapper: { height: "100%" } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationsContent() {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp3 = closure_4();
  if (cResult[0] !== tmp3.wrapper) {
    const tmp7 = jsx(notifications_NotificationsDefault, { style: tmp3.wrapper, nestedInLaunchPad: true });
    cResult[0] = tmp3.wrapper;
    cResult[1] = tmp7;
    tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function NotificationsContent() {
  return jsx(notifications_NotificationsDefault, { style: closure_4().wrapper, nestedInLaunchPad: true });
}));
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default memoResult;
