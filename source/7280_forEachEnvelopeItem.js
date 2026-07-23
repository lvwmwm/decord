// Module ID: 7280
// Function ID: 58657
// Name: forEachEnvelopeItem
// Dependencies: [65, 57, 7237, 7281, 7242, 7283]
// Exports: addItemToEnvelope, createAttachmentEnvelopeItem, createEnvelope, createEventEnvelopeHeaders, createSpanEnvelopeItem, envelopeContainsItemType, envelopeItemTypeToDataCategory, getSdkMetadataForEnvelopeHeader, parseEnvelope, serializeEnvelope

// Module 7280 (forEachEnvelopeItem)
import _toConsumableArray from "_toConsumableArray";
import _slicedToArray from "_slicedToArray";

function forEachEnvelopeItem(arg0, arg1) {
  const iter = arg0[1][Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = arg1;
    if (arg1(nextResult, nextResult[0].type)) {
      iter.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
function encodeUTF8(arg0) {
  if (require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.__SENTRY__) {
    if (require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.__SENTRY__.encodePolyfill) {
      const __SENTRY__ = require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.__SENTRY__;
      let encodePolyfillResult = __SENTRY__.encodePolyfill(arg0);
    }
    return encodePolyfillResult;
  }
  const textEncoder = new TextEncoder();
  encodePolyfillResult = textEncoder.encode(arg0);
}
let closure_4 = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", profile_chunk: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor", feedback: "feedback", span: "span", statsd: "metric_bucket", raw_security: "security" };

export const addItemToEnvelope = function addItemToEnvelope(arg0, arg1) {
  const tmp = _slicedToArray(arg0, 2);
  const items = [tmp[0], ];
  const items1 = [];
  const items2 = [arg1];
  items[1] = items1.concat(_toConsumableArray(tmp[1]), items2);
  return items;
};
export const createAttachmentEnvelopeItem = function createAttachmentEnvelopeItem(data) {
  if ("string" === typeof data.data) {
    data = encodeUTF8(data.data);
  } else {
    data = data.data;
  }
  let obj = require(7242) /* addNonEnumerableProperty */;
  obj = { type: "attachment", length: data.length };
  ({ filename: obj2.filename, contentType: obj2.content_type, attachmentType: obj2.attachment_type } = data);
  const items = [obj.dropUndefinedKeys(obj), data];
  return items;
};
export const createEnvelope = function createEnvelope(arg0) {
  const items = [arg0, ];
  if (arguments.length > 1) {
    items[1] = [];
    return items;
  }
};
export const createEventEnvelopeHeaders = function createEventEnvelopeHeaders(event_id, sdk) {
  let obj = { event_id: event_id.event_id, sent_at: new Date().toISOString() };
  let tmp2 = sdk;
  if (sdk) {
    obj = { sdk };
    tmp2 = obj;
  }
  let tmp4 = !tmp3;
  if (!!arg2) {
    tmp4 = arg3;
  }
  if (tmp4) {
    obj = { dsn: require(7283) /* dsnFromString */.dsnToString(arg3) };
    tmp4 = obj;
    const obj5 = require(7283) /* dsnFromString */;
  }
  let tmp7 = tmp;
  if (event_id.sdkProcessingMetadata && event_id.sdkProcessingMetadata.dynamicSamplingContext) {
    const obj1 = {};
    const _Object = Object;
    obj1.trace = require(7242) /* addNonEnumerableProperty */.dropUndefinedKeys(Object.assign({}, tmp));
    tmp7 = obj1;
    const obj7 = require(7242) /* addNonEnumerableProperty */;
  }
  return Object.assign(obj, tmp2, tmp4, tmp7);
};
export const createSpanEnvelopeItem = function createSpanEnvelopeItem(arg0) {
  const items = [{ type: "span" }, arg0];
  return items;
};
export const envelopeContainsItemType = function envelopeContainsItemType(arg0, arg1) {
  let closure_0 = arg1;
  return forEachEnvelopeItem(arg0, (arg0, arg1) => closure_0.includes(arg1));
};
export const envelopeItemTypeToDataCategory = function envelopeItemTypeToDataCategory(arg0) {
  return table[arg0];
};
export { forEachEnvelopeItem };
export const getSdkMetadataForEnvelopeHeader = function getSdkMetadataForEnvelopeHeader(sdk) {
  if (sdk) {
    if (sdk.sdk) {
      const obj = {};
      ({ name: obj.name, version: obj.version } = sdk.sdk);
      return obj;
    }
  }
};
export const parseEnvelope = function parseEnvelope(arg0) {
  function readBinary(length) {
    tmp = tmp.subarray(length + 1);
    return tmp.subarray(0, length);
  }
  function readJson() {
    let length = tmp.indexOf(10);
    if (length < 0) {
      length = tmp.length;
    }
    const tmp2 = readBinary(length);
    if (tmp(readBinary[2]).GLOBAL_OBJ.__SENTRY__) {
      if (tmp(readBinary[2]).GLOBAL_OBJ.__SENTRY__.decodePolyfill) {
        const __SENTRY__ = tmp(readBinary[2]).GLOBAL_OBJ.__SENTRY__;
        let decodePolyfillResult = __SENTRY__.decodePolyfill(tmp2);
      }
      return JSON.parse(decodePolyfillResult);
    }
    const textDecoder = new TextDecoder();
    decodePolyfillResult = textDecoder.decode(tmp2);
  }
  let tmp = arg0;
  if ("string" === typeof arg0) {
    tmp = encodeUTF8(arg0);
  }
  const require = tmp;
  const items = [];
  const json = readJson();
  while (require.length) {
    let json1 = readJson();
    let length;
    if ("number" === typeof json1.length) {
      length = json1.length;
    }
    let items1 = [json1, length ? readBinary(length) : readJson()];
    let arr = items.push(items1);
    let tmp6 = require;
  }
  const items2 = [json, items];
  return items2;
};
export const serializeEnvelope = function serializeEnvelope(arg0) {
  function append(json) {
    if ("string" === typeof arr) {
      if ("string" === typeof json) {
        let sum = arr + json;
      } else {
        sum = [outer1_6(arr), json];
      }
      arr = sum;
    } else {
      let tmp2 = json;
      if ("string" === typeof json) {
        tmp2 = outer1_6(json);
      }
      arr = arr.push(tmp2);
    }
  }
  const tmp = _slicedToArray(arg0, 2);
  let closure_0 = JSON.stringify(tmp[0]);
  while (tmp2 !== undefined) {
    let tmp15 = _slicedToArray;
    let tmp16 = _slicedToArray(tmp3, 2);
    let tmp17 = tmp16[1];
    let tmp18 = tmp17;
    let tmp19 = append;
    let _JSON2 = JSON;
    let _HermesInternal = HermesInternal;
    let appendResult = append("\n" + JSON.stringify(tmp16[0]) + "\n");
    if ("string" !== typeof tmp17) {
      let tmp4 = tmp17;
      let _Uint8Array = Uint8Array;
      if (!(tmp18 instanceof Uint8Array)) {
        let _JSON = JSON;
        let tmp5 = tmp17;
        let json = JSON.stringify(tmp18);
        let tmp7 = append;
        let tmp8 = json;
        let appendResult1 = append(json);
      }
      continue;
    }
    let tmp10 = append;
    let tmp11 = tmp17;
    let appendResult2 = append(tmp18);
  }
  if ("string" === typeof closure_0) {
    let tmp14 = closure_0;
  } else {
    tmp14 = (function concatBuffers(closure_0) {
      const uint8Array = new Uint8Array(closure_0.reduce((arg0, arg1) => arg0 + arg1.length, 0));
      let num = 0;
      for (const item10018 of arg0) {
        let tmp2 = uint8Array;
        let tmp3 = num;
        let result = uint8Array.set(item10018, num);
        num = num + item10018.length;
        continue;
      }
      return uint8Array;
    })(closure_0);
  }
  return tmp14;
};
