// Module ID: 12580
// Function ID: 12581
// Name: shouldShowVoiceChannelChangeConfirmation
// Dependencies: [4299, 1304, 1218, 1891, 4301, 2]
// Exports: shouldShowVoiceChannelChangeConfirmation

// Module 12580 (shouldShowVoiceChannelChangeConfirmation)
import set from "set";
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import fetchFingerprint from "fetchFingerprint";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import updateVoiceState from "updateVoiceState";

const result = require("fetchFingerprint").fileFinishedImporting("modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx");

export const shouldShowVoiceChannelChangeConfirmation = function shouldShowVoiceChannelChangeConfirmation(id) {
  if (obj.disableVoiceChannelChangeAlert) {
    return false;
  } else {
    remoteSessionId = remoteSessionId.getRemoteSessionId();
    if (null != voiceStateForSession.getVoiceStateForSession(id.getId(), remoteSessionId)) {
      return false;
    } else if (obj.isCurrentClientInVoiceChannel()) {
      if (obj.isInChannel(id.id)) {
        return false;
      } else {
        guild = guild.getGuild(id.getGuildId());
        let afkChannelId;
        if (guild != null) {
          afkChannelId = guild.afkChannelId;
        }
        return null == afkChannelId || !obj.isInChannel(guild.afkChannelId);
      }
    } else {
      return false;
    }
  }
};
