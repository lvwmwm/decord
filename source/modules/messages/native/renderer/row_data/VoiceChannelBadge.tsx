// Module ID: 7904
// Function ID: 62916
// Name: createVoiceChannelBadge
// Dependencies: []
// Exports: createVoiceChannelBadge

// Module 7904 (createVoiceChannelBadge)
const Image = require(dependencyMap[0]).Image;
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const Permissions = require(dependencyMap[4]).Permissions;
const _module = require(dependencyMap[8]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/row_data/VoiceChannelBadge.tsx");

export const createVoiceChannelBadge = function createVoiceChannelBadge(id, guildId) {
  let obj = require(dependencyMap[5]);
  obj = {};
  let tmp;
  if (null != guildId) {
    tmp = guildId;
  }
  obj.guildId = tmp;
  obj.location = "VoiceChannelBadgeNative";
  if (obj.getVoiceChannelBadgeExperiment(obj).enabled) {
    if (null != guildId) {
      const discoverableVoiceState = discoverableVoiceState.getDiscoverableVoiceState(guildId, id);
      if (null != discoverableVoiceState) {
        let channelId;
        if (null != discoverableVoiceState) {
          channelId = discoverableVoiceState.channelId;
        }
        const channel = channel.getChannel(channelId);
        if (null != channel) {
          const assetSource = Image.resolveAssetSource(require(dependencyMap[6]).getChannelIcon(channel));
          let uri;
          if (null != assetSource) {
            uri = assetSource.uri;
          }
          if (null != uri) {
            let result = require(dependencyMap[7]).shouldAgeVerifyForAgeGate();
            if (result) {
              result = require(dependencyMap[7]).shouldShowAgeGateForChannelId(channel.id);
              const obj4 = require(dependencyMap[7]);
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
            const obj7 = require(dependencyMap[7]);
          }
          const obj6 = require(dependencyMap[6]);
        }
      }
    }
  }
};
