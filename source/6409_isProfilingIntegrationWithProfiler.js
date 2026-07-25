// Module ID: 6409
// Function ID: 57620
// Name: isProfilingIntegrationWithProfiler
// Dependencies: [6338, 6339, 6311]

// Module 6409 (isProfilingIntegrationWithProfiler)
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
    const client = require(6338) /* getCurrentScope */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (isProfilingIntegrationWithProfiler(integrationByName)) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (require(6339).DEBUG_BUILD) {
          const logger3 = require(6311) /* consoleSandbox */.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (require(6339).DEBUG_BUILD) {
        const logger2 = require(6311) /* consoleSandbox */.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (require(6339).DEBUG_BUILD) {
      const logger = require(6311) /* consoleSandbox */.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = require(6338) /* getCurrentScope */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (isProfilingIntegrationWithProfiler(integrationByName)) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (require(6339).DEBUG_BUILD) {
          const logger3 = require(6311) /* consoleSandbox */.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (require(6339).DEBUG_BUILD) {
        const logger2 = require(6311) /* consoleSandbox */.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (require(6339).DEBUG_BUILD) {
      const logger = require(6311) /* consoleSandbox */.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
