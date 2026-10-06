// Module ID: 17180
// Function ID: 17181
// Name: getFrameSurfaceQueryParams
// Dependencies: [8547, 2]
// Exports: default

// Module 17180 (getFrameSurfaceQueryParams)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8547 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/getFrameSurfaceQueryParams.tsx");

export default function getFrameSurfaceQueryParams(type) {
  const StringResult = String(type.type);
  type = type.type;
  if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
    return { surface: StringResult };
  } else {
    if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
        return { surface: StringResult };
      }
    }
    const obj3 = { surface: StringResult };
    if (null != type.channelId) {
      obj3.channel_id = type.channelId;
    }
    if (null != type.guildId) {
      obj3.guild_id = type.guildId;
    }
    return obj3;
  }
};
