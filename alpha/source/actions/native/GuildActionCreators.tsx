// Module ID: 17412
// Function ID: 17413
// Name: actions/GuildActionCreators
// Dependencies: [1074, 573, 1271, 2]
// Exports: batchChannelUpdate, batchRoleUpdate

// Module 17412 (actions/GuildActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import size from "module_2" /* 2 */;

function batchChannelUpdate(guildId, body) {
  if (body.length > 0) {
    function onEnd() {
      return DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS" });
    }
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GUILD_CHANNELS(guildId), body, oldFormErrors: true, rejectWithError: true };
    HTTP.patch(request).then(onEnd, onEnd);
    const patchResult = HTTP.patch(request);
  }
}
function batchRoleUpdate(arg0, body) {
  if (body.length > 0) {
    function onEnd() {
      return DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS" });
    }
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GUILD_ROLES(arg0), body, oldFormErrors: true, rejectWithError: true };
    HTTP.patch(request).then(onEnd, onEnd);
    const patchResult = HTTP.patch(request);
  }
}
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/native/GuildActionCreators.tsx");

export default { batchChannelUpdate, batchRoleUpdate };
export { batchChannelUpdate };
export { batchRoleUpdate };
