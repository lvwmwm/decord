// Module ID: 11241
// Function ID: 11242
// Name: getGuildIdForEmbeddedSurface
// Dependencies: [7259, 2]
// Exports: default

// Module 11241 (getGuildIdForEmbeddedSurface)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 7259 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/utils/getGuildIdForEmbeddedSurface.tsx");

export default function getGuildIdForEmbeddedSurface(type) {
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
    return type.guildId;
  }
};
