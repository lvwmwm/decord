// Module ID: 11416
// Function ID: 11417
// Name: conjurePreviewFrameSurfaces
// Dependencies: [8610, 6946, 2]
// Exports: declaresPreviewFrame, isConjurePreviewFrameSurfaceType, previewFrameLaunchType, previewFrameSurfaceOptions, resolvePreviewFrameSurface

// Module 11416 (conjurePreviewFrameSurfaces)
import ConjureTypes from "ConjureTypes" /* 6946 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8610 */;
import size from "module_2" /* 2 */;

let obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, declaredBy: ConjureTypes.ConjureSupportedSurface.APP_CHANNEL };
const items = [obj, { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, declaredBy: ConjureTypes.ConjureSupportedSurface.VOICE_CHANNEL }, ];
({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, declaredBy: ConjureTypes.ConjureSupportedSurface.VOICE_CHANNEL });
items[2] = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN, declaredBy: ConjureTypes.ConjureSupportedSurface.ACTIVITY };
({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN, declaredBy: ConjureTypes.ConjureSupportedSurface.ACTIVITY });
let mapped = items.map((type) => type.type);
const items1 = [EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL];
const items2 = [EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL];
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewFrameSurfaces.tsx");

export const CONJURE_PREVIEW_FRAME_SURFACE_TYPES = mapped;
export const CONJURE_PREVIEW_LAUNCH_SURFACE_TYPES = items1;
export const previewFrameLaunchType = function previewFrameLaunchType(APP_CHANNEL) {
  if (APP_CHANNEL === EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN) {
    APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
  }
  return APP_CHANNEL;
};
export const isConjurePreviewFrameSurfaceType = function isConjurePreviewFrameSurfaceType(arg0) {
  return mapped.includes(arg0);
};
export const declaresPreviewFrame = function declaresPreviewFrame(previewSupportedSurfaces) {
  let closure_0 = previewSupportedSurfaces;
  return items.some((declaredBy) => closure_0.includes(declaredBy.declaredBy));
};
export const previewFrameSurfaceOptions = function previewFrameSurfaceOptions(previewSupportedSurfaces) {
  let closure_0 = previewSupportedSurfaces;
  const found = items.filter((item) => {
    let hasItem;
    const obj = closure_0;
    if (closure_0 != null) {
      hasItem = obj.includes(tmp);
    }
    return true === hasItem;
  });
  mapped = found.map((type) => type.type);
  if (mapped.length <= 0) {
    mapped = items2;
  }
  return mapped;
};
export const resolvePreviewFrameSurface = function resolvePreviewFrameSurface(arg0, cResult) {
  let tmp = arg0;
  if (null == arg0) {
    let APP_CHANNEL = cResult[0];
    if (APP_CHANNEL == null) {
      APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
    }
    tmp = APP_CHANNEL;
  }
  return tmp;
};
