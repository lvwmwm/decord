// Module ID: 7372
// Function ID: 7373
// Name: HotspotActionCreators
// Dependencies: [1084, 1264, 584, 2]
// Exports: clearHotspotOverride, hideHotspot, setHotspotOverride

// Module 7372 (HotspotActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/hotspot/HotspotActionCreators.tsx");

export function hideHotspot(GUILD_CAP_INLINE_UPSELL) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { hotspot_location: GUILD_CAP_INLINE_UPSELL };
  obj.track(AnalyticEvents.HOTSPOT_HIDDEN, obj2);
  const obj3 = DispatcherDefault;
  const obj4 = { type: "HOTSPOT_HIDE", location: GUILD_CAP_INLINE_UPSELL };
  obj3.dispatch(obj4);
}
export function setHotspotOverride(location, enabled) {
  const obj = DispatcherDefault;
  const obj2 = { type: "HOTSPOT_OVERRIDE_SET", location, enabled };
  obj.dispatch(obj2);
}
export function clearHotspotOverride(location) {
  const obj = DispatcherDefault;
  const obj2 = { type: "HOTSPOT_OVERRIDE_CLEAR", location };
  obj.dispatch(obj2);
}
