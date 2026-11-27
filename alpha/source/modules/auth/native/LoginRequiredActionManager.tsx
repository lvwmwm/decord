// Module ID: 19785
// Function ID: 19786
// Name: LoginRequiredActionManager
// Dependencies: [1387, 4885, 1071, 7475, 8109, 6839, 2]

// Module 19785 (LoginRequiredActionManager)
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6839 */;
import UserStore from "UserStore" /* 1387 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 4885 */;
import Constants from "Constants" /* 1071 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7475 */;
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
          const obj2 = currentUser(8109);
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
