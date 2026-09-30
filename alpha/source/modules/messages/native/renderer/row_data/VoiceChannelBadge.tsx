// Module ID: 12952
// Function ID: 12953
// Name: VoiceChannelBadge
// Dependencies: [17, 2045, 4499, 4885, 1074, 12953, 5531, 5076, 2]
// Exports: createVoiceChannelBadge

// Module 12952 (VoiceChannelBadge)
import _mod17 from "module_17" /* 17 */;
import Constants from "Constants" /* 1074 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4499 */;
import VoiceStateStore from "VoiceStateStore" /* 4885 */;
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
          const assetSource = Image.resolveAssetSource(tmp(5531).getChannelIcon(channel));
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          if (null != uri) {
            let result = tmp(5076).shouldAgeVerifyForAgeGate();
            if (result) {
              result = tmp(5076).shouldShowAgeGateForChannelId(channel.id);
              const tmpResult4 = tmp(5076);
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
            const tmpResult3 = tmp(5076);
          }
          const tmpResult = tmp(5531);
        }
      }
    }
  }
};
