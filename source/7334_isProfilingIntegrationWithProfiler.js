// Module ID: 7334
// Function ID: 59139
// Name: isProfilingIntegrationWithProfiler
// Dependencies: [7263, 7264, 7236]

// Module 7334 (isProfilingIntegrationWithProfiler)
const require = arg1;
const dependencyMap = arg6;
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
    const client = require(7263) /* getCurrentScope */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (isProfilingIntegrationWithProfiler(integrationByName)) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (require(7264).DEBUG_BUILD) {
          const logger3 = require(7236) /* consoleSandbox */.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (require(7264).DEBUG_BUILD) {
        const logger2 = require(7236) /* consoleSandbox */.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (require(7264).DEBUG_BUILD) {
      const logger = require(7236) /* consoleSandbox */.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = require(7263) /* getCurrentScope */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (isProfilingIntegrationWithProfiler(integrationByName)) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (require(7264).DEBUG_BUILD) {
          const logger3 = require(7236) /* consoleSandbox */.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (require(7264).DEBUG_BUILD) {
        const logger2 = require(7236) /* consoleSandbox */.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (require(7264).DEBUG_BUILD) {
      const logger = require(7236) /* consoleSandbox */.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
