// Module ID: 12442
// Function ID: 94927
// Name: importDefaultResult1
// Dependencies: []

// Module 12442 (importDefaultResult1)
let closure_3 = importDefault(dependencyMap[0]);
let importDefaultResult = importDefault(dependencyMap[1]);
importDefaultResult = new importDefaultResult("ConnectionStore");
let importDefaultResult1 = importDefault(dependencyMap[2]);
importDefaultResult1 = new importDefaultResult1();
let importDefaultResult2 = importDefault(dependencyMap[3]);
importDefaultResult2 = new importDefaultResult2(importDefaultResult1);
let importDefaultResult3 = importDefault(dependencyMap[4]);
importDefaultResult3 = new importDefaultResult3(importDefaultResult1);
importDefaultResult1.handleIdentify = () => {
  const token = authStore.getToken();
  let obj = { hasToken: null != token };
  importDefaultResult.verbose("handleIdentify called", obj);
  if (null == token) {
    return null;
  } else {
    const state = importDefault(dependencyMap[5]).getState();
    const installationForTracking = authStore.getInstallationForTracking();
    obj = { token };
    obj = {};
    const obj4 = importDefault(dependencyMap[5]);
    const merged = Object.assign(importDefault(dependencyMap[6]).getSuperProperties());
    obj["client_app_state"] = state;
    obj["is_fast_connect"] = false;
    const obj7 = importDefault(dependencyMap[6]);
    obj["gateway_connect_reasons"] = importAll(dependencyMap[7]).describeConnectionReasons();
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
if (obj2.isDesktop()) {
  const powerMonitor = importDefault(dependencyMap[9]).powerMonitor;
  powerMonitor.on("resume", () => {
    importDefaultResult1.expeditedHeartbeat(5000, "power monitor resumed");
  });
}
const obj2 = arg1(dependencyMap[8]);
importDefault(dependencyMap[10]).addOfflineCallback(() => {
  importDefaultResult1.networkStateChange(15000, "network detected offline.", false);
});
const importDefaultResult4 = importDefault(dependencyMap[10]);
importDefault(dependencyMap[10]).addOnlineCallback(() => {
  importDefaultResult1.networkStateChange(5000, "network detected online.");
});
importDefaultResult1.on("disconnect", (arg0) => {
  let code;
  let reason;
  ({ code, reason } = arg0);
  importDefault(dependencyMap[11]).dispatch({ type: "CONNECTION_CLOSED", code, reason });
});
importDefaultResult1.on("close", (arg0) => {
  let code;
  let reason;
  ({ code, reason } = arg0);
  importDefault(dependencyMap[11]).dispatch({ type: "CONNECTION_INTERRUPTED", code, reason });
});
const importDefaultResult5 = importDefault(dependencyMap[10]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/gateway/GatewaySocketSingleton.tsx");

export const socket = importDefaultResult1;
export const localPresenceState = importDefaultResult2;
export const localVoiceState = importDefaultResult3;
