// Module ID: 18875
// Function ID: 18876
// Name: StaffMemberPreloaderManager
// Dependencies: [7199, 18876, 2]

// Module 18875 (StaffMemberPreloaderManager)
import StaffMemberPreloader from "StaffMemberPreloader" /* 18876 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7199 */;
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
