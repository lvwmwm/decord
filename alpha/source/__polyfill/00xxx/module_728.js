// Module ID: 728
// Function ID: 729
// Dependencies: [32, 689, 685, 729, 701]
// Exports: addItemToEnvelope, createAttachmentEnvelopeItem, createEnvelope, createEventEnvelopeHeaders, createSpanEnvelopeItem, envelopeContainsItemType, envelopeItemTypeToDataCategory, getSdkMetadataForEnvelopeHeader, parseEnvelope, serializeEnvelope

// Module 728
import _mod685 from "module_685" /* 685 */;
import _mod689 from "module_689" /* 689 */;
import _mod701 from "module_701" /* 701 */;
import normalize from "normalize" /* 729 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let _require;

function forEachEnvelopeItem(arg0, fn) {
  const tmp = arg0[1];
  for (const item10007 of tmp) {
    if (fn(item10007, item10007[0].type)) {
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_4 = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", profile_chunk: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor", feedback: "feedback", span: "span", raw_security: "security", log: "log_item", metric: "metric", trace_metric: "metric" };

export function addItemToEnvelope(eventEnvelope, attachmentEnvelopeItem) {
  const tmp2 = _slicedToArray(eventEnvelope, 2);
  const items = [tmp2[0], ];
  const items1 = [];
  items1[HermesBuiltin.arraySpread(items1, tmp2[1], 0)] = attachmentEnvelopeItem;
  items[1] = items1;
  return items;
}
export function createAttachmentEnvelopeItem(item10025) {
  let data1;
  if (typeof item10025.data === "string") {
    let encodePolyfillResult;
    const data = item10025.data;
    const obj = _mod689;
    const sentryCarrier = obj.getSentryCarrier(_mod685.GLOBAL_OBJ);
    if (sentryCarrier.encodePolyfill) {
      encodePolyfillResult = sentryCarrier.encodePolyfill(data);
    } else {
      const _TextEncoder = TextEncoder;
      const self = this;
      const self2 = this;
      const encoder = new TextEncoder();
      encodePolyfillResult = encoder.encode(data);
    }
    data1 = encodePolyfillResult;
  } else {
    data1 = item10025.data;
  }
  const items = [, ];
  const obj2 = { type: "attachment", length: data1.length, filename: item10025.filename, content_type: item10025.contentType, attachment_type: item10025.attachmentType };
  items[0] = obj2;
  items[1] = data1;
  return items;
}
export function createEnvelope(eventEnvelopeHeaders, items1) {
  let items = items1;
  if (items1 === undefined) {
    items = [];
  }
  items1 = [eventEnvelopeHeaders, items];
  return items1;
}
export function createEventEnvelopeHeaders(event_id, sdkMetadataForEnvelopeHeader, tunnel, dsn) {
  let date;
  let obj5;
  const sdkProcessingMetadata = event_id.sdkProcessingMetadata;
  let prop;
  if (sdkProcessingMetadata != null) {
    prop = sdkProcessingMetadata.dynamicSamplingContext;
  }
  const obj = { event_id: event_id.event_id, sent_at: date.toISOString() };
  let tmp2 = sdkMetadataForEnvelopeHeader;
  date = new Date();
  if (tmp2) {
    tmp2 = { sdk: sdkMetadataForEnvelopeHeader };
    const obj2 = { sdk: sdkMetadataForEnvelopeHeader };
  }
  const merged = Object.assign(tmp2);
  let tmp4 = tunnel && dsn;
  if (tmp4) {
    const obj3 = { dsn: obj5.dsnToString(dsn) };
    tmp4 = obj3;
    obj5 = _mod701;
  }
  const merged1 = Object.assign(tmp4);
  let tmp8 = prop;
  if (tmp8) {
    tmp8 = { trace: prop };
    const obj4 = { trace: prop };
  }
  const merged2 = Object.assign(tmp8);
  return obj;
}
export function createSpanEnvelopeItem(arg0) {
  const items = [{ type: "span" }, arg0];
  return items;
}
export function envelopeContainsItemType(arg0, arg1) {
  let closure_0 = arg1;
  return forEachEnvelopeItem(arg0, (arg0, arg1) => closure_0.includes(arg1));
}
export function envelopeItemTypeToDataCategory(arg0) {
  return closure_4[arg0];
}
export { forEachEnvelopeItem };
export function getSdkMetadataForEnvelopeHeader(sdkMetadata) {
  let sdk;
  if (sdkMetadata != null) {
    sdk = sdkMetadata.sdk;
  }
  if (sdk) {
    const obj = { name: null, version: null };
    ({ name: obj.name, version: obj.version } = sdkMetadata.sdk);
    return obj;
  }
}
export function parseEnvelope(value) {
  let tmp = value;
  if (typeof value === "string") {
    let encodePolyfillResult;
    let obj = require("module_689");
    let sentryCarrier = obj.getSentryCarrier(require("module_685").GLOBAL_OBJ);
    if (sentryCarrier.encodePolyfill) {
      encodePolyfillResult = sentryCarrier.encodePolyfill(value);
    } else {
      const _TextEncoder = TextEncoder;
      let self = this;
      let self2 = this;
      const encoder = new TextEncoder();
      encodePolyfillResult = encoder.encode(value);
    }
    tmp = encodePolyfillResult;
  }
  function readJson() {
    let decodePolyfillResult;
    let length = closure_0.indexOf(10);
    if (length < 0) {
      length = closure_0.length;
    }
    const _JSON = JSON;
    const subarrayResult = closure_0.subarray(0, length);
    closure_0 = closure_0.subarray(length + 1);
    const obj = _mod689;
    const sentryCarrier = obj.getSentryCarrier(_mod685.GLOBAL_OBJ);
    if (sentryCarrier.decodePolyfill) {
      decodePolyfillResult = sentryCarrier.decodePolyfill(subarrayResult);
    } else {
      const _TextDecoder = TextDecoder;
      const self = this;
      const self2 = this;
      const decoder = new TextDecoder();
      decodePolyfillResult = decoder.decode(subarrayResult);
    }
    return parse(decodePolyfillResult);
  }
  _require = tmp;
  const items = [];
  const json = readJson();
  while (_require.length) {
    let subarrayResult;
    let json1 = readJson();
    let length;
    if (typeof json1.length === "number") {
      length = json1.length;
    }
    let items1 = [json1, ];
    let push = items.push;
    if (length) {
      subarrayResult = require("Discord");
      _require = _require.subarray(length + 1);
    } else {
      subarrayResult = readJson();
    }
    items1[1] = subarrayResult;
    let arr = push(items1);
  }
  const items2 = [json, items];
  return items2;
}
export function serializeEnvelope(items) {
  let sum;
  let tmp4;
  function concatBuffers(arr) {
    const uint8Array = new Uint8Array(arr.reduce((acc, item) => acc + item.length, 0));
    let num = 0;
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let result = uint8Array.set(nextResult, num);
      num = num + nextResult.length;
      continue;
    }
    return uint8Array;
  }
  function append(json) {
    let require;
    if (typeof require === "string") {
      if (typeof json === "string") {
        require = arr + json;
      } else {
        let encodePolyfillResult;
        const obj3 = _mod689;
        const sentryCarrier = obj3.getSentryCarrier(_mod685.GLOBAL_OBJ);
        if (sentryCarrier.encodePolyfill) {
          encodePolyfillResult = sentryCarrier.encodePolyfill(arr);
        } else {
          const _TextEncoder2 = TextEncoder;
          const self3 = this;
          const self4 = this;
          const encoder2 = new TextEncoder();
          encodePolyfillResult = encoder2.encode(arr);
        }
        require = [encodePolyfillResult, json];
      }
    } else {
      let tmp4 = json;
      const push = arr.push;
      if (typeof json === "string") {
        let encodePolyfillResult1;
        const obj = _mod689;
        const sentryCarrier1 = obj.getSentryCarrier(_mod685.GLOBAL_OBJ);
        if (sentryCarrier1.encodePolyfill) {
          encodePolyfillResult1 = sentryCarrier1.encodePolyfill(json);
        } else {
          const _TextEncoder = TextEncoder;
          const self = this;
          const self2 = this;
          const encoder = new TextEncoder();
          encodePolyfillResult1 = encoder.encode(json);
        }
        tmp4 = encodePolyfillResult1;
      }
      push(tmp4);
    }
  }
  let tmp = _slicedToArray(items, 2);
  const tmp2 = tmp[1];
  let require = JSON.stringify(tmp[0]);
  const tmp3 = tmp2[Symbol.iterator]();
  if (tmp3 === undefined) {
    let tmp20 = require;
    if (typeof require !== "string") {
      tmp20 = concatBuffers(tmp19);
    }
    return tmp20;
  } else {
    const tmp6 = _slicedToArray(tmp4, 2);
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    append("\n" + JSON.stringify(tmp6[0]) + "\n");
    if (typeof tmp6[1] !== "string") {
      const _Uint8Array = Uint8Array;
      if (!(tmp6[1] instanceof Uint8Array)) {
        let json;
        try {
          const _JSON2 = JSON;
          json = JSON.stringify(tmp8);
        } catch (err) {
          const _JSON3 = JSON;
          const normalizer = normalize;
          json = stringify(normalizer.normalize(tmp8));
        }
        append(json);
      }
    }
    append(tmp6[1]);
  }
}
