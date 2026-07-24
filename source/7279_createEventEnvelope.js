// Module ID: 7279
// Function ID: 58680
// Name: createEventEnvelope
// Dependencies: [65, 7235, 7236, 7280, 7283, 7272, 7241]
// Exports: createEventEnvelope, createSessionEnvelope, createSpanEnvelope

// Module 7279 (createEventEnvelope)
import _toConsumableArray from "_toConsumableArray";
import module_7235 from "module_7235";
import consoleSandbox from "consoleSandbox";


export const createEventEnvelope = function createEventEnvelope(type, arg1, sdk) {
  let obj = require(7280) /* forEachEnvelopeItem */;
  const sdkMetadataForEnvelopeHeader = obj.getSdkMetadataForEnvelopeHeader(sdk);
  let str = "event";
  if (type.type) {
    str = "event";
    if ("replay_event" !== type.type) {
      str = type.type;
    }
  }
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    type.sdk = type.sdk || {};
    let name = type.sdk.name;
    if (!name) {
      name = sdk.name;
    }
    type.sdk.name = name;
    let version = type.sdk.version;
    if (!version) {
      version = sdk.version;
    }
    type.sdk.version = version;
    const items = [];
    let integrations = type.sdk.integrations;
    if (!integrations) {
      integrations = [];
    }
    let integrations1 = sdk.integrations;
    if (!integrations1) {
      integrations1 = [];
    }
    type.sdk.integrations = items.concat(_toConsumableArray(integrations), _toConsumableArray(integrations1));
    const items1 = [];
    let packages = type.sdk.packages;
    if (!packages) {
      packages = [];
    }
    let packages1 = sdk.packages;
    const tmp3 = _toConsumableArray;
    const tmp3Result = _toConsumableArray(integrations);
    const tmp5 = _toConsumableArray;
    const tmp6 = _toConsumableArray;
    if (!packages1) {
      packages1 = [];
    }
    type.sdk.packages = items1.concat(_toConsumableArray(packages), _toConsumableArray(packages1));
    const tmp6Result = _toConsumableArray(packages);
    const tmp8 = _toConsumableArray;
  }
  const eventEnvelopeHeaders = require(7280) /* forEachEnvelopeItem */.createEventEnvelopeHeaders(type, sdkMetadataForEnvelopeHeader, arg3, arg1);
  delete tmp.sdkProcessingMetadata;
  obj = { type: str };
  const items2 = [obj, type];
  const obj2 = require(7280) /* forEachEnvelopeItem */;
  const items3 = [items2];
  return require(7280) /* forEachEnvelopeItem */.createEnvelope(eventEnvelopeHeaders, items3);
};
export const createSessionEnvelope = function createSessionEnvelope(toJSON) {
  let obj = require(7280) /* forEachEnvelopeItem */;
  const sdkMetadataForEnvelopeHeader = obj.getSdkMetadataForEnvelopeHeader(arg2);
  obj = { sent_at: new Date().toISOString() };
  let tmp2 = sdkMetadataForEnvelopeHeader;
  if (sdkMetadataForEnvelopeHeader) {
    obj = { sdk: sdkMetadataForEnvelopeHeader };
    tmp2 = obj;
  }
  let tmp4 = !tmp3;
  if (!!arg3) {
    tmp4 = arg1;
  }
  if (tmp4) {
    const obj1 = { dsn: require(7283) /* dsnFromString */.dsnToString(arg1) };
    tmp4 = obj1;
    const obj6 = require(7283) /* dsnFromString */;
  }
  const obj2 = {};
  const merged = Object.assign(obj, tmp2, tmp4);
  if ("aggregates" in toJSON) {
    obj2.type = "sessions";
    const items = [obj2, toJSON];
    let items1 = items;
  } else {
    obj2.type = "session";
    items1 = [obj2, toJSON.toJSON()];
  }
  const date = new Date();
  const items2 = [items1];
  return require(7280) /* forEachEnvelopeItem */.createEnvelope(merged, items2);
};
export const createSpanEnvelope = function createSpanEnvelope(arg0, getDsn) {
  let num = arg0;
  let obj = beforeSendSpan(7272);
  const dynamicSamplingContextFromSpan = obj.getDynamicSamplingContextFromSpan(arg0[0]);
  let dsn = getDsn;
  if (getDsn) {
    dsn = getDsn.getDsn();
  }
  let tunnel = getDsn;
  if (getDsn) {
    tunnel = getDsn.getOptions().tunnel;
  }
  obj = { sent_at: new Date().toISOString() };
  let public_key = !tmp3;
  if (!!dynamicSamplingContextFromSpan.trace_id) {
    public_key = dynamicSamplingContextFromSpan.public_key;
  }
  if (public_key) {
    obj = { trace: dynamicSamplingContextFromSpan };
    public_key = obj;
  }
  let tmp6 = !tmp5;
  if (!!tunnel) {
    tmp6 = dsn;
  }
  if (tmp6) {
    const obj1 = { dsn: beforeSendSpan(7283).dsnToString(dsn) };
    tmp6 = obj1;
    const obj6 = beforeSendSpan(7283);
  }
  const merged = Object.assign(obj, public_key, tmp6);
  beforeSendSpan = getDsn;
  if (getDsn) {
    beforeSendSpan = getDsn.getOptions().beforeSendSpan;
  }
  num[Symbol.iterator]();
  num = 3;
};
