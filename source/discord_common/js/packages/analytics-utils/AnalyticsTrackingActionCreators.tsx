// Module ID: 635
// Function ID: 7325
// Name: queueTrackingEventMaker
// Dependencies: [2]
// Exports: queueTrackingEventMaker

// Module 635 (queueTrackingEventMaker)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsTrackingActionCreators.tsx");

export (arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return new Promise((resolve) => {
      const obj = { type: closure_1, event: closure_0, properties: closure_1 };
      let flush;
      if (null != closure_2) {
        flush = closure_2.flush;
      }
      obj.flush = null != flush && flush;
      let fingerprint;
      if (null != closure_2) {
        fingerprint = closure_2.fingerprint;
      }
      obj.fingerprint = fingerprint;
      obj.resolve = resolve;
      closure_0.dispatch(obj);
    });
  };
}
