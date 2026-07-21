// Module ID: 8325
// Function ID: 66000
// Name: showShareActionSheet
// Dependencies: []
// Exports: showShareActionSheet

// Module 8325 (showShareActionSheet)
const NativeEventEmitter = require(dependencyMap[0]).NativeEventEmitter;
const _module = require(dependencyMap[1]);
if (_module.isAndroid()) {
  const prototype = NativeEventEmitter.prototype;
  const nativeEventEmitter = new NativeEventEmitter(importDefault(dependencyMap[2]));
  nativeEventEmitter.addListener("share-broadcast-receiver-app-clicked", (arg0) => {
    let _location;
    let app;
    ({ app, location: _location } = arg0);
    const result = require(dependencyMap[3]).trackAppClickInNativeShareSheet(app, _location);
  });
}
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/action_sheet/native/showShareActionSheet.tsx");

export const showShareActionSheet = function showShareActionSheet(source, SECURE_FRAMES_STREAM_BOTTOM_SHEET) {
  let mediaFallbackUrl;
  let mediaStagingOptions;
  const require = source;
  const importDefault = SECURE_FRAMES_STREAM_BOTTOM_SHEET;
  if (null != source.source) {
    let mediaShareParams = require(dependencyMap[3]).getMediaShareParams(source.source);
    const obj2 = require(dependencyMap[3]);
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
  const obj3 = importDefault(dependencyMap[2]);
  const shareResult = importDefault(dependencyMap[2]).share(tmp3, tmp4, tmp5, tmp6, tmp7);
  importDefault(dependencyMap[2]).share(tmp3, tmp4, tmp5, tmp6, tmp7).then((method) => {
    if (null != method) {
      method = method.method;
      if (null != method.iOSOnlyShareCallback) {
        let tmp4 = null;
        if (null != method) {
          tmp4 = method;
        }
        method.iOSOnlyShareCallback(tmp, tmp4);
      }
      const result = method(closure_2[3]).trackAppClickInNativeShareSheet(method, arg1);
      const obj = method(closure_2[3]);
    }
  }).catch((arg0) => {
    let obj = arg1(closure_2[4]);
    obj = {};
    obj = {};
    let str = "";
    if (null != arg1) {
      str = arg1;
    }
    obj.location = str;
    obj.tags = obj;
    obj.captureException(arg0, obj);
    if (null != arg0.iOSOnlyShareCallback) {
      arg0.iOSOnlyShareCallback(false, null);
    }
  });
};
