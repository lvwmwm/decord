// Module ID: 7076
// Function ID: 56616
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 7076 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[7]);
({ AbortCodes: closure_10, NOOP: closure_11 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE: closure_12, FileUploadErrorTypes: closure_13 } = arg1(dependencyMap[9]));
let importDefaultResult = importDefault(dependencyMap[10]);
importDefaultResult = new importDefaultResult("CloudUploader(Native).tsx");
const nativeEventEmitter = new tmp2.NativeEventEmitter(tmp2.NativeModules.MediaManager);
const tmp4 = arg1(dependencyMap[9]);
const tmp8 = (arg0) => {
  class CloudUploader {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, CloudUploader);
      items1 = [...items];
      obj = closure_7(CloudUploader);
      tmp2 = closure_6;
      if (closure_18()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      map = new Map();
      tmp2Result.mediaEventSubscriptions = map;
      map1 = new Map();
      tmp2Result.uploadItems = map1;
      tmp2Result.preCompressionFileSizes = [];
      return tmp2Result;
    }
  }
  const dependencyMap = CloudUploader;
  callback3(CloudUploader, arg0);
  let obj = { key: "uploadFiles" };
  let closure_1 = callback(async function(arg0) {
    const self = this;
    let callback;
    let onCompleteTask;
    callback = arg0(self[11]).backgroundTaskIdentifierInvalid;
    self.once("start", callback(async () => {
      let obj = lib(_aborted[11]);
      obj = {};
      const intl = callback(_aborted[12]).intl;
      obj.title = intl.string(callback(_aborted[12]).t.B/HSDd);
      const intl2 = callback(_aborted[12]).intl;
      obj = { count: lib.length };
      obj.content = intl2.formatToPlainString(callback(_aborted[12]).t.D0noUt, obj);
      let closure_3 = yield obj.startBackgroundTask(obj);
      if (_aborted._aborted) {
        lib(_aborted[11]).endBackgroundTask(closure_3);
        const obj4 = lib(_aborted[11]);
      }
    }));
    onCompleteTask = function onCompleteTask() {
      arg0(self[11]).endBackgroundTask(closure_3);
      self.removeListener("complete", onCompleteTask);
      self.removeListener("error", onCompleteTask);
    };
    self.once("error", onCompleteTask);
    self.once("complete", onCompleteTask);
    const promise = new Promise((arg0, arg1) => {
      const self = arg0;
      arg0 = arg1;
      self.once("error", (file, code, responseBody, reason) => {
        code({ file, code, responseBody, reason });
      });
      self.once("complete", (self) => {
        if (!self._errored) {
          self(self.files);
        }
      });
    });
    self.files = arg0;
    const items = [arg0];
    function _superPropGet(self, upload, self2, arg3) {
      self = self2;
      let prototype = self;
      if (1) {
        prototype = self.prototype;
      }
      const tmpResult = closure_8(closure_7(prototype), "upload", self2);
      self = tmpResult;
      let fn = tmpResult;
      if (2) {
        fn = tmpResult;
        if ("function" === typeof tmpResult) {
          fn = (arg0) => tmpResult.apply(arg2, arg0);
        }
      }
      return fn;
    }(self, "upload", self, 3)(items);
    self._file.attachmentsCount = arg0.length;
    self._handleStart(undefined);
    let obj = self(self[13]);
    const kestrelConfig = obj.getKestrelConfig({ location: "CloudUploader.native.uploadFiles" });
    let num = 0;
    const tmp9 = callback2(self.files);
    const iter = tmp9();
    let iter2 = iter;
    if (!iter.done) {
      const value = iter2.value;
      let obj1 = self(self[14]);
      const tmp14 = yield obj1.getFileSize(value.item.uri);
      while (true) {
        let prop = self.preCompressionFileSizes;
        let tmp15 = tmp14;
        let arr = prop.push(tmp14);
        let tmp17 = value;
        tmp11.preCompressionSize = tmp14;
        let tmp18 = num;
        let sum = num + tmp14;
        num = sum;
        self._file.totalPreCompressionSize = sum;
        self._file.currentSize = sum;
        let tmp20 = self;
        let tmp21 = self;
        let obj2 = self(self[15]);
        let uploadTarget = obj2.getUploadTarget(tmp11.item.target);
        let obj5 = uploadTarget;
        let _Math = Math;
        let tmp22 = closure_12;
        if (tmp14 > Math.max(uploadTarget.getMaxFileSize(tmp11.channelId), closure_12)) {
          break;
        } else {
          let tmp42 = kestrelConfig;
          if (kestrelConfig.enabled) {
            let tmp23 = tmp14;
            let tmp24 = self;
            let tmp25 = self;
            let obj6 = self(self[13]);
            let tmp26 = kestrelConfig;
            let tmp27 = uploadTarget;
            let tmp28 = value;
            if (tmp15 > obj6.getEffectiveKestrelLimit(kestrelConfig, obj5.getMaxFileSize(tmp11.channelId))) {
              obj = {};
              let tmp36 = constants;
              obj.code = constants.ENTITY_TOO_LARGE;
              obj = {};
              let tmp37 = constants2;
              obj.type = constants2.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
              obj.reason = obj;
              let _handleErrorResult = self._handleError(obj);
              let tmp39 = promise;
              return tmp5;
            }
          }
          let tmp29 = num;
          let tmp30 = uploadTarget;
          if (num > obj5.getMaxTotalAttachmentSize()) {
            obj1 = {};
            let tmp32 = constants;
            obj1.code = constants.ENTITY_TOO_LARGE;
            obj2 = {};
            let tmp33 = constants2;
            obj2.type = constants2.PRECOMPRESSION_SUM_TOO_LARGE;
            obj1.reason = obj2;
            let _handleErrorResult1 = self._handleError(obj1);
            let tmp35 = promise;
            return tmp5;
          } else {
            let tmp31 = tmp9;
            let iter3 = tmp9();
            iter2 = iter3;
          }
        }
      }
    }
    closure_14.log("" + self.id + " queued");
    arg0(self[16]).enqueue(() => {
      self.startUpload();
      return self;
    });
    return promise;
  });
  obj.value = function uploadFiles(attachments) {
    return callback2(...arguments);
  };
  const items = [obj, , ];
  obj = { key: "startUpload" };
  let closure_0 = callback(async function() {
    const self = this;
    if (self._aborted) {
      self._handleAborted();
    } else {
      self._handleStart(closure_11);
      let obj = callback(closure_2[17]);
      if (obj.isAndroid()) {
        const result = self.observeCompressionProgress(self.files);
      }
      if (yield self.compressAndCheckFileSize()) {
        const result1 = self.setUploadingTextForUI();
        const _recomputeProgress = self._recomputeProgress;
        yield callback2(closure_2[18])(self.files, true, _recomputeProgress.bind(self));
        if (0 === self.files.length) {
          const _HermesInternal2 = HermesInternal;
          closure_14.log("All uploads cancelled for " + self.id);
          self._handleComplete();
        } else {
          const files = self.files;
          if (files.every((status) => status.status === callback(closure_2[19]).CloudUploadStatus.COMPLETED)) {
            const items = self._file.items;
            if (null != items) {
              const item = arr.forEach((item) => {
                item.item.progress = 100;
              });
            }
            obj = {};
            const merged = Object.assign(self._file);
            obj["progress"] = 100;
            self._file = obj;
            self.emit("progress", self._file);
            const _HermesInternal = HermesInternal;
            closure_14.log("All uploads complete for " + self.id);
            self._handleComplete();
            const arr = items;
          } else {
            const _Error = Error;
            const error = new Error("Not all attachments were uploaded successfully");
            throw error;
          }
        }
        const tmp9 = callback2(closure_2[18]);
      }
    }
  });
  obj.value = function startUpload() {
    return callback(...arguments);
  };
  items[1] = obj;
  obj = {
    key: "observeCompressionProgress",
    value(arr) {
      let closure_0 = this;
      function cleanUp() {
        const mediaEventSubscriptions = self.mediaEventSubscriptions;
        const value = mediaEventSubscriptions.get(self._file.id);
        if (null != value) {
          value.remove();
        }
        const mediaEventSubscriptions2 = self.mediaEventSubscriptions;
        mediaEventSubscriptions2.delete(self._file.id);
        const uploadItems = self.uploadItems;
        uploadItems.clear();
      }
      const item = arr.forEach((item) => {
        item = item.item;
        if (item.platform === self(closure_2[20]).UploadPlatform.REACT_NATIVE) {
          item.compressionProgress = 0;
          const uploadItems = self.uploadItems;
          const result = uploadItems.set(item.uri, item);
        }
      });
      const mediaEventSubscriptions = this.mediaEventSubscriptions;
      const result = mediaEventSubscriptions.set(this._file.id, closure_15.addListener("compression-progress", (uri) => {
        uri = uri.uri;
        const uploadItems = self.uploadItems;
        if (uploadItems.has(uri)) {
          const uploadItems2 = self.uploadItems;
          uploadItems2.get(uri).compressionProgress = uri.progress;
          let emit;
          let obj = cleanUp(closure_2[21]);
          const uploadItems3 = self.uploadItems;
          const items = [];
          HermesBuiltin.arraySpread(uploadItems3.values(), 0);
          const meanByResult = obj.meanBy(items, "compressionProgress");
          let num3 = 100;
          if (meanByResult >= 100) {
            cleanUp();
            const items1 = self._file.items;
            if (null != items1) {
              const item = items1.forEach((item) => {
                item.item.compressionProgress = 100;
              });
            }
            obj = {};
            const merged = Object.assign(self._file);
            obj["compressionProgress"] = num3;
            self._file = obj;
          } else {
            obj = {};
            const merged1 = Object.assign(self._file);
            obj["compressionProgress"] = meanByResult;
            self._file = obj;
          }
          num3 = self;
          emit = self.emit;
          emit("compression-progress", self._file);
        }
      }));
    }
  };
  items[2] = obj;
  return callback2(CloudUploader, items);
}(importDefault(dependencyMap[22]));
const result = arg1(dependencyMap[23]).fileFinishedImporting("lib/uploader/native/CloudUploader.tsx");

export default tmp8;
