// Module ID: 7452
// Function ID: 59767
// Name: getButtonActionHandler
// Dependencies: []
// Exports: getButtonActionHandler

// Module 7452 (getButtonActionHandler)
let closure_3 = importDefault(dependencyMap[0]);
const PremiumTypes = arg1(dependencyMap[1]).PremiumTypes;
({ AnalyticsSections: closure_5, AnalyticsObjects: closure_6, AnalyticsObjectTypes: closure_7, UserSettingsSections: closure_8 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx");

export const getButtonActionHandler = function getButtonActionHandler(arg0) {
  let buttonAction;
  ({ buttonAction, applicationId: closure_0, analyticsLocations: closure_1, analyticsPage: closure_2, onPaymentSuccess: closure_3, onPaymentDismiss: closure_4 } = arg0);
  if (arg1(dependencyMap[3]).ButtonAction.OPEN_SOCIAL_LAYER_STOREFRONT === buttonAction) {
    return () => {
      if (null != closure_0) {
        const obj = { applicationId: closure_0 };
        callback2(closure_2[4])(obj);
      }
    };
  } else if (arg1(dependencyMap[3]).ButtonAction.OPEN_TIER_1_PAYMENT_MODAL === buttonAction) {
    return () => {
      let obj = { analyticsLocation: obj, analyticsLocations: callback2, premiumType: closure_4.TIER_1, onPaymentSuccess: closure_3, onPaymentDismiss: closure_4 };
      obj = { page: closure_2, section: constants.FOOTER, object: constants2.BUTTON_CTA, objectType: closure_7.TIER_1 };
      return callback2(closure_2[5])(obj);
    };
  } else {
    if (arg1(dependencyMap[3]).ButtonAction.OPEN_TIER_2_PAYMENT_MODAL !== buttonAction) {
      if (arg1(dependencyMap[3]).ButtonAction.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER !== buttonAction) {
        if (arg1(dependencyMap[3]).ButtonAction.OPEN_PLAN_SELECTION_MODAL === buttonAction) {
          return () => {
            let obj = { analyticsLocation: obj, analyticsLocations: callback2, onPaymentSuccess: closure_3, onPaymentDismiss: closure_4 };
            obj = { page: closure_2, section: constants.FOOTER, object: constants2.BUTTON_CTA, objectType: closure_7.BUY };
            return callback2(closure_2[5])(obj);
          };
        } else {
          const OPEN_MARKETING_PAGE = arg1(dependencyMap[3]).ButtonAction.OPEN_MARKETING_PAGE;
          return () => {
            let obj = callback(closure_2[8]);
            obj = { screen: constants3.PREMIUM };
            return obj.openUserSettings(obj);
          };
        }
      }
    }
    return () => {
      const marketingMomentRewardSkuIds2 = marketingMomentRewardSkuIds.getMarketingMomentRewardSkuIds();
      let obj = {
        analyticsLocation: obj,
        analyticsLocations: callback2,
        premiumType: closure_4.TIER_2,
        onPaymentSuccess: marketingMomentRewardSkuIds,
        onPaymentDismiss(arg0) {
          let isSuccess;
          let productId;
          ({ productId, isSuccess } = arg0);
          if (null != callback) {
            const obj = { productId, isSuccess };
            callback(obj);
          }
          let tmp3 = productId === lib(closure_2[6]).ProductIds.PREMIUM_TIER_2_MONTHLY;
          if (!tmp3) {
            tmp3 = productId === lib(closure_2[6]).ProductIds.PREMIUM_TIER_2_YEARLY;
          }
          if (isSuccess) {
            isSuccess = tmp3;
          }
          if (isSuccess) {
            isSuccess = lib.length > 0;
          }
          if (isSuccess) {
            const result = lib(closure_2[7]).showMarketingMomentRewardScreen(lib[0]);
            const obj2 = lib(closure_2[7]);
          }
        }
      };
      obj = { page: closure_2, section: constants.FOOTER, object: constants2.BUTTON_CTA, objectType: closure_7.TIER_2 };
      callback2(closure_2[5])(obj);
    };
  }
};
