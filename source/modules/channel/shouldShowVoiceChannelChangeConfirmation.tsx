// Module ID: 12351
// Function ID: 96048
// Name: shouldShowVoiceChannelChangeConfirmation
// Dependencies: [4144, 1280, 1194, 1838, 4146, 2]
// Exports: shouldShowVoiceChannelChangeConfirmation

// Module 12351 (shouldShowVoiceChannelChangeConfirmation)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import closure_2 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_4 from "_isNativeReflectConstruct";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx");

export const shouldShowVoiceChannelChangeConfirmation = function shouldShowVoiceChannelChangeConfirmation(id) {
  if (obj.disableVoiceChannelChangeAlert) {
    return false;
  } else {
    remoteSessionId = remoteSessionId.getRemoteSessionId();
    if (null != closure_4.getVoiceStateForSession(id.getId(), remoteSessionId)) {
      return false;
    } else if (closure_4.isCurrentClientInVoiceChannel()) {
      if (closure_4.isInChannel(id.id)) {
        return false;
      } else {
        guild = guild.getGuild(id.getGuildId());
        let afkChannelId;
        if (null != guild) {
          afkChannelId = guild.afkChannelId;
        }
        let tmp10 = null == afkChannelId;
        if (!tmp10) {
          tmp10 = !closure_4.isInChannel(guild.afkChannelId);
        }
        return tmp10;
      }
    } else {
      return false;
    }
  }
};
