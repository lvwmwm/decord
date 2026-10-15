// Module ID: 10938
// Function ID: 10939
// Name: getChannelIdForEmbeddedSurface
// Dependencies: [7259, 2]
// Exports: default

// Module 10938 (getChannelIdForEmbeddedSurface)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 7259 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/utils/getChannelIdForEmbeddedSurface.tsx");

export default function getChannelIdForEmbeddedSurface(type) {
  if (null != type) {
    type = type.type;
    if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN !== type) {
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL !== type) {
            const OVERLAY = tmp(7259).EmbeddedSurfaceType.OVERLAY;
          }
        }
      }
    }
    return type.channelId;
  }
};
