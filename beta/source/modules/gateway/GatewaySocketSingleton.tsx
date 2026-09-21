// Module ID: 13896
// Function ID: 13897
// Name: GatewaySocketSingleton
// Dependencies: [13897, 502, 3, 13898, 13938, 13941, 10585, 1245, 8004, 1368, 4381, 1466, 577, 2]

// Module 13896 (GatewaySocketSingleton)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import DiscordNativeDefault from "DiscordNative" /* 4381 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 8004 */;
import DiscordAppStateDefault from "DiscordAppState" /* 10585 */;
import GatewaySocketDefault from "GatewaySocket" /* 13898 */;
import LocalPresenceStateManagerDefault from "LocalPresenceStateManager" /* 13938 */;
import LocalVoiceStateManagerDefault from "LocalVoiceStateManager" /* 13941 */;
import MultiAccountSwitchStore from "MultiAccountSwitchStore" /* 13897 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NetworkUtils_mod from "NetworkUtils" /* 1466 */;

let closure_5 = new LoggerDefault("ConnectionStore");
const socket = new GatewaySocketDefault();
const tmp3 = new LocalPresenceStateManagerDefault(socket);
const initialState = tmp3;
const tmp2 = new LoggerDefault("ConnectionStore");
socket.handleIdentify = () => {
  const token = AuthenticationStore.getToken();
  closure_5.verbose("handleIdentify called", { hasToken: null != token });
  if (null == token) {
    return null;
  } else {
    state = DiscordAppStateDefault.getState();
    const installationForTracking = obj.getInstallationForTracking();
    const obj3 = { token, userId: null, properties: null, presence: null };
    let id = obj.getId();
    if (id == null) {
      id = MultiAccountSwitchStore.getTargetUserId();
    }
    obj3.userId = id;
    const obj4 = {};
    const merged = Object.assign(AnalyticsUtilsDefault.getSuperProperties());
    obj4.client_app_state = state;
    obj4.is_fast_connect = false;
    const tmp12Result = AnalyticsUtilsDefault;
    obj4.gateway_connect_reasons = RequestGatewaySocketAll.describeConnectionReasons();
    if (null != installationForTracking) {
      const obj6 = { installation_id: installationForTracking };
      let obj7 = obj6;
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    obj3.properties = obj4;
    obj3.presence = initialState.getInitialState();
    return obj3;
  }
  const obj2 = { hasToken: null != token };
};
const PlatformUtils = fn(1368);
if (PlatformUtils.isDesktop()) {
  const powerMonitor = DiscordNativeDefault.powerMonitor;
  powerMonitor.on("resume", () => {
    obj.expeditedHeartbeat(5000, "power monitor resumed");
  });
}
let NetworkUtils = NetworkUtils_mod;
NetworkUtils.addOfflineCallback(() => {
  obj.networkStateChange(15000, "network detected offline.", false);
});
let NetworkUtils = NetworkUtils_mod;
NetworkUtils.addOnlineCallback(() => {
  obj.networkStateChange(5000, "network detected online.");
});
socket.on("disconnect", (arg0) => {
  ({ code, reason } = arg0);
  DispatcherDefault.dispatch({ type: "CONNECTION_CLOSED", code, reason });
});
socket.on("close", (arg0) => {
  ({ code, reason } = arg0);
  DispatcherDefault.dispatch({ type: "CONNECTION_INTERRUPTED", code, reason });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/GatewaySocketSingleton.tsx");

export { socket };
export const localPresenceState = tmp3;
export const localVoiceState = new LocalVoiceStateManagerDefault(socket);
