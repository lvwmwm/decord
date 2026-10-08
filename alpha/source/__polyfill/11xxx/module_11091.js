// Module ID: 11091
// Function ID: 11092
// Dependencies: [11020, 11021, 10993]

// Module 11091
import _mod11020 from "module_11020" /* 11020 */;
import _mod11021 from "module_11021" /* 11021 */;


export const profiler = {
  startProfiler() {
    const obj = _mod11020;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod11021.DEBUG_BUILD) {
          const logger3 = tmp(10993).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod11021.DEBUG_BUILD) {
        const logger2 = tmp(10993).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod11021.DEBUG_BUILD) {
      const logger = tmp(10993).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod11020;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod11021.DEBUG_BUILD) {
          const logger3 = tmp(10993).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod11021.DEBUG_BUILD) {
        const logger2 = tmp(10993).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod11021.DEBUG_BUILD) {
      const logger = tmp(10993).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
