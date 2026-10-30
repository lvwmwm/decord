// Module ID: 1027
// Function ID: 1028
// Name: userInteractionIntegration
// Dependencies: [681, 1028, 1022, 1020, 1023]
// Exports: startUserInteractionSpan, userInteractionIntegration

// Module 1027 (userInteractionIntegration)
import _mod681 from "module_681" /* 681 */;
import DEFAULT_NAVIGATION_SPAN_NAME from "DEFAULT_NAVIGATION_SPAN_NAME" /* 1022 */;
import _mod1023 from "module_1023" /* 1023 */;
import _mod1028 from "module_1028" /* 1028 */;

const UserInteraction = "UserInteraction";

export const userInteractionIntegration = () => ({ name: UserInteraction });
export const startUserInteractionSpan = (arg0) => {
  let elementId;
  let op;
  const obj = _mod681;
  const client = obj.getClient();
  if (client) {
    const tmpResult = _mod1028;
    const currentReactNativeTracingIntegration = tmpResult.getCurrentReactNativeTracingIntegration();
    if (currentReactNativeTracingIntegration) {
      ({ elementId, op } = arg0);
      if (client.getOptions().enableUserInteractionTracing) {
        if (elementId) {
          const currentRoute = currentReactNativeTracingIntegration.state.currentRoute;
          const tmpResult11 = _mod681;
          if (currentRoute) {
            const activeSpan = tmpResult11.getActiveSpan();
            let tmp18 = activeSpan;
            if (tmp18) {
              const tmpResult12 = DEFAULT_NAVIGATION_SPAN_NAME;
              tmp18 = !tmpResult12.isSentryInteractionSpan(activeSpan);
            }
            if (activeSpan) {
              if (tmp18) {
                const debug7 = tmp(681).debug;
                const warn2 = debug7.warn;
                const _HermesInternal8 = HermesInternal;
                const tmpResult13 = _mod681;
                warn2("[" + UserInteraction + "] Did not create " + op + " transaction because active transaction " + tmpResult13.spanToJSON(activeSpan).description + " exists on the scope.");
              }
            }
            const _HermesInternal5 = HermesInternal;
            const combined = "" + currentReactNativeTracingIntegration.state.currentRoute + "." + elementId;
            if (activeSpan) {
              const tmpResult14 = _mod681;
              if (tmpResult14.spanToJSON(activeSpan).description === combined) {
                const tmpResult15 = _mod681;
                if (tmpResult15.spanToJSON(activeSpan).op === op) {
                  const debug5 = tmp(681).debug;
                  const warn = debug5.warn;
                  const _HermesInternal6 = HermesInternal;
                  const tmpResult16 = _mod681;
                  warn("[" + UserInteraction + "] Did not create " + op + " transaction because it the same transaction " + tmpResult16.spanToJSON(activeSpan).description + " already exists on the scope.");
                }
              }
            }
            const tmpResult17 = _mod681;
            const currentScope = tmpResult17.getCurrentScope();
            const obj2 = { name: combined, op, scope: currentScope };
            const tmpResult18 = DEFAULT_NAVIGATION_SPAN_NAME;
            const result = tmpResult18.clearActiveSpanFromScope(currentScope);
            const obj3 = { idleTimeout: currentReactNativeTracingIntegration.options.idleTimeoutMs, finalTimeout: currentReactNativeTracingIntegration.options.finalTimeoutMs };
            const tmpResult19 = DEFAULT_NAVIGATION_SPAN_NAME;
            const startIdleSpanResult = tmpResult19.startIdleSpan(obj2, obj3);
            const setAttribute = startIdleSpanResult.setAttribute;
            const attr = setAttribute(tmp(681).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmp(1020).SPAN_ORIGIN_MANUAL_INTERACTION);
            const tmpResult20 = _mod1023;
            const result1 = tmpResult20.onlySampleIfChildSpans(client, startIdleSpanResult);
            const debug6 = tmp(681).debug;
            const _HermesInternal7 = HermesInternal;
            debug6.log("[" + UserInteraction + "] User Interaction Tracing Created " + op + " transaction " + combined + ".");
            return startIdleSpanResult;
          } else {
            const debug4 = tmpResult11.debug;
            const _HermesInternal4 = HermesInternal;
            debug4.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction without a current route.");
          }
        } else {
          const debug3 = tmp(681).debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction with undefined elementId.");
        }
      } else {
        const debug2 = tmp(681).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[" + UserInteraction + "] User Interaction Tracing is disabled.");
      }
    } else {
      const debug = tmp(681).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[" + UserInteraction + "] Tracing integration is not available. Can not start user interaction span.");
    }
  }
};
