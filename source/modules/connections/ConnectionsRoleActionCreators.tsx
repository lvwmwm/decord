// Module ID: 9990
// Function ID: 77228
// Name: _putRoleConnectionsConfigurations
// Dependencies: []
// Exports: fetchRoleConnectionsConfiguration, fetchUserApplicationRoleConnections, putRoleConnectionsConfigurations

// Module 9990 (_putRoleConnectionsConfigurations)
function _putRoleConnectionsConfigurations() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _putRoleConnectionsConfigurations = obj;
  return obj(...arguments);
}
function _fetchUserApplicationRoleConnections() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchUserApplicationRoleConnections = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/connections/ConnectionsRoleActionCreators.tsx");

export const fetchRoleConnectionsConfiguration = function fetchRoleConnectionsConfiguration(guildId, id) {
  const HTTP = id(dependencyMap[2]).HTTP;
  const value = HTTP.get({ url: Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(guildId, id), rejectWithError: true });
  const obj = { url: Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(guildId, id), rejectWithError: true };
  value.then((body) => {
    if (body.body.length > 0) {
      body = body.body;
      const mapped = body.map((arr) => arr.map((connectionType) => ({ connectionType: connectionType.connection_type, connectionMetadataField: connectionType.connection_metadata_field, applicationId: connectionType.application_id, operator: connectionType.operator, value: connectionType.value })));
    }
    let obj = callback(closure_2[3]);
    obj = { type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS", roleId: arg1, roleConnectionConfigurations: [] };
    obj.dispatch(obj);
  }).catch(() => {

  });
};
export const putRoleConnectionsConfigurations = function putRoleConnectionsConfigurations(closure_4, id, closure_2) {
  return _putRoleConnectionsConfigurations(...arguments);
};
export const fetchUserApplicationRoleConnections = function fetchUserApplicationRoleConnections() {
  return _fetchUserApplicationRoleConnections(...arguments);
};
