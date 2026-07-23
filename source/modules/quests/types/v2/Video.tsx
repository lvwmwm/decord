// Module ID: 6953
// Function ID: 55562
// Name: videoAssetFromServer
// Dependencies: [2]
// Exports: desktopVideoAssetsFromServer, desktopVideoMessagesFromServer, mobileVideoAssetsFromServer, mobileVideoMessagesFromServer

// Module 6953 (videoAssetFromServer)
function videoAssetFromServer(video) {
  return { url: video.url, width: video.width, height: video.height, thumbnail: video.thumbnail, caption: video.caption, transcript: video.transcript };
}
const result = require("set").fileFinishedImporting("modules/quests/types/v2/Video.tsx");

export { videoAssetFromServer };
export const desktopVideoAssetsFromServer = function desktopVideoAssetsFromServer(assets) {
  const obj = { video: videoAssetFromServer(assets.video) };
  if (null != assets.video_low_res) {
    obj.videoLowRes = videoAssetFromServer(assets.video_low_res);
  }
  if (null != assets.video_hls) {
    obj.videoHls = videoAssetFromServer(assets.video_hls);
  }
  return obj;
};
export const desktopVideoMessagesFromServer = function desktopVideoMessagesFromServer(messages) {
  return { videoTitle: messages.video_title };
};
export const mobileVideoAssetsFromServer = function mobileVideoAssetsFromServer(assets) {
  const obj = { video: videoAssetFromServer(assets.video) };
  if (null != assets.video_low_res) {
    obj.videoLowRes = videoAssetFromServer(assets.video_low_res);
  }
  if (null != assets.video_hls) {
    obj.videoHls = videoAssetFromServer(assets.video_hls);
  }
  return obj;
};
export const mobileVideoMessagesFromServer = function mobileVideoMessagesFromServer(messages) {
  return { videoTitle: messages.video_title };
};
