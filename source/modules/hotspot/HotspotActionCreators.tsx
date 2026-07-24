// Module ID: 5599
// Function ID: 47586
// Name: hideHotspot
// Dependencies: [653, 675, 686, 2]
// Exports: clearHotspotOverride, hideHotspot, setHotspotOverride

// Module 5599 (hideHotspot)
import { AnalyticEvents } from "ME";

const result = require("dispatcher").fileFinishedImporting("modules/hotspot/HotspotActionCreators.tsx");

export const hideHotspot = function hideHotspot(GUILD_CAP_INLINE_UPSELL) {
  const importDefault = GUILD_CAP_INLINE_UPSELL;
  let obj = importDefault(675);
  obj = { hotspot_location: GUILD_CAP_INLINE_UPSELL };
  obj.track(AnalyticEvents.HOTSPOT_HIDDEN, obj);
  importDefault(686).wait(() => {
    let obj = GUILD_CAP_INLINE_UPSELL(outer1_1[2]);
    obj = { type: "HOTSPOT_HIDE", location: GUILD_CAP_INLINE_UPSELL };
    obj.dispatch(obj);
  });
};
export const setHotspotOverride = function setHotspotOverride(location, enabled) {
  let obj = importDefault(686);
  obj = { type: "HOTSPOT_OVERRIDE_SET", location, enabled };
  obj.dispatch(obj);
};
export const clearHotspotOverride = function clearHotspotOverride(location) {
  let obj = importDefault(686);
  obj = { type: "HOTSPOT_OVERRIDE_CLEAR", location };
  obj.dispatch(obj);
};
