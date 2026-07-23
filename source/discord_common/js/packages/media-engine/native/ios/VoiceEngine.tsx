// Module ID: 4180
// Function ID: 35853
// Name: base64Decode
// Dependencies: [6, 7, 27, 4, 4181, 2]

// Module 4180 (base64Decode)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import { Platform } from "get ActivityIndicator";
import { VoiceEngine } from "constants";
import { VoiceEngine as VoiceEngine2 } from "constants";

const require = arg1;
function base64Decode(arg0) {
  return Buffer.from(arg0, "base64").buffer;
}
function base64Encode(arg0) {
  return Buffer.from(arg0).toString("base64");
}
function callbackSetter(arg0, arg1) {
  const _require = arg1;
  const dependencyMap = null;
  const VoiceEngineEmitter = _require(4181).VoiceEngineEmitter;
  VoiceEngineEmitter.addListener(arg0, (arg0) => {
    let applyResult;
    if (null != c1) {
      const items = [];
      HermesBuiltin.arraySpread(callback(arg0), 0);
      applyResult = HermesBuiltin.apply(items, undefined);
    }
    return applyResult;
  });
  return (arg0) => {
    let closure_1 = arg0;
    return arg0;
  };
}
const logger = new require("constants").Logger("VoiceEngine");
logger.enableNativeLogger(true);
require("constants").VoiceEngine.platform = "android";
const constants = VoiceEngine.getConstants();
let supportedFeatures;
if (null != constants) {
  supportedFeatures = constants.supportedFeatures;
}
if (null == supportedFeatures) {
  supportedFeatures = ["voice_sound_stop_loop", "voice_relative_sounds", "voice_legacy_subsystem", "voice_experimental_subsystem", "elevated_hook", "soundshare", "soundshare_loopback", "set_audio_device_by_id", "set_video_device_by_id", "loopback", "wumpus_video", "hybrid_video", "experiment_config", "remote_locus_network_control", "screen_previews", "window_previews", "audio_debug_state", "connection_replay", "simulcast_bugfix", "RTC_REGION_RANKING", "video_effects", "electron_video", "mediapipe", "fixed_keyframe_interval"];
}
require("constants").VoiceEngine.supportsFeature = (arg0) => supportedFeatures.includes(arg0);
let closure_6 = ["configureConnectionRetries", "getEncryptionModes", "setTransportOptions", "mergeUsers", "destroyUser", "setLocalPan", "setLocalVolume", "setLocalMute", "fastUdpReconnect", "wasRemoteDisconnected", "setMinimumOutputDelay", "setSelfMute", "setSelfDeafen", "setNoInputThreshold", "setPTTActive", "setVideoBroadcast", "triggerOnVideoCallback", "getStats", "getFilteredStats", "setPingInterval", "setDesktopSource", "prepareSecureFramesTransition", "executeSecureFramesTransition", "prepareSecureFramesEpoch", "triggerOnSpeakingCallback"];
if (null != require("constants").VoiceEngine.consoleLog) {
  require("constants").setNativeLogFn((arg0, arg1, arg2) => {
    const VoiceEngine = require(4181) /* constants */.VoiceEngine;
    VoiceEngine.consoleLog(arg1, "[" + arg0 + "] " + arg2);
  });
  const obj2 = require("constants");
}
if (null != require("constants").VoiceEngine.getMLSSigningKeyB64) {
  require("constants").VoiceEngine.getMLSSigningKey = (arg0, arg1, arg2) => {
    const _require = arg2;
    const VoiceEngine = _require(4181).VoiceEngine;
    return VoiceEngine.getMLSSigningKeyB64(arg0, arg1, (arg0, arg1) => {
      let str = "";
      if (null != arg1) {
        str = arg1;
      }
      closure_0(outer1_11(arg0), outer1_11(str));
    });
  };
}
let tmp5 = (() => {
  class VoiceConnection {
    constructor() {
      self = this;
      tmp = outer1_2(this, self);
      tmp2 = +self.nextId;
      self.nextId = tmp2 + 1;
      this.id = tmp2;
      this.subscriptions = [];
      this.setNoInputCallback = this.callbackSetter("no-input-callback", (input) => {
        const items = [input.input];
        return items;
      });
      this.setOnFirstFrameCallback = this.callbackSetter("on-first-frame-callback", (arg0) => {
        const items = [, , ];
        ({ userId: arr[0], ssrc: arr[1], streamId: arr[2] } = arg0);
        return items;
      });
      this.setOnNativeMuteChangedCallback = this.callbackSetter("native-mute-state-changed", (muted) => {
        const items = [muted.muted];
        return items;
      });
      this.setPingCallback = this.callbackSetter("ping-callback", (arg0) => {
        const items = [, , , ];
        ({ ping: arr[0], server: arr[1], port: arr[2], seq: arr[3] } = arg0);
        return items;
      });
      this.setPingTimeoutCallback = this.callbackSetter("ping-timeout-callback", (arg0) => {
        const items = [, , ];
        ({ server: arr[0], port: arr[1], seq: arr[2] } = arg0);
        return items;
      });
      this.setOnSpeakingCallback_ = this.callbackSetter("user-speaking", (arg0) => {
        const items = [, , ];
        ({ userId: arr[0], isSpeaking: arr[1], voiceDb: arr[2] } = arg0);
        return items;
      });
      this.setOnSpeakingCallback = (arg0) => {
        const result = self.setOnSpeakingCallback_(arg0);
        const result1 = self.triggerOnSpeakingCallback();
      };
      this.setOnSpeakingWhileMutedCallback = this.callbackSetter("speaking-while-muted", () => []);
      this.setOnVideoCallback_ = this.callbackSetter("on-video-callback", (arg0) => {
        const items = [, , , , ];
        ({ userId: arr[0], ssrc: arr[1], streamId: arr[2], videoStreamParameters: arr[3], videoStreamParametersJSON: arr[4] } = arg0);
        return items;
      });
      this.setOnVideoCallback = (arg0) => {
        const _self = arg0;
        if (null == arg0) {
          _self.setOnVideoCallback_(arg0);
        } else {
          _self.setOnVideoCallback_((arg0, arg1, arg2, arg3, arg4) => {
            let parsed = arg3;
            let tmp2 = arg4;
            if (arg4) {
              tmp2 = !parsed;
            }
            if (tmp2) {
              const _JSON = JSON;
              parsed = JSON.parse(arg4);
            }
            return callback(arg0, arg1, arg2, parsed);
          });
        }
        const result = _self.triggerOnVideoCallback();
      };
      this.getMLSKeyPackage = (arg0) => {
        const _self = arg0;
        _self.boundConnectionMethod("getMLSKeyPackageB64")((arg0) => {
          callback(outer3_11(arg0));
        });
      };
      this.updateMLSExternalSender = (arg0) => {
        const tmp = outer2_12(arg0);
        outer2_4.info("updateMLSExternalSender: " + tmp);
        self.boundConnectionMethod("updateMLSExternalSenderB64")(tmp);
      };
      this.processMLSProposals = (arg0, arg1) => {
        const _self = arg1;
        _self.boundConnectionMethod("processMLSProposalsB64")(outer2_12(arg0), (arg0) => {
          callback(outer3_11(arg0));
        });
      };
      this.prepareMLSCommitTransition = (result) => {
        result = self.boundConnectionMethod("prepareMLSCommitTransitionB64");
        result(result, outer2_12(arg1), self.wrapRosterCallback(arg2));
      };
      this.processMLSWelcome = (result) => {
        result = self.boundConnectionMethod("processMLSWelcomeB64");
        result(result, outer2_12(arg1), self.wrapRosterCallback(arg2));
      };
      this.getMLSPairwiseFingerprint = (arg0, arg1, arg2) => {
        const _self = arg2;
        _self.boundConnectionMethod("getMLSPairwiseFingerprintB64")(arg0, arg1, (arg0) => {
          callback(outer3_11(arg0));
        });
      };
      this.setOnMLSFailureCallback = this.callbackSetter("mls-failure-callback", (arg0) => {
        const items = [, ];
        ({ source: arr[0], reason: arr[1] } = arg0);
        return items;
      });
      this.setSecureFramesStateUpdateCallback = this.callbackSetter("secure-frames-state-update-callback", (stateUpdate) => {
        stateUpdate = stateUpdate.stateUpdate;
        if (null == stateUpdate) {
          const _JSON = JSON;
          stateUpdate = JSON.parse(tmp);
        }
        const items = [stateUpdate];
        return items;
      });
      item = outer1_6.forEach((arg0) => {
        self[arg0] = self.boundConnectionMethod(arg0);
      });
      return;
    }
  }
  let obj = {
    key: "wrapRosterCallback",
    value(arg0) {
      let closure_0 = arg0;
      return (arg0, arg1, arg2) => {
        const obj = {};
        if (null != arg2) {
          const _JSON = JSON;
          const parsed = JSON.parse(arg2);
          for (const key10010 in parsed) {
            let tmp5 = key10010;
            let tmp6 = outer2_11;
            obj[key10010] = outer2_11(parsed[key10010]);
            continue;
          }
        }
        callback(arg0, arg1, obj);
      };
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "destroy",
    value() {
      let flag = arg0;
      const self = this;
      if (arg0 === undefined) {
        flag = false;
      }
      const subscriptions = self.subscriptions;
      const item = subscriptions.forEach((remove) => remove.remove());
      self.subscriptions.length = 0;
      const VoiceEngine = VoiceConnection(outer1_1[4]).VoiceEngine;
      const result = VoiceEngine.connectionInstanceDestroy(self.id, flag);
    }
  };
  items[1] = obj;
  obj = {
    key: "getId",
    value() {
      return this.id;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "boundConnectionMethod",
    value(arg0) {
      const formatted = arg0[0].toUpperCase();
      return VoiceConnection(outer1_1[4]).VoiceEngine["connectionInstance" + formatted + arg0.slice(arg0, 1)].bind(VoiceConnection(outer1_1[4]).VoiceEngine, this.id);
    }
  };
  items[4] = {
    key: "callbackSetter",
    value(arg0, arg1) {
      const self = this;
      let closure_1 = arg1;
      let c2 = null;
      const subscriptions = this.subscriptions;
      const VoiceEngineEmitter = VoiceConnection(outer1_1[4]).VoiceEngineEmitter;
      subscriptions.push(VoiceEngineEmitter.addListener(arg0, (connectionId) => {
        if (tmp) {
          const items = [];
          HermesBuiltin.arraySpread(callback(connectionId), 0);
          HermesBuiltin.apply(items, undefined);
        }
      }));
      return (arg0) => {
        let _classCallCheck = arg0;
        return arg0;
      };
    }
  };
  return callback(VoiceConnection, items);
})();
let closure_7 = tmp5;
tmp5.nextId = 0;
let closure_8 = require("constants").VoiceEngine.createVoiceConnectionWithOptions;
require("constants").VoiceEngine.createVoiceConnectionWithOptions = (arg0, arg1, arg2) => {
  const obj = new closure_7();
  callback2(obj.getId(), arg0, arg1, arg2);
  return obj;
};
let closure_9 = require("constants").VoiceEngine.createOwnStreamConnectionWithOptions;
require("constants").VoiceEngine.createOwnStreamConnectionWithOptions = (arg0, arg1, arg2) => {
  const obj = new closure_7();
  callback3(obj.getId(), arg0, arg1, arg2);
  return obj;
};
require("constants").VoiceEngine.setNoInputCallback = callbackSetter("no-input-callback", (input) => {
  const items = [input.input];
  return items;
});
require("constants").VoiceEngine.setOnVoiceCallback = callbackSetter("on-voice", (arg0) => {
  const items = [, ];
  ({ level: arr[0], speaking: arr[1] } = arg0);
  return items;
});
require("constants").VoiceEngine.setOnNativeMuteChangedCallback = callbackSetter("native-mute-state-changed", (muted) => {
  const items = [muted.muted];
  return items;
});
require("constants").VoiceEngine.setDeviceChangeCallback = callbackSetter("device-changed", (arg0) => {
  const items = [, , ];
  ({ inputDevices: arr[0], outputDevices: arr[1], videoInputDevices: arr[2] } = arg0);
  return items;
});
require("constants").VoiceEngine.setVolumeChangeCallback = callbackSetter("volume-changed", (arg0) => {
  const items = [, ];
  ({ inputVolume: arr[0], outputVolume: arr[1] } = arg0);
  return items;
});
require("constants").VoiceEngine.setActiveSinksChangeCallback = callbackSetter("active-sinks-change", (arg0) => {
  const items = [, ];
  ({ streamId: arr[0], active: arr[1] } = arg0);
  return items;
});
require("constants").VoiceEngine.setBroadcastRequestCallback = callbackSetter("on-broadcast-requested", () => []);
require("constants").VoiceEngine.setBroadcastFinishedCallback = callbackSetter("on-broadcast-finished", () => []);
require("constants").VoiceEngine.setBroadcastAnnotatedCallback = callbackSetter("on-broadcast-annotated", (appBundleIdentifier) => {
  const items = [appBundleIdentifier.appBundleIdentifier];
  return items;
});
require("constants").VoiceEngine.setBroadcastBlockedCallback = callbackSetter("on-broadcast-blocked", () => []);
require("constants").VoiceEngine.setSystemMicrophoneModeChangeCallback = callbackSetter("system-microphone-mode-change", (mode) => {
  const items = [mode.mode];
  return items;
});
require("constants").VoiceEngine.setVoiceProcessingErrorCallback = callbackSetter("voice-processing-error-callback", (error) => {
  const items = [error.error];
  return items;
});
let closure_10 = callbackSetter("on-broadcast-thumbnail", (imgdata) => {
  const items = [imgdata.imgdata];
  return items;
});
require("constants").VoiceEngine.setBroadcastThumbnailCallback = (arg0, arg1, arg2, arg3) => {
  callback4(arg3);
  const VoiceEngine = require(4181) /* constants */.VoiceEngine;
  const result = VoiceEngine.setBroadcastThumbnailParams(arg0, arg1, arg2);
};
require("constants").VoiceEngine.setAudioInputInitializationCallback = callbackSetter("audio-input-initialized", (arg0) => {
  const items = [arg0];
  return items;
});
VoiceEngine2.initializeEngine();
let result = require("get ActivityIndicator").fileFinishedImporting("../discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx");

export { VoiceEngine as default } from "constants";
