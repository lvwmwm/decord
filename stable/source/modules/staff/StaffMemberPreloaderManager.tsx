// Module ID: 20070
// Function ID: 20071
// Name: StaffMemberPreloaderManager
// Dependencies: [7383, 20071, 2]

// Module 20070 (StaffMemberPreloaderManager)
import StaffMemberPreloader from "StaffMemberPreloader" /* 20071 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7383 */;
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
