// Module ID: 1141
// Function ID: 13005
// Name: userInteractionIntegration
// Dependencies: []

// Module 1141 (userInteractionIntegration)
arg5.userInteractionIntegration = function userInteractionIntegration() {
  return { name: "UserInteraction" };
};
arg5.startUserInteractionSpan = function startUserInteractionSpan(arg0) {
  let elementId;
  let op;
  let obj = arg1(arg6[0]);
  const client = obj.getClient();
  if (client) {
    const currentReactNativeTracingIntegration = arg1(arg6[1]).getCurrentReactNativeTracingIntegration();
    if (currentReactNativeTracingIntegration) {
      ({ elementId, op } = arg0);
      if (client.getOptions().enableUserInteractionTracing) {
        if (elementId) {
          const obj4 = arg1(arg6[0]);
          if (currentReactNativeTracingIntegration.state.currentRoute) {
            const activeSpan = obj4.getActiveSpan();
            let tmp21 = activeSpan;
            if (activeSpan) {
              tmp21 = !arg1(arg6[2]).isSentryInteractionSpan(activeSpan);
              const obj5 = arg1(arg6[2]);
            }
            if (activeSpan) {
              if (tmp21) {
                const debug7 = arg1(arg6[0]).debug;
                const _HermesInternal8 = HermesInternal;
                debug7.warn("[" + "UserInteraction" + "] Did not create " + op + " transaction because active transaction " + arg1(arg6[0]).spanToJSON(activeSpan).description + " exists on the scope.");
                const obj15 = arg1(arg6[0]);
              }
            }
            const _HermesInternal5 = HermesInternal;
            const combined = "" + currentReactNativeTracingIntegration.state.currentRoute + "." + elementId;
            if (activeSpan) {
              if (obj6.spanToJSON(activeSpan).description === combined) {
                if (obj16.spanToJSON(activeSpan).op === op) {
                  const debug5 = arg1(arg6[0]).debug;
                  const _HermesInternal6 = HermesInternal;
                  debug5.warn("[" + "UserInteraction" + "] Did not create " + op + " transaction because it the same transaction " + arg1(arg6[0]).spanToJSON(activeSpan).description + " already exists on the scope.");
                  const obj7 = arg1(arg6[0]);
                }
                const obj16 = arg1(arg6[0]);
              }
              const obj6 = arg1(arg6[0]);
            }
            const currentScope = arg1(arg6[0]).getCurrentScope();
            obj = { name: combined, op, scope: currentScope };
            const obj8 = arg1(arg6[0]);
            const result = arg1(arg6[2]).clearActiveSpanFromScope(currentScope);
            const obj10 = arg1(arg6[2]);
            obj = { idleTimeout: currentReactNativeTracingIntegration.options.idleTimeoutMs, finalTimeout: currentReactNativeTracingIntegration.options.finalTimeoutMs };
            const startIdleSpanResult = arg1(arg6[2]).startIdleSpan(obj, obj);
            const attr = startIdleSpanResult.setAttribute(arg1(arg6[0]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, arg1(arg6[3]).SPAN_ORIGIN_MANUAL_INTERACTION);
            const obj11 = arg1(arg6[2]);
            const result1 = arg1(arg6[4]).onlySampleIfChildSpans(client, startIdleSpanResult);
            const debug6 = arg1(arg6[0]).debug;
            const _HermesInternal7 = HermesInternal;
            debug6.log("[" + "UserInteraction" + "] User Interaction Tracing Created " + op + " transaction " + combined + ".");
            return startIdleSpanResult;
          } else {
            const debug4 = obj4.debug;
            const _HermesInternal4 = HermesInternal;
            debug4.log("[" + "UserInteraction" + "] User Interaction Tracing can not create transaction without a current route.");
          }
        } else {
          const debug3 = arg1(arg6[0]).debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("[" + "UserInteraction" + "] User Interaction Tracing can not create transaction with undefined elementId.");
        }
      } else {
        const debug2 = arg1(arg6[0]).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[" + "UserInteraction" + "] User Interaction Tracing is disabled.");
      }
    } else {
      const debug = arg1(arg6[0]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[" + "UserInteraction" + "] Tracing integration is not available. Can not start user interaction span.");
    }
    const obj3 = arg1(arg6[1]);
  }
};
