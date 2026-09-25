// Module ID: 11079
// Function ID: 11080
// Name: useGroupDMNitroUpsellAction
// Dependencies: [19, 1074, 11072, 1241, 6795, 11078, 2]
// Exports: default

// Module 11079 (useGroupDMNitroUpsellAction)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11072 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_4, UserSettingsSections: hasOwnProperty } = Constants);
const size = fn(2);
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
    const groupDMNitroUpsellRoute = GroupDMNitroUpsellModel.getGroupDMNitroUpsellRoute(audience, acquisitionStrategy);
    if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MANAGE === groupDMNitroUpsellRoute) {
      const obj3 = { location: _location };
      AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj3);
      const obj4 = { screen: constants2.PREMIUM_MANAGE_PLAN };
      tmp(6795).openUserSettings(obj4);
    } else if (tmp(11072).GroupDMNitroUpsellRoute.MARKETING === groupDMNitroUpsellRoute) {
      const obj6 = { location: _location };
      AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj6);
      const result = tmp(11078).navigateToPremiumHomePage();
    } else if (tmp(11072).GroupDMNitroUpsellRoute.CHECKOUT === groupDMNitroUpsellRoute) {
      if (onCheckout != null) {
        onCheckout();
      }
    }
  }, items);
};
