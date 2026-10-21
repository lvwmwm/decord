// Module ID: 18785
// Function ID: 18786
// Name: StaffMemberPreloaderManager
// Dependencies: [7193, 18786, 2]

// Module 18785 (StaffMemberPreloaderManager)
import StaffMemberPreloader from "StaffMemberPreloader" /* 18786 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7193 */;
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
