// Module ID: 4661
// Function ID: 40358
// Name: _callSuper
// Dependencies: []

// Module 4661 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback3(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback3(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_10(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = [null];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const importDefaultResult = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
const importDefaultResult1 = importDefault(dependencyMap[9]);
({ AbortCodes: closure_16, AnalyticEvents: closure_17 } = arg1(dependencyMap[13]));
let importDefaultResult2 = importDefault(dependencyMap[14]);
importDefaultResult2 = new importDefaultResult2("CloudUpload.tsx");
const set = new Set([]);
const tmp8 = (arg0) => {
  class ResumableUploadError {
    constructor(arg0) {
      obj = arg1;
      self = this;
      if (arg1 === undefined) {
        obj = {};
      }
      tmp = ResumableUploadError;
      tmp2 = closure_8(self, ResumableUploadError);
      ({ cause, response } = obj);
      _Error = cause;
      if (null == cause) {
        tmp4 = globalThis;
        _Error = Error;
        text = undefined;
        if (null != response) {
          text = response.text;
        }
        str = "Unknown error";
        if (null != text) {
          str = text;
        }
        _HermesInternal = HermesInternal;
        str2 = "";
        prototype = _Error.prototype;
        tmp6 = new.target;
        tmp7 = new.target;
        _Error = new _Error("" + str);
      }
      errorKind = ResumableUploadError.getErrorKind(_Error, response);
      if ("server_error" !== errorKind) {
        str3 = "client_error";
        if ("client_error" !== errorKind) {
          tmp9 = globalThis;
          _HermesInternal2 = HermesInternal;
          str4 = "";
          str5 = ":";
          combined = "" + arg0 + ":" + errorKind;
        }
        tmp12 = closure_23;
        tmp13 = ResumableUploadError;
        items = [, ];
        items[0] = combined;
        obj = {};
        obj.cause = cause;
        items[1] = obj;
        tmp14 = closure_23(self, ResumableUploadError, items);
        str6 = "ResumableUploadError";
        tmp14.name = "ResumableUploadError";
        tmp14.phase = arg0;
        tmp14.kind = errorKind;
        tmp14.messageShort = combined;
        return tmp14;
      }
      status = undefined;
      if (null != response) {
        status = response.status;
      }
      num = 0;
      if (null != status) {
        num = status;
      }
      combined = "" + arg0 + ":" + errorKind + ":status_" + num;
      return;
    }
  }
  const arg1 = ResumableUploadError;
  callback4(ResumableUploadError, arg0);
  let obj = {
    key: "canRetry",
    value() {
      const self = this;
      let tmp = "server_error" === this.kind;
      if (!tmp) {
        tmp = "network_error" === self.kind;
      }
      if (!tmp) {
        tmp = "client_error" === self.kind;
      }
      return tmp;
    }
  };
  const items = [obj];
  obj = {
    key: "getErrorKind",
    value(message, status) {
      status = undefined;
      if (null != status) {
        status = status.status;
      }
      let num = 0;
      if (null != status) {
        num = status;
      }
      const hasItem = set.has(num);
      const formatted = message.message.toLowerCase();
      let hasItem1 = formatted.includes("network");
      if (!hasItem1) {
        const formatted1 = message.message.toLowerCase();
        hasItem1 = formatted1.includes("terminated");
        const str2 = message.message;
      }
      if (!hasItem1) {
        const formatted2 = message.message.toLowerCase();
        hasItem1 = formatted2.includes("offline");
        const str4 = message.message;
      }
      if (!hasItem1) {
        const formatted3 = message.message.toLowerCase();
        hasItem1 = formatted3.includes("changed");
        const str6 = message.message;
      }
      if (num < 500) {
        let str9 = "client_error";
        if (!hasItem) {
          let str10 = "unknown";
          if (hasItem1) {
            str10 = "network_error";
          }
          str9 = str10;
        }
        let str8 = str9;
      } else {
        str8 = "server_error";
      }
      return str8;
    }
  };
  const items1 = [obj, ];
  obj = {
    key: "rejectionHandler",
    value(arg0) {
      const ResumableUploadError = arg0;
      return (response) => {
        if (response instanceof response(closure_2[15]).HTTPResponseError) {
          let tmp2 = response;
          let obj = { response };
          const prototype4 = response.prototype;
          const tmp25 = new response(response, obj);
          throw tmp25;
        } else {
          const _Error = Error;
          tmp2 = response;
          obj = {};
          if (response instanceof Error) {
            obj.cause = response;
            const prototype3 = tmp2.prototype;
            tmp2 = new tmp2(tmp3, obj);
            throw tmp2;
          } else {
            const _Error2 = Error;
            const _String = String;
            const error = new Error(String(response));
            obj.cause = error;
            const prototype2 = tmp2.prototype;
            tmp2 = new tmp2(tmp3, obj);
            throw tmp2;
          }
        }
      };
    }
  };
  items1[1] = obj;
  return importDefaultResult(ResumableUploadError, items, items1);
}(importDefaultResult1(Error));
const obj = { NOT_STARTED: "NOT_STARTED", STARTED: "STARTED", UPLOADING: "UPLOADING", ERROR: "ERROR", COMPLETED: "COMPLETED", CANCELED: "CANCELED", REMOVED_FROM_MSG_DRAFT: "REMOVED_FROM_MSG_DRAFT" };
class UploadAnalytics {
  constructor() {
    tmp = closure_8(this, UploadAnalytics);
    this.timing = {};
    this.uploadResumptionCount = 0;
    this.uploadResumptionPosition = 0;
    return;
  }
}
let closure_22 = importDefaultResult(UploadAnalytics);
const tmp4 = arg1(dependencyMap[13]);
const tmp9 = (arg0) => {
  class CloudUpload {
    constructor(arg0, arg1, arg2, arg3) {
      tmp = f40386(this, CloudUpload);
      items = [];
      items[0] = arg0;
      tmp2 = closure_23(this, CloudUpload, items);
      f40440 = tmp2;
      tmp2.status = closure_21.NOT_STARTED;
      tmp2.loaded = 0;
      tmp2.reactNativeFilePrepped = false;
      tmp3 = new closure_22();
      tmp2.uploadAnalytics = tmp3;
      tmp2.uploadAttempts = 0;
      tmp2._aborted = false;
      tmp2.createResumeAwareProgressFn = (arg0) => (loaded) => {
        const sum = loaded.loaded + loaded;
        loaded.emit("progress", sum, loaded.total + loaded, sum - loaded.loaded);
        loaded.loaded = sum;
      };
      tmp2.channelId = arg1;
      file = arg0.file;
      size = undefined;
      if (null != file) {
        size = file.size;
      }
      num = 0;
      if (null != size) {
        num = size;
      }
      tmp2.preCompressionSize = num;
      file2 = arg0.file;
      size1 = undefined;
      if (null != file2) {
        size1 = file2.size;
      }
      num2 = 0;
      if (null != size1) {
        num2 = size1;
      }
      tmp2.currentSize = num2;
      tmp2.reactNativeFileIndex = arg2;
      if (null != arg3) {
        tmp2.allowOptimization = arg3;
      }
      tmp6 = arg0.platform === f40440(f40426[16]).UploadPlatform.WEB && null != arg0.compressionMetadata;
      if (tmp6) {
        tmp2.mimeType = arg0.compressionMetadata.originalContentType;
      }
      abortController = new AbortController();
      tmp2._abortController = abortController;
      if (null == tmp2.origin) {
        tmp10 = f40440;
        tmp11 = f40426;
        num3 = 17;
        DefaultHttpClient = f40440(f40426[17]).DefaultHttpClient;
        prototype = DefaultHttpClient.prototype;
        tmp12 = new.target;
        tmp13 = new.target;
        defaultHttpClient = new DefaultHttpClient();
        tmp15 = defaultHttpClient;
        tmp2._uploadHttpClient = defaultHttpClient;
        tmp2._libdiscoreEnabled = false;
        return tmp2;
      } else {
        str = "string";
        if ("string" === typeof tmp2.origin) {
          origin = tmp2.origin;
        } else {
          tmp8 = f40440;
          tmp9 = f40426;
          origin = f40440(f40426[16]).UploadOrigin[tmp2.origin];
        }
        tmp2.uploadAnalytics.origin = origin;
      }
      return;
    }
  }
  let closure_11 = CloudUpload;
  callback4(CloudUpload, arg0);
  let obj = {
    key: "parseRangeHeader",
    value(str) {
      const match = str.match(/^bytes=(\d+)-(\d+)(?:\/\d+)?$/);
      let tmp2 = null;
      if (null != match) {
        const _parseInt = parseInt;
        const items = [parseInt(match[1], 10), ];
        const _parseInt2 = parseInt;
        items[1] = parseInt(match[2], 10);
        tmp2 = items;
      }
      return tmp2;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "retryOpts",
    value() {
      if (this.item.platform === callback(closure_2[16]).UploadPlatform.REACT_NATIVE) {
        let obj = { timeout: callback2(closure_2[18]).Millis.HOUR };
        let tmp10 = callback2(closure_2[19]);
        const result = 0.5 * callback2(closure_2[18]).Millis.SECOND;
        const prototype2 = tmp10.prototype;
        tmp10 = new tmp10(result, 30 * callback2(closure_2[18]).Millis.MINUTE);
        obj.backoff = tmp10;
        obj.retries = 12;
      } else {
        obj = { timeout: callback2(closure_2[18]).Millis.HOUR, retries: 12 };
        let tmp3 = callback2(closure_2[19]);
        const prototype = tmp3.prototype;
        tmp3 = new tmp3();
        obj.backoff = tmp3;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "createAttachmentUrlRetryOpts",
    value() {
      const self = this;
      if (this.item.platform === callback(closure_2[16]).UploadPlatform.REACT_NATIVE) {
        let obj = {};
        obj = { response: 30 * callback2(closure_2[18]).Millis.SECOND, deadline: 30 * callback2(closure_2[18]).Millis.MINUTE };
        obj.timeout = obj;
        let tmp4 = callback2(closure_2[19]);
        const result = 0.5 * callback2(closure_2[18]).Millis.SECOND;
        const prototype = tmp4.prototype;
        tmp4 = new tmp4(result, 60 * callback2(closure_2[18]).Millis.SECOND);
        obj.backoff = tmp4;
        obj.retries = 8;
        let retryOptsResult = obj;
      } else {
        retryOptsResult = self.retryOpts();
      }
      return retryOptsResult;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "supportsResume",
    value() {
      let _libdiscoreEnabled = this._libdiscoreEnabled;
      if (!_libdiscoreEnabled) {
        _libdiscoreEnabled = this.item.platform !== callback(closure_2[16]).UploadPlatform.REACT_NATIVE;
      }
      return _libdiscoreEnabled;
    }
  };
  const obj2 = { key: "uploadFileToCloud" };
  let closure_10 = callback(async function() {
    const self = this;
    if (null == self.responseUrl) {
      const _Error = Error;
      const error = new Error("_uploadFileToCloud - responseUrl is not set");
      throw error;
    } else {
      const _HermesInternal3 = HermesInternal;
      const combined = "Uploading " + self.id;
      if (self.item.platform === callback(closure_2[16]).UploadPlatform.REACT_NATIVE) {
        const _HermesInternal2 = HermesInternal;
        let combined1 = "filename=" + self.item.filename + ", uri=" + self.item.uri;
      } else {
        const _HermesInternal = HermesInternal;
        combined1 = "filename=" + self.item.file.name;
      }
      closure_18.log(combined, combined1);
      if (self.item.platform === callback(closure_2[16]).UploadPlatform.REACT_NATIVE) {
        const obj = { type: self.item.mimeType, uri: self.item.uri, name: self.item.filename };
        let str6 = "application/octet-stream";
        if (null != obj.type) {
          str6 = "application/octet-stream";
          if ("application/json" !== obj.type) {
            str6 = obj.type;
          }
        }
        let str4 = str6;
        let file = obj;
      } else {
        file = self.item.file;
        str4 = "application/octet-stream";
      }
      if (obj2.canUploadNatively(self.item)) {
        const LibdiscoreHttpClient = callback(closure_2[17]).LibdiscoreHttpClient;
        const prototype = LibdiscoreHttpClient.prototype;
        const libdiscoreHttpClient = new LibdiscoreHttpClient();
        self._uploadHttpClient = libdiscoreHttpClient;
        self._libdiscoreEnabled = true;
        closure_18.log("Using libdiscore client for file upload");
      }
      return yield self.uploadFileWithResumption(self.responseUrl, file, str4);
    }
  });
  obj2.value = function uploadFileToCloud() {
    return callback11(...arguments);
  };
  items[4] = obj2;
  const obj3 = {
    key: "getResumePosition",
    value: function getResumePosition(responseUrl) {
      return callback10(...arguments);
    }
  };
  items[5] = obj3;
  const obj4 = { key: "startOrResumeUpload" };
  let closure_8 = callback(async (arg0) => {
    const fn = function*(headers) {
      let num = arg1;
      const self = this;
      if (num === undefined) {
        num = 0;
      }
      yield undefined;
      closure_18.log("Attempting to upload attachment with resumeFrom: " + num + " and attempts: " + self.uploadAttempts);
      if (num > 0) {
        const uploadAnalytics = self.uploadAnalytics;
        uploadAnalytics.uploadResumptionCount = uploadAnalytics.uploadResumptionCount + 1;
        let obj = {};
        headers = headers.headers;
        if (null == headers) {
          headers = {};
        }
        const merged = Object.assign(headers);
        const _HermesInternal = HermesInternal;
        obj["Content-Range"] = "bytes " + num + "-" + self.currentSize - 1 + "/" + self.currentSize;
        headers.headers = obj;
      } else if (null != headers.headers) {
        headers = headers.headers;
        Content-Range = headers.Content-Range;
        headers.headers = callback2(headers, closure_3);
      }
      headers.onRequestProgress = callback(closure_2[20]).throttle(self.createResumeAwareProgressFn(num), 50);
      const _uploadHttpClient = self._uploadHttpClient;
      obj = { start: num };
      const obj3 = callback(closure_2[20]);
      const tmp9 = yield _uploadHttpClient.doUpload(headers, { fileByteRange: obj }).catch(closure_20.rejectionHandler("upload"));
      if (200 !== tmp9.status) {
        if (201 !== tmp9.status) {
          obj = { response: tmp9 };
          const prototype = ctor.prototype;
          const tmp14 = new ctor("upload", obj);
          throw tmp14;
        }
      }
      return tmp9;
    };
    fn.next();
    return fn;
  });
  obj4.value = function startOrResumeUpload(arg0, arg1) {
    return callback9(...arguments);
  };
  items[6] = obj4;
  const obj5 = { key: "uploadFileWithResumption" };
  let closure_7 = callback(async function(arg0, arg1, arg2) {
    let retries;
    const self = this;
    let callback;
    let obj;
    let closure_3;
    const retryOptsResult = self.retryOpts();
    ({ backoff: closure_1, retries } = retryOptsResult);
    obj = { url: arg0, body: arg1, headers: obj, signal: self._abortController.signal };
    obj = { Content-Type: arg2 };
    obj.onRequestProgress = callback(obj[20]).throttle(self.createResumeAwareProgressFn(0), 50);
    obj.retries = 0;
    obj.rejectWithError = true;
    obj.timeout = retryOptsResult.timeout;
    closure_3 = 0;
    if (self.uploadAttempts <= retries) {
      if (!self._aborted) {
        const _Symbol = Symbol;
        const tmp2Result = tmp2();
        HermesBuiltin.ensureObject("iterator is not an object");
        while (true) {
          let iter = tmp7(undefined);
          let tmp8 = iter;
          let str2 = "iterator.next() did not return an object";
          let ensureObjectResult1 = HermesBuiltin.ensureObject("iterator.next() did not return an object");
          if (!iter.done) {
            break;
          } else {
            while (true) {
              let value = iter2.value;
              if (value) {
                return value.v;
              }
            }
          }
        }
        const tmp4 = tmp2()[Symbol.iterator]();
      }
    }
    const error = new Error("Upload failed after " + self.uploadAttempts + " attempts");
    throw error;
  });
  obj5.value = function uploadFileWithResumption(responseUrl, file, arg2) {
    return callback8(...arguments);
  };
  items[7] = obj5;
  const obj6 = { key: "getSize" };
  const callback = callback(async function() {
    if (null != callback(closure_2[22]).getFileSize) {
      const fileSize = callback(closure_2[22]).getFileSize(this.item.uri);
      const obj = callback(closure_2[22]);
    }
    const tmp4 = yield fileSize;
    let num = 0;
    if (null != tmp4) {
      num = tmp4;
    }
    return num;
  });
  obj6.value = function getSize() {
    return callback7(...arguments);
  };
  items[8] = obj6;
  const obj7 = { key: "trackTime" };
  let closure_5 = callback(async function(arg0, arg1) {
    const nowResult = performance.now();
    this.uploadAnalytics.timing[arg0] = performance.now() - nowResult;
    return yield arg1();
  });
  obj7.value = function trackTime(compressTimeMs, arg1) {
    return callback6(...arguments);
  };
  items[9] = obj7;
  const obj8 = { key: "upload" };
  let closure_4 = callback(async function() {
    const self = this;
    let tmp7;
    let uploadTarget;
    if (self.status !== constants2.COMPLETED) {
      self.setStatus(constants2.STARTED);
      const _performance = performance;
      self.startTime = performance.now();
      self.trackUploadStart();
      if (false === self.reactNativeFilePrepped) {
        yield self.reactNativeCompressAndExtractData();
      }
      if (self.isCancelled()) {
        self.handleComplete(self.id);
      } else {
        if (self.allowOptimization) {
          if (self.item.platform === self(tmp7[16]).UploadPlatform.WEB) {
            const tmp41 = yield closure_11.tryConvertToWebP(self.item.file, () => self._aborted, self.id);
            if (null != tmp41) {
              if (null != tmp41.convertedFile) {
                self.item.file = tmp41.convertedFile;
                self.currentSize = tmp41.convertedFile.size;
              }
              if (null != tmp41.convertedMimeType) {
                self.uploadAnalytics.convertedMimeType = tmp41.convertedMimeType;
              }
              if (null != tmp41.hashTimeMs) {
                self.uploadAnalytics.timing.hashTimeMs = tmp41.hashTimeMs;
              }
              if (null != tmp41.conversionFailureReason) {
                self.uploadAnalytics.conversionFailureReason = tmp41.conversionFailureReason;
              }
              self.uploadAnalytics.timing.compressTimeMs = tmp41.compressTimeMs;
            }
          }
        }
        tmp7 = yield self(tmp7[23]).default.getUploadPayload(self);
        let obj = self(tmp7[24]);
        uploadTarget = obj.getUploadTarget(self.item.target);
        if (null != tmp7.filename) {
          if ("" !== tmp7.filename) {
            const currentSize2 = self.currentSize;
            if (0 !== self.currentSize) {
              obj = { location: "CloudUpload.upload.postCompressionCheck" };
              const kestrelConfig = self(tmp7[26]).getKestrelConfig(obj);
              const obj3 = self(tmp7[26]);
              const currentSize = self.currentSize;
              let num5 = 0;
              const effectiveKestrelLimit = self(tmp7[26]).getEffectiveKestrelLimit(kestrelConfig, uploadTarget.getMaxFileSize(self.channelId));
              if (null != currentSize) {
                num5 = currentSize;
              }
              if (num5 > effectiveKestrelLimit) {
                self.handleError(constants.ENTITY_TOO_LARGE);
              } else {
                if (closure_13.get("upload_fail_50")) {
                  const _Math = Math;
                  if (Math.random() < 0.5) {
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(() => {
                      self.handleError(500);
                    }, 1000);
                  }
                }
                const _HermesInternal = HermesInternal;
                closure_18.log("Requesting upload url for " + self.id);
                const tmp20 = yield self.trackTime("getUploadUrlTimeMs", closure_6(async () => {
                  const createAttachmentURL = createAttachmentURL.getCreateAttachmentURL(closure_1.channelId);
                  const HTTP = callback(closure_2[15]).HTTP;
                  const obj = { url: createAttachmentURL, body: { files: items } };
                  const items = [closure_2];
                  const merged = Object.assign(closure_1.createAttachmentUrlRetryOpts());
                  obj["rejectWithError"] = false;
                  return yield HTTP.post(obj);
                }));
                self.setResponseUrl(tmp20.body.attachments[0].upload_url);
                self.setUploadedFilename(tmp20.body.attachments[0].upload_filename);
                yield self.trackTime("uploadTimeMs", closure_6(async () => yield closure_1.uploadFileToCloud()));
                self.trackUploadFinished(constants2.COMPLETED);
                self.handleComplete(self.id);
              }
              const obj5 = self(tmp7[26]);
            } else {
              self.handleError(constants.ENTITY_EMPTY);
            }
          }
        }
        const _JSON = JSON;
        closure_18.error("File does not have a filename.", JSON.stringify(tmp7));
        self.handleError(constants.INVALID_FILE_ASSET);
      }
    }
  });
  obj8.value = function upload() {
    return callback5(...arguments);
  };
  items[10] = obj8;
  const obj9 = { key: "reactNativeCompressAndExtractData" };
  let closure_3 = callback(async function() {
    const self = this;
    let obj = self(closure_2[24]);
    if (obj.getUploadTarget(self.item.target).shouldReactNativeCompressUploads) {
      if (true === self.reactNativeFilePrepped) {
        self.uploadAnalytics.fileAlreadyPrepped = true;
        const _HermesInternal5 = HermesInternal;
        closure_18.log("reactNativeCompressAndExtractData() file already prepped - " + self.id);
        return self;
      } else {
        const _HermesInternal6 = HermesInternal;
        closure_18.log("Starting compression/conversion for " + self.id);
        const tmp28 = yield self.trackTime("compressTimeMs", closure_6(async () => {
          const reactNativeFileIndex = lib.reactNativeFileIndex;
          let num = 0;
          if (null != reactNativeFileIndex) {
            num = reactNativeFileIndex;
          }
          return yield lib(closure_2[28]).getAttachmentFile(lib, num);
        }));
        if (null != tmp28) {
          if (null != tmp28.file) {
            const uri = tmp28.uri;
            if (obj5.isResolvedUpload(tmp28.file)) {
              self.uploadAnalytics.imageCompressionQuality = tmp28.file.imageCompressionQuality;
              self.uploadAnalytics.videoCompressionQuality = tmp28.file.videoCompressionQuality;
              self.uploadAnalytics.imageEncoderType = tmp28.file.imageEncoderType;
              if (tmp28.file.isImage) {
                self.uploadAnalytics.sourceMediaWidth = tmp28.file.sourceWidth;
                self.uploadAnalytics.sourceMediaHeight = tmp28.file.sourceHeight;
                self.uploadAnalytics.uploadedImageWidth = tmp28.file.uploadedImageWidth;
                self.uploadAnalytics.uploadedImageHeight = tmp28.file.uploadedImageHeight;
              }
              if (undefined !== tmp28.file.videoMetadata) {
                self.uploadAnalytics.sourceMediaWidth = tmp28.file.videoMetadata.width;
                self.uploadAnalytics.sourceMediaHeight = tmp28.file.videoMetadata.height;
                self.uploadAnalytics.sourceMediaFormat = tmp28.file.videoMetadata.format;
                self.uploadAnalytics.sourceVideoBitrate = tmp28.file.videoMetadata.bitRate;
                self.uploadAnalytics.sourceVideoFramerate = tmp28.file.videoMetadata.frameRate;
                self.uploadAnalytics.videoDurationMs = tmp28.file.videoMetadata.durationMs;
                self.uploadAnalytics.sourceVideoProfile = tmp28.file.videoMetadata.sourceProfile;
                self.uploadAnalytics.sourceVideoLevel = tmp28.file.videoMetadata.sourceLevel;
              }
              if (undefined !== tmp28.file.encodingConfig) {
                self.uploadAnalytics.targetVideoWidth = tmp28.file.encodingConfig.targetWidth;
                self.uploadAnalytics.targetVideoHeight = tmp28.file.encodingConfig.targetHeight;
                self.uploadAnalytics.targetVideoBitrate = tmp28.file.encodingConfig.targetBitrate;
                let str2 = "avc1";
                if (tmp28.file.encodingConfig.useHEVC) {
                  str2 = "hvc1";
                }
                self.uploadAnalytics.targetVideoCodec = str2;
                self.uploadAnalytics.targetVideoFramerate = tmp28.file.encodingConfig.frameRate;
                self.uploadAnalytics.targetVideoIsHdr = tmp28.file.encodingConfig.createHDR;
                self.uploadAnalytics.hevcIsSupported = tmp28.file.encodingConfig.hevcIsSupported;
                self.uploadAnalytics.progressUpdateGranularity = tmp28.file.encodingConfig.progressUpdateGranularity;
              }
              self.uploadAnalytics.psnr = tmp28.file.psnr;
              self.uploadAnalytics.ssim = tmp28.file.ssim;
              self.uploadAnalytics.origin = tmp28.file.origin;
              self.uploadAnalytics.psnrMeasurementLatencyMs = tmp28.file.psnrMeasurementLatencyMs;
              self.uploadAnalytics.ssimMeasurementLatencyMs = tmp28.file.ssimMeasurementLatencyMs;
            }
            self.filename = tmp28.file.name;
            if (null != tmp28.file.name) {
              if (null != uri) {
                if (null != tmp28.file.type) {
                  const parts = str15.split(".");
                  const str17 = parts.pop();
                  let formatted;
                  if (null != str17) {
                    formatted = str17.toLowerCase();
                  }
                  let str5 = "image/jpeg";
                  if ("jpg" !== formatted) {
                    str5 = "image/jpeg";
                    if ("jpeg" !== formatted) {
                      str5 = tmp28.file.type;
                    }
                  }
                  self.uploadAnalytics.convertedMimeType = str5;
                  let size = tmp28.fileSize;
                  if (null == size) {
                    let obj1 = self(closure_2[29]);
                    size = yield obj1.getFileData(uri).size;
                  }
                  self.postCompressionSize = size;
                  self.currentSize = size;
                  if (null == size) {
                    const _HermesInternal = HermesInternal;
                    closure_18.error("Size missing from file data for " + self.id);
                    const _Error = Error;
                    const error = new Error("Size missing from file data");
                    throw error;
                  } else {
                    const _HermesInternal7 = HermesInternal;
                    closure_18.log("Completed compression and conversion. Output size=" + size + " bytes; filename=" + str15 + "; uri=" + uri + "; originalMimeType=" + self.mimeType + "; mimeType=" + str5 + " for " + self.id);
                    obj = { uri, filename: str15, mimeType: str5 };
                    obj = {};
                    const merged = Object.assign(self.item);
                    const merged1 = Object.assign(obj);
                    self.item = obj;
                    self.reactNativeFilePrepped = true;
                    return self;
                  }
                }
              }
            }
            obj1 = { filename: tmp28.file.name, uri, type: tmp28.file.type };
            const _HermesInternal2 = HermesInternal;
            closure_18.error("Insufficient file data: " + obj1 + " for " + self.id);
            const _Error2 = Error;
            const obj2 = { filename: tmp28.file.name, uri, type: tmp28.file.type };
            const _HermesInternal3 = HermesInternal;
            const error1 = new Error("Insufficient file data: " + obj2);
            throw error1;
          }
        }
        const _HermesInternal4 = HermesInternal;
        closure_18.error("Failed to get compressed file for " + self.id);
        return self;
      }
    } else {
      self.uploadAnalytics.compressAndExtractDisabled = true;
      closure_18.log("reactNativeCompressAndExtractData() disabled by upload target");
      return self;
    }
  });
  obj9.value = function reactNativeCompressAndExtractData() {
    return callback4(...arguments);
  };
  items[11] = obj9;
  items[12] = {
    key: "handleError",
    value: function handleError(error) {
      const self = this;
      this.setStatus(constants2.ERROR);
      this.error = error;
      this.trackUploadFinished(constants2.ERROR);
      this.emit("error", error);
      self.removeAllListeners();
    }
  };
  items[13] = {
    key: "handleComplete",
    value: function handleComplete(arg0) {
      this.setStatus(constants2.COMPLETED);
      closure_18.log("Upload complete for " + this.id);
      this.emit("complete", arg0);
      this.removeAllListeners();
    }
  };
  items[14] = {
    key: "_cancel",
    value: function _cancel(COMPLETED) {
      const self = this;
      closure_18.log(arg1);
      this._aborted = true;
      const _abortController = this._abortController;
      _abortController.abort();
      this.trackUploadFinished(COMPLETED);
      if (this.status === constants2.COMPLETED) {
        self.delete();
      }
      self.setStatus(COMPLETED);
      self.emit("complete");
      self.removeAllListeners();
    }
  };
  items[15] = {
    key: "cancel",
    value: function cancel() {
      this._cancel(constants2.CANCELED, "Cancelled called for " + this.id);
    }
  };
  items[16] = {
    key: "removeFromMsgDraft",
    value: function removeFromMsgDraft() {
      this._cancel(constants2.REMOVED_FROM_MSG_DRAFT, "Removed from draft for " + this.id);
    }
  };
  items[17] = {
    key: "isCancelled",
    value: function isCancelled() {
      let tmp = this.status === constants2.CANCELED;
      if (!tmp) {
        tmp = this.status === constants2.REMOVED_FROM_MSG_DRAFT;
      }
      return tmp;
    }
  };
  items[18] = {
    key: "resetState",
    value: function resetState() {
      this.status = constants2.NOT_STARTED;
      this.uploadedFilename = undefined;
      this.responseUrl = undefined;
      this.responseUrlSetAt = undefined;
      this.error = undefined;
      this.startTime = undefined;
      this.uploadAnalytics = new closure_22();
      this.uploadAttempts = 0;
      this._aborted = false;
      const abortController = new AbortController();
      this._abortController = abortController;
      return function _superPropGet(CloudUpload, resetState, arg2, arg3) {
        let prototype = CloudUpload;
        if (1) {
          prototype = CloudUpload.prototype;
        }
        const tmpResult = closure_7(closure_11(prototype), "resetState", arg2);
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(arg2, arg0);
          }
        }
        return fn;
      }(CloudUpload, "resetState", this, 3)([]);
    }
  };
  const obj17 = { key: "delete" };
  let closure_2 = callback(async function() {
    const self = this;
    if (null != self.uploadedFilename) {
      const uploadTarget = callback(closure_2[24]).getUploadTarget(self.item.target);
      const deleteUploadURL = uploadTarget.getDeleteUploadURL(self.uploadedFilename);
      const HTTP = callback(closure_2[15]).HTTP;
      yield HTTP.del(deleteUploadURL);
      const obj = callback(closure_2[24]);
    }
  });
  obj17.value = function _delete() {
    return callback3(...arguments);
  };
  items[19] = obj17;
  items[20] = {
    key: "setResponseUrl",
    value: function setResponseUrl(upload_url) {
      this.responseUrl = upload_url;
      this.responseUrlSetAt = Date.now();
    }
  };
  const obj19 = { key: "ensureFreshResponseUrl" };
  let closure_1 = callback(async function() {
    const self = this;
    if (responseUrlStale.isResponseUrlStale(self.responseUrlSetAt)) {
      const _default = callback(closure_2[23]).default;
      let obj = callback(closure_2[24]);
      const uploadTarget = obj.getUploadTarget(self.item.target);
      const createAttachmentURL = uploadTarget.getCreateAttachmentURL(self.channelId);
      const HTTP = callback(closure_2[15]).HTTP;
      obj = { url: createAttachmentURL };
      obj = {};
      const items = [yield callback(closure_2[23]).default.getUploadPayload(self)];
      obj.files = items;
      obj.body = obj;
      const merged = Object.assign(self.createAttachmentUrlRetryOpts());
      obj["rejectWithError"] = false;
      const tmp9 = yield HTTP.post(obj);
      if (tmp9.ok) {
        const body = tmp9.body;
        let first;
        if (null != body) {
          const attachments = body.attachments;
          if (null != attachments) {
            first = attachments[0];
          }
        }
        if (null != first) {
          self.setResponseUrl(tmp9.body.attachments[0].upload_url);
          self.setUploadedFilename(tmp9.body.attachments[0].upload_filename);
        }
      }
      const obj1 = { response: tmp9 };
      const prototype = ctor.prototype;
      const tmp18 = new ctor("upload", obj1);
      throw tmp18;
    }
  });
  obj19.value = function ensureFreshResponseUrl() {
    return callback2(...arguments);
  };
  items[21] = obj19;
  items[22] = {
    key: "setStatus",
    value: function setStatus(status) {
      this.status = status;
    }
  };
  items[23] = {
    key: "setFilename",
    value: function setFilename(filename) {
      this.filename = filename;
    }
  };
  items[24] = {
    key: "setUploadedFilename",
    value: function setUploadedFilename(upload_filename) {
      this.uploadedFilename = upload_filename;
    }
  };
  items[25] = {
    key: "trackUploadStart",
    value: function trackUploadStart() {
      let obj = callback2(closure_2[30]);
      obj = { file_size: this.currentSize };
      const mimeType = this.mimeType;
      let str = "unknown";
      if (null != mimeType) {
        str = mimeType;
      }
      obj.mime_type = str;
      ({ videoUploadQuality: obj2.video_upload_quality, dataSavingMode: obj2.data_saving_mode, dataSavingMode: obj2.low_quality_image_mode } = closure_14);
      obj.channel_id = this.channelId;
      obj.connection_type = store.getType();
      obj.effective_connection_speed = store.getEffectiveConnectionSpeed();
      obj.service_provider = store.getServiceProvider();
      obj.track(constants.ATTACHMENT_UPLOAD_STARTED, obj);
    }
  };
  items[26] = {
    key: "trackUploadFinished",
    value: function trackUploadFinished(COMPLETED) {
      const self = this;
      let num = -1;
      if (null != this.startTime) {
        const _performance = performance;
        num = performance.now() - self.startTime;
      }
      let obj = callback2(closure_2[30]);
      obj = { duration_ms: num };
      ({ currentSize: obj2.file_size, preCompressionSize: obj2.pre_compression_file_size } = self);
      obj.final_state = COMPLETED;
      const mimeType = self.mimeType;
      let str = "unknown";
      let str2 = "unknown";
      if (null != mimeType) {
        str2 = mimeType;
      }
      obj.mime_type = str2;
      const numUploadAttempts = self.uploadAnalytics.numUploadAttempts;
      let num2 = 1;
      if (null != numUploadAttempts) {
        num2 = numUploadAttempts;
      }
      obj.num_upload_attempts = num2;
      obj.error_code = self.error;
      ({ videoUploadQuality: obj2.video_upload_quality, dataSavingMode: obj2.data_saving_mode, dataSavingMode: obj2.low_quality_image_mode } = closure_14);
      obj.compress_time_ms = self.uploadAnalytics.timing.compressTimeMs;
      obj.get_upload_url_time_ms = self.uploadAnalytics.timing.getUploadUrlTimeMs;
      obj.upload_time_ms = self.uploadAnalytics.timing.uploadTimeMs;
      const convertedMimeType = self.uploadAnalytics.convertedMimeType;
      let tmp2 = str;
      if (null != convertedMimeType) {
        tmp2 = convertedMimeType;
      }
      obj.converted_mime_type = tmp2;
      const imageCompressionQuality = self.uploadAnalytics.imageCompressionQuality;
      let num3 = 0;
      if (null != imageCompressionQuality) {
        num3 = imageCompressionQuality;
      }
      obj.image_compression_quality = num3;
      const videoCompressionQuality = self.uploadAnalytics.videoCompressionQuality;
      let tmp3 = str;
      if (null != videoCompressionQuality) {
        tmp3 = videoCompressionQuality;
      }
      obj.video_compression_quality = tmp3;
      const imageEncoderType = self.uploadAnalytics.imageEncoderType;
      if (null != imageEncoderType) {
        str = imageEncoderType;
      }
      obj.image_encoder_type = str;
      obj.was_converted = null != self.uploadAnalytics.convertedMimeType && self.mimeType !== self.uploadAnalytics.convertedMimeType;
      obj.was_compressed = self.currentSize < self.preCompressionSize;
      obj.source_media_width = self.uploadAnalytics.sourceMediaWidth;
      obj.source_media_height = self.uploadAnalytics.sourceMediaHeight;
      obj.source_media_format = self.uploadAnalytics.sourceMediaFormat;
      obj.uploaded_image_width = self.uploadAnalytics.uploadedImageWidth;
      obj.uploaded_image_height = self.uploadAnalytics.uploadedImageHeight;
      obj.source_video_bitrate = self.uploadAnalytics.sourceVideoBitrate;
      obj.video_duration_ms = self.uploadAnalytics.videoDurationMs;
      obj.source_video_profile_name = self.uploadAnalytics.sourceVideoProfile;
      obj.source_video_profile_level = self.uploadAnalytics.sourceVideoLevel;
      obj.target_video_width = self.uploadAnalytics.targetVideoWidth;
      obj.target_video_height = self.uploadAnalytics.targetVideoHeight;
      obj.target_video_bitrate = self.uploadAnalytics.targetVideoBitrate;
      obj.target_video_codec = self.uploadAnalytics.targetVideoCodec;
      obj.target_video_framerate = self.uploadAnalytics.targetVideoFramerate;
      obj.target_video_is_hdr = self.uploadAnalytics.targetVideoIsHdr;
      obj.hevc_is_supported = self.uploadAnalytics.hevcIsSupported;
      obj.progress_update_granularity = self.uploadAnalytics.progressUpdateGranularity;
      obj.source_video_framerate = self.uploadAnalytics.sourceVideoFramerate;
      obj.channel_id = self.channelId;
      obj.hash_time_ms = self.uploadAnalytics.timing.hashTimeMs;
      obj.psnr = self.uploadAnalytics.psnr;
      obj.ssim = self.uploadAnalytics.ssim;
      obj.origin = self.uploadAnalytics.origin;
      obj.psnr_measurement_latency_ms = self.uploadAnalytics.psnrMeasurementLatencyMs;
      obj.ssim_measurement_latency_ms = self.uploadAnalytics.ssimMeasurementLatencyMs;
      obj.upload_resumption_count = self.uploadAnalytics.uploadResumptionCount;
      obj.upload_resumption_reason = self.uploadAnalytics.uploadResumptionReason;
      obj.upload_resumption_position = self.uploadAnalytics.uploadResumptionPosition;
      obj.upload_resumption_check_time_ms = self.uploadAnalytics.timing.resumptionCheckTimeMs;
      obj.conversion_failure_reason = self.uploadAnalytics.conversionFailureReason;
      let str3 = "httputils";
      if (self._libdiscoreEnabled) {
        str3 = "libdiscore";
      }
      obj.upload_http_client = str3;
      obj.connection_type = store.getType();
      obj.effective_connection_speed = store.getEffectiveConnectionSpeed();
      obj.service_provider = store.getServiceProvider();
      obj.track(constants.ATTACHMENT_UPLOAD_FINISHED, obj);
    }
  };
  const items1 = [
    {
      key: "fromJson",
      value: function fromJson(item) {
        const tmp = new CloudUpload(item.item, item.channelId, item.reactNativeFileIndex);
        let closure_0 = tmp;
        const entries = Object.entries(item);
        item = entries.forEach((arg0) => {
          const tmp = callback(arg0, 2);
          const first = tmp[0];
          if (!first.startsWith("_")) {
            tmp[first] = tmp[1];
          }
        });
        if (tmp.status !== constants2.COMPLETED) {
          tmp.status = constants2.NOT_STARTED;
        }
        return tmp;
      }
    },
  ,

  ];
  const obj26 = { key: "tryConvertToWebP" };
  let closure_0 = callback(async (arg0, arg1, arg2) => {
    let sizeAfter;
    let sizeBefore;
    let obj = callback(closure_2[31]);
    const imageAttachmentMezzanineV2Config = obj.getImageAttachmentMezzanineV2Config({ location: "CloudUpload.maybeConvertToWebP" });
    if (imageAttachmentMezzanineV2Config.enabled) {
      if (null == arg0) {
        const _HermesInternal5 = HermesInternal;
        closure_18.warn("webp conversion skipped for " + arg2 + ": no file");
        return null;
      } else {
        if (null != imageAttachmentMezzanineV2Config.maxFileSizeBytes) {
          if (arg0.size > imageAttachmentMezzanineV2Config.maxFileSizeBytes) {
            const _HermesInternal4 = HermesInternal;
            closure_18.warn("webp conversion skipped for " + arg2 + ": too big");
            return null;
          }
        }
        if (arg1()) {
          return null;
        } else {
          const _performance = performance;
          obj = { compressTimeMs: 0 };
          const obj3 = yield closure_0(closure_2[33])(closure_2[32], closure_2.paths);
          const ConversionFailureReason = obj3.ConversionFailureReason;
          const tmp17 = yield obj3.maybeConvertToWebP(arg0);
          if (arg1()) {
            return null;
          } else {
            if (tmp18.success) {
              if (null != tmp18.convertedBlob) {
                const compressionRatio = tmp18.compressionRatio;
                ({ sizeBefore, sizeAfter } = tmp18);
                const _HermesInternal3 = HermesInternal;
                closure_18.log("webp conversion worked for " + arg2 + ": " + sizeBefore + " -> " + sizeAfter + " bytes (" + compressionRatio.toFixed(2) + "x)");
                const _File = File;
                const items = [tmp18.convertedBlob];
                obj = { type: "image/webp", lastModified: arg0.lastModified };
                const file = new File(items, arg0.name, obj);
                tmp13.convertedFile = file;
                tmp13.convertedMimeType = "image/webp";
                const hashTimeMs = tmp18.hashTimeMs;
                let tmp42;
                if (null != hashTimeMs) {
                  tmp42 = hashTimeMs;
                }
                tmp13.hashTimeMs = tmp42;
              }
              while (true) {
                let _Math = Math;
                let _performance2 = performance;
                let rounded = Math.round(performance.now() - nowResult);
                let tmp44 = obj;
                let tmp45 = tmp17;
                let compressTimeMs;
                if (null == tmp17) {
                  break;
                } else {
                  compressTimeMs = tmp18.compressTimeMs;
                  // break
                }
                let tmp47 = compressTimeMs;
                if (null != compressTimeMs) {
                  rounded = compressTimeMs;
                }
                tmp13.compressTimeMs = rounded;
                return obj;
              }
            }
            const reason = tmp18.reason;
            if (null != reason) {
              let UNKNOWN_ERROR = reason;
            } else {
              UNKNOWN_ERROR = ConversionFailureReason.UNKNOWN_ERROR;
            }
            const _HermesInternal2 = HermesInternal;
            closure_18.log("webp conversion skipped for " + arg2 + ": " + UNKNOWN_ERROR);
            tmp13.conversionFailureReason = UNKNOWN_ERROR;
          }
          const nowResult = performance.now();
        }
      }
    } else {
      const _HermesInternal = HermesInternal;
      closure_18.warn("webp conversion skipped for " + arg2 + ": not enabled");
      return null;
    }
  });
  obj26.value = function tryConvertToWebP(file, arg1, id) {
    return callback(...arguments);
  };
  items1[1] = obj26;
  items1[2] = {
    key: "isResponseUrlStale",
    value: function isResponseUrlStale(responseUrlSetAt) {
      if (null == responseUrlSetAt) {
        return true;
      } else {
        const _Date = Date;
        const result = 12 * callback2(closure_2[18]).Millis.HOUR;
        return Date.now() - responseUrlSetAt > result;
      }
    }
  };
  return callback(async function(arg0) {
    const self = this;
    let obj = { url: arg0, headers: { Content-Range: "bytes */*" }, rejectWithError: true, retries: 0 };
    obj = { deadline: 30 * callback(closure_2[18]).Millis.SECOND };
    obj.timeout = obj;
    obj.signal = self._abortController.signal;
    const _uploadHttpClient = self._uploadHttpClient;
    const doUploadResult = _uploadHttpClient.doUpload(obj);
    return yield _uploadHttpClient.doUpload(obj).then((status) => {
      if (200 !== status.status) {
        if (201 !== status.status) {
          let currentSize = closure_20.rejectionHandler("status_check")(status);
        }
        return currentSize;
      }
      currentSize = self.currentSize;
    }).catch((status) => {
      if (status instanceof self(closure_2[15]).HTTPResponseError) {
        if (308 === status.status) {
          const range = status.headers.range;
          let str = "";
          if (null != range) {
            str = range;
          }
          const parseRangeHeaderResult = self.parseRangeHeader(str);
          let num2 = 0;
          if (null != parseRangeHeaderResult) {
            num2 = parseRangeHeaderResult[1] + 1;
          }
          return num2;
        }
      }
      return closure_20.rejectionHandler("status_check")(status);
    });
  })(CloudUpload, items, items1);
}(importDefault(dependencyMap[16]));
const result = arg1(dependencyMap[34]).fileFinishedImporting("lib/uploader/CloudUpload.tsx");

export const ResumableUploadError = tmp8;
export const CloudUploadStatus = obj;
export const CloudUpload = tmp9;
