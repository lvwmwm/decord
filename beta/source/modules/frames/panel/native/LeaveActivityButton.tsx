// Module ID: 19223
// Function ID: 19224
// Name: panel/LeaveActivityButton
// Dependencies: [19, 5539, 21, 19047, 6953, 2]

// Module 19223 (panel/LeaveActivityButton)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5539 */;
import leaveFrame from "leaveFrame" /* 6953 */;
import LeaveActivityButton2 from "LeaveActivityButton" /* 19047 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
const memoResult = react.memo(function LeaveActivityButton(arg0) {
  ({ frame: require, setMode: dependencyMap } = arg0);
  return jsx(LeaveActivityButton2.BaseLeaveActivityButton, {
    onPress() {
      let id;
      dependencyMap(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        const obj = leaveFrame;
        obj.leaveFrame(id.id);
      }, 400);
    }
  });
});
const result = size.fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default memoResult;
