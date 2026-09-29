// Module ID: 17514
// Function ID: 17515
// Name: panel/LeaveActivityButton
// Dependencies: [19, 9347, 21, 17504, 9594, 2]

// Module 17514 (panel/LeaveActivityButton)
import FramesNativeManagerDefault from "FramesNativeManager" /* 9594 */;
import LeaveActivityButton from "LeaveActivityButton" /* 17504 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityPanelModes = fn(9347).ActivityPanelModes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default noop.memo(function LeaveActivityButton(arg0) {
  ({ frame: require, setMode: importDefault } = arg0);
  return jsx(LeaveActivityButton.BaseLeaveActivityButton, {
    onPress() {
      importDefault(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        FramesNativeManagerDefault.leaveFrame(id.id);
      }, 400);
    }
  });
});
