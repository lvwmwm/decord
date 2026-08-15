// Module ID: 8171
// Function ID: 8172
// Name: frozen
// Dependencies: [17, 2]
// Exports: getAssetUriForEmbed, shouldPlayVideoInline

// Module 8171 (frozen)
import { Image } from "get ActivityIndicator";
import set from "set";

let set = new Set(["YouTube", "TikTok"]);
const frozen = Object.freeze(set);
const result = set.fileFinishedImporting("modules/messages/native/renderer/EmbedUtils.tsx");

export const getAssetUriForEmbed = function getAssetUriForEmbed(Image) {
  return Image.resolveAssetSource(Image).uri;
};
export const SUPPORTED_VIDEO_PARTNERS = frozen;
export const shouldPlayVideoInline = function shouldPlayVideoInline(effectiveVideoProvider) {
  let str = effectiveVideoProvider;
  if (effectiveVideoProvider == null) {
    str = "";
  }
  return frozen.has(str);
};
