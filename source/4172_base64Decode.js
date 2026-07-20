// Module ID: 4172
// Function ID: 35759
// Name: base64Decode
// Dependencies: []

// Module 4172 (base64Decode)
function base64Decode(arg0) {
  return Buffer.from(arg0, "base64").buffer;
}
function base64Encode(arg0) {
  return Buffer.from(arg0).toString("base64");
}
function callbackSetter(arg0, arg1) {
  let closure_1 = null;
  const VoiceEngineEmitter = arg1(closure_1[4]).VoiceEngineEmitter;
  VoiceEngineEmitter.addListener(arg0, (arg0) => {
    let applyResult;
    if (null != closure_1) {
      const items = [];
      HermesBuiltin.arraySpread(arg1(arg0), 0);
      applyResult = HermesBuiltin.apply(items, undefined);
    }
    return applyResult;
  });
  return (arg0) => {
    let closure_1 = arg0;
    return arg0;
  };
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const Platform = arg1(dependencyMap[2]).Platform;
const logger = new arg1(dependencyMap[3]).Logger("VoiceEngine");
logger.enableNativeLogger(true);
arg1(dependencyMap[4]).VoiceEngine.platform = "android";
const VoiceEngine = arg1(dependencyMap[4]).VoiceEngine;
const constants = VoiceEngine.getConstants();
let supportedFeatures;
if (null != constants) {
  supportedFeatures = constants.supportedFeatures;
}
if (null == supportedFeatures) {
  supportedFeatures = [0.000000000000000000000000000000000000000017408911317568873, 0.00000000000000000000000000000000000037615862998826606, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009161009217409134, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000095813626343108, -0.0010533562683718864, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004572918688508546, 0.00000000000000000368630192533424, 1142591137660225700000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005924060530126423, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000231125659610199, "no_bell", "mega", "megaphone", "speech_left", "left_speech_bubble", "eye_in_speech_bubble", "speech_balloon", "thought_balloon", true, true, true, true, true, true];
}
arg1(dependencyMap[4]).VoiceEngine.supportsFeature = (arg0) => supportedFeatures.includes(arg0);
let closure_6 = ["isInteractive", "cloudflareCtx", "imp", "AGE_CHECK_MAX_POLL_ATTEMPTS", "resolvedSyncPromise", "FriendRequests", "nodeMap", "esc", "dje", "auto_archive_duration", "CRACKED_ACCOUNTS", "vaultInitiatedCheckoutPaymentMethodToken", "r", "ANIMATION_SOURCE", "Array", "ANIMATION_EASING", "r", "giftInfo", "int64", "MUR", "Version", "ASSETS_URLS", "%GeneratorFunction%", "GameDepthTier9LargeBadge", "_mergeFormats"];
if (null != arg1(dependencyMap[4]).VoiceEngine.consoleLog) {
  arg1(dependencyMap[3]).setNativeLogFn((arg0, arg1, arg2) => {
    const VoiceEngine = arg1(dependencyMap[4]).VoiceEngine;
    VoiceEngine.consoleLog(arg1, "[" + arg0 + "] " + arg2);
  });
  const obj2 = arg1(dependencyMap[3]);
}
if (null != arg1(dependencyMap[4]).VoiceEngine.getMLSSigningKeyB64) {
  arg1(dependencyMap[4]).VoiceEngine.getMLSSigningKey = (arg0, arg1, arg2) => {
    arg1 = arg2;
    const VoiceEngine = arg1(dependencyMap[4]).VoiceEngine;
    return VoiceEngine.getMLSSigningKeyB64(arg0, arg1, (arg0, arg1) => {
      let str = "";
      if (null != arg1) {
        str = arg1;
      }
      arg2(callback(arg0), callback(str));
    });
  };
}
const tmp5 = () => {
  class VoiceConnection {
    constructor() {
      VoiceConnection = this;
      tmp = closure_2(this, VoiceConnection);
      tmp2 = +VoiceConnection.nextId;
      VoiceConnection.nextId = tmp2 + 1;
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
        const self = arg0;
        if (null == arg0) {
          self.setOnVideoCallback_(arg0);
        } else {
          self.setOnVideoCallback_((arg0, arg1, arg2, arg3, arg4) => {
            let parsed = arg3;
            let tmp2 = arg4;
            if (arg4) {
              tmp2 = !parsed;
            }
            if (tmp2) {
              const _JSON = JSON;
              parsed = JSON.parse(arg4);
            }
            return arg0(arg0, arg1, arg2, parsed);
          });
        }
        const result = self.triggerOnVideoCallback();
      };
      this.getMLSKeyPackage = (arg0) => {
        const self = arg0;
        self.boundConnectionMethod("getMLSKeyPackageB64")((arg0) => {
          arg0(callback(arg0));
        });
      };
      this.updateMLSExternalSender = (arg0) => {
        const tmp = callback(arg0);
        closure_4.info("updateMLSExternalSender: " + tmp);
        self.boundConnectionMethod("updateMLSExternalSenderB64")(tmp);
      };
      this.processMLSProposals = (arg0, arg1) => {
        const self = arg1;
        self.boundConnectionMethod("processMLSProposalsB64")(callback(arg0), (arg0) => {
          arg1(callback(arg0));
        });
      };
      this.prepareMLSCommitTransition = (closure_7) => {
        const result = self.boundConnectionMethod("prepareMLSCommitTransitionB64");
        result(closure_7, callback(arg1), self.wrapRosterCallback(arg2));
      };
      this.processMLSWelcome = (closure_7) => {
        const result = self.boundConnectionMethod("processMLSWelcomeB64");
        result(closure_7, callback(arg1), self.wrapRosterCallback(arg2));
      };
      this.getMLSPairwiseFingerprint = (arg0, arg1, arg2) => {
        const self = arg2;
        self.boundConnectionMethod("getMLSPairwiseFingerprintB64")(arg0, arg1, (arg0) => {
          arg2(callback(arg0));
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
      item = closure_6.forEach((arg0) => {
        self[arg0] = self.boundConnectionMethod(arg0);
      });
      return;
    }
  }
  const arg1 = VoiceConnection;
  let obj = {
    key: "wrapRosterCallback",
    value(arg0) {
      const VoiceConnection = arg0;
      return (arg0, arg1, arg2) => {
        const obj = {};
        if (null != arg2) {
          const _JSON = JSON;
          const parsed = JSON.parse(arg2);
          for (const key10010 in parsed) {
            let tmp5 = key10010;
            let tmp6 = closure_11;
            obj[key10010] = closure_11(parsed[key10010]);
          }
        }
        arg0(arg0, arg1, obj);
      };
    }
  };
  const items = [obj, , , , ];
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
      const VoiceEngine = VoiceConnection(closure_1[4]).VoiceEngine;
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
      return VoiceConnection(closure_1[4]).VoiceEngine["connectionInstance" + formatted + arg0.slice(arg0, 1)].bind(VoiceConnection(closure_1[4]).VoiceEngine, this.id);
    }
  };
  items[4] = {
    key: "callbackSetter",
    value(arg0, arg1) {
      const VoiceConnection = this;
      let closure_2 = null;
      const subscriptions = this.subscriptions;
      const VoiceEngineEmitter = VoiceConnection(arg1[4]).VoiceEngineEmitter;
      subscriptions.push(VoiceEngineEmitter.addListener(arg0, (connectionId) => {
        if (tmp) {
          const items = [];
          HermesBuiltin.arraySpread(arg1(connectionId), 0);
          HermesBuiltin.apply(items, undefined);
        }
      }));
      return (arg0) => {
        let closure_2 = arg0;
        return arg0;
      };
    }
  };
  return callback(VoiceConnection, items);
}();
tmp5.nextId = 0;
let closure_8 = arg1(dependencyMap[4]).VoiceEngine.createVoiceConnectionWithOptions;
arg1(dependencyMap[4]).VoiceEngine.createVoiceConnectionWithOptions = (arg0, arg1, arg2) => {
  const obj = new tmp5();
  callback2(obj.getId(), arg0, arg1, arg2);
  return obj;
};
let closure_9 = arg1(dependencyMap[4]).VoiceEngine.createOwnStreamConnectionWithOptions;
arg1(dependencyMap[4]).VoiceEngine.createOwnStreamConnectionWithOptions = (arg0, arg1, arg2) => {
  const obj = new tmp5();
  callback3(obj.getId(), arg0, arg1, arg2);
  return obj;
};
arg1(dependencyMap[4]).VoiceEngine.setNoInputCallback = callbackSetter("no-input-callback", (input) => {
  const items = [input.input];
  return items;
});
arg1(dependencyMap[4]).VoiceEngine.setOnVoiceCallback = callbackSetter("on-voice", (arg0) => {
  const items = [, ];
  ({ level: arr[0], speaking: arr[1] } = arg0);
  return items;
});
arg1(dependencyMap[4]).VoiceEngine.setOnNativeMuteChangedCallback = callbackSetter("native-mute-state-changed", (muted) => {
  const items = [muted.muted];
  return items;
});
arg1(dependencyMap[4]).VoiceEngine.setDeviceChangeCallback = callbackSetter("device-changed", (arg0) => {
  const items = [, , ];
  ({ inputDevices: arr[0], outputDevices: arr[1], videoInputDevices: arr[2] } = arg0);
  return items;
});
arg1(dependencyMap[4]).VoiceEngine.setVolumeChangeCallback = callbackSetter("volume-changed", (arg0) => {
  const items = [, ];
  ({ inputVolume: arr[0], outputVolume: arr[1] } = arg0);
  return items;
});
arg1(dependencyMap[4]).VoiceEngine.setActiveSinksChangeCallback = callbackSetter("active-sinks-change", (arg0) => {
  const items = [, ];
  ({ streamId: arr[0], active: arr[1] } = arg0);
  return items;
});
arg1(dependencyMap[4]).VoiceEngine.setBroadcastRequestCallback = callbackSetter("on-broadcast-requested", () => []);
arg1(dependencyMap[4]).VoiceEngine.setBroadcastFinishedCallback = callbackSetter("on-broadcast-finished", () => []);
arg1(dependencyMap[4]).VoiceEngine.setBroadcastAnnotatedCallback = callbackSetter("on-broadcast-annotated", (appBundleIdentifier) => {
  const items = [appBundleIdentifier.appBundleIdentifier];
  return items;
});
arg1(dependencyMap[4]).VoiceEngine.setBroadcastBlockedCallback = callbackSetter("on-broadcast-blocked", () => []);
arg1(dependencyMap[4]).VoiceEngine.setSystemMicrophoneModeChangeCallback = callbackSetter("system-microphone-mode-change", (mode) => {
  const items = [mode.mode];
  return items;
});
arg1(dependencyMap[4]).VoiceEngine.setVoiceProcessingErrorCallback = callbackSetter("voice-processing-error-callback", (error) => {
  const items = [error.error];
  return items;
});
let closure_10 = callbackSetter("on-broadcast-thumbnail", (imgdata) => {
  const items = [imgdata.imgdata];
  return items;
});
arg1(dependencyMap[4]).VoiceEngine.setBroadcastThumbnailCallback = (arg0, arg1, arg2, arg3) => {
  callback4(arg3);
  const VoiceEngine = arg1(dependencyMap[4]).VoiceEngine;
  const result = VoiceEngine.setBroadcastThumbnailParams(arg0, arg1, arg2);
};
arg1(dependencyMap[4]).VoiceEngine.setAudioInputInitializationCallback = callbackSetter("audio-input-initialized", (arg0) => {
  const items = [arg0];
  return items;
});
const VoiceEngine2 = arg1(dependencyMap[4]).VoiceEngine;
VoiceEngine2.initializeEngine();
const result = arg1(dependencyMap[5]).fileFinishedImporting("../discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx");

export default arg1(dependencyMap[4]).VoiceEngine;
