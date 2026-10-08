// Module ID: 12368
// Function ID: 12369
// Name: conjurePreviewSurface
// Dependencies: [10612, 10613, 8586, 12369, 2]
// Exports: getConjureBuilderPreviewFrame, getConjureBuilderPreviewFrames, getConjurePreviewGuildId, getConjurePreviewSurface, isConjurePreviewSurface

// Module 12368 (conjurePreviewSurface)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8586 */;
import FramesStore from "FramesStore" /* 10612 */;
import FramesConstants from "FramesConstants" /* 10613 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
const f111612 = (item) => null != item;
({ isLaunched: c3, makeFrameId: closure_4 } = FramesConstants);
let c5 = "0";
const CONJURE_PREVIEW_SURFACE = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: "0" };
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewSurface.tsx");

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
  let obj;
  let APP_CHANNEL = frameSurface;
  if (frameSurface === undefined) {
    APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
  }
  if (APP_CHANNEL === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
    return obj;
  }
  if (null == stateFromStores) {
    obj = { type: APP_CHANNEL, channelId };
    const obj2 = { type: APP_CHANNEL, channelId };
  } else {
    obj = { type: APP_CHANNEL, channelId, guildId: stateFromStores };
  }
};
export const getConjureBuilderPreviewFrames = function getConjureBuilderPreviewFrames(arg0) {
  let closure_0;
  _require = arg0;
  const prop = require("conjurePreviewFrameSurfaces").CONJURE_PREVIEW_FRAME_SURFACE_TYPES;
  const mapped = prop.map((item) => {
    let obj;
    let APP_CHANNEL = item;
    const getFrame = FramesStore.getFrame;
    const tmp2 = React3;
    const tmp3 = prop;
    if (item === undefined) {
      APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
    }
    if (APP_CHANNEL !== EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
      obj = { type: APP_CHANNEL, channelId };
    }
    return getFrame(tmp2(tmp3, obj));
  });
  return mapped.filter(f111612);
};
export const getConjureBuilderPreviewFrame = function getConjureBuilderPreviewFrame(prop) {
  _require = prop;
  prop = require("conjurePreviewFrameSurfaces").CONJURE_PREVIEW_FRAME_SURFACE_TYPES;
  const mapped = prop.map((item) => {
    let obj;
    let APP_CHANNEL = item;
    const getFrame = FramesStore.getFrame;
    const tmp2 = React3;
    const tmp3 = prop;
    if (item === undefined) {
      APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
    }
    if (APP_CHANNEL !== EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
      obj = { type: APP_CHANNEL, channelId };
    }
    return getFrame(tmp2(tmp3, obj));
  });
  const found = mapped.filter(f111612);
  let found1 = found.find(closure_3);
  if (found1 == null) {
    found1 = found[0];
  }
  return found1;
};
