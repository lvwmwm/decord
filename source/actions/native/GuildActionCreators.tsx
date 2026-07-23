// Module ID: 16311
// Function ID: 127248
// Name: batchChannelUpdate
// Dependencies: [653, 686, 507, 2]
// Exports: batchChannelUpdate, batchRoleUpdate

// Module 16311 (batchChannelUpdate)
import { Endpoints } from "ME";

function batchChannelUpdate(outer1_0, body) {
  function onEnd() {
    return outer1_1(outer1_2[1]).dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS" });
  }
  if (body.length > 0) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_SUBMIT" };
    obj.dispatch(obj);
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.GUILD_CHANNELS(outer1_0), body, oldFormErrors: true, rejectWithError: true };
    HTTP.patch(obj).then(onEnd, onEnd);
    const patchResult = HTTP.patch(obj);
  }
}
function batchRoleUpdate(outer1_0, body) {
  function onEnd() {
    return outer1_1(outer1_2[1]).dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS" });
  }
  if (body.length > 0) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_SUBMIT" };
    obj.dispatch(obj);
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.GUILD_ROLES(outer1_0), body, oldFormErrors: true, rejectWithError: true };
    HTTP.patch(obj).then(onEnd, onEnd);
    const patchResult = HTTP.patch(obj);
  }
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/native/GuildActionCreators.tsx");

export default { batchChannelUpdate, batchRoleUpdate };
export { batchChannelUpdate };
export { batchRoleUpdate };
