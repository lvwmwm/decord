// Module ID: 8036
// Function ID: 63788
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8036 (_isNativeReflectConstruct)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const findNodeHandle = arg1(dependencyMap[6]).findNodeHandle;
let closure_9 = Math.PI / 180;
const tmp2 = () => {
  class SVGMatrix {
    constructor(arg0) {
      self = this;
      tmp = closure_6(this, SVGMatrix);
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
  const arg1 = SVGMatrix;
  let obj = {
    key: "multiply",
    value: function multiply(arg0) {
      return new SVGMatrix(callback2(this, arg0));
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "inverse",
    value: function inverse() {
      return new SVGMatrix(callback3(this));
    }
  };
  items[1] = obj;
  obj = {
    key: "translate",
    value: function translate(arg0, f) {
      const obj = { <string:194540254>: "<string:3211265>", <string:1390895599>: "isArray", <string:3493365308>: "<string:1900046224>", <string:1578678544>: "createStyles", e: arg0, f };
      return new SVGMatrix(callback2(this, obj));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "scale",
    value: function scale(colors, dpi) {
      const obj = { "Null": "white", "Null": 23.5, "Null": 75, "Null": null, "Null": 1, "Null": 0.6, a: colors, d: colors };
      return new SVGMatrix(callback2(this, obj));
    }
  };
  items[4] = {
    key: "scaleNonUniform",
    value: function scaleNonUniform(arg0, d) {
      const obj = { "Null": "white", "Null": 23.5, "Null": 75, "Null": null, "Null": 1, "Null": 0.6, a: arg0, d };
      return new SVGMatrix(callback2(this, obj));
    }
  };
  items[5] = {
    key: "rotate",
    value: function rotate(arg0) {
      const cosResult = Math.cos(closure_9 * arg0);
      const sinResult = Math.sin(closure_9 * arg0);
      return new SVGMatrix(callback2(this, { a: cosResult, b: sinResult, c: -sinResult, d: cosResult, e: 0, f: 0 }));
    }
  };
  items[6] = {
    key: "rotateFromVector",
    value: function rotateFromVector(result2, result2) {
      const atan2Result = Math.atan2(result2, result2);
      const cosResult = Math.cos(closure_9 * atan2Result);
      const sinResult = Math.sin(closure_9 * atan2Result);
      return new SVGMatrix(callback2(this, { a: cosResult, b: sinResult, c: -sinResult, d: cosResult, e: 0, f: 0 }));
    }
  };
  items[7] = {
    key: "flipX",
    value: function flipX() {
      return new SVGMatrix(callback2(this, { "Null": "<string:3729915906>", "Null": "<string:300807811>", "Null": "<string:36311617>", "Null": "<string:1602048>", "Null": "<string:1572864>", "Null": "<string:1090584576>" }));
    }
  };
  items[8] = {
    key: "flipY",
    value: function flipY() {
      return new SVGMatrix(callback2(this, { "Null": "GREEN_NEW_1", "Null": 1, "Null": "identity_guild_id", "Null": "message", "Null": "GREEN_NEW_87", "Null": 1 }));
    }
  };
  items[9] = {
    key: "skewX",
    value: function skewX(arg0) {
      const obj = { c: Math.tan(closure_9 * arg0) };
      return new SVGMatrix(callback2(this, { c: Math.tan(closure_9 * arg0) }));
    }
  };
  items[10] = {
    key: "skewY",
    value: function skewY(arg0) {
      const obj = { b: Math.tan(closure_9 * arg0) };
      return new SVGMatrix(callback2(this, { b: Math.tan(closure_9 * arg0) }));
    }
  };
  return callback2(SVGMatrix, items);
}();
const tmp3 = () => {
  class SVGPoint {
    constructor(arg0) {
      self = this;
      tmp = closure_6(this, SVGPoint);
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
  const arg1 = SVGPoint;
  const items = [
    {
      key: "matrixTransform",
      value: function matrixTransform(arg0) {
        return new SVGPoint(callback2(arg0, this));
      }
    }
  ];
  return callback2(SVGPoint, items);
}();
const obj = {
  createSVGPoint() {
    return new tmp3();
  },
  createSVGMatrix() {
    return new tmp2();
  }
};
const tmp4 = (Component) => {
  class Shape {
    constructor(arg0) {
      self = this;
      tmp = closure_6(this, Shape);
      items = [];
      items[0] = Component;
      obj = closure_4(Shape);
      tmp2 = closure_3;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_4;
        constructResult = Reflect.construct(obj, items, closure_4(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      Shape = tmp2Result;
      tmp2Result.root = null;
      tmp2Result.refMethod = (root) => {
        tmp2Result.root = root;
      };
      tmp2Result.setNativeProps = (obj) => {
        for (const key10006 in arg0) {
          let tmp4 = key10006;
          let tmp5 = closure_0;
          let tmp6 = closure_2;
          let BrushProperties = closure_0(closure_2[7]).BrushProperties;
          if (!BrushProperties.includes(key10006)) {
            continue;
          } else {
            let tmp = closure_1;
            let tmp2 = closure_2;
            arg0[key10006] = closure_1(closure_2[8])(arg0[key10006]);
            // continue
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
        const tmp5 = callback(tmp2Result.root);
        return tmp2Result(closure_2[9]).default.getBBox(tmp5, { fill, stroke, markers, clipped });
      };
      tmp2Result.getCTM = () => {
        const tmp = callback(tmp2Result.root);
        const _default = tmp2Result(closure_2[9]).default;
        return new closure_10(tmp2Result(closure_2[9]).default.getCTM(tmp));
      };
      tmp2Result.getScreenCTM = () => {
        const tmp = callback(tmp2Result.root);
        const _default = tmp2Result(closure_2[9]).default;
        return new closure_10(tmp2Result(closure_2[9]).default.getScreenCTM(tmp));
      };
      tmp2Result.isPointInFill = (arg0) => {
        const tmp = callback(tmp2Result.root);
        return tmp2Result(closure_2[9]).default.isPointInFill(tmp, arg0);
      };
      tmp2Result.isPointInStroke = (arg0) => {
        const tmp = callback(tmp2Result.root);
        return tmp2Result(closure_2[9]).default.isPointInStroke(tmp, arg0);
      };
      tmp2Result.getTotalLength = () => {
        const tmp = callback(tmp2Result.root);
        return tmp2Result(closure_2[9]).default.getTotalLength(tmp);
      };
      tmp2Result.getPointAtLength = (length) => {
        const tmp = callback(tmp2Result.root);
        const _default = tmp2Result(closure_2[9]).default;
        const obj = { length };
        return new closure_11(tmp2Result(closure_2[9]).default.getPointAtLength(tmp, { length }));
      };
      tmp7 = closure_1(closure_2[10])(tmp2Result);
      return tmp2Result;
    }
  }
  const arg1 = Shape;
  callback(Shape, Component);
  const items = [
    {
      key: "getNativeScrollRef",
      value: function getNativeScrollRef() {
        return this.root;
      }
    }
  ];
  return callback2(Shape, items);
}(arg1(dependencyMap[5]).Component);
tmp4.prototype.ownerSVGElement = obj;

export default tmp4;
export { multiplyMatrices };
export { invert };
export const SVGMatrix = tmp2;
export const matrixTransform = _matrixTransform;
export const SVGPoint = tmp3;
export const ownerSVGElement = obj;
