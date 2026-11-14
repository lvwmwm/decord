// Module ID: 1942
// Function ID: 1943
// Name: Pinwheel
// Dependencies: [32, 41, 42, 93, 95, 98, 1938, 1875]

// Module 1942 (Pinwheel)
import _mod1875 from "module_1875" /* 1875 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
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
let closure_7 = { code: "(function pnpm_PinwheelTs1(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{scale:1},{rotate:'0rad'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{scale:0},{rotate:'5rad'}],initialValues)},callback:callback};})" };
class PinwheelIn {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, PinwheelIn);
    let items1 = [...items];
    let obj = _getPrototypeOf(PinwheelIn);
    let tmp3 = _possibleConstructorReturn;
    const tmp2 = _getPrototypeOf;
    if (_isNativeReflectConstruct()) {
      const tmp5 = globalThis;
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      let callbackV;
      let initialValues;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp16;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let tmp3 = closure_2_2(animationAndConfig, 2);
      [tmp4, tmp5] = tmp3;
      let items = [closure_2_7, delayFunction, closure_0.getDelay(), tmp4, closure_0.targetValues, tmp5, , , , , ];
      ({ callbackV, initialValues } = closure_0);
      items[6] = PinwheelIn(closure_2_1[6]).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = PinwheelIn(closure_2_1[6]).pickTransformValues;
      items[10] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
      function pnpm_PinwheelTs1() {
        let items;
        let items1;
        let obj2;
        let obj3;
        let num;
        const tmp3 = c2;
        if (c3 != null) {
          num = tmp4.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { opacity: _undefined(c1, tmp3(num, c4)), transform: _undefined(items, c3, c6, _undefined, c1) };
        items = [{ scale: 1 }, { rotate: "0rad" }];
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj3 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ scale: 0 }, { rotate: "5rad" }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_PinwheelTs1.__closure = items1;
      pnpm_PinwheelTs1.__workletHash = 13598073066740;
      pnpm_PinwheelTs1.__initData = tmp6;
      return pnpm_PinwheelTs1;
    };
    return tmp3Result;
  }
}
_inherits(PinwheelIn, _mod1875.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = PinwheelIn();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(PinwheelIn, null, items);
importDefaultResultResult.presetName = "PinwheelIn";
let closure_8 = { code: "(function pnpm_PinwheelTs2(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{scale:0},{rotate:'5rad'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{scale:1},{rotate:'0rad'}],initialValues)},callback:callback};})" };
class PinwheelOut {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, PinwheelOut);
    let items1 = [...items];
    let obj = _getPrototypeOf(PinwheelOut);
    let tmp3 = _possibleConstructorReturn;
    const tmp2 = _getPrototypeOf;
    if (_isNativeReflectConstruct()) {
      const tmp5 = globalThis;
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      let callbackV;
      let initialValues;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp16;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let tmp3 = closure_2_2(animationAndConfig, 2);
      [tmp4, tmp5] = tmp3;
      let items = [closure_2_8, delayFunction, closure_0.getDelay(), tmp4, closure_0.targetValues, tmp5, , , , , ];
      ({ callbackV, initialValues } = closure_0);
      items[6] = PinwheelOut(closure_2_1[6]).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = PinwheelOut(closure_2_1[6]).pickTransformValues;
      items[10] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
      function pnpm_PinwheelTs2() {
        let items;
        let items1;
        let obj2;
        let obj3;
        let num;
        const tmp3 = c2;
        if (c3 != null) {
          num = tmp4.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { opacity: _undefined(c1, tmp3(num, c4)), transform: _undefined(items, c3, c6, _undefined, c1) };
        items = [{ scale: 0 }, { rotate: "5rad" }];
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        obj3 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ scale: 1 }, { rotate: "0rad" }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_PinwheelTs2.__closure = items1;
      pnpm_PinwheelTs2.__workletHash = 5922905214967;
      pnpm_PinwheelTs2.__initData = tmp6;
      return pnpm_PinwheelTs2;
    };
    return tmp3Result;
  }
}
_inherits(PinwheelOut, _mod1875.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = PinwheelOut();
    return tmp;
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(PinwheelOut, null, items1);
importDefaultResultResult1.presetName = "PinwheelOut";
const PinwheelIn_export = importDefaultResultResult;
const PinwheelOut_export = importDefaultResultResult1;

export { PinwheelIn_export as PinwheelIn };
export { PinwheelOut_export as PinwheelOut };
