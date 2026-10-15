// Module ID: 18532
// Function ID: 18533
// Name: StaffMemberPreloaderManager
// Dependencies: [7028, 18533, 2]

// Module 18532 (StaffMemberPreloaderManager)
import StaffMemberPreloader from "StaffMemberPreloader" /* 18533 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7028 */;
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
