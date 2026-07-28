// Module ID: 15840
// Function ID: 121976
// Dependencies: [31, 5670, 33, 15827, 10611, 2]

// Module 15840
import { ActivityPanelModes } from "ActivityPanelModes";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function LeaveActivityButton(arg0) {
  let importDefault;
  let require;
  ({ frame: require, setMode: importDefault } = arg0);
  return jsx(require(15827) /* BaseLeaveActivityButton */.BaseLeaveActivityButton, {
    onPress() {
      callback(outer1_3.DISCONNECTED);
      const timerId = setTimeout(() => {
        let obj = outer2_1(outer2_2[4]);
        obj = { applicationId: outer1_0.applicationId };
        obj.leaveFrame(obj);
      }, 400);
    }
  });
});
const result = require("jsxProd").fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default memoResult;
