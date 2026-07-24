// Module ID: 5453
// Function ID: 46612
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 27, 33, 5454, 2]

// Module 5453 (_isNativeReflectConstruct)
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
let closure_2 = ["source", "style", "collapsable"];
const tmp3 = ((PureComponent) => {
  class LottieAnimationView {
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
      tmp2Result.animation = null;
      tmp2Result.setRef = (animation) => {
        closure_0.animation = animation;
      };
      return tmp2Result;
    }
  }
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
  let items = [obj, , , , ];
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
      items = [tmp4, style];
      obj = { ref: this.setRef, source, style: items1 };
      items1 = [tmp4, style];
      const tmp = outer1_3(props, outer1_2);
      const merged = Object.assign(tmp);
      obj.children = outer1_10(LottieAnimationView(outer1_1[9]), obj);
      return outer1_10(outer1_9, obj);
    }
  };
  return callback(LottieAnimationView, items);
})(require("result").PureComponent);
tmp3.defaultProps = { autoPlay: true, loop: true, collapsable: false };
let result = require("_defineProperties").fileFinishedImporting("components_native/common/LottieAnimationView.tsx");

export default tmp3;
