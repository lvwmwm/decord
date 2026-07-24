// Module ID: 16003
// Function ID: 123582
// Name: updateDynamicSuperProperties
// Dependencies: [6697, 480, 9492, 2]
// Exports: updateDynamicSuperProperties

// Module 16003 (updateDynamicSuperProperties)
let result = require("canUIRequestGatewaySocket").fileFinishedImporting("modules/analytics/updateDynamicSuperProperties.tsx");

export const updateDynamicSuperProperties = function updateDynamicSuperProperties() {
  let obj = require(6697) /* stopAnalyticsHeartbeat */;
  const activeSessionUnsafe = obj.getActiveSessionUnsafe();
  const superProperties = require(480) /* isThrottled */.getSuperProperties();
  obj = {};
  let uuid;
  if (null != activeSessionUnsafe) {
    uuid = activeSessionUnsafe.uuid;
  }
  let prop;
  if (null != superProperties) {
    prop = superProperties.client_heartbeat_session_id;
  }
  if (uuid !== prop) {
    obj.client_heartbeat_session_id = uuid;
  }
  const obj2 = require(480) /* isThrottled */;
  const state = importDefault(9492).getState();
  let client_app_state;
  if (null != superProperties) {
    client_app_state = superProperties.client_app_state;
  }
  if (state !== client_app_state) {
    obj.client_app_state = state;
  }
  if (Object.keys(obj).length > 0) {
    const result = require(480) /* isThrottled */.extendSuperProperties(obj);
    const obj5 = require(480) /* isThrottled */;
  }
};
