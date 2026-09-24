// Module ID: 13261
// Function ID: 13262
// Name: shouldShowVoiceChannelChangeConfirmation
// Dependencies: [4807, 1188, 502, 2067, 4809, 2]
// Exports: shouldShowVoiceChannelChangeConfirmation

// Module 13261 (shouldShowVoiceChannelChangeConfirmation)
import GameConsoleStore from "GameConsoleStore" /* 4807 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1188 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2067 */;
import VoiceStateStore from "VoiceStateStore" /* 4809 */;

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
        guild = GuildStore.getGuild(id.getGuildId());
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
