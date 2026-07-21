// Module ID: 839
// Function ID: 9323
// Name: _enhanceEventWithSdkInfo
// Dependencies: []
// Exports: createEventEnvelope, createSessionEnvelope, createSpanEnvelope

// Module 839 (_enhanceEventWithSdkInfo)
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
    obj.integrations = items.concat(closure_2(integrations), closure_2(integrations1));
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
    const tmp3 = closure_2;
    const tmp3Result = closure_2(integrations);
    const tmp6 = closure_2;
    const tmp7 = closure_2;
    if (!packages1) {
      packages1 = [];
    }
    obj.packages = items1.concat(closure_2(packages), closure_2(packages1));
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
    const tmp7Result = closure_2(packages);
    const tmp9 = closure_2;
  } else {
    return sdk;
  }
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _enhanceEventWithSdkInfo };
export const createEventEnvelope = function createEventEnvelope(type, arg1, sdk) {
  let obj = require(dependencyMap[1]);
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
  const eventEnvelopeHeaders = require(dependencyMap[1]).createEventEnvelopeHeaders(type, sdkMetadataForEnvelopeHeader, arg3, arg1);
  delete r6.sdkProcessingMetadata;
  obj = { type: str };
  const items = [obj, type];
  const obj2 = require(dependencyMap[1]);
  const tmp2 = _enhanceEventWithSdkInfo;
  const items1 = [items];
  return require(dependencyMap[1]).createEnvelope(eventEnvelopeHeaders, items1);
};
export const createSessionEnvelope = function createSessionEnvelope(toJSON) {
  let obj = require(dependencyMap[1]);
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
    const obj1 = { dsn: require(dependencyMap[2]).dsnToString(arg1) };
    tmp4 = obj1;
    const obj6 = require(dependencyMap[2]);
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
  return require(dependencyMap[1]).createEnvelope(merged, items2);
};
export const createSpanEnvelope = function createSpanEnvelope(arr, getDsn) {
  let obj = require(dependencyMap[3]);
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
    const obj1 = { dsn: require(dependencyMap[2]).dsnToString(dsn) };
    tmp7 = obj1;
    const obj6 = require(dependencyMap[2]);
  }
  const merged = Object.assign(obj, public_key, tmp7);
  let options;
  if (null != getDsn) {
    options = getDsn.getOptions();
  }
  if (!options) {
    options = {};
  }
  const beforeSendSpan = options.beforeSendSpan;
  const require = beforeSendSpan;
  const ignoreSpans = options.ignoreSpans;
  const dependencyMap = ignoreSpans;
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
    require(dependencyMap[5]).spanToJSON;
  }
  num2[Symbol.iterator]();
  num2 = 1;
};
