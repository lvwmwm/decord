// Module ID: 16100
// Function ID: 16101
// Name: updateDynamicSuperProperties
// Dependencies: [5721, 503, 9477, 2]
// Exports: updateDynamicSuperProperties

// Module 16100 (updateDynamicSuperProperties)
let result = require("module_9477").fileFinishedImporting("modules/analytics/updateDynamicSuperProperties.tsx");

export const updateDynamicSuperProperties = function updateDynamicSuperProperties() {
  let obj = require(5721) /* trackHeartbeat */;
  const activeSessionUnsafe = obj.getActiveSessionUnsafe();
  const superProperties = require(503) /* encodeProperties */.getSuperProperties();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  let prop;
  if (superProperties != null) {
    prop = superProperties.client_heartbeat_session_id;
  }
  obj = {};
  if (uuid !== prop) {
    obj.client_heartbeat_session_id = uuid;
  }
  const obj2 = require(503) /* encodeProperties */;
  const tmp = require;
  const state = importDefault(9477).getState();
  let client_app_state;
  if (superProperties != null) {
    client_app_state = superProperties.client_app_state;
  }
  if (state !== client_app_state) {
    obj.client_app_state = state;
  }
  if (Object.keys(obj).length > 0) {
    const result = tmp(503).extendSuperProperties(obj);
    const tmpResult = tmp(503);
  }
};
