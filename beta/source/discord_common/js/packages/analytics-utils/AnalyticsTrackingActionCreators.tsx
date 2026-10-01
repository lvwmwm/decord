// Module ID: 1330
// Function ID: 1331
// Name: AnalyticsTrackingActionCreators
// Dependencies: [2]
// Exports: queueTrackingEventMaker

// Module 1330 (AnalyticsTrackingActionCreators)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsTrackingActionCreators.tsx");

export const queueTrackingEventMaker = (arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (event, arg1, arg2) => {
    closure_1 = arg1;
    let closure_2 = arg2;
    const promise = new Promise((resolve) => {
      let fingerprint;
      let flag;
      const obj = { type: properties, event, properties, flush: flag, fingerprint, resolve };
      flag = undefined;
      const dispatch = event.dispatch;
      if (closure_2 != null) {
        flag = tmp2.flush;
      }
      if (flag == null) {
        flag = false;
      }
      fingerprint = undefined;
      if (closure_2 != null) {
        fingerprint = tmp2.fingerprint;
      }
      dispatch(obj);
    });
    return promise;
  };
};
