// Module ID: 17604
// Function ID: 17605
// Name: StaffMemberPreloaderManager
// Dependencies: [6613, 17605, 2]

// Module 17604 (StaffMemberPreloaderManager)
import StaffMemberPreloader from "StaffMemberPreloader" /* 17605 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
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
