// Module ID: 16200
// Function ID: 16201
// Dependencies: [19, 9809, 21, 16187, 10952, 2]

// Module 16200
import { ActivityPanelModes } from "ActivityPanelModes";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function LeaveActivityButton(arg0) {
  let importDefault;
  let require;
  ({ frame: require, setMode: importDefault } = arg0);
  return jsx(require(16187) /* BaseLeaveActivityButton */.BaseLeaveActivityButton, {
    onPress() {
      callback(outer1_3.DISCONNECTED);
      const timerId = setTimeout(() => {
        outer1_1(outer1_2[4]).leaveFrame(id.id);
      }, 400);
    }
  });
});
const result = require("jsxProd").fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default memoResult;
