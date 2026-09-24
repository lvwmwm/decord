// Module ID: 17907
// Function ID: 17908
// Name: StaffMemberPreloaderManager
// Dependencies: [7397, 17908, 2]

// Module 17907 (StaffMemberPreloaderManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7397 */;

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
