// Module ID: 10616
// Function ID: 10617
// Name: getChannelIdForEmbeddedSurface
// Dependencies: [8586, 2]
// Exports: default

// Module 10616 (getChannelIdForEmbeddedSurface)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8586 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/utils/getChannelIdForEmbeddedSurface.tsx");

export default function getChannelIdForEmbeddedSurface(type) {
  if (null != type) {
    type = type.type;
    if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN !== type) {
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL !== type) {
            const OVERLAY = tmp(8586).EmbeddedSurfaceType.OVERLAY;
          }
        }
      }
    }
    return type.channelId;
  }
};
