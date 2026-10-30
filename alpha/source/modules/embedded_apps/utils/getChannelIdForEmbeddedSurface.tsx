// Module ID: 6843
// Function ID: 6844
// Name: getChannelIdForEmbeddedSurface
// Dependencies: [5670, 2]
// Exports: default

// Module 6843 (getChannelIdForEmbeddedSurface)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5670 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/utils/getChannelIdForEmbeddedSurface.tsx");

export default function getChannelIdForEmbeddedSurface(type) {
  if (null != type) {
    type = type.type;
    if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN !== type) {
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL !== type) {
            const OVERLAY = tmp(5670).EmbeddedSurfaceType.OVERLAY;
          }
        }
      }
    }
    return type.channelId;
  }
};
