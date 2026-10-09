// Module ID: 10721
// Function ID: 10722
// Name: useGroupDMNitroUpsellAction
// Dependencies: [19, 1085, 558, 576, 10714, 1265, 7087, 10720, 2]

// Module 10721 (useGroupDMNitroUpsellAction)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import openUserSettings from "openUserSettings" /* 7087 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 10714 */;
import PremiumMarketingUtil from "PremiumMarketingUtil" /* 10720 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ AnalyticEvents: closure_4, UserSettingsSections: hasOwnProperty } = Constants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGroupDMNitroUpsellAction(audience) {
  let acquisitionStrategy;
  let obj = audience(acquisitionStrategy[3]);
  const cResult = obj.c(5);
  audience = audience.audience;
  const _location = audience.location;
  acquisitionStrategy = audience.acquisitionStrategy;
  let onCheckout;
  if (acquisitionStrategy === audience(acquisitionStrategy[4]).GroupDMNitroAcquisitionStrategy.CHECKOUT) {
    onCheckout = audience.onCheckout;
  }
  if (cResult[0] === acquisitionStrategy) {
    if (cResult[1] === audience) {
      if (cResult[2] === _location) {
        let tmp3;
        if (cResult[3] === onCheckout) {
          tmp3 = cResult[4];
        }
        return tmp3;
      }
    }
  }
  const fn = function o() {
    const obj = GroupDMNitroUpsellModel;
    const groupDMNitroUpsellRoute = obj.getGroupDMNitroUpsellRoute(audience, acquisitionStrategy);
    if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MANAGE === groupDMNitroUpsellRoute) {
      const obj3 = { location: _location };
      const obj5 = AnalyticsUtilsDefault;
      obj5.track(constants.PREMIUM_PROMOTION_OPENED, obj3);
      const obj4 = { screen: hasOwnProperty.PREMIUM_MANAGE_PLAN };
      const tmpResult = openUserSettings;
      tmpResult.openUserSettings(obj4);
    } else if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MARKETING === groupDMNitroUpsellRoute) {
      const obj6 = { location: _location };
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(constants.PREMIUM_PROMOTION_OPENED, obj6);
      const tmpResult2 = PremiumMarketingUtil;
      const result = tmpResult2.navigateToPremiumHomePage();
    } else if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.CHECKOUT === groupDMNitroUpsellRoute) {
      if (onCheckout != null) {
        onCheckout();
      }
    }
  };
  cResult[0] = acquisitionStrategy;
  cResult[1] = audience;
  cResult[2] = _location;
  cResult[3] = onCheckout;
  cResult[4] = fn;
  tmp3 = fn;
}) : (function useGroupDMNitroUpsellAction(audience) {
  audience = audience.audience;
  const _location = audience.location;
  const acquisitionStrategy = audience.acquisitionStrategy;
  let onCheckout;
  if (acquisitionStrategy === audience(acquisitionStrategy[4]).GroupDMNitroAcquisitionStrategy.CHECKOUT) {
    onCheckout = audience.onCheckout;
  }
  const items = [acquisitionStrategy, audience, _location, onCheckout];
  return onCheckout.useCallback(() => {
    const obj = GroupDMNitroUpsellModel;
    const groupDMNitroUpsellRoute = obj.getGroupDMNitroUpsellRoute(audience, acquisitionStrategy);
    if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MANAGE === groupDMNitroUpsellRoute) {
      const obj3 = { location: _location };
      const obj5 = AnalyticsUtilsDefault;
      obj5.track(constants.PREMIUM_PROMOTION_OPENED, obj3);
      const obj4 = { screen: hasOwnProperty.PREMIUM_MANAGE_PLAN };
      const tmpResult = openUserSettings;
      tmpResult.openUserSettings(obj4);
    } else if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MARKETING === groupDMNitroUpsellRoute) {
      const obj6 = { location: _location };
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(constants.PREMIUM_PROMOTION_OPENED, obj6);
      const tmpResult2 = PremiumMarketingUtil;
      const result = tmpResult2.navigateToPremiumHomePage();
    } else if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.CHECKOUT === groupDMNitroUpsellRoute) {
      if (onCheckout != null) {
        onCheckout();
      }
    }
  }, items);
});
let result = size.fileFinishedImporting("modules/group_dm/native/useGroupDMNitroUpsellAction.tsx");

export default tmp3;
