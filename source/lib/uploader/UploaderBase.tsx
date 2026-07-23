// Module ID: 7084
// Function ID: 56712
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 6, 7, 15, 17, 18, 653, 4123, 3, 4672, 22, 4706, 4711, 4673, 631, 2]

// Module 7084 (_createForOfIteratorHelperLoose)
import _inherits from "_inherits";
import ME from "ME";
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import closure_8 from "_inherits";
import { AbortCodes } from "ME";
import { FileUploadErrorTypes } from "MESSAGE_GROUP_SPACING";
import importDefaultResult from "_possibleConstructorReturn";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
importDefaultResult = new importDefaultResult("UploaderBase.tsx");
const tmp4 = ((EventEmitter) => {
  class UploaderBase {
    constructor() {
      self = this;
      tmp = outer1_4(this, UploaderBase);
      obj = outer1_7(UploaderBase);
      tmp2 = outer1_6;
      if (outer1_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, [], outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
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
        let obj = tmp2Result(UploaderBase[9]);
        const rounded = Math.floor((_loaded - tmp2Result._loaded) / ((timestamp - tmp2Result._lastUpdate) / 1000));
        if (null != arg2) {
          const items = tmp2Result._file.items;
          if (null != items) {
            const item = items.forEach((item) => {
              item.item.progress = table[item.id];
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
        obj = { type: outer2_10.ERROR_SOURCE_UNKNOWN, msg: arg0.toString() };
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
          outer2_11.log("_handleError: " + code + " (" + JSON.stringify(reason) + ") for " + tmp2Result.id);
          tmp2Result.emit("error", tmp2Result._file, code, body, reason);
          tmp2Result.removeAllListeners();
        }
      };
      tmp2Result._handleComplete = (arg0) => {
        const result = tmp2Result.clearProcessingMessageInterval();
        outer2_11.log("_handleComplete for " + tmp2Result.id);
        tmp2Result.emit("complete", tmp2Result._file, arg0);
        tmp2Result.removeAllListeners();
      };
      obj2 = f56730(UploaderBase[10]);
      tmp2Result.id = obj2.uniqueId("Uploader");
      obj = { id: null, currentSize: 0, totalPreCompressionSize: 0, compressionProgress: 0, progress: 0, rate: 0, hasImage: false, hasVideo: false, attachmentsCount: 0 };
      obj.id = tmp2Result.id;
      obj.items = undefined;
      tmp2Result._file = obj;
      return tmp2Result;
    }
  }
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
  let items = [obj, , , , , , , , , , ];
  obj = { key: "compressAndCheckFileSize" };
  let closure_1 = callback(async function() {
    const self = this;
    let obj = callback(UploaderBase[11]);
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
      outer2_11.log("Too many attachments for " + self.id);
      obj = { code: outer2_9.TOO_MANY_ATTACHMENTS };
      self._handleError(obj);
      return false;
    } else {
      obj = { location: "UploaderBase.compressAndCheckFileSize" };
      const kestrelConfig = callback(UploaderBase[12]).getKestrelConfig(obj);
      const _HermesInternal3 = HermesInternal;
      outer2_11.log("compressing files for " + self.id);
      const tmp34 = outer2_12(self.files);
      const iter3 = tmp34();
      let iter2 = iter3;
      if (!iter3.done) {
        const value = iter2.value;
        yield value.reactNativeCompressAndExtractData();
        while (true) {
          let tmp6 = value;
          if (value.isCancelled()) {
            let tmp13 = outer2_11;
            let tmp14 = value;
            let _HermesInternal = HermesInternal;
            let logResult2 = outer2_11.log("compressAndCheckFileSize() file has been cancelled for compression - " + value.id);
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
              let tmp37 = UploaderBase;
              let obj11 = callback(UploaderBase[12]);
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
                let tmp10 = outer2_9;
                obj1.code = outer2_9.ENTITY_TOO_LARGE;
                obj2 = {};
                let tmp11 = outer2_10;
                obj2.type = outer2_10.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
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
      const obj9 = callback(UploaderBase[12]);
      tmp35 = tmp34;
      let num3 = self._fileSize() > obj2.getMaxTotalAttachmentSize();
      if (num3) {
        const obj3 = { code: outer2_9.ENTITY_TOO_LARGE };
        const obj4 = { type: outer2_10.POSTCOMPRESSION_SUM_TOO_LARGE };
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
      outer1_11.log("setUploadingTextForUI - total content: " + _fileSizeResult + " bytes and " + this.files.length + " attachments for " + this.id);
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
      let obj = {};
      const files = this.files;
      const item = files.forEach((id) => {
        obj = obj(UploaderBase[9]);
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
      outer1_11.log("cancel() for " + this.id);
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
    const callback = arg0;
    outer2_11.log("Cancel called for " + self.id + " for item " + arg0);
    const files = self.files;
    const found = files.find((id) => id.id === closure_0);
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
        yield callback(UploaderBase[13]).cancelGetAttachmentFile(found);
        found.cancel();
        self.emit("cancel-upload-item", self._file);
        if (0 === self.files.length) {
          self.cancel();
        }
        const obj3 = callback(UploaderBase[13]);
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
        const obj = { id: self.id, currentSize: 0, totalPreCompressionSize: 0, compressionProgress: 0, progress: 0, rate: 0, hasImage: false, hasVideo: false, attachmentsCount: 0, items };
        self._file = obj;
      }
    }
  };
  return callback2(UploaderBase, items);
})(require("EventEmitter").EventEmitter);
let result = require("_defineProperties").fileFinishedImporting("lib/uploader/UploaderBase.tsx");

export default tmp4;
