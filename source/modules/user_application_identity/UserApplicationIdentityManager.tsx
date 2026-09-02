// Module ID: 17705
// Function ID: 17706
// Name: handleUserApplicationIdentityGatewayEvent
// Dependencies: [12740, 5494, 2]

// Module 17705 (handleUserApplicationIdentityGatewayEvent)
import initializeDefault from "initialize" /* 5494 */;
import fetchStore from "fetchStore" /* 12740 */;

require = arg1;
function handleUserApplicationIdentityGatewayEvent(user_id) {
  const useUserApplicationIdentities = fetchStore.useUserApplicationIdentities;
  useUserApplicationIdentities.refetch(user_id.user_id);
}
initializeDefault;
let prototype = function UserApplicationIdentityManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { USER_APPLICATION_IDENTITY_UPDATE: handleUserApplicationIdentityGatewayEvent, USER_APPLICATION_IDENTITY_REMOVE: handleUserApplicationIdentityGatewayEvent };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityManager.tsx");

export default prototype;
