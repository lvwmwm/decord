// Module ID: 7354
// Function ID: 59270
// Name: _nullishCoalesce
// Dependencies: []

// Module 7354 (_nullishCoalesce)
arg5._nullishCoalesce = function _nullishCoalesce(BrowserMetricsAggregator, items) {
  let tmp = BrowserMetricsAggregator;
  if (null == BrowserMetricsAggregator) {
    tmp = items();
  }
  return tmp;
};
