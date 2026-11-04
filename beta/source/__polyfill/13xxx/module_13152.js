// Module ID: 13152
// Function ID: 13153
// Dependencies: [13081, 13082, 13054]

// Module 13152
import _mod13081 from "module_13081" /* 13081 */;
import _mod13082 from "module_13082" /* 13082 */;


export const profiler = {
  startProfiler() {
    const obj = _mod13081;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13082.DEBUG_BUILD) {
          const logger3 = tmp(13054).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13082.DEBUG_BUILD) {
        const logger2 = tmp(13054).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13082.DEBUG_BUILD) {
      const logger = tmp(13054).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod13081;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13082.DEBUG_BUILD) {
          const logger3 = tmp(13054).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13082.DEBUG_BUILD) {
        const logger2 = tmp(13054).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13082.DEBUG_BUILD) {
      const logger = tmp(13054).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
