// Module ID: 1042
// Function ID: 1043
// Name: userInteractionIntegration
// Dependencies: [694, 1043, 1037, 1035, 1038]
// Exports: startUserInteractionSpan, userInteractionIntegration

// Module 1042 (userInteractionIntegration)
import _mod694 from "module_694" /* 694 */;
import DEFAULT_NAVIGATION_SPAN_NAME from "DEFAULT_NAVIGATION_SPAN_NAME" /* 1037 */;
import _mod1038 from "module_1038" /* 1038 */;
import _mod1043 from "module_1043" /* 1043 */;

const UserInteraction = "UserInteraction";

export const userInteractionIntegration = () => ({ name: UserInteraction });
export const startUserInteractionSpan = (arg0) => {
  let elementId;
  let op;
  const obj = _mod694;
  const client = obj.getClient();
  if (client) {
    const tmpResult = _mod1043;
    const currentReactNativeTracingIntegration = tmpResult.getCurrentReactNativeTracingIntegration();
    if (currentReactNativeTracingIntegration) {
      ({ elementId, op } = arg0);
      if (client.getOptions().enableUserInteractionTracing) {
        if (elementId) {
          const currentRoute = currentReactNativeTracingIntegration.state.currentRoute;
          const tmpResult11 = _mod694;
          if (currentRoute) {
            const activeSpan = tmpResult11.getActiveSpan();
            let tmp18 = activeSpan;
            if (tmp18) {
              const tmpResult12 = DEFAULT_NAVIGATION_SPAN_NAME;
              tmp18 = !tmpResult12.isSentryInteractionSpan(activeSpan);
            }
            if (activeSpan) {
              if (tmp18) {
                const debug7 = tmp(694).debug;
                const warn2 = debug7.warn;
                const _HermesInternal8 = HermesInternal;
                const tmpResult13 = _mod694;
                warn2("[" + UserInteraction + "] Did not create " + op + " transaction because active transaction " + tmpResult13.spanToJSON(activeSpan).description + " exists on the scope.");
              }
            }
            const _HermesInternal5 = HermesInternal;
            const combined = "" + currentReactNativeTracingIntegration.state.currentRoute + "." + elementId;
            if (activeSpan) {
              const tmpResult14 = _mod694;
              if (tmpResult14.spanToJSON(activeSpan).description === combined) {
                const tmpResult15 = _mod694;
                if (tmpResult15.spanToJSON(activeSpan).op === op) {
                  const debug5 = tmp(694).debug;
                  const warn = debug5.warn;
                  const _HermesInternal6 = HermesInternal;
                  const tmpResult16 = _mod694;
                  warn("[" + UserInteraction + "] Did not create " + op + " transaction because it the same transaction " + tmpResult16.spanToJSON(activeSpan).description + " already exists on the scope.");
                }
              }
            }
            const tmpResult17 = _mod694;
            const currentScope = tmpResult17.getCurrentScope();
            const obj2 = { name: combined, op, scope: currentScope };
            const tmpResult18 = DEFAULT_NAVIGATION_SPAN_NAME;
            const result = tmpResult18.clearActiveSpanFromScope(currentScope);
            const obj3 = { idleTimeout: currentReactNativeTracingIntegration.options.idleTimeoutMs, finalTimeout: currentReactNativeTracingIntegration.options.finalTimeoutMs };
            const tmpResult19 = DEFAULT_NAVIGATION_SPAN_NAME;
            const startIdleSpanResult = tmpResult19.startIdleSpan(obj2, obj3);
            const setAttribute = startIdleSpanResult.setAttribute;
            const attr = setAttribute(tmp(694).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmp(1035).SPAN_ORIGIN_MANUAL_INTERACTION);
            const tmpResult20 = _mod1038;
            const result1 = tmpResult20.onlySampleIfChildSpans(client, startIdleSpanResult);
            const debug6 = tmp(694).debug;
            const _HermesInternal7 = HermesInternal;
            debug6.log("[" + UserInteraction + "] User Interaction Tracing Created " + op + " transaction " + combined + ".");
            return startIdleSpanResult;
          } else {
            const debug4 = tmpResult11.debug;
            const _HermesInternal4 = HermesInternal;
            debug4.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction without a current route.");
          }
        } else {
          const debug3 = tmp(694).debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction with undefined elementId.");
        }
      } else {
        const debug2 = tmp(694).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[" + UserInteraction + "] User Interaction Tracing is disabled.");
      }
    } else {
      const debug = tmp(694).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[" + UserInteraction + "] Tracing integration is not available. Can not start user interaction span.");
    }
  }
};
