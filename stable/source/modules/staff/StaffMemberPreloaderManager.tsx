// Module ID: 18650
// Function ID: 18651
// Name: StaffMemberPreloaderManager
// Dependencies: [7085, 18651, 2]

// Module 18650 (StaffMemberPreloaderManager)
import StaffMemberPreloader from "StaffMemberPreloader" /* 18651 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7085 */;
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
