// Module ID: 20551
// Function ID: 20552
// Name: UserApplicationIdentityManager
// Dependencies: [11111, 7383, 2]

// Module 20551 (UserApplicationIdentityManager)
import UserApplicationIdentityActionCreators from "UserApplicationIdentityActionCreators" /* 11111 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7383 */;
import size from "module_2" /* 2 */;

function handleUserApplicationIdentityGatewayEvent(user_id) {
  const useUserApplicationIdentities = UserApplicationIdentityActionCreators.useUserApplicationIdentities;
  useUserApplicationIdentities.refetch(user_id.user_id);
}
class UserApplicationIdentityManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { USER_APPLICATION_IDENTITY_UPDATE: handleUserApplicationIdentityGatewayEvent, USER_APPLICATION_IDENTITY_REMOVE: handleUserApplicationIdentityGatewayEvent };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const userApplicationIdentityManager = new UserApplicationIdentityManager();
const result = size.fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityManager.tsx");

export default userApplicationIdentityManager;
