// Module ID: 19094
// Function ID: 19095
// Name: LaunchPadNotificationCenter
// Dependencies: [19, 21, 5014, 18476, 2]

// Module 19094 (LaunchPadNotificationCenter)
import Fragment from "Fragment" /* 21 */;
import NotificationsDefault from "Notifications" /* 18476 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ wrapper: { height: "100%" } });
const memoResult = react.memo(function NotificationsContent() {
  return jsx(NotificationsDefault, { style: closure_3().wrapper, nestedInLaunchPad: true });
});
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default memoResult;
