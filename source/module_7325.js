// Module ID: 7325
// Function ID: 59075
// Dependencies: []

// Module 7325
arg5.metricsDefault = {
  increment(arg0) {
    let num = 1;
    if (arguments.length > 1) {
      num = 1;
      if (undefined !== arguments[1]) {
        num = arguments[1];
      }
    }
    let tmp;
    if (arguments.length > 2) {
      tmp = arguments[2];
    }
    const metrics = arg1(arg6[0]).metrics;
    metrics.increment(arg1(arg6[1]).MetricsAggregator, arg0, num, tmp);
  },
  distribution(arg0, arg1, arg2) {
    const metrics = arg1(arg6[0]).metrics;
    metrics.distribution(arg1(arg6[1]).MetricsAggregator, arg0, arg1, arg2);
  },
  set(arg0, arg1, arg2) {
    const metrics = arg1(arg6[0]).metrics;
    const result = metrics.set(arg1(arg6[1]).MetricsAggregator, arg0, arg1, arg2);
  },
  gauge(arg0, arg1, arg2) {
    const metrics = arg1(arg6[0]).metrics;
    metrics.gauge(arg1(arg6[1]).MetricsAggregator, arg0, arg1, arg2);
  },
  timing(arg0, arg1) {
    let str = "second";
    if (arguments.length > 2) {
      str = "second";
      if (undefined !== arguments[2]) {
        str = arguments[2];
      }
    }
    let tmp;
    if (arguments.length > 3) {
      tmp = arguments[3];
    }
    const metrics = arg1(arg6[0]).metrics;
    return metrics.timing(arg1(arg6[1]).MetricsAggregator, arg0, arg1, str, tmp);
  },
  getMetricsAggregatorForClient(arg0) {
    const metrics = arg1(arg6[0]).metrics;
    return metrics.getMetricsAggregatorForClient(arg0, arg1(arg6[1]).MetricsAggregator);
  }
};
