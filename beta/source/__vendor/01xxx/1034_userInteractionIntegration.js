// Module ID: 1034
// Function ID: 1035
// Name: userInteractionIntegration
// Dependencies: [686, 1035, 1029, 1027, 1030]
// Exports: startUserInteractionSpan, userInteractionIntegration

// Module 1034 (userInteractionIntegration)
import _mod686 from "module_686" /* 686 */;

require = arg1;
const dependencyMap = arg6;
const UserInteraction = "UserInteraction";

export () => ({ name: UserInteraction })
export const startUserInteractionSpan = (arg0) => {
  const client = _mod686.getClient();
  if (client) {
    const currentReactNativeTracingIntegration = tmp(1035).getCurrentReactNativeTracingIntegration();
    if (currentReactNativeTracingIntegration) {
      ({ elementId, op } = arg0);
      if (client.getOptions().enableUserInteractionTracing) {
        if (elementId) {
          const tmpResult11 = tmp(686);
          if (currentReactNativeTracingIntegration.state.currentRoute) {
            const activeSpan = tmpResult11.getActiveSpan();
            let tmp18 = activeSpan;
            if (activeSpan) {
              tmp18 = !tmp(1029).isSentryInteractionSpan(activeSpan);
              const tmpResult12 = tmp(1029);
            }
            if (activeSpan) {
              if (tmp18) {
                const debug7 = tmp(686).debug;
                const _HermesInternal8 = HermesInternal;
                debug7.warn("[" + UserInteraction + "] Did not create " + op + " transaction because active transaction " + tmp(686).spanToJSON(activeSpan).description + " exists on the scope.");
                const tmpResult13 = tmp(686);
              }
            }
            const _HermesInternal5 = HermesInternal;
            const combined = "" + currentReactNativeTracingIntegration.state.currentRoute + "." + elementId;
            if (activeSpan) {
              if (tmpResult14.spanToJSON(activeSpan).description === combined) {
                if (tmpResult15.spanToJSON(activeSpan).op === op) {
                  const debug5 = tmp(686).debug;
                  const _HermesInternal6 = HermesInternal;
                  debug5.warn("[" + UserInteraction + "] Did not create " + op + " transaction because it the same transaction " + tmp(686).spanToJSON(activeSpan).description + " already exists on the scope.");
                  const tmpResult16 = tmp(686);
                }
                tmpResult15 = tmp(686);
              }
              tmpResult14 = tmp(686);
            }
            const currentScope = tmp(686).getCurrentScope();
            const obj2 = { name: combined, op, scope: currentScope };
            const tmpResult17 = tmp(686);
            const result = tmp(1029).clearActiveSpanFromScope(currentScope);
            const tmpResult18 = tmp(1029);
            const obj3 = { idleTimeout: currentReactNativeTracingIntegration.options.idleTimeoutMs, finalTimeout: currentReactNativeTracingIntegration.options.finalTimeoutMs };
            const startIdleSpanResult = tmp(1029).startIdleSpan(obj2, obj3);
            const attr = startIdleSpanResult.setAttribute(tmp(686).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmp(1027).SPAN_ORIGIN_MANUAL_INTERACTION);
            const tmpResult19 = tmp(1029);
            const result1 = tmp(1030).onlySampleIfChildSpans(client, startIdleSpanResult);
            const debug6 = tmp(686).debug;
            const _HermesInternal7 = HermesInternal;
            debug6.log("[" + UserInteraction + "] User Interaction Tracing Created " + op + " transaction " + combined + ".");
            return startIdleSpanResult;
          } else {
            const debug4 = tmpResult11.debug;
            const _HermesInternal4 = HermesInternal;
            debug4.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction without a current route.");
          }
        } else {
          const debug3 = tmp(686).debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction with undefined elementId.");
        }
      } else {
        const debug2 = tmp(686).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[" + UserInteraction + "] User Interaction Tracing is disabled.");
      }
    } else {
      const debug = tmp(686).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[" + UserInteraction + "] Tracing integration is not available. Can not start user interaction span.");
    }
    const tmpResult = tmp(1035);
  }
};
