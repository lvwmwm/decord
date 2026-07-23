// Module ID: 839
// Function ID: 9324
// Name: _enhanceEventWithSdkInfo
// Dependencies: [65, 840, 814, 833, 835, 796]
// Exports: createEventEnvelope, createSessionEnvelope, createSpanEnvelope

// Module 839 (_enhanceEventWithSdkInfo)
import _toConsumableArray from "_toConsumableArray";

function _enhanceEventWithSdkInfo(sdk, name) {
  if (name) {
    const tmp = sdk.sdk || {};
    const obj = {};
    name = tmp.name;
    if (!name) {
      name = name.name;
    }
    obj.name = name;
    obj.version = tmp.version || name.version;
    const items = [];
    sdk = sdk.sdk;
    let integrations;
    if (null != sdk) {
      integrations = sdk.integrations;
    }
    if (!integrations) {
      integrations = [];
    }
    let integrations1 = name.integrations;
    if (!integrations1) {
      integrations1 = [];
    }
    obj.integrations = items.concat(_toConsumableArray(integrations), _toConsumableArray(integrations1));
    const items1 = [];
    const sdk2 = sdk.sdk;
    let packages;
    if (null != sdk2) {
      packages = sdk2.packages;
    }
    if (!packages) {
      packages = [];
    }
    let packages1 = name.packages;
    const tmp3 = _toConsumableArray;
    const tmp3Result = _toConsumableArray(integrations);
    const tmp6 = _toConsumableArray;
    const tmp7 = _toConsumableArray;
    if (!packages1) {
      packages1 = [];
    }
    obj.packages = items1.concat(_toConsumableArray(packages), _toConsumableArray(packages1));
    const sdk3 = sdk.sdk;
    if (null == sdk3) {
      let merged;
      obj.settings = merged;
      sdk.sdk = Object.assign({}, tmp, obj);
      return sdk;
    }
    const sdk4 = sdk.sdk;
    let settings;
    if (null != sdk4) {
      settings = sdk4.settings;
    }
    merged = Object.assign({}, settings, name.settings);
    const tmp7Result = _toConsumableArray(packages);
    const tmp9 = _toConsumableArray;
  } else {
    return sdk;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _enhanceEventWithSdkInfo };
export const createEventEnvelope = function createEventEnvelope(type, arg1, sdk) {
  let obj = require(840) /* forEachEnvelopeItem */;
  const sdkMetadataForEnvelopeHeader = obj.getSdkMetadataForEnvelopeHeader(sdk);
  let str = "event";
  if (type.type) {
    str = "event";
    if ("replay_event" !== type.type) {
      str = type.type;
    }
  }
  sdk = undefined;
  if (null != sdk) {
    sdk = sdk.sdk;
  }
  _enhanceEventWithSdkInfo(type, sdk);
  const eventEnvelopeHeaders = require(840) /* forEachEnvelopeItem */.createEventEnvelopeHeaders(type, sdkMetadataForEnvelopeHeader, arg3, arg1);
  delete tmp.sdkProcessingMetadata;
  obj = { type: str };
  const items = [obj, type];
  const obj2 = require(840) /* forEachEnvelopeItem */;
  const tmp3 = _enhanceEventWithSdkInfo;
  const items1 = [items];
  return require(840) /* forEachEnvelopeItem */.createEnvelope(eventEnvelopeHeaders, items1);
};
export const createSessionEnvelope = function createSessionEnvelope(toJSON) {
  let obj = require(840) /* forEachEnvelopeItem */;
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
    const obj1 = { dsn: require(814) /* dsnFromString */.dsnToString(arg1) };
    tmp4 = obj1;
    const obj6 = require(814) /* dsnFromString */;
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
  return require(840) /* forEachEnvelopeItem */.createEnvelope(merged, items2);
};
export const createSpanEnvelope = function createSpanEnvelope(arr, getDsn) {
  let obj = beforeSendSpan(ignoreSpans[3]);
  const dynamicSamplingContextFromSpan = obj.getDynamicSamplingContextFromSpan(arr[0]);
  if (null != getDsn) {
    const dsn = getDsn.getDsn();
  }
  let tunnel;
  if (null != getDsn) {
    tunnel = getDsn.getOptions().tunnel;
  }
  obj = { sent_at: new Date().toISOString() };
  let public_key = !tmp4;
  if (!!dynamicSamplingContextFromSpan.trace_id) {
    public_key = dynamicSamplingContextFromSpan.public_key;
  }
  if (public_key) {
    obj = { trace: dynamicSamplingContextFromSpan };
    public_key = obj;
  }
  let tmp7 = !tmp6;
  if (!!tunnel) {
    tmp7 = dsn;
  }
  if (tmp7) {
    const obj1 = { dsn: beforeSendSpan(ignoreSpans[2]).dsnToString(dsn) };
    tmp7 = obj1;
    const obj6 = beforeSendSpan(ignoreSpans[2]);
  }
  const merged = Object.assign(obj, public_key, tmp7);
  let options;
  if (null != getDsn) {
    options = getDsn.getOptions();
  }
  if (!options) {
    options = {};
  }
  beforeSendSpan = options.beforeSendSpan;
  ignoreSpans = options.ignoreSpans;
  let num2 = arr;
  if (null != ignoreSpans) {
    num2 = arr;
    if (ignoreSpans.length) {
      num2 = arr.filter((arg0) => {
        const obj = beforeSendSpan(ignoreSpans[4]);
        return !obj.shouldIgnoreSpan(beforeSendSpan(ignoreSpans[5]).spanToJSON(arg0), ignoreSpans);
      });
    }
  }
  const diff = arr.length - num2.length;
  if (diff) {
    if (null != getDsn) {
      getDsn.recordDroppedEvent("before_send", "span", diff);
    }
  }
  if (beforeSendSpan) {
    const fn = (arg0) => {
      const spanToJSONResult = beforeSendSpan(ignoreSpans[5]).spanToJSON(arg0);
      let tmp2 = beforeSendSpan(spanToJSONResult);
      if (!tmp2) {
        beforeSendSpan(ignoreSpans[5]).showSpanDropWarning();
        tmp2 = spanToJSONResult;
        const obj2 = beforeSendSpan(ignoreSpans[5]);
      }
      return tmp2;
    };
  } else {
    beforeSendSpan(ignoreSpans[5]).spanToJSON;
  }
  num2[Symbol.iterator]();
  num2 = 1;
};
