// Module ID: 7633
// Function ID: 7634
// Name: stores/AnalyticsTrackingStore
// Dependencies: [502, 1072, 1261, 572, 7634, 1253, 7645, 7646, 2]

// Module 7633 (stores/AnalyticsTrackingStore)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtils2 from "AnalyticsUtils" /* 1253 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 7634 */;
import requestSafeIdleCallback from "requestSafeIdleCallback" /* 7645 */;
import sendUnloadRequest from "sendUnloadRequest" /* 7646 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
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
