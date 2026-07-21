// Module ID: 7104
// Function ID: 57096
// Name: _callSuper
// Dependencies: []
// Exports: getAutomodErrorMessage

// Module 7104 (_callSuper)
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
  return closure_4(arg0, constructResult);
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
            const intl3 = id(dependencyMap[8]).intl;
            return intl3.string(id(dependencyMap[8]).t.DVdG9E);
          }
        }
        if (null == channel) {
          return null;
        }
        if (code === AbortCodes.AUTOMOD_TITLE_BLOCKED) {
          const intl2 = id(dependencyMap[8]).intl;
          return intl2.string(id(dependencyMap[8]).t.ipgKDg);
        } else if (code === AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
          const intl = id(dependencyMap[8]).intl;
          return intl.string(id(dependencyMap[8]).t.ipgKDg);
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
    const intl4 = arg1(dependencyMap[8]).intl;
    let stringResult = intl4.string(arg1(dependencyMap[8]).t.bU6o0z);
  } else {
    if (null != channel) {
      if (channel.isThread()) {
        const intl3 = arg1(dependencyMap[8]).intl;
        stringResult = intl3.string(arg1(dependencyMap[8]).t.DVdG9E);
      }
    }
    if (null == channel) {
      const intl = arg1(dependencyMap[8]).intl;
      stringResult = intl.string(arg1(dependencyMap[8]).t.zQ69pv);
    }
    const intl2 = arg1(dependencyMap[8]).intl;
    stringResult = intl2.string(arg1(dependencyMap[8]).t.ipgKDg);
  }
  return stringResult;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const importDefaultResult = importDefault(dependencyMap[5]);
let closure_7 = importDefault(dependencyMap[6]);
const AbortCodes = arg1(dependencyMap[7]).AbortCodes;
const items = [, , ];
({ AUTOMOD_MESSAGE_BLOCKED: arr[0], AUTOMOD_TITLE_BLOCKED: arr[1], AUTOMOD_INVALID_RUST_SERVICE_RESPONSE: arr[2] } = AbortCodes);
const tmp3 = (arg0) => {
  class InvalidKeywordError {
    constructor() {
      tmp = closure_3(this, InvalidKeywordError);
      return closure_10(this, InvalidKeywordError, arguments);
    }
  }
  const arg1 = InvalidKeywordError;
  callback3(InvalidKeywordError, arg0);
  return callback(InvalidKeywordError);
}(importDefaultResult(Error));
const set = new Set(items);
const tmp4 = (arg0) => {
  class InvalidRegexPatternError {
    constructor() {
      tmp = closure_3(this, InvalidRegexPatternError);
      return closure_10(this, InvalidRegexPatternError, arguments);
    }
  }
  const arg1 = InvalidRegexPatternError;
  callback3(InvalidRegexPatternError, arg0);
  return callback(InvalidRegexPatternError);
}(importDefaultResult(Error));
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_automod/AutomodErrorUtils.tsx");

export const InvalidKeywordError = tmp3;
export const InvalidRegexPatternError = tmp4;
export const AUTOMOD_ERROR_CODES = set;
export { getAutomodErrorMessageFromErrorResponse };
export { getAutomodErrorMessageFromMessageData };
export const getAutomodErrorMessage = function getAutomodErrorMessage(messageData, errorResponseBody) {
  const tmp = getAutomodErrorMessageFromErrorResponse(errorResponseBody);
  if (null != tmp) {
    return tmp;
  } else if (null == messageData) {
    const intl = errorResponseBody(dependencyMap[8]).intl;
    let stringResult = intl.string(errorResponseBody(dependencyMap[8]).t.zQ69pv);
  } else {
    stringResult = getAutomodErrorMessageFromMessageData(messageData);
  }
};
