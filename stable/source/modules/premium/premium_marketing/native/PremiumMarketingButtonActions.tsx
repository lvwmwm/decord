// Module ID: 10016
// Function ID: 10017
// Name: PremiumMarketingButtonActions
// Dependencies: [9623, 1390, 1072, 9632, 10017, 9590, 8580, 10019, 7937, 8484, 8604, 2]
// Exports: getButtonActionHandler

// Module 10016 (PremiumMarketingButtonActions)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 8484 */;
import ProductIds from "ProductIds" /* 8580 */;
import openUserSettings from "openUserSettings" /* 8604 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 9590 */;
import cta_button from "cta_button" /* 9632 */;
import navigateToSocialLayerStorefrontDefault from "navigateToSocialLayerStorefront" /* 10017 */;
import showMarketingMomentRewardScreen from "showMarketingMomentRewardScreen" /* 10019 */;
import PromotionsStore from "PromotionsStore" /* 9623 */;
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
  let closure_5;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let page;
  ({ buttonAction, applicationId: require, shopCollectionId: importDefault, analyticsLocations: dependencyMap, analyticsPage: PromotionsStore, onPaymentSuccess: PremiumTypes, onPaymentDismiss: closure_5 } = arg0);
  let tmp = require;
  const tmp2 = dependencyMap;
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
      const obj = { analyticsLocation: obj2, analyticsLocations: dependencyMap, premiumType: PremiumTypes.TIER_1, onPaymentSuccess: PremiumTypes, onPaymentDismiss };
      obj2 = { page: PromotionsStore, section: hasOwnProperty.FOOTER, object: metroRequire.BUTTON_CTA, objectType: metroImportDefault.TIER_1 };
      return openPremiumPlanSelectionActionSheetDefault(obj);
    };
  } else {
    if (cta_button.ButtonAction.OPEN_TIER_2_PAYMENT_MODAL !== buttonAction) {
      if (cta_button.ButtonAction.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER !== buttonAction) {
        if (cta_button.ButtonAction.OPEN_PLAN_SELECTION_MODAL === buttonAction) {
          return () => {
            let obj2;
            const obj = { analyticsLocation: obj2, analyticsLocations: dependencyMap, onPaymentSuccess: PremiumTypes, onPaymentDismiss };
            obj2 = { page: PromotionsStore, section: hasOwnProperty.FOOTER, object: metroRequire.BUTTON_CTA, objectType: metroImportDefault.BUY };
            return openPremiumPlanSelectionActionSheetDefault(obj);
          };
        } else if (cta_button.ButtonAction.OPEN_SHOP === buttonAction) {
          return () => {
            let obj6;
            const obj = { analyticsLocations: dependencyMap, analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING };
            if (null != importDefault) {
              const obj3 = CollectiblesActionCreators;
              const result = obj3.dispatchOpenCollectiblesShop(obj);
              const obj5 = { screen: metroImportAll.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, params: obj6 };
              obj6 = { categorySkuId: tmp2, analyticsContext: null };
              const obj4 = openUserSettings;
              obj4.openUserSettings(obj5);
            } else {
              const obj2 = CollectiblesActionCreators;
              obj2.openCollectiblesShop(obj);
            }
          };
        } else {
          const OPEN_MARKETING_PAGE = cta_button.ButtonAction.OPEN_MARKETING_PAGE;
          return () => {
            const obj = openUserSettings;
            const obj2 = { screen: constants2.PREMIUM };
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
        analyticsLocations: dependencyMap,
        premiumType: PremiumTypes.TIER_2,
        onPaymentSuccess: PremiumTypes,
        onPaymentDismiss: function handlePaymentDismiss(arg0) {
          let isSuccess;
          let productId;
          ({ productId, isSuccess } = arg0);
          if (closure_5 != null) {
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
      obj2 = { page: PromotionsStore, section: onPaymentDismiss.FOOTER, object: constants.BUTTON_CTA, objectType: TIER_2.TIER_2 };
      const tmp = openPremiumPlanSelectionActionSheetDefault(obj);
    };
  }
}
