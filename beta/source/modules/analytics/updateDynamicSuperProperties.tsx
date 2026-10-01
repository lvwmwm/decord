// Module ID: 17059
// Function ID: 17060
// Name: updateDynamicSuperProperties
// Dependencies: [6881, 1249, 10704, 2]
// Exports: updateDynamicSuperProperties

// Module 17059 (updateDynamicSuperProperties)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 6881 */;
import DiscordAppStateDefault from "DiscordAppState" /* 10704 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/analytics/updateDynamicSuperProperties.tsx");

export const updateDynamicSuperProperties = function updateDynamicSuperProperties() {
  const obj = SessionHeartbeatScheduler;
  const activeSessionUnsafe = obj.getActiveSessionUnsafe();
  const obj2 = discord_common_AnalyticsUtils;
  const superProperties = obj2.getSuperProperties();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  let prop;
  if (superProperties != null) {
    prop = superProperties.client_heartbeat_session_id;
  }
  const obj3 = {};
  if (uuid !== prop) {
    obj3.client_heartbeat_session_id = uuid;
  }
  const obj4 = DiscordAppStateDefault;
  const state = obj4.getState();
  let client_app_state;
  if (superProperties != null) {
    client_app_state = superProperties.client_app_state;
  }
  if (state !== client_app_state) {
    obj3.client_app_state = state;
  }
  if (Object.keys(obj3).length > 0) {
    const tmpResult = discord_common_AnalyticsUtils;
    const result = tmpResult.extendSuperProperties(obj3);
  }
};
