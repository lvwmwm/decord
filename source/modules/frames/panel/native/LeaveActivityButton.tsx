// Module ID: 17046
// Function ID: 17047
// Dependencies: [19, 9505, 21, 17036, 9568, 2]

// Module 17046
import BaseLeaveActivityButton from "BaseLeaveActivityButton" /* 17036 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 9505 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function LeaveActivityButton(arg0) {
  ({ frame: require, setMode: importDefault } = arg0);
  return jsx(BaseLeaveActivityButton.BaseLeaveActivityButton, {
    onPress() {
      callback(closure_1_3.DISCONNECTED);
      const timerId = setTimeout(() => {
        closure_1_1(closure_1_2[4]).leaveFrame(id.id);
      }, 400);
    }
  });
});
const result = require("set").fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default memoResult;
