// Module ID: 12758
// Function ID: 99450
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 566, 686, 2]

// Module 12758 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
const AUTO = require("ME").VideoQualityMode.AUTO;
let tmp2 = ((Store) => {
  class VideoQualityModeStore {
    constructor() {
      self = this;
      tmp = VideoQualityModeStore(this, VideoQualityModeStore);
      obj = outer1_3(VideoQualityModeStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(VideoQualityModeStore, Store);
  const items = [
    {
      key: "mode",
      get() {
        return outer1_5;
      }
    }
  ];
  return callback(VideoQualityModeStore, items);
})(require("initialize").Store);
tmp2.displayName = "VideoQualityModeStore";
tmp2 = new tmp2(require("dispatcher"), {
  SET_CHANNEL_VIDEO_QUALITY_MODE: function handleSetChannelVideoQualityMode(mode) {
    mode = mode.mode;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/VideoQualityModeStore.tsx");

export default tmp2;
