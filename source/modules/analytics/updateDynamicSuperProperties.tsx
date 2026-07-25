// Module ID: 16014
// Function ID: 123750
// Name: updateDynamicSuperProperties
// Dependencies: [5693, 480, 9413, 2]
// Exports: updateDynamicSuperProperties

// Module 16014 (updateDynamicSuperProperties)
let result = require("canUIRequestGatewaySocket").fileFinishedImporting("modules/analytics/updateDynamicSuperProperties.tsx");

export const updateDynamicSuperProperties = function updateDynamicSuperProperties() {
  let obj = require(5693) /* stopAnalyticsHeartbeat */;
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
  const state = importDefault(9413).getState();
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
