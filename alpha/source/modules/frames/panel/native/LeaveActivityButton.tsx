// Module ID: 17590
// Function ID: 17591
// Name: panel/LeaveActivityButton
// Dependencies: [19, 9392, 21, 17580, 9641, 2]

// Module 17590 (panel/LeaveActivityButton)
import FramesNativeManagerDefault from "FramesNativeManager" /* 9641 */;
import LeaveActivityButton from "LeaveActivityButton" /* 17580 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityPanelModes = fn(9392).ActivityPanelModes;
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
