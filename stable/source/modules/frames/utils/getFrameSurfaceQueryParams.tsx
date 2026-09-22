// Module ID: 16725
// Function ID: 16726
// Name: getFrameSurfaceQueryParams
// Dependencies: [9641, 2]
// Exports: default

// Module 16725 (getFrameSurfaceQueryParams)
import FramesConstants from "FramesConstants" /* 9641 */;
import size from "module_2" /* 2 */;

const EmbeddedSurfaceType = FramesConstants.EmbeddedSurfaceType;
const result = size.fileFinishedImporting("modules/frames/utils/getFrameSurfaceQueryParams.tsx");

export default function getFrameSurfaceQueryParams(type) {
  type = type.type;
  if (EmbeddedSurfaceType.MAIN === type) {
    return {};
  } else {
    if (tmp.APP_CHANNEL !== type) {
      if (tmp.VOICE_CHANNEL !== type) {
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
