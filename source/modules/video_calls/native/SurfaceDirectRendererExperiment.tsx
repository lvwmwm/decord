// Module ID: 10575
// Function ID: 82567
// Name: ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT
// Dependencies: [1194, 1428, 566, 2]
// Exports: isSurfaceDirectRendererExperimentEnabled, useSurfaceDirectRendererExperiment

// Module 10575 (ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ApexExperiment from "ApexExperiment";

const require = arg1;
ApexExperiment = { kind: "user", name: "2026-03-surface-direct-renderer", defaultConfig: { enableSurfaceDirectRenderer: false }, variations: { [1]: { enableSurfaceDirectRenderer: true } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const result = require("initialize").fileFinishedImporting("modules/video_calls/native/SurfaceDirectRendererExperiment.tsx");

export const ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT = "2026-03-surface-direct-renderer";
export const isSurfaceDirectRendererExperimentEnabled = function isSurfaceDirectRendererExperimentEnabled() {
  return ApexExperiment.getConfig({ location: "RTCConnection_media_engine_connect" }).enableSurfaceDirectRenderer;
};
export const useSurfaceDirectRendererExperiment = function useSurfaceDirectRendererExperiment(userId, location) {
  const _require = userId;
  const items = [_isNativeReflectConstruct];
  const items1 = [userId];
  const obj = _require(566);
  return null != userId && !_require(566).useStateFromStores(items, () => closure_0 === outer1_2.getId(), items1) && ApexExperiment.useConfig(location).enableSurfaceDirectRenderer;
};
