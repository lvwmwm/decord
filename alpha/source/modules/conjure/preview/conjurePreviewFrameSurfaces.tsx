// Module ID: 11022
// Function ID: 11023
// Name: conjurePreviewFrameSurfaces
// Dependencies: [5829, 6925, 2]
// Exports: declaresPreviewFrame, previewFrameLaunchType, previewFrameSurfaceOptions, resolvePreviewFrameSurface

// Module 11022 (conjurePreviewFrameSurfaces)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5829 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6925 */;
import size from "module_2" /* 2 */;

let obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, declaredBy: ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL };
const items = [obj, { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, declaredBy: ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL }, ];
({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, declaredBy: ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL });
items[2] = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN, declaredBy: ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY };
const items1 = [, ];
({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN, declaredBy: ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY });
items1[0] = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
items1[1] = EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL;
const items2 = [EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL];
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewFrameSurfaces.tsx");

export const CONJURE_PREVIEW_LAUNCH_SURFACE_TYPES = items1;
export function previewFrameLaunchType(APP_CHANNEL) {
  if (APP_CHANNEL === EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN) {
    APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
  }
  return APP_CHANNEL;
}
export function declaresPreviewFrame(previewSupportedSurfaces) {
  let closure_0 = previewSupportedSurfaces;
  return items.some((declaredBy) => closure_0.includes(declaredBy.declaredBy));
}
export function previewFrameSurfaceOptions(previewSupportedSurfaces) {
  let closure_0 = previewSupportedSurfaces;
  const found = items.filter((item) => {
    let hasItem;
    const obj = publishedRevision;
    if (publishedRevision != null) {
      hasItem = obj.includes(tmp);
    }
    return true === hasItem;
  });
  let mapped = found.map((type) => type.type);
  if (mapped.length <= 0) {
    mapped = items2;
  }
  return mapped;
}
export function resolvePreviewFrameSurface(first1, memo) {
  let tmp = first1;
  if (null == first1) {
    let APP_CHANNEL = memo[0];
    if (APP_CHANNEL == null) {
      APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
    }
    tmp = APP_CHANNEL;
  }
  return tmp;
}
