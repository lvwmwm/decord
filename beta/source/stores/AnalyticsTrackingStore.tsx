// Module ID: 7707
// Function ID: 7708
// Name: stores/AnalyticsTrackingStore
// Dependencies: [502, 1078, 1253, 577, 7708, 1245, 7719, 7720, 2]

// Module 7707 (stores/AnalyticsTrackingStore)
import DispatcherDefault from "Dispatcher" /* 577 */;
import AnalyticsUtils2 from "AnalyticsUtils" /* 1245 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1253 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 7708 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AnalyticsUtils = fn(1253);
const obj2 = {
  dispatcher: DispatcherDefault,
  actionHandler: {
    CONNECTION_OPEN(arg0) {
      return discord_common_AnalyticsUtils.AnalyticsActionHandlers.handleConnectionOpen(arg0);
    },
    OVERLAY_INITIALIZE(arg0) {
      return discord_common_AnalyticsUtils.AnalyticsActionHandlers.handleConnectionOpen(arg0);
    },
    CURRENT_USER_UPDATE(arg0) {
      return discord_common_AnalyticsUtils.AnalyticsActionHandlers.handleConnectionOpen(arg0);
    },
    CONNECTION_CLOSED() {
      return discord_common_AnalyticsUtils.AnalyticsActionHandlers.handleConnectionClosed();
    },
    FINGERPRINT() {
      return discord_common_AnalyticsUtils.AnalyticsActionHandlers.handleFingerprint();
    },
    TRACK(arg0) {
      return discord_common_AnalyticsUtils.AnalyticsActionHandlers.handleTrack(arg0);
    },
    SET_ANALYTICS_TOKEN(arg0) {
      return discord_common_AnalyticsUtils.AnalyticsActionHandlers.handleSetAnalyticsToken(arg0);
    }
  },
  TRACKING_URL: fn(1078).Endpoints.TRACK,
  waitFor: null,
  getFingerprint: AuthenticationStore.getFingerprint,
  getSessionId() {
    const session = SessionHeartbeatScheduler.getSession();
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
  scheduleWhenIdle: fn(7719).requestSafeIdleCallback,
  sendUnloadRequest: fn(7720).sendUnloadRequest
};
const items = [AuthenticationStore];
obj2.waitFor = items;
const result = AnalyticsUtils.analyticsTrackingStoreMaker(obj2);
const size = fn(2);
const result1 = size.fileFinishedImporting("stores/AnalyticsTrackingStore.tsx");

export default result;
