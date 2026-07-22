// Module ID: 6638
// Function ID: 50982
// Name: emitMWRCSentryErrorOnFailure
// Dependencies: []
// Exports: goToStandaloneGuildBoostCheckoutFromMobileApp, goToStandaloneNitroManagementFromMobileApp, goToStandalonePremiumCheckoutFromMobileApp

// Module 6638 (emitMWRCSentryErrorOnFailure)
function emitMWRCSentryErrorOnFailure(arg0, source, load_id) {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg0;
  let obj = { destination_url: tmp2, load_id };
  importDefaultResult.error("Failed to open mobile web popout to " + tmp2 + ", error response: ", tmp);
  const error = new Error("Mobile web redirect checkout mobile app to web popout failed");
  obj = {};
  obj = { failure_response: tmp };
  const merged = Object.assign(obj);
  obj.extra = obj;
  const result = require(dependencyMap[3]).captureMobileWebRedirectCheckoutSentryError(error, source, obj);
}
const CustomCheckoutFlow = require(dependencyMap[0]).CustomCheckoutFlow;
const Routes = require(dependencyMap[1]).Routes;
let importDefaultResult = importDefault(dependencyMap[2]);
importDefaultResult = new importDefaultResult("BillingStandaloneNativeUtils");
const _module = require(dependencyMap[8]);
const result = _module.fileFinishedImporting("modules/payments/native/utils/BillingStandaloneNativeUtils.tsx");

export const goToStandalonePremiumCheckoutFromMobileApp = function goToStandalonePremiumCheckoutFromMobileApp(premium_plan_selection_action_sheet, arg1, arg2, arg3) {
  const require = premium_plan_selection_action_sheet;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const CustomCheckoutFlow = arg3;
  let obj = require(dependencyMap[4]);
  obj = {};
  const obj2 = require(dependencyMap[5]);
  const merged = Object.assign(arg1);
  if (isMetaQuestResult) {
    obj["flowType"] = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
    let tmp5 = obj;
  } else {
    obj["deepLinkType"] = require(dependencyMap[6]).LinkingTypes.MOBILE_WEB_REDIRECT_CHECKOUT;
    tmp5 = obj;
  }
  return obj.goToStandalonePremiumCheckout(tmp5, (body, searchParams) => {
    searchParams = searchParams.searchParams;
    searchParams.append("handoff_token", body.body.handoff_token);
    searchParams(arg2[7]).openURLExternally(searchParams.href);
    arg2(body, searchParams);
  }, (arg0) => {
    const items = [...arguments];
    callback(items, arg0, arg1.loadId);
    arg3(...items);
  });
};
export const goToStandaloneNitroManagementFromMobileApp = function goToStandaloneNitroManagementFromMobileApp(premium_external_management, loadId, onSuccessCallback, onFailureCallback) {
  const require = premium_external_management;
  loadId = loadId.loadId;
  const importDefault = loadId;
  const dependencyMap = onSuccessCallback;
  const CustomCheckoutFlow = onFailureCallback;
  const obj = require(dependencyMap[4]);
  if (obj2.isMetaQuest()) {
    let result = obj3.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT, loadId);
  } else {
    result = obj3.BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK(require(dependencyMap[6]).LinkingTypes.MOBILE_WEB_REDIRECT_CHECKOUT, loadId);
  }
  return obj.goToBillingStandalonePageWithHandoff(result, (body, searchParams) => {
    searchParams = searchParams.searchParams;
    searchParams.append("handoff_token", body.body.handoff_token);
    loadId(arg2[7]).openURLExternally(searchParams.href);
    arg2(body, searchParams);
  }, (arg0) => {
    const items = [...arguments];
    callback(items, arg0, loadId);
    arg3(...items);
  });
};
export const goToStandaloneGuildBoostCheckoutFromMobileApp = function goToStandaloneGuildBoostCheckoutFromMobileApp(arg0, arg1, newAnalyticsLoadId, arg3, arg4) {
  const require = arg0;
  const importDefault = newAnalyticsLoadId;
  const dependencyMap = arg3;
  const CustomCheckoutFlow = arg4;
  let prop;
  if (!obj.isMetaQuest()) {
    prop = require(dependencyMap[6]).LinkingTypes.MOBILE_WEB_REDIRECT_CHECKOUT;
  }
  const obj = require(dependencyMap[5]);
  let prop1;
  if (obj2.isMetaQuest()) {
    prop1 = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
  }
  const obj2 = require(dependencyMap[5]);
  return require(dependencyMap[4]).goToBillingStandalonePageWithHandoff(Routes.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(arg1, prop, newAnalyticsLoadId, prop1), (body, searchParams) => {
    searchParams = searchParams.searchParams;
    searchParams.append("handoff_token", body.body.handoff_token);
    arg2(arg3[7]).openURLExternally(searchParams.href);
    arg3(body, searchParams);
  }, (arg0) => {
    const items = [...arguments];
    callback(items, arg0, arg2);
    arg4(...items);
  });
};
