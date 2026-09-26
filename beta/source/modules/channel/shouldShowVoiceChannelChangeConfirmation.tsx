// Module ID: 13251
// Function ID: 13252
// Name: shouldShowVoiceChannelChangeConfirmation
// Dependencies: [4805, 1184, 502, 2063, 4807, 2]
// Exports: shouldShowVoiceChannelChangeConfirmation

// Module 13251 (shouldShowVoiceChannelChangeConfirmation)
import GameConsoleStore from "GameConsoleStore" /* 4805 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2063 */;
import VoiceStateStore from "VoiceStateStore" /* 4807 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx");

export const shouldShowVoiceChannelChangeConfirmation = function shouldShowVoiceChannelChangeConfirmation(id) {
  if (UnsyncedUserSettingsStore.disableVoiceChannelChangeAlert) {
    return false;
  } else {
    const remoteSessionId = GameConsoleStore.getRemoteSessionId();
    if (null != VoiceStateStore.getVoiceStateForSession(AuthenticationStore.getId(), remoteSessionId)) {
      return false;
    } else if (obj.isCurrentClientInVoiceChannel()) {
      if (obj.isInChannel(id.id)) {
        return false;
      } else {
        const guild = GuildStore.getGuild(id.getGuildId());
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
