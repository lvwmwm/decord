// Module ID: 7074
// Function ID: 56644
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 7074 (_createForOfIteratorHelperLoose)
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
const AbortCodes = arg1(dependencyMap[6]).AbortCodes;
const FileUploadErrorTypes = arg1(dependencyMap[7]).FileUploadErrorTypes;
let importDefaultResult = importDefault(dependencyMap[8]);
importDefaultResult = new importDefaultResult("UploaderBase.tsx");
const tmp4 = (EventEmitter) => {
  class UploaderBase {
    constructor() {
      self = this;
      tmp = closure_4(this, UploaderBase);
      obj = closure_7(UploaderBase);
      tmp2 = closure_6;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, [], closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      f56677 = tmp2Result;
      tmp2Result._aborted = false;
      tmp2Result._errored = false;
      tmp2Result.files = [];
      tmp2Result._lastUpdate = 0;
      tmp2Result._loaded = 0;
      tmp2Result.alreadyStarted = false;
      tmp2Result._handleStart = (_cancel) => {
        tmp2Result._cancel = _cancel;
        if (!tmp2Result.alreadyStarted) {
          tmp2Result.emit("start", tmp2Result._file);
        }
        tmp2Result.alreadyStarted = true;
      };
      tmp2Result._handleProgress = (_loaded, currentSize) => {
        const timestamp = Date.now();
        let obj = tmp2Result(closure_2[9]);
        const rounded = Math.floor((_loaded - tmp2Result._loaded) / ((timestamp - tmp2Result._lastUpdate) / 1000));
        if (null != arg2) {
          const items = tmp2Result._file.items;
          if (null != items) {
            const item = items.forEach((item) => {
              item.item.progress = arg2[item.id];
            });
          }
        }
        arg2._lastUpdate = timestamp;
        arg2._loaded = _loaded;
        obj = {};
        const merged = Object.assign(tmp2Result._file);
        obj["currentSize"] = currentSize;
        obj["progress"] = obj.calculateProgress(_loaded, currentSize);
        obj["rate"] = rounded;
        arg2._file = obj;
        arg2.emit("progress", arg2._file);
      };
      tmp2Result._handleException = (arg0) => {
        let obj = {};
        obj = { type: constants.ERROR_SOURCE_UNKNOWN, msg: arg0.toString() };
        obj.reason = obj;
        tmp2Result._handleError(obj);
      };
      tmp2Result._handleAborted = () => {
        const result = tmp2Result.clearProcessingMessageInterval();
      };
      tmp2Result._handleError = (arg0) => {
        let body;
        let code;
        let reason;
        ({ code, reason, body } = arg0);
        const result = tmp2Result.clearProcessingMessageInterval();
        if (!tmp2Result._aborted) {
          tmp2Result._errored = true;
          const _JSON = JSON;
          const _HermesInternal = HermesInternal;
          closure_11.log("_handleError: " + code + " (" + JSON.stringify(reason) + ") for " + tmp2Result.id);
          tmp2Result.emit("error", tmp2Result._file, code, body, reason);
          tmp2Result.removeAllListeners();
        }
      };
      tmp2Result._handleComplete = (arg0) => {
        const result = tmp2Result.clearProcessingMessageInterval();
        closure_11.log("_handleComplete for " + tmp2Result.id);
        tmp2Result.emit("complete", tmp2Result._file, arg0);
        tmp2Result.removeAllListeners();
      };
      obj2 = f56662(UploaderBase[10]);
      tmp2Result.id = obj2.uniqueId("Uploader");
      obj = { marginHorizontal: "Reflect", paddingTop: "left", marginTop: "constructor", paddingBottom: "id", marginBottom: "fill", fontSize: "track", lineHeight: "state", textAlign: "formatToPlainString", marginTop: "LengthDelimited" };
      obj.id = tmp2Result.id;
      obj.items = undefined;
      tmp2Result._file = obj;
      return tmp2Result;
    }
  }
  const dependencyMap = UploaderBase;
  callback3(UploaderBase, EventEmitter);
  let obj = {
    key: "_fileSize",
    value() {
      const files = this.files;
      return files.reduce((arg0, currentSize) => {
        currentSize = currentSize.currentSize;
        let num = 0;
        if (null != currentSize) {
          num = currentSize;
        }
        return arg0 + num;
      }, 0);
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = { key: "compressAndCheckFileSize" };
  let closure_1 = callback(async function() {
    const self = this;
    let obj = callback(closure_2[11]);
    const first = self.files[0];
    let target;
    if (null != first) {
      const item = first.item;
      if (null != item) {
        target = item.target;
      }
    }
    const uploadTarget = obj.getUploadTarget(target);
    let obj2 = uploadTarget;
    if (self.files.length > uploadTarget.getMaxAttachmentsCount()) {
      const _HermesInternal2 = HermesInternal;
      closure_11.log("Too many attachments for " + self.id);
      obj = { code: constants.TOO_MANY_ATTACHMENTS };
      self._handleError(obj);
      return false;
    } else {
      obj = { location: "UploaderBase.compressAndCheckFileSize" };
      const kestrelConfig = callback(closure_2[12]).getKestrelConfig(obj);
      const _HermesInternal3 = HermesInternal;
      closure_11.log("compressing files for " + self.id);
      const tmp34 = callback2(self.files);
      const iter3 = tmp34();
      let iter2 = iter3;
      if (!iter3.done) {
        const value = iter2.value;
        yield value.reactNativeCompressAndExtractData();
        while (true) {
          let tmp6 = value;
          if (value.isCancelled()) {
            let tmp13 = closure_11;
            let tmp14 = value;
            let _HermesInternal = HermesInternal;
            let logResult2 = closure_11.log("compressAndCheckFileSize() file has been cancelled for compression - " + value.id);
          } else {
            let tmp7 = value;
            let currentSize = value.currentSize;
            let tmp8 = currentSize;
            let num = 0;
            if (null != currentSize) {
              num = currentSize;
            }
            if (0 === num) {
              break;
            } else {
              let tmp36 = callback;
              let tmp37 = closure_2;
              let obj11 = callback(closure_2[12]);
              let tmp38 = kestrelConfig;
              let tmp39 = uploadTarget;
              let tmp40 = value;
              let effectiveKestrelLimit = obj11.getEffectiveKestrelLimit(kestrelConfig, obj2.getMaxFileSize(value.channelId));
              let currentSize2 = value.currentSize;
              let tmp42 = currentSize2;
              let num2 = 0;
              if (null != currentSize2) {
                num2 = currentSize2;
              }
              let tmp9 = effectiveKestrelLimit;
              if (num2 > effectiveKestrelLimit) {
                let obj1 = {};
                let tmp10 = constants;
                obj1.code = constants.ENTITY_TOO_LARGE;
                obj2 = {};
                let tmp11 = constants2;
                obj2.type = constants2.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
                obj1.reason = obj2;
                let _handleErrorResult1 = self._handleError(obj1);
                let flag = false;
                return false;
              }
            }
          }
          let tmp16 = tmp34;
          let iter = tmp35();
          iter2 = iter;
        }
      }
      const obj9 = callback(closure_2[12]);
      const tmp35 = tmp34;
      let num3 = self._fileSize() > obj2.getMaxTotalAttachmentSize();
      if (num3) {
        const obj3 = { code: constants.ENTITY_TOO_LARGE };
        const obj4 = { type: constants2.POSTCOMPRESSION_SUM_TOO_LARGE };
        obj3.reason = obj4;
        self._handleError(obj3);
        num3 = 1;
      }
      return !num3;
    }
  });
  obj.value = function compressAndCheckFileSize() {
    return callback2(...arguments);
  };
  items[1] = obj;
  obj = {
    key: "setUploadingTextForUI",
    value() {
      let files;
      let files2;
      ({ files, files: files2 } = this);
      const someResult = files.some((isImage) => isImage.isImage);
      const _fileSizeResult = this._fileSize();
      closure_11.log("setUploadingTextForUI - total content: " + _fileSizeResult + " bytes and " + this.files.length + " attachments for " + this.id);
      const obj = {};
      const merged = Object.assign(this._file);
      obj["totalPostCompressionSize"] = _fileSizeResult;
      obj["currentSize"] = _fileSizeResult;
      obj["hasVideo"] = files2.some((isVideo) => isVideo.isVideo);
      obj["hasImage"] = someResult;
      obj["attachmentsCount"] = this.files.length;
      obj["items"] = this.files;
      this._file = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_recomputeProgress",
    value() {
      let loaded;
      let total;
      const result = this._recomputeProgressTotal();
      ({ loaded, total } = result);
      this._handleProgress(loaded, total, this._recomputeProgressByFile());
    }
  };
  items[4] = {
    key: "_recomputeProgressTotal",
    value() {
      const obj = {};
      const files = this.files;
      obj.loaded = files.reduce((arg0, loaded) => {
        loaded = loaded.loaded;
        let num = 0;
        if (null != loaded) {
          num = loaded;
        }
        return arg0 + num;
      }, 0);
      obj.total = this._fileSize();
      return obj;
    }
  };
  items[5] = {
    key: "_recomputeProgressByFile",
    value() {
      const obj = {};
      let closure_0 = obj;
      const files = this.files;
      const item = files.forEach((id) => {
        const obj = obj(closure_2[9]);
        obj[id.id] = obj.calculateProgress(id.loaded, id.currentSize);
      });
      return obj;
    }
  };
  items[6] = {
    key: "_addAttachmentsToPayload",
    value(arg0, arg1, arg2) {
      const merged = Object.assign(arg0);
      callback2(UploaderBase[10]);
      const items = [...arg2];
      return callback2(UploaderBase[10]).set({}, arg1, items);
    }
  };
  items[7] = {
    key: "clearProcessingMessageInterval",
    value() {
      const self = this;
      if (null != this.processingMessageChangeInterval) {
        const _clearInterval = clearInterval;
        clearInterval(self.processingMessageChangeInterval);
        self.processingMessageChangeInterval = undefined;
      }
    }
  };
  items[8] = {
    key: "cancel",
    value() {
      const self = this;
      closure_11.log("cancel() for " + this.id);
      if (!this._aborted) {
        self._aborted = true;
        const _cancel = self._cancel;
        if (null != _cancel) {
          _cancel.call(self);
        }
        const files = self.files;
        const item = files.forEach((cancel) => cancel.cancel());
        self._handleComplete();
      }
    }
  };
  const obj7 = { key: "cancelItem" };
  let closure_0 = callback(async function(arg0) {
    const self = this;
    closure_11.log("Cancel called for " + self.id + " for item " + arg0);
    const files = self.files;
    const found = files.find((id) => id.id === id);
    if (null != found) {
      if (!found.isCancelled()) {
        const files1 = self.files;
        const index = files1.indexOf(found);
        const files2 = self.files;
        const items = [];
        const files3 = self.files;
        let arraySpreadResult = HermesBuiltin.arraySpread(files2.slice(0, index), 0);
        arraySpreadResult = HermesBuiltin.arraySpread(files3.slice(index + 1), arraySpreadResult);
        self.files = items;
        const obj = {};
        const merged = Object.assign(self._file);
        obj["items"] = self.files;
        self._file = obj;
        yield arg0(closure_2[13]).cancelGetAttachmentFile(found);
        found.cancel();
        self.emit("cancel-upload-item", self._file);
        if (0 === self.files.length) {
          self.cancel();
        }
        const obj3 = arg0(closure_2[13]);
      }
    }
  });
  obj7.value = function cancelItem(itemId) {
    return callback(...arguments);
  };
  items[9] = obj7;
  items[10] = {
    key: "upload",
    value(items) {
      const self = this;
      if (null != this._cancel) {
        const _Error = Error;
        const error = new Error("Uploader.upload(...): An upload is already in progress.");
        throw error;
      } else {
        const _Date = Date;
        self._lastUpdate = Date.now();
        self._loaded = 0;
        const obj = { marginHorizontal: "Reflect", paddingTop: "left", marginTop: "constructor", paddingBottom: "id", marginBottom: "fill", fontSize: "track", lineHeight: "state", textAlign: "formatToPlainString", marginTop: "LengthDelimited", id: self.id, items };
        self._file = obj;
      }
    }
  };
  return callback2(UploaderBase, items);
}(arg1(dependencyMap[14]).EventEmitter);
const result = arg1(dependencyMap[15]).fileFinishedImporting("lib/uploader/UploaderBase.tsx");

export default tmp4;
