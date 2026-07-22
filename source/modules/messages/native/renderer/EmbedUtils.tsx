// Module ID: 7629
// Function ID: 61139
// Name: frozen
// Dependencies: []
// Exports: getAssetUriForEmbed, shouldPlayVideoInline

// Module 7629 (frozen)
const Image = require(dependencyMap[0]).Image;
const frozen = Object.freeze(new Set([]));
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
