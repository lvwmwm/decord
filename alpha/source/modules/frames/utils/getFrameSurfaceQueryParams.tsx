// Module ID: 17461
// Function ID: 17462
// Name: getFrameSurfaceQueryParams
// Dependencies: [8586, 38, 2]
// Exports: default

// Module 17461 (getFrameSurfaceQueryParams)
import _modDef38 from "module_38" /* 38 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8586 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/getFrameSurfaceQueryParams.tsx");

export default function getFrameSurfaceQueryParams(type) {
  const surface = String(type.type);
  type = type.type;
  if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN !== type) {
    if (EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY !== type) {
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL === type) {
            _modDef38(false, "A Frame cannot be launched at an INTERACTION_MODAL surface");
            return { surface };
          } else {
            return { surface };
          }
        }
      }
      const obj3 = { surface, channel_id: type.channelId };
      if (null != type.guildId) {
        obj3.guild_id = type.guildId;
      }
      return obj3;
    }
  }
  return { surface };
};
