// Module ID: 11036
// Function ID: 11037
// Dependencies: [10992, 10993, 11037, 11040, 11029, 10998]
// Exports: createEventEnvelope, createSessionEnvelope, createSpanEnvelope

// Module 11036
import _mod10998 from "module_10998" /* 10998 */;
import _mod11037 from "module_11037" /* 11037 */;
import _mod11040 from "module_11040" /* 11040 */;
import DEBUG_BUILD from "module_10992" /* 10992 */;
import CONSOLE_LEVELS from "module_10993" /* 10993 */;

const require = globalThis.__r;
let _require, integrations, version;


export const createEventEnvelope = function createEventEnvelope(type, arg1, sdk, arg3) {
  const obj = _mod11037;
  const sdkMetadataForEnvelopeHeader = obj.getSdkMetadataForEnvelopeHeader(sdk);
  let str = "event";
  const tmp2 = type;
  if (type.type) {
    str = "event";
    if ("replay_event" !== type.type) {
      str = type.type;
    }
  }
  if (sdk && sdk.sdk) {
    type.sdk = type.sdk || {};
    let name = type.sdk.name;
    sdk = type.sdk;
    if (!name) {
      name = tmp6.name;
    }
    sdk.name = name;
    version = type.sdk.version;
    const sdk2 = type.sdk;
    if (!version) {
      version = tmp6.version;
    }
    sdk2.version = version;
    integrations = type.sdk.integrations;
    const sdk3 = type.sdk;
    if (!integrations) {
      integrations = [];
    }
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items, integrations, 0);
    const tmp10 = (sdk && sdk.sdk).integrations || [];
    HermesBuiltin.arraySpread(items, tmp10, arraySpreadResult);
    sdk3.integrations = items;
    let packages = type.sdk.packages;
    const sdk4 = type.sdk;
    if (!packages) {
      packages = [];
    }
    const items1 = [];
    const arraySpreadResult5 = HermesBuiltin.arraySpread(items1, packages, 0);
    const tmp18 = (sdk && sdk.sdk).packages || [];
    HermesBuiltin.arraySpread(items1, tmp18, arraySpreadResult5);
    sdk4.packages = items1;
  }
  const tmp3Result = _mod11037;
  const eventEnvelopeHeaders = tmp3Result.createEventEnvelopeHeaders(type, sdkMetadataForEnvelopeHeader, arg3, arg1);
  delete tmp2["sdkProcessingMetadata"];
  const items2 = [{ type: str }, type];
  const items3 = [items2];
  const tmp3Result2 = _mod11037;
  return tmp3Result2.createEnvelope(eventEnvelopeHeaders, items3);
};
export const createSessionEnvelope = function createSessionEnvelope(toJSON, arg1, arg2, arg3) {
  let date;
  let items1;
  let tmpResult;
  const obj = _mod11037;
  const sdkMetadataForEnvelopeHeader = obj.getSdkMetadataForEnvelopeHeader(arg2);
  const obj2 = { sent_at: date.toISOString() };
  let tmp4 = sdkMetadataForEnvelopeHeader;
  date = new Date();
  if (tmp4) {
    tmp4 = { sdk: sdkMetadataForEnvelopeHeader };
    const obj3 = { sdk: sdkMetadataForEnvelopeHeader };
  }
  const merged = Object.assign(tmp4);
  let tmp6 = arg3 && arg1;
  if (tmp6) {
    const obj4 = { dsn: tmpResult.dsnToString(arg1) };
    tmp6 = obj4;
    tmpResult = _mod11040;
  }
  const merged1 = Object.assign(tmp6);
  if ("aggregates" in toJSON) {
    const items = [{ type: "sessions" }, toJSON];
    items1 = items;
  } else {
    items1 = [{ type: "session" }, toJSON.toJSON()];
  }
  const items2 = [items1];
  const tmpResult2 = _mod11037;
  return tmpResult2.createEnvelope(obj2, items2);
};
export const createSpanEnvelope = function createSpanEnvelope(arg0, getDsn) {
  let closure_0;
  let date;
  let tmp2Result;
  function dscHasRequiredProps(dynamicSamplingContextFromSpan) {
    return dynamicSamplingContextFromSpan.trace_id && dynamicSamplingContextFromSpan.public_key;
  }
  let tmp = _require;
  let tmp3 = dependencyMap;
  let obj = require("module_11029");
  const dynamicSamplingContextFromSpan = obj.getDynamicSamplingContextFromSpan(arg0[0]);
  const tmp6 = getDsn && getDsn.getDsn();
  const obj2 = { sent_at: date.toISOString() };
  const tmp7 = getDsn && getDsn.getOptions().tunnel;
  date = new Date();
  let tmp8 = dscHasRequiredProps(dynamicSamplingContextFromSpan);
  const tmp2 = _require;
  if (tmp8) {
    tmp8 = { trace: dynamicSamplingContextFromSpan };
    const obj3 = { trace: dynamicSamplingContextFromSpan };
  }
  const merged = Object.assign(tmp8);
  let tmp10 = tmp7 && tmp6;
  if (tmp10) {
    const obj4 = { dsn: tmp2Result.dsnToString(tmp6) };
    tmp10 = obj4;
    tmp2Result = tmp2(11040);
  }
  const merged1 = Object.assign(tmp10);
  const tmp14 = getDsn && getDsn.getOptions().beforeSendSpan;
  _require = tmp14;
  const items = [];
  const tmp15 = tmp14 ? ((arg0) => {
    const obj = _mod10998;
    const tmp3 = closure_0(obj.spanToJSON(arg0));
    if (!tmp3) {
      const tmpResult = _mod10998;
      tmpResult.showSpanDropWarning();
    }
    return tmp3;
  }) : ((arg0) => {
    const obj = closure_0(dependencyMap[5]);
    return obj.spanToJSON(arg0);
  });
  const iter = arg0[Symbol.iterator]();
  while (iter !== undefined) {
    let tmp15Result = tmp15(iter.next());
    if (tmp15Result) {
      let push = items.push;
      let obj7 = require("module_11037");
      let arr = push(obj7.createSpanEnvelopeItem(tmp17));
    }
    continue;
  }
  const obj8 = require("module_11037");
  return obj8.createEnvelope(obj2, items);
};
