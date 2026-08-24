// Module ID: 16802
// Function ID: 16803
// Name: prototype
// Dependencies: [5043, 16803, 2]

// Module 16802 (prototype)
import initializeDefault from "initialize" /* 5043 */;

let require = arg1;
initializeDefault;
let prototype = function StaffMemberPreloaderManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handlePostConnectionOpen();
    }
  };
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    applyArgumentsResult(table[1]).preloadStaffMembers();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("modules/staff/StaffMemberPreloaderManager.tsx");

export default prototype;
