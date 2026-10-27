// Module ID: 6313
// Function ID: 6314
// Name: getChannelIdForEmbeddedSurface
// Dependencies: [6297, 2]
// Exports: default

// Module 6313 (getChannelIdForEmbeddedSurface)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 6297 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/utils/getChannelIdForEmbeddedSurface.tsx");

export default function getChannelIdForEmbeddedSurface(type) {
  if (null != type) {
    type = type.type;
    if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN !== type) {
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL !== type) {
            const OVERLAY = tmp(6297).EmbeddedSurfaceType.OVERLAY;
          }
        }
      }
    }
    return type.channelId;
  }
};
