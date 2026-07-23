// Module ID: 7109
// Function ID: 57141
// Name: _callSuper
// Dependencies: [7, 6, 15, 17, 18, 162, 1348, 653, 1212, 7076, 2]
// Exports: getAutomodErrorMessage

// Module 7109 (_callSuper)
import ME from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importDefaultResult from "_wrapNativeSuper";
import closure_7 from "_isNativeReflectConstruct";
import { AbortCodes } from "ME";
import set from "_possibleConstructorReturn";

const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getAutomodErrorMessageFromErrorResponse(errorResponseBody, id) {
  let code;
  let message;
  if (null == errorResponseBody) {
    return null;
  } else {
    ({ code, message } = errorResponseBody);
    if (set.has(code)) {
      if (null != message) {
        return message;
      } else if (null == id) {
        return null;
      } else {
        const channel = store.getChannel(id);
        if (null != channel) {
          if (channel.isThread()) {
            const intl3 = require(1212) /* getSystemLocale */.intl;
            return intl3.string(require(1212) /* getSystemLocale */.t.DVdG9E);
          }
        }
        if (null == channel) {
          return null;
        }
        if (code === AbortCodes.AUTOMOD_TITLE_BLOCKED) {
          const intl2 = require(1212) /* getSystemLocale */.intl;
          return intl2.string(require(1212) /* getSystemLocale */.t.ipgKDg);
        } else if (code === AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
          const intl = require(1212) /* getSystemLocale */.intl;
          return intl.string(require(1212) /* getSystemLocale */.t.ipgKDg);
        }
      }
    } else {
      return null;
    }
  }
}
function getAutomodErrorMessageFromMessageData(message) {
  const channel = store.getChannel(message.message.channelId);
  if (obj2.isMessageDataEdit(message)) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl4.string(require(1212) /* getSystemLocale */.t.bU6o0z);
  } else {
    if (null != channel) {
      if (channel.isThread()) {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        stringResult = intl3.string(require(1212) /* getSystemLocale */.t.DVdG9E);
      }
    }
    if (null == channel) {
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1212) /* getSystemLocale */.t.zQ69pv);
    }
    const intl2 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl2.string(require(1212) /* getSystemLocale */.t.ipgKDg);
  }
  return stringResult;
}
let items = [, , ];
({ AUTOMOD_MESSAGE_BLOCKED: arr[0], AUTOMOD_TITLE_BLOCKED: arr[1], AUTOMOD_INVALID_RUST_SERVICE_RESPONSE: arr[2] } = AbortCodes);
const tmp3 = ((arg0) => {
  class InvalidKeywordError {
    constructor() {
      tmp = outer1_3(this, InvalidKeywordError);
      return outer1_10(this, InvalidKeywordError, arguments);
    }
  }
  callback3(InvalidKeywordError, arg0);
  return callback(InvalidKeywordError);
})(importDefaultResult(Error));
let set = new Set(items);
let result = set.fileFinishedImporting("modules/guild_automod/AutomodErrorUtils.tsx");

export const InvalidKeywordError = tmp3;
export const InvalidRegexPatternError = ((arg0) => {
  class InvalidRegexPatternError {
    constructor() {
      tmp = outer1_3(this, InvalidRegexPatternError);
      return outer1_10(this, InvalidRegexPatternError, arguments);
    }
  }
  callback3(InvalidRegexPatternError, arg0);
  return callback(InvalidRegexPatternError);
})(importDefaultResult(Error));
export const AUTOMOD_ERROR_CODES = set;
export { getAutomodErrorMessageFromErrorResponse };
export { getAutomodErrorMessageFromMessageData };
export const getAutomodErrorMessage = function getAutomodErrorMessage(messageData, errorResponseBody) {
  const tmp = getAutomodErrorMessageFromErrorResponse(errorResponseBody);
  if (null != tmp) {
    return tmp;
  } else if (null == messageData) {
    const intl = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl.string(require(1212) /* getSystemLocale */.t.zQ69pv);
  } else {
    stringResult = getAutomodErrorMessageFromMessageData(messageData);
  }
};
