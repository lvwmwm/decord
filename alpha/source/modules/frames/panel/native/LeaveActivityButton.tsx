// Module ID: 19367
// Function ID: 19368
// Name: panel/LeaveActivityButton
// Dependencies: [19, 5638, 21, 19191, 7660, 2]

// Module 19367 (panel/LeaveActivityButton)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5638 */;
import leaveFrame from "leaveFrame" /* 7660 */;
import LeaveActivityButton2 from "LeaveActivityButton" /* 19191 */;
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
