// Module ID: 4116
// Function ID: 34085
// Name: readSnowflake
// Dependencies: [57, 21, 1440, 4117, 2]
// Exports: generateInviteKeyFromUrlParams, getInviteInstanceId, getInviteKeySearchSuffix, parseExtraDataFromInviteKey

// Module 4116 (readSnowflake)
import _slicedToArray from "_slicedToArray";

const require = arg1;
function readSnowflake(firstQueryStringValue) {
  let tmp;
  if ("string" === typeof firstQueryStringValue) {
    if (obj.isProbablyAValidSnowflake(firstQueryStringValue)) {
      tmp = firstQueryStringValue;
    }
    obj = importDefault(21);
  }
  return tmp;
}
function generateInviteKeyFromExtraData(source) {
  let baseCode;
  let guildScheduledEventId;
  let targetChannelId;
  let targetMessageId;
  ({ baseCode, guildScheduledEventId, targetChannelId, targetMessageId } = source);
  const obj = {};
  if (null != guildScheduledEventId) {
    obj[event] = guildScheduledEventId;
  }
  if (null != targetChannelId) {
    obj[channel] = targetChannelId;
    if (null != targetMessageId) {
      obj[message] = targetMessageId;
    }
  }
  const json = importDefault(1440).stringify(obj);
  let combined = baseCode;
  if ("" !== json) {
    const _HermesInternal = HermesInternal;
    combined = "" + baseCode + "?" + json;
  }
  return combined;
}
function parseInviteCodeFromInviteKey(code) {
  return callback(code.split("?"), 1)[0];
}
const event = "event";
const channel = "channel";
const message = "message";
const result = require("parse").fileFinishedImporting("modules/instant_invite/InviteCodeUtils.tsx");

export { readSnowflake };
export const generateInviteKeyFromUrlParams = function generateInviteKeyFromUrlParams(inviteHostRemainingPath, search) {
  if (null == search) {
    return inviteHostRemainingPath;
  } else {
    let substr = search;
    if ("?" === search.charAt(0)) {
      substr = search.substring(1);
    }
    let obj = importDefault(1440);
    const parsed = obj.parse(substr);
    const firstQueryStringValue = require(4117) /* getFirstQueryStringValue */.getFirstQueryStringValue(parsed[event]);
    const obj2 = require(4117) /* getFirstQueryStringValue */;
    const tmp13 = readSnowflake(require(4117) /* getFirstQueryStringValue */.getFirstQueryStringValue(parsed[channel]));
    obj = { baseCode: inviteHostRemainingPath, guildScheduledEventId: firstQueryStringValue, targetChannelId: tmp13 };
    let tmp16;
    if (null != tmp13) {
      tmp16 = readSnowflake(require(4117) /* getFirstQueryStringValue */.getFirstQueryStringValue(parsed[message]));
      const obj5 = require(4117) /* getFirstQueryStringValue */;
    }
    obj.targetMessageId = tmp16;
    return generateInviteKeyFromExtraData(obj);
  }
};
export { generateInviteKeyFromExtraData };
export const parseExtraDataFromInviteKey = function parseExtraDataFromInviteKey(inviteKey) {
  const tmp = callback(inviteKey.split("?"), 2);
  const first = tmp[0];
  if (null == tmp[1]) {
    let obj = { baseCode: first };
    return obj;
  } else {
    const parsed = importDefault(1440).parse(tmp3);
    const obj3 = importDefault(1440);
    const firstQueryStringValue = require(4117) /* getFirstQueryStringValue */.getFirstQueryStringValue(parsed[event]);
    const obj4 = require(4117) /* getFirstQueryStringValue */;
    const tmp17 = readSnowflake(require(4117) /* getFirstQueryStringValue */.getFirstQueryStringValue(parsed[channel]));
    obj = { baseCode: first, guildScheduledEventId: firstQueryStringValue, targetChannelId: tmp17 };
    let tmp8;
    if (null != tmp17) {
      obj = require(4117) /* getFirstQueryStringValue */;
      tmp8 = readSnowflake(obj.getFirstQueryStringValue(parsed[message]));
    }
    obj.targetMessageId = tmp8;
    return obj;
  }
};
export { parseInviteCodeFromInviteKey };
export const getInviteKeySearchSuffix = function getInviteKeySearchSuffix(inviteKeyFromExtraData) {
  const index = inviteKeyFromExtraData.indexOf("?");
  let str = "";
  if (index >= 0) {
    str = inviteKeyFromExtraData.substring(index);
  }
  return str;
};
export const getInviteInstanceId = function getInviteInstanceId(code, id) {
  if (null != id) {
    const _HermesInternal = HermesInternal;
    return "" + id + ":" + parseInviteCodeFromInviteKey(code);
  }
};
