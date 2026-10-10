// Module ID: 17733
// Function ID: 17734
// Name: panel/LeaveActivityButton
// Dependencies: [19, 6067, 21, 558, 576, 10821, 17723, 2]

// Module 17733 (panel/LeaveActivityButton)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6067 */;
import leaveFrame from "leaveFrame" /* 10821 */;
import LeaveActivityButton2 from "LeaveActivityButton" /* 17723 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function LeaveActivityButton(frame) {
  let setMode;
  let obj = frame(setMode[4]);
  const cResult = obj.c(3);
  const tmp = frame;
  frame = frame.frame;
  const tmp2 = setMode;
  setMode = frame.setMode;
  if (cResult[0] === frame) {
    let tmp4;
    if (cResult[1] === setMode) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(tmp(tmp2[6]).BaseLeaveActivityButton, {
    onPress() {
      let id;
      setMode(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        const obj = frame(setMode[5]);
        obj.leaveFrame(id.id);
      }, 400);
    }
  });
  cResult[0] = frame;
  cResult[1] = setMode;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function LeaveActivityButton(arg0) {
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
}));
const result = size.fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default memoResult;
