// Module ID: 1947
// Function ID: 1948
// Name: Zoom
// Dependencies: [41, 42, 93, 95, 98, 1938, 1875]

// Module 1947 (Zoom)
import _mod1875 from "module_1875" /* 1875 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3_mod from "_possibleConstructorReturn" /* 93 */;
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
let c3 = c3_mod;
let closure_6 = { code: "(function pnpm_ZoomTs1(){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{scale:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{scale:0}],initialValues)},callback:callback};})" };
class ZoomIn {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomIn);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomIn);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let items = [closure_2_6, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomIn(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomIn(closure_2_1[5]).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs1() {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [{ scale: 1 }];
        obj3 = { transform: _undefined2(items1, c6) };
        items1 = [{ scale: 0 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs1.__closure = items1;
      pnpm_ZoomTs1.__workletHash = 12922814466908;
      pnpm_ZoomTs1.__initData = tmp4;
      return pnpm_ZoomTs1;
    };
    return tmp3Result;
  }
}
_inherits(ZoomIn, _mod1875.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomIn();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(ZoomIn, null, items);
importDefaultResultResult.presetName = "ZoomIn";
let closure_7 = { code: "(function pnpm_ZoomTs2(){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,rotate,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{scale:1},{rotate:'0rad'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{scale:0},{rotate:rotate+\"rad\"}],initialValues)},callback:callback};})" };
class ZoomInRotate {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, ZoomInRotate);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomInRotate);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let str = "0.3";
      const delay = closure_0.getDelay();
      if (closure_0.rotateV) {
        str = tmp.rotateV;
      }
      let items = [closure_2_7, , , , , , , , , ];
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomInRotate(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomInRotate(closure_2_1[5]).pickTransformValues;
      items[7] = str;
      items[8] = initialValues;
      items[9] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_ZoomTs2() {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [{ scale: 1 }, { rotate: "0rad" }];
        obj3 = { transform: _undefined2(items1, c7) };
        items1 = [{ scale: 0 }, { rotate: "" + c6 + "rad" }];
        ({ rotate: "" + c6 + "rad" });
        return obj;
      }
      let items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_ZoomTs2.__closure = items1;
      pnpm_ZoomTs2.__workletHash = 8386313629096;
      pnpm_ZoomTs2.__initData = tmp5;
      return pnpm_ZoomTs2;
    };
    return tmp3Result;
  }
}
_inherits(ZoomInRotate, _mod1875.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomInRotate();
    return tmp;
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(ZoomInRotate, null, items1);
importDefaultResultResult1.presetName = "ZoomInRotate";
let closure_8 = { code: "(function pnpm_ZoomTs3(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:0},{scale:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:-values.windowWidth},{scale:0}],initialValues)},callback:callback};})" };
class ZoomInLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomInLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomInLeft);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let items = [closure_2_8, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomInLeft(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomInLeft(closure_2_1[5]).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs3(translateX) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [{ translateX: 0 }, { scale: 1 }];
        obj3 = { transform: _undefined2(items1, c6) };
        items1 = [, ];
        const obj4 = { translateX: -translateX.windowWidth };
        items1[0] = obj4;
        items1[1] = { scale: 0 };
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs3.__closure = items1;
      pnpm_ZoomTs3.__workletHash = 2081834512039;
      pnpm_ZoomTs3.__initData = tmp4;
      return pnpm_ZoomTs3;
    };
    return tmp3Result;
  }
}
_inherits(ZoomInLeft, _mod1875.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomInLeft();
    return tmp;
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(ZoomInLeft, null, items2);
importDefaultResultResult2.presetName = "ZoomInLeft";
let closure_9 = { code: "(function pnpm_ZoomTs4(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:0},{scale:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:values.windowWidth},{scale:0}],initialValues)},callback:callback};})" };
class ZoomInRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomInRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomInRight);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let items = [closure_2_9, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomInRight(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomInRight(closure_2_1[5]).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs4(translateX) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [{ translateX: 0 }, { scale: 1 }];
        obj3 = { transform: _undefined2(items1, c6) };
        items1 = [, ];
        const obj4 = { translateX: translateX.windowWidth };
        items1[0] = obj4;
        items1[1] = { scale: 0 };
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs4.__closure = items1;
      pnpm_ZoomTs4.__workletHash = 16835008505357;
      pnpm_ZoomTs4.__initData = tmp4;
      return pnpm_ZoomTs4;
    };
    return tmp3Result;
  }
}
_inherits(ZoomInRight, _mod1875.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomInRight();
    return tmp;
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(ZoomInRight, null, items3);
importDefaultResultResult3.presetName = "ZoomInRight";
let closure_10 = { code: "(function pnpm_ZoomTs5(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:0},{scale:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:-values.windowHeight},{scale:0}],initialValues)},callback:callback};})" };
class ZoomInUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomInUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomInUp);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let items = [closure_2_10, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomInUp(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomInUp(closure_2_1[5]).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs5(translateY) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [{ translateY: 0 }, { scale: 1 }];
        obj3 = { transform: _undefined2(items1, c6) };
        items1 = [, ];
        const obj4 = { translateY: -translateY.windowHeight };
        items1[0] = obj4;
        items1[1] = { scale: 0 };
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs5.__closure = items1;
      pnpm_ZoomTs5.__workletHash = 6152288546008;
      pnpm_ZoomTs5.__initData = tmp4;
      return pnpm_ZoomTs5;
    };
    return tmp3Result;
  }
}
_inherits(ZoomInUp, _mod1875.ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomInUp();
    return tmp;
  }
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(ZoomInUp, null, items4);
importDefaultResultResult4.presetName = "ZoomInUp";
let closure_11 = { code: "(function pnpm_ZoomTs6(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:0},{scale:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:values.windowHeight},{scale:0}],initialValues)},callback:callback};})" };
class ZoomInDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomInDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomInDown);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let items = [closure_2_11, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomInDown(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomInDown(closure_2_1[5]).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs6(translateY) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [{ translateY: 0 }, { scale: 1 }];
        obj3 = { transform: _undefined2(items1, c6) };
        items1 = [, ];
        const obj4 = { translateY: translateY.windowHeight };
        items1[0] = obj4;
        items1[1] = { scale: 0 };
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs6.__closure = items1;
      pnpm_ZoomTs6.__workletHash = 11979197724886;
      pnpm_ZoomTs6.__initData = tmp4;
      return pnpm_ZoomTs6;
    };
    return tmp3Result;
  }
}
_inherits(ZoomInDown, _mod1875.ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomInDown();
    return tmp;
  }
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(ZoomInDown, null, items5);
importDefaultResultResult5.presetName = "ZoomInDown";
let closure_12 = { code: "(function pnpm_ZoomTs7(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:0},{scale:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:-values.targetHeight},{scale:0}],initialValues)},callback:callback};})" };
class ZoomInEasyUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomInEasyUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomInEasyUp);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let items = [closure_2_12, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomInEasyUp(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomInEasyUp(closure_2_1[5]).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs7(targetHeight) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [{ translateY: 0 }, { scale: 1 }];
        obj3 = { transform: _undefined2(items1, c6) };
        items1 = [, ];
        const obj4 = { translateY: -targetHeight.targetHeight };
        items1[0] = obj4;
        items1[1] = { scale: 0 };
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs7.__closure = items1;
      pnpm_ZoomTs7.__workletHash = 1752004228679;
      pnpm_ZoomTs7.__initData = tmp4;
      return pnpm_ZoomTs7;
    };
    return tmp3Result;
  }
}
_inherits(ZoomInEasyUp, _mod1875.ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomInEasyUp();
    return tmp;
  }
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(ZoomInEasyUp, null, items6);
importDefaultResultResult6.presetName = "ZoomInEasyUp";
let closure_13 = { code: "(function pnpm_ZoomTs8(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:0},{scale:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:values.targetHeight},{scale:0}],initialValues)},callback:callback};})" };
class ZoomInEasyDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomInEasyDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomInEasyDown);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let items = [closure_2_13, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomInEasyDown(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomInEasyDown(closure_2_1[5]).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs8(targetHeight) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [{ translateY: 0 }, { scale: 1 }];
        obj3 = { transform: _undefined2(items1, c6) };
        items1 = [, ];
        const obj4 = { translateY: targetHeight.targetHeight };
        items1[0] = obj4;
        items1[1] = { scale: 0 };
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs8.__closure = items1;
      pnpm_ZoomTs8.__workletHash = 16986215799013;
      pnpm_ZoomTs8.__initData = tmp4;
      return pnpm_ZoomTs8;
    };
    return tmp3Result;
  }
}
_inherits(ZoomInEasyDown, _mod1875.ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomInEasyDown();
    return tmp;
  }
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(ZoomInEasyDown, null, items7);
importDefaultResultResult7.presetName = "ZoomInEasyDown";
let closure_14 = { code: "(function pnpm_ZoomTs9(){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{scale:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{scale:1}],initialValues)},callback:callback};})" };
class ZoomOut {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomOut);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOut);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let items = [closure_2_14, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomOut(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOut(closure_2_1[5]).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs9() {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [{ scale: 0 }];
        obj3 = { transform: _undefined2(items1, c6) };
        items1 = [{ scale: 1 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs9.__closure = items1;
      pnpm_ZoomTs9.__workletHash = 396670226420;
      pnpm_ZoomTs9.__initData = tmp4;
      return pnpm_ZoomTs9;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOut, _mod1875.ComplexAnimationBuilder);
const entry8 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOut();
    return tmp;
  }
};
const items8 = [entry8];
const importDefaultResultResult8 = _createClass(ZoomOut, null, items8);
importDefaultResultResult8.presetName = "ZoomOut";
let closure_15 = { code: "(function pnpm_ZoomTs10(){let[animateTransformToValues,rotate,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{scale:0},{rotate:rotate}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{scale:1},{rotate:'0rad'}],initialValues)},callback:callback};})" };
class ZoomOutRotate {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, ZoomOutRotate);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOutRotate);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let str = "0.3";
      const delay = closure_0.getDelay();
      if (closure_0.rotateV) {
        str = tmp.rotateV;
      }
      let items = [closure_2_15, , , , , , , , , ];
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomOutRotate(closure_2_1[5]).animateTransformToValues;
      items[2] = str;
      items[3] = targetValues;
      items[4] = animationAndConfig;
      items[5] = delayFunction;
      items[6] = delay;
      items[7] = ZoomOutRotate(closure_2_1[5]).pickTransformValues;
      items[8] = initialValues;
      items[9] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_ZoomTs10() {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback };
        obj2 = { transform: _undefined(items, c2, c3, c4, c5) };
        items = [{ scale: 0 }, ];
        const obj3 = { rotate };
        items[1] = obj3;
        obj4 = { transform: _undefined2(items1, c7) };
        items1 = [{ scale: 1 }, { rotate: "0rad" }];
        return obj;
      }
      let items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_ZoomTs10.__closure = items1;
      pnpm_ZoomTs10.__workletHash = 1552380564423;
      pnpm_ZoomTs10.__initData = tmp5;
      return pnpm_ZoomTs10;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOutRotate, _mod1875.ComplexAnimationBuilder);
const entry9 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOutRotate();
    return tmp;
  }
};
const items9 = [entry9];
const importDefaultResultResult9 = _createClass(ZoomOutRotate, null, items9);
importDefaultResultResult9.presetName = "ZoomOutRotate";
let closure_16 = { code: "(function pnpm_ZoomTs11(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:-values.windowWidth},{scale:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:0},{scale:1}],initialValues)},callback:callback};})" };
class ZoomOutLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomOutLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOutLeft);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let items = [closure_2_16, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomOutLeft(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutLeft(closure_2_1[5]).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs11(translateX) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [, ];
        const obj3 = { translateX: -translateX.windowWidth };
        items[0] = obj3;
        items[1] = { scale: 0 };
        obj4 = { transform: _undefined2(items1, c6) };
        items1 = [{ translateX: 0 }, { scale: 1 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs11.__closure = items1;
      pnpm_ZoomTs11.__workletHash = 9712636232340;
      pnpm_ZoomTs11.__initData = tmp4;
      return pnpm_ZoomTs11;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOutLeft, _mod1875.ComplexAnimationBuilder);
const entry10 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOutLeft();
    return tmp;
  }
};
const items10 = [entry10];
const importDefaultResultResult10 = _createClass(ZoomOutLeft, null, items10);
importDefaultResultResult10.presetName = "ZoomOutLeft";
let closure_17 = { code: "(function pnpm_ZoomTs12(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:values.windowWidth},{scale:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:0},{scale:1}],initialValues)},callback:callback};})" };
class ZoomOutRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomOutRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOutRight);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let items = [closure_2_17, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomOutRight(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutRight(closure_2_1[5]).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs12(translateX) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [, ];
        const obj3 = { translateX: translateX.windowWidth };
        items[0] = obj3;
        items[1] = { scale: 0 };
        obj4 = { transform: _undefined2(items1, c6) };
        items1 = [{ translateX: 0 }, { scale: 1 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs12.__closure = items1;
      pnpm_ZoomTs12.__workletHash = 813568534426;
      pnpm_ZoomTs12.__initData = tmp4;
      return pnpm_ZoomTs12;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOutRight, _mod1875.ComplexAnimationBuilder);
const entry11 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOutRight();
    return tmp;
  }
};
const items11 = [entry11];
const importDefaultResultResult11 = _createClass(ZoomOutRight, null, items11);
importDefaultResultResult11.presetName = "ZoomOutRight";
let closure_18 = { code: "(function pnpm_ZoomTs13(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:-values.windowHeight},{scale:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:0},{scale:1}],initialValues)},callback:callback};})" };
class ZoomOutUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomOutUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOutUp);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let items = [closure_2_18, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomOutUp(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutUp(closure_2_1[5]).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs13(translateY) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [, ];
        const obj3 = { translateY: -translateY.windowHeight };
        items[0] = obj3;
        items[1] = { scale: 0 };
        obj4 = { transform: _undefined2(items1, c6) };
        items1 = [{ translateY: 0 }, { scale: 1 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs13.__closure = items1;
      pnpm_ZoomTs13.__workletHash = 5114640931727;
      pnpm_ZoomTs13.__initData = tmp4;
      return pnpm_ZoomTs13;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOutUp, _mod1875.ComplexAnimationBuilder);
const entry12 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOutUp();
    return tmp;
  }
};
const items12 = [entry12];
const importDefaultResultResult12 = _createClass(ZoomOutUp, null, items12);
importDefaultResultResult12.presetName = "ZoomOutUp";
let closure_19 = { code: "(function pnpm_ZoomTs14(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:values.windowHeight},{scale:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:0},{scale:1}],initialValues)},callback:callback};})" };
class ZoomOutDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomOutDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOutDown);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let items = [closure_2_19, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomOutDown(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutDown(closure_2_1[5]).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs14(translateY) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [, ];
        const obj3 = { translateY: translateY.windowHeight };
        items[0] = obj3;
        items[1] = { scale: 0 };
        obj4 = { transform: _undefined2(items1, c6) };
        items1 = [{ translateY: 0 }, { scale: 1 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs14.__closure = items1;
      pnpm_ZoomTs14.__workletHash = 13969217164037;
      pnpm_ZoomTs14.__initData = tmp4;
      return pnpm_ZoomTs14;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOutDown, _mod1875.ComplexAnimationBuilder);
const entry13 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOutDown();
    return tmp;
  }
};
const items13 = [entry13];
const importDefaultResultResult13 = _createClass(ZoomOutDown, null, items13);
importDefaultResultResult13.presetName = "ZoomOutDown";
let closure_20 = { code: "(function pnpm_ZoomTs15(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:-values.currentHeight},{scale:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:0},{scale:1}],initialValues)},callback:callback};})" };
class ZoomOutEasyUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomOutEasyUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOutEasyUp);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let items = [closure_2_20, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomOutEasyUp(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyUp(closure_2_1[5]).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs15(currentHeight) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [, ];
        const obj3 = { translateY: -currentHeight.currentHeight };
        items[0] = obj3;
        items[1] = { scale: 0 };
        obj4 = { transform: _undefined2(items1, c6) };
        items1 = [{ translateY: 0 }, { scale: 1 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs15.__closure = items1;
      pnpm_ZoomTs15.__workletHash = 16783034363628;
      pnpm_ZoomTs15.__initData = tmp4;
      return pnpm_ZoomTs15;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOutEasyUp, _mod1875.ComplexAnimationBuilder);
const entry14 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOutEasyUp();
    return tmp;
  }
};
const items14 = [entry14];
const importDefaultResultResult14 = _createClass(ZoomOutEasyUp, null, items14);
importDefaultResultResult14.presetName = "ZoomOutEasyUp";
let closure_21 = { code: "(function pnpm_ZoomTs16(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:values.currentHeight},{scale:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:0},{scale:1}],initialValues)},callback:callback};})" };
class ZoomOutEasyDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomOutEasyDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOutEasyDown);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const animationAndConfig = closure_0.getAnimationAndConfig();
      let items = [closure_2_21, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = ZoomOutEasyDown(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(closure_2_1[5]).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs16(currentHeight) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [, ];
        const obj3 = { translateY: currentHeight.currentHeight };
        items[0] = obj3;
        items[1] = { scale: 0 };
        obj4 = { transform: _undefined2(items1, c6) };
        items1 = [{ translateY: 0 }, { scale: 1 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs16.__closure = items1;
      pnpm_ZoomTs16.__workletHash = 16766082812226;
      pnpm_ZoomTs16.__initData = tmp4;
      return pnpm_ZoomTs16;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOutEasyDown, _mod1875.ComplexAnimationBuilder);
const entry15 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOutEasyDown();
    return tmp;
  }
};
const items15 = [entry15];
const importDefaultResultResult15 = _createClass(ZoomOutEasyDown, null, items15);
importDefaultResultResult15.presetName = "ZoomOutEasyDown";
const ZoomIn_export = importDefaultResultResult;
const ZoomInRotate_export = importDefaultResultResult1;
const ZoomInLeft_export = importDefaultResultResult2;
const ZoomInRight_export = importDefaultResultResult3;
const ZoomInUp_export = importDefaultResultResult4;
const ZoomInDown_export = importDefaultResultResult5;
const ZoomInEasyUp_export = importDefaultResultResult6;
const ZoomInEasyDown_export = importDefaultResultResult7;
const ZoomOut_export = importDefaultResultResult8;
const ZoomOutRotate_export = importDefaultResultResult9;
const ZoomOutLeft_export = importDefaultResultResult10;
const ZoomOutRight_export = importDefaultResultResult11;
const ZoomOutUp_export = importDefaultResultResult12;
const ZoomOutDown_export = importDefaultResultResult13;
const ZoomOutEasyUp_export = importDefaultResultResult14;
const ZoomOutEasyDown_export = importDefaultResultResult15;

export { ZoomIn_export as ZoomIn };
export { ZoomInRotate_export as ZoomInRotate };
export { ZoomInLeft_export as ZoomInLeft };
export { ZoomInRight_export as ZoomInRight };
export { ZoomInUp_export as ZoomInUp };
export { ZoomInDown_export as ZoomInDown };
export { ZoomInEasyUp_export as ZoomInEasyUp };
export { ZoomInEasyDown_export as ZoomInEasyDown };
export { ZoomOut_export as ZoomOut };
export { ZoomOutRotate_export as ZoomOutRotate };
export { ZoomOutLeft_export as ZoomOutLeft };
export { ZoomOutRight_export as ZoomOutRight };
export { ZoomOutUp_export as ZoomOutUp };
export { ZoomOutDown_export as ZoomOutDown };
export { ZoomOutEasyUp_export as ZoomOutEasyUp };
export { ZoomOutEasyDown_export as ZoomOutEasyDown };
