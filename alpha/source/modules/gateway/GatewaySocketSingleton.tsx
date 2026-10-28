// Module ID: 15207
// Function ID: 15208
// Name: GatewaySocketSingleton
// Dependencies: [15208, 502, 3, 15209, 15246, 15249, 6836, 1264, 10134, 1381, 4818, 1480, 584, 2]

// Module 15207 (GatewaySocketSingleton)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DiscordNativeDefault from "DiscordNative" /* 4818 */;
import DiscordAppStateDefault from "DiscordAppState" /* 6836 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 10134 */;
import GatewaySocketDefault from "GatewaySocket" /* 15209 */;
import LocalPresenceStateManagerDefault from "LocalPresenceStateManager" /* 15246 */;
import LocalVoiceStateManagerDefault from "LocalVoiceStateManager" /* 15249 */;
import MultiAccountSwitchStore from "MultiAccountSwitchStore" /* 15208 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import NetworkUtils_mod from "NetworkUtils" /* 1480 */;
import size from "module_2" /* 2 */;

let closure_5 = new LoggerDefault("ConnectionStore");
new LoggerDefault("ConnectionStore");
const socket = new GatewaySocketDefault();
const tmp3 = new LocalPresenceStateManagerDefault(socket);
const initialState = tmp3;
socket.handleIdentify = () => {
  let id;
  let obj4;
  let obj5;
  const token = AuthenticationStore.getToken();
  const obj2 = { hasToken: null != token };
  closure_5.verbose("handleIdentify called", obj2);
  if (null == token) {
    return null;
  } else {
    let obj7;
    const obj8 = DiscordAppStateDefault;
    const state = obj8.getState();
    const installationForTracking = obj.getInstallationForTracking();
    const obj3 = { token, userId: id, properties: obj4, presence: initialState.getInitialState() };
    id = obj.getId();
    const tmp12 = importDefault;
    if (id == null) {
      id = MultiAccountSwitchStore.getTargetUserId();
    }
    obj4 = { client_app_state: state, is_fast_connect: false, gateway_connect_reasons: obj5.describeConnectionReasons() };
    const tmp12Result = tmp12(1264);
    const merged = Object.assign(tmp12Result.getSuperProperties());
    obj5 = RequestGatewaySocketAll;
    if (null != installationForTracking) {
      obj7 = { installation_id: installationForTracking };
      const obj6 = { installation_id: installationForTracking };
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    return obj3;
  }
};
const tmp4 = new LocalVoiceStateManagerDefault(socket);
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
NetworkUtils = NetworkUtils_mod;
NetworkUtils.addOnlineCallback(() => {
  obj.networkStateChange(5000, "network detected online.");
});
socket.on("disconnect", (arg0) => {
  let code;
  let reason;
  ({ code, reason } = arg0);
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CONNECTION_CLOSED", code, reason });
});
socket.on("close", (arg0) => {
  let code;
  let reason;
  ({ code, reason } = arg0);
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CONNECTION_INTERRUPTED", code, reason });
});
const result = size.fileFinishedImporting("modules/gateway/GatewaySocketSingleton.tsx");

export { socket };
export const localPresenceState = tmp3;
export const localVoiceState = tmp4;
