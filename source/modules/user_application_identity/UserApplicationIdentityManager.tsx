// Module ID: 16845
// Function ID: 16846
// Name: handleUserApplicationIdentityGatewayEvent
// Dependencies: [12361, 5229, 2]

// Module 16845 (handleUserApplicationIdentityGatewayEvent)
import "initialize";

const require = arg1;
function handleUserApplicationIdentityGatewayEvent(user_id) {
  const useUserApplicationIdentities = require(12361) /* fetchStore */.useUserApplicationIdentities;
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
