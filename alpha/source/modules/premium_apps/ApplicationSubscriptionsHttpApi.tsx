// Module ID: 11741
// Function ID: 11742
// Name: ApplicationSubscriptionsHttpApi
// Dependencies: [5, 1072, 1282, 572, 6447, 2]
// Exports: fetchApplication, fetchEligibleApplicationSubscriptionGuilds, getApplicationSubscriptionGroupListingsForApplication, getEntitlementsForGuild, getSubscriptionGroupForSubscriptionPlan

// Module 11741 (ApplicationSubscriptionsHttpApi)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import APIErrorDefault from "APIError" /* 6447 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj = function _getApplicationSubscriptionGroupListingsForApplication() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let c2;
    let c3;
    let obj7;
    let closure_0 = arg0;
    let closure_1 = arg1;
    const HTTP = require("HTTPUtils").HTTP;
    const obj4 = { url: Endpoints.APPLICATION_SUBSCRIPTION_GROUP_LISTING(closure_0, closure_1), rejectWithError: obj7.rejectWithMigratedError() };
    const get = HTTP.get;
    obj7 = require("HTTPUtils");
    await get(obj4);
    return arg1.body;
  });
  return obj(...arguments);
};
obj = function _getEntitlementsForGuild() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let obj7;
    let closure_0 = arg0;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: Endpoints.GUILD_ENTITLEMENTS(closure_0), query: { with_sku: true, with_application: true }, rejectWithError: obj7.rejectWithMigratedError() };
    const get = HTTP.get;
    obj7 = require("HTTPUtils");
    await get(request);
    return arg1.body;
  });
  return obj(...arguments);
};
obj = function _getSubscriptionGroupForSubscriptionPlan() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let obj4;
    let closure_0 = arg0;
    const HTTP = require("HTTPUtils").HTTP;
    const obj5 = { url: Endpoints.SUBSCRIPTION_PLAN_GROUP_LISTING(closure_0), rejectWithError: obj4.rejectWithMigratedError() };
    const get = HTTP.get;
    obj4 = require("HTTPUtils");
    await get(obj5);
    return arg1.body;
  });
  return obj(...arguments);
};
obj = function _fetchEligibleApplicationSubscriptionGuilds() {
  obj = _asyncToGenerator(async (application_id, sku_id) => {
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      let obj4;
      let obj8;
      const HTTP = require("HTTPUtils").HTTP;
      const request = { url: constants.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS, query: obj4, rejectWithError: obj8.rejectWithMigratedError() };
      const get = HTTP.get;
      obj4 = { application_id, sku_id };
      obj8 = require("HTTPUtils");
      await get(request);
      return value.body;
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionsHttpApi.tsx");

export function getApplicationSubscriptionGroupListingsForApplication() {
  return obj(...arguments);
}
export function getEntitlementsForGuild() {
  return obj(...arguments);
}
export function getSubscriptionGroupForSubscriptionPlan() {
  return obj(...arguments);
}
export function fetchApplication(applicationId, signal) {
  let obj4;
  _require = applicationId;
  obj = DispatcherDefault;
  let obj2 = { type: "APPLICATION_FETCH", applicationId };
  obj.dispatch(obj2);
  const HTTP = require("HTTPUtils").HTTP;
  const get = HTTP.get;
  const obj3 = { url: Endpoints.APPLICATION_PUBLIC(applicationId), signal, rejectWithError: obj4.rejectWithMigratedError() };
  obj4 = require("HTTPUtils");
  const value = get(obj3);
  const nextPromise = value.then((application) => {
    obj = DispatcherDefault;
    const obj2 = { type: "APPLICATION_FETCH_SUCCESS", application: application.body, isHydrated: true };
    obj.dispatch(obj2);
    return application.body;
  });
  return nextPromise.catch((error) => {
    obj = DispatcherDefault;
    const obj2 = { type: "APPLICATION_FETCH_FAIL", applicationId };
    obj.dispatch(obj2);
    const tmp2 = new APIErrorDefault(error);
    return reject(tmp2);
  });
}
export function fetchEligibleApplicationSubscriptionGuilds() {
  return obj(...arguments);
}
