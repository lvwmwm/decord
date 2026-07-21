// Module ID: 10806
// Function ID: 83902
// Name: _getApplicationSubscriptionGroupListingsForApplication
// Dependencies: []
// Exports: fetchApplication, fetchEligibleApplicationSubscriptionGuilds, getApplicationSubscriptionGroupListingsForApplication, getEntitlementsForGuild, getSubscriptionGroupForSubscriptionPlan

// Module 10806 (_getApplicationSubscriptionGroupListingsForApplication)
function _getApplicationSubscriptionGroupListingsForApplication() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getApplicationSubscriptionGroupListingsForApplication = obj;
  return obj(...arguments);
}
function _getEntitlementsForGuild() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getEntitlementsForGuild = obj;
  return obj(...arguments);
}
function _getSubscriptionGroupForSubscriptionPlan() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getSubscriptionGroupForSubscriptionPlan = obj;
  return obj(...arguments);
}
function _fetchEligibleApplicationSubscriptionGuilds() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchEligibleApplicationSubscriptionGuilds = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionsHttpApi.tsx");

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
  signal = applicationId;
  let obj = importDefault(dependencyMap[3]);
  obj = { type: "APPLICATION_FETCH", applicationId };
  obj.dispatch(obj);
  const HTTP = signal(dependencyMap[2]).HTTP;
  obj = { url: Endpoints.APPLICATION_PUBLIC(applicationId), signal, rejectWithError: signal(dependencyMap[2]).rejectWithMigratedError() };
  const value = HTTP.get(obj);
  const obj4 = signal(dependencyMap[2]);
  return value.then((body) => {
    let obj = callback(closure_2[3]);
    obj = { marginBottom: "rgba(0, 0, 0, 0.5)", flexDirection: 24, alignItems: "flex", application: body.body };
    obj.dispatch(obj);
    return body.body;
  }).catch((arg0) => {
    let obj = callback(closure_2[3]);
    obj = { type: "APPLICATION_FETCH_FAIL", applicationId: arg0 };
    obj.dispatch(obj);
    let tmp2 = callback(closure_2[4]);
    tmp2 = new tmp2(arg0);
    return Promise.reject(tmp2);
  });
};
export const fetchEligibleApplicationSubscriptionGuilds = function fetchEligibleApplicationSubscriptionGuilds() {
  return _fetchEligibleApplicationSubscriptionGuilds(...arguments);
};
