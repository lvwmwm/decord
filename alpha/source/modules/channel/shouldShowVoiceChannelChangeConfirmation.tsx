// Module ID: 7615
// Function ID: 7616
// Name: shouldShowVoiceChannelChangeConfirmation
// Dependencies: [6009, 1194, 502, 5114, 5918, 2]
// Exports: shouldShowVoiceChannelChangeConfirmation

// Module 7615 (shouldShowVoiceChannelChangeConfirmation)
import GameConsoleStore from "GameConsoleStore" /* 6009 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 5114 */;
import VoiceStateStore from "VoiceStateStore" /* 5918 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx");

export function shouldShowVoiceChannelChangeConfirmation(id) {
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
}
