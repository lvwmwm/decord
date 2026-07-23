// Module ID: 8332
// Function ID: 66049
// Name: showShareActionSheet
// Dependencies: [27, 478, 8333, 8334, 1184, 2]
// Exports: showShareActionSheet

// Module 8332 (showShareActionSheet)
import { NativeEventEmitter } from "get ActivityIndicator";
import isWindows from "isWindows";

if (isWindows.isAndroid()) {
  const prototype = NativeEventEmitter.prototype;
  const nativeEventEmitter = new NativeEventEmitter(require("enforcing"));
  nativeEventEmitter.addListener("share-broadcast-receiver-app-clicked", (arg0) => {
    let _location;
    let app;
    ({ app, location: _location } = arg0);
    const result = require(8334) /* resolveShareFileExtension */.trackAppClickInNativeShareSheet(app, _location);
  });
}
let result = require("enforcing").fileFinishedImporting("modules/action_sheet/native/showShareActionSheet.tsx");

export const showShareActionSheet = function showShareActionSheet(source, SECURE_FRAMES_STREAM_BOTTOM_SHEET) {
  let mediaFallbackUrl;
  let mediaStagingOptions;
  const _require = source;
  const importDefault = SECURE_FRAMES_STREAM_BOTTOM_SHEET;
  if (null != source.source) {
    let mediaShareParams = _require(8334).getMediaShareParams(source.source);
    const obj2 = _require(8334);
  } else {
    mediaShareParams = { mediaFallbackUrl: undefined, mediaStagingOptions: undefined };
  }
  ({ mediaFallbackUrl, mediaStagingOptions } = mediaShareParams);
  if (null == source.source) {
    mediaFallbackUrl = source.url;
  }
  const message = source.message;
  let tmp3 = null;
  if (null != message) {
    tmp3 = message;
  }
  let tmp4 = null;
  if (null != mediaFallbackUrl) {
    tmp4 = mediaFallbackUrl;
  }
  const subject = source.subject;
  let tmp5 = null;
  if (null != subject) {
    tmp5 = subject;
  }
  let tmp6 = null;
  if (null != SECURE_FRAMES_STREAM_BOTTOM_SHEET) {
    tmp6 = SECURE_FRAMES_STREAM_BOTTOM_SHEET;
  }
  let tmp7 = null;
  if (null != mediaStagingOptions) {
    tmp7 = mediaStagingOptions;
  }
  const obj3 = importDefault(8333);
  const shareResult = importDefault(8333).share(tmp3, tmp4, tmp5, tmp6, tmp7);
  importDefault(8333).share(tmp3, tmp4, tmp5, tmp6, tmp7).then((method) => {
    if (null != method) {
      method = method.method;
      if (null != source.iOSOnlyShareCallback) {
        let tmp4 = null;
        if (null != method) {
          tmp4 = method;
        }
        source.iOSOnlyShareCallback(tmp, tmp4);
      }
      const result = source(outer1_2[3]).trackAppClickInNativeShareSheet(method, closure_1);
      const obj = source(outer1_2[3]);
    }
  }).catch((arg0) => {
    let obj = SECURE_FRAMES_STREAM_BOTTOM_SHEET(outer1_2[4]);
    obj = {};
    obj = {};
    let str = "";
    if (null != SECURE_FRAMES_STREAM_BOTTOM_SHEET) {
      str = SECURE_FRAMES_STREAM_BOTTOM_SHEET;
    }
    obj.location = str;
    obj.tags = obj;
    obj.captureException(arg0, obj);
    if (null != source.iOSOnlyShareCallback) {
      source.iOSOnlyShareCallback(false, null);
    }
  });
};
