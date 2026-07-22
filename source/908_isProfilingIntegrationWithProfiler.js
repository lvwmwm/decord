// Module ID: 908
// Function ID: 9965
// Name: isProfilingIntegrationWithProfiler
// Dependencies: []

// Module 908 (isProfilingIntegrationWithProfiler)
function isProfilingIntegrationWithProfiler(_profiler) {
  let tmp2 = !tmp;
  if (!!_profiler) {
    tmp2 = undefined !== _profiler._profiler;
  }
  if (tmp2) {
    tmp2 = "function" === typeof _profiler._profiler.start;
  }
  if (tmp2) {
    tmp2 = "function" === typeof _profiler._profiler.stop;
  }
  return tmp2;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.profiler = {
  startProfiler() {
    const client = arg1(arg6[0]).getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (isProfilingIntegrationWithProfiler(integrationByName)) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (arg1(arg6[1]).DEBUG_BUILD) {
          const debug3 = arg1(arg6[2]).debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
      } else if (arg1(arg6[1]).DEBUG_BUILD) {
        const debug2 = arg1(arg6[2]).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (arg1(arg6[1]).DEBUG_BUILD) {
      const debug = arg1(arg6[2]).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = arg1(arg6[0]).getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (isProfilingIntegrationWithProfiler(integrationByName)) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (arg1(arg6[1]).DEBUG_BUILD) {
          const debug3 = arg1(arg6[2]).debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
      } else if (arg1(arg6[1]).DEBUG_BUILD) {
        const debug2 = arg1(arg6[2]).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (arg1(arg6[1]).DEBUG_BUILD) {
      const debug = arg1(arg6[2]).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};
