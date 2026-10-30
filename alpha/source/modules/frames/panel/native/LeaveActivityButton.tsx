// Module ID: 19104
// Function ID: 19105
// Name: panel/LeaveActivityButton
// Dependencies: [19, 5652, 21, 18946, 10902, 2]

// Module 19104 (panel/LeaveActivityButton)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5652 */;
import leaveFrame from "leaveFrame" /* 10902 */;
import LeaveActivityButton2 from "LeaveActivityButton" /* 18946 */;
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
