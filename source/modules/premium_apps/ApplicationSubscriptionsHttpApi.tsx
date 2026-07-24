// Module ID: 10846
// Function ID: 84167
// Name: _getApplicationSubscriptionGroupListingsForApplication
// Dependencies: [5, 653, 507, 686, 4030, 2]
// Exports: fetchApplication, fetchEligibleApplicationSubscriptionGuilds, getApplicationSubscriptionGroupListingsForApplication, getEntitlementsForGuild, getSubscriptionGroupForSubscriptionPlan

// Module 10846 (_getApplicationSubscriptionGroupListingsForApplication)
import set from "set";
import { Endpoints } from "ME";

const require = arg1;
function _getApplicationSubscriptionGroupListingsForApplication() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _getEntitlementsForGuild() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _getSubscriptionGroupForSubscriptionPlan() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchEligibleApplicationSubscriptionGuilds() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionsHttpApi.tsx");

export const getApplicationSubscriptionGroupListingsForApplication = function getApplicationSubscriptionGroupListingsForApplication(applicationId, groupListingId) {
  return _getApplicationSubscriptionGroupListingsForApplication(...arguments);
};
export const getEntitlementsForGuild = function getEntitlementsForGuild(guildId) {
  return _getEntitlementsForGuild(...arguments);
};
export const getSubscriptionGroupForSubscriptionPlan = function getSubscriptionGroupForSubscriptionPlan(arg0) {
  return _getSubscriptionGroupForSubscriptionPlan(...arguments);
};
export const fetchApplication = function fetchApplication(applicationId, signal) {
  const _require = applicationId;
  let obj = importDefault(686);
  obj = { type: "APPLICATION_FETCH", applicationId };
  obj.dispatch(obj);
  const HTTP = _require(507).HTTP;
  obj = { url: Endpoints.APPLICATION_PUBLIC(applicationId), signal, rejectWithError: _require(507).rejectWithMigratedError() };
  const value = HTTP.get(obj);
  const obj4 = _require(507);
  return value.then((body) => {
    let obj = outer1_1(outer1_2[3]);
    obj = { type: "APPLICATION_FETCH_SUCCESS", application: body.body, isHydrated: true };
    obj.dispatch(obj);
    return body.body;
  }).catch((arg0) => {
    let obj = outer1_1(outer1_2[3]);
    obj = { type: "APPLICATION_FETCH_FAIL", applicationId: closure_0 };
    obj.dispatch(obj);
    let tmp2 = outer1_1(outer1_2[4]);
    tmp2 = new tmp2(arg0);
    return Promise.reject(tmp2);
  });
};
export const fetchEligibleApplicationSubscriptionGuilds = function fetchEligibleApplicationSubscriptionGuilds() {
  return _fetchEligibleApplicationSubscriptionGuilds(...arguments);
};
