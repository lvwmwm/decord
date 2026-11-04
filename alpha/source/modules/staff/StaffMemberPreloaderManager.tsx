// Module ID: 19904
// Function ID: 19905
// Name: StaffMemberPreloaderManager
// Dependencies: [7423, 19905, 2]

// Module 19904 (StaffMemberPreloaderManager)
import StaffMemberPreloader from "StaffMemberPreloader" /* 19905 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7423 */;
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
