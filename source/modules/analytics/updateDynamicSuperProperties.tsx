// Module ID: 15827
// Function ID: 121000
// Name: updateDynamicSuperProperties
// Dependencies: []
// Exports: updateDynamicSuperProperties

// Module 15827 (updateDynamicSuperProperties)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/analytics/updateDynamicSuperProperties.tsx");

export const updateDynamicSuperProperties = function updateDynamicSuperProperties() {
  let obj = require(dependencyMap[0]);
  const activeSessionUnsafe = obj.getActiveSessionUnsafe();
  const superProperties = require(dependencyMap[1]).getSuperProperties();
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
  const obj2 = require(dependencyMap[1]);
  const state = importDefault(dependencyMap[2]).getState();
  let client_app_state;
  if (null != superProperties) {
    client_app_state = superProperties.client_app_state;
  }
  if (state !== client_app_state) {
    obj.client_app_state = state;
  }
  if (Object.keys(obj).length > 0) {
    const result = require(dependencyMap[1]).extendSuperProperties(obj);
    const obj5 = require(dependencyMap[1]);
  }
};
