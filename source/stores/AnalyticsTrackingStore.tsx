// Module ID: 6691
// Function ID: 51796
// Name: result
// Dependencies: []

// Module 6691 (result)
const importDefaultResult = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[2]);
obj = {
  dispatcher: importDefault(dependencyMap[3]),
  actionHandler: obj,
  TRACKING_URL: arg1(dependencyMap[1]).Endpoints.TRACK,
  waitFor: items,
  getFingerprint: importDefaultResult.getFingerprint,
  getSessionId() {
    const session = arg1(dependencyMap[4]).getSession();
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
    return arg1(dependencyMap[5]).launchSignature;
  },
  scheduleWhenIdle: arg1(dependencyMap[6]).requestSafeIdleCallback
};
obj = {
  CONNECTION_OPEN(arg0) {
    return arg1(dependencyMap[2]).AnalyticsActionHandlers.handleConnectionOpen(arg0);
  },
  OVERLAY_INITIALIZE(arg0) {
    return arg1(dependencyMap[2]).AnalyticsActionHandlers.handleConnectionOpen(arg0);
  },
  CURRENT_USER_UPDATE(arg0) {
    return arg1(dependencyMap[2]).AnalyticsActionHandlers.handleConnectionOpen(arg0);
  },
  CONNECTION_CLOSED() {
    return arg1(dependencyMap[2]).AnalyticsActionHandlers.handleConnectionClosed();
  },
  FINGERPRINT() {
    return arg1(dependencyMap[2]).AnalyticsActionHandlers.handleFingerprint();
  },
  TRACK(arg0) {
    return arg1(dependencyMap[2]).AnalyticsActionHandlers.handleTrack(arg0);
  },
  SET_ANALYTICS_TOKEN(arg0) {
    return arg1(dependencyMap[2]).AnalyticsActionHandlers.handleSetAnalyticsToken(arg0);
  }
};
const items = [importDefaultResult];
const result = obj.analyticsTrackingStoreMaker(obj);
const result1 = arg1(dependencyMap[7]).fileFinishedImporting("stores/AnalyticsTrackingStore.tsx");

export default result;
