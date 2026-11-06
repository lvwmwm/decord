// Module ID: 11802
// Function ID: 11803
// Name: useGroupDMNitroUpsellAction
// Dependencies: [19, 1072, 11795, 1252, 7658, 11801, 2]
// Exports: default

// Module 11802 (useGroupDMNitroUpsellAction)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import openUserSettings from "openUserSettings" /* 7658 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11795 */;
import PremiumMarketingUtil from "PremiumMarketingUtil" /* 11801 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ AnalyticEvents: closure_4, UserSettingsSections: hasOwnProperty } = Constants);
let result = size.fileFinishedImporting("modules/group_dm/native/useGroupDMNitroUpsellAction.tsx");

export default function useGroupDMNitroUpsellAction(audience) {
  audience = audience.audience;
  const _location = audience.location;
  const acquisitionStrategy = audience.acquisitionStrategy;
  let onCheckout;
  if (acquisitionStrategy === audience(acquisitionStrategy[2]).GroupDMNitroAcquisitionStrategy.CHECKOUT) {
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
};
