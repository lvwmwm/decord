// Module ID: 1141
// Function ID: 13011
// Name: userInteractionIntegration
// Dependencies: [794, 1142, 1136, 1134, 1137]

// Module 1141 (userInteractionIntegration)
const require = arg1;
const dependencyMap = arg6;
arg5.userInteractionIntegration = function userInteractionIntegration() {
  return { name: "UserInteraction" };
};
arg5.startUserInteractionSpan = function startUserInteractionSpan(arg0) {
  let elementId;
  let op;
  let obj = require(794) /* registerSpanErrorInstrumentation */;
  const client = obj.getClient();
  if (client) {
    const currentReactNativeTracingIntegration = require(1142) /* getDefaultTracePropagationTargets */.getCurrentReactNativeTracingIntegration();
    if (currentReactNativeTracingIntegration) {
      ({ elementId, op } = arg0);
      if (client.getOptions().enableUserInteractionTracing) {
        if (elementId) {
          const obj4 = require(794) /* registerSpanErrorInstrumentation */;
          if (currentReactNativeTracingIntegration.state.currentRoute) {
            const activeSpan = obj4.getActiveSpan();
            let tmp21 = activeSpan;
            if (activeSpan) {
              tmp21 = !require(1136) /* getDefaultIdleNavigationSpanOptions */.isSentryInteractionSpan(activeSpan);
              const obj5 = require(1136) /* getDefaultIdleNavigationSpanOptions */;
            }
            if (activeSpan) {
              if (tmp21) {
                const debug7 = require(794) /* registerSpanErrorInstrumentation */.debug;
                const _HermesInternal8 = HermesInternal;
                debug7.warn("[" + "UserInteraction" + "] Did not create " + op + " transaction because active transaction " + require(794) /* registerSpanErrorInstrumentation */.spanToJSON(activeSpan).description + " exists on the scope.");
                const obj15 = require(794) /* registerSpanErrorInstrumentation */;
              }
            }
            const _HermesInternal5 = HermesInternal;
            const combined = "" + currentReactNativeTracingIntegration.state.currentRoute + "." + elementId;
            if (activeSpan) {
              if (obj6.spanToJSON(activeSpan).description === combined) {
                if (obj16.spanToJSON(activeSpan).op === op) {
                  const debug5 = require(794) /* registerSpanErrorInstrumentation */.debug;
                  const _HermesInternal6 = HermesInternal;
                  debug5.warn("[" + "UserInteraction" + "] Did not create " + op + " transaction because it the same transaction " + require(794) /* registerSpanErrorInstrumentation */.spanToJSON(activeSpan).description + " already exists on the scope.");
                  const obj7 = require(794) /* registerSpanErrorInstrumentation */;
                }
                obj16 = require(794) /* registerSpanErrorInstrumentation */;
              }
              obj6 = require(794) /* registerSpanErrorInstrumentation */;
            }
            const currentScope = require(794) /* registerSpanErrorInstrumentation */.getCurrentScope();
            obj = { name: combined, op, scope: currentScope };
            const obj8 = require(794) /* registerSpanErrorInstrumentation */;
            const result = require(1136) /* getDefaultIdleNavigationSpanOptions */.clearActiveSpanFromScope(currentScope);
            const obj10 = require(1136) /* getDefaultIdleNavigationSpanOptions */;
            obj = { idleTimeout: currentReactNativeTracingIntegration.options.idleTimeoutMs, finalTimeout: currentReactNativeTracingIntegration.options.finalTimeoutMs };
            const startIdleSpanResult = require(1136) /* getDefaultIdleNavigationSpanOptions */.startIdleSpan(obj, obj);
            const attr = startIdleSpanResult.setAttribute(require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, require(1134).SPAN_ORIGIN_MANUAL_INTERACTION);
            const obj11 = require(1136) /* getDefaultIdleNavigationSpanOptions */;
            const result1 = require(1137) /* discardEmptyNavigationSpan */.onlySampleIfChildSpans(client, startIdleSpanResult);
            const debug6 = require(794) /* registerSpanErrorInstrumentation */.debug;
            const _HermesInternal7 = HermesInternal;
            debug6.log("[" + "UserInteraction" + "] User Interaction Tracing Created " + op + " transaction " + combined + ".");
            return startIdleSpanResult;
          } else {
            const debug4 = obj4.debug;
            const _HermesInternal4 = HermesInternal;
            debug4.log("[" + "UserInteraction" + "] User Interaction Tracing can not create transaction without a current route.");
          }
        } else {
          const debug3 = require(794) /* registerSpanErrorInstrumentation */.debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("[" + "UserInteraction" + "] User Interaction Tracing can not create transaction with undefined elementId.");
        }
      } else {
        const debug2 = require(794) /* registerSpanErrorInstrumentation */.debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[" + "UserInteraction" + "] User Interaction Tracing is disabled.");
      }
    } else {
      const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
      const _HermesInternal = HermesInternal;
      debug.log("[" + "UserInteraction" + "] Tracing integration is not available. Can not start user interaction span.");
    }
    const obj3 = require(1142) /* getDefaultTracePropagationTargets */;
  }
};
