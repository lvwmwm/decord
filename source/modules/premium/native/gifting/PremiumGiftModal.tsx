// Module ID: 9680
// Function ID: 75337
// Name: PremiumGiftModal
// Dependencies: [57, 31, 1849, 33, 7156, 4130, 689, 566, 8676, 1212, 5087, 9681, 9760, 9762, 9767, 2294, 9806, 9679, 5484, 5464, 5450, 491, 4337, 3789, 8777, 8809, 9810, 5519, 2]
// Exports: default

// Module 9680 (PremiumGiftModal)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let CUSTOMIZATION;
let GIFTING_BADGE;
let PLAN_SELECT;
let REWARD_SELECT;
let SUCCESS;
const require = arg1;
let obj = { PLAN_SELECT: "PremiumGiftPlanSelect", REWARD_SELECT: "GiftingSKUSelect", CUSTOMIZATION: "PremiumGiftCustomization", SUCCESS: "PremiumGiftSuccess", GIFTING_BADGE: "GiftingBadgePostPurchase" };
obj = { [PLAN_SELECT]: require("getBaseAnalyticsFields").PaymentFlowStep.SKU_SELECT, [REWARD_SELECT]: require("getBaseAnalyticsFields").PaymentFlowStep.REWARD_SKU_SELECT, [CUSTOMIZATION]: require("getBaseAnalyticsFields").PaymentFlowStep.PLAN_SELECT, [SUCCESS]: require("getBaseAnalyticsFields").PaymentFlowStep.CONFIRM, [GIFTING_BADGE]: require("getBaseAnalyticsFields").PaymentFlowStep.CONFIRM };
({ PLAN_SELECT, REWARD_SELECT, CUSTOMIZATION, SUCCESS, GIFTING_BADGE } = obj);
obj = { header: { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" } };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftModal.tsx");

export default function PremiumGiftModal(analyticsLocations) {
  let analyticsLocation;
  let initialRoute;
  let onDismiss;
  let order;
  let planInterval;
  let premiumType;
  let recipientUserId;
  ({ recipientUserId, premiumType, analyticsLocation } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ initialRoute, onDismiss } = analyticsLocations);
  let React;
  ({ planInterval, order } = analyticsLocations);
  let tmp = analyticsLocations(onDismiss[20])(() => analyticsLocation(onDismiss[21]).v4());
  let callback = tmp;
  let items = [tmp, analyticsLocation, analyticsLocations];
  if (null != initialRoute) {
    const items1 = [onDismiss];
    callback = React.useCallback(() => {
      let arr = analyticsLocations(onDismiss[22]);
      arr = arr.pop();
      if (null != onDismiss) {
        onDismiss();
      }
    }, items1);
    const tmp11 = callback(React.useState(obj[initialRoute]), 2);
    React = tmp12;
    obj = analyticsLocation(onDismiss[23]);
    if (obj.isPremiumGiftingSupported()) {
      obj = { value: analyticsLocations(onDismiss[19])(analyticsLocations).analyticsLocations };
      obj = { basePurchaseAnalytics: tmp2, recipientUserId, onClose: callback, setCurrentAnalyticsStep: tmp12, premiumType, planInterval, initialOrder: order };
      let obj1 = { currentStep: tmp11[0] };
      let obj2 = {
        initialRouteName: initialRoute,
        screens: tmp8,
        onStateChange(arg0) {
              if (null != arg0) {
                _undefined(outer1_8[arg0.routes[arg0.index].name]);
              }
            }
      };
      obj1.children = tmp15(analyticsLocation(onDismiss[27]).Navigator, obj2);
      obj.children = tmp15(analyticsLocations(onDismiss[26]), obj1);
      obj.children = tmp15(analyticsLocation(onDismiss[25]).NativeGiftContextProvider, obj);
      let tmp15Result = tmp15(analyticsLocation(onDismiss[19]).AnalyticsLocationProvider, obj);
      const tmp25 = analyticsLocations(onDismiss[26]);
    } else {
      let obj3 = {};
      let intl = analyticsLocation(onDismiss[9]).intl;
      obj3.title = intl.string(analyticsLocation(onDismiss[9]).t["JCFN/y"]);
      tmp15Result = tmp15(analyticsLocations(onDismiss[24]), obj3);
      const tmp19 = analyticsLocations(onDismiss[24]);
    }
    return tmp15Result;
  } else if (null != premiumType) {
    let PLAN_SELECT = obj.CUSTOMIZATION;
  } else {
    PLAN_SELECT = obj.PLAN_SELECT;
  }
};
export const PremiumGiftScreens = obj;
