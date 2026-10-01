// Module ID: 7259
// Function ID: 7260
// Name: UploaderBase
// Dependencies: [5, 1074, 4829, 3, 568, 12, 5488, 5448, 5449, 2]

// Module 7259 (UploaderBase)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import _mod568 from "module_568" /* 568 */;
import Constants from "Constants" /* 1074 */;
import MessageConstants from "MessageConstants" /* 4829 */;
import uploader_UploadUtils from "uploader/UploadUtils" /* 5448 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let _self, c2, c8, c9, constants, id;

const AbortCodes = Constants.AbortCodes;
const FileUploadErrorTypes = MessageConstants.FileUploadErrorTypes;
const tmp2 = new LoggerDefault("UploaderBase.tsx");
const metroRequire = tmp2;
const EventEmitter = _mod568.EventEmitter;
class UploaderBase extends EventEmitter {
  constructor() {
    const tmp3 = new UploaderBase(tmp2, new.target, this, tmp);
    let closure_0 = tmp3;
    tmp3._aborted = false;
    tmp3._errored = false;
    tmp3.files = [];
    tmp3._lastUpdate = 0;
    tmp3._loaded = 0;
    tmp3.alreadyStarted = false;
    tmp3._handleStart = function _handleStart(_cancel) {
      closure_0._cancel = _cancel;
      if (!closure_0.alreadyStarted) {
        closure_0.emit("start", closure_0._file);
      }
      closure_0.alreadyStarted = true;
    };
    tmp3._handleProgress = function _handleProgress(loaded, total, arg2) {
      closure_0 = arg2;
      const timestamp = Date.now();
      const obj = uploader_UploadUtils;
      const calculateProgressResult = obj.calculateProgress(loaded, total);
      const rounded = Math.floor((loaded - closure_0._loaded) / ((timestamp - closure_0._lastUpdate) / 1000));
      if (null != arg2) {
        const items = obj2._file.items;
        if (items != null) {
          const item = items.forEach((item) => {
            item.item.progress = closure_0[item.id];
          });
        }
      }
      closure_0._lastUpdate = timestamp;
      closure_0._loaded = loaded;
      const obj3 = { currentSize: total, progress: calculateProgressResult, rate: rounded };
      const merged = Object.assign(obj2._file);
      closure_0._file = obj3;
      closure_0.emit("progress", closure_0._file);
    };
    tmp3._handleException = function _handleException(arg0, INVALID_FILE_ASSET) {
      const obj = { code: INVALID_FILE_ASSET, reason: { type: FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN, msg: arg0.toString() } };
      ({ type: FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN, msg: arg0.toString() });
      closure_0._handleError(obj);
    };
    tmp3._handleAborted = function _handleAborted() {
      const result = closure_0.clearProcessingMessageInterval();
    };
    tmp3._handleError = function _handleError(arg0) {
      let body;
      let code;
      let reason;
      ({ code, reason, body } = arg0);
      const result = closure_0.clearProcessingMessageInterval();
      if (!closure_0._aborted) {
        closure_0._errored = true;
        const _JSON = JSON;
        const _HermesInternal = HermesInternal;
        logger.log("_handleError: " + code + " (" + JSON.stringify(reason) + ") for " + closure_0.id);
        closure_0.emit("error", closure_0._file, code, body, reason);
        closure_0.removeAllListeners();
      }
    };
    tmp3._handleComplete = function _handleComplete(arg0) {
      const result = closure_0.clearProcessingMessageInterval();
      logger.log("_handleComplete for " + closure_0.id);
      closure_0.emit("complete", closure_0._file, arg0);
      closure_0.removeAllListeners();
    };
    let obj = _modDef12;
    tmp3.id = obj.uniqueId("Uploader");
    tmp3._file = { id: tmp3.id, currentSize: 0, totalPreCompressionSize: 0, compressionProgress: 0, progress: 0, rate: 0, hasImage: false, hasVideo: false, attachmentsCount: 0, items: "channel" };
    return tmp3;
  }
  _fileSize() {
    const files = this.files;
    return files.reduce((acc, currentSize) => {
      let num = currentSize.currentSize;
      if (num == null) {
        num = 0;
      }
      return acc + num;
    }, 0);
  }
  compressAndCheckFileSize() {
    const self = this;
    return (async (arg0, value) => {
      let closure_0;
      let obj7;
      let obj9;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        while (true) {
          let constants2;
          let uploadTarget;
          let files;
          let maxFileSize;
          c9 = 2;
          let tmp4 = c8;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              constants2 = tmp;
              constants = tmp4;
              uploadTarget = undefined;
              files = undefined;
              maxFileSize = undefined;
              let tmp79 = _self(c2[6]);
              let first = self.files[0];
              let target;
              let getUploadTarget = tmp79.getUploadTarget;
              if (first != null) {
                let item = first.item;
                if (item != null) {
                  target = item.target;
                }
              }
              uploadTarget = getUploadTarget(target);
              if (self.files.length > uploadTarget.getMaxAttachmentsCount()) {
                let _HermesInternal2 = HermesInternal;
                let logResult = logger.log("Too many attachments for " + self.id);
                let obj4 = { code: constants.TOO_MANY_ATTACHMENTS };
                let _handleErrorResult = self._handleError(obj4);
                c9 = 3;
                return { value: false, done: true };
              } else {
                let _HermesInternal3 = HermesInternal;
                let logResult1 = logger.log("compressing files for " + self.id);
                files = self.files;
                _self = files[Symbol.iterator]();
              }
            }
          } else if (1 === tmp4) {
            let c7 = 0;
            _self.return();
            throw logger;
          } else if (2 === tmp4) {
            c7 = 1;
            let closure_3 = logger;
            if (files.isCancelled()) {
              c7 = 0;
            } else {
              let _handleExceptionResult = closure_133_0._handleException(closure_3, constants.INVALID_FILE_ASSET);
              c7 = 0;
              _self.return();
              c9 = 3;
              return { value: false, done: true };
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            _self.return();
            c9 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            if (files.isCancelled()) {
              let _HermesInternal = HermesInternal;
              let logResult2 = logger.log("compressAndCheckFileSize() file has been cancelled for compression - " + files.id);
              c7 = 0;
            } else {
              let currentSize = files.currentSize;
              c2 = currentSize;
              if (currentSize == null) {
                c2 = 0;
              }
              if (0 === c2) {
                let obj6 = { code: constants.ENTITY_EMPTY };
                let _handleErrorResult1 = closure_133_0._handleError(obj6);
                c7 = 0;
                _self.return();
                c9 = 3;
                return { value: false, done: true };
              } else {
                maxFileSize = uploadTarget.getMaxFileSize(files.channelId);
                let currentSize2 = files.currentSize;
                let c3 = currentSize2;
                if (currentSize2 == null) {
                  c3 = 0;
                }
                if (c3 > maxFileSize) {
                  let obj = { code: constants.ENTITY_TOO_LARGE, reason: obj7 };
                  obj7 = { type: constants2.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE };
                  let _handleErrorResult2 = closure_133_0._handleError(obj);
                  c7 = 0;
                  _self.return();
                  c9 = 3;
                  return { value: false, done: true };
                } else {
                  c7 = 1;
                }
              }
            }
            c7 = 0;
          }
          if (_self === undefined) {
            let _fileSizeResult = closure_133_0._fileSize();
            let flag = _fileSizeResult <= uploadTarget.getMaxTotalAttachmentSize();
            if (!flag) {
              let obj8 = { code: constants.ENTITY_TOO_LARGE, reason: obj9 };
              obj9 = { type: constants2.POSTCOMPRESSION_SUM_TOO_LARGE };
              let _handleErrorResult3 = closure_133_0._handleError(obj8);
              flag = false;
            }
            c9 = 3;
            let obj10 = { value: flag, done: true };
            return obj10;
          } else {
            c7 = 1;
            files = tmp44;
            if (!files.isCancelled()) {
              c7 = 2;
              c8 = 3;
              c9 = 1;
              let obj11 = { value: files.reactNativeCompressAndExtractData(), done: false };
              return obj11;
            }
          }
        }
      }
    })();
  }
  setUploadingTextForUI() {
    const files = this.files;
    const files2 = this.files;
    const someResult = files.some((isImage) => isImage.isImage);
    const someResult1 = files2.some((isVideo) => isVideo.isVideo);
    const _fileSizeResult = this._fileSize();
    logger.log("setUploadingTextForUI - total content: " + _fileSizeResult + " bytes and " + this.files.length + " attachments for " + this.id);
    const obj = { totalPostCompressionSize: _fileSizeResult, currentSize: _fileSizeResult, hasVideo: someResult1, hasImage: someResult, attachmentsCount: this.files.length, items: this.files };
    const merged = Object.assign(this._file);
    this._file = obj;
  }
  _recomputeProgress() {
    let loaded;
    let total;
    const result = this._recomputeProgressTotal();
    ({ loaded, total } = result);
    this._handleProgress(loaded, total, this._recomputeProgressByFile());
  }
  _recomputeProgressTotal() {
    let _fileSizeResult;
    let files;
    const obj = {
      loaded: files.reduce((acc, loaded) => {
        let num = loaded.loaded;
        if (num == null) {
          num = 0;
        }
        return acc + num;
      }, 0),
      total: _fileSizeResult
    };
    files = this.files;
    _fileSizeResult = this._fileSize();
    return obj;
  }
  _recomputeProgressByFile() {
    let obj = {};
    const files = this.files;
    const item = files.forEach((id) => {
      id = id.id;
      obj = uploader_UploadUtils;
      obj[id] = obj.calculateProgress(id.loaded, id.currentSize);
    });
    return obj;
  }
  _addAttachmentsToPayload(arg0, arg1, arg2) {
    const obj = {};
    const merged = Object.assign(arg0);
    _modDef12;
    const items = [...arg2];
    const obj2 = _modDef12;
    return obj2.set(obj, arg1, items);
  }
  clearProcessingMessageInterval() {
    const self = this;
    if (null != this.processingMessageChangeInterval) {
      const _clearInterval = clearInterval;
      clearInterval(self.processingMessageChangeInterval);
      self.processingMessageChangeInterval = undefined;
    }
  }
  cancel() {
    const self = this;
    logger.log("cancel() for " + this.id);
    if (!this._aborted) {
      self._aborted = true;
      const _cancel = self._cancel;
      if (_cancel != null) {
        _cancel();
      }
      const files = self.files;
      const item = files.forEach((cancel) => cancel.cancel());
      self._handleComplete();
    }
  }
  cancelItem(itemId) {
    const self = this;
    return (async (arg0, value) => {
      let closure_0;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp;
              const _HermesInternal = HermesInternal;
              logger.log("Cancel called for " + self.id + " for item " + itemId);
              const files = self.files;
              const found = files.find((id) => id.id === closure_1_0);
              if (null != found) {
                if (!found.isCancelled()) {
                  const files1 = self.files;
                  const index = files1.indexOf(found);
                  itemId = 0;
                  const files2 = self.files;
                  const items = [];
                  itemId = HermesBuiltin.arraySpread(items, files2.slice(0, index), itemId);
                  const files3 = self.files;
                  itemId = HermesBuiltin.arraySpread(items, files3.slice(index + 1), itemId);
                  self.files = items;
                  const obj5 = { items: self.files };
                  const merged = Object.assign(self._file);
                  self._file = obj5;
                  found.cancel();
                  const obj3 = itemId(c2[8]);
                  c2 = 1;
                  c3 = 1;
                  const obj6 = { value: obj3.cancelGetAttachmentFile(found), done: false };
                  return obj6;
                }
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_129_1.emit("cancel-upload-item", closure_129_1._file);
            if (0 === closure_129_1.files.length) {
              closure_129_1.cancel();
            }
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp28) {
          c3 = 3;
          throw tmp28;
        }
      }
    })();
  }
  upload(items) {
    const self = this;
    if (null != this._cancel) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
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
}
const prototype = UploaderBase.prototype;
let result = size.fileFinishedImporting("lib/uploader/UploaderBase.tsx");

export default UploaderBase;
