// Module ID: 7171
// Function ID: 7172
// Name: stores/AnalyticsTrackingStore
// Dependencies: [502, 1085, 1272, 584, 7172, 1264, 7183, 7184, 2]

// Module 7171 (stores/AnalyticsTrackingStore)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtils2 from "AnalyticsUtils" /* 1264 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 7172 */;
import requestSafeIdleCallback from "requestSafeIdleCallback" /* 7183 */;
import sendUnloadRequest from "sendUnloadRequest" /* 7184 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
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
