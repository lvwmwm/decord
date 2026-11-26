// Module ID: 16312
// Function ID: 16313
// Name: VirtualCurrencyAnalyticsUtil
// Dependencies: [1071, 1255, 2]
// Exports: trackOrbsClick

// Module 16312 (VirtualCurrencyAnalyticsUtil)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/virtual_currency/VirtualCurrencyAnalyticsUtil.tsx");

export function trackOrbsClick(arg0) {
  let ctaObject;
  let pageType;
  let sectionType;
  ({ pageType, sectionType, ctaObject } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.ORBS_ENTRYPOINT_CLICKED, { location_page: pageType, location_section: sectionType, location_object: ctaObject });
}
