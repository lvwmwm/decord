// Module ID: 9999
// Function ID: 77292
// Name: _putRoleConnectionsConfigurations
// Dependencies: [5, 653, 507, 686, 5150, 2]
// Exports: fetchRoleConnectionsConfiguration, fetchUserApplicationRoleConnections, putRoleConnectionsConfigurations

// Module 9999 (_putRoleConnectionsConfigurations)
import set from "set";
import { Endpoints } from "ME";

const require = arg1;
function _putRoleConnectionsConfigurations() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchUserApplicationRoleConnections() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/connections/ConnectionsRoleActionCreators.tsx");

export const fetchRoleConnectionsConfiguration = function fetchRoleConnectionsConfiguration(guildId, id) {
  const _require = id;
  const HTTP = _require(507).HTTP;
  const value = HTTP.get({ url: Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(guildId, id), rejectWithError: true });
  let obj = { url: Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(guildId, id), rejectWithError: true };
  value.then((body) => {
    if (body.body.length > 0) {
      body = body.body;
      const mapped = body.map((arr) => arr.map((connectionType) => ({ connectionType: connectionType.connection_type, connectionMetadataField: connectionType.connection_metadata_field, applicationId: connectionType.application_id, operator: connectionType.operator, value: connectionType.value })));
    }
    let obj = outer1_1(outer1_2[3]);
    obj = { type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS", roleId: closure_0, roleConnectionConfigurations: [] };
    obj.dispatch(obj);
  }).catch(() => {

  });
};
export const putRoleConnectionsConfigurations = function putRoleConnectionsConfigurations(id, id2, outer1_2) {
  return _putRoleConnectionsConfigurations(...arguments);
};
export const fetchUserApplicationRoleConnections = function fetchUserApplicationRoleConnections() {
  return _fetchUserApplicationRoleConnections(...arguments);
};
