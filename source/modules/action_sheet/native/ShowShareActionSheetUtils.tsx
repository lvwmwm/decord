// Module ID: 8326
// Function ID: 65993
// Name: resolveShareFileExtension
// Dependencies: []
// Exports: getMediaShareParams, trackAppClickInNativeShareSheet

// Module 8326 (resolveShareFileExtension)
function resolveShareFileExtension(uri, contentType) {
  return require(dependencyMap[3]).decideFileExtension(uri, contentType, true);
}
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/action_sheet/native/ShowShareActionSheetUtils.tsx");

export const trackAppClickInNativeShareSheet = function trackAppClickInNativeShareSheet(app, _location) {
  let obj = importDefault(dependencyMap[1]);
  obj = {};
  let str = "";
  if (null != app) {
    str = app;
  }
  obj.package_name = str;
  obj.location = _location;
  obj.track(AnalyticEvents.NATIVE_SHARE_SHEET_APP_CLICKED, obj);
};
export const getMediaShareParams = function getMediaShareParams(source) {
  let contentType;
  let videoURI;
  let obj = require(dependencyMap[2]);
  if (obj.getMobileMediaViewerShareExperimentEnabled("shareMediaSource")) {
    if (true !== source.disableDownload) {
      if (true === source.isGIFV) {
        obj = {};
        let uri2 = source.embedURI;
        if (null == uri2) {
          uri2 = source.sourceURI;
        }
        if (null == uri2) {
          uri2 = source.uri;
        }
        obj.mediaFallbackUrl = uri2;
        return obj;
      } else {
        ({ videoURI, contentType } = source);
        if (null != videoURI) {
          const tmp5 = resolveShareFileExtension(videoURI, contentType);
          obj = { mediaFallbackUrl: videoURI };
          let tmp6;
          if (null != tmp5) {
            const obj1 = { url: videoURI, fileExtension: tmp5, mediaType: "video" };
            tmp6 = obj1;
          }
          obj.mediaStagingOptions = tmp6;
          return obj;
        } else {
          const tmp2 = resolveShareFileExtension(source.uri, contentType);
          const obj2 = {};
          let uri = source.sourceURI;
          if (null == uri) {
            uri = source.uri;
          }
          obj2.mediaFallbackUrl = uri;
          let tmp3;
          if (null != tmp2) {
            const obj3 = { url: source.uri, fileExtension: tmp2, mediaType: "image" };
            tmp3 = obj3;
          }
          obj2.mediaStagingOptions = tmp3;
          return obj2;
        }
      }
    }
  }
  const obj4 = {};
  let uri3 = source.videoURI;
  if (null == uri3) {
    uri3 = source.sourceURI;
  }
  if (null == uri3) {
    uri3 = source.uri;
  }
  obj4.mediaFallbackUrl = uri3;
  return obj4;
};
export { resolveShareFileExtension };
