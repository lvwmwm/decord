// Module ID: 7570
// Function ID: 7571
// Name: stores/AnalyticsTrackingStore
// Dependencies: [502, 1087, 1275, 584, 7571, 1267, 7582, 7583, 2]

// Module 7570 (stores/AnalyticsTrackingStore)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import AnalyticsUtils2 from "AnalyticsUtils" /* 1267 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 7571 */;
import requestSafeIdleCallback from "requestSafeIdleCallback" /* 7582 */;
import sendUnloadRequest from "sendUnloadRequest" /* 7583 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1275 */;
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
