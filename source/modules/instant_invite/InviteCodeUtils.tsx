// Module ID: 4114
// Function ID: 34073
// Name: readSnowflake
// Dependencies: []
// Exports: generateInviteKeyFromUrlParams, getInviteInstanceId, getInviteKeySearchSuffix, parseExtraDataFromInviteKey

// Module 4114 (readSnowflake)
function readSnowflake(firstQueryStringValue) {
  let tmp;
  if ("string" === typeof firstQueryStringValue) {
    if (obj.isProbablyAValidSnowflake(firstQueryStringValue)) {
      tmp = firstQueryStringValue;
    }
    const obj = importDefault(dependencyMap[1]);
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
    obj[closure_4] = guildScheduledEventId;
  }
  if (null != targetChannelId) {
    obj[closure_5] = targetChannelId;
    if (null != targetMessageId) {
      obj[closure_6] = targetMessageId;
    }
  }
  const json = importDefault(dependencyMap[2]).stringify(obj);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = "event";
let closure_5 = "channel";
let closure_6 = "message";
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/instant_invite/InviteCodeUtils.tsx");

export { readSnowflake };
export const generateInviteKeyFromUrlParams = function generateInviteKeyFromUrlParams(inviteHostRemainingPath, search) {
  if (null == search) {
    return inviteHostRemainingPath;
  } else {
    let substr = search;
    if ("?" === search.charAt(0)) {
      substr = search.substring(1);
    }
    let obj = importDefault(dependencyMap[2]);
    const parsed = obj.parse(substr);
    const firstQueryStringValue = search(dependencyMap[3]).getFirstQueryStringValue(parsed[closure_4]);
    const obj2 = search(dependencyMap[3]);
    const tmp13 = readSnowflake(search(dependencyMap[3]).getFirstQueryStringValue(parsed[closure_5]));
    obj = { baseCode: inviteHostRemainingPath, guildScheduledEventId: firstQueryStringValue, targetChannelId: tmp13 };
    let tmp16;
    if (null != tmp13) {
      tmp16 = readSnowflake(search(dependencyMap[3]).getFirstQueryStringValue(parsed[closure_6]));
      const obj5 = search(dependencyMap[3]);
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
    const parsed = importDefault(dependencyMap[2]).parse(tmp3);
    const obj3 = importDefault(dependencyMap[2]);
    const firstQueryStringValue = arg1(dependencyMap[3]).getFirstQueryStringValue(parsed[closure_4]);
    const obj4 = arg1(dependencyMap[3]);
    const tmp17 = readSnowflake(arg1(dependencyMap[3]).getFirstQueryStringValue(parsed[closure_5]));
    obj = { baseCode: first, guildScheduledEventId: firstQueryStringValue, targetChannelId: tmp17 };
    let tmp8;
    if (null != tmp17) {
      obj = arg1(dependencyMap[3]);
      tmp8 = readSnowflake(obj.getFirstQueryStringValue(parsed[closure_6]));
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
