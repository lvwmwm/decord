// Module ID: 16718
// Function ID: 16719
// Name: handleUserApplicationIdentityGatewayEvent
// Dependencies: [12160, 5134, 2]

// Module 16718 (handleUserApplicationIdentityGatewayEvent)
import "initialize";

const require = arg1;
function handleUserApplicationIdentityGatewayEvent(user_id) {
  const useUserApplicationIdentities = require(12160) /* fetchStore */.useUserApplicationIdentities;
  useUserApplicationIdentities.refetch(user_id.user_id);
}
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
