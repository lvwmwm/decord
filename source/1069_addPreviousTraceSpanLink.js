// Module ID: 1069
// Function ID: 12285
// Name: addPreviousTraceSpanLink
// Dependencies: [77, 1009, 1049, 1053, 1052, 1057, 1054, 1056, 1055, 1070, 794, 1048, 1004]
// Exports: linkTraces

// Module 1069 (addPreviousTraceSpanLink)
import _defineProperty from "_defineProperty";
import "addClsInstrumentationHandler";
import createFrame from "createFrame";
import breadcrumbsIntegration from "breadcrumbsIntegration";
import _wrapTimeFunction from "_wrapTimeFunction";
import browserSessionIntegration from "browserSessionIntegration";
import _getUnhandledRejectionError from "_getUnhandledRejectionError";
import httpContextIntegration from "httpContextIntegration";
import linkedErrorsIntegration from "linkedErrorsIntegration";
import isSpotlightInteraction from "isSpotlightInteraction";

function addPreviousTraceSpanLink(spanContext, spanContext2, dsc) {
  let spanId;
  let traceId;
  let obj = require(794) /* registerSpanErrorInstrumentation */;
  const spanToJSONResult = obj.spanToJSON(spanContext2);
  obj = { spanContext: spanContext2.spanContext(), startTimestamp: spanToJSONResult.start_timestamp };
  dsc = dsc.dsc;
  let sample_rate;
  if (null != dsc) {
    sample_rate = dsc.sample_rate;
  }
  const NumberResult = Number(sample_rate);
  if (null != NumberResult) {
    let NumberResult1 = NumberResult;
  } else {
    const data = spanToJSONResult.data;
    let tmp5;
    if (null != data) {
      tmp5 = tmp4[require(undefined, 794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
    }
    NumberResult1 = Number(tmp5);
  }
  while (true) {
    obj.sampleRate = NumberResult1;
    obj.sampleRand = dsc.sampleRand;
    if (spanContext) {
      spanContext = spanContext.spanContext;
      let tmp10 = spanContext;
      if (spanContext.traceId !== spanToJSONResult.trace_id) {
        let tmp26 = globalThis;
        let _Date = Date;
        let num2 = 1000;
        let num3 = 3600;
        tmp10 = obj;
        if (Date.now() / 1000 - spanContext.startTimestamp <= 3600) {
          let tmp27 = require;
          let tmp28 = dependencyMap;
          let num4 = 11;
          if (require(1048).DEBUG_BUILD) {
            let tmp11 = require;
            let tmp12 = dependencyMap;
            let debug = require(794) /* registerSpanErrorInstrumentation */.debug;
            let _JSON = JSON;
            let json = JSON.stringify(spanContext);
            let _JSON2 = JSON;
            let _Object = Object;
            obj = { op: spanToJSONResult.op };
            let _HermesInternal = HermesInternal;
            let str = "Adding previous_trace `";
            let str2 = "` link to span `";
            let str3 = "`";
            let tmp14 = json;
            let logResult = debug.log("Adding previous_trace `" + json + "` link to span `" + JSON.stringify(Object.assign(obj, spanContext2.spanContext())) + "`");
          }
          let obj1 = { context: spanContext };
          let tmp16 = _defineProperty;
          let tmp17 = require;
          let tmp18 = dependencyMap;
          let str4 = "previous_trace";
          obj1.attributes = _defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE, "previous_trace");
          let addLinkResult = spanContext2.addLink(obj1);
          ({ traceId, spanId } = spanContext);
          let tmp21 = spanContextSampled;
          let tmp20 = c4;
          let num = 0;
          if (spanContextSampled(spanContext)) {
            num = 1;
          }
          let _HermesInternal2 = HermesInternal;
          let str5 = "";
          let str6 = "-";
          let tmp22 = traceId;
          let str7 = "-";
          let tmp23 = spanId;
          let str8 = "-";
          let tmp24 = num;
          let attr = spanContext2.setAttribute(tmp20, "" + traceId + "-" + spanId + "-" + num);
          tmp10 = obj;
        }
      }
      return tmp10;
    } else {
      return obj;
    }
  }
}
function storePreviousTraceInSessionStorage(arg0) {
  const sessionStorage = require(1004) /* ignoreNextOnError */.WINDOW.sessionStorage;
  const result = sessionStorage.setItem(sentry_previous_trace, JSON.stringify(arg0));
}
function getPreviousTraceFromSessionStorage() {
  const sessionStorage = require(1004) /* ignoreNextOnError */.WINDOW.sessionStorage;
  let value;
  if (null != sessionStorage) {
    value = sessionStorage.getItem(sentry_previous_trace);
  }
  return JSON.parse(value);
}
function spanContextSampled(spanContext) {
  return 1 === spanContext.traceFlags;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const sentry_previous_trace = "sentry_previous_trace";
let c4 = "sentry.previous_trace";

export const PREVIOUS_TRACE_KEY = "sentry_previous_trace";
export const PREVIOUS_TRACE_MAX_DURATION = 3600;
export const PREVIOUS_TRACE_TMP_SPAN_ATTRIBUTE = "sentry.previous_trace";
export { addPreviousTraceSpanLink };
export { getPreviousTraceFromSessionStorage };
export const linkTraces = function linkTraces(on, linkPreviousTrace) {
  const require = tmp;
  let tmp2;
  if ("session-storage" === linkPreviousTrace.linkPreviousTrace) {
    tmp2 = getPreviousTraceFromSessionStorage();
  }
  const dependencyMap = tmp2;
  on.on("spanStart", (arg0) => {
    if (obj.getRootSpan(arg0) === arg0) {
      const currentScope = tmp(tmp2[10]).getCurrentScope();
      tmp2 = outer1_5(tmp2, arg0, currentScope.getPropagationContext());
      if (tmp) {
        outer1_6(tmp2);
      }
      const obj2 = tmp(tmp2[10]);
    }
  });
  let c2 = true;
  if (linkPreviousTrace.consistentTraceSampling) {
    on.on("beforeSampling", (spanAttributes) => {
      if (tmp2) {
        let obj = tmp(tmp2[10]);
        const currentScope = obj.getCurrentScope();
        const propagationContext = currentScope.getPropagationContext();
        if (_true) {
          if (propagationContext.parentSpanId) {
            _true = false;
          }
        }
        const _Object = Object;
        obj = {};
        const _Object2 = Object;
        obj = {};
        const _String = String;
        obj.sample_rate = String(tmp2.sampleRate);
        const _String2 = String;
        obj.sampled = String(outer1_8(tmp2.spanContext));
        obj.dsc = Object.assign({}, propagationContext.dsc, obj);
        obj.sampleRand = tmp2.sampleRand;
        const result = currentScope.setPropagationContext(Object.assign({}, propagationContext, obj));
        spanAttributes.parentSampled = outer1_8(tmp2.spanContext);
        spanAttributes.parentSampleRate = tmp2.sampleRate;
        const _Object3 = Object;
        spanAttributes.spanAttributes = Object.assign({}, spanAttributes.spanAttributes, _true({}, tmp(tmp2[10]).SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE, tmp2.sampleRate));
      }
    });
  }
};
export { spanContextSampled };
export { storePreviousTraceInSessionStorage };
