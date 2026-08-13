// Module ID: 16647
// Function ID: 16648
// Name: prototype
// Dependencies: [5301, 16648, 2]

// Module 16647 (prototype)
import "initialize";

let require = arg1;
let prototype = function StaffMemberPreloaderManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
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
