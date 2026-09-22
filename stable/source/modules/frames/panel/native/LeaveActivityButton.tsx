// Module ID: 17157
// Function ID: 17158
// Name: panel/LeaveActivityButton
// Dependencies: [19, 9635, 21, 17147, 9698, 2]

// Module 17157 (panel/LeaveActivityButton)
import FramesNativeManagerDefault from "FramesNativeManager" /* 9698 */;
import LeaveActivityButton from "LeaveActivityButton" /* 17147 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityPanelModes = fn(9635).ActivityPanelModes;
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
