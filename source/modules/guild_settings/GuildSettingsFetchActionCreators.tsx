// Module ID: 8439
// Function ID: 67343
// Name: _fetchGuildIntegrationsApplications
// Dependencies: []
// Exports: fetchGuildEmbed, fetchGuildIntegrationsApplications

// Module 8439 (_fetchGuildIntegrationsApplications)
function _fetchGuildIntegrationsApplications() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchGuildIntegrationsApplications = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const BasicApplicationRecord = arg1(dependencyMap[1]).BasicApplicationRecord;
let closure_5 = importDefault(dependencyMap[2]);
const Endpoints = arg1(dependencyMap[3]).Endpoints;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_settings/GuildSettingsFetchActionCreators.tsx");

export const fetchGuildIntegrationsApplications = function fetchGuildIntegrationsApplications(id) {
  return _fetchGuildIntegrationsApplications(...arguments);
};
export const fetchGuildEmbed = function fetchGuildEmbed(arg0) {
  const HTTP = arg1(dependencyMap[4]).HTTP;
  const obj = { y: null, isArray: null, accessible: null, url: Endpoints.GUILD_WIDGET(arg0) };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let obj = callback(closure_2[5]);
    obj = { type: "GUILD_SETTINGS_SET_WIDGET", enabled: body.body.enabled, channelId: body.body.channel_id };
    obj.dispatch(obj);
  });
};
