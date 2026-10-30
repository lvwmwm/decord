// Module ID: 10863
// Function ID: 10864
// Name: conjurePreviewSurface
// Dependencies: [6840, 6841, 5670, 10864, 2]
// Exports: getConjureBuilderPreviewFrame, getConjureBuilderPreviewFrames, getConjureBuilderPreviewOverlayFrame, getConjurePreviewGuildId, getConjurePreviewSurface, isConjurePreviewOverlayFrame, isConjurePreviewSurface

// Module 10863 (conjurePreviewSurface)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5670 */;
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 10864 */;
import FramesStore from "FramesStore" /* 6840 */;
import FramesConstants from "FramesConstants" /* 6841 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
const f98049 = (item) => null != item;
({ getFrameHostWindowKey: c3, isLaunched: closure_4, makeFrameId: hasOwnProperty, OVERLAY_SURFACE: metroRequire } = FramesConstants);
let c7 = "0";
const CONJURE_PREVIEW_SURFACE = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: "0" };
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewSurface.tsx");

export const CONJURE_UNKNOWN_CHANNEL = "0";
export { CONJURE_PREVIEW_SURFACE };
export function isConjurePreviewSurface(surface) {
  let tmp3 = surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
  if (!tmp3) {
    tmp3 = surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL;
  }
  if (tmp3) {
    tmp3 = surface.channelId === c7;
  }
  return tmp3;
}
export function getConjurePreviewGuildId(project) {
  let install_scope;
  if (project != null) {
    install_scope = project.install_scope;
  }
  let guild_id;
  if ("guild" === install_scope) {
    guild_id = project.guild_id;
  }
  return guild_id;
}
export function getConjurePreviewSurface(conjurePreviewGuildId, frameSurface) {
  let obj3;
  let APP_CHANNEL = frameSurface;
  if (frameSurface === undefined) {
    APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
  }
  const obj = conjurePreviewFrameSurfaces;
  const result = obj.previewFrameLaunchType(APP_CHANNEL);
  if (result === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
    if (null == conjurePreviewGuildId) {
      obj3 = obj;
    }
    return obj3;
  }
  if (null == conjurePreviewGuildId) {
    obj3 = { type: result, channelId };
    const obj2 = { type: result, channelId };
  } else {
    obj3 = { type: result, channelId, guildId: conjurePreviewGuildId };
  }
}
export function getConjureBuilderPreviewFrames(arg0) {
  let closure_0;
  _require = arg0;
  const prop = require("conjurePreviewFrameSurfaces").CONJURE_PREVIEW_LAUNCH_SURFACE_TYPES;
  const mapped = prop.map((item) => {
    let obj2;
    let APP_CHANNEL = item;
    const getFrame = FramesStore.getFrame;
    const tmp2 = hasOwnProperty;
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
  return mapped.filter(f98049);
}
export function getConjureBuilderPreviewFrame(prop) {
  _require = prop;
  prop = require("conjurePreviewFrameSurfaces").CONJURE_PREVIEW_LAUNCH_SURFACE_TYPES;
  const mapped = prop.map((item) => {
    let obj2;
    let APP_CHANNEL = item;
    const getFrame = FramesStore.getFrame;
    const tmp2 = hasOwnProperty;
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
  const found = mapped.filter(f98049);
  let found1 = found.find(closure_4);
  if (found1 == null) {
    found1 = found[0];
  }
  return found1;
}
export function isConjurePreviewOverlayFrame(surface) {
  const tmp = surface.surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY && null == _false(surface);
  return tmp;
}
export function getConjureBuilderPreviewOverlayFrame(arg0) {
  const frame = FramesStore.getFrame(hasOwnProperty(arg0, metroRequire));
  let tmp2;
  if (null != frame) {
    if (null == _false(frame)) {
      tmp2 = frame;
    }
  }
  return tmp2;
}
