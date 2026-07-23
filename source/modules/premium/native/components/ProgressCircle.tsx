// Module ID: 11625
// Function ID: 90258
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 33, 4130, 8018, 3842, 689, 2]

// Module 11625 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import closure_4 from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_10;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles({ progressCircle: { alignItems: "center", justifyContent: "center" }, circle: { position: "absolute", width: "100%", height: "100%" }, circleOverlay: { position: "relative", display: "flex", justifyContent: "center", alignItems: "center" } });
let tmp4 = ((Component) => {
  class ProgressCircle {
    constructor() {
      self = this;
      tmp = outer1_3(this, ProgressCircle);
      obj = outer1_6(ProgressCircle);
      tmp2 = outer1_5;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ProgressCircle, Component);
  let obj = {
    key: "renderCircle",
    value() {
      let size;
      let strokeWidth;
      const props = this.props;
      ({ size, strokeWidth } = props);
      const result = (size - strokeWidth) / 2;
      const result1 = result * Math.PI * 2;
      const bound = Math.min(Math.max(props.percent, 0), 100);
      let obj = {};
      const tmp = outer1_11(this.context);
      obj.viewBox = "0 0 " + size + " " + size;
      obj.style = tmp.circle;
      obj = { fill: "none", cx: size / 2, cy: size / 2, r: result, strokeWidth, strokeLinecap: "round", transform: "rotate(-90 " + size / 2 + " " + size / 2 + ")", stroke: props.color };
      obj = { strokeDasharray: result1, strokeDashoffset: (1 - bound / 100) * result1 };
      obj.style = obj;
      obj.children = outer1_9(ProgressCircle(outer1_2[9]).Circle, obj);
      return outer1_9(outer1_1(outer1_2[9]), obj);
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value() {
      const tmp = outer1_11(this.context);
      const props = this.props;
      const children = props.children;
      let obj = { style: items };
      items = [tmp.progressCircle, props.style];
      const items1 = [this.renderCircle(), ];
      let tmp4 = null;
      if (null != children) {
        obj = { style: tmp.circleOverlay, children };
        tmp4 = outer1_9(outer1_8, obj);
      }
      items1[1] = tmp4;
      obj.children = items1;
      return outer1_10(outer1_8, obj);
    }
  };
  items[1] = obj;
  return callback(ProgressCircle, items);
})(require("result").Component);
tmp4.contextType = require("ManaContext").ThemeContext;
_createForOfIteratorHelperLoose = { size: 20, strokeWidth: 0.9, color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GUILD_BOOSTING_PINK };
tmp4.defaultProps = _createForOfIteratorHelperLoose;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/premium/native/components/ProgressCircle.tsx");

export default tmp4;
