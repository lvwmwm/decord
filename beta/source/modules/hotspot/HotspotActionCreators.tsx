// Module ID: 7495
// Function ID: 7496
// Name: HotspotActionCreators
// Dependencies: [1078, 1245, 577, 2]
// Exports: clearHotspotOverride, hideHotspot, setHotspotOverride

// Module 7495 (HotspotActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import Constants from "Constants" /* 1078 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/hotspot/HotspotActionCreators.tsx");

export const hideHotspot = function hideHotspot(GUILD_CAP_INLINE_UPSELL) {
  importDefault = GUILD_CAP_INLINE_UPSELL;
  AnalyticsUtilsDefault.track(AnalyticEvents.HOTSPOT_HIDDEN, { hotspot_location: GUILD_CAP_INLINE_UPSELL });
  const obj2 = { hotspot_location: GUILD_CAP_INLINE_UPSELL };
  DispatcherDefault.wait(() => {
    DispatcherDefault.dispatch({ type: "HOTSPOT_HIDE", location: _location });
  });
};
export const setHotspotOverride = function setHotspotOverride(location, enabled) {
  DispatcherDefault.dispatch({ type: "HOTSPOT_OVERRIDE_SET", location, enabled });
};
export const clearHotspotOverride = function clearHotspotOverride(location) {
  DispatcherDefault.dispatch({ type: "HOTSPOT_OVERRIDE_CLEAR", location });
};
