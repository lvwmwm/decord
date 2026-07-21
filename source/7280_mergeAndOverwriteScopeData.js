// Module ID: 7280
// Function ID: 58688
// Name: mergeAndOverwriteScopeData
// Dependencies: []
// Exports: applyScopeDataToEvent, mergeScopeData

// Module 7280 (mergeAndOverwriteScopeData)
function mergeAndOverwriteScopeData(arg0, arg1, arg2) {
  arg0[arg1] = require(dependencyMap[1]).merge(arg0[arg1], arg2, 1);
}
let closure_2 = require(dependencyMap[0]);

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
  let obj = require(dependencyMap[2]);
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
  const dropUndefinedKeysResult1 = require(dependencyMap[2]).dropUndefinedKeys(tags);
  let length2 = dropUndefinedKeysResult1;
  if (dropUndefinedKeysResult1) {
    const _Object3 = Object;
    length2 = Object.keys(dropUndefinedKeysResult1).length;
  }
  if (length2) {
    const _Object4 = Object;
    extra.tags = Object.assign({}, dropUndefinedKeysResult1, extra.tags);
  }
  const obj2 = require(dependencyMap[2]);
  const dropUndefinedKeysResult2 = require(dependencyMap[2]).dropUndefinedKeys(user);
  let length3 = dropUndefinedKeysResult2;
  if (dropUndefinedKeysResult2) {
    const _Object5 = Object;
    length3 = Object.keys(dropUndefinedKeysResult2).length;
  }
  if (length3) {
    const _Object6 = Object;
    extra.user = Object.assign({}, dropUndefinedKeysResult2, extra.user);
  }
  const obj3 = require(dependencyMap[2]);
  const dropUndefinedKeysResult3 = require(dependencyMap[2]).dropUndefinedKeys(contexts);
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
  let tmp13 = transactionName;
  if (transactionName) {
    tmp13 = "transaction" !== extra.type;
  }
  if (tmp13) {
    extra.transaction = transactionName;
  }
  if (span) {
    const _Object9 = Object;
    obj = { trace: require(dependencyMap[3]).spanToTraceContext(span) };
    extra.contexts = Object.assign(obj, extra.contexts);
    const _Object10 = Object;
    obj = {};
    const obj6 = require(dependencyMap[3]);
    obj.dynamicSamplingContext = require(dependencyMap[4]).getDynamicSamplingContextFromSpan(span);
    extra.sdkProcessingMetadata = Object.assign(obj, extra.sdkProcessingMetadata);
    const obj8 = require(dependencyMap[4]);
    const rootSpan = require(dependencyMap[3]).getRootSpan(span);
    const obj9 = require(dependencyMap[3]);
    const description = require(dependencyMap[3]).spanToJSON(rootSpan).description;
    let tmp18 = description;
    if (description) {
      tmp18 = !extra.transaction;
    }
    if (tmp18) {
      tmp18 = "transaction" === extra.type;
    }
    if (tmp18) {
      extra.transaction = description;
    }
    const obj10 = require(dependencyMap[3]);
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
    if (tmp21) {
      delete r2.fingerprint;
    }
    const items1 = [];
    breadcrumbs = extra.breadcrumbs;
    if (!breadcrumbs) {
      breadcrumbs = [];
    }
    const combined = items1.concat(callback(breadcrumbs), callback(breadcrumbs));
    let tmp25;
    if (combined.length) {
      tmp25 = combined;
    }
    extra.breadcrumbs = tmp25;
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
  sdkProcessingMetadata.sdkProcessingMetadata = require(dependencyMap[1]).merge(sdkProcessingMetadata.sdkProcessingMetadata, sdkProcessingMetadata, 2);
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
    sdkProcessingMetadata.breadcrumbs = items.concat(callback(sdkProcessingMetadata.breadcrumbs), callback(breadcrumbs));
    const tmp6 = callback(sdkProcessingMetadata.breadcrumbs);
  }
  if (fingerprint.length) {
    const items1 = [];
    sdkProcessingMetadata.fingerprint = items1.concat(callback(sdkProcessingMetadata.fingerprint), callback(fingerprint));
    const tmp8 = callback(sdkProcessingMetadata.fingerprint);
  }
  if (eventProcessors.length) {
    const items2 = [];
    sdkProcessingMetadata.eventProcessors = items2.concat(callback(sdkProcessingMetadata.eventProcessors), callback(eventProcessors));
    const tmp10 = callback(sdkProcessingMetadata.eventProcessors);
  }
  if (attachments.length) {
    const items3 = [];
    sdkProcessingMetadata.attachments = items3.concat(callback(sdkProcessingMetadata.attachments), callback(attachments));
    const tmp12 = callback(sdkProcessingMetadata.attachments);
  }
  sdkProcessingMetadata.propagationContext = Object.assign({}, sdkProcessingMetadata.propagationContext, propagationContext);
};
