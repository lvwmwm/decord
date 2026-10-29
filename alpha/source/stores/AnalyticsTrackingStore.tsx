// Module ID: 7628
// Function ID: 7629
// Name: stores/AnalyticsTrackingStore
// Dependencies: [502, 1084, 1272, 584, 7629, 1264, 7640, 7641, 2]

// Module 7628 (stores/AnalyticsTrackingStore)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import AnalyticsUtils2 from "AnalyticsUtils" /* 1264 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 7629 */;
import requestSafeIdleCallback from "requestSafeIdleCallback" /* 7640 */;
import sendUnloadRequest from "sendUnloadRequest" /* 7641 */;
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
