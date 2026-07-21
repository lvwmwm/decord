// Module ID: 7628
// Function ID: 61117
// Name: frozen
// Dependencies: []
// Exports: getAssetUriForEmbed, shouldPlayVideoInline

// Module 7628 (frozen)
const Image = require(dependencyMap[0]).Image;
const frozen = Object.freeze(new Set(["discord_protos.discord_experimentation.v1.Fixed64Value", "discord_protos.discord_experimentation.v1.UserIDRange"]));
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/EmbedUtils.tsx");

export const getAssetUriForEmbed = function getAssetUriForEmbed(Image) {
  return Image.resolveAssetSource(Image).uri;
};
export const SUPPORTED_VIDEO_PARTNERS = frozen;
export const shouldPlayVideoInline = function shouldPlayVideoInline(effectiveVideoProvider) {
  let str = "";
  if (null != effectiveVideoProvider) {
    str = effectiveVideoProvider;
  }
  return frozen.has(str);
};
