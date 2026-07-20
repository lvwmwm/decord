// Module ID: 847
// Function ID: 9451
// Name: mergeScopeData
// Dependencies: []
// Exports: applyScopeDataToEvent, getCombinedScopeData

// Module 847 (mergeScopeData)
function mergeScopeData(sdkProcessingMetadata, extra) {
  let attachments;
  let attributes;
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
  ({ tags, attributes, user, contexts, sdkProcessingMetadata, propagationContext } = extra);
  mergeAndOverwriteScopeData(sdkProcessingMetadata, "extra", extra.extra);
  mergeAndOverwriteScopeData(sdkProcessingMetadata, "tags", tags);
  mergeAndOverwriteScopeData(sdkProcessingMetadata, "attributes", attributes);
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
    const tmp7 = callback(sdkProcessingMetadata.breadcrumbs);
  }
  if (fingerprint.length) {
    const items1 = [];
    sdkProcessingMetadata.fingerprint = items1.concat(callback(sdkProcessingMetadata.fingerprint), callback(fingerprint));
    const tmp10 = callback(sdkProcessingMetadata.fingerprint);
  }
  if (eventProcessors.length) {
    const items2 = [];
    sdkProcessingMetadata.eventProcessors = items2.concat(callback(sdkProcessingMetadata.eventProcessors), callback(eventProcessors));
    const tmp13 = callback(sdkProcessingMetadata.eventProcessors);
  }
  if (attachments.length) {
    const items3 = [];
    sdkProcessingMetadata.attachments = items3.concat(callback(sdkProcessingMetadata.attachments), callback(attachments));
    const tmp16 = callback(sdkProcessingMetadata.attachments);
  }
  sdkProcessingMetadata.propagationContext = Object.assign({}, sdkProcessingMetadata.propagationContext, propagationContext);
}
function mergeAndOverwriteScopeData(arg0, arg1, arg2) {
  arg0[arg1] = require(dependencyMap[1]).merge(arg0[arg1], arg2, 1);
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

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
  ({ fingerprint, span, extra, tags, user, contexts, level, transactionName } = arg1);
  ({ breadcrumbs, sdkProcessingMetadata } = arg1);
  if (Object.keys(extra).length) {
    const _Object = Object;
    extra.extra = Object.assign({}, extra, extra.extra);
  }
  if (Object.keys(tags).length) {
    const _Object2 = Object;
    extra.tags = Object.assign({}, tags, extra.tags);
  }
  if (Object.keys(user).length) {
    const _Object3 = Object;
    extra.user = Object.assign({}, user, extra.user);
  }
  if (Object.keys(contexts).length) {
    const _Object4 = Object;
    extra.contexts = Object.assign({}, contexts, extra.contexts);
  }
  if (level) {
    extra.level = level;
  }
  let tmp = transactionName;
  if (transactionName) {
    tmp = "transaction" !== extra.type;
  }
  if (tmp) {
    extra.transaction = transactionName;
  }
  if (span) {
    const _Object5 = Object;
    let obj = { trace: require(dependencyMap[3]).spanToTraceContext(span) };
    extra.contexts = Object.assign(obj, extra.contexts);
    const _Object6 = Object;
    obj = {};
    const obj2 = require(dependencyMap[3]);
    obj.dynamicSamplingContext = require(dependencyMap[4]).getDynamicSamplingContextFromSpan(span);
    extra.sdkProcessingMetadata = Object.assign(obj, extra.sdkProcessingMetadata);
    const obj4 = require(dependencyMap[4]);
    const rootSpan = require(dependencyMap[3]).getRootSpan(span);
    const obj5 = require(dependencyMap[3]);
    const description = require(dependencyMap[3]).spanToJSON(rootSpan).description;
    let tmp5 = description;
    if (description) {
      tmp5 = !extra.transaction;
    }
    if (tmp5) {
      tmp5 = "transaction" === extra.type;
    }
    if (tmp5) {
      extra.transaction = description;
    }
    const obj6 = require(dependencyMap[3]);
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
    if (!extra.fingerprint.length) {
      delete r2.fingerprint;
    }
    const items1 = [];
    breadcrumbs = extra.breadcrumbs;
    if (!breadcrumbs) {
      breadcrumbs = [];
    }
    const combined = items1.concat(callback(breadcrumbs), callback(breadcrumbs));
    let tmp10;
    if (combined.length) {
      tmp10 = combined;
    }
    extra.breadcrumbs = tmp10;
    const _Object7 = Object;
    extra.sdkProcessingMetadata = Object.assign({}, extra.sdkProcessingMetadata, sdkProcessingMetadata);
  }
};
export const getCombinedScopeData = function getCombinedScopeData(isolationScope, currentScope) {
  const globalScope = require(dependencyMap[2]).getGlobalScope();
  const scopeData = globalScope.getScopeData();
  if (isolationScope) {
    mergeScopeData(scopeData, isolationScope.getScopeData());
  }
  if (currentScope) {
    mergeScopeData(scopeData, currentScope.getScopeData());
  }
  return scopeData;
};
export { mergeAndOverwriteScopeData };
export { mergeScopeData };
