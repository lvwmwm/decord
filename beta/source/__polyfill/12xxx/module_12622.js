// Module ID: 12622
// Function ID: 12623
// Dependencies: [12578, 12579, 12623, 12626, 12615, 12584]
// Exports: createEventEnvelope, createSessionEnvelope, createSpanEnvelope

// Module 12622
import _mod12584 from "module_12584" /* 12584 */;
import _mod12623 from "module_12623" /* 12623 */;
import _mod12626 from "module_12626" /* 12626 */;
import DEBUG_BUILD from "module_12578" /* 12578 */;
import CONSOLE_LEVELS from "module_12579" /* 12579 */;

const require = globalThis.__r;
let _require, integrations;


export const createEventEnvelope = function createEventEnvelope(type, arg1, sdk, arg3) {
  const obj = _mod12623;
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
    let version = type.sdk.version;
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
  const tmp3Result = _mod12623;
  const eventEnvelopeHeaders = tmp3Result.createEventEnvelopeHeaders(type, sdkMetadataForEnvelopeHeader, arg3, arg1);
  delete tmp2["sdkProcessingMetadata"];
  const items2 = [{ type: str }, type];
  const items3 = [items2];
  const tmp3Result2 = _mod12623;
  return tmp3Result2.createEnvelope(eventEnvelopeHeaders, items3);
};
export const createSessionEnvelope = function createSessionEnvelope(toJSON, arg1, arg2, arg3) {
  let date;
  let items1;
  let tmpResult;
  const obj = _mod12623;
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
    tmpResult = _mod12626;
  }
  const merged1 = Object.assign(tmp6);
  if ("aggregates" in toJSON) {
    const items = [{ type: "sessions" }, toJSON];
    items1 = items;
  } else {
    items1 = [{ type: "session" }, toJSON.toJSON()];
  }
  const items2 = [items1];
  const tmpResult2 = _mod12623;
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
  let obj = require("module_12615");
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
    tmp2Result = tmp2(12626);
  }
  const merged1 = Object.assign(tmp10);
  const tmp14 = getDsn && getDsn.getOptions().beforeSendSpan;
  _require = tmp14;
  const items = [];
  const tmp15 = tmp14 ? ((arg0) => {
    const obj = _mod12584;
    const tmp3 = closure_0(obj.spanToJSON(arg0));
    if (!tmp3) {
      const tmpResult = _mod12584;
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
      let obj7 = require("module_12623");
      let arr = push(obj7.createSpanEnvelopeItem(tmp17));
    }
    continue;
  }
  const obj8 = require("module_12623");
  return obj8.createEnvelope(obj2, items);
};
