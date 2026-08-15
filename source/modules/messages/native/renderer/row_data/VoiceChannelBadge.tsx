// Module ID: 8438
// Function ID: 8439
// Name: createVoiceChannelBadge
// Dependencies: [17, 1391, 4021, 4542, 676, 8439, 6832, 5252, 2]
// Exports: createVoiceChannelBadge

// Module 8438 (createVoiceChannelBadge)
import { Image } from "get ActivityIndicator";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import updateVoiceState from "updateVoiceState";
import { Permissions } from "ME";

let result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/messages/native/renderer/row_data/VoiceChannelBadge.tsx");

export const createVoiceChannelBadge = function createVoiceChannelBadge(id, guildId) {
  let obj = require(8439) /* experiment */;
  if (obj.getVoiceChannelBadgeExperiment({ guildId, location: "VoiceChannelBadgeNative" }).enabled) {
    if (null != guildId) {
      discoverableVoiceState = discoverableVoiceState.getDiscoverableVoiceState(guildId, id);
      if (null != discoverableVoiceState) {
        let channelId;
        if (discoverableVoiceState != null) {
          channelId = discoverableVoiceState.channelId;
        }
        channel = channel.getChannel(channelId);
        if (null != channel) {
          let tmpResult = tmp(6832);
          const assetSource = Image.resolveAssetSource(tmpResult.getChannelIcon(channel));
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          if (null != uri) {
            tmpResult = tmp(5252);
            let result = tmpResult.shouldAgeVerifyForAgeGate();
            if (result) {
              result = tmp(5252).shouldShowAgeGateForChannelId(channel.id);
              const tmpResult1 = tmp(5252);
            }
            let isPrivateResult = channel.isPrivate();
            if (!isPrivateResult) {
              isPrivateResult = getUncachedChannelPermissions.can(Permissions.VIEW_CHANNEL, channel) && getUncachedChannelPermissions.can(Permissions.CONNECT, channel);
              const obj4 = getUncachedChannelPermissions;
              const tmp8 = Permissions;
              const tmp9 = getUncachedChannelPermissions.can(Permissions.VIEW_CHANNEL, channel) && getUncachedChannelPermissions.can(Permissions.CONNECT, channel);
            }
            if (!result) {
              if (isPrivateResult) {
                obj = { channelId: null, channelIconUrl: null };
                obj[0] = channel.id;
                obj[1] = uri;
                return obj;
              }
            }
          }
        }
      }
    }
  }
};
