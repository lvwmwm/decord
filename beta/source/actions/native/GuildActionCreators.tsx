// Module ID: 19840
// Function ID: 19841
// Name: actions/GuildActionCreators
// Dependencies: [1071, 572, 1284, 2]
// Exports: batchChannelUpdate, batchRoleUpdate

// Module 19840 (actions/GuildActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1071 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
import size from "module_2" /* 2 */;

function batchChannelUpdate(guildId, body) {
  if (body.length > 0) {
    function onEnd() {
      const obj = DispatcherDefault;
      return obj.dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS" });
    }
    let obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GUILD_CHANNELS(guildId), body, oldFormErrors: true, rejectWithError: true };
    const patch = HTTP.patch;
    const patchResult = patch(request);
    patchResult.then(onEnd, onEnd);
  }
}
function batchRoleUpdate(arg0, body) {
  if (body.length > 0) {
    function onEnd() {
      const obj = DispatcherDefault;
      return obj.dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS" });
    }
    let obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GUILD_ROLES(arg0), body, oldFormErrors: true, rejectWithError: true };
    const patch = HTTP.patch;
    const patchResult = patch(request);
    patchResult.then(onEnd, onEnd);
  }
}
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/native/GuildActionCreators.tsx");

export default { batchChannelUpdate, batchRoleUpdate };
export { batchChannelUpdate };
export { batchRoleUpdate };
