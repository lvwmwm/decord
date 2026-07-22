// Module ID: 7274
// Function ID: 58617
// Name: createEventEnvelope
// Dependencies: [4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295]
// Exports: createEventEnvelope, createSessionEnvelope, createSpanEnvelope

// Module 7274 (createEventEnvelope)
let closure_2 = require(dependencyMap[0]);
const _module = require(dependencyMap[1]);
const _module1 = require(dependencyMap[2]);

export const createEventEnvelope = function createEventEnvelope(type, arg1, sdk) {
  let obj = require(dependencyMap[3]);
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
    type.sdk.integrations = items.concat(closure_2(integrations), closure_2(integrations1));
    const items1 = [];
    let packages = type.sdk.packages;
    if (!packages) {
      packages = [];
    }
    let packages1 = sdk.packages;
    const tmp2 = closure_2;
    const tmp2Result = closure_2(integrations);
    const tmp4 = closure_2;
    const tmp5 = closure_2;
    if (!packages1) {
      packages1 = [];
    }
    type.sdk.packages = items1.concat(closure_2(packages), closure_2(packages1));
    const tmp5Result = closure_2(packages);
    const tmp7 = closure_2;
  }
  const eventEnvelopeHeaders = require(dependencyMap[3]).createEventEnvelopeHeaders(type, sdkMetadataForEnvelopeHeader, arg3, arg1);
  delete r6.sdkProcessingMetadata;
  obj = { type: str };
  const items2 = [obj, type];
  const obj2 = require(dependencyMap[3]);
  const items3 = [items2];
  return require(dependencyMap[3]).createEnvelope(eventEnvelopeHeaders, items3);
};
export const createSessionEnvelope = function createSessionEnvelope(toJSON) {
  let obj = require(dependencyMap[3]);
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
    const obj1 = { dsn: require(dependencyMap[4]).dsnToString(arg1) };
    tmp4 = obj1;
    const obj6 = require(dependencyMap[4]);
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
  return require(dependencyMap[3]).createEnvelope(merged, items2);
};
export const createSpanEnvelope = function createSpanEnvelope(arg0, getDsn) {
  let num = arg0;
  let obj = require(dependencyMap[5]);
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
    const obj1 = { dsn: require(dependencyMap[4]).dsnToString(dsn) };
    tmp6 = obj1;
    const obj6 = require(dependencyMap[4]);
  }
  const merged = Object.assign(obj, public_key, tmp6);
  let beforeSendSpan = getDsn;
  if (getDsn) {
    beforeSendSpan = getDsn.getOptions().beforeSendSpan;
  }
  const require = beforeSendSpan;
  num[Symbol.iterator]();
  num = 3;
};
