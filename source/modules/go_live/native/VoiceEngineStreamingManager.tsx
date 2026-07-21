// Module ID: 4304
// Function ID: 37659
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4304 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleThumbnailUpload() {
  return _handleThumbnailUpload(...arguments);
}
async function _handleThumbnailUpload(encodeStreamKeyResult, arg1, arg2) {
  const DisableStreamPreviews = encodeStreamKeyResult(closure_2[16]).DisableStreamPreviews;
  if (!DisableStreamPreviews.getSetting()) {
    closure_20.stop();
    const _HermesInternal = HermesInternal;
    const combined = "" + closure_14 + arg1;
    let obj = arg1(closure_2[17]);
    obj = { type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: encodeStreamKeyResult, previewURL: combined };
    obj.dispatch(obj);
    const HTTP = encodeStreamKeyResult(closure_2[18]).HTTP;
    obj = { url: closure_15.STREAM_PREVIEW(encodeStreamKeyResult) };
    const obj1 = { thumbnail: combined };
    obj.body = obj1;
    obj.oldFormErrors = true;
    obj.rejectWithError = false;
    yield HTTP.post(obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[7]);
const Linking = arg1(dependencyMap[8]).Linking;
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
const importDefaultResult1 = importDefault(dependencyMap[11]);
const importDefaultResult = importDefault(dependencyMap[6]);
({ Base64JPEGPrefix: closure_14, Endpoints: closure_15, NOOP_NULL: closure_16, IOS_BUNDLE_ID: closure_17 } = arg1(dependencyMap[12]));
const getAppIntentScheme = arg1(dependencyMap[13]).getAppIntentScheme;
let importDefaultResult2 = importDefault(dependencyMap[14]);
importDefaultResult2 = new importDefaultResult2("VoiceEngineStreamingManager");
importDefaultResult2.enableNativeLogger(true);
const timeout = new arg1(dependencyMap[15]).Timeout();
const timeout1 = new arg1(dependencyMap[15]).Timeout();
let closure_22 = [];
const voiceChannelId = importDefaultResult1.getVoiceChannelId();
let closure_25 = importDefaultResult("handleVoiceChannelSelect");
let tmp8 = (arg0) => {
  class VoiceEngineStreamingManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, VoiceEngineStreamingManager);
      items1 = [...items];
      obj = closure_6(VoiceEngineStreamingManager);
      tmp2 = closure_5;
      if (closure_26()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = {
        writable: true,
        value(channelId) {
              channelId = channelId.channelId;
              if (channelId !== channelId) {
                if (null != closure_23) {
                  obj.stopBroadcast();
                }
                const allActiveStreams = allActiveStreams.getAllActiveStreams();
                const item = allActiveStreams.forEach((channelId) => {
                  if (channelId.channelId !== channelId) {
                    const obj = channelId(closure_2[19]);
                    const encodeStreamKeyResult = channelId(closure_2[19]).encodeStreamKey(channelId);
                    channelId(closure_2[20]).stopStream(encodeStreamKeyResult, false);
                    const obj2 = channelId(closure_2[20]);
                  }
                });
                const obj = closure_23;
              }
            }
      };
      definePropertyResult = Object.defineProperty(tmp2Result, closure_25, obj);
      return tmp2Result;
    }
  }
  const arg1 = VoiceEngineStreamingManager;
  callback2(VoiceEngineStreamingManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const voiceEngine = VoiceEngineStreamingManager(closure_2[21]).getVoiceEngine();
      const result = voiceEngine.setBroadcastRequestCallback(() => {
        closure_19.log("Broadcast Requested");
        callback2(closure_2[22])(null != voiceEngine, "Voice Engine should be initialized in callback");
        let closure_22 = [];
        const channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
        const currentAppIntent = authStore.getCurrentAppIntent();
        if (null != channel) {
          const guildId = channel.getGuildId();
          const obj = { sourceId: "screen:0" };
          currentUserActiveStream(closure_2[20]).startStream(guildId, channel.id, obj);
          const currentUserActiveStream = authStore.getCurrentUserActiveStream();
          if (null != currentUserActiveStream) {
            const obj4 = callback2(closure_2[23]);
            const participant = obj4.selectParticipant(channel.id, currentUserActiveStream(closure_2[19]).encodeStreamKey(currentUserActiveStream));
            if ("android" === voiceEngine.platform) {
              closure_21.start(15000, () => {
                callback(closure_2[22])(null != broadcastThumbnailCallback, "Voice Engine should be initialized in callback");
                const size = currentUserActiveStream(closure_2[24]).getWindowDimensions();
                const bound = Math.min(512 / size.width, 288 / size.height);
                const result = broadcastThumbnailCallback.setBroadcastThumbnailCallback(size.width * bound, size.height * bound, 300, (arg0) => {
                  closure_19.log("Broadcast thumbnail of size:", arg0.length);
                  callback2(callback(closure_2[19]).encodeStreamKey(callback), arg0);
                });
              });
            }
            if (null != currentAppIntent) {
              closure_10.openURL(callback3(currentAppIntent));
            }
            const obj5 = currentUserActiveStream(closure_2[19]);
          }
          const obj2 = currentUserActiveStream(closure_2[20]);
        } else {
          const result = voiceEngine.stopBroadcastWithError(-1, "Not currently in a voice channel");
        }
      });
      const result1 = voiceEngine.setBroadcastFinishedCallback(() => {
        closure_19.log("Broadcast Finished");
        closure_20.stop();
        closure_21.stop();
        const result = callback(closure_2[25]).handleCloseScreenshare();
      });
      const result2 = voiceEngine.setBroadcastAnnotatedCallback((arg0) => {
        closure_19.log("Broadcast Annotated:", arg0);
        if (arg0 !== closure_17) {
          const index = arr.indexOf(arg0, 0);
          if (index > -1) {
            arr.splice(index, 1);
          }
          const arr = arr.push(arg0);
        }
      });
      const result3 = voiceEngine.setBroadcastBlockedCallback(() => {
        closure_19.log("Broadcast Blocked");
        let obj = callback2(closure_2[26]);
        obj = {};
        const intl = callback(closure_2[27]).intl;
        obj.alertBody = intl.string(callback(closure_2[27]).t.iYQlwv);
        const result = obj.presentLocalNotification(obj);
      });
      const obj = VoiceEngineStreamingManager(closure_2[21]);
      const subscription = callback(closure_2[17]).subscribe("VOICE_CHANNEL_SELECT", callback4(this, closure_25)[closure_25]);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "_terminate",
    value() {
      const voiceEngine = VoiceEngineStreamingManager(closure_2[21]).getVoiceEngine();
      if (null != voiceEngine) {
        const result = voiceEngine.setBroadcastRequestCallback(closure_16);
        const result1 = voiceEngine.setBroadcastFinishedCallback(closure_16);
        const result2 = voiceEngine.setBroadcastAnnotatedCallback(closure_16);
        const result3 = voiceEngine.setBroadcastBlockedCallback(closure_16);
      }
      closure_20.stop();
      closure_21.stop();
      const obj = VoiceEngineStreamingManager(closure_2[21]);
      callback(closure_2[17]).unsubscribe("VOICE_CHANNEL_SELECT", callback4(this, closure_25)[closure_25]);
    }
  };
  items[1] = obj;
  obj = {
    key: "getApplicationNames",
    value() {
      return closure_22;
    }
  };
  items[2] = obj;
  return callback(VoiceEngineStreamingManager, items);
}(importDefault(dependencyMap[28]));
tmp8 = new tmp8();
const tmp3 = arg1(dependencyMap[12]);
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/go_live/native/VoiceEngineStreamingManager.tsx");

export default tmp8;
