// Module ID: 16870
// Function ID: 16871
// Name: panel/LeaveActivityButton
// Dependencies: [19, 8502, 21, 16860, 8751, 2]

// Module 16870 (panel/LeaveActivityButton)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8502 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8751 */;
import LeaveActivityButton2 from "LeaveActivityButton" /* 16860 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
const memoResult = react.memo(function LeaveActivityButton(arg0) {
  ({ frame: require, setMode: importDefault } = arg0);
  return jsx(LeaveActivityButton2.BaseLeaveActivityButton, {
    onPress() {
      let id;
      importDefault(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        const obj = FramesNativeManagerDefault;
        obj.leaveFrame(id.id);
      }, 400);
    }
  });
});
const result = size.fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default memoResult;
