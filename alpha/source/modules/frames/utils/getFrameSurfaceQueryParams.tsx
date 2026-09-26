// Module ID: 16288
// Function ID: 16289
// Name: getFrameSurfaceQueryParams
// Dependencies: [8501, 2]
// Exports: default

// Module 16288 (getFrameSurfaceQueryParams)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8501 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/getFrameSurfaceQueryParams.tsx");

export default function getFrameSurfaceQueryParams(type) {
  type = type.type;
  if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
    return {};
  } else {
    if (tmp(8501).EmbeddedSurfaceType.APP_CHANNEL !== type) {
      if (tmp(8501).EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
        return {};
      }
    }
    const obj = { channel_id: type.channelId };
    if (null != type.guildId) {
      obj.guild_id = type.guildId;
    }
    return obj;
  }
};
