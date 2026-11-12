// Module ID: 15391
// Function ID: 15392
// Name: VoiceChannelBadge
// Dependencies: [17, 5019, 5102, 5835, 1072, 15392, 8707, 6812, 6821, 2]
// Exports: createVoiceChannelBadge

// Module 15391 (VoiceChannelBadge)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import shouldAgeVerifyForAgeGate from "shouldAgeVerifyForAgeGate" /* 6812 */;
import AgeGateUtils from "AgeGateUtils" /* 6821 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8707 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15392 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import VoiceStateStore from "VoiceStateStore" /* 5835 */;
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
