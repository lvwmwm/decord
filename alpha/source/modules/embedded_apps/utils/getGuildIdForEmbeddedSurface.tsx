// Module ID: 9244
// Function ID: 9245
// Name: getGuildIdForEmbeddedSurface
// Dependencies: [5612, 2]
// Exports: default

// Module 9244 (getGuildIdForEmbeddedSurface)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5612 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/utils/getGuildIdForEmbeddedSurface.tsx");

export default function getGuildIdForEmbeddedSurface(type) {
  if (null != type) {
    type = type.type;
    if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN !== type) {
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL !== type) {
            const OVERLAY = tmp(5612).EmbeddedSurfaceType.OVERLAY;
          }
        }
      }
    }
    return type.guildId;
  }
};
