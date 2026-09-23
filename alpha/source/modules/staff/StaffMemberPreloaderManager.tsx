// Module ID: 17974
// Function ID: 17975
// Name: StaffMemberPreloaderManager
// Dependencies: [7449, 17975, 2]

// Module 17974 (StaffMemberPreloaderManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7449 */;

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
