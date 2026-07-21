// Module ID: 16186
// Function ID: 125033
// Name: batchChannelUpdate
// Dependencies: []
// Exports: batchChannelUpdate, batchRoleUpdate

// Module 16186 (batchChannelUpdate)
function batchChannelUpdate(closure_0, body) {
  function onEnd() {
    return callback(closure_2[1]).dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS" });
  }
  if (body.length > 0) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "GUILD_SETTINGS_SUBMIT" };
    obj.dispatch(obj);
    const HTTP = require(dependencyMap[2]).HTTP;
    obj = { url: Endpoints.GUILD_CHANNELS(closure_0), body, oldFormErrors: true, rejectWithError: true };
    HTTP.patch(obj).then(onEnd, onEnd);
    const patchResult = HTTP.patch(obj);
  }
}
function batchRoleUpdate(closure_0, body) {
  function onEnd() {
    return callback(closure_2[1]).dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS" });
  }
  if (body.length > 0) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "GUILD_SETTINGS_SUBMIT" };
    obj.dispatch(obj);
    const HTTP = require(dependencyMap[2]).HTTP;
    obj = { url: Endpoints.GUILD_ROLES(closure_0), body, oldFormErrors: true, rejectWithError: true };
    HTTP.patch(obj).then(onEnd, onEnd);
    const patchResult = HTTP.patch(obj);
  }
}
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("actions/native/GuildActionCreators.tsx");

export default { batchChannelUpdate, batchRoleUpdate };
export { batchChannelUpdate };
export { batchRoleUpdate };
