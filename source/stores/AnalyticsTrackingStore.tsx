// Module ID: 6696
// Function ID: 51861
// Name: result
// Dependencies: [1194, 653, 480, 686, 6697, 675, 673, 2]

// Module 6696 (result)
import importDefaultResult from "_isNativeReflectConstruct";
import isThrottled from "isThrottled";

const require = arg1;
isThrottled = {
  dispatcher: require("dispatcher"),
  actionHandler: isThrottled,
  TRACKING_URL: require("ME").Endpoints.TRACK,
  waitFor: items,
  getFingerprint: importDefaultResult.getFingerprint,
  getSessionId() {
    const session = require(6697) /* stopAnalyticsHeartbeat */.getSession();
    return session.then((uuid) => {
      const obj = {};
      uuid = undefined;
      if (null != uuid) {
        uuid = uuid.uuid;
      }
      obj.sessionId = uuid;
      return obj;
    });
  },
  getLaunchSignature() {
    return require(675) /* expandLocation */.launchSignature;
  },
  scheduleWhenIdle: require("setOriginWindow").requestSafeIdleCallback
};
isThrottled = {
  CONNECTION_OPEN(arg0) {
    return require(480) /* isThrottled */.AnalyticsActionHandlers.handleConnectionOpen(arg0);
  },
  OVERLAY_INITIALIZE(arg0) {
    return require(480) /* isThrottled */.AnalyticsActionHandlers.handleConnectionOpen(arg0);
  },
  CURRENT_USER_UPDATE(arg0) {
    return require(480) /* isThrottled */.AnalyticsActionHandlers.handleConnectionOpen(arg0);
  },
  CONNECTION_CLOSED() {
    return require(480) /* isThrottled */.AnalyticsActionHandlers.handleConnectionClosed();
  },
  FINGERPRINT() {
    return require(480) /* isThrottled */.AnalyticsActionHandlers.handleFingerprint();
  },
  TRACK(arg0) {
    return require(480) /* isThrottled */.AnalyticsActionHandlers.handleTrack(arg0);
  },
  SET_ANALYTICS_TOKEN(arg0) {
    return require(480) /* isThrottled */.AnalyticsActionHandlers.handleSetAnalyticsToken(arg0);
  }
};
items = [importDefaultResult];
isThrottled = isThrottled.analyticsTrackingStoreMaker(isThrottled);
const result1 = require("isThrottled").fileFinishedImporting("stores/AnalyticsTrackingStore.tsx");

export default isThrottled;
