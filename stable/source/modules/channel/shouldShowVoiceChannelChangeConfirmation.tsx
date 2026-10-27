// Module ID: 7761
// Function ID: 7762
// Name: shouldShowVoiceChannelChangeConfirmation
// Dependencies: [5210, 1209, 502, 2090, 5212, 2]
// Exports: shouldShowVoiceChannelChangeConfirmation

// Module 7761 (shouldShowVoiceChannelChangeConfirmation)
import GameConsoleStore from "GameConsoleStore" /* 5210 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1209 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2090 */;
import VoiceStateStore from "VoiceStateStore" /* 5212 */;
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
