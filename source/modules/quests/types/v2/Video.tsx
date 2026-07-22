// Module ID: 6948
// Function ID: 55528
// Name: videoAssetFromServer
// Dependencies: []
// Exports: desktopVideoAssetsFromServer, desktopVideoMessagesFromServer, mobileVideoAssetsFromServer, mobileVideoMessagesFromServer

// Module 6948 (videoAssetFromServer)
function videoAssetFromServer(video) {
  return { url: video.url, width: video.width, height: video.height, thumbnail: video.thumbnail, caption: video.caption, transcript: video.transcript };
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/quests/types/v2/Video.tsx");

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
