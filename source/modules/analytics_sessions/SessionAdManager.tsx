// Module ID: 13348
// Function ID: 101485
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13348 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const importDefaultResult = importDefault(dependencyMap[5]);
({ AnalyticEvents: closure_9, AppStates: closure_10 } = arg1(dependencyMap[6]));
const token = importDefaultResult.getToken();
let closure_12 = { DEFAULT: "DEFAULT", USER_LOGOUT: "USER_LOGOUT", WINDOW_FOCUS: "WINDOW_FOCUS", APP_STATE_UPDATE: "APP_STATE_UPDATE" };
let tmp3 = (arg0) => {
  class SessionAdManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, SessionAdManager);
      items1 = [...items];
      obj = closure_6(SessionAdManager);
      tmp2 = closure_5;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      SessionAdManager = tmp2Result;
      obj2 = SessionAdManager(closure_2[7]);
      tmp2Result.focusedOrForegrounded = obj2.isForegrounded();
      interval = new SessionAdManager(closure_2[8]).Interval();
      tmp2Result.heartbeatInterval = interval;
      tmp2Result.schedulerStarted = false;
      tmp2Result.lastHeartbeatTimestamp = 0;
      tmp2Result.maybeStartHeartbeat = () => {
        const heartbeatInterval = tmp2Result.heartbeatInterval;
        if (!heartbeatInterval.isStarted()) {
          tmp2Result.trackHeartbeat();
          const heartbeatInterval2 = tmp2Result.heartbeatInterval;
          heartbeatInterval2.start(5 * callback(closure_2[9]).Millis.MINUTE, tmp2Result.trackHeartbeat);
        }
      };
      tmp2Result.startAnalyticHeartbeat = () => {
        if (!tmp2Result.schedulerStarted) {
          tmp2Result.schedulerStarted = true;
          callback(closure_2[10]).addBreadcrumb({ <string:1768156336>: "text-sm/normal", <string:483457390>: "text-muted" });
          tmp2Result.maybeStartHeartbeat();
          const obj = callback(closure_2[10]);
        }
      };
      tmp2Result.trackHeartbeat = () => {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = false;
        }
        if (!tmp2Result.schedulerStarted) {
          if (!flag) {
            let obj = callback(closure_2[10]);
            obj.addBreadcrumb({});
            const heartbeatInterval = tmp2Result.heartbeatInterval;
            heartbeatInterval.stop();
          }
        }
        const nowResult = performance.now();
        const diff = nowResult - tmp2Result.lastHeartbeatTimestamp;
        const orRefreshAdSession = tmp2Result(closure_2[11]).getOrRefreshAdSession();
        const obj2 = tmp2Result(closure_2[11]);
        obj = { client_ad_session_id: orRefreshAdSession.uuid, client_heartbeat_initialization_timestamp: orRefreshAdSession.createdAtTimestamp, client_heartbeat_version: 3 };
        callback(closure_2[12]).track(constants.CLIENT_AD_HEARTBEAT, obj);
        tmp2Result.lastHeartbeatTimestamp = nowResult;
      };
      tmp2Result.stopAnalyticHeartbeat = () => {
        let DEFAULT = arg0;
        if (arg0 === undefined) {
          DEFAULT = constants3.DEFAULT;
        }
        if (tmp2Result.schedulerStarted) {
          tmp2Result.schedulerStarted = false;
          tmp2Result.lastHeartbeatTimestamp = 0;
          let obj = callback(closure_2[10]);
          obj = { category: "ad" };
          const _HermesInternal = HermesInternal;
          obj.message = "Stopping ad session heartbeat: " + DEFAULT;
          obj.addBreadcrumb(obj);
          const heartbeatInterval = tmp2Result.heartbeatInterval;
          heartbeatInterval.stop();
        }
      };
      tmp2Result.scheduleHeartbeatTracking = () => {
        let DEFAULT = arg0;
        if (arg0 === undefined) {
          DEFAULT = constants3.DEFAULT;
        }
        if (tmp2Result.focusedOrForegrounded) {
          if (null != closure_11) {
            const result = tmp2Result.startAnalyticHeartbeat();
          }
        }
        const result1 = tmp2Result.stopAnalyticHeartbeat(DEFAULT);
      };
      tmp2Result.handleLogin = () => {
        const result = tmp2Result.scheduleHeartbeatTracking();
        tmp2Result.trackHeartbeat(true);
      };
      tmp2Result.handleLogout = () => {
        const result = tmp2Result.stopAnalyticHeartbeat(constants3.USER_LOGOUT);
        tmp2Result(closure_2[11]).clearAdSession();
      };
      tmp2Result.handleEnrollmentSuccess = () => {
        const orRefreshAdSession = tmp2Result(closure_2[11]).getOrRefreshAdSession(true);
      };
      tmp2Result.handleWindowFocus = (focused) => {
        tmp2Result.focusedOrForegrounded = focused.focused;
        const result = tmp2Result.scheduleHeartbeatTracking(constants3.WINDOW_FOCUS);
      };
      tmp2Result.handleAppStateUpdate = (state) => {
        tmp2Result.focusedOrForegrounded = state.state === constants2.ACTIVE;
        const result = tmp2Result.scheduleHeartbeatTracking(constants3.APP_STATE_UPDATE);
      };
      tmp2Result.handleAuthenticationChange = () => {
        const token = token.getToken();
        if (token !== token) {
          tmp2Result(closure_2[11]).clearAdSession();
          const result = tmp2Result.stopAnalyticHeartbeat();
          const obj = tmp2Result(closure_2[11]);
        }
        const result1 = tmp2Result.scheduleHeartbeatTracking();
      };
      return tmp2Result;
    }
  }
  const arg1 = SessionAdManager;
  callback2(SessionAdManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      this.focusedOrForegrounded = SessionAdManager(closure_2[7]).isForegrounded();
      closure_8.addChangeListener(this.handleAuthenticationChange);
      const obj = SessionAdManager(closure_2[7]);
      const subscription = callback(closure_2[13]).subscribe("WINDOW_FOCUS", this.handleWindowFocus);
      const obj2 = callback(closure_2[13]);
      const subscription1 = callback(closure_2[13]).subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate);
      const obj3 = callback(closure_2[13]);
      const subscription2 = callback(closure_2[13]).subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess);
      const obj4 = callback(closure_2[13]);
      const subscription3 = callback(closure_2[13]).subscribe("LOGIN_SUCCESS", this.handleLogin);
      const obj5 = callback(closure_2[13]);
      const subscription4 = callback(closure_2[13]).subscribe("LOGOUT", this.handleLogout);
      const result = this.scheduleHeartbeatTracking();
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      const result = this.stopAnalyticHeartbeat();
      closure_8.removeChangeListener(this.handleAuthenticationChange);
      callback(closure_2[13]).unsubscribe("WINDOW_FOCUS", this.handleWindowFocus);
      const obj = callback(closure_2[13]);
      callback(closure_2[13]).unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate);
      const obj2 = callback(closure_2[13]);
      callback(closure_2[13]).unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess);
      const obj3 = callback(closure_2[13]);
      callback(closure_2[13]).unsubscribe("LOGIN_SUCCESS", this.handleLogin);
      const obj4 = callback(closure_2[13]);
      callback(closure_2[13]).unsubscribe("LOGOUT", this.handleLogout);
    }
  };
  items[1] = obj;
  return callback(SessionAdManager, items);
}(importDefault(dependencyMap[14]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/analytics_sessions/SessionAdManager.tsx");

export default tmp3;
