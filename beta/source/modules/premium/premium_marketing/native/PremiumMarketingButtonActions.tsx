// Module ID: 13733
// Function ID: 13734
// Name: PremiumMarketingButtonActions
// Dependencies: [10999, 1378, 1078, 11006, 13734, 7698, 7519, 13735, 7658, 2]
// Exports: getButtonActionHandler

// Module 13733 (PremiumMarketingButtonActions)
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7698 */;
import cta_button from "cta_button" /* 11006 */;
import navigateToSocialLayerStorefrontDefault from "navigateToSocialLayerStorefront" /* 13734 */;
import PromotionsStore from "PromotionsStore" /* 10999 */;

const require = globalThis.__r;

require = fn;
const PremiumTypes = fn(1378).PremiumTypes;
const Constants = fn(1078);
({ AnalyticsSections: hasOwnProperty, AnalyticsObjects: metroRequire, AnalyticsObjectTypes: closure_7, UserSettingsSections: closure_8 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx");

export const getButtonActionHandler = function getButtonActionHandler(arg0) {
  ({ buttonAction, applicationId: require, analyticsLocations: importDefault, analyticsPage: dependencyMap, onPaymentSuccess: PromotionsStore, onPaymentDismiss: PremiumTypes } = arg0);
  if (cta_button.ButtonAction.OPEN_SOCIAL_LAYER_STOREFRONT === buttonAction) {
    return () => {
      if (null != require) {
        const obj = { applicationId: tmp };
        navigateToSocialLayerStorefrontDefault(obj);
      }
    };
  } else if (tmp(11006).ButtonAction.OPEN_TIER_1_PAYMENT_MODAL === buttonAction) {
    return () => {
      const obj = { analyticsLocation: { page, section: constants.FOOTER, object: constants2.BUTTON_CTA, objectType: React5.TIER_1 }, analyticsLocations, premiumType: PremiumTypes.TIER_1, onPaymentSuccess, onPaymentDismiss };
      return openPremiumPlanSelectionActionSheetDefault(obj);
    };
  } else {
    if (tmp(11006).ButtonAction.OPEN_TIER_2_PAYMENT_MODAL !== buttonAction) {
      if (tmp(11006).ButtonAction.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER !== buttonAction) {
        if (tmp(11006).ButtonAction.OPEN_PLAN_SELECTION_MODAL === buttonAction) {
          return () => {
            const obj = { analyticsLocation: { page, section: constants.FOOTER, object: constants2.BUTTON_CTA, objectType: React5.BUY }, analyticsLocations, onPaymentSuccess, onPaymentDismiss };
            return openPremiumPlanSelectionActionSheetDefault(obj);
          };
        } else {
          const OPEN_MARKETING_PAGE = tmp(11006).ButtonAction.OPEN_MARKETING_PAGE;
          return () => require("openUserSettings").openUserSettings({ screen: constants3.PREMIUM });
        }
      }
    }
    return () => {
      onPaymentSuccess.getMarketingMomentRewardSkuIds();
      let obj = {
        analyticsLocation: { page, section: constants.FOOTER, object: constants2.BUTTON_CTA, objectType: TIER_2.TIER_2 },
        analyticsLocations,
        premiumType: onPaymentDismiss.TIER_2,
        onPaymentSuccess,
        onPaymentDismiss(arg0) {
          ({ productId, isSuccess } = arg0);
          if (onPaymentDismiss != null) {
            const obj = { productId, isSuccess };
            tmp(obj);
          }
          if (isSuccess) {
            isSuccess = tmp5;
          }
          if (isSuccess) {
            isSuccess = length.length > 0;
          }
          if (isSuccess) {
            const result = tmp3(13735).showMarketingMomentRewardScreen(length[0]);
            const tmp3Result = tmp3(13735);
          }
        }
      };
      analyticsLocations(page[5])(obj);
    };
  }
};
