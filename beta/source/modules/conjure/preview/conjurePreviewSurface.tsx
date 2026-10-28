// Module ID: 10760
// Function ID: 10761
// Name: conjurePreviewSurface
// Dependencies: [6807, 6805, 6808, 5658, 10761, 2]
// Exports: getConjureBuilderPreviewFrame, getConjureBuilderPreviewFrames, getConjureBuilderPreviewOverlayFrame, getConjurePreviewGuildId, getConjurePreviewSurface, isConjurePreviewOverlayFrame, isConjurePreviewSurface

// Module 10760 (conjurePreviewSurface)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5658 */;
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 10761 */;
import FramesStore from "FramesStore" /* 6807 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6805 */;
import FramesConstants from "FramesConstants" /* 6808 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const f108104 = (item) => null != item;
({ getFrameHostWindowKey: closure_4, isLaunched: hasOwnProperty, makeFrameId: metroRequire, OVERLAY_SURFACE: metroImportDefault } = FramesConstants);
let c8 = "0";
const CONJURE_PREVIEW_SURFACE = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: "0" };
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewSurface.tsx");

export const CONJURE_UNKNOWN_CHANNEL = "0";
export { CONJURE_PREVIEW_SURFACE };
export const isConjurePreviewSurface = function isConjurePreviewSurface(surface) {
  let tmp3 = surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
  if (!tmp3) {
    tmp3 = surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL;
  }
  if (tmp3) {
    tmp3 = surface.channelId === c8;
  }
  return tmp3;
};
export const getConjurePreviewGuildId = function getConjurePreviewGuildId(project) {
  let install_scope;
  if (project != null) {
    install_scope = project.install_scope;
  }
  let guild_id;
  if ("guild" === install_scope) {
    guild_id = project.guild_id;
  }
  return guild_id;
};
export const getConjurePreviewSurface = function getConjurePreviewSurface(stateFromStores, frameSurface) {
  let obj3;
  let APP_CHANNEL = frameSurface;
  if (frameSurface === undefined) {
    APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
  }
  const obj = conjurePreviewFrameSurfaces;
  const result = obj.previewFrameLaunchType(APP_CHANNEL);
  if (result === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
    if (null == stateFromStores) {
      obj3 = obj;
    }
    return obj3;
  }
  if (null == stateFromStores) {
    obj3 = { type: result, channelId };
    const obj2 = { type: result, channelId };
  } else {
    obj3 = { type: result, channelId, guildId: stateFromStores };
  }
};
export const getConjureBuilderPreviewFrames = function getConjureBuilderPreviewFrames(arg0) {
  let closure_0;
  _require = arg0;
  const prop = require("conjurePreviewFrameSurfaces").CONJURE_PREVIEW_LAUNCH_SURFACE_TYPES;
  const mapped = prop.map((item) => {
    let obj2;
    let APP_CHANNEL = item;
    const getFrame = FramesStore.getFrame;
    const tmp2 = metroRequire;
    const tmp3 = prop;
    if (item === undefined) {
      APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
    }
    const obj = conjurePreviewFrameSurfaces;
    const result = obj.previewFrameLaunchType(APP_CHANNEL);
    if (result === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
      obj2 = obj;
    } else {
      obj2 = { type: result, channelId };
    }
    return getFrame(tmp2(tmp3, obj2));
  });
  return mapped.filter(f108104);
};
export const getConjureBuilderPreviewFrame = function getConjureBuilderPreviewFrame(prop) {
  _require = prop;
  prop = require("conjurePreviewFrameSurfaces").CONJURE_PREVIEW_LAUNCH_SURFACE_TYPES;
  const mapped = prop.map((item) => {
    let obj2;
    let APP_CHANNEL = item;
    const getFrame = FramesStore.getFrame;
    const tmp2 = metroRequire;
    const tmp3 = prop;
    if (item === undefined) {
      APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
    }
    const obj = conjurePreviewFrameSurfaces;
    const result = obj.previewFrameLaunchType(APP_CHANNEL);
    if (result === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
      obj2 = obj;
    } else {
      obj2 = { type: result, channelId };
    }
    return getFrame(tmp2(tmp3, obj2));
  });
  const found = mapped.filter(f108104);
  let found1 = found.find(closure_5);
  if (found1 == null) {
    found1 = found[0];
  }
  return found1;
};
export const isConjurePreviewOverlayFrame = function isConjurePreviewOverlayFrame(surface) {
  let tmp = surface.surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY && null == React3(surface);
  if (tmp) {
    const result = ConjureProjectStore.findProjectByApplicationId(surface.applicationId);
    let prop;
    if (result != null) {
      prop = result.preview_application_id;
    }
    tmp = prop === surface.applicationId;
  }
  return tmp;
};
export const getConjureBuilderPreviewOverlayFrame = function getConjureBuilderPreviewOverlayFrame(arg0) {
  const frame = FramesStore.getFrame(metroRequire(arg0, metroImportDefault));
  let tmp2;
  if (null != frame) {
    if (null == React3(frame)) {
      tmp2 = frame;
    }
  }
  return tmp2;
};
