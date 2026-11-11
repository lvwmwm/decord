// Module ID: 9829
// Function ID: 9830
// Dependencies: [9758, 9759, 9731]

// Module 9829
import _mod9758 from "module_9758" /* 9758 */;
import _mod9759 from "module_9759" /* 9759 */;


export const profiler = {
  startProfiler() {
    const obj = _mod9758;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod9759.DEBUG_BUILD) {
          const logger3 = tmp(9731).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod9759.DEBUG_BUILD) {
        const logger2 = tmp(9731).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod9759.DEBUG_BUILD) {
      const logger = tmp(9731).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod9758;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod9759.DEBUG_BUILD) {
          const logger3 = tmp(9731).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod9759.DEBUG_BUILD) {
        const logger2 = tmp(9731).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod9759.DEBUG_BUILD) {
      const logger = tmp(9731).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
