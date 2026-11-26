// Module ID: 9895
// Function ID: 9896
// Dependencies: [9824, 9825, 9797]

// Module 9895
import _mod9824 from "module_9824" /* 9824 */;
import _mod9825 from "module_9825" /* 9825 */;


export const profiler = {
  startProfiler() {
    const obj = _mod9824;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod9825.DEBUG_BUILD) {
          const logger3 = tmp(9797).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod9825.DEBUG_BUILD) {
        const logger2 = tmp(9797).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod9825.DEBUG_BUILD) {
      const logger = tmp(9797).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod9824;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod9825.DEBUG_BUILD) {
          const logger3 = tmp(9797).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod9825.DEBUG_BUILD) {
        const logger2 = tmp(9797).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod9825.DEBUG_BUILD) {
      const logger = tmp(9797).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
