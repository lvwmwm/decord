// Module ID: 1936
// Function ID: 1937
// Name: Fade
// Dependencies: [32, 41, 42, 93, 95, 98, 1872, 1935]

// Module 1936 (Fade)
import _mod1872 from "module_1872" /* 1872 */;
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
let closure_7 = { code: "(function pnpm_FadeTs1(){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config))},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0},callback:callback};})" };
class FadeIn {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, FadeIn);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(FadeIn);
    const tmp3 = _possibleConstructorReturn;
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
      let targetValues;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = closure_2_2(closure_0.getAnimationAndConfig(), 2);
      [tmp3, tmp4] = tmp2;
      ({ callbackV, initialValues, targetValues } = closure_0);
      const items = [closure_2_7, delayFunction, closure_0.getDelay(), tmp3, targetValues, tmp4, initialValues, callbackV];
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FadeTs1() {
        let num2;
        let num;
        if (_undefined != null) {
          num = _undefined.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: { opacity: _undefined(c1, _undefined2(num, c4)) }, initialValues: { opacity: num2 }, callback };
        num2 = undefined;
        ({ opacity: _undefined(c1, _undefined2(num, c4)) });
        if (_undefined2 != null) {
          num2 = _undefined2.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FadeTs1.__closure = items1;
      pnpm_FadeTs1.__workletHash = 3631319241151;
      pnpm_FadeTs1.__initData = tmp5;
      return pnpm_FadeTs1;
    };
    return tmp3Result;
  }
}
_inherits(FadeIn, _mod1872.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeIn();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(FadeIn, null, items);
importDefaultResultResult.presetName = "FadeIn";
let closure_8 = { code: "(function pnpm_FadeTs2(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{translateX:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{translateX:25}],initialValues)},callback:callback};})" };
class FadeInRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeInRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeInRight);
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
      let targetValues;
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
      ({ callbackV, initialValues, targetValues } = closure_0);
      let items = [closure_2_8, delayFunction, closure_0.getDelay(), tmp4, targetValues, tmp5, FadeInRight(closure_2_1[7]).animateTransformToValues, animationAndConfig, initialValues, FadeInRight(closure_2_1[7]).pickTransformValues, callbackV];
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
      function pnpm_FadeTs2() {
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
        items = [{ translateX: 0 }];
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj3 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ translateX: 25 }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs2.__closure = items1;
      pnpm_FadeTs2.__workletHash = 14018274219910;
      pnpm_FadeTs2.__initData = tmp6;
      return pnpm_FadeTs2;
    };
    return tmp3Result;
  }
}
_inherits(FadeInRight, _mod1872.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeInRight();
    return tmp;
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(FadeInRight, null, items1);
importDefaultResultResult1.presetName = "FadeInRight";
let closure_9 = { code: "(function pnpm_FadeTs3(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{translateX:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{translateX:-25}],initialValues)},callback:callback};})" };
class FadeInLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeInLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeInLeft);
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
      let targetValues;
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
      ({ callbackV, initialValues, targetValues } = closure_0);
      let items = [closure_2_9, delayFunction, closure_0.getDelay(), tmp4, targetValues, tmp5, FadeInLeft(closure_2_1[7]).animateTransformToValues, animationAndConfig, initialValues, FadeInLeft(closure_2_1[7]).pickTransformValues, callbackV];
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
      function pnpm_FadeTs3() {
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
        items = [{ translateX: 0 }];
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj3 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ translateX: -25 }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs3.__closure = items1;
      pnpm_FadeTs3.__workletHash = 5719940525098;
      pnpm_FadeTs3.__initData = tmp6;
      return pnpm_FadeTs3;
    };
    return tmp3Result;
  }
}
_inherits(FadeInLeft, _mod1872.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeInLeft();
    return tmp;
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(FadeInLeft, null, items2);
importDefaultResultResult2.presetName = "FadeInLeft";
let closure_10 = { code: "(function pnpm_FadeTs4(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{translateY:-25}],initialValues)},callback:callback};})" };
class FadeInUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeInUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeInUp);
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
      let targetValues;
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
      ({ callbackV, initialValues, targetValues } = closure_0);
      let items = [closure_2_10, delayFunction, closure_0.getDelay(), tmp4, targetValues, tmp5, FadeInUp(closure_2_1[7]).animateTransformToValues, animationAndConfig, initialValues, FadeInUp(closure_2_1[7]).pickTransformValues, callbackV];
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
      function pnpm_FadeTs4() {
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
        items = [{ translateY: 0 }];
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj3 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ translateY: -25 }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs4.__closure = items1;
      pnpm_FadeTs4.__workletHash = 10129300117517;
      pnpm_FadeTs4.__initData = tmp6;
      return pnpm_FadeTs4;
    };
    return tmp3Result;
  }
}
_inherits(FadeInUp, _mod1872.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeInUp();
    return tmp;
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(FadeInUp, null, items3);
importDefaultResultResult3.presetName = "FadeInUp";
let closure_11 = { code: "(function pnpm_FadeTs5(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{translateY:25}],initialValues)},callback:callback};})" };
class FadeInDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeInDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeInDown);
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
      let targetValues;
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
      ({ callbackV, initialValues, targetValues } = closure_0);
      let items = [closure_2_11, delayFunction, closure_0.getDelay(), tmp4, targetValues, tmp5, FadeInDown(closure_2_1[7]).animateTransformToValues, animationAndConfig, initialValues, FadeInDown(closure_2_1[7]).pickTransformValues, callbackV];
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
      function pnpm_FadeTs5() {
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
        items = [{ translateY: 0 }];
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj3 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ translateY: 25 }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs5.__closure = items1;
      pnpm_FadeTs5.__workletHash = 9037743879009;
      pnpm_FadeTs5.__initData = tmp6;
      return pnpm_FadeTs5;
    };
    return tmp3Result;
  }
}
_inherits(FadeInDown, _mod1872.ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeInDown();
    return tmp;
  }
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(FadeInDown, null, items4);
importDefaultResultResult4.presetName = "FadeInDown";
let closure_12 = { code: "(function pnpm_FadeTs6(){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config))},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1},callback:callback};})" };
class FadeOut {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, FadeOut);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(FadeOut);
    const tmp3 = _possibleConstructorReturn;
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
      let targetValues;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = closure_2_2(closure_0.getAnimationAndConfig(), 2);
      [tmp3, tmp4] = tmp2;
      ({ callbackV, initialValues, targetValues } = closure_0);
      const items = [closure_2_12, delayFunction, closure_0.getDelay(), tmp3, targetValues, tmp4, initialValues, callbackV];
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FadeTs6() {
        let num2;
        let num;
        if (_undefined != null) {
          num = _undefined.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: { opacity: _undefined(c1, _undefined2(num, c4)) }, initialValues: { opacity: num2 }, callback };
        num2 = undefined;
        ({ opacity: _undefined(c1, _undefined2(num, c4)) });
        if (_undefined2 != null) {
          num2 = _undefined2.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FadeTs6.__closure = items1;
      pnpm_FadeTs6.__workletHash = 10755825328696;
      pnpm_FadeTs6.__initData = tmp5;
      return pnpm_FadeTs6;
    };
    return tmp3Result;
  }
}
_inherits(FadeOut, _mod1872.ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeOut();
    return tmp;
  }
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(FadeOut, null, items5);
importDefaultResultResult5.presetName = "FadeOut";
let closure_13 = { code: "(function pnpm_FadeTs7(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{translateX:25}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{translateX:0}],initialValues)},callback:callback};})" };
class FadeOutRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeOutRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeOutRight);
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
      let targetValues;
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
      ({ callbackV, initialValues, targetValues } = closure_0);
      let items = [closure_2_13, delayFunction, closure_0.getDelay(), tmp4, targetValues, tmp5, FadeOutRight(closure_2_1[7]).animateTransformToValues, animationAndConfig, initialValues, FadeOutRight(closure_2_1[7]).pickTransformValues, callbackV];
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
      function pnpm_FadeTs7() {
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
        items = [{ translateX: 25 }];
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        obj3 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ translateX: 0 }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs7.__closure = items1;
      pnpm_FadeTs7.__workletHash = 15974682857923;
      pnpm_FadeTs7.__initData = tmp6;
      return pnpm_FadeTs7;
    };
    return tmp3Result;
  }
}
_inherits(FadeOutRight, _mod1872.ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeOutRight();
    return tmp;
  }
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(FadeOutRight, null, items6);
importDefaultResultResult6.presetName = "FadeOutRight";
let closure_14 = { code: "(function pnpm_FadeTs8(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{translateX:-25}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{translateX:0}],initialValues)},callback:callback};})" };
class FadeOutLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeOutLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeOutLeft);
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
      let targetValues;
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
      ({ callbackV, initialValues, targetValues } = closure_0);
      let items = [closure_2_14, delayFunction, closure_0.getDelay(), tmp4, targetValues, tmp5, FadeOutLeft(closure_2_1[7]).animateTransformToValues, animationAndConfig, initialValues, FadeOutLeft(closure_2_1[7]).pickTransformValues, callbackV];
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
      function pnpm_FadeTs8() {
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
        items = [{ translateX: -25 }];
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        obj3 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ translateX: 0 }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs8.__closure = items1;
      pnpm_FadeTs8.__workletHash = 15520476859969;
      pnpm_FadeTs8.__initData = tmp6;
      return pnpm_FadeTs8;
    };
    return tmp3Result;
  }
}
_inherits(FadeOutLeft, _mod1872.ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeOutLeft();
    return tmp;
  }
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(FadeOutLeft, null, items7);
importDefaultResultResult7.presetName = "FadeOutLeft";
let closure_15 = { code: "(function pnpm_FadeTs9(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{translateY:-25}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{translateY:0}],initialValues)},callback:callback};})" };
class FadeOutUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeOutUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeOutUp);
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
      let targetValues;
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
      ({ callbackV, initialValues, targetValues } = closure_0);
      let items = [closure_2_15, delayFunction, closure_0.getDelay(), tmp4, targetValues, tmp5, FadeOutUp(closure_2_1[7]).animateTransformToValues, animationAndConfig, initialValues, FadeOutUp(closure_2_1[7]).pickTransformValues, callbackV];
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
      function pnpm_FadeTs9() {
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
        items = [{ translateY: -25 }];
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        obj3 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ translateY: 0 }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs9.__closure = items1;
      pnpm_FadeTs9.__workletHash = 1167978366816;
      pnpm_FadeTs9.__initData = tmp6;
      return pnpm_FadeTs9;
    };
    return tmp3Result;
  }
}
_inherits(FadeOutUp, _mod1872.ComplexAnimationBuilder);
const entry8 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeOutUp();
    return tmp;
  }
};
const items8 = [entry8];
const importDefaultResultResult8 = _createClass(FadeOutUp, null, items8);
importDefaultResultResult8.presetName = "FadeOutUp";
let closure_16 = { code: "(function pnpm_FadeTs10(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{translateY:25}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{translateY:0}],initialValues)},callback:callback};})" };
class FadeOutDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeOutDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeOutDown);
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
      let targetValues;
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
      ({ callbackV, initialValues, targetValues } = closure_0);
      let items = [closure_2_16, delayFunction, closure_0.getDelay(), tmp4, targetValues, tmp5, FadeOutDown(closure_2_1[7]).animateTransformToValues, animationAndConfig, initialValues, FadeOutDown(closure_2_1[7]).pickTransformValues, callbackV];
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
      function pnpm_FadeTs10() {
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
        items = [{ translateY: 25 }];
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        obj3 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ translateY: 0 }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs10.__closure = items1;
      pnpm_FadeTs10.__workletHash = 9274246347381;
      pnpm_FadeTs10.__initData = tmp6;
      return pnpm_FadeTs10;
    };
    return tmp3Result;
  }
}
_inherits(FadeOutDown, _mod1872.ComplexAnimationBuilder);
const entry9 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeOutDown();
    return tmp;
  }
};
const items9 = [entry9];
const importDefaultResultResult9 = _createClass(FadeOutDown, null, items9);
importDefaultResultResult9.presetName = "FadeOutDown";
const FadeIn_export = importDefaultResultResult;
const FadeInRight_export = importDefaultResultResult1;
const FadeInLeft_export = importDefaultResultResult2;
const FadeInUp_export = importDefaultResultResult3;
const FadeInDown_export = importDefaultResultResult4;
const FadeOut_export = importDefaultResultResult5;
const FadeOutRight_export = importDefaultResultResult6;
const FadeOutLeft_export = importDefaultResultResult7;
const FadeOutUp_export = importDefaultResultResult8;
const FadeOutDown_export = importDefaultResultResult9;

export { FadeIn_export as FadeIn };
export { FadeInRight_export as FadeInRight };
export { FadeInLeft_export as FadeInLeft };
export { FadeInUp_export as FadeInUp };
export { FadeInDown_export as FadeInDown };
export { FadeOut_export as FadeOut };
export { FadeOutRight_export as FadeOutRight };
export { FadeOutLeft_export as FadeOutLeft };
export { FadeOutUp_export as FadeOutUp };
export { FadeOutDown_export as FadeOutDown };
