// Module ID: 16381
// Function ID: 127833
// Name: importDefaultResult1
// Dependencies: [5, 16382, 653, 566, 507, 686, 2]
// Exports: useApplicationIdentityLinkedRolesEnabled, useGuildVerificationRoleEnabled

// Module 16381 (importDefaultResult1)
import importDefaultResult1 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";
import initialize from "initialize";
import importDefaultResult from "dispatcher";

const require = arg1;
initialize = {
  getQueryId(arg0) {
    let tmp = null;
    if (null != arg0) {
      tmp = arg0;
    }
    return tmp;
  },
  get
};
get = function get(FRECENCY_AND_FAVORITES_SETTINGS) {
  let tmp = null;
  if (null != FRECENCY_AND_FAVORITES_SETTINGS) {
    let gates = null;
    if (importDefaultResult1.hasLoaded(FRECENCY_AND_FAVORITES_SETTINGS)) {
      gates = importDefaultResult1.getGates(FRECENCY_AND_FAVORITES_SETTINGS);
    }
    tmp = gates;
  }
  return tmp;
};
// CreateGeneratorClosureLongIndex (0x67)
let closure_3 = require("dispatcher")(get);
initialize.load = function() {
  return callback(...arguments);
};
let closure_6 = initialize.createFetchStore(importDefaultResult1, initialize);
const result = require("ME").fileFinishedImporting("modules/guild_config_gates/GuildConfigGates.tsx");

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
