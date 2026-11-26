// Module ID: 14286
// Function ID: 14287
// Name: VoiceChannelBadge
// Dependencies: [17, 4762, 4845, 5561, 1071, 14287, 7636, 6410, 6419, 2]
// Exports: createVoiceChannelBadge

// Module 14286 (VoiceChannelBadge)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1071 */;
import shouldAgeVerifyForAgeGate from "shouldAgeVerifyForAgeGate" /* 6410 */;
import AgeGateUtils from "AgeGateUtils" /* 6419 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 7636 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14287 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import VoiceStateStore from "VoiceStateStore" /* 5561 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const Permissions = Constants.Permissions;
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/VoiceChannelBadge.tsx");

export function createVoiceChannelBadge(id, guildId1) {
  const guildId = guildId1;
  const getVoiceChannelBadgeExperiment = VoiceChannelBadgeExperiment.getVoiceChannelBadgeExperiment;
  VoiceChannelBadgeExperiment;
  if (getVoiceChannelBadgeExperiment({ guildId, location: "VoiceChannelBadgeNative" }).enabled) {
    if (null != guildId1) {
      const discoverableVoiceState = VoiceStateStore.getDiscoverableVoiceState(guildId1, id);
      if (null != discoverableVoiceState) {
        let channelId;
        const getChannel = ChannelStore.getChannel;
        if (discoverableVoiceState != null) {
          channelId = discoverableVoiceState.channelId;
        }
        const channel = getChannel(channelId);
        if (null != channel) {
          const resolveAssetSource = Image.resolveAssetSource;
          const tmpResult = utils_ChannelUtils;
          const assetSource = resolveAssetSource(tmpResult.getChannelIcon(channel));
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          if (null != uri) {
            const tmpResult3 = shouldAgeVerifyForAgeGate;
            let result = tmpResult3.shouldAgeVerifyForAgeGate();
            if (result) {
              const tmpResult4 = AgeGateUtils;
              result = tmpResult4.shouldShowAgeGateForChannelId(channel.id);
            }
            let isPrivateResult = channel.isPrivate();
            if (!isPrivateResult) {
              isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel) && PermissionStore.can(Permissions.CONNECT, channel);
              PermissionStore.can(Permissions.VIEW_CHANNEL, channel) && PermissionStore.can(Permissions.CONNECT, channel);
            }
            if (!result) {
              if (isPrivateResult) {
                return { channelId: channel.id, channelIconUrl: uri };
              }
            }
          }
        }
      }
    }
  }
}
