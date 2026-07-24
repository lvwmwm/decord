// Module ID: 4583
// Function ID: 40197
// Name: isSoundValid
// Dependencies: [1348, 3758, 1849, 4579, 482, 3776, 2]
// Exports: default

// Module 4583 (isSoundValid)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME";
import { Permissions } from "sum";

let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/sounds/soundmoji/utils/isSoundValid.tsx");

export default function isSoundValid(guildId, arg1, channelId) {
  channel = channel.getChannel(channelId);
  guildId = undefined;
  if (null != guildId) {
    guildId = guildId.guildId;
  }
  if (guildId === DEFAULT_SOUND_GUILD_ID) {
    return true;
  } else {
    let guildId1;
    if (null != guildId) {
      guildId1 = guildId.guildId;
    }
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    if (guildId1 !== guild_id) {
      let guildId2;
      if (null != guildId) {
        guildId2 = guildId.guildId;
      }
      if (guildId2 !== arg1) {
        let canResult = null == channel;
        const result = importDefault(3776).canUseSoundboardEverywhere(currentUser.getCurrentUser());
        if (!canResult) {
          canResult = null == channel.guild_id;
        }
        if (!canResult) {
          canResult = closure_3.can(Permissions.USE_EXTERNAL_SOUNDS, channel);
        }
        if (canResult) {
          canResult = result;
        }
        return canResult;
      }
    }
    return true;
  }
};
