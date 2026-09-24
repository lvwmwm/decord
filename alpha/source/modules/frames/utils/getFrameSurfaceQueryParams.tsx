// Module ID: 17069
// Function ID: 17070
// Name: getFrameSurfaceQueryParams
// Dependencies: [9395, 2]
// Exports: default

// Module 17069 (getFrameSurfaceQueryParams)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 9395 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/getFrameSurfaceQueryParams.tsx");

export default function getFrameSurfaceQueryParams(type) {
  type = type.type;
  if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
    return {};
  } else {
    if (tmp(9395).EmbeddedSurfaceType.APP_CHANNEL !== type) {
      if (tmp(9395).EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
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
