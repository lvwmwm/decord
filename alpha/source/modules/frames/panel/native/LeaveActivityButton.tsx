// Module ID: 16866
// Function ID: 16867
// Name: panel/LeaveActivityButton
// Dependencies: [19, 8502, 21, 16856, 8751, 2]

// Module 16866 (panel/LeaveActivityButton)
import FramesNativeManagerDefault from "FramesNativeManager" /* 8751 */;
import LeaveActivityButton from "LeaveActivityButton" /* 16856 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityPanelModes = fn(8502).ActivityPanelModes;
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
