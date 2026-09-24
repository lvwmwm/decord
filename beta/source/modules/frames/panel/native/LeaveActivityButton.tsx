// Module ID: 17490
// Function ID: 17491
// Name: panel/LeaveActivityButton
// Dependencies: [19, 9345, 21, 558, 568, 9590, 17480, 2]

// Module 17490 (panel/LeaveActivityButton)
import FramesNativeManagerDefault from "FramesNativeManager" /* 9590 */;
import LeaveActivityButton from "LeaveActivityButton" /* 17480 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityPanelModes = fn(9345).ActivityPanelModes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((frame) => {
  const cResult = frame(568).c(3);
  frame = frame.frame;
  const setMode = frame.setMode;
  if (cResult[0] === frame) {
    if (cResult[1] === setMode) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(frame(17480).BaseLeaveActivityButton, {
    onPress() {
      setMode(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        setMode(dependencyMap[5]).leaveFrame(id.id);
      }, 400);
    }
  });
  cResult[0] = frame;
  cResult[1] = setMode;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((arg0) => {
  ({ frame: require, setMode: importDefault } = arg0);
  return jsx(LeaveActivityButton.BaseLeaveActivityButton, {
    onPress() {
      importDefault(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        FramesNativeManagerDefault.leaveFrame(id.id);
      }, 400);
    }
  });
}));
