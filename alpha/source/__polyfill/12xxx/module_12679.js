// Module ID: 12679
// Function ID: 12680
// Dependencies: [12608, 12609, 12581]

// Module 12679
import _mod12608 from "module_12608" /* 12608 */;
import _mod12609 from "module_12609" /* 12609 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12608;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12609.DEBUG_BUILD) {
          const logger3 = tmp(12581).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12609.DEBUG_BUILD) {
        const logger2 = tmp(12581).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12609.DEBUG_BUILD) {
      const logger = tmp(12581).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12608;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12609.DEBUG_BUILD) {
          const logger3 = tmp(12581).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12609.DEBUG_BUILD) {
        const logger2 = tmp(12581).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12609.DEBUG_BUILD) {
      const logger = tmp(12581).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
