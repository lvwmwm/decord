// Module ID: 9667
// Function ID: 75255
// Name: PremiumGiftModal
// Dependencies: []
// Exports: default

// Module 9667 (PremiumGiftModal)
let CUSTOMIZATION;
let GIFTING_BADGE;
let PLAN_SELECT;
let REWARD_SELECT;
let SUCCESS;
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = { PLAN_SELECT: "PremiumGiftPlanSelect", REWARD_SELECT: "GiftingSKUSelect", CUSTOMIZATION: "PremiumGiftCustomization", SUCCESS: "PremiumGiftSuccess", GIFTING_BADGE: "GiftingBadgePostPurchase" };
obj = { [PLAN_SELECT]: arg1(dependencyMap[4]).PaymentFlowStep.SKU_SELECT, [REWARD_SELECT]: arg1(dependencyMap[4]).PaymentFlowStep.REWARD_SKU_SELECT, [CUSTOMIZATION]: arg1(dependencyMap[4]).PaymentFlowStep.PLAN_SELECT, [SUCCESS]: arg1(dependencyMap[4]).PaymentFlowStep.CONFIRM, [GIFTING_BADGE]: arg1(dependencyMap[4]).PaymentFlowStep.CONFIRM };
({ PLAN_SELECT, REWARD_SELECT, CUSTOMIZATION, SUCCESS, GIFTING_BADGE } = obj);
obj = {};
const obj3 = arg1(dependencyMap[5]);
obj.header = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
let closure_9 = obj3.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftModal.tsx");

export default function PremiumGiftModal(analyticsLocations) {
  let analyticsLocation;
  let initialRoute;
  let onDismiss;
  let order;
  let planInterval;
  let premiumType;
  let recipientUserId;
  ({ recipientUserId, premiumType, analyticsLocation } = analyticsLocations);
  const arg1 = analyticsLocation;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const importDefault = analyticsLocations;
  ({ initialRoute, onDismiss } = analyticsLocations);
  const dependencyMap = onDismiss;
  let React;
  ({ planInterval, order } = analyticsLocations);
  const tmp = importDefault(dependencyMap[20])(() => analyticsLocation(onDismiss[21]).v4());
  let callback = tmp;
  const items = [tmp, analyticsLocation, analyticsLocations];
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
    let obj = arg1(dependencyMap[23]);
    if (obj.isPremiumGiftingSupported()) {
      obj = { value: importDefault(dependencyMap[19])(analyticsLocations).analyticsLocations };
      obj = { basePurchaseAnalytics: tmp2, recipientUserId, onClose: callback, setCurrentAnalyticsStep: tmp12, premiumType, planInterval, initialOrder: order };
      const obj1 = { currentStep: tmp11[0] };
      const obj2 = {
        initialRouteName: initialRoute,
        screens: tmp8,
        onStateChange(arg0) {
              if (null != arg0) {
                tmp12(closure_8[arg0.routes[arg0.index].name]);
              }
            }
      };
      obj1.children = tmp15(arg1(dependencyMap[27]).Navigator, obj2);
      obj.children = tmp15(importDefault(dependencyMap[26]), obj1);
      obj.children = tmp15(arg1(dependencyMap[25]).NativeGiftContextProvider, obj);
      let tmp15Result = tmp15(arg1(dependencyMap[19]).AnalyticsLocationProvider, obj);
      const tmp25 = importDefault(dependencyMap[26]);
    } else {
      const obj3 = {};
      const intl = arg1(dependencyMap[9]).intl;
      obj3.title = intl.string(arg1(dependencyMap[9]).t.JCFN/y);
      tmp15Result = tmp15(importDefault(dependencyMap[24]), obj3);
      const tmp19 = importDefault(dependencyMap[24]);
    }
    return tmp15Result;
  } else if (null != premiumType) {
    let PLAN_SELECT = obj.CUSTOMIZATION;
  } else {
    PLAN_SELECT = obj.PLAN_SELECT;
  }
};
export const PremiumGiftScreens = obj;
