// Module ID: 17898
// Function ID: 17899
// Name: StaffMemberPreloaderManager
// Dependencies: [7395, 17899, 2]

// Module 17898 (StaffMemberPreloaderManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7395 */;

let require = fn;
const prototype = function StaffMemberPreloaderManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handlePostConnectionOpen();
    }
  };
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    applyArgumentsResult(dependencyMap[1]).preloadStaffMembers();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/staff/StaffMemberPreloaderManager.tsx");

export default prototype1;
