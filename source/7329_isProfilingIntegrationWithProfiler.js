// Module ID: 7329
// Function ID: 59094
// Name: isProfilingIntegrationWithProfiler
// Dependencies: []

// Module 7329 (isProfilingIntegrationWithProfiler)
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
          const logger3 = arg1(arg6[2]).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (arg1(arg6[1]).DEBUG_BUILD) {
        const logger2 = arg1(arg6[2]).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (arg1(arg6[1]).DEBUG_BUILD) {
      const logger = arg1(arg6[2]).logger;
      logger.warn("No Sentry client available, profiling is not started");
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
          const logger3 = arg1(arg6[2]).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (arg1(arg6[1]).DEBUG_BUILD) {
        const logger2 = arg1(arg6[2]).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (arg1(arg6[1]).DEBUG_BUILD) {
      const logger = arg1(arg6[2]).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
