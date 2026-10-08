// Module ID: 11140
// Function ID: 11141
// Name: getGuildIdForEmbeddedSurface
// Dependencies: [8586, 2]
// Exports: default

// Module 11140 (getGuildIdForEmbeddedSurface)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8586 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/utils/getGuildIdForEmbeddedSurface.tsx");

export default function getGuildIdForEmbeddedSurface(type) {
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
    return type.guildId;
  }
};
