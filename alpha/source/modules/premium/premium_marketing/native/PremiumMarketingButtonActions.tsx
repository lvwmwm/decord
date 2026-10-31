// Module ID: 15307
// Function ID: 15308
// Name: PremiumMarketingButtonActions
// Dependencies: [9626, 1385, 1072, 9633, 15308, 7607, 7593, 15309, 7563, 2]
// Exports: getButtonActionHandler

// Module 15307 (PremiumMarketingButtonActions)
import PremiumConstants from "PremiumConstants" /* 1385 */;
import openUserSettings from "openUserSettings" /* 7563 */;
import ProductIds from "ProductIds" /* 7593 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7607 */;
import cta_button from "cta_button" /* 9633 */;
import navigateToSocialLayerStorefrontDefault from "navigateToSocialLayerStorefront" /* 15308 */;
import showMarketingMomentRewardScreen from "showMarketingMomentRewardScreen" /* 15309 */;
import PromotionsStore from "PromotionsStore" /* 9626 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ AnalyticsSections: hasOwnProperty, AnalyticsObjects: metroRequire, AnalyticsObjectTypes: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
let result = size.fileFinishedImporting("modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx");

export function getButtonActionHandler(arg0) {
  let TIER_2;
  let analyticsLocations;
  let buttonAction;
  let constants3;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let page;
  ({ buttonAction, applicationId: require, analyticsLocations: importDefault, analyticsPage: dependencyMap, onPaymentSuccess: PromotionsStore, onPaymentDismiss: PremiumTypes } = arg0);
  let tmp = require;
  if (cta_button.ButtonAction.OPEN_SOCIAL_LAYER_STOREFRONT === buttonAction) {
    return () => {
      if (null != require) {
        const obj = { applicationId: tmp };
        navigateToSocialLayerStorefrontDefault(obj);
      }
    };
  } else if (cta_button.ButtonAction.OPEN_TIER_1_PAYMENT_MODAL === buttonAction) {
    return () => {
      let obj2;
      const obj = { analyticsLocation: obj2, analyticsLocations: importDefault, premiumType: PremiumTypes.TIER_1, onPaymentSuccess: PromotionsStore, onPaymentDismiss: PremiumTypes };
      obj2 = { page: dependencyMap, section: hasOwnProperty.FOOTER, object: metroRequire.BUTTON_CTA, objectType: metroImportDefault.TIER_1 };
      return openPremiumPlanSelectionActionSheetDefault(obj);
    };
  } else {
    if (cta_button.ButtonAction.OPEN_TIER_2_PAYMENT_MODAL !== buttonAction) {
      if (cta_button.ButtonAction.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER !== buttonAction) {
        if (cta_button.ButtonAction.OPEN_PLAN_SELECTION_MODAL === buttonAction) {
          return () => {
            let obj2;
            const obj = { analyticsLocation: obj2, analyticsLocations: importDefault, onPaymentSuccess: PromotionsStore, onPaymentDismiss: PremiumTypes };
            obj2 = { page: dependencyMap, section: hasOwnProperty.FOOTER, object: metroRequire.BUTTON_CTA, objectType: metroImportDefault.BUY };
            return openPremiumPlanSelectionActionSheetDefault(obj);
          };
        } else {
          const OPEN_MARKETING_PAGE = cta_button.ButtonAction.OPEN_MARKETING_PAGE;
          return () => {
            const obj = openUserSettings;
            const obj2 = { screen: constants3.PREMIUM };
            return obj.openUserSettings(obj2);
          };
        }
      }
    }
    return () => {
      let obj2;
      const length = PromotionsStore.getMarketingMomentRewardSkuIds();
      let obj = {
        analyticsLocation: obj2,
        analyticsLocations: importDefault,
        premiumType: PremiumTypes.TIER_2,
        onPaymentSuccess: PromotionsStore,
        onPaymentDismiss: function handlePaymentDismiss(arg0) {
          let isSuccess;
          let productId;
          ({ productId, isSuccess } = arg0);
          if (PremiumTypes != null) {
            const obj = { productId, isSuccess };
            tmp(obj);
          }
          const tmp5 = productId === ProductIds.ProductIds.PREMIUM_TIER_2_MONTHLY || productId === ProductIds.ProductIds.PREMIUM_TIER_2_YEARLY;
          if (isSuccess) {
            isSuccess = tmp5;
          }
          if (isSuccess) {
            isSuccess = length.length > 0;
          }
          if (isSuccess) {
            const tmp3Result = showMarketingMomentRewardScreen;
            const result = tmp3Result.showMarketingMomentRewardScreen(length[0]);
          }
        }
      };
      obj2 = { page: dependencyMap, section: constants.FOOTER, object: constants2.BUTTON_CTA, objectType: TIER_2.TIER_2 };
      const tmp = openPremiumPlanSelectionActionSheetDefault(obj);
    };
  }
}
