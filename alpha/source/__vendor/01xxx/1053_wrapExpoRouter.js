// Module ID: 1053
// Function ID: 1054
// Name: wrapExpoRouter
// Dependencies: [681, 1020]
// Exports: wrapExpoRouter

// Module 1053 (wrapExpoRouter)
import _mod681 from "module_681" /* 681 */;
import SPAN_ORIGIN_AUTO_INTERACTION from "SPAN_ORIGIN_AUTO_INTERACTION" /* 1020 */;


export function wrapExpoRouter(prefetch) {
  let prefetch1;
  if (null != prefetch) {
    prefetch1 = prefetch.prefetch;
  }
  if (prefetch1) {
    if (prefetch.__sentryPrefetchWrapped) {
      return prefetch;
    } else {
      prefetch = prefetch.prefetch;
      let closure_0 = prefetch.bind(prefetch);
      prefetch.prefetch = (pathname) => {
        let json;
        let obj2;
        let str = pathname;
        if (typeof pathname !== "string") {
          pathname = pathname && typeof pathname === "object" && "pathname" in pathname && pathname.pathname;
          str = "unknown";
          if (pathname) {
            str = pathname.pathname;
          }
        }
        const tmp3 = _mod681;
        const obj = { op: "navigation.prefetch", name: "Prefetch " + str, attributes: obj2 };
        const startInactiveSpan = tmp3.startInactiveSpan;
        obj2 = { "sentry.origin": SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_EXPO_ROUTER_PREFETCH, "route.href": json, "route.name": str };
        json = pathname;
        if (typeof pathname !== "string") {
          const _JSON = JSON;
          json = JSON.stringify(pathname);
        }
        const startInactiveSpanResult = startInactiveSpan(obj);
        try {
          const tmp6 = closure_0(pathname);
          if (tmp6) {
            if (typeof tmp6 === "object") {
              if ("then" in tmp6) {
                let catchPromise;
                if (typeof tmp6.then === "function") {
                  const nextPromise = tmp6.then((result) => {
                    if (null != startInactiveSpanResult) {
                      const setStatus = obj.setStatus;
                      const obj2 = { code: closure_2_0(closure_2_1[0]).SPAN_STATUS_OK };
                      setStatus(obj2);
                    }
                    if (null != startInactiveSpanResult) {
                      startInactiveSpanResult.end();
                    }
                    return result;
                  });
                  catchPromise = nextPromise.catch((error) => {
                    if (null != startInactiveSpanResult) {
                      const setStatus = obj.setStatus;
                      const _String = String;
                      const obj2 = { code: closure_2_0(closure_2_1[0]).SPAN_STATUS_ERROR, message: String(error) };
                      setStatus(obj2);
                    }
                    if (null != startInactiveSpanResult) {
                      startInactiveSpanResult.end();
                    }
                    throw error;
                  });
                }
                return catchPromise;
              }
            }
          }
          if (null != startInactiveSpanResult) {
            let setStatus = startInactiveSpanResult.setStatus;
            const obj3 = { code: _mod681.SPAN_STATUS_OK };
            setStatus(obj3);
          }
          if (null != startInactiveSpanResult) {
            startInactiveSpanResult.end();
          }
          catchPromise = tmp6;
        } catch (tmp14) {
          if (null != startInactiveSpanResult) {
            const setStatus2 = startInactiveSpanResult.setStatus;
            let _String = String;
            const obj4 = { code: _mod681.SPAN_STATUS_ERROR, message: String(tmp14) };
            setStatus2(obj4);
          }
          if (null != startInactiveSpanResult) {
            startInactiveSpanResult.end();
          }
          throw tmp14;
        }
      };
      prefetch.__sentryPrefetchWrapped = true;
      return prefetch;
    }
  } else {
    return prefetch;
  }
}
