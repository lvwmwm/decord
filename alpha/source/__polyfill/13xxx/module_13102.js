// Module ID: 13102
// Function ID: 13103
// Dependencies: [13031, 13032, 13004]

// Module 13102
import _mod13031 from "module_13031" /* 13031 */;
import _mod13032 from "module_13032" /* 13032 */;


export const profiler = {
  startProfiler() {
    const obj = _mod13031;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13032.DEBUG_BUILD) {
          const logger3 = tmp(13004).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13032.DEBUG_BUILD) {
        const logger2 = tmp(13004).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13032.DEBUG_BUILD) {
      const logger = tmp(13004).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod13031;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13032.DEBUG_BUILD) {
          const logger3 = tmp(13004).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13032.DEBUG_BUILD) {
        const logger2 = tmp(13004).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13032.DEBUG_BUILD) {
      const logger = tmp(13004).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
