// Module ID: 10165
// Function ID: 10166
// Name: ShowShareActionSheetUtils
// Dependencies: [1072, 10166, 1252, 10167, 1378, 1377, 7637, 2]
// Exports: getMediaShareParams, resolveShareFileExtension, trackAppClickInNativeShareSheet

// Module 10165 (ShowShareActionSheetUtils)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import URLUtilsDefault from "URLUtils" /* 1378 */;
import FileExtensionUtils from "FileExtensionUtils" /* 7637 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 10166 */;
import MobileMediaViewerShareExperiment from "MobileMediaViewerShareExperiment" /* 10167 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const presentDelayMs = SharePreparingModalConstants.SHARE_SHEET_PRESENT_DELAY_MS;
const result = size.fileFinishedImporting("modules/action_sheet/native/ShowShareActionSheetUtils.tsx");

export function trackAppClickInNativeShareSheet(app, _location) {
  let str = app;
  const track = AnalyticsUtilsDefault.track;
  const NATIVE_SHARE_SHEET_APP_CLICKED = AnalyticEvents.NATIVE_SHARE_SHEET_APP_CLICKED;
  AnalyticsUtilsDefault;
  if (app == null) {
    str = "";
  }
  const obj = { package_name: str, location: _location };
  track(NATIVE_SHARE_SHEET_APP_CLICKED, obj);
}
export function getMediaShareParams(source) {
  let contentType;
  let tmp11;
  let tmp6;
  let videoURI;
  const obj = MobileMediaViewerShareExperiment;
  if (obj.getMobileMediaViewerShareExperimentEnabled("shareMediaSource")) {
    if (true !== source.disableDownload) {
      if (null != source.shareURI) {
        const obj11 = URLUtilsDefault;
        if (obj11.isDiscordDirectAssetUrl(source.shareURI)) {
          const tmpResult = PlatformUtils;
          ({ videoURI, contentType } = source);
          if (null != videoURI) {
            const tmpResult3 = FileExtensionUtils;
            const decideFileExtensionResult = tmpResult3.decideFileExtension(videoURI, contentType, true);
            const obj3 = { mediaFallbackUrl: videoURI, mediaStagingOptions: tmp11 };
            tmp11 = undefined;
            if (null != decideFileExtensionResult) {
              const obj4 = { url: videoURI, fileExtension: decideFileExtensionResult, mediaType: "video" };
              const merged = Object.assign(tmp3);
              tmp11 = obj4;
            }
            return obj3;
          } else {
            const uri = source.uri;
            const tmpResult4 = FileExtensionUtils;
            const decideFileExtensionResult1 = tmpResult4.decideFileExtension(uri, contentType, true);
            const obj5 = { mediaFallbackUrl: source.shareURI, mediaStagingOptions: tmp6 };
            tmp6 = undefined;
            if (null != decideFileExtensionResult1) {
              const obj6 = { url: source.uri, fileExtension: decideFileExtensionResult1, mediaType: "image" };
              const merged1 = Object.assign(tmp3);
              tmp6 = obj6;
            }
            return obj5;
          }
        } else {
          return { mediaFallbackUrl: source.shareURI };
        }
      }
    }
  }
  let mediaFallbackUrl = source.videoURI;
  if (mediaFallbackUrl == null) {
    mediaFallbackUrl = source.sourceURI;
  }
  if (mediaFallbackUrl == null) {
    mediaFallbackUrl = source.uri;
  }
  return { mediaFallbackUrl };
}
export function resolveShareFileExtension(uri, contentType) {
  const obj = FileExtensionUtils;
  return obj.decideFileExtension(uri, contentType, true);
}
