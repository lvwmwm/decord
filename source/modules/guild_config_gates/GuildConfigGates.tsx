// Module ID: 16201
// Function ID: 125233
// Name: importDefaultResult1
// Dependencies: []
// Exports: useApplicationIdentityLinkedRolesEnabled, useGuildVerificationRoleEnabled

// Module 16201 (importDefaultResult1)
const importDefaultResult1 = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
let obj = arg1(dependencyMap[3]);
obj = {
  getQueryId(arg0) {
    let tmp = null;
    if (null != arg0) {
      tmp = arg0;
    }
    return tmp;
  },
  get
};
function get(FRECENCY_AND_FAVORITES_SETTINGS) {
  let tmp = null;
  if (null != FRECENCY_AND_FAVORITES_SETTINGS) {
    let gates = null;
    if (importDefaultResult1.hasLoaded(FRECENCY_AND_FAVORITES_SETTINGS)) {
      gates = importDefaultResult1.getGates(FRECENCY_AND_FAVORITES_SETTINGS);
    }
    tmp = gates;
  }
  return tmp;
}
// CreateGeneratorClosureLongIndex (0x67)
let closure_3 = importDefault(dependencyMap[0])(get);
obj.load = function() {
  return callback(...arguments);
};
let closure_6 = obj.createFetchStore(importDefaultResult1, obj);
const importDefaultResult = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_config_gates/GuildConfigGates.tsx");

export const useGuildVerificationRoleEnabled = function useGuildVerificationRoleEnabled(arg0) {
  let prop;
  const data = callback2(arg0).data;
  if (null != data) {
    prop = data.guildVerificationRoleEnabled;
  }
  return null != prop && prop;
};
export const useApplicationIdentityLinkedRolesEnabled = function useApplicationIdentityLinkedRolesEnabled(arg0) {
  let prop;
  const data = callback2(arg0).data;
  if (null != data) {
    prop = data.applicationIdentityLinkedRolesEnabled;
  }
  return null != prop && prop;
};
