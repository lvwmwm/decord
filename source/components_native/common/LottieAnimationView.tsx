// Module ID: 5450
// Function ID: 46588
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5450 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = ["<string:3722352031>", "<string:3964565204>", "<string:3008336156>"];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const View = arg1(dependencyMap[7]).View;
const jsx = arg1(dependencyMap[8]).jsx;
const tmp3 = (PureComponent) => {
  class LottieAnimationView {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, LottieAnimationView);
      items1 = [...items];
      obj = closure_7(LottieAnimationView);
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
      LottieAnimationView = tmp2Result;
      tmp2Result.animation = null;
      tmp2Result.setRef = (animation) => {
        tmp2Result.animation = animation;
      };
      return tmp2Result;
    }
  }
  const importDefault = LottieAnimationView;
  callback2(LottieAnimationView, PureComponent);
  let obj = {
    key: "play",
    value() {
      if (null != this.animation) {
        const animation = this.animation;
        animation.play();
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "reset",
    value() {
      if (null != this.animation) {
        const animation = this.animation;
        animation.reset();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "pause",
    value() {
      if (null != this.animation) {
        const animation = this.animation;
        animation.pause();
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "resume",
    value() {
      if (null != this.animation) {
        const animation = this.animation;
        animation.resume();
      }
    }
  };
  items[4] = {
    key: "render",
    value() {
      let source;
      let style;
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
      obj = { style: items, collapsable: props.collapsable };
      const items = [tmp4, style];
      obj = { ref: this.setRef, source, style: items1 };
      const items1 = [tmp4, style];
      const tmp = callback(props, closure_2);
      const merged = Object.assign(tmp);
      obj.children = callback4(LottieAnimationView(closure_1[9]), obj);
      return callback4(closure_9, obj);
    }
  };
  return callback(LottieAnimationView, items);
}(importAll(dependencyMap[6]).PureComponent);
tmp3.defaultProps = {};
const importAllResult = importAll(dependencyMap[6]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("components_native/common/LottieAnimationView.tsx");

export default tmp3;
