// Module ID: 16905
// Function ID: 16906
// Name: VirtualCurrencyAnalyticsUtil
// Dependencies: [1072, 1252, 2]
// Exports: trackOrbsClick

// Module 16905 (VirtualCurrencyAnalyticsUtil)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
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
