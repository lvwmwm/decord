// Module ID: 17084
// Function ID: 17085
// Name: conjurePreviewTargets
// Dependencies: [17080, 1126, 3849, 2]
// Exports: activePreviewTarget, getPreviewTargetLabel, previewTargetKey, previewTargets, selectPreviewTarget

// Module 17084 (conjurePreviewTargets)
import intl4 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ConjurePreviewMode from "ConjurePreviewMode" /* 17080 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewTargets.tsx");

export const previewTargets = function previewTargets(modes, frameSurfaceOptions) {
  return modes.flatMap((mode) => {
    let mapped;
    frameSurfaceOptions = mode;
    if ("frame" === mode) {
      mapped = frameSurfaceOptions.map((surface) => ({ mode, surface }));
    } else {
      mapped = [{ mode }];
      const obj = { mode };
    }
    return mapped;
  });
};
export const previewTargetKey = function previewTargetKey(target) {
  let mode;
  if ("frame" === target.mode) {
    const _HermesInternal = HermesInternal;
    mode = "frame-" + target.surface;
  } else {
    mode = target.mode;
  }
  return mode;
};
export const activePreviewTarget = function activePreviewTarget(activeMode, frameSurface) {
  let tmp = null;
  if (null != activeMode) {
    let obj;
    if ("frame" === activeMode) {
      obj = { mode: activeMode, surface: frameSurface };
      const obj2 = { mode: activeMode, surface: frameSurface };
    } else {
      obj = { mode: activeMode };
    }
    tmp = obj;
  }
  return tmp;
};
export const getPreviewTargetLabel = function getPreviewTargetLabel(mode) {
  mode = mode.mode;
  if ("frame" === mode) {
    const obj = ConjurePreviewMode;
    return obj.getPreviewFrameSurfaceLabel(mode.surface);
  } else if ("widget" === mode) {
    const intl3 = intl4.intl;
    return intl3.string(_modDef3849.y5GiL1);
  } else if ("overlay" === mode) {
    const intl2 = intl4.intl;
    return intl2.string(_modDef3849["2940LX"]);
  } else if ("bot" === mode) {
    const intl = intl4.intl;
    return intl.string(_modDef3849.tjpaGN);
  }
};
export const selectPreviewTarget = function selectPreviewTarget(mode, fn, fn2) {
  if ("frame" === mode.mode) {
    fn2(mode.surface);
  }
  fn(mode.mode);
};
