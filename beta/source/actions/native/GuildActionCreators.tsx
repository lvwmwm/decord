// Module ID: 17416
// Function ID: 17417
// Name: actions/GuildActionCreators
// Dependencies: [1074, 573, 1271, 2]
// Exports: batchChannelUpdate, batchRoleUpdate

// Module 17416 (actions/GuildActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
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
