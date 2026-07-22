// Module ID: 5452
// Function ID: 46601
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5452 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = ["overlayEnabled", "shadowEnabled", "gestureEnabled", "gestureDirection", "pageOverflowEnabled", "headerDarkContent", "defaultView"];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const processColor = arg1(dependencyMap[7]).processColor;
const jsx = arg1(dependencyMap[8]).jsx;
const tmp3 = (PureComponent) => {
  class LottieView {
    constructor(arg0) {
      self = this;
      tmp = closure_5(this, LottieView);
      items = [];
      items[0] = PureComponent;
      obj = closure_8(LottieView);
      tmp2 = closure_7;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, items, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      LottieView = tmp2Result;
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
  const arg1 = LottieView;
  callback2(LottieView, PureComponent);
  let obj = {
    key: "play",
    value: function play(arg0, arg1) {
      const Commands = LottieView(closure_2[9]).Commands;
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
  const items = [obj, , , , , ];
  obj = {
    key: "reset",
    value: function reset() {
      const Commands = LottieView(closure_2[9]).Commands;
      Commands.reset(this.lottieAnimationViewRef);
    }
  };
  items[1] = obj;
  obj = {
    key: "pause",
    value: function pause() {
      const Commands = LottieView(closure_2[9]).Commands;
      Commands.pause(this.lottieAnimationViewRef);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "resume",
    value: function resume() {
      const Commands = LottieView(closure_2[9]).Commands;
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
      const tmp = callback2(props, closure_3);
      if (null == source) {
        const _console = console;
        console.warn("LottieView needs `source` parameter, provided value for source:", source);
        return null;
      } else {
        const parsePossibleSourcesResult = LottieView(closure_2[10]).parsePossibleSources(source);
        if (duration) {
          if (parsePossibleSourcesResult.sourceJson) {
            if (source.fr) {
              const _Math = Math;
              let speed = Math.round(source.op / source.fr * 1000 / duration);
            }
            const colorFilters = self.props.colorFilters;
            let mapped;
            if (null != colorFilters) {
              mapped = colorFilters.map((color) => Object.assign({}, color, { color: callback(color.color) }));
            }
            const _Object = Object;
            let obj = { ref: self.captureRef };
            obj = { colorFilters: mapped, textFiltersAndroid, textFiltersIOS, speed, style };
            ({ onAnimationFinish: obj2.onAnimationFinish, onAnimationFailure: obj2.onAnimationFailure, onAnimationLoaded: obj2.onAnimationLoaded } = self);
            obj.autoPlay = autoPlay;
            obj.resizeMode = resizeMode;
            const _Object2 = Object;
            return callback5(callback(closure_2[9]), Object.assign(obj, tmp, obj, parsePossibleSourcesResult));
          }
        }
        speed = self.props.speed;
        const obj3 = LottieView(closure_2[10]);
      }
    }
  };
  return callback(LottieView, items);
}(importDefault(dependencyMap[6]).PureComponent);
tmp3.defaultProps = { source: undefined, colorFilters: [], textFiltersAndroid: [], textFiltersIOS: [] };

export const LottieView = tmp3;
