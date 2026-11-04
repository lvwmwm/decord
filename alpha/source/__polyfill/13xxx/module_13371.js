// Module ID: 13371
// Function ID: 13372
// Dependencies: [13300, 13301, 13273]

// Module 13371
import _mod13300 from "module_13300" /* 13300 */;
import _mod13301 from "module_13301" /* 13301 */;


export const profiler = {
  startProfiler() {
    const obj = _mod13300;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13301.DEBUG_BUILD) {
          const logger3 = tmp(13273).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13301.DEBUG_BUILD) {
        const logger2 = tmp(13273).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13301.DEBUG_BUILD) {
      const logger = tmp(13273).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod13300;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13301.DEBUG_BUILD) {
          const logger3 = tmp(13273).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13301.DEBUG_BUILD) {
        const logger2 = tmp(13273).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13301.DEBUG_BUILD) {
      const logger = tmp(13273).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
