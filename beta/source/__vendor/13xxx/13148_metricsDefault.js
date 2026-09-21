// Module ID: 13148
// Function ID: 13149
// Name: metricsDefault
// Dependencies: [13145, 13149]

// Module 13148 (metricsDefault)
import _mod13145 from "module_13145" /* 13145 */;
import MetricsAggregator from "MetricsAggregator" /* 13149 */;

require = arg1;
const dependencyMap = arg6;

export const metricsDefault = {
  increment(arg0) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 1;
    }
    const metrics = _mod13145.metrics;
    metrics.increment(MetricsAggregator.MetricsAggregator, arg0, num, arg2);
  },
  distribution(arg0, arg1, arg2) {
    const metrics = _mod13145.metrics;
    metrics.distribution(MetricsAggregator.MetricsAggregator, arg0, arg1, arg2);
  },
  set(arg0, arg1, arg2) {
    const metrics = _mod13145.metrics;
    const result = metrics.set(MetricsAggregator.MetricsAggregator, arg0, arg1, arg2);
  },
  gauge(arg0, arg1, arg2) {
    const metrics = _mod13145.metrics;
    metrics.gauge(MetricsAggregator.MetricsAggregator, arg0, arg1, arg2);
  },
  timing(arg0, arg1) {
    let str = arg2;
    if (arg2 === undefined) {
      str = "second";
    }
    const metrics = _mod13145.metrics;
    return metrics.timing(MetricsAggregator.MetricsAggregator, arg0, arg1, str, arg3);
  },
  getMetricsAggregatorForClient(arg0) {
    const metrics = _mod13145.metrics;
    return metrics.getMetricsAggregatorForClient(arg0, MetricsAggregator.MetricsAggregator);
  }
};
