// Module ID: 7635
// Function ID: 61176
// Name: frozen
// Dependencies: [27, 2]
// Exports: getAssetUriForEmbed, shouldPlayVideoInline

// Module 7635 (frozen)
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
  let str = "";
  if (null != effectiveVideoProvider) {
    str = effectiveVideoProvider;
  }
  return frozen.has(str);
};
