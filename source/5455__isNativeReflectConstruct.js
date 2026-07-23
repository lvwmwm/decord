// Module ID: 5455
// Function ID: 46620
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 27, 33, 5456, 5457]

// Module 5455 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { processColor } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = ["style", "source", "autoPlay", "duration", "textFiltersAndroid", "textFiltersIOS", "resizeMode"];
let obj = { source: undefined, progress: 0, speed: 1, loop: true, autoPlay: false, enableMergePathsAndroidForKitKatAndAbove: false, enableSafeModeAndroid: false, cacheComposition: true, useNativeLooping: false, resizeMode: "contain", colorFilters: [], textFiltersAndroid: [], textFiltersIOS: [] };
const tmp3 = ((PureComponent) => {
  class LottieView {
    constructor(arg0) {
      self = this;
      tmp = outer1_5(this, apply);
      items = [];
      items[0] = PureComponent;
      obj = outer1_8(apply);
      tmp2 = outer1_7;
      if (outer1_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_8;
        constructResult = Reflect.construct(obj, items, outer1_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.onAnimationFinish = (nativeEvent) => {
        if (null != tmp2Result.props.onAnimationFinish) {
          const props = tmp2Result.props;
          props.onAnimationFinish(nativeEvent.nativeEvent.isCancelled);
        }
      };
      tmp2Result.onAnimationFailure = (nativeEvent) => {
        if (null != tmp2Result.props.onAnimationFailure) {
          const props = tmp2Result.props;
          props.onAnimationFailure(nativeEvent.nativeEvent.error);
        }
      };
      tmp2Result.onAnimationLoaded = () => {
        if (null != tmp2Result.props.onAnimationLoaded) {
          const props = tmp2Result.props;
          props.onAnimationLoaded();
        }
      };
      play = tmp2Result.play;
      tmp2Result.play = play.bind(tmp2Result);
      reset = tmp2Result.reset;
      tmp2Result.reset = reset.bind(tmp2Result);
      pause = tmp2Result.pause;
      tmp2Result.pause = pause.bind(tmp2Result);
      resume = tmp2Result.resume;
      tmp2Result.resume = resume.bind(tmp2Result);
      onAnimationFinish = tmp2Result.onAnimationFinish;
      tmp2Result.onAnimationFinish = onAnimationFinish.bind(tmp2Result);
      captureRef = tmp2Result.captureRef;
      tmp2Result.captureRef = captureRef.bind(tmp2Result);
      return tmp2Result;
    }
  }
  callback2(LottieView, PureComponent);
  let obj = {
    key: "play",
    value: function play(arg0, arg1) {
      const Commands = LottieView(outer1_2[9]).Commands;
      let num = -1;
      let num2 = -1;
      if (null != arg0) {
        num2 = arg0;
      }
      if (null != arg1) {
        num = arg1;
      }
      Commands.play(this.lottieAnimationViewRef, num2, num);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "reset",
    value: function reset() {
      const Commands = LottieView(outer1_2[9]).Commands;
      Commands.reset(this.lottieAnimationViewRef);
    }
  };
  items[1] = obj;
  obj = {
    key: "pause",
    value: function pause() {
      const Commands = LottieView(outer1_2[9]).Commands;
      Commands.pause(this.lottieAnimationViewRef);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "resume",
    value: function resume() {
      const Commands = LottieView(outer1_2[9]).Commands;
      Commands.resume(this.lottieAnimationViewRef);
    }
  };
  items[4] = {
    key: "captureRef",
    value: function captureRef(lottieAnimationViewRef) {
      const self = this;
      if (null !== lottieAnimationViewRef) {
        self.lottieAnimationViewRef = lottieAnimationViewRef;
        if (true === self.props.autoPlay) {
          self.play();
        }
      }
    }
  };
  items[5] = {
    key: "render",
    value: function render() {
      let autoPlay;
      let duration;
      let resizeMode;
      let source;
      let style;
      let textFiltersAndroid;
      let textFiltersIOS;
      const self = this;
      const props = this.props;
      ({ source, duration } = props);
      ({ style, autoPlay, textFiltersAndroid, textFiltersIOS, resizeMode } = props);
      const tmp = outer1_4(props, outer1_3);
      if (null == source) {
        const _console = console;
        console.warn("LottieView needs `source` parameter, provided value for source:", source);
        return null;
      } else {
        const parsePossibleSourcesResult = LottieView(outer1_2[10]).parsePossibleSources(source);
        if (duration) {
          if (parsePossibleSourcesResult.sourceJson) {
            if (source.fr) {
              const _Math = Math;
              let speed = Math.round(source.op / source.fr * 1000 / duration);
            }
            const colorFilters = self.props.colorFilters;
            let mapped;
            if (null != colorFilters) {
              mapped = colorFilters.map((color) => Object.assign({}, color, { color: outer2_10(color.color) }));
            }
            const _Object = Object;
            let obj = { ref: self.captureRef };
            obj = { colorFilters: mapped, textFiltersAndroid, textFiltersIOS, speed, style };
            ({ onAnimationFinish: obj2.onAnimationFinish, onAnimationFailure: obj2.onAnimationFailure, onAnimationLoaded: obj2.onAnimationLoaded } = self);
            obj.autoPlay = autoPlay;
            obj.resizeMode = resizeMode;
            const _Object2 = Object;
            return outer1_11(outer1_1(outer1_2[9]), Object.assign(obj, tmp, obj, parsePossibleSourcesResult));
          }
        }
        speed = self.props.speed;
        const obj3 = LottieView(outer1_2[10]);
      }
    }
  };
  return callback(LottieView, items);
})(require("result").PureComponent);
tmp3.defaultProps = obj;

export const LottieView = tmp3;
