// Module ID: 17961
// Function ID: 17962
// Name: StaffMemberPreloaderManager
// Dependencies: [6797, 17962, 2]

// Module 17961 (StaffMemberPreloaderManager)
import StaffMemberPreloader from "StaffMemberPreloader" /* 17962 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
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
