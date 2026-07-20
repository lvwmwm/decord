// Module ID: 10558
// Function ID: 82470
// Name: ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT
// Dependencies: []
// Exports: isSurfaceDirectRendererExperimentEnabled, useSurfaceDirectRendererExperiment

// Module 10558 (ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[1]);
obj = { "Null": "r", "Null": "AGE_GATED_SPACES", defaultConfig: { enableSurfaceDirectRenderer: false }, variations: { [1]: { enableSurfaceDirectRenderer: true } } };
let closure_3 = obj.createApexExperiment(obj);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/video_calls/native/SurfaceDirectRendererExperiment.tsx");

export const ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT = "2026-03-surface-direct-renderer";
export const isSurfaceDirectRendererExperimentEnabled = function isSurfaceDirectRendererExperimentEnabled() {
  return closure_3.getConfig({ location: "RTCConnection_media_engine_connect" }).enableSurfaceDirectRenderer;
};
export const useSurfaceDirectRendererExperiment = function useSurfaceDirectRendererExperiment(userId, location) {
  location = userId;
  const items = [closure_2];
  const items1 = [userId];
  const obj = location(dependencyMap[2]);
  return null != userId && !location(dependencyMap[2]).useStateFromStores(items, () => arg0 === id.getId(), items1) && closure_3.useConfig(location).enableSurfaceDirectRenderer;
};
