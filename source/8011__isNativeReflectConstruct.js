// Module ID: 8011
// Function ID: 63578
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8011 (_isNativeReflectConstruct)
let Platform;
let StyleSheet;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
importAll(dependencyMap[7]);
({ findNodeHandle: closure_11, Platform, StyleSheet } = arg1(dependencyMap[8]));
const jsx = arg1(dependencyMap[9]).jsx;
const svg = StyleSheet.create({ svg: {} }).svg;
const tmp4 = (arg0) => {
  class Svg {
    constructor() {
      self = this;
      tmp = closure_6(this, Svg);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_9(Svg);
      tmp3 = closure_8;
      if (closure_15()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_9;
        constructResult = Reflect.construct(obj, combined, closure_9(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      Svg = tmp3Result;
      tmp3Result.measureInWindow = (arg0) => {
        const root = tmp3Result.root;
        if (root) {
          root.measureInWindow(arg0);
        }
      };
      tmp3Result.measure = (arg0) => {
        const root = tmp3Result.root;
        if (root) {
          root.measure(arg0);
        }
      };
      tmp3Result.measureLayout = (arg0, arg1, arg2) => {
        const root = tmp3Result.root;
        if (root) {
          root.measureLayout(arg0, arg1, arg2);
        }
      };
      tmp3Result.setNativeProps = (arg0) => {
        const root = tmp3Result.root;
        if (root) {
          root.setNativeProps(arg0);
        }
      };
      tmp3Result.toDataURL = (arg0, arg1) => {
        if (arg0) {
          const tmp3 = callback(tmp3Result.root);
          tmp3Result(closure_2[10]).default.toDataURL(tmp3, arg1, arg0);
          const _default = tmp3Result(closure_2[10]).default;
        }
      };
      return tmp3Result;
    }
  }
  const arg1 = Svg;
  callback2(Svg, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        let children;
        let fill;
        let fillOpacity;
        let fillRule;
        let focusable;
        let font;
        let height;
        let onLayout;
        let opacity;
        let position;
        let preserveAspectRatio;
        let stroke;
        let strokeDasharray;
        let strokeDashoffset;
        let strokeLinecap;
        let strokeLinejoin;
        let strokeMiterlimit;
        let strokeOpacity;
        let strokeWidth;
        let style;
        let transform;
        let viewBox;
        let width;
        const Svg = this;
        const props = this.props;
        ({ style, opacity } = props);
        ({ viewBox, children, onLayout, preserveAspectRatio } = props);
        const tmp = callback3(props, closure_3);
        let applyResult = style;
        if (Array.isArray(style)) {
          const _Object = Object;
          const _Object2 = Object;
          const items = [{}];
          applyResult = assign.apply(Object, items.concat(callback2(style)));
        }
        const merged = Object.assign({}, applyResult, tmp);
        ({ width, height, focusable } = merged);
        let tmp5 = undefined === width;
        ({ transform, font, fill, fillOpacity, fillRule, stroke, strokeWidth, strokeOpacity, strokeDasharray, strokeDashoffset, strokeLinecap, strokeLinejoin, strokeMiterlimit, position } = merged);
        if (tmp5) {
          tmp5 = undefined === height;
        }
        if (tmp5) {
          tmp5 = "absolute" !== position;
        }
        if (tmp5) {
          width = "100%";
          height = "100%";
        }
        let BooleanResult = Boolean(focusable);
        if (BooleanResult) {
          BooleanResult = "false" !== focusable;
        }
        tmp.focusable = BooleanResult;
        let items1 = [closure_14];
        if (style) {
          items1.push(style);
        }
        let obj = {};
        if (null != opacity) {
          let _NaN = callback(closure_2[11])(opacity);
        } else {
          _NaN = NaN;
        }
        let flag = false;
        if (!isNaN(_NaN)) {
          obj.opacity = _NaN;
          flag = true;
        }
        let flag2 = flag;
        if (width) {
          flag2 = flag;
          if (height) {
            const _parseInt = parseInt;
            let parsed = parseInt(width, 10);
            const _parseInt2 = parseInt;
            let parsed1 = parseInt(height, 10);
            const _isNaN = isNaN;
            let isNaNResult = isNaN(parsed);
            if (!isNaNResult) {
              isNaNResult = "%" === width[width.length - 1];
            }
            const _isNaN2 = isNaN;
            let isNaNResult1 = isNaN(parsed1);
            if (!isNaNResult1) {
              isNaNResult1 = "%" === height[height.length - 1];
            }
            if (isNaNResult) {
              parsed = width;
            }
            obj.width = parsed;
            if (isNaNResult1) {
              parsed1 = height;
            }
            obj.height = parsed1;
            obj.flex = 0;
            flag2 = true;
          }
        }
        if (flag2) {
          items1.push(obj);
        }
        if (items1.length <= 1) {
          items1 = closure_14;
        }
        tmp.style = items1;
        if (null != width) {
          tmp.bbWidth = width;
        }
        if (null != height) {
          tmp.bbHeight = height;
        }
        callback(closure_2[12])(tmp, tmp, this);
        const merged1 = Object.assign({}, closure_12.flatten(style));
        if (transform) {
          if (merged1.transform) {
            tmp.transform = merged1.transform;
            merged1.transform = undefined;
          }
          tmp.transform = Svg(closure_2[13]).extractTransformSvgView(tmp);
          const obj2 = Svg(closure_2[13]);
        }
        obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        obj = {};
        const tmp19 = callback(closure_2[14]);
        obj.children = callback6(callback(closure_2[16]), { children, style: merged1, font, fill, fillOpacity, fillRule, stroke, strokeWidth, strokeOpacity, strokeDasharray, strokeDashoffset, strokeLinecap, strokeLinejoin, strokeMiterlimit, onLayout });
        return callback6(tmp19, Object.assign({}, tmp, obj, callback(closure_2[15])({ viewBox, preserveAspectRatio }), obj));
      }
    }
  ];
  return callback(Svg, items);
}(importDefault(dependencyMap[17]));
tmp4.displayName = "Svg";
tmp4.defaultProps = { preserveAspectRatio: "xMidYMid meet" };

export default tmp4;
