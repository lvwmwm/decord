// Module ID: 8925
// Function ID: 8926
// Name: trackAppClickInNativeShareSheet
// Dependencies: [676, 8926, 698, 8927, 1467, 500, 5354, 2]
// Exports: getMediaShareParams, resolveShareFileExtension, trackAppClickInNativeShareSheet

// Module 8925 (trackAppClickInNativeShareSheet)
import { AnalyticEvents } from "ME";
import { SHARE_SHEET_PRESENT_DELAY_MS as closure_4 } from "SHARE_PREPARING_MODAL_KEY";

const result = require("expandEventProperties").fileFinishedImporting("modules/action_sheet/native/ShowShareActionSheetUtils.tsx");

export const trackAppClickInNativeShareSheet = function trackAppClickInNativeShareSheet(app, _location) {
  let str = app;
  let obj = importDefault(698);
  if (app == null) {
    str = "";
  }
  obj = { package_name: str, location: _location };
  obj.track(AnalyticEvents.NATIVE_SHARE_SHEET_APP_CLICKED, obj);
};
export const getMediaShareParams = function getMediaShareParams(source) {
  let contentType;
  let videoURI;
  let obj = require(8927) /* apexExperiment */;
  if (obj.getMobileMediaViewerShareExperimentEnabled("shareMediaSource")) {
    if (true !== source.disableDownload) {
      if (null != source.shareURI) {
        if (obj11.isDiscordDirectAssetUrl(source.shareURI)) {
          let tmpResult = tmp(500);
          if (tmpResult.isAndroid()) {
            obj = { presentDelayMs: null };
            obj[0] = closure_4;
          }
          ({ videoURI, contentType } = source);
          if (null != videoURI) {
            tmpResult = tmp(5354);
            const decideFileExtensionResult = tmpResult.decideFileExtension(videoURI, contentType, true);
            obj = { mediaFallbackUrl: null, mediaStagingOptions: null };
            obj[0] = videoURI;
            let tmp11;
            if (null != decideFileExtensionResult) {
              const obj1 = { url: null, fileExtension: null, mediaType: "video" };
              obj1[0] = videoURI;
              obj1[1] = decideFileExtensionResult;
              const merged = Object.assign(tmp3);
              tmp11 = obj1;
            }
            obj[1] = tmp11;
            return obj;
          } else {
            const decideFileExtensionResult1 = tmp(5354).decideFileExtension(source.uri, contentType, true);
            const obj2 = { mediaFallbackUrl: null, mediaStagingOptions: null };
            obj2[0] = source.shareURI;
            let tmp6;
            if (null != decideFileExtensionResult1) {
              const obj3 = { url: null, fileExtension: null, mediaType: "image" };
              obj3[0] = source.uri;
              obj3[1] = decideFileExtensionResult1;
              const merged1 = Object.assign(tmp3);
              tmp6 = obj3;
            }
            obj2[1] = tmp6;
            return obj2;
          }
        } else {
          const obj4 = { mediaFallbackUrl: null };
          obj4[0] = source.shareURI;
          return obj4;
        }
        obj11 = importDefault(1467);
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
};
export const resolveShareFileExtension = function resolveShareFileExtension(outer1_0, contentType) {
  return require(5354) /* decideFileExtension */.decideFileExtension(outer1_0, contentType, true);
};
