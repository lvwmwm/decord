// Module ID: 11718
// Function ID: 11719
// Name: useGroupDMNitroUpsellAction
// Dependencies: [19, 1078, 558, 568, 11711, 1245, 7626, 11717, 2]

// Module 11718 (useGroupDMNitroUpsellAction)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11711 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1078);
({ AnalyticEvents: closure_4, UserSettingsSections: hasOwnProperty } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/group_dm/native/useGroupDMNitroUpsellAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((audience) => {
  const cResult = audience(acquisitionStrategy[3]).c(5);
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
        if (cResult[3] === onCheckout) {
          let tmp3 = cResult[4];
        }
        return tmp3;
      }
    }
  }
  const fn = function o() {
    const groupDMNitroUpsellRoute = GroupDMNitroUpsellModel.getGroupDMNitroUpsellRoute(audience, acquisitionStrategy);
    if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MANAGE === groupDMNitroUpsellRoute) {
      const obj3 = { location: _location };
      AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj3);
      const obj4 = { screen: constants2.PREMIUM_MANAGE_PLAN };
      tmp(7626).openUserSettings(obj4);
    } else if (tmp(11711).GroupDMNitroUpsellRoute.MARKETING === groupDMNitroUpsellRoute) {
      const obj6 = { location: _location };
      AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj6);
      const result = tmp(11717).navigateToPremiumHomePage();
    } else if (tmp(11711).GroupDMNitroUpsellRoute.CHECKOUT === groupDMNitroUpsellRoute) {
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
}) : ((audience) => {
  audience = audience.audience;
  const _location = audience.location;
  const acquisitionStrategy = audience.acquisitionStrategy;
  let onCheckout;
  if (acquisitionStrategy === audience(acquisitionStrategy[4]).GroupDMNitroAcquisitionStrategy.CHECKOUT) {
    onCheckout = audience.onCheckout;
  }
  const items = [acquisitionStrategy, audience, _location, onCheckout];
  return onCheckout.useCallback(() => {
    const groupDMNitroUpsellRoute = GroupDMNitroUpsellModel.getGroupDMNitroUpsellRoute(audience, acquisitionStrategy);
    if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MANAGE === groupDMNitroUpsellRoute) {
      const obj3 = { location: _location };
      AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj3);
      const obj4 = { screen: constants2.PREMIUM_MANAGE_PLAN };
      tmp(7626).openUserSettings(obj4);
    } else if (tmp(11711).GroupDMNitroUpsellRoute.MARKETING === groupDMNitroUpsellRoute) {
      const obj6 = { location: _location };
      AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj6);
      const result = tmp(11717).navigateToPremiumHomePage();
    } else if (tmp(11711).GroupDMNitroUpsellRoute.CHECKOUT === groupDMNitroUpsellRoute) {
      if (onCheckout != null) {
        onCheckout();
      }
    }
  }, items);
});
