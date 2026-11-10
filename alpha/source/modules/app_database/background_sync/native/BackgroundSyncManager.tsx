// Module ID: 19838
// Function ID: 19839
// Name: BackgroundSyncManager
// Dependencies: [502, 1385, 7353, 19839, 2]

// Module 19838 (BackgroundSyncManager)
import background_sync_BackgroundSync from "background_sync/BackgroundSync" /* 19839 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7353 */;
import size from "module_2" /* 2 */;

class BackgroundSyncManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { MESSAGE_CREATE: applyArgumentsResult.handleMessageCreate, POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen };
    return applyArgumentsResult;
  }
  handleMessageCreate(message) {
    message = message.message;
    if (!message.optimistic) {
      let tmp2 = null != message.author && message.author.id === AuthenticationStore.getId();
      if (tmp2) {
        const currentUser = UserStore.getCurrentUser();
        let isStaffResult;
        if (currentUser != null) {
          isStaffResult = currentUser.isStaff();
        }
        tmp2 = isStaffResult;
      }
      if (tmp2) {
        tmp2 = "run bg sync" === message.content;
      }
      if (tmp2) {
        const obj2 = background_sync_BackgroundSync;
        obj2.backgroundSync({ force: true });
      }
    }
  }
  handlePostConnectionOpen() {
    const obj = background_sync_BackgroundSync;
    obj.backgroundSync({ force: false, messagesOnly: true, checkLastMessageId: true });
  }
}
const prototype = BackgroundSyncManager.prototype;
const backgroundSyncManager = new BackgroundSyncManager();
const result = size.fileFinishedImporting("modules/app_database/background_sync/native/BackgroundSyncManager.tsx");

export default backgroundSyncManager;
