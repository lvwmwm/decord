// Module ID: 11794
// Function ID: 11795
// Name: conjurePreviewTargets
// Dependencies: [5608, 11777, 1128, 3830, 2]
// Exports: activePreviewTarget, getPreviewTargetLabel, previewTargetKey, previewTargets, selectPreviewTarget

// Module 11794 (conjurePreviewTargets)
import intl5 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ConjurePreviewMode from "ConjurePreviewMode" /* 11777 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewTargets.tsx");

export const previewTargets = function previewTargets(modes, frameSurfaceOptions, stateFromStores4) {
  let items = stateFromStores4;
  if (stateFromStores4 === undefined) {
    items = [];
  }
  return modes.flatMap((mode) => {
    let flatMapResult;
    let length;
    frameSurfaceOptions = mode;
    if ("frame" === mode) {
      flatMapResult = frameSurfaceOptions.flatMap((surface) => {
        mode = surface;
        if (surface === mode(dependencyMap[0]).EmbeddedSurfaceType.APP_CHANNEL) {
          let mapped;
          const arr = length;
          if (length.length > 1) {
            mapped = arr.map((appChannel) => ({ mode: surface, surface, appChannel }));
          }
          return mapped;
        }
        mapped = [{ mode, surface }];
        const obj = { mode, surface };
      });
    } else {
      let obj = { mode };
      flatMapResult = [obj];
    }
    return flatMapResult;
  });
};
export const previewTargetKey = function previewTargetKey(target) {
  let mode;
  if ("frame" !== target.mode) {
    mode = target.mode;
  } else if (null == target.appChannel) {
    const _HermesInternal2 = HermesInternal;
    mode = "frame-" + target.surface;
  } else {
    const _HermesInternal = HermesInternal;
    mode = "frame-" + target.surface + "-" + target.appChannel;
  }
  return mode;
};
export const activePreviewTarget = function activePreviewTarget(activeMode, frameSurface, appChannel) {
  let tmp = appChannel;
  if (appChannel === undefined) {
    tmp = null;
  }
  let tmp2 = null;
  if (null != activeMode) {
    let obj;
    if ("frame" !== activeMode) {
      obj = { mode: activeMode };
      const obj2 = { mode: activeMode };
    } else if (null == tmp) {
      obj = { mode: activeMode, surface: frameSurface };
      const obj3 = { mode: activeMode, surface: frameSurface };
    } else {
      obj = { mode: activeMode, surface: frameSurface, appChannel: tmp };
    }
    tmp2 = obj;
  }
  return tmp2;
};
export const getPreviewTargetLabel = function getPreviewTargetLabel(mode) {
  let obj2;
  mode = mode.mode;
  if ("frame" === mode) {
    let previewFrameSurfaceLabel;
    if (null == mode.appChannel) {
      const obj3 = ConjurePreviewMode;
      previewFrameSurfaceLabel = obj3.getPreviewFrameSurfaceLabel(mode.surface);
    } else {
      const intl4 = intl5.intl;
      const formatToPlainString = intl4.formatToPlainString;
      const obj = { surface: obj2.getPreviewFrameSurfaceLabel(mode.surface), channel: mode.appChannel };
      const prop = _modDef3830["6xVl+N"];
      obj2 = ConjurePreviewMode;
      previewFrameSurfaceLabel = formatToPlainString(prop, obj);
    }
    return previewFrameSurfaceLabel;
  } else if ("widget" === mode) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef3830.y5GiL1);
  } else if ("overlay" === mode) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef3830["2940LX"]);
  } else if ("bot" === mode) {
    const intl = intl5.intl;
    return intl.string(_modDef3830.tjpaGN);
  }
};
export const selectPreviewTarget = function selectPreviewTarget(mode, fn, fn2, fn3) {
  if ("frame" === mode.mode) {
    fn2(mode.surface);
    if (null != mode.appChannel) {
      if (fn3 != null) {
        fn3(mode.appChannel);
      }
    }
  }
  fn(mode.mode);
};
