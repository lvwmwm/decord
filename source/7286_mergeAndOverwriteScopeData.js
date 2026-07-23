// Module ID: 7286
// Function ID: 58745
// Name: mergeAndOverwriteScopeData
// Dependencies: [65, 7261, 7242, 7241, 7272]
// Exports: applyScopeDataToEvent, mergeScopeData

// Module 7286 (mergeAndOverwriteScopeData)
import _toConsumableArray from "_toConsumableArray";

function mergeAndOverwriteScopeData(arg0, arg1, arg2) {
  arg0[arg1] = require(7261) /* merge */.merge(arg0[arg1], arg2, 1);
}

export const applyScopeDataToEvent = function applyScopeDataToEvent(extra) {
  let breadcrumbs;
  let contexts;
  let fingerprint;
  let level;
  let sdkProcessingMetadata;
  let span;
  let tags;
  let transactionName;
  let user;
  ({ fingerprint, span, level, transactionName } = arg1);
  ({ breadcrumbs, sdkProcessingMetadata, extra, tags, user, contexts } = arg1);
  let obj = require(7242) /* addNonEnumerableProperty */;
  const dropUndefinedKeysResult = obj.dropUndefinedKeys(extra);
  let length = dropUndefinedKeysResult;
  if (dropUndefinedKeysResult) {
    const _Object = Object;
    length = Object.keys(dropUndefinedKeysResult).length;
  }
  if (length) {
    const _Object2 = Object;
    extra.extra = Object.assign({}, dropUndefinedKeysResult, extra.extra);
  }
  const dropUndefinedKeysResult1 = require(7242) /* addNonEnumerableProperty */.dropUndefinedKeys(tags);
  let length2 = dropUndefinedKeysResult1;
  if (dropUndefinedKeysResult1) {
    const _Object3 = Object;
    length2 = Object.keys(dropUndefinedKeysResult1).length;
  }
  if (length2) {
    const _Object4 = Object;
    extra.tags = Object.assign({}, dropUndefinedKeysResult1, extra.tags);
  }
  const obj2 = require(7242) /* addNonEnumerableProperty */;
  const dropUndefinedKeysResult2 = require(7242) /* addNonEnumerableProperty */.dropUndefinedKeys(user);
  let length3 = dropUndefinedKeysResult2;
  if (dropUndefinedKeysResult2) {
    const _Object5 = Object;
    length3 = Object.keys(dropUndefinedKeysResult2).length;
  }
  if (length3) {
    const _Object6 = Object;
    extra.user = Object.assign({}, dropUndefinedKeysResult2, extra.user);
  }
  const obj3 = require(7242) /* addNonEnumerableProperty */;
  const dropUndefinedKeysResult3 = require(7242) /* addNonEnumerableProperty */.dropUndefinedKeys(contexts);
  let length4 = dropUndefinedKeysResult3;
  if (dropUndefinedKeysResult3) {
    const _Object7 = Object;
    length4 = Object.keys(dropUndefinedKeysResult3).length;
  }
  if (length4) {
    const _Object8 = Object;
    extra.contexts = Object.assign({}, dropUndefinedKeysResult3, extra.contexts);
  }
  if (level) {
    extra.level = level;
  }
  let tmp14 = transactionName;
  if (transactionName) {
    tmp14 = "transaction" !== extra.type;
  }
  if (tmp14) {
    extra.transaction = transactionName;
  }
  if (span) {
    const _Object9 = Object;
    obj = { trace: require(7241) /* spanTimeInputToSeconds */.spanToTraceContext(span) };
    extra.contexts = Object.assign(obj, extra.contexts);
    const _Object10 = Object;
    obj = {};
    const obj6 = require(7241) /* spanTimeInputToSeconds */;
    obj.dynamicSamplingContext = require(7272) /* getDynamicSamplingContextFromClient */.getDynamicSamplingContextFromSpan(span);
    extra.sdkProcessingMetadata = Object.assign(obj, extra.sdkProcessingMetadata);
    const obj8 = require(7272) /* getDynamicSamplingContextFromClient */;
    const rootSpan = require(7241) /* spanTimeInputToSeconds */.getRootSpan(span);
    const obj9 = require(7241) /* spanTimeInputToSeconds */;
    const description = require(7241) /* spanTimeInputToSeconds */.spanToJSON(rootSpan).description;
    let tmp19 = description;
    if (description) {
      tmp19 = !extra.transaction;
    }
    if (tmp19) {
      tmp19 = "transaction" === extra.type;
    }
    if (tmp19) {
      extra.transaction = description;
    }
    const obj10 = require(7241) /* spanTimeInputToSeconds */;
  }
  if (extra.fingerprint) {
    const _Array = Array;
    const fingerprint2 = extra.fingerprint;
    if (Array.isArray(extra.fingerprint)) {
      let items = fingerprint2;
    } else {
      items = [fingerprint2];
    }
  } else {
    extra.fingerprint = [];
    if (fingerprint) {
      const fingerprint3 = extra.fingerprint;
      extra.fingerprint = fingerprint3.concat(fingerprint);
    }
    if (tmp22) {
      delete tmp.fingerprint;
    }
    const items1 = [];
    breadcrumbs = extra.breadcrumbs;
    if (!breadcrumbs) {
      breadcrumbs = [];
    }
    const combined = items1.concat(_toConsumableArray(breadcrumbs), _toConsumableArray(breadcrumbs));
    let tmp26;
    if (combined.length) {
      tmp26 = combined;
    }
    extra.breadcrumbs = tmp26;
    const _Object11 = Object;
    extra.sdkProcessingMetadata = Object.assign({}, extra.sdkProcessingMetadata, sdkProcessingMetadata);
  }
};
export { mergeAndOverwriteScopeData };
export const mergeScopeData = function mergeScopeData(sdkProcessingMetadata, extra) {
  let attachments;
  let breadcrumbs;
  let contexts;
  let eventProcessors;
  let fingerprint;
  let level;
  let propagationContext;
  let span;
  let tags;
  let transactionName;
  let user;
  ({ level, breadcrumbs, fingerprint, eventProcessors, attachments, transactionName, span } = extra);
  ({ tags, user, contexts, sdkProcessingMetadata, propagationContext } = extra);
  mergeAndOverwriteScopeData(sdkProcessingMetadata, "extra", extra.extra);
  mergeAndOverwriteScopeData(sdkProcessingMetadata, "tags", tags);
  mergeAndOverwriteScopeData(sdkProcessingMetadata, "user", user);
  mergeAndOverwriteScopeData(sdkProcessingMetadata, "contexts", contexts);
  sdkProcessingMetadata.sdkProcessingMetadata = require(7261) /* merge */.merge(sdkProcessingMetadata.sdkProcessingMetadata, sdkProcessingMetadata, 2);
  if (level) {
    sdkProcessingMetadata.level = level;
  }
  if (transactionName) {
    sdkProcessingMetadata.transactionName = transactionName;
  }
  if (span) {
    sdkProcessingMetadata.span = span;
  }
  if (breadcrumbs.length) {
    const items = [];
    sdkProcessingMetadata.breadcrumbs = items.concat(_toConsumableArray(sdkProcessingMetadata.breadcrumbs), _toConsumableArray(breadcrumbs));
    const tmp6 = _toConsumableArray(sdkProcessingMetadata.breadcrumbs);
  }
  if (fingerprint.length) {
    const items1 = [];
    sdkProcessingMetadata.fingerprint = items1.concat(_toConsumableArray(sdkProcessingMetadata.fingerprint), _toConsumableArray(fingerprint));
    const tmp8 = _toConsumableArray(sdkProcessingMetadata.fingerprint);
  }
  if (eventProcessors.length) {
    const items2 = [];
    sdkProcessingMetadata.eventProcessors = items2.concat(_toConsumableArray(sdkProcessingMetadata.eventProcessors), _toConsumableArray(eventProcessors));
    const tmp10 = _toConsumableArray(sdkProcessingMetadata.eventProcessors);
  }
  if (attachments.length) {
    const items3 = [];
    sdkProcessingMetadata.attachments = items3.concat(_toConsumableArray(sdkProcessingMetadata.attachments), _toConsumableArray(attachments));
    const tmp12 = _toConsumableArray(sdkProcessingMetadata.attachments);
  }
  sdkProcessingMetadata.propagationContext = Object.assign({}, sdkProcessingMetadata.propagationContext, propagationContext);
};
