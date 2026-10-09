// Module ID: 11373
// Function ID: 11374
// Name: conjurePreviewSurface
// Dependencies: [10772, 10767, 8594, 11374, 2]
// Exports: getConjureBuilderPreviewFrame, getConjureBuilderPreviewFrames, getConjurePreviewGuildId, getConjurePreviewSurface, isConjurePreviewSurface

// Module 11373 (conjurePreviewSurface)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8594 */;
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 11374 */;
import FramesStore from "FramesStore" /* 10772 */;
import FramesConstants from "FramesConstants" /* 10767 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
const f108006 = (item) => null != item;
({ isLaunched: c3, makeFrameId: closure_4 } = FramesConstants);
let c5 = "0";
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
    tmp3 = surface.channelId === c5;
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
    const tmp2 = React3;
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
  return mapped.filter(f108006);
};
export const getConjureBuilderPreviewFrame = function getConjureBuilderPreviewFrame(prop) {
  _require = prop;
  prop = require("conjurePreviewFrameSurfaces").CONJURE_PREVIEW_LAUNCH_SURFACE_TYPES;
  const mapped = prop.map((item) => {
    let obj2;
    let APP_CHANNEL = item;
    const getFrame = FramesStore.getFrame;
    const tmp2 = React3;
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
  const found = mapped.filter(f108006);
  let found1 = found.find(closure_3);
  if (found1 == null) {
    found1 = found[0];
  }
  return found1;
};
