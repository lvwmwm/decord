// Module ID: 12557
// Function ID: 97114
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 27, 33, 5454, 2]

// Module 12557 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "result";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = ["source", "style"];
let tmp3 = ((PureComponent) => {
  class SequencedLottieAnimationView {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_4(this, apply);
      items1 = [...items];
      obj = outer1_7(apply);
      tmp2 = outer1_6;
      if (outer1_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items1, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
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
        closure_0.animationRef = animationRef;
      };
      return tmp2Result;
    }
  }
  callback2(SequencedLottieAnimationView, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      this.playScene(this.props.nextScene);
    }
  };
  let items = [obj, , , ];
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
      items = [tmp4, style];
      obj = { source, style: items1 };
      items1 = [tmp4, style];
      const tmp = outer1_3(props, outer1_2);
      const merged = Object.assign(tmp);
      obj["ref"] = self.handleSetRef;
      obj["onAnimationFinish"] = self.handleComplete;
      obj.children = outer1_10(SequencedLottieAnimationView(outer1_1[9]), obj);
      return outer1_10(outer1_9, obj);
    }
  };
  return callback(SequencedLottieAnimationView, items);
})(require("result").PureComponent);
tmp3.defaultProps = { autoPlay: true };
let result = require("_defineProperties").fileFinishedImporting("components_native/common/SequencedLottieAnimationView.tsx");

export default tmp3;
