// Module ID: 18258
// Function ID: 18259
// Name: conjurePreviewTargets
// Dependencies: [5557, 12300, 1112, 4190, 18259, 2]
// Exports: activePreviewTarget, getPreviewTabLabel, previewTargetKey, previewTargets, selectPreviewTarget

// Module 18258 (conjurePreviewTargets)
import intl5 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5557 */;
import ConjurePreviewMode from "ConjurePreviewMode" /* 12300 */;
import slugConjureChannelNameDefault from "slugConjureChannelName" /* 18259 */;
import size from "module_2" /* 2 */;

function getPreviewTargetLabel(mode) {
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
      const prop = _modDef4190["6xVl+N"];
      obj2 = ConjurePreviewMode;
      previewFrameSurfaceLabel = formatToPlainString(prop, obj);
    }
    return previewFrameSurfaceLabel;
  } else if ("widget" === mode) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef4190.y5GiL1);
  } else if ("overlay" === mode) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef4190["2940LX"]);
  } else if ("bot" === mode) {
    const intl = intl5.intl;
    return intl.string(_modDef4190.tjpaGN);
  }
}
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewTargets.tsx");

export function previewTargets(modes, frameSurfaceOptions, stateFromStores3) {
  let items = stateFromStores3;
  if (stateFromStores3 === undefined) {
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
}
export function previewTargetKey(target) {
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
}
export function activePreviewTarget(activeMode, frameSurface, appChannel) {
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
}
export { getPreviewTargetLabel };
export function getPreviewTabLabel(mode, arg1) {
  if ("bot" === mode.mode) {
    const intl = intl5.intl;
    return intl.string(_modDef4190.gThNz6);
  } else {
    if ("frame" === mode.mode) {
      if (mode.surface === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
        let appChannel = mode.appChannel;
        if (appChannel == null) {
          appChannel = slugConjureChannelNameDefault(arg1);
        }
        if ("" !== appChannel) {
          const _HermesInternal = HermesInternal;
          return "#" + appChannel;
        }
      }
    }
    return getPreviewTargetLabel(mode);
  }
}
export function selectPreviewTarget(mode, fn, fn2, fn3) {
  if ("frame" === mode.mode) {
    fn2(mode.surface);
    if (null != mode.appChannel) {
      if (fn3 != null) {
        fn3(mode.appChannel);
      }
    }
  }
  fn(mode.mode);
}
