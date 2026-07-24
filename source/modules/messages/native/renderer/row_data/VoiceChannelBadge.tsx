// Module ID: 7997
// Function ID: 63274
// Name: createVoiceChannelBadge
// Dependencies: [27, 1348, 3758, 4146, 653, 7998, 4593, 4345, 2]
// Exports: createVoiceChannelBadge

// Module 7997 (createVoiceChannelBadge)
import { Image } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/row_data/VoiceChannelBadge.tsx");

export const createVoiceChannelBadge = function createVoiceChannelBadge(id, guildId) {
  let obj = require(7998) /* items */;
  obj = {};
  let tmp;
  if (null != guildId) {
    tmp = guildId;
  }
  obj.guildId = tmp;
  obj.location = "VoiceChannelBadgeNative";
  if (obj.getVoiceChannelBadgeExperiment(obj).enabled) {
    if (null != guildId) {
      discoverableVoiceState = discoverableVoiceState.getDiscoverableVoiceState(guildId, id);
      if (null != discoverableVoiceState) {
        let channelId;
        if (null != discoverableVoiceState) {
          channelId = discoverableVoiceState.channelId;
        }
        channel = channel.getChannel(channelId);
        if (null != channel) {
          const assetSource = Image.resolveAssetSource(require(4593) /* getThreadChannelIcon */.getChannelIcon(channel));
          let uri;
          if (null != assetSource) {
            uri = assetSource.uri;
          }
          if (null != uri) {
            let result = require(4345) /* shouldAgeVerifyForAgeGate */.shouldAgeVerifyForAgeGate();
            if (result) {
              result = require(4345) /* shouldAgeVerifyForAgeGate */.shouldShowAgeGateForChannelId(channel.id);
              const obj4 = require(4345) /* shouldAgeVerifyForAgeGate */;
            }
            let isPrivateResult = channel.isPrivate();
            if (!isPrivateResult) {
              let canResult = closure_4.can(Permissions.VIEW_CHANNEL, channel);
              if (canResult) {
                canResult = closure_4.can(Permissions.CONNECT, channel);
              }
              isPrivateResult = canResult;
            }
            if (!result) {
              if (isPrivateResult) {
                obj = { channelId: channel.id, channelIconUrl: uri };
                return obj;
              }
            }
            const obj7 = require(4345) /* shouldAgeVerifyForAgeGate */;
          }
          const obj6 = require(4593) /* getThreadChannelIcon */;
        }
      }
    }
  }
};
