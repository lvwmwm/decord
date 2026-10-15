// Module ID: 7399
// Function ID: 7400
// Name: stores/AnalyticsTrackingStore
// Dependencies: [502, 1085, 1273, 584, 7400, 1265, 7411, 7412, 2]

// Module 7399 (stores/AnalyticsTrackingStore)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtils2 from "AnalyticsUtils" /* 1265 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 7400 */;
import requestSafeIdleCallback from "requestSafeIdleCallback" /* 7411 */;
import sendUnloadRequest from "sendUnloadRequest" /* 7412 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1273 */;
import size from "module_2" /* 2 */;

let items;
const Endpoints = Constants.Endpoints;
let obj = {
  dispatcher: DispatcherDefault,
  actionHandler: {
    CONNECTION_OPEN(arg0) {
      const AnalyticsActionHandlers = AnalyticsUtils.AnalyticsActionHandlers;
      return AnalyticsActionHandlers.handleConnectionOpen(arg0);
    },
    OVERLAY_INITIALIZE(arg0) {
      const AnalyticsActionHandlers = AnalyticsUtils.AnalyticsActionHandlers;
      return AnalyticsActionHandlers.handleConnectionOpen(arg0);
    },
    CURRENT_USER_UPDATE(arg0) {
      const AnalyticsActionHandlers = AnalyticsUtils.AnalyticsActionHandlers;
      return AnalyticsActionHandlers.handleConnectionOpen(arg0);
    },
    CONNECTION_CLOSED() {
      const AnalyticsActionHandlers = AnalyticsUtils.AnalyticsActionHandlers;
      return AnalyticsActionHandlers.handleConnectionClosed();
    },
    FINGERPRINT() {
      const AnalyticsActionHandlers = AnalyticsUtils.AnalyticsActionHandlers;
      return AnalyticsActionHandlers.handleFingerprint();
    },
    TRACK(arg0) {
      const AnalyticsActionHandlers = AnalyticsUtils.AnalyticsActionHandlers;
      return AnalyticsActionHandlers.handleTrack(arg0);
    },
    SET_ANALYTICS_TOKEN(arg0) {
      const AnalyticsActionHandlers = AnalyticsUtils.AnalyticsActionHandlers;
      return AnalyticsActionHandlers.handleSetAnalyticsToken(arg0);
    }
  },
  TRACKING_URL: Endpoints.TRACK,
  waitFor: items,
  getFingerprint: AuthenticationStore.getFingerprint,
  getSessionId() {
    const obj = SessionHeartbeatScheduler;
    const session = obj.getSession();
    return session.then((uuid) => {
      let sessionId;
      if (uuid != null) {
        sessionId = uuid.uuid;
      }
      return { sessionId };
    });
  },
  getLaunchSignature() {
    return AnalyticsUtils2.launchSignature;
  },
  scheduleWhenIdle: requestSafeIdleCallback.requestSafeIdleCallback,
  sendUnloadRequest: sendUnloadRequest.sendUnloadRequest
};
items = [AuthenticationStore];
const result = AnalyticsUtils.analyticsTrackingStoreMaker(obj);
const result1 = size.fileFinishedImporting("stores/AnalyticsTrackingStore.tsx");

export default result;
