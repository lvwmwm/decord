// Module ID: 17509
// Function ID: 17510
// Name: panel/LeaveActivityButton
// Dependencies: [19, 6072, 21, 558, 576, 11150, 17499, 2]

// Module 17509 (panel/LeaveActivityButton)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6072 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 11150 */;
import LeaveActivityButton2 from "LeaveActivityButton" /* 17499 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function LeaveActivityButton(frame) {
  let obj = frame(576);
  const cResult = obj.c(3);
  const tmp = frame;
  frame = frame.frame;
  const setMode = frame.setMode;
  if (cResult[0] === frame) {
    let tmp4;
    if (cResult[1] === setMode) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(tmp(17499).BaseLeaveActivityButton, {
    onPress() {
      let id;
      setMode(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        const obj = setMode(dependencyMap[5]);
        obj.leaveFrame(id.id);
      }, 400);
    }
  });
  cResult[0] = frame;
  cResult[1] = setMode;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function LeaveActivityButton(arg0) {
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
}));
const result = size.fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default memoResult;
