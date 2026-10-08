// Module ID: 11092
// Function ID: 11093
// Name: metricsDefault
// Dependencies: [11089, 11093]

// Module 11092 (metricsDefault)
import metrics2 from "metrics" /* 11089 */;
import MetricsAggregator from "MetricsAggregator" /* 11093 */;


export const metricsDefault = {
  increment(arg0) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 1;
    }
    const metrics = metrics2.metrics;
    metrics.increment(MetricsAggregator.MetricsAggregator, arg0, num, arg2);
  },
  distribution(arg0, arg1, arg2) {
    const metrics = metrics2.metrics;
    metrics.distribution(MetricsAggregator.MetricsAggregator, arg0, arg1, arg2);
  },
  set(arg0, arg1, arg2) {
    const metrics = metrics2.metrics;
    const result = metrics.set(MetricsAggregator.MetricsAggregator, arg0, arg1, arg2);
  },
  gauge(arg0, arg1, arg2) {
    const metrics = metrics2.metrics;
    metrics.gauge(MetricsAggregator.MetricsAggregator, arg0, arg1, arg2);
  },
  timing(arg0, arg1) {
    let str = arg2;
    if (arg2 === undefined) {
      str = "second";
    }
    const metrics = metrics2.metrics;
    return metrics.timing(MetricsAggregator.MetricsAggregator, arg0, arg1, str, arg3);
  },
  getMetricsAggregatorForClient(arg0) {
    const metrics = metrics2.metrics;
    return metrics.getMetricsAggregatorForClient(arg0, MetricsAggregator.MetricsAggregator);
  }
};
