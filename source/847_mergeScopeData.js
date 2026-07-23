// Module ID: 847
// Function ID: 9456
// Name: mergeScopeData
// Dependencies: [65, 823, 825, 796, 833]
// Exports: applyScopeDataToEvent, getCombinedScopeData

// Module 847 (mergeScopeData)
import _toConsumableArray from "_toConsumableArray";

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
  sdkProcessingMetadata.sdkProcessingMetadata = require(823) /* merge */.merge(sdkProcessingMetadata.sdkProcessingMetadata, sdkProcessingMetadata, 2);
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
    const tmp7 = _toConsumableArray(sdkProcessingMetadata.breadcrumbs);
  }
  if (fingerprint.length) {
    const items1 = [];
    sdkProcessingMetadata.fingerprint = items1.concat(_toConsumableArray(sdkProcessingMetadata.fingerprint), _toConsumableArray(fingerprint));
    const tmp10 = _toConsumableArray(sdkProcessingMetadata.fingerprint);
  }
  if (eventProcessors.length) {
    const items2 = [];
    sdkProcessingMetadata.eventProcessors = items2.concat(_toConsumableArray(sdkProcessingMetadata.eventProcessors), _toConsumableArray(eventProcessors));
    const tmp13 = _toConsumableArray(sdkProcessingMetadata.eventProcessors);
  }
  if (attachments.length) {
    const items3 = [];
    sdkProcessingMetadata.attachments = items3.concat(_toConsumableArray(sdkProcessingMetadata.attachments), _toConsumableArray(attachments));
    const tmp16 = _toConsumableArray(sdkProcessingMetadata.attachments);
  }
  sdkProcessingMetadata.propagationContext = Object.assign({}, sdkProcessingMetadata.propagationContext, propagationContext);
}
function mergeAndOverwriteScopeData(arg0, arg1, arg2) {
  arg0[arg1] = require(823) /* merge */.merge(arg0[arg1], arg2, 1);
}
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
  let tmp2 = transactionName;
  if (transactionName) {
    tmp2 = "transaction" !== extra.type;
  }
  if (tmp2) {
    extra.transaction = transactionName;
  }
  if (span) {
    const _Object5 = Object;
    let obj = { trace: require(796) /* convertSpanLinksForEnvelope */.spanToTraceContext(span) };
    extra.contexts = Object.assign(obj, extra.contexts);
    const _Object6 = Object;
    obj = {};
    const obj2 = require(796) /* convertSpanLinksForEnvelope */;
    obj.dynamicSamplingContext = require(833) /* getDynamicSamplingContextFromClient */.getDynamicSamplingContextFromSpan(span);
    extra.sdkProcessingMetadata = Object.assign(obj, extra.sdkProcessingMetadata);
    const obj4 = require(833) /* getDynamicSamplingContextFromClient */;
    const rootSpan = require(796) /* convertSpanLinksForEnvelope */.getRootSpan(span);
    const obj5 = require(796) /* convertSpanLinksForEnvelope */;
    const description = require(796) /* convertSpanLinksForEnvelope */.spanToJSON(rootSpan).description;
    let tmp6 = description;
    if (description) {
      tmp6 = !extra.transaction;
    }
    if (tmp6) {
      tmp6 = "transaction" === extra.type;
    }
    if (tmp6) {
      extra.transaction = description;
    }
    const obj6 = require(796) /* convertSpanLinksForEnvelope */;
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
      delete tmp.fingerprint;
    }
    const items1 = [];
    breadcrumbs = extra.breadcrumbs;
    if (!breadcrumbs) {
      breadcrumbs = [];
    }
    const combined = items1.concat(_toConsumableArray(breadcrumbs), _toConsumableArray(breadcrumbs));
    let tmp11;
    if (combined.length) {
      tmp11 = combined;
    }
    extra.breadcrumbs = tmp11;
    const _Object7 = Object;
    extra.sdkProcessingMetadata = Object.assign({}, extra.sdkProcessingMetadata, sdkProcessingMetadata);
  }
};
export const getCombinedScopeData = function getCombinedScopeData(isolationScope, currentScope) {
  const globalScope = require(825) /* getCurrentScope */.getGlobalScope();
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
