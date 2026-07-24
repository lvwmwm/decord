// Module ID: 8489
// Function ID: 67608
// Name: _fetchGuildIntegrationsApplications
// Dependencies: [5, 4153, 1857, 653, 507, 686, 2]
// Exports: fetchGuildEmbed, fetchGuildIntegrationsApplications

// Module 8489 (_fetchGuildIntegrationsApplications)
import dispatcher from "dispatcher";
import { BasicApplicationRecord } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
function _fetchGuildIntegrationsApplications() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings/GuildSettingsFetchActionCreators.tsx");

export const fetchGuildIntegrationsApplications = function fetchGuildIntegrationsApplications(id) {
  return _fetchGuildIntegrationsApplications(...arguments);
};
export const fetchGuildEmbed = function fetchGuildEmbed(arg0) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  let obj = { url: Endpoints.GUILD_WIDGET(arg0), oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let obj = outer1_1(outer1_2[5]);
    obj = { type: "GUILD_SETTINGS_SET_WIDGET", enabled: body.body.enabled, channelId: body.body.channel_id };
    obj.dispatch(obj);
  });
};
