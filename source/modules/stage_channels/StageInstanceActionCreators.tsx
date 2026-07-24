// Module ID: 7570
// Function ID: 60358
// Name: _startStageInstance
// Dependencies: [5, 653, 507, 2]
// Exports: endStageInstance, startStageInstance, updateStageInstance

// Module 7570 (_startStageInstance)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
async function _startStageInstance(arg0, arg1, arg2, arg3, arg4, arg5) {
  const HTTP = outer2_0(outer2_1[2]).HTTP;
  obj = { url: outer2_3.STAGE_INSTANCES, body: obj };
  obj = { channel_id: arg0, topic: arg1, privacy_level: arg2, guild_scheduled_event_id: arg4, send_start_notification: arg3, rejectWithError: outer2_0(outer2_1[2]).rejectWithMigratedError() };
  return yield HTTP.post(obj).body;
}
async function _updateStageInstance(arg0, arg1, arg2, arg3) {
  const HTTP = outer2_0(outer2_1[2]).HTTP;
  obj = { url: outer2_3.STAGE_INSTANCE(arg0), body: obj };
  obj = { topic: arg1, privacy_level: arg2, rejectWithError: outer2_0(outer2_1[2]).rejectWithMigratedError() };
  return yield HTTP.patch(obj).body;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/StageInstanceActionCreators.tsx");

export const startStageInstance = function startStageInstance(channel_id, name, GUILD_ONLY, flag, id) {
  return _startStageInstance(...arguments);
};
export const updateStageInstance = function updateStageInstance(id, arg1, arg2) {
  return _updateStageInstance(...arguments);
};
export const endStageInstance = function endStageInstance(id) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const obj = { url: Endpoints.STAGE_INSTANCE(id), rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.del(obj);
};
