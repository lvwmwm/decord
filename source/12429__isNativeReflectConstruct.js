// Module ID: 12429
// Function ID: 94885
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12429 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = [false, false];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const View = arg1(dependencyMap[7]).View;
const jsx = arg1(dependencyMap[8]).jsx;
const tmp3 = (PureComponent) => {
  class SequencedLottieAnimationView {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, SequencedLottieAnimationView);
      items1 = [...items];
      obj = closure_7(SequencedLottieAnimationView);
      tmp2 = closure_6;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      SequencedLottieAnimationView = tmp2Result;
      tmp2Result.animationRef = null;
      tmp2Result.currentScene = tmp2Result.props.nextScene;
      tmp2Result.isUnmounted = false;
      tmp2Result.handleComplete = () => {
        const onSceneComplete = tmp2Result.props.onSceneComplete;
        if (null != onSceneComplete) {
          onSceneComplete(tmp2Result.currentScene);
        }
      };
      tmp2Result.handleSetRef = (animationRef) => {
        tmp2Result.animationRef = animationRef;
      };
      return tmp2Result;
    }
  }
  const importDefault = SequencedLottieAnimationView;
  callback2(SequencedLottieAnimationView, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      this.playScene(this.props.nextScene);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "componentDidUpdate",
    value() {
      const self = this;
      const nextScene = this.props.nextScene;
      if (nextScene !== this.currentScene) {
        self.playScene(nextScene);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "playScene",
    value(currentScene) {
      const self = this;
      const sceneSegments = this.props.sceneSegments;
      let tmp3 = null == this.animationRef;
      if (!tmp3) {
        tmp3 = currentScene !== self.currentScene && tmp.BEG === tmp2.BEG && tmp.END === tmp2.END;
        const tmp4 = currentScene !== self.currentScene && tmp.BEG === tmp2.BEG && tmp.END === tmp2.END;
      }
      if (!tmp3) {
        const animationRef = self.animationRef;
        animationRef.play(tmp.BEG, tmp.END);
      }
      self.currentScene = currentScene;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      let source;
      let style;
      const self = this;
      const props = this.props;
      ({ source, style } = props);
      let json;
      if ("object" === typeof source) {
        if (!source.uri) {
          const _JSON = JSON;
          json = JSON.stringify(source);
        }
      }
      let tmp4;
      if (undefined !== json) {
        let obj = { aspectRatio: source.w / source.h };
        tmp4 = obj;
      }
      obj = { style: items };
      const items = [tmp4, style];
      obj = { source, style: items1 };
      const items1 = [tmp4, style];
      const tmp = callback(props, closure_2);
      const merged = Object.assign(tmp);
      obj["ref"] = self.handleSetRef;
      obj["onAnimationFinish"] = self.handleComplete;
      obj.children = callback4(SequencedLottieAnimationView(closure_1[9]), obj);
      return callback4(closure_9, obj);
    }
  };
  return callback(SequencedLottieAnimationView, items);
}(importAll(dependencyMap[6]).PureComponent);
tmp3.defaultProps = { autoPlay: true };
const importAllResult = importAll(dependencyMap[6]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("components_native/common/SequencedLottieAnimationView.tsx");

export default tmp3;
