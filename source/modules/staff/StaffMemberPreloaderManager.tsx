// Module ID: 17408
// Function ID: 17409
// Name: prototype
// Dependencies: [7058, 17409, 2]

// Module 17408 (prototype)
import initializeDefault from "initialize" /* 7058 */;

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
