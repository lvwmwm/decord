// Module ID: 4674
// Function ID: 40644
// Name: openImagePickerUnhandled
// Dependencies: [29, 5, 27, 1280, 4222, 1849, 653, 4344, 3, 4675, 4686, 4666, 4692, 477, 3830, 1212, 3776, 4665, 1247, 4695, 4697, 4670, 4110, 4698, 4699, 4700, 1327, 4701, 4702, 4703, 4358, 4704, 2]
// Exports: cancelGetFileInfo, getAppDir, getCaptionLabel, getFileFromUploadItem, getFileInfo, getFileSize, getImageCompressionQuality, getImageDimensionsIfMissing, getType, isHEVCEncodingSupported, openImagePicker

// Module 4674 (openImagePickerUnhandled)
import getMobileImageEncodingLadderConfig from "getMobileImageEncodingLadderConfig";
import closure_5 from "_isNativeReflectConstruct";
import get_ActivityIndicator from "apexExperiment";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import ME from "ME";
import { NativePermissionTypes } from "NativePermissionStatus";
import importDefaultResult from "_isNativeReflectConstruct";

let Base64GIFPrefix;
let closure_13;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function openImagePickerUnhandled() {
  return _openImagePickerUnhandled(...arguments);
}
async function _openImagePickerUnhandled(arg0, arg1) {
  let height;
  let width;
  let obj = outer2_1(outer2_2[9]);
  if (yield obj.requestPermission(outer2_19.PHOTOS)) {
    obj = {};
    if ("size" in arg0) {
      ({ size: obj2.width, size: obj2.height } = arg0);
      let tmp8 = obj;
    } else {
      ({ width: obj2.width, height: obj2.height } = arg0);
      tmp8 = obj;
    }
    ({ width, height } = tmp8);
    const tmp12 = yield new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      outer3_1(outer3_2[10]).launchImageLibrary({ mediaType: "photo", includeBase64: true, disableNewIOSPicker: true }, (assets) => {
        let first = null;
        if (null != assets.assets) {
          first = null;
          if (assets.assets.length > 0) {
            first = assets.assets[0];
          }
        }
        if (assets.didCancel) {
          const _Error2 = Error;
          const error = new Error(outer4_23);
          callback2(error);
        } else {
          if (null == assets.errorCode) {
            let uri;
            if (null != first) {
              uri = first.uri;
            }
            if (null != uri) {
              const obj = {};
              ({ uri: obj.uri, base64: obj.base64 } = first);
              callback(obj);
            }
          }
          const _Error = Error;
          const error1 = new Error(assets.errorMessage);
          callback2(error1);
        }
      });
    });
    let obj2 = outer2_0(outer2_2[11]);
    obj = { uri: tmp12.uri, i: "" };
    const file = obj2.getFile(obj);
    let obj4 = outer2_1(outer2_2[12]);
    const catchPromise = obj4.fromFileUri(tmp12.uri).catch(() => null);
    if (null != tmp12.base64) {
      if (obj10.isAndroid()) {
        let base64 = tmp13.base64;
        if (base64.startsWith("UklGR")) {
          const obj1 = { base64: outer2_17 + tmp12.base64, mimeType: "image/webp", originalMd5: yield catchPromise };
          return obj1;
        } else {
          base64 = tmp13.base64;
          if (4 === base64.indexOf("ZnR5cA==")) {
            const base641 = tmp13.base64;
            if (8 !== base641.indexOf("YXZpZg==")) {
              const base642 = tmp13.base64;
            }
            obj2 = { base64: outer2_18 + tmp13.base64, mimeType: "image/avif", originalMd5: yield catchPromise };
            return obj2;
          }
        }
      }
      obj10 = outer2_0(outer2_2[13]);
    }
    if ("image/gif" === file.type) {
      const obj3 = { base64: outer2_14 + tmp13.base64, mimeType: "image/gif", originalMd5: yield catchPromise };
      return obj3;
    } else {
      obj4 = { uri: tmp13.uri, width, height, includeBase64: true };
      const preferredMimeType = arg0.preferredMimeType;
      if (null != preferredMimeType) {
        let type = preferredMimeType;
      } else {
        type = file.type;
      }
      obj4.mimeType = type;
      const tmp25 = yield outer2_1(outer2_2[10]).launchCropper(obj4);
      const obj5 = {};
      const _HermesInternal = HermesInternal;
      obj5.base64 = "data:" + tmp25.mime + ";base64," + tmp25.data;
      obj5.mimeType = tmp25.mime;
      obj5.originalMd5 = yield catchPromise;
      return obj5;
    }
    const fromFileUriResult = obj4.fromFileUri(tmp12.uri);
  } else {
    let _Error = Error;
    let error = new Error("Missing permission");
    throw error;
  }
}
function openImagePicker(arg0) {
  return _openImagePicker(...arguments);
}
async function _openImagePicker(arg0, arg1) {
  let obj = outer2_1(outer2_2[9]);
  if (yield obj.requestPermission(outer2_19.PHOTOS)) {
    const tmp2 = yield outer2_24(arg0);
    if (null != tmp2.errorStr) {
      const intl = outer2_0(outer2_2[15]).intl;
      obj = { reason: tmp3.errorStr };
      outer2_0(outer2_2[14]).presentFailedToast(intl.formatToPlainString(outer2_0(outer2_2[15]).t.Ex162J, obj));
      const obj3 = outer2_0(outer2_2[14]);
    }
    return tmp2;
  } else {
    obj = { errorStr: "Missing permission" };
    return obj;
  }
}
function mediaManager() {
  return _mediaManager(...arguments);
}
async function _mediaManager(arg0, arg1, arg2) {
  let iter = (function*(arg0, arg1) {
    let tmp = arg2;
    if (tmp === undefined) {
      tmp = null;
    }
    yield undefined;
    const MediaManager = outer2_6.MediaManager;
    return yield MediaManager[arg0](arg1, tmp);
  })();
  iter.next();
  return iter;
}
function getVideoQuality(localWant) {
  if (closure_10.dataSavingMode) {
    if (store.getType() === constants3.CELLULAR) {
      return constants.LOW;
    }
  }
  const videoUploadQuality = closure_10.videoUploadQuality;
  currentUser = currentUser.getCurrentUser();
  if (obj.canUseHighVideoUploadQuality(currentUser)) {
    let tmp5 = resolveModeToVideoQualityForUserWithFeature(videoUploadQuality);
  } else {
    tmp5 = resolveModeToVideoQualityForFreeUser(videoUploadQuality);
  }
  return tmp5;
}
function resolveModeToVideoQualityForUserWithFeature(videoUploadQuality) {
  if (constants2.DATA_SAVER === videoUploadQuality) {
    return constants.LOW;
  } else if (constants2.STANDARD === videoUploadQuality) {
    return constants.HIGH;
  } else if (constants2.BEST === videoUploadQuality) {
    return constants.VERY_HIGH;
  } else {
    return constants.MEDIUM;
  }
}
function resolveModeToVideoQualityForFreeUser(videoUploadQuality) {
  if (constants2.DATA_SAVER === videoUploadQuality) {
    return constants.LOW;
  } else if (constants2.STANDARD === videoUploadQuality) {
    return constants.MEDIUM;
  } else if (constants2.BEST === videoUploadQuality) {
    return constants.HIGH;
  } else {
    return constants.LOW;
  }
}
function getAppDir() {
  if (obj.isAndroid()) {
    if (null == importDefault(1247)) {
      const _Error = Error;
      const error = new Error("RTNFileManager doesn't exist?");
      throw error;
    } else {
      const obj2 = importDefault(1247);
      return importDefault(1247).getConstants().CacheDirPath.replace(/cache$/, "");
    }
  } else {
    return "/private" + closure_6.DCDFileManager.DocumentsDirPath.replace(/Documents$/, "");
  }
  obj = require(477) /* set */;
}
function getFileInfo(value, arg1) {
  let description;
  let filename;
  let item;
  let mimeType;
  let mimeType2;
  let originalUri;
  let spoiler;
  let str = arg1;
  ({ item, spoiler, description, mimeType } = value);
  if (arg1 === undefined) {
    str = "";
  }
  if (item.platform !== require(4665) /* _isNativeReflectConstruct */.UploadPlatform.REACT_NATIVE) {
    const _Error = Error;
    const error = new Error("Try to get file info for unsupported upload item");
    throw error;
  } else {
    ({ originalUri, filename, mimeType: mimeType2 } = item);
    if (null != mimeType2) {
      mimeType = mimeType2;
    }
    if (isVideo(originalUri, mimeType)) {
      let obj = { originalUri, filename, mimeType, fileSize: item.size, spoiler, description, i: str };
      let tmp2 = (function processVideoUpload(arg0) {
        return outer1_40(...arguments);
      })(obj);
    } else {
      obj = { originalUri, filename, mimeType, spoiler, description, i: str };
      ({ width: obj.width, height: obj.height } = item);
      obj.allowOptimization = value.allowOptimization;
      tmp2 = (function processImageOrFileUpload(arg0) {
        return outer1_41(...arguments);
      })(obj);
    }
    return tmp2;
  }
}
async function _getPhotoKitDataUTI(arg0, arg1) {
  if (obj.isIOS()) {
    if (arg0.startsWith("ph://")) {
      const MediaManager = outer2_6.MediaManager;
      const tmp3 = yield MediaManager.getImageContentType(arg0);
      let tmp6;
      if (null != tmp3) {
        tmp6 = tmp3;
      }
      return tmp6;
    }
  }
}
async function _shouldConvertToPNG(arg0, arg1, arg2) {
  if (obj.isIOS()) {
    if (obj2.isPhotoKitAsset(arg0, arg1)) {
      let match;
      if (null != arg1) {
        match = arg1.match(/\.png$/i);
      }
      if (null == match) {
        return false;
      }
    } else if (null == arg0.match(/^(assets-library|file):\/\/.+(&ext=|\.)png$/i)) {
      return false;
    }
    const MediaManager = outer2_6.MediaManager;
    return yield MediaManager.imageHasTransparency(arg0);
  } else {
    return false;
  }
  obj = outer2_0(outer2_2[13]);
}
function shouldResolveToMediaFilePath(str) {
  let isAndroidResult = require(477) /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != str.match(/^content:\/\/.+$/i);
  }
  return isAndroidResult;
}
function isVideo(uri, mimeType) {
  let obj = require(4666) /* items */;
  obj = { uri, overrideType: mimeType };
  return obj.getFile(obj).isVideo;
}
function isImage(uri, overrideType) {
  let obj = require(4666) /* items */;
  obj = { uri, overrideType };
  return obj.getFile(obj).isImage;
}
function getType(uri) {
  let obj = require(4666) /* items */;
  obj = { uri };
  return obj.getFile(obj).type;
}
function convertVideo(videoMetadata) {
  let closure_3;
  let dependencyMap;
  let importDefault;
  let require;
  let videoQualitySetting;
  ({ uri: require, filename: importDefault, isLowQuality: dependencyMap, compressionQuality: closure_3, videoQualitySetting } = videoMetadata);
  videoMetadata = videoMetadata.videoMetadata;
  let obj;
  let c7;
  const VideoQualityTarget = require(4697) /* calculateTargetDimensions */.VideoQualityTarget;
  let result = VideoQualityTarget.fromCompressionQuality(videoQualitySetting);
  obj = require(4697) /* calculateTargetDimensions */;
  let result1 = obj.canSkipVideoTranscode(result, videoMetadata, videoMetadata.fileSize, require(4670) /* _createForOfIteratorHelperLoose */.maxFileSize());
  let obj2 = require(4670) /* _createForOfIteratorHelperLoose */;
  const size = require(4697) /* calculateTargetDimensions */.calculateTargetDimensions(videoMetadata, result.targetResolution);
  let obj3 = require(4697) /* calculateTargetDimensions */;
  obj = {};
  let result2 = require(4697) /* calculateTargetDimensions */.calculateOptimalBitrate(videoMetadata, result, require(4697) /* calculateTargetDimensions */.DEFAULT_VIDEO_ENCODING_CONFIG.bitrateFloor);
  const merged = Object.assign(require(4697) /* calculateTargetDimensions */.DEFAULT_VIDEO_ENCODING_CONFIG);
  obj["videoQuality"] = result;
  obj["targetWidth"] = size.width;
  obj["targetHeight"] = size.height;
  obj["targetBitrate"] = result2;
  const obj4 = require(4697) /* calculateTargetDimensions */;
  if (obj6.isAndroid()) {
    if (obj7.getSystemVersionMajor() > 34) {
      let _Math = Math;
      let frameRate = Math.min(videoMetadata.frameRate, require(4697) /* calculateTargetDimensions */.DEFAULT_VIDEO_ENCODING_CONFIG.frameRate);
    }
    obj["frameRate"] = frameRate;
    obj["skipVideoTranscode"] = result1;
    obj["createHDR"] = videoMetadata.isHDRContent;
    obj["rotationDegrees"] = videoMetadata.rotationDegrees;
    c7 = 0;
    let promise = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      async function _findCompatibleConfig() {
        function* _loop() {
          let heightAlignment;
          let widthAlignment;
          let capabilities;
          let tmp = yield outer6_46(outer5_6);
          if (tmp.isSupported) {
            let obj = { v: true };
            return obj;
          } else {
            if (null != tmp) {
              if (null != tmp.capabilities) {
                if (null != tmp.failures) {
                  if (0 !== tmp.failures.length) {
                    const failures = tmp.failures;
                    if (null != failures.find((type) => "codec_not_found" === type.type)) {
                      if (outer5_6.useHEVC) {
                        outer5_6.useHEVC = false;
                        obj = 1;
                      } else {
                        outer6_20.error("No supported video encoder found");
                        const _Error3 = Error;
                        const error = new Error("No supported video encoder found");
                        outer4_1(error);
                        obj = { v: false };
                      }
                      return obj;
                    } else {
                      const failures1 = tmp.failures;
                      let flag = false;
                      if (null != failures1.find((type) => {
                        let tmp = "resolution" === type.type;
                        if (!tmp) {
                          tmp = "resolution_alignment" === type.type;
                        }
                        return tmp;
                      })) {
                        flag = false;
                        if (null != tmp.capabilities.resolution) {
                          if (0 !== outer5_6.targetHeight) {
                            if (0 !== outer5_6.targetWidth) {
                              const result = outer5_6.targetWidth / outer5_6.targetHeight;
                              const _Math6 = Math;
                              let bound = Math.min(outer5_6.targetWidth, tmp.capabilities.resolution.maxWidth);
                              const _Math7 = Math;
                              let bound1 = Math.min(outer5_6.targetHeight, tmp.capabilities.resolution.maxHeight);
                              if (bound !== outer5_6.targetWidth) {
                                const _Math = Math;
                                bound1 = Math.round(bound / result);
                              }
                              if (bound1 !== outer5_6.targetHeight) {
                                const _Math2 = Math;
                                bound = Math.round(bound1 * result);
                              }
                              ({ widthAlignment, heightAlignment } = tmp.capabilities.blockSize);
                              const _Math3 = Math;
                              const result1 = Math.floor(bound / widthAlignment) * widthAlignment;
                              const _Math4 = Math;
                              const result2 = Math.floor(bound1 / heightAlignment) * heightAlignment;
                              let tmp10 = result1 === outer5_6.targetWidth;
                              if (tmp10) {
                                tmp10 = result2 === outer5_6.targetHeight;
                              }
                              flag = false;
                              if (!tmp10) {
                                outer5_6.targetWidth = result1;
                                outer5_6.targetHeight = result2;
                                flag = true;
                              }
                            }
                          }
                          const _Error2 = Error;
                          const error1 = new Error("Invalid video dimensions: width or height is 0");
                          outer4_1(error1);
                          const obj1 = { v: false };
                          return obj1;
                        }
                      }
                      const failures2 = tmp.failures;
                      const found = failures2.find((type) => "frameRate" === type.type);
                      capabilities = tmp.capabilities;
                      let flag2 = flag;
                      if (null != found) {
                        let min;
                        if (null != capabilities) {
                          const frameRate = capabilities.frameRate;
                          if (null != frameRate) {
                            min = frameRate.min;
                          }
                        }
                        flag2 = flag;
                        if (null != min) {
                          let max;
                          if (null != capabilities) {
                            const frameRate2 = capabilities.frameRate;
                            if (null != frameRate2) {
                              max = frameRate2.max;
                            }
                          }
                          flag2 = flag;
                          if (null != max) {
                            const frameRate3 = outer5_6.frameRate;
                            const message = found.message;
                            if (message.includes("not supported at resolution")) {
                              const items = [60, 30, 29.97, 24, 15];
                              const sorted = items.sort((arg0, arg1) => arg1 - arg0);
                              min = sorted.find((arg0) => {
                                let tmp = arg0 < outer6_6.frameRate;
                                if (tmp) {
                                  tmp = arg0 >= capabilities.frameRate.min;
                                }
                                return tmp;
                              });
                              if (null == min) {
                                min = capabilities.frameRate.min;
                              }
                              let bound2 = min;
                            } else {
                              const _Math5 = Math;
                              bound2 = Math.min(outer5_6.frameRate, capabilities.frameRate.max);
                            }
                            flag2 = flag;
                            if (bound2 !== outer5_6.frameRate) {
                              outer5_6.frameRate = bound2;
                              flag2 = true;
                            }
                          }
                        }
                      }
                      if (flag2) {
                        outer5_7 = outer5_7 + 1;
                      } else {
                        obj = { currentFailures: tmp.failures, config: outer5_6, capabilities: tmp.capabilities, attempt: outer5_7 + 1 };
                        outer6_20.error("No adjustments possible for current failures", obj);
                        const _Error = Error;
                        const error2 = new Error("No adjustments possible for current failures");
                        outer4_1(error2);
                        const obj2 = { v: false };
                        return obj2;
                      }
                    }
                  }
                }
              }
            }
            const obj3 = { config: outer5_6, attempt: outer5_7 + 1 };
            outer6_20.warn("Unable to determine device capabilities or adjust parameters", obj3);
            return 0;
          }
        }
        if (outer3_7 < 4) {
          const _Symbol = Symbol;
          const iter7 = _loop()[Symbol.iterator]();
          HermesBuiltin.ensureObject("iterator is not an object");
          const iter = iter7.next(undefined);
          HermesBuiltin.ensureObject("iterator.next() did not return an object");
          if (iter.done) {
            while (true) {
              let value = iter2.value;
              let num = 0;
              let num2 = 1;
              if (0 === value) {
                break;
              } else {
                while (true) {
                  let tmp16 = value;
                  if (1 !== value) {
                    if (value) {
                      break;
                    }
                  }
                  let tmp17 = outer3_7;
                  if (outer3_7 >= 4) {
                    break label0;
                  } else {
                    let _loopResult1 = _loop();
                    let _Symbol2 = Symbol;
                    let iter8 = _loopResult1[Symbol.iterator]();
                    let tmp36 = iter8;
                    let str12 = "iterator is not an object";
                    let ensureObjectResult2 = HermesBuiltin.ensureObject("iterator is not an object");
                    let iter4 = iter8.next(undefined);
                    let tmp18 = iter4;
                    let str4 = "iterator.next() did not return an object";
                    let ensureObjectResult3 = HermesBuiltin.ensureObject("iterator.next() did not return an object");
                    if (iter4.done) {
                      while (true) {
                        if (0 !== iter5.value) {
                          break;
                        } else {
                          break label0;
                        }
                        break label0;
                      }
                    } else {
                      let result = HermesBuiltin.generatorSetDelegated();
                      let tmp21 = yield iter4;
                      let tmp22 = tmp21;
                      let tmp23 = tmp2;
                      while (true) {
                        let str5 = "return";
                        let tmp25 = iter8;
                        let tmp24 = tmp21;
                        let method = HermesBuiltin.getMethod("return");
                        if (method === undefined) {
                          return tmp21;
                        } else {
                          let tmp27 = tmp21;
                          let iter6 = method(tmp24);
                          let str6 = "iterator.return() did not return an object";
                          let tmp28 = iter6;
                          let ensureObjectResult4 = HermesBuiltin.ensureObject("iterator.return() did not return an object");
                          if (iter6.done) {
                            return iter6.value;
                          } else {
                            let result1 = HermesBuiltin.generatorSetDelegated();
                            tmp21 = yield iter6;
                            continue;
                          }
                        }
                      }
                    }
                  }
                  break label0;
                }
                return value.v;
              }
              break;
            }
          } else {
            let result2 = HermesBuiltin.generatorSetDelegated();
            let tmp6 = yield iter;
            while (true) {
              let str2 = "return";
              let tmp10 = iter7;
              let tmp9 = tmp6;
              let method1 = HermesBuiltin.getMethod("return");
              if (method1 === undefined) {
                return tmp6;
              } else {
                let tmp12 = tmp6;
                let iter3 = method1(tmp9);
                let str3 = "iterator.return() did not return an object";
                let tmp13 = iter3;
                let ensureObjectResult5 = HermesBuiltin.ensureObject("iterator.return() did not return an object");
                if (iter3.done) {
                  return iter3.value;
                } else {
                  let result3 = HermesBuiltin.generatorSetDelegated();
                  tmp6 = yield iter3;
                  continue;
                }
              }
            }
          }
          const _loopResult = _loop();
        }
        return false;
      }
      function resolveWithConfig(path) {
        return lib({ path, encodingConfig: outer1_6 });
      }
      const promise = (function findCompatibleConfig() {
        return _findCompatibleConfig(...arguments);
      })();
      (function findCompatibleConfig() {
        return _findCompatibleConfig(...arguments);
      })().then((arg0) => {
        if (arg0) {
          if (outer2_34(lib)) {
            let obj = { encodingConfig: outer1_6, compressionQuality: resolveWithConfig, isLowQuality: _findCompatibleConfig, videoQuality: outer1_4, skipVideoTranscode: outer1_5 };
            let nextPromise = outer2_27("resolveToMediaFilePath", lib, obj).then(resolveWithConfig, callback);
            const promise4 = outer2_27("resolveToMediaFilePath", lib, obj);
          } else {
            let obj1 = outer2_0(outer2_2[13]);
            const tmp16 = !obj1.isIOS();
            if (tmp16) {
              if (!tmp16) {
                obj = { encodingConfig: outer1_6, videoQuality: outer1_4, isMov: true, skipVideoTranscode: outer1_5 };
                nextPromise = outer2_27("compressVideo", lib, obj).then(resolveWithConfig, callback);
                const promise3 = outer2_27("compressVideo", lib, obj);
              } else {
                let obj3 = outer2_0(outer2_2[13]);
                const tmp26 = !obj3.isIOS();
                if (tmp26) {
                  if (!tmp26) {
                    obj1 = { encodingConfig: outer1_6, videoQuality: outer1_4, skipVideoTranscode: outer1_5 };
                    nextPromise = outer2_27("compressVideo", lib, obj1).then(resolveWithConfig, callback);
                    const promise2 = outer2_27("compressVideo", lib, obj1);
                  } else {
                    const formatted = lib.toLowerCase();
                    let isIOSResult = outer2_0(outer2_2[13]).isIOS();
                    if (isIOSResult) {
                      isIOSResult = obj6.startsWith("file");
                    }
                    if (isIOSResult) {
                      let endsWithResult = formatted.endsWith("mov");
                      if (!endsWithResult) {
                        endsWithResult = formatted.endsWith("mp4");
                      }
                      if (!endsWithResult) {
                        endsWithResult = formatted.endsWith("qt");
                      }
                      isIOSResult = endsWithResult;
                    }
                    if (isIOSResult) {
                      let obj2 = { encodingConfig: outer1_6, videoQuality: outer1_4 };
                      const formatted1 = lib.toLowerCase();
                      let endsWithResult1 = formatted1.endsWith("mov");
                      if (!endsWithResult1) {
                        const formatted2 = lib.toLowerCase();
                        endsWithResult1 = formatted2.endsWith("qt");
                      }
                      obj2.isMov = endsWithResult1;
                      obj2.skipVideoTranscode = outer1_5;
                      nextPromise = outer2_27("compressVideo", lib, obj2).then(resolveWithConfig, callback);
                      const tmp50 = outer2_27;
                      const tmp50Result = outer2_27("compressVideo", lib, obj2);
                      const tmp51 = lib;
                    } else {
                      obj3 = { uri: lib, filename: callback };
                      outer2_20.error("Unsupported video URI format", obj3);
                      const _Error2 = Error;
                      const _HermesInternal = HermesInternal;
                      const error = new Error("Unsupported video URI format: " + lib);
                      callback(error);
                    }
                    obj6 = lib;
                    const obj8 = outer2_0(outer2_2[13]);
                  }
                } else {
                  if (obj5.isPhotoKitAsset(str5, str6)) {
                    let match;
                    if (null != str6) {
                      match = str6.match(/\.mp4$/i);
                    }
                    let tmp30 = null != match;
                  } else {
                    tmp30 = null != str5.match(/^assets-library:\/\/.+&ext=mp4$/i);
                    if (tmp30) {
                      tmp30 = outer2_35(str5);
                    }
                  }
                  obj5 = outer2_0(outer2_2[19]);
                }
              }
            } else {
              obj2 = outer2_0(outer2_2[19]);
              if (obj2.isPhotoKitAsset(str3, str4)) {
                let match1;
                if (null != str4) {
                  match1 = str4.match(/\.(mov|qt)$/i);
                }
                let tmp20 = null != match1;
              } else {
                tmp20 = null != str3.match(/^assets-library:\/\/.+&ext=(mov|qt)$/i);
                if (tmp20) {
                  tmp20 = outer2_35(str3);
                }
              }
            }
          }
        } else {
          obj = { finalConfig: outer1_6, attempts: outer1_7 };
          outer2_20.error("Could not find compatible encoding configuration after multiple attempts", obj);
          const _Error = Error;
          const error1 = new Error("Could not find compatible encoding configuration after multiple attempts");
          callback(error1);
        }
      }).catch(arg1);
    });
    return promise;
  }
  frameRate = videoMetadata.frameRate;
}
function buildResolvedUpload(arg0) {
  return _buildResolvedUpload(...arguments);
}
async function _buildResolvedUpload(arg0, arg1) {
  let obj = outer2_0(outer2_2[11]);
  obj = { uri: arg0.path, i: arg0.i, overrideType: arg0.mimeType, overrideFilename: arg0.filename };
  const file = obj.getFile(obj);
  obj = {};
  if (tmp3) {
    obj = yield outer2_48(arg0.originalUri, arg0.path, arg0.filename, arg0.attachmentQualityMetricsEnabled, arg0.attachmentOriginDetectionEnabled);
  }
  const obj1 = {};
  const merged = Object.assign(outer2_4(file, outer2_3));
  obj1["name"] = file.filename;
  obj1["spoiler"] = arg0.spoiler;
  obj1["description"] = arg0.description;
  obj1["imageCompressionQuality"] = arg0.compressionQuality;
  obj1["imageEncoderType"] = arg0.imageEncoderType;
  obj1["videoCompressionQuality"] = arg0.videoQualitySetting;
  obj1["videoMetadata"] = arg0.videoMetadata;
  obj1["encodingConfig"] = arg0.encodingConfig;
  obj1["sourceWidth"] = arg0.sourceImageDimensions.width;
  obj1["sourceHeight"] = arg0.sourceImageDimensions.height;
  obj1["uploadedImageWidth"] = arg0.uploadedImageWidth;
  obj1["uploadedImageHeight"] = arg0.uploadedImageHeight;
  obj1["psnr"] = obj.psnr;
  obj1["ssim"] = obj.ssim;
  obj1["origin"] = obj.origin;
  obj1["psnrMeasurementLatencyMs"] = obj.psnrMeasurementLatencyMs;
  obj1["ssimMeasurementLatencyMs"] = obj.ssimMeasurementLatencyMs;
  return obj1;
}
async function _processVideoUpload(arg0, arg1) {
  let iter = (function*(arg0) {
    let description;
    let fileSize;
    let filename;
    let i;
    let mimeType;
    let originalUri;
    let spoiler;
    ({ originalUri, filename, mimeType, fileSize, spoiler, description, i } = arg0);
    yield undefined;
    const tmp2 = outer2_29();
    let dataSavingMode = outer2_10.dataSavingMode;
    if (dataSavingMode) {
      dataSavingMode = outer2_11.getType() === outer2_15.CELLULAR;
    }
    const tmp5 = yield (function fetchVideoMetadata(originalUri, mimeType) {
      return outer3_43(...arguments);
    })(originalUri, mimeType);
    if (null == tmp5) {
      const _Error3 = Error;
      const error = new Error("Video metadata is required for video conversion");
      throw error;
    } else {
      let obj = { location: "upload_utils.process_video_upload" };
      if (obj3.getVideoFrameRateValidationExperimentConfig(obj).enableFrameRateValidation) {
        if (null != tmp5.frameRate) {
          const _Number = Number;
        }
        const _Error2 = Error;
        const _HermesInternal = HermesInternal;
        const error1 = new Error("Invalid video frame rate: " + tmp5.frameRate);
        throw error1;
      }
      obj = { uri: originalUri, filename, isLowQuality: dataSavingMode, compressionQuality: outer2_16.LOW, videoQualitySetting: tmp2, videoMetadata: tmp5, fileSize };
      obj3 = outer2_0(outer2_2[23]);
      const path = yield outer2_37(obj).path;
      if (null == path) {
        const _Error = Error;
        const error2 = new Error("Failed to get video file path");
        throw error2;
      } else {
        obj = { path, i, mimeType, filename, originalUri, spoiler, description, compressionQuality: outer2_16.LOW, videoQualitySetting: tmp2, videoMetadata: tmp5, encodingConfig: tmp9, sourceImageDimensions: {}, isImage: false };
        return outer2_38(obj);
      }
      const tmp8 = yield outer2_37(obj);
    }
  })();
  iter.next();
  return iter;
}
async function _processImageOrFileUpload(arg0, arg1) {
  let iter = (function*(arg0) {
    let allowOptimization;
    let description;
    let enableOriginDetection;
    let enableQualityMetrics;
    let filename;
    let height;
    let i;
    let mimeType;
    let originalUri;
    let spoiler;
    let targetHeight;
    let targetWidth;
    let width;
    ({ originalUri, filename, mimeType, width, height, allowOptimization, spoiler, description, i } = arg0);
    yield undefined;
    let dataSavingMode = outer2_10.dataSavingMode;
    if (dataSavingMode) {
      dataSavingMode = outer2_11.getType() === outer2_15.CELLULAR;
    }
    const tmp4 = outer2_36(originalUri, mimeType);
    if (tmp4) {
      let obj = { width, height };
      let size = obj;
    } else {
      size = {};
    }
    let LOW = outer2_16.LOW;
    let tmp5 = tmp4;
    if (tmp4) {
      tmp5 = !dataSavingMode;
    }
    let flag = false;
    if (tmp5) {
      const useOriginalIfSmaller = outer2_0(outer2_2[24]).ADAPTIVE_COMPRESSION_CONFIG.useOriginalIfSmaller;
      let obj1 = outer2_0(outer2_2[24]);
      const adaptiveImageCompressionQuality = obj1.getAdaptiveImageCompressionQuality(size, outer2_0(outer2_2[24]).ADAPTIVE_COMPRESSION_CONFIG);
      const _HermesInternal = HermesInternal;
      outer2_20.log("Got image compression quality: " + adaptiveImageCompressionQuality + " for " + originalUri + " with dimensions: " + width + "x" + height + " and useOriginalIfSmaller: " + useOriginalIfSmaller);
      LOW = adaptiveImageCompressionQuality;
      flag = useOriginalIfSmaller;
    }
    let obj2 = outer2_0(outer2_2[13]);
    let isIOSResult = obj2.isIOS();
    if (isIOSResult) {
      isIOSResult = originalUri.startsWith("ph://");
    }
    let flag2 = false;
    if (tmp4) {
      let obj3 = outer2_0(outer2_2[25]);
      obj = { location: "upload_utils.process_image_upload" };
      const mobileLosslessImageUploadV2Experiment = obj3.useMobileLosslessImageUploadV2Experiment(obj);
      let obj5 = outer2_0(outer2_2[26]);
      const tmp21 = !obj5.isDiscordFrontendDevelopment();
      let enabled = !tmp21;
      if (tmp21) {
        enabled = mobileLosslessImageUploadV2Experiment.enabled;
      }
      flag2 = enabled;
    }
    enableQualityMetrics = false;
    enableOriginDetection = false;
    if (tmp4) {
      const AttachmentQualityMetricsExperiment = outer2_0(outer2_2[27]).AttachmentQualityMetricsExperiment;
      obj = { location: "upload_utils.process_image_upload" };
      const config = AttachmentQualityMetricsExperiment.getConfig(obj);
      ({ enableQualityMetrics, enableOriginDetection } = config);
    }
    targetWidth = undefined;
    targetHeight = undefined;
    let result = LOW;
    let flag3 = flag;
    let flag4 = false;
    if (obj8.isIOS()) {
      result = LOW;
      flag3 = flag;
      flag4 = false;
      if (tmp4) {
        let flag5 = true;
        if (!obj9.isDiscordFrontendDevelopment()) {
          obj1 = { location: "upload_utils.process_image_upload" };
          flag5 = outer2_0(outer2_2[28]).getIosJpegliConfig(obj1).useJpegliEncoder;
          const obj10 = outer2_0(outer2_2[28]);
        }
        result = LOW;
        flag3 = flag;
        flag4 = flag5;
        if (!dataSavingMode) {
          result = LOW;
          flag3 = flag;
          flag4 = flag5;
          if (null != size.width) {
            result = LOW;
            flag3 = flag;
            flag4 = flag5;
            if (null != size.height) {
              obj2 = { location: "upload_utils.process_image_upload" };
              result = LOW;
              flag3 = flag;
              flag4 = flag5;
              if (obj12.getMobileImageEncodingLadderConfig(obj2).useImageEncodingLadder) {
                const ImageEncodingLadder = outer2_0(outer2_2[24]).ImageEncodingLadder;
                obj3 = {};
                ({ width: obj14.width, height: obj14.height } = size);
                const encodingConfig = ImageEncodingLadder.selectEncodingConfig(obj3);
                result = encodingConfig.compressionQuality / 100;
                ({ targetWidth, targetHeight } = encodingConfig);
                flag3 = true;
                flag4 = flag5;
              }
              obj12 = outer2_0(outer2_2[29]);
            }
          }
        }
        obj9 = outer2_0(outer2_2[26]);
      }
    }
    const obj4 = { uri: originalUri, filename, isLowQuality: dataSavingMode, compressionQuality: result, mobileLosslessImageEnabled: flag2, useEnhancedConversion: isIOSResult, useJpegliEncoder: flag4, allowOptimization, targetWidth, targetHeight };
    const tmp36 = yield (function tryConvertImage(arg0) {
      return outer3_42(...arguments);
    })(obj4);
    if (null != tmp36) {
      const path = tmp36.path;
      if (null == path) {
        const _Error = Error;
        const error = new Error("Failed to get image file path");
        throw error;
      } else {
        obj5 = { path, i, mimeType, filename, originalUri, spoiler, description, compressionQuality: result, sourceImageDimensions: size, isImage: tmp4, imageEncoderType: tmp44 };
        let outputWidth;
        if (null != tmp36) {
          outputWidth = tmp36.outputWidth;
        }
        if (null == outputWidth) {
          outputWidth = size.width;
        }
        obj5.uploadedImageWidth = outputWidth;
        let outputHeight;
        if (null != tmp36) {
          outputHeight = tmp36.outputHeight;
        }
        if (null == outputHeight) {
          outputHeight = size.height;
        }
        obj5.uploadedImageHeight = outputHeight;
        obj5.attachmentQualityMetricsEnabled = enableQualityMetrics;
        obj5.attachmentOriginDetectionEnabled = enableOriginDetection;
        return outer2_38(obj5);
      }
    } else {
      if (allowOptimization === undefined) {
        allowOptimization = true;
      }
      if (outer2_34(originalUri)) {
        const obj6 = { compressionQuality: result, isLowQuality: dataSavingMode, skipVideoTranscode: true, useOriginalIfSmaller: flag3, allowOptimization };
        allowOptimization = "resolveToMediaFilePath";
        let resolved = outer2_27("resolveToMediaFilePath", originalUri, obj6);
      } else {
        resolved = Promise.resolve(originalUri);
      }
      const tmp41 = yield resolved;
      return tmp41;
    }
    obj8 = outer2_0(outer2_2[13]);
  })();
  iter.next();
  return iter;
}
async function _tryConvertImage(arg0, arg1) {
  let iter = (function*(arg0) {
    let allowOptimization;
    let compressionQuality;
    let filename;
    let isLowQuality;
    let mobileLosslessImageEnabled;
    let targetHeight;
    let targetWidth;
    let uri;
    let useEnhancedConversion;
    let useJpegliEncoder;
    ({ uri, filename, isLowQuality, compressionQuality, mobileLosslessImageEnabled, allowOptimization, useEnhancedConversion, useJpegliEncoder, targetWidth, targetHeight } = arg0);
    yield undefined;
    let obj = outer2_0(outer2_2[13]);
    let isIOSResult = obj.isIOS();
    if (isIOSResult) {
      isIOSResult = null != uri.match(outer2_21);
    }
    if (isIOSResult) {
      obj = { compressionQuality };
      const tmp59 = yield outer2_27("convertBase64ToJPEG", uri.replace(outer2_21, ""), obj);
      let tmp60 = null;
      if (tmp59) {
        obj = { path: tmp59, encoderUsed: outer2_0(outer2_2[30]).ImageEncoder.NATIVE };
        tmp60 = obj;
      }
      return tmp60;
    } else {
      let obj1 = outer2_0(outer2_2[13]);
      let isIOSResult1 = obj1.isIOS();
      if (isIOSResult1) {
        isIOSResult1 = null != uri.match(outer2_22);
      }
      if (isIOSResult1) {
        const tmp54 = yield outer2_27("convertBase64ToGIF", uri.replace(outer2_22, ""));
        let tmp55 = null;
        if (tmp54) {
          obj1 = { path: tmp54 };
          tmp55 = obj1;
        }
        return tmp55;
      } else {
        if (mobileLosslessImageEnabled) {
          if (yield (function shouldConvertToPNG(uri, filename) {
            return outer3_33(...arguments);
          })(uri, filename)) {
            const obj2 = {};
            const MediaManager = outer2_6.MediaManager;
            obj2.path = yield MediaManager.getLosslessImageData(uri);
            obj2.encoderUsed = outer2_0(outer2_2[30]).ImageEncoder.PASSTHROUGH;
            return obj2;
          }
        }
        while (true) {
          let tmp17 = outer2_0;
          let tmp18 = outer2_2;
          let num2 = 19;
          let obj3 = outer2_0(outer2_2[19]);
          let tmp19 = uri;
          let result = obj3.shouldForceConvertToJPG(uri, filename, tmp2);
          if (result) {
            break;
          } else {
            let tmp21 = outer2_0;
            let tmp22 = outer2_2;
            let obj4 = outer2_0(outer2_2[19]);
            let tmp23 = uri;
            let tmp24 = obj4;
            let tmp25 = filename;
            let tmp26 = isLowQuality;
            let tmp27 = mobileLosslessImageEnabled;
            let tmp28 = allowOptimization;
            if (obj4.shouldConvertToJPG(uri, filename, isLowQuality, mobileLosslessImageEnabled, allowOptimization)) {
              break;
            } else {
              let tmp29 = uri;
              let tmp30 = outer2_0;
              let tmp31 = outer2_2;
              let obj5 = outer2_0(outer2_2[13]);
              let tmp32 = !obj5.isIOS();
              if (tmp32) {
                if (!tmp32) {
                  let tmp40 = outer2_27;
                  let tmp41 = uri;
                  let str = "convertToGIFFilePath";
                  let tmp42 = yield outer2_27("convertToGIFFilePath", uri);
                  let tmp43 = null;
                  if (tmp42) {
                    obj3 = { path: tmp42 };
                    tmp43 = obj3;
                  }
                  return tmp43;
                } else {
                  let tmp39 = null;
                  return null;
                }
              } else {
                let tmp33 = outer2_0;
                let tmp34 = outer2_2;
                let obj7 = outer2_0(outer2_2[19]);
                let tmp35 = null;
                if (obj7.isPhotoKitAsset(uri, filename)) {
                  let match;
                  if (null != filename) {
                    match = filename.match(/\.gif$/i);
                  }
                  let tmp36 = null != match;
                } else {
                  tmp36 = null != uri.match(/^assets-library:\/\/.+&ext=gif$/i);
                }
                let tmp38 = tmp36;
              }
            }
          }
          let tmp44 = outer2_27;
          let tmp45 = uri;
          obj4 = { compressionQuality, forceConvertToJPG: result, useEnhancedConversion, useJpegliEncoder, targetWidth, targetHeight };
          let str2 = "convertToJPEG";
          let tmp46 = yield outer2_27("convertToJPEG", uri, obj4);
          let tmp47 = null;
          let path;
          if (null != tmp46) {
            path = tmp46.path;
          }
          let tmp49 = tmp46;
          if (null != path) {
            tmp49 = path;
          }
          if (null != tmp46) {
            let encoderUsed = tmp46.encoderUsed;
          }
          if (null != tmp46) {
            let outputWidth = tmp46.outputWidth;
          }
          if (null != tmp46) {
            let outputHeight = tmp46.outputHeight;
          }
          let tmp50 = null;
          if (tmp49) {
            obj5 = { path: tmp49, encoderUsed, outputWidth, outputHeight };
            tmp50 = obj5;
          }
          return tmp50;
        }
      }
    }
  })();
  iter.next();
  return iter;
}
async function _fetchVideoMetadata(arg0, arg1, arg2) {
  if (outer2_35(arg0, arg1)) {
    const tmp4 = yield outer2_27("getVideoMetadata", tmp);
    const rotationDegrees = tmp4.rotationDegrees;
    let num = 0;
    if (null != rotationDegrees) {
      num = rotationDegrees;
    }
    tmp4.rotationDegrees = num;
    return tmp4;
  }
}
function getCaptionLabel(type, isVideo, item) {
  if (isVideo) {
    let str3 = "VIDEO";
    if (null != item.playableDuration) {
      str3 = require(4704) /* getTimeFormat */.getTimeFormat(item.playableDuration);
      const obj = require(4704) /* getTimeFormat */;
    }
    let str2 = str3;
  } else {
    str2 = null;
    if ("image/gif" === type) {
      str2 = "GIF";
    }
  }
  return str2;
}
function getImageDimensionsIfMissing(url, width, height, arg3) {
  return _getImageDimensionsIfMissing(...arguments);
}
async function _getImageDimensionsIfMissing(arg0, arg1, arg2, arg3, arg4) {
  let obj = { width: arg1, height: arg2 };
  if (null != arg1) {
    if (null != arg2) {
      return obj;
    }
  }
  obj = { uri: arg0, overrideFilename: arg3 };
  const file = outer2_0(outer2_2[11]).getFile(obj);
  if (!file.isImage) {
    if (!tmp2.isVideo) {
      return obj;
    }
  }
  let size = yield (function getImageDimensionByUri(uri) {
    let closure_0 = uri;
    return new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      return outer4_7.getSize(closure_0, (width, height) => callback({ width, height }), arg1);
    });
  })(arg0);
  const obj2 = outer2_0(outer2_2[11]);
  const isIOSResult = outer2_0(outer2_2[13]).isIOS();
  let isVideo = isIOSResult;
  if (isIOSResult) {
    isVideo = file.isVideo;
  }
  let tmp6 = isVideo;
  if (isVideo) {
    tmp6 = 0 === size.width;
  }
  let tmp8 = tmp6;
  if (tmp6) {
    tmp8 = 0 === size.height;
  }
  if (tmp8) {
    const DCDFileManager = outer2_6.DCDFileManager;
    size = yield DCDFileManager.getVideoDimensions(arg0);
  }
  return size;
}
function isHEVCEncodingSupported() {
  return _isHEVCEncodingSupported(...arguments);
}
async function _isHEVCEncodingSupported() {
  const MediaManager = outer2_6.MediaManager;
  return yield MediaManager.isHEVCEncodingSupported();
}
function checkVideoEncodingSupport(arg0) {
  return _checkVideoEncodingSupport(...arguments);
}
async function _checkVideoEncodingSupport(arg0, arg1) {
  const MediaManager = outer2_6.MediaManager;
  return yield MediaManager.isVideoEncodingSupported({ width: arg0.targetWidth, height: arg0.targetHeight, frameRate: arg0.frameRate, isHEVC: arg0.useHEVC });
}
function calculateImageQualityMetrics(arg0, arg1) {
  return _calculateImageQualityMetrics(...arguments);
}
async function _calculateImageQualityMetrics(arg0, arg1, arg2, arg3, arg4, arg5) {
  let str = arg1;
  const obj = {};
  if (arg4) {
    const MediaManager = outer2_0(outer2_2[2]).NativeModules.MediaManager;
    obj.origin = yield MediaManager.getMediaOrigin(arg0).source;
  }
  while (true) {
    let tmp5 = arg3;
    if (!arg3) {
      break;
    } else {
      let tmp6 = outer2_0;
      let tmp7 = outer2_2;
      let num2 = 2;
      let MediaManager2 = outer2_0(outer2_2[2]).NativeModules.MediaManager;
      let tmp9 = str;
      let str2 = "://";
      let tmp8 = str;
      if (str.includes("://")) {
        let tmp19 = MediaManager2;
        let tmp20 = yield MediaManager2.calculateImageQualityMetrics(arg0, tmp8);
        let tmp21 = obj;
        ({ psnr: obj.psnr, ssim: obj.ssim, psnrCalculationTimeMs: obj.psnrMeasurementLatencyMs, ssimCalculationTimeMs: obj.ssimMeasurementLatencyMs } = tmp20);
        let tmp22 = outer2_20;
        let tmp23 = globalThis;
        let _HermesInternal3 = HermesInternal;
        let str7 = "Quality metrics calculated: PSNR=";
        let str8 = "dB, SSIM=";
        let logResult = outer2_20.log("Quality metrics calculated: PSNR=" + tmp20.psnr + "dB, SSIM=" + tmp20.ssim);
        break;
      } else {
        let tmp10 = str;
        let str3 = "/";
        if (!str.includes("/")) {
          let tmp11 = str;
          let str4 = "\\";
          if (!str.includes("\\")) {
            let tmp12 = arg0;
            let str5 = "ph://";
            let tmp13 = str;
            let tmp14 = globalThis;
            let _HermesInternal = HermesInternal;
            if (arg0.startsWith("ph://")) {
              let combined = concat(str);
            } else {
              let str6 = "file://";
              combined = concat(str);
            }
          }
          let tmp18 = combined;
        }
        let tmp17 = globalThis;
        let _HermesInternal2 = HermesInternal;
        let tmp16 = str;
        str = "file://";
        combined = "file://" + tmp16;
      }
    }
  }
}
let closure_3 = ["filename"];
({ NativeModules: closure_6, Image: closure_7 } = get_ActivityIndicator);
({ VideoCompressionQuality: closure_8, VideoQualitySettings: closure_9 } = _isNativeReflectConstruct);
({ Base64PNGPrefix: closure_13, Base64GIFPrefix } = ME);
({ NetworkConnectionTypes: closure_15, CompressionQuality: closure_16, Base64WEBPPrefix: closure_17, Base64AVIFPrefix: closure_18 } = ME);
importDefaultResult = new importDefaultResult("UploadUtils.tsx");
const regExp = new RegExp("^" + ME.Base64JPEGPrefix, "i");
const regExp1 = new RegExp("^" + Base64GIFPrefix, "i");
const Canceled = "Canceled";
let result = require("get ActivityIndicator").fileFinishedImporting("utils/native/UploadUtils.tsx");

export default { getFileInfo, isVideo, getType, openImagePickerUnhandled, openImagePicker, getCaptionLabel, getImageDimensionsIfMissing, isHEVCEncodingSupported, getAppDir };
export const base64JPEGRegex = regExp;
export const base64GIFRegex = regExp1;
export { openImagePicker };
export { mediaManager };
export const getImageCompressionQuality = function getImageCompressionQuality() {
  if (closure_10.dataSavingMode) {
    if (store.getType() === constants3.CELLULAR) {
      let HIGH = constants4.LOW;
    }
    return HIGH;
  }
  HIGH = constants4.HIGH;
};
export { getVideoQuality };
export { resolveModeToVideoQualityForUserWithFeature };
export { resolveModeToVideoQualityForFreeUser };
export const cancelGetFileInfo = function cancelGetFileInfo(item) {
  item = item.item;
  return new Promise((arg0, arg1) => {
    if (obj.isAndroid()) {
      if (item.platform === item(outer1_2[17]).UploadPlatform.REACT_NATIVE) {
        outer1_27("cancelResolveToMediaFilePath", item.uri).then(arg0, arg1);
        const promise = outer1_27("cancelResolveToMediaFilePath", item.uri);
      }
    }
    arg0();
  });
};
export const getFileSize = function getFileSize(uri) {
  let replaced = uri;
  if (obj.isIOS()) {
    replaced = uri.replace(/file:\/\//, "");
  }
  obj = require(477) /* set */;
  if (obj2.isAndroid()) {
    if (null == importDefault(1247)) {
      let rejectResult = Promise.reject("RTNFileManager doesn't exist?");
    } else {
      rejectResult = importDefault(1247).getSize(replaced);
      const obj3 = importDefault(1247);
    }
  } else {
    const DCDFileManager = closure_6.DCDFileManager;
    return DCDFileManager.getSize(replaced);
  }
};
export { getAppDir };
export { getFileInfo };
export const shouldConvertToJPG = require("isPhotoKitAsset").shouldConvertToJPG;
export const shouldForceConvertToJPG = require("isPhotoKitAsset").shouldForceConvertToJPG;
export { shouldResolveToMediaFilePath };
export { isVideo };
export { isImage };
export { getType };
export { getCaptionLabel };
export { getImageDimensionsIfMissing };
export { isHEVCEncodingSupported };
export { checkVideoEncodingSupport };
export { calculateImageQualityMetrics };
export const getFileFromUploadItem = function getFileFromUploadItem(result1) {
  let obj = require(4666) /* items */;
  obj = { uri: result1.uri, overrideFilename: result1.filename, overrideType: result1.mimeType };
  return obj.getFile(obj);
};
