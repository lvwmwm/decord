// Module ID: 7289
// Function ID: 7290
// Name: HotspotActionCreators
// Dependencies: [1087, 1267, 584, 2]
// Exports: clearHotspotOverride, hideHotspot, setHotspotOverride

// Module 7289 (HotspotActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/hotspot/HotspotActionCreators.tsx");

export const hideHotspot = function hideHotspot(GUILD_CAP_INLINE_UPSELL) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { hotspot_location: GUILD_CAP_INLINE_UPSELL };
  obj.track(AnalyticEvents.HOTSPOT_HIDDEN, obj2);
  const obj3 = DispatcherDefault;
  const obj4 = { type: "HOTSPOT_HIDE", location: GUILD_CAP_INLINE_UPSELL };
  obj3.dispatch(obj4);
};
export const setHotspotOverride = function setHotspotOverride(location, enabled) {
  const obj = DispatcherDefault;
  const obj2 = { type: "HOTSPOT_OVERRIDE_SET", location, enabled };
  obj.dispatch(obj2);
};
export const clearHotspotOverride = function clearHotspotOverride(location) {
  const obj = DispatcherDefault;
  const obj2 = { type: "HOTSPOT_OVERRIDE_CLEAR", location };
  obj.dispatch(obj2);
};
