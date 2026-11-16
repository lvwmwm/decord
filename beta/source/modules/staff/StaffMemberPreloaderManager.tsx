// Module ID: 20405
// Function ID: 20406
// Name: StaffMemberPreloaderManager
// Dependencies: [7882, 20406, 2]

// Module 20405 (StaffMemberPreloaderManager)
import StaffMemberPreloader from "StaffMemberPreloader" /* 20406 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7882 */;
import size from "module_2" /* 2 */;

class StaffMemberPreloaderManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.handlePostConnectionOpen();
      }
    };
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      const obj = StaffMemberPreloader;
      obj.preloadStaffMembers();
    };
    return applyArgumentsResult;
  }
}
const staffMemberPreloaderManager = new StaffMemberPreloaderManager();
const result = size.fileFinishedImporting("modules/staff/StaffMemberPreloaderManager.tsx");

export default staffMemberPreloaderManager;
