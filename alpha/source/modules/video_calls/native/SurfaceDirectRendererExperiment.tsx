// Module ID: 5883
// Function ID: 5884
// Name: SurfaceDirectRendererExperiment
// Dependencies: [502, 1448, 504, 2]
// Exports: isSurfaceDirectRendererExperimentEnabled, useSurfaceDirectRendererExperiment

// Module 5883 (SurfaceDirectRendererExperiment)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
let obj = { kind: "user", name: "2026-03-surface-direct-renderer", defaultConfig: { enableSurfaceDirectRenderer: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enableSurfaceDirectRenderer: true };
let closure_3 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/video_calls/native/SurfaceDirectRendererExperiment.tsx");

export const ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT = "2026-03-surface-direct-renderer";
export function isSurfaceDirectRendererExperimentEnabled() {
  return closure_3.getConfig({ location: "RTCConnection_media_engine_connect" }).enableSurfaceDirectRenderer;
}
export function useSurfaceDirectRendererExperiment(userId, location) {
  _require = userId;
  const enableSurfaceDirectRenderer = closure_3.useConfig(location).enableSurfaceDirectRenderer;
  const items = [AuthenticationStore];
  const items1 = [userId];
  const obj = require("get initialized");
  const tmp = null != userId && !obj.useStateFromStores(items, () => userId === AuthenticationStore.getId(), items1) && enableSurfaceDirectRenderer;
  return tmp;
}
