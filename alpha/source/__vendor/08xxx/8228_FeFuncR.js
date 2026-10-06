// Module ID: 8228
// Function ID: 8229
// Name: FeFuncR
// Dependencies: [41, 42, 93, 95, 98, 8185, 8208]

// Module 8228 (FeFuncR)
import warnOnce from "warnOnce" /* 8185 */;
import _modDef8208 from "module_8208" /* 8208 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class FeComponentTransferFunction {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, FeComponentTransferFunction);
    const items1 = [...items];
    const obj = _getPrototypeOf(FeComponentTransferFunction);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.channel = "UNKNOWN";
    return tmp3Result;
  }
}
_inherits(FeComponentTransferFunction, _modDef8208);
const entry = {
  key: "render",
  value: function render() {
    const obj = warnOnce;
    const result = obj.warnUnimplementedFilter();
    return null;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(FeComponentTransferFunction, items);
importDefaultResultResult.defaultProps = { type: "identity", tableValues: [], slope: 1, intercept: 0, amplitude: 1, exponent: 1, offset: 0 };
class FeFuncR {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, FeFuncR);
    const items1 = [...items];
    const obj = _getPrototypeOf(FeFuncR);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.channel = "R";
    return tmp3Result;
  }
}
_inherits(FeFuncR, importDefaultResultResult);
const importDefaultResultResult1 = _createClass(FeFuncR);
importDefaultResultResult1.displayName = "FeFuncR";
class FeFuncG {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, FeFuncG);
    const items1 = [...items];
    const obj = _getPrototypeOf(FeFuncG);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.channel = "G";
    return tmp3Result;
  }
}
_inherits(FeFuncG, importDefaultResultResult);
const importDefaultResultResult2 = _createClass(FeFuncG);
importDefaultResultResult2.displayName = "FeFuncG";
class FeFuncB {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, FeFuncB);
    const items1 = [...items];
    const obj = _getPrototypeOf(FeFuncB);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.channel = "B";
    return tmp3Result;
  }
}
_inherits(FeFuncB, importDefaultResultResult);
const importDefaultResultResult3 = _createClass(FeFuncB);
importDefaultResultResult3.displayName = "FeFuncB";
class FeFuncA {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, FeFuncA);
    const items1 = [...items];
    const obj = _getPrototypeOf(FeFuncA);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.channel = "A";
    return tmp3Result;
  }
}
_inherits(FeFuncA, importDefaultResultResult);
const importDefaultResultResult4 = _createClass(FeFuncA);
importDefaultResultResult4.displayName = "FeFuncA";
const FeFuncR_export = importDefaultResultResult1;
const FeFuncG_export = importDefaultResultResult2;
const FeFuncB_export = importDefaultResultResult3;
const FeFuncA_export = importDefaultResultResult4;

export default importDefaultResultResult;
export { FeFuncR_export as FeFuncR };
export { FeFuncG_export as FeFuncG };
export { FeFuncB_export as FeFuncB };
export { FeFuncA_export as FeFuncA };
