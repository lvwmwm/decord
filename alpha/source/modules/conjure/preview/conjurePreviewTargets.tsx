// Module ID: 18455
// Function ID: 18456
// Name: conjurePreviewTargets
// Dependencies: [5687, 11458, 1112, 4245, 18456, 2]
// Exports: activePreviewTarget, getPreviewTabLabel, previewTargetKey, previewTargets, selectPreviewTarget

// Module 18455 (conjurePreviewTargets)
import intl5 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5687 */;
import ConjurePreviewMode from "ConjurePreviewMode" /* 11458 */;
import slugConjureChannelNameDefault from "slugConjureChannelName" /* 18456 */;
import size from "module_2" /* 2 */;

function getPreviewTargetLabel(mode) {
  let obj2;
  mode = mode.mode;
  if ("frame" === mode) {
    let name;
    if (null != mode.view) {
      name = mode.view.name;
    } else if (null == mode.appChannel) {
      const obj3 = ConjurePreviewMode;
      name = obj3.getPreviewFrameSurfaceLabel(mode.surface);
    } else {
      const intl4 = intl5.intl;
      const formatToPlainString = intl4.formatToPlainString;
      const obj = { surface: obj2.getPreviewFrameSurfaceLabel(mode.surface), channel: mode.appChannel };
      const prop = _modDef4245["6xVl+N"];
      obj2 = ConjurePreviewMode;
      name = formatToPlainString(prop, obj);
    }
    return name;
  } else if ("widget" === mode) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef4245.y5GiL1);
  } else if ("overlay" === mode) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef4245["2940LX"]);
  } else if ("bot" === mode) {
    const intl = intl5.intl;
    return intl.string(_modDef4245.tjpaGN);
  }
}
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewTargets.tsx");

export function previewTargets(modes, frameSurfaceOptions, stateFromStores3, stateFromStores4) {
  let items = stateFromStores3;
  if (stateFromStores3 === undefined) {
    items = [];
  }
  let items1 = stateFromStores4;
  if (stateFromStores4 === undefined) {
    items1 = [];
  }
  return modes.flatMap((mode) => {
    let length;
    let mapped;
    frameSurfaceOptions = mode;
    if ("frame" === mode) {
      let arr = items1;
      if (items1.length > 0) {
        mapped = arr.map((id) => {
          const obj = { mode, surface: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, view: { id: id.id, name: id.name } };
          return obj;
        });
      }
      return mapped;
    }
    if ("frame" === mode) {
      mapped = frameSurfaceOptions.flatMap((surface) => {
        mode = surface;
        if (surface === mode(items1[0]).EmbeddedSurfaceType.APP_CHANNEL) {
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
      mapped = [obj];
    }
  });
}
export function previewTargetKey(target) {
  let mode;
  if ("frame" !== target.mode) {
    mode = target.mode;
  } else if (null != target.view) {
    const _HermesInternal3 = HermesInternal;
    mode = "frame-view-" + target.view.id;
  } else if (null == target.appChannel) {
    const _HermesInternal2 = HermesInternal;
    mode = "frame-" + target.surface;
  } else {
    const _HermesInternal = HermesInternal;
    mode = "frame-" + target.surface + "-" + target.appChannel;
  }
  return mode;
}
export function activePreviewTarget(activeMode, frameSurface, appChannel, view) {
  let tmp = appChannel;
  if (appChannel === undefined) {
    tmp = null;
  }
  let tmp2 = view;
  if (view === undefined) {
    tmp2 = null;
  }
  let tmp3 = null;
  if (null != activeMode) {
    let obj;
    if ("frame" !== activeMode) {
      obj = { mode: activeMode };
      const obj2 = { mode: activeMode };
    } else if (null != tmp2) {
      obj = { mode: activeMode, surface: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, view: tmp2 };
      const obj3 = { mode: activeMode, surface: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, view: tmp2 };
    } else if (null == tmp) {
      obj = { mode: activeMode, surface: frameSurface };
      const obj4 = { mode: activeMode, surface: frameSurface };
    } else {
      obj = { mode: activeMode, surface: frameSurface, appChannel: tmp };
    }
    tmp3 = obj;
  }
  return tmp3;
}
export { getPreviewTargetLabel };
export function getPreviewTabLabel(mode, arg1) {
  if ("bot" === mode.mode) {
    const intl = intl5.intl;
    return intl.string(_modDef4245.gThNz6);
  } else {
    if ("frame" === mode.mode) {
      if (null != mode.view) {
        return mode.view.name;
      }
    }
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
export function selectPreviewTarget(mode, fn, fn2, fn3, fn4) {
  if ("frame" === mode.mode) {
    fn2(mode.surface);
    if (null != mode.appChannel) {
      if (fn3 != null) {
        fn3(mode.appChannel);
      }
    }
    if (null != mode.view) {
      if (fn4 != null) {
        fn4(mode.view.id);
      }
    }
  }
  fn(mode.mode);
}
