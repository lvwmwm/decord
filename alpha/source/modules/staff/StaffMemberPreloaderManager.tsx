// Module ID: 20029
// Function ID: 20030
// Name: StaffMemberPreloaderManager
// Dependencies: [7350, 20030, 2]

// Module 20029 (StaffMemberPreloaderManager)
import StaffMemberPreloader from "StaffMemberPreloader" /* 20030 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7350 */;
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
