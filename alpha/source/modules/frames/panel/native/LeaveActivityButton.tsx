// Module ID: 17521
// Function ID: 17522
// Name: panel/LeaveActivityButton
// Dependencies: [19, 9321, 21, 17511, 9568, 2]

// Module 17521 (panel/LeaveActivityButton)
import FramesNativeManagerDefault from "FramesNativeManager" /* 9568 */;
import LeaveActivityButton from "LeaveActivityButton" /* 17511 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityPanelModes = fn(9321).ActivityPanelModes;
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
