// Module ID: 8331
// Function ID: 8332
// Name: renderer/EmbedUtils
// Dependencies: [17, 1084, 2]
// Exports: getAssetUriForEmbed, isWebviewVideo

// Module 8331 (renderer/EmbedUtils)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/EmbedUtils.tsx");

export function getAssetUriForEmbed(Image) {
  return Image.resolveAssetSource(Image).uri;
}
export function isWebviewVideo(video) {
  video = video.video;
  let tmp = null != video;
  const type = video.type;
  if (tmp) {
    tmp = null == video.proxyURL;
  }
  if (tmp) {
    tmp = type !== MessageEmbedTypes.GIFV;
  }
  return tmp;
}
