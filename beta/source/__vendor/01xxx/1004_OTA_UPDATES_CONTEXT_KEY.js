// Module ID: 1004
// Function ID: 1005
// Name: OTA_UPDATES_CONTEXT_KEY
// Dependencies: [879, 878, 694, 880]
// Exports: expoContextIntegration

// Module 1004 (OTA_UPDATES_CONTEXT_KEY)
import _mod879 from "module_879" /* 879 */;
import _mod880 from "module_880" /* 880 */;

let closure_0;

function getExpoUpdatesContext() {
  const obj = _mod880;
  const expoUpdates = obj.getExpoUpdates();
  if (expoUpdates) {
    const obj2 = { is_enabled: expoUpdates.isEnabled, is_embedded_launch: expoUpdates.isEmbeddedLaunch, is_emergency_launch: expoUpdates.isEmergencyLaunch, is_using_embedded_assets: expoUpdates.isUsingEmbeddedAssets };
    const updateId = expoUpdates.updateId;
    let updateId2 = typeof updateId === "string";
    if (typeof updateId === "string") {
      updateId2 = expoUpdates.updateId;
    }
    if (updateId2) {
      const str = expoUpdates.updateId;
      obj2.update_id = str.toLowerCase();
    }
    const channel = expoUpdates.channel;
    let channel2 = typeof channel === "string";
    if (typeof channel === "string") {
      channel2 = expoUpdates.channel;
    }
    if (channel2) {
      const str2 = expoUpdates.channel;
      obj2.channel = str2.toLowerCase();
    }
    const runtimeVersion = expoUpdates.runtimeVersion;
    let runtimeVersion2 = typeof runtimeVersion === "string";
    if (typeof runtimeVersion === "string") {
      runtimeVersion2 = expoUpdates.runtimeVersion;
    }
    if (runtimeVersion2) {
      const str3 = expoUpdates.runtimeVersion;
      obj2.runtime_version = str3.toLowerCase();
    }
    const checkAutomatically = expoUpdates.checkAutomatically;
    let checkAutomatically2 = typeof checkAutomatically === "string";
    if (typeof checkAutomatically === "string") {
      checkAutomatically2 = expoUpdates.checkAutomatically;
    }
    if (checkAutomatically2) {
      const str4 = expoUpdates.checkAutomatically;
      obj2.check_automatically = str4.toLowerCase();
    }
    const emergencyLaunchReason = expoUpdates.emergencyLaunchReason;
    let emergencyLaunchReason2 = typeof emergencyLaunchReason === "string";
    if (typeof emergencyLaunchReason === "string") {
      emergencyLaunchReason2 = expoUpdates.emergencyLaunchReason;
    }
    if (emergencyLaunchReason2) {
      obj2.emergency_launch_reason = expoUpdates.emergencyLaunchReason;
    }
    if (typeof expoUpdates.launchDuration === "number") {
      obj2.launch_duration = expoUpdates.launchDuration;
    }
    const _Date = Date;
    if (expoUpdates.createdAt instanceof Date) {
      const createdAt = expoUpdates.createdAt;
      obj2.created_at = createdAt.toISOString();
    }
    return obj2;
  } else {
    return { is_enabled: false };
  }
}
const ota_updates = "ota_updates";

export const OTA_UPDATES_CONTEXT_KEY = "ota_updates";
export const expoContextIntegration = () => {
  function getExpoUpdatesContextCached() {
    let tmp = closure_0;
    if (!tmp) {
      const tmp3 = getExpoUpdatesContext();
      closure_0 = tmp3;
      tmp = tmp3;
    }
    return tmp;
  }
  let obj = {
    name: "ExpoContext",
    setup(on) {
      const options = on;
      on.on("afterInit", () => {
        function setExpoUpdatesNativeContext() {
          const obj = options(getExpoUpdatesContextCached[0]);
          if (obj.isExpo()) {
            const tmpResult = options(getExpoUpdatesContextCached[0]);
            if (!tmpResult.isExpoGo()) {
              try {
                const NATIVE = tmp(tmp2[1]).NATIVE;
                NATIVE.setContext(closure_2_2, tmp4);
              } catch (tmp7) {
                const debug = tmp(tmp2[2]).debug;
                debug.error("Error setting Expo updates context:", tmp7);
              }
            }
          }
        }
        if (options.getOptions().enableNative) {
          const tmp = setExpoUpdatesNativeContext();
        }
      });
    },
    processEvent(contexts) {
      let isDevice;
      const obj = _mod879;
      if (obj.isExpo()) {
        const tmpResult = _mod879;
        if (tmpResult.isExpoGo()) {
          const tmpResult3 = _mod880;
          const expoDevice = tmpResult3.getExpoDevice();
          let tmp4;
          if (expoDevice) {
            const obj2 = { name: expoDevice.deviceName, simulator: !isDevice, model: null, manufacturer: null, memory_size: null };
            isDevice = undefined;
            if (null != expoDevice) {
              isDevice = expoDevice.isDevice;
            }
            ({ modelName: obj4.model, manufacturer: obj4.manufacturer, totalMemory: obj4.memory_size } = expoDevice);
            tmp4 = obj2;
          }
          if (tmp4) {
            contexts.contexts = contexts.contexts || {};
            const _Object = Object;
            const _Object2 = Object;
            contexts.contexts.device = Object.assign(Object.assign({}, tmp4), contexts.contexts.device);
          }
          const tmpResult4 = _mod880;
          const expoDevice1 = tmpResult4.getExpoDevice();
          let tmp9;
          if (expoDevice1) {
            const obj3 = { build: null, version: null, name: null };
            ({ osBuildId: obj6.build, osVersion: obj6.version, osName: obj6.name } = expoDevice1);
            tmp9 = obj3;
          }
          if (tmp9) {
            contexts.contexts = contexts.contexts || {};
            const _Object3 = Object;
            const _Object4 = Object;
            contexts.contexts.os = Object.assign(Object.assign({}, tmp9), contexts.contexts.os);
          }
        }
        contexts.contexts = contexts.contexts || {};
        let tmp13 = closure_0;
        contexts = contexts.contexts;
        const _Object5 = Object;
        const tmp11 = ota_updates;
        if (!closure_0) {
          const tmp15 = getExpoUpdatesContext();
          closure_0 = tmp15;
          tmp13 = tmp15;
        }
        contexts[tmp11] = assign({}, tmp13);
      }
      return contexts;
    }
  };
  return obj;
};
export { getExpoUpdatesContext };
