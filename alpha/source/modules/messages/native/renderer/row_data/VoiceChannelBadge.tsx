// Module ID: 13413
// Function ID: 13414
// Name: VoiceChannelBadge
// Dependencies: [17, 2064, 4709, 5112, 1085, 13414, 8142, 5905, 5931, 2]
// Exports: createVoiceChannelBadge

// Module 13413 (VoiceChannelBadge)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import shouldAgeVerifyForAgeGate from "shouldAgeVerifyForAgeGate" /* 5905 */;
import AgeGateUtils from "AgeGateUtils" /* 5931 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8142 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 13414 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import VoiceStateStore from "VoiceStateStore" /* 5112 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const Permissions = Constants.Permissions;
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/VoiceChannelBadge.tsx");

export const createVoiceChannelBadge = function createVoiceChannelBadge(id, guildId1) {
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
};
