// Module ID: 18054
// Function ID: 18055
// Name: actions/GuildActionCreators
// Dependencies: [1078, 577, 1275, 2]
// Exports: batchChannelUpdate, batchRoleUpdate

// Module 18054 (actions/GuildActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import Constants from "Constants" /* 1078 */;
import HTTPUtils from "HTTPUtils" /* 1275 */;
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
