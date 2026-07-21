// Module ID: 635
// Function ID: 7325
// Name: queueTrackingEventMaker
// Dependencies: [284214097]
// Exports: queueTrackingEventMaker

// Module 635 (queueTrackingEventMaker)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsTrackingActionCreators.tsx");

export (arg0, arg1) => (arg0, arg1, arg2) => new Promise((resolve, arg1, self) => {
  const obj = { type: arg1, event: resolve, properties: arg1 };
  let flush;
  if (null != self) {
    flush = self.flush;
  }
  obj.flush = null != flush && flush;
  let fingerprint;
  if (null != self) {
    fingerprint = self.fingerprint;
  }
  obj.fingerprint = fingerprint;
  obj.resolve = resolve;
  resolve.dispatch(obj);
})
