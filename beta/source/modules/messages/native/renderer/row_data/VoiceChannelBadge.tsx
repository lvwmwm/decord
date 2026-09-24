// Module ID: 13525
// Function ID: 13526
// Name: VoiceChannelBadge
// Dependencies: [17, 2045, 4431, 4809, 1078, 13526, 5273, 5000, 2]
// Exports: createVoiceChannelBadge

// Module 13525 (VoiceChannelBadge)
import _mod17 from "module_17" /* 17 */;
import Constants from "Constants" /* 1078 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4431 */;
import VoiceStateStore from "VoiceStateStore" /* 4809 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const Permissions = Constants.Permissions;
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/VoiceChannelBadge.tsx");

export const createVoiceChannelBadge = function createVoiceChannelBadge(id, guildId1) {
  const guildId = guildId1;
  if (obj.getVoiceChannelBadgeExperiment({ guildId, location: "VoiceChannelBadgeNative" }).enabled) {
    if (null != guildId1) {
      const discoverableVoiceState = VoiceStateStore.getDiscoverableVoiceState(guildId1, id);
      if (null != discoverableVoiceState) {
        let channelId;
        if (discoverableVoiceState != null) {
          channelId = discoverableVoiceState.channelId;
        }
        const channel = ChannelStore.getChannel(channelId);
        if (null != channel) {
          const assetSource = Image.resolveAssetSource(tmp(5273).getChannelIcon(channel));
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          if (null != uri) {
            let result = tmp(5000).shouldAgeVerifyForAgeGate();
            if (result) {
              result = tmp(5000).shouldShowAgeGateForChannelId(channel.id);
              const tmpResult4 = tmp(5000);
            }
            let isPrivateResult = channel.isPrivate();
            if (!isPrivateResult) {
              isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel) && PermissionStore.can(Permissions.CONNECT, channel);
              const tmp9 = PermissionStore.can(Permissions.VIEW_CHANNEL, channel) && PermissionStore.can(Permissions.CONNECT, channel);
            }
            if (!result) {
              if (isPrivateResult) {
                const obj2 = { channelId: channel.id, channelIconUrl: uri };
                return obj2;
              }
            }
            const tmpResult3 = tmp(5000);
          }
          const tmpResult = tmp(5273);
        }
      }
    }
  }
};
