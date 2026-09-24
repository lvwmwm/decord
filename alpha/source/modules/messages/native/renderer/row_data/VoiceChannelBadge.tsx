// Module ID: 13585
// Function ID: 13586
// Name: VoiceChannelBadge
// Dependencies: [17, 2044, 4464, 4848, 1074, 13586, 5327, 5039, 2]
// Exports: createVoiceChannelBadge

// Module 13585 (VoiceChannelBadge)
import _mod17 from "module_17" /* 17 */;
import Constants from "Constants" /* 1074 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import PermissionStore from "PermissionStore" /* 4464 */;
import VoiceStateStore from "VoiceStateStore" /* 4848 */;
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
          const assetSource = Image.resolveAssetSource(tmp(5327).getChannelIcon(channel));
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          if (null != uri) {
            let result = tmp(5039).shouldAgeVerifyForAgeGate();
            if (result) {
              result = tmp(5039).shouldShowAgeGateForChannelId(channel.id);
              const tmpResult4 = tmp(5039);
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
            const tmpResult3 = tmp(5039);
          }
          const tmpResult = tmp(5327);
        }
      }
    }
  }
};
