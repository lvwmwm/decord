// Module ID: 8087
// Function ID: 64056
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 31, 27, 8088, 8081, 8089, 8090]

// Module 8087 (_isNativeReflectConstruct)
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import getActivityIndicator from "get ActivityIndicator";
import module_8088 from "module_8088";
import { findNodeHandle } from "get ActivityIndicator";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function multiplyMatrices(arg0) {
  let a;
  let a2;
  let b;
  let b2;
  let c;
  let c2;
  let d;
  let d2;
  let e;
  let f;
  ({ a, b, c, d } = arg0);
  ({ a: a2, b: b2, c: c2, d: d2, e, f } = arg1);
  return { a: a * a2 + c * b2, c: a * c2 + c * d2, e: a * e + c * f + arg0.e, b: b * a2 + d * b2, d: b * c2 + d * d2, f: b * e + d * f + arg0.f };
}
function invert(permissions) {
  let a;
  let b;
  let c;
  let d;
  let e;
  let f;
  ({ a, b, c, d, e, f } = permissions);
  const diff = a * d - b * c;
  return { a: d / diff, b: -b / diff, c: -c / diff, d: a / diff, e: (c * f - d * e) / diff, f: -a * f - b * e / diff };
}
function _matrixTransform(arg0) {
  let x;
  let y;
  ({ x, y } = arg1);
  return { x: arg0.a * x + arg0.c * y + arg0.e, y: arg0.b * x + arg0.d * y + arg0.f };
}
let closure_9 = Math.PI / 180;
let tmp2 = (() => {
  class SVGMatrix {
    constructor(arg0) {
      self = this;
      tmp = outer1_6(this, SVGMatrix);
      if (arg0) {
        ({ a: self.a, b: self.b, c: self.c, d: self.d, e: self.e, f: self.f } = arg0);
      } else {
        num = 1;
        self.a = 1;
        num2 = 0;
        self.b = 0;
        self.c = 0;
        self.d = 1;
        self.e = 0;
        self.f = 0;
      }
      return;
    }
  }
  let obj = {
    key: "multiply",
    value: function multiply(arg0) {
      return new SVGMatrix(outer1_13(this, arg0));
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "inverse",
    value: function inverse() {
      return new SVGMatrix(outer1_14(this));
    }
  };
  items[1] = obj;
  obj = {
    key: "translate",
    value: function translate(arg0, f) {
      const obj = { a: 1, b: 0, c: 0, d: 1, e: arg0, f };
      return new SVGMatrix(outer1_13(this, obj));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "scale",
    value: function scale(closure_0, closure_02) {
      const obj = { a: closure_0, b: 0, c: 0, d: closure_0, e: 0, f: 0 };
      return new SVGMatrix(outer1_13(this, obj));
    }
  };
  items[4] = {
    key: "scaleNonUniform",
    value: function scaleNonUniform(arg0, d) {
      const obj = { a: arg0, b: 0, c: 0, d, e: 0, f: 0 };
      return new SVGMatrix(outer1_13(this, obj));
    }
  };
  items[5] = {
    key: "rotate",
    value: function rotate(arg0) {
      const cosResult = Math.cos(outer1_9 * arg0);
      const sinResult = Math.sin(outer1_9 * arg0);
      return new SVGMatrix(outer1_13(this, { a: cosResult, b: sinResult, c: -sinResult, d: cosResult, e: 0, f: 0 }));
    }
  };
  items[6] = {
    key: "rotateFromVector",
    value: function rotateFromVector(result2, result2) {
      const atan2Result = Math.atan2(result2, result2);
      const cosResult = Math.cos(outer1_9 * atan2Result);
      const sinResult = Math.sin(outer1_9 * atan2Result);
      return new SVGMatrix(outer1_13(this, { a: cosResult, b: sinResult, c: -sinResult, d: cosResult, e: 0, f: 0 }));
    }
  };
  items[7] = {
    key: "flipX",
    value: function flipX() {
      return new SVGMatrix(outer1_13(this, { a: -1, b: 0, c: 0, d: 1, e: 0, f: 0 }));
    }
  };
  items[8] = {
    key: "flipY",
    value: function flipY() {
      return new SVGMatrix(outer1_13(this, { a: 1, b: 0, c: 0, d: -1, e: 0, f: 0 }));
    }
  };
  items[9] = {
    key: "skewX",
    value: function skewX(arg0) {
      const obj = { a: 1, b: 0, c: Math.tan(outer1_9 * arg0), d: 1, e: 0, f: 0 };
      return new SVGMatrix(outer1_13(this, obj));
    }
  };
  items[10] = {
    key: "skewY",
    value: function skewY(arg0) {
      const obj = { a: 1, b: Math.tan(outer1_9 * arg0), c: 0, d: 1, e: 0, f: 0 };
      return new SVGMatrix(outer1_13(this, obj));
    }
  };
  return callback2(SVGMatrix, items);
})();
let closure_10 = tmp2;
const tmp3 = (() => {
  class SVGPoint {
    constructor(arg0) {
      self = this;
      tmp = outer1_6(this, SVGPoint);
      if (arg0) {
        ({ x: self.x, y: self.y } = arg0);
      } else {
        num = 0;
        self.x = 0;
        self.y = 0;
      }
      return;
    }
  }
  const items = [
    {
      key: "matrixTransform",
      value: function matrixTransform(arg0) {
        return new SVGPoint(outer1_15(arg0, this));
      }
    }
  ];
  return callback2(SVGPoint, items);
})();
let closure_11 = tmp3;
let obj = {
  createSVGPoint() {
    return new closure_11();
  },
  createSVGMatrix() {
    return new closure_10();
  }
};
let tmp4 = ((Component) => {
  class Shape {
    constructor(arg0) {
      self = this;
      tmp = outer1_6(this, apply);
      items = [];
      items[0] = Component;
      obj = outer1_4(apply);
      tmp2 = outer1_3;
      if (outer1_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_4;
        constructResult = Reflect.construct(obj, items, outer1_4(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.root = null;
      tmp2Result.refMethod = (root) => {
        closure_0.root = root;
      };
      tmp2Result.setNativeProps = (obj) => {
        for (const key10006 in arg0) {
          let tmp4 = key10006;
          let tmp5 = Shape;
          let tmp6 = outer2_2;
          let BrushProperties = Shape(outer2_2[7]).BrushProperties;
          if (!BrushProperties.includes(key10006)) {
            continue;
          } else {
            let tmp = outer2_1;
            let tmp2 = outer2_2;
            arg0[key10006] = outer2_1(outer2_2[8])(arg0[key10006]);
            continue;
          }
          continue;
        }
        const root = tmp2Result.root;
        if (null != root) {
          root.setNativeProps(obj);
        }
      };
      tmp2Result.getBBox = (arg0) => {
        let obj = arg0;
        if (!arg0) {
          obj = {};
        }
        let fill = obj.fill;
        fill = undefined === fill || fill;
        let stroke = obj.stroke;
        stroke = undefined === stroke || stroke;
        let markers = obj.markers;
        markers = undefined === markers || markers;
        let clipped = obj.clipped;
        clipped = undefined === clipped || clipped;
        const tmp5 = outer2_8(tmp2Result.root);
        return Shape(outer2_2[9]).default.getBBox(tmp5, { fill, stroke, markers, clipped });
      };
      tmp2Result.getCTM = () => {
        const tmp = outer2_8(tmp2Result.root);
        const _default = Shape(outer2_2[9]).default;
        return new outer2_10(Shape(outer2_2[9]).default.getCTM(tmp));
      };
      tmp2Result.getScreenCTM = () => {
        const tmp = outer2_8(tmp2Result.root);
        const _default = Shape(outer2_2[9]).default;
        return new outer2_10(Shape(outer2_2[9]).default.getScreenCTM(tmp));
      };
      tmp2Result.isPointInFill = (arg0) => {
        const tmp = outer2_8(tmp2Result.root);
        return Shape(outer2_2[9]).default.isPointInFill(tmp, arg0);
      };
      tmp2Result.isPointInStroke = (arg0) => {
        const tmp = outer2_8(tmp2Result.root);
        return Shape(outer2_2[9]).default.isPointInStroke(tmp, arg0);
      };
      tmp2Result.getTotalLength = () => {
        const tmp = outer2_8(tmp2Result.root);
        return Shape(outer2_2[9]).default.getTotalLength(tmp);
      };
      tmp2Result.getPointAtLength = (length) => {
        const tmp = outer2_8(tmp2Result.root);
        const _default = Shape(outer2_2[9]).default;
        const obj = { length };
        return new outer2_11(Shape(outer2_2[9]).default.getPointAtLength(tmp, { length }));
      };
      tmp7 = outer1_1(outer1_2[10])(tmp2Result);
      return tmp2Result;
    }
  }
  callback(Shape, Component);
  let items = [
    {
      key: "getNativeScrollRef",
      value: function getNativeScrollRef() {
        return this.root;
      }
    }
  ];
  return callback2(Shape, items);
})(require("result").Component);
tmp4.prototype.ownerSVGElement = obj;

export default tmp4;
export { multiplyMatrices };
export { invert };
export const SVGMatrix = tmp2;
export const matrixTransform = _matrixTransform;
export const SVGPoint = tmp3;
export const ownerSVGElement = obj;
