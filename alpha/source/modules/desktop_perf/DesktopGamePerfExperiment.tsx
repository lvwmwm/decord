// Module ID: 5866
// Function ID: 5867
// Name: DesktopGamePerfExperiment
// Dependencies: [1453, 1381, 2]
// Exports: getDesktopGamePerfExperimentConfig, getIsFullscreenPopupOcclusionEnabled, getIsNativeSystemCpuTimesEnabled, getIsNotificationIconCpuCanvasEnabled, getIsOverlayHiddenWavePausedEnabled, getIsOverlayOnlyAnimatesItselfEnabled, getIsRenderOverlayWhileMinimizedEnabled

// Module 5866 (DesktopGamePerfExperiment)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-desktop-game-perf", kind: "user", defaultConfig: { nativeSystemCpuTimes: false, overlayOnlyAnimatesItself: false, fullscreenPopupOcclusion: false, overlayHiddenWavePaused: false, renderOverlayWhileMinimized: false, notificationIconCpuCanvas: false }, variations: { 0: { nativeSystemCpuTimes: false, overlayOnlyAnimatesItself: false, fullscreenPopupOcclusion: false, overlayHiddenWavePaused: false, renderOverlayWhileMinimized: false, notificationIconCpuCanvas: false }, 1: { nativeSystemCpuTimes: true, overlayOnlyAnimatesItself: true, fullscreenPopupOcclusion: true, overlayHiddenWavePaused: true, renderOverlayWhileMinimized: true, notificationIconCpuCanvas: true } } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/desktop_perf/DesktopGamePerfExperiment.tsx");

export function getDesktopGamePerfExperimentConfig(location) {
  const obj = { location };
  return closure_2.getConfig(obj);
}
export function getIsFullscreenPopupOcclusionEnabled(window_visibility_video_manager) {
  const obj = PlatformUtils;
  let fullscreenPopupOcclusion = obj.isDesktop();
  if (fullscreenPopupOcclusion) {
    const tmpResult = PlatformUtils;
    fullscreenPopupOcclusion = tmpResult.isWindows();
  }
  if (fullscreenPopupOcclusion) {
    const obj2 = { location: window_visibility_video_manager };
    fullscreenPopupOcclusion = closure_2.getConfig(obj2).fullscreenPopupOcclusion;
  }
  return fullscreenPopupOcclusion;
}
export function getIsNativeSystemCpuTimesEnabled() {
  const obj = PlatformUtils;
  let nativeSystemCpuTimes = obj.isDesktop();
  if (nativeSystemCpuTimes) {
    const tmpResult = PlatformUtils;
    nativeSystemCpuTimes = tmpResult.isWindows();
  }
  if (nativeSystemCpuTimes) {
    nativeSystemCpuTimes = closure_2.getConfig({ location: "system_metrics_sample" }).nativeSystemCpuTimes;
  }
  return nativeSystemCpuTimes;
}
export function getIsOverlayOnlyAnimatesItselfEnabled() {
  const obj = PlatformUtils;
  let overlayOnlyAnimatesItself = obj.isDesktop();
  if (overlayOnlyAnimatesItself) {
    const tmpResult = PlatformUtils;
    overlayOnlyAnimatesItself = tmpResult.isWindows();
  }
  if (overlayOnlyAnimatesItself) {
    overlayOnlyAnimatesItself = closure_2.getConfig({ location: "avatar_speaking_styles" }).overlayOnlyAnimatesItself;
  }
  return overlayOnlyAnimatesItself;
}
export function getIsOverlayHiddenWavePausedEnabled() {
  const obj = PlatformUtils;
  const overlayHiddenWavePaused = obj.isDesktop() && closure_2.getConfig({ location: "overlay_voice_user" }).overlayHiddenWavePaused;
  return overlayHiddenWavePaused;
}
export function getIsRenderOverlayWhileMinimizedEnabled(location) {
  const obj = PlatformUtils;
  let renderOverlayWhileMinimized = obj.isDesktop();
  if (renderOverlayWhileMinimized) {
    const tmpResult = PlatformUtils;
    renderOverlayWhileMinimized = tmpResult.isWindows();
  }
  if (renderOverlayWhileMinimized) {
    const obj2 = { location };
    renderOverlayWhileMinimized = closure_2.getConfig(obj2).renderOverlayWhileMinimized;
  }
  return renderOverlayWhileMinimized;
}
export function getIsNotificationIconCpuCanvasEnabled() {
  const obj = PlatformUtils;
  const notificationIconCpuCanvas = obj.isDesktop() && closure_2.getConfig({ location: "icon_cropping_utils" }).notificationIconCpuCanvas;
  return notificationIconCpuCanvas;
}
