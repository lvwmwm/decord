// Module ID: 16168
// Function ID: 124768
// Name: setRoleJustCreated
// Dependencies: []
// Exports: setRoleJustCreated

// Module 16168 (setRoleJustCreated)
const _module = require(dependencyMap[0]);
const obj = _module.create(() => ({ roleJustCreated: false }));
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx");

export const setRoleJustCreated = function setRoleJustCreated(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => state.setState({ roleJustCreated: arg0 }));
};
export const useGuildSettingsRolesManagerState = obj;
