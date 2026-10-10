// Module ID: 18652
// Function ID: 18653
// Name: UserApplicationIdentityManager
// Dependencies: [13343, 6807, 2]

// Module 18652 (UserApplicationIdentityManager)
import UserApplicationIdentityActionCreators from "UserApplicationIdentityActionCreators" /* 13343 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;
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
