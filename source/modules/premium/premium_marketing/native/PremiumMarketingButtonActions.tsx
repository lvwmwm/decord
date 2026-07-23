// Module ID: 7457
// Function ID: 59800
// Name: getButtonActionHandler
// Dependencies: [7130, 1851, 653, 7135, 7458, 6661, 5624, 12361, 5796, 2]
// Exports: getButtonActionHandler

// Module 7457 (getButtonActionHandler)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";
import ME from "ME";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ AnalyticsSections: closure_5, AnalyticsObjects: closure_6, AnalyticsObjectTypes: closure_7, UserSettingsSections: closure_8 } = ME);
let result = require("ME").fileFinishedImporting("modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx");

export const getButtonActionHandler = function getButtonActionHandler(arg0) {
  let PremiumTypes;
  let buttonAction;
  let _isNativeReflectConstruct;
  let dependencyMap;
  let importDefault;
  let require;
  ({ buttonAction, applicationId: require, analyticsLocations: importDefault, analyticsPage: dependencyMap, onPaymentSuccess: _isNativeReflectConstruct, onPaymentDismiss: PremiumTypes } = arg0);
  if (require(7135) /* _callSuper */.ButtonAction.OPEN_SOCIAL_LAYER_STOREFRONT === buttonAction) {
    return () => {
      if (null != closure_0) {
        const obj = { applicationId: closure_0 };
        outer1_1(outer1_2[4])(obj);
      }
    };
  } else if (require(7135) /* _callSuper */.ButtonAction.OPEN_TIER_1_PAYMENT_MODAL === buttonAction) {
    return () => {
      obj = { analyticsLocation: obj, analyticsLocations: closure_1, premiumType: outer1_4.TIER_1, onPaymentSuccess: _isNativeReflectConstruct, onPaymentDismiss: closure_4 };
      obj = { page: closure_2, section: outer1_5.FOOTER, object: outer1_6.BUTTON_CTA, objectType: outer1_7.TIER_1 };
      return outer1_1(outer1_2[5])(obj);
    };
  } else {
    if (require(7135) /* _callSuper */.ButtonAction.OPEN_TIER_2_PAYMENT_MODAL !== buttonAction) {
      if (require(7135) /* _callSuper */.ButtonAction.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER !== buttonAction) {
        if (require(7135) /* _callSuper */.ButtonAction.OPEN_PLAN_SELECTION_MODAL === buttonAction) {
          return () => {
            obj = { analyticsLocation: obj, analyticsLocations: closure_1, onPaymentSuccess: _isNativeReflectConstruct, onPaymentDismiss: closure_4 };
            obj = { page: closure_2, section: outer1_5.FOOTER, object: outer1_6.BUTTON_CTA, objectType: outer1_7.BUY };
            return outer1_1(outer1_2[5])(obj);
          };
        } else {
          const OPEN_MARKETING_PAGE = require(7135) /* _callSuper */.ButtonAction.OPEN_MARKETING_PAGE;
          return () => {
            let obj = outer1_0(outer1_2[8]);
            obj = { screen: outer1_8.PREMIUM };
            return obj.openUserSettings(obj);
          };
        }
      }
    }
    return () => {
      const marketingMomentRewardSkuIds = outer1_3.getMarketingMomentRewardSkuIds();
      obj = {
        analyticsLocation: obj,
        analyticsLocations: closure_1,
        premiumType: outer1_4.TIER_2,
        onPaymentSuccess: _isNativeReflectConstruct,
        onPaymentDismiss(arg0) {
          let isSuccess;
          let productId;
          ({ productId, isSuccess } = arg0);
          if (null != outer1_4) {
            const obj = { productId, isSuccess };
            outer1_4(obj);
          }
          let tmp3 = productId === outer2_0(outer2_2[6]).ProductIds.PREMIUM_TIER_2_MONTHLY;
          if (!tmp3) {
            tmp3 = productId === outer2_0(outer2_2[6]).ProductIds.PREMIUM_TIER_2_YEARLY;
          }
          if (isSuccess) {
            isSuccess = tmp3;
          }
          if (isSuccess) {
            isSuccess = length.length > 0;
          }
          if (isSuccess) {
            const result = outer2_0(outer2_2[7]).showMarketingMomentRewardScreen(length[0]);
            const obj2 = outer2_0(outer2_2[7]);
          }
        }
      };
      obj = { page: closure_2, section: outer1_5.FOOTER, object: outer1_6.BUTTON_CTA, objectType: outer1_7.TIER_2 };
      outer1_1(outer1_2[5])(obj);
    };
  }
};
