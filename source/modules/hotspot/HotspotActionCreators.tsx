// Module ID: 5599
// Function ID: 47550
// Name: hideHotspot
// Dependencies: []
// Exports: clearHotspotOverride, hideHotspot, setHotspotOverride

// Module 5599 (hideHotspot)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/hotspot/HotspotActionCreators.tsx");

export const hideHotspot = function hideHotspot(GUILD_CAP_INLINE_UPSELL) {
  const importDefault = GUILD_CAP_INLINE_UPSELL;
  let obj = importDefault(dependencyMap[1]);
  obj = { hotspot_location: GUILD_CAP_INLINE_UPSELL };
  obj.track(AnalyticEvents.HOTSPOT_HIDDEN, obj);
  importDefault(dependencyMap[2]).wait(() => {
    let obj = arg0(closure_1[2]);
    obj = { type: "HOTSPOT_HIDE", location: arg0 };
    obj.dispatch(obj);
  });
};
export const setHotspotOverride = function setHotspotOverride(location, enabled) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "HOTSPOT_OVERRIDE_SET", location, enabled };
  obj.dispatch(obj);
};
export const clearHotspotOverride = function clearHotspotOverride(location) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "HOTSPOT_OVERRIDE_CLEAR", location };
  obj.dispatch(obj);
};
