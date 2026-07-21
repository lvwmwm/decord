// Module ID: 12615
// Function ID: 96952
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12615 (_isNativeReflectConstruct)
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
const obj = { RequestedSSRCsUpdate: "requested-ssrcs-update", RequestedStreamsUpdate: "requested-streams-update" };
const tmp2 = (arg0) => {
  class GoLiveQualityManager {
    constructor() {
      self = this;
      tmp = closure_3(this, GoLiveQualityManager);
      obj = closure_6(GoLiveQualityManager);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      GoLiveQualityManager = tmp2Result;
      tmp2Result.streamId = null;
      tmp2Result.resolutionWidth = 0;
      tmp2Result.resolutionHeight = 0;
      tmp2Result.zoom = 1;
      tmp2Result.audioSSRC = 0;
      tmp2Result.incomingVideoEnabled = true;
      tmp2Result.delayedUpdate = () => {
        const delayedCall = tmp2Result.delayedCall;
        delayedCall.delay();
      };
      tmp7 = closure_1(closure_2[5]);
      tmp7 = new tmp7("GoLiveQualityManager");
      tmp2Result.logger = tmp7;
      logger = tmp2Result.logger;
      enableNativeLoggerResult = logger.enableNativeLogger(true);
      delayedCall = new GoLiveQualityManager(closure_2[6]).DelayedCall(500, () => {
        tmp2Result.update();
      });
      tmp2Result.delayedCall = delayedCall;
      return tmp2Result;
    }
  }
  const arg1 = GoLiveQualityManager;
  callback2(GoLiveQualityManager, arg0);
  let obj = {
    key: "setUserID",
    value(userId) {
      this.userId = userId;
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "getUserID",
    value() {
      return this.userId;
    }
  };
  items[1] = obj;
  obj = {
    key: "updateAudioAndVideoStreamInfo",
    value(audioSSRC, arr) {
      this.audioSSRC = audioSSRC;
      this.videoStream = arr.find((active) => active.active);
      this.update();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "onIncomingVideoEnabled",
    value(incomingVideoEnabled) {
      const self = this;
      if (this.incomingVideoEnabled !== incomingVideoEnabled) {
        const logger = self.logger;
        logger.info("onIncomingVideoEnabled", incomingVideoEnabled);
        self.incomingVideoEnabled = incomingVideoEnabled;
        self.update();
      }
    }
  };
  items[4] = {
    key: "update",
    value() {
      const self = this;
      if (tmp) {
        if (self.incomingVideoEnabled) {
          const stream = self.requestStream();
        } else {
          self.stopStream();
        }
      }
    }
  };
  items[5] = {
    key: "requestStream",
    value() {
      const self = this;
      if (null != this.videoStream) {
        const obj = {};
        obj[self.videoStream.ssrc] = 100;
        const items = [self.videoStream.ssrc];
        self.request(obj, items);
      }
    }
  };
  items[6] = {
    key: "stopStream",
    value() {
      const self = this;
      if (null != this.videoStream) {
        const obj = {};
        obj[self.videoStream.ssrc] = 0;
        self.request(obj, []);
      }
    }
  };
  items[7] = {
    key: "request",
    value(arg0, arr) {
      const self = this;
      const GoLiveQualityManager = this;
      if (undefined !== this.userId) {
        const item = arr.forEach((arg0) => {
          if (null == arg0.pixelCounts) {
            arg0.pixelCounts = {};
          }
          if (arg0[arg0] > 0) {
            const _Math = Math;
            arg0.pixelCounts[arg0] = Math.floor(self.resolutionWidth * self.resolutionHeight * self.zoom * self.zoom);
          }
        });
        self.emit(closure_8.RequestedSSRCsUpdate, self.userId, self.audioSSRC, arr);
        self.emit(closure_8.RequestedStreamsUpdate, arg0);
      }
    }
  };
  items[8] = {
    key: "setVideoSize",
    value(arg0, arg1, zoom) {
      const self = this;
      if (this.streamId === arg0) {
        if (null != arg1) {
          ({ width: self.resolutionWidth, height: self.resolutionHeight } = arg1);
        }
        if (null != zoom) {
          self.zoom = zoom;
        }
        self.delayedUpdate();
      }
    }
  };
  items[9] = {
    key: "setStreamId",
    value(streamId) {
      const self = this;
      if (this.streamId !== streamId) {
        self.streamId = streamId;
        self.resolutionWidth = 0;
        self.resolutionHeight = 0;
        self.zoom = 1;
        self.delayedUpdate();
      }
    }
  };
  return callback(GoLiveQualityManager, items);
}(importDefault(dependencyMap[7]));
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/go_live/GoLiveQualityManager.tsx");

export default tmp2;
export const GoLiveQualityManagerEvent = obj;
