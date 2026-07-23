// Module ID: 12563
// Function ID: 97133
// Name: importDefaultResult1
// Dependencies: [1194, 3, 12564, 12603, 12606, 9456, 675, 652, 477, 3741, 1430, 686, 2]

// Module 12563 (importDefaultResult1)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import importDefaultResult1 from "_isNativeReflectConstruct";
import importDefaultResult2 from "_isNativeReflectConstruct";
import importDefaultResult3 from "_isNativeReflectConstruct";
import set from "set";
import importDefaultResult4 from "awaitOnline";
import set from "_isNativeReflectConstruct";

importDefaultResult = new importDefaultResult("ConnectionStore");
importDefaultResult1 = new importDefaultResult1();
importDefaultResult2 = new importDefaultResult2(importDefaultResult1);
importDefaultResult3 = new importDefaultResult3(importDefaultResult1);
importDefaultResult1.handleIdentify = () => {
  const token = authStore.getToken();
  let obj = { hasToken: null != token };
  importDefaultResult.verbose("handleIdentify called", obj);
  if (null == token) {
    return null;
  } else {
    const state = importDefault(9456).getState();
    const installationForTracking = authStore.getInstallationForTracking();
    obj = { token };
    obj = {};
    const obj4 = importDefault(9456);
    const merged = Object.assign(importDefault(675).getSuperProperties());
    obj["client_app_state"] = state;
    obj["is_fast_connect"] = false;
    const obj7 = importDefault(675);
    obj["gateway_connect_reasons"] = importAll(652).describeConnectionReasons();
    if (null != installationForTracking) {
      const obj1 = { installation_id: installationForTracking };
      let obj2 = obj1;
    } else {
      obj2 = {};
    }
    const merged1 = Object.assign(obj2);
    obj.properties = obj;
    obj.presence = importDefaultResult2.getInitialState();
    return obj;
  }
};
if (set.isDesktop()) {
  const powerMonitor = require("set").powerMonitor;
  powerMonitor.on("resume", () => {
    importDefaultResult1.expeditedHeartbeat(5000, "power monitor resumed");
  });
}
require("awaitOnline").addOfflineCallback(() => {
  importDefaultResult1.networkStateChange(15000, "network detected offline.", false);
});
require("awaitOnline").addOnlineCallback(() => {
  importDefaultResult1.networkStateChange(5000, "network detected online.");
});
importDefaultResult1.on("disconnect", (arg0) => {
  let code;
  let reason;
  ({ code, reason } = arg0);
  importDefault(686).dispatch({ type: "CONNECTION_CLOSED", code, reason });
});
importDefaultResult1.on("close", (arg0) => {
  let code;
  let reason;
  ({ code, reason } = arg0);
  importDefault(686).dispatch({ type: "CONNECTION_INTERRUPTED", code, reason });
});
const result = set.fileFinishedImporting("modules/gateway/GatewaySocketSingleton.tsx");

export const socket = importDefaultResult1;
export const localPresenceState = importDefaultResult2;
export const localVoiceState = importDefaultResult3;
