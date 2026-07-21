// Module ID: 7485
// Function ID: 60067
// Name: _startStageInstance
// Dependencies: []
// Exports: endStageInstance, startStageInstance, updateStageInstance

// Module 7485 (_startStageInstance)
async function _startStageInstance(channel_id, topic, privacy_level, send_start_notification, guild_scheduled_event_id, arg5) {
  const HTTP = callback(closure_1[2]).HTTP;
  let obj = { url: constants.STAGE_INSTANCES, body: obj };
  obj = { channel_id, topic, privacy_level, guild_scheduled_event_id, send_start_notification, rejectWithError: callback(closure_1[2]).rejectWithMigratedError() };
  return yield HTTP.post(obj).body;
}
async function _updateStageInstance(id, topic, privacy_level, arg3) {
  const HTTP = callback(closure_1[2]).HTTP;
  let obj = { url: closure_3.STAGE_INSTANCE(id), body: obj };
  obj = { topic, privacy_level, rejectWithError: callback(closure_1[2]).rejectWithMigratedError() };
  return yield HTTP.patch(obj).body;
}
let closure_2 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/stage_channels/StageInstanceActionCreators.tsx");

export const startStageInstance = function startStageInstance(channel_id, name, GUILD_ONLY, flag, id) {
  return _startStageInstance(...arguments);
};
export const updateStageInstance = function updateStageInstance(id, arg1, arg2) {
  return _updateStageInstance(...arguments);
};
export const endStageInstance = function endStageInstance(id) {
  const HTTP = arg1(dependencyMap[2]).HTTP;
  const obj = { url: Endpoints.STAGE_INSTANCE(id), rejectWithError: arg1(dependencyMap[2]).rejectWithMigratedError() };
  return HTTP.del(obj);
};
