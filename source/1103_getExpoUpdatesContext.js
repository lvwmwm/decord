// Module ID: 1103
// Function ID: 12595
// Name: getExpoUpdatesContext
// Dependencies: []

// Module 1103 (getExpoUpdatesContext)
function getExpoUpdatesContext() {
  let obj = arg1(arg6[3]);
  const expoUpdates = obj.getExpoUpdates();
  if (expoUpdates) {
    obj = { is_enabled: expoUpdates.isEnabled, is_embedded_launch: expoUpdates.isEmbeddedLaunch, is_emergency_launch: expoUpdates.isEmergencyLaunch, is_using_embedded_assets: expoUpdates.isUsingEmbeddedAssets };
    if (tmp2) {
      obj.update_id = expoUpdates.updateId.toLowerCase();
      const str2 = expoUpdates.updateId;
    }
    if (tmp3) {
      obj.channel = expoUpdates.channel.toLowerCase();
      const str3 = expoUpdates.channel;
    }
    if (tmp4) {
      obj.runtime_version = expoUpdates.runtimeVersion.toLowerCase();
      const str4 = expoUpdates.runtimeVersion;
    }
    if (tmp5) {
      obj.check_automatically = expoUpdates.checkAutomatically.toLowerCase();
      const str5 = expoUpdates.checkAutomatically;
    }
    if (tmp6) {
      obj.emergency_launch_reason = expoUpdates.emergencyLaunchReason;
    }
    if ("number" === typeof expoUpdates.launchDuration) {
      obj.launch_duration = expoUpdates.launchDuration;
    }
    const _Date = Date;
    if (expoUpdates.createdAt instanceof Date) {
      const createdAt = expoUpdates.createdAt;
      obj.created_at = createdAt.toISOString();
    }
    return obj;
  } else {
    obj = { is_enabled: false };
    return obj;
  }
}
arg5.OTA_UPDATES_CONTEXT_KEY = "ota_updates";
arg5.expoContextIntegration = function expoContextIntegration() {
  function getExpoUpdatesContextCached() {
    let tmp = tmp3;
    if (!tmp3) {
      const tmp3 = callback2();
      tmp = tmp3;
    }
    return tmp;
  }
  return {
    name: "ExpoContext",
    setup(on) {
      on.on("afterInit", () => {
        if (arg0.getOptions().enableNative) {
          if (obj.isExpo()) {
            if (!obj2.isExpoGo()) {
              const tmp6 = callback();
              const NATIVE = arg0(callback[1]).NATIVE;
              NATIVE.setContext("ota_updates", tmp6);
            }
            const obj2 = arg0(callback[0]);
          }
          const obj = arg0(callback[0]);
        }
      });
    },
    processEvent(contexts) {
      if (obj.isExpo()) {
        function addExpoGoContext(contexts) {
          let obj = callback(closure_1[0]);
          if (obj.isExpoGo()) {
            const expoDevice = callback(closure_1[3]).getExpoDevice();
            let tmp4;
            if (expoDevice) {
              obj = { name: expoDevice.deviceName };
              let isDevice;
              if (null != expoDevice) {
                isDevice = expoDevice.isDevice;
              }
              obj.simulator = !isDevice;
              ({ modelName: obj3.model, manufacturer: obj3.manufacturer, totalMemory: obj3.memory_size } = expoDevice);
              tmp4 = obj;
            }
            if (tmp4) {
              contexts.contexts = contexts.contexts || {};
              const _Object = Object;
              const _Object2 = Object;
              contexts.contexts.device = Object.assign(Object.assign({}, tmp4), contexts.contexts.device);
            }
            const obj2 = callback(closure_1[3]);
            const expoDevice1 = callback(closure_1[3]).getExpoDevice();
            let tmp11;
            if (expoDevice1) {
              obj = {};
              ({ osBuildId: obj5.build, osVersion: obj5.version, osName: obj5.name } = expoDevice1);
              tmp11 = obj;
            }
            if (tmp11) {
              contexts.contexts = contexts.contexts || {};
              const _Object3 = Object;
              const _Object4 = Object;
              contexts.contexts.os = Object.assign(Object.assign({}, tmp11), contexts.contexts.os);
            }
          }
        }(contexts);
        contexts.contexts = contexts.contexts || {};
        const _Object = Object;
        contexts.contexts.ota_updates = Object.assign({}, getExpoUpdatesContextCached());
      }
      return contexts;
    }
  };
};
arg5.getExpoUpdatesContext = getExpoUpdatesContext;
