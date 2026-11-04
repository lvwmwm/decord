// Module ID: 13372
// Function ID: 13373
// Dependencies: [13301, 13302, 13274]

// Module 13372
import _mod13301 from "module_13301" /* 13301 */;
import _mod13302 from "module_13302" /* 13302 */;


export const profiler = {
  startProfiler() {
    const obj = _mod13301;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13302.DEBUG_BUILD) {
          const logger3 = tmp(13274).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13302.DEBUG_BUILD) {
        const logger2 = tmp(13274).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13302.DEBUG_BUILD) {
      const logger = tmp(13274).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod13301;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13302.DEBUG_BUILD) {
          const logger3 = tmp(13274).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13302.DEBUG_BUILD) {
        const logger2 = tmp(13274).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13302.DEBUG_BUILD) {
      const logger = tmp(13274).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
