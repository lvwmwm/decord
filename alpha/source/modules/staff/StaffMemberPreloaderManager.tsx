// Module ID: 19667
// Function ID: 19668
// Name: StaffMemberPreloaderManager
// Dependencies: [7484, 19668, 2]

// Module 19667 (StaffMemberPreloaderManager)
import StaffMemberPreloader from "StaffMemberPreloader" /* 19668 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7484 */;
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
