// Module ID: 6643
// Function ID: 51011
// Name: emitMWRCSentryErrorOnFailure
// Dependencies: [4113, 653, 3, 6644, 6645, 1553, 668, 3827, 2]
// Exports: goToStandaloneGuildBoostCheckoutFromMobileApp, goToStandaloneNitroManagementFromMobileApp, goToStandalonePremiumCheckoutFromMobileApp

// Module 6643 (emitMWRCSentryErrorOnFailure)
import { CustomCheckoutFlow } from "CustomCheckoutFlow";
import { Routes } from "ME";
import importDefaultResult from "checkForCustomCheckoutFlow";

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
  const result = require(6644) /* checkForCustomCheckoutFlow */.captureMobileWebRedirectCheckoutSentryError(error, source, obj);
}
importDefaultResult = new importDefaultResult("BillingStandaloneNativeUtils");
let result = require("timestamp").fileFinishedImporting("modules/payments/native/utils/BillingStandaloneNativeUtils.tsx");

export const goToStandalonePremiumCheckoutFromMobileApp = function goToStandalonePremiumCheckoutFromMobileApp(premium_plan_selection_action_sheet, arg1, arg2, arg3) {
  const _require = premium_plan_selection_action_sheet;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const CustomCheckoutFlow = arg3;
  let obj = _require(6645);
  obj = {};
  const obj2 = _require(1553);
  const merged = Object.assign(arg1);
  if (isMetaQuestResult) {
    obj["flowType"] = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
    let tmp5 = obj;
  } else {
    obj["deepLinkType"] = _require(668).LinkingTypes.MOBILE_WEB_REDIRECT_CHECKOUT;
    tmp5 = obj;
  }
  return obj.goToStandalonePremiumCheckout(tmp5, (body, searchParams) => {
    searchParams = searchParams.searchParams;
    searchParams.append("handoff_token", body.body.handoff_token);
    lib(3827).openURLExternally(searchParams.href);
    dependencyMap(body, searchParams);
  }, (arg0) => {
    const items = [...arguments];
    outer1_6(items, closure_0, lib.loadId);
    callback(...items);
  });
};
export const goToStandaloneNitroManagementFromMobileApp = function goToStandaloneNitroManagementFromMobileApp(premium_external_management, loadId, onSuccessCallback, onFailureCallback) {
  const _require = premium_external_management;
  loadId = loadId.loadId;
  const dependencyMap = onSuccessCallback;
  const CustomCheckoutFlow = onFailureCallback;
  const obj = _require(6645);
  if (obj2.isMetaQuest()) {
    let result = obj3.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT, loadId);
  } else {
    result = obj3.BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK(_require(668).LinkingTypes.MOBILE_WEB_REDIRECT_CHECKOUT, loadId);
  }
  return obj.goToBillingStandalonePageWithHandoff(result, (body, searchParams) => {
    searchParams = searchParams.searchParams;
    searchParams.append("handoff_token", body.body.handoff_token);
    loadId(onSuccessCallback[7]).openURLExternally(searchParams.href);
    onSuccessCallback(body, searchParams);
  }, (arg0) => {
    const items = [...arguments];
    outer1_6(items, closure_0, loadId);
    onFailureCallback(...items);
  });
};
export const goToStandaloneGuildBoostCheckoutFromMobileApp = function goToStandaloneGuildBoostCheckoutFromMobileApp(outer2_0, arg1, newAnalyticsLoadId, arg3, arg4) {
  const _require = outer2_0;
  let closure_1 = newAnalyticsLoadId;
  const dependencyMap = arg3;
  const CustomCheckoutFlow = arg4;
  let prop;
  if (!obj.isMetaQuest()) {
    prop = _require(668).LinkingTypes.MOBILE_WEB_REDIRECT_CHECKOUT;
  }
  obj = _require(1553);
  let prop1;
  if (obj2.isMetaQuest()) {
    prop1 = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
  }
  obj2 = _require(1553);
  return _require(6645).goToBillingStandalonePageWithHandoff(Routes.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(arg1, prop, newAnalyticsLoadId, prop1), (body, searchParams) => {
    searchParams = searchParams.searchParams;
    searchParams.append("handoff_token", body.body.handoff_token);
    newAnalyticsLoadId(3827).openURLExternally(searchParams.href);
    dependencyMap(body, searchParams);
  }, (arg0) => {
    const items = [...arguments];
    outer1_6(items, closure_0, closure_1);
    callback(...items);
  });
};
