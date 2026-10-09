// Module ID: 7494
// Function ID: 7495
// Name: shouldShowVoiceChannelChangeConfirmation
// Dependencies: [5110, 1207, 502, 2086, 5112, 2]
// Exports: shouldShowVoiceChannelChangeConfirmation

// Module 7494 (shouldShowVoiceChannelChangeConfirmation)
import GameConsoleStore from "GameConsoleStore" /* 5110 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1207 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2086 */;
import VoiceStateStore from "VoiceStateStore" /* 5112 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx");

export const shouldShowVoiceChannelChangeConfirmation = function shouldShowVoiceChannelChangeConfirmation(id) {
  if (UnsyncedUserSettingsStore.disableVoiceChannelChangeAlert) {
    return false;
  } else {
    const remoteSessionId = GameConsoleStore.getRemoteSessionId();
    if (null != VoiceStateStore.getVoiceStateForSession(AuthenticationStore.getId(), remoteSessionId)) {
      return false;
    } else if (VoiceStateStore.isCurrentClientInVoiceChannel()) {
      if (VoiceStateStore.isInChannel(id.id)) {
        return false;
      } else {
        const guild = GuildStore.getGuild(id.getGuildId());
        let afkChannelId;
        if (guild != null) {
          afkChannelId = guild.afkChannelId;
        }
        const tmp9 = null == afkChannelId || !VoiceStateStore.isInChannel(guild.afkChannelId);
        return tmp9;
      }
    } else {
      return false;
    }
  }
};
