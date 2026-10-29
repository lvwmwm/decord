// Module ID: 19394
// Function ID: 19395
// Name: LoginRequiredActionManager
// Dependencies: [1389, 4850, 1084, 7274, 7549, 6727, 2]

// Module 19394 (LoginRequiredActionManager)
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6727 */;
import UserStore from "UserStore" /* 1389 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 4850 */;
import Constants from "Constants" /* 1084 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7274 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ LoginRequiredActions: hasOwnProperty, Routes: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
class LoginRequiredActionManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleConnectionOpen };
    return applyArgumentsResult;
  }
  handleConnectionOpen() {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      let items = [constants.UPDATE_PASSWORD];
      const result = LoginRequiredActionStore.wasLoginAttemptedInSession(currentUser.id);
      const result1 = LoginRequiredActionStore.requiredActionsIncludes(currentUser.id, items);
      if (result) {
        if (result1) {
          const obj3 = {
            screen: constants3.ACCOUNT_CHANGE_PASSWORD,
            params: { isLoginRequiredAction: true },
            onClose() {
                    const items = [hasOwnProperty.UPDATE_PASSWORD];
                    if (LoginRequiredActionStore.requiredActionsIncludes(currentUser.id, items)) {
                      const obj = AuthenticationActionCreatorsDefault;
                      obj.logout("login_required_account_manager", metroRequire.LOGIN);
                    }
                  }
          };
          const obj2 = currentUser(7549);
          obj2.openUserSettings(obj3);
        }
      }
      if (result1) {
        let obj = AuthenticationActionCreatorsDefault;
        obj.logout("login_required_account_manager", constants2.LOGIN);
      }
    }
  }
}
const prototype = LoginRequiredActionManager.prototype;
const loginRequiredActionManager = new LoginRequiredActionManager();
let result = size.fileFinishedImporting("modules/auth/native/LoginRequiredActionManager.tsx");

export default loginRequiredActionManager;
