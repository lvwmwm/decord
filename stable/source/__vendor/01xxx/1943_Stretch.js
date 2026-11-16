// Module ID: 1943
// Function ID: 1944
// Name: Stretch
// Dependencies: [41, 42, 93, 95, 98, 1935, 1872]

// Module 1943 (Stretch)
import _mod1872 from "module_1872" /* 1872 */;
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
let closure_6 = { code: "(function pnpm_StretchTs1(){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{scaleX:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{scaleX:0}],initialValues)},callback:callback};})" };
class StretchInX {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, StretchInX);
    let items1 = [...items];
    let obj = _getPrototypeOf(StretchInX);
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
      items[1] = StretchInX(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = StretchInX(closure_2_1[5]).pickTransformValues;
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
      function pnpm_StretchTs1() {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [{ scaleX: 1 }];
        obj3 = { transform: _undefined2(items1, c6) };
        items1 = [{ scaleX: 0 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_StretchTs1.__closure = items1;
      pnpm_StretchTs1.__workletHash = 15708738579684;
      pnpm_StretchTs1.__initData = tmp4;
      return pnpm_StretchTs1;
    };
    return tmp3Result;
  }
}
_inherits(StretchInX, _mod1872.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = StretchInX();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(StretchInX, null, items);
importDefaultResultResult.presetName = "StretchInX";
let closure_7 = { code: "(function pnpm_StretchTs2(){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{scaleY:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{scaleY:0}],initialValues)},callback:callback};})" };
class StretchInY {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, StretchInY);
    let items1 = [...items];
    let obj = _getPrototypeOf(StretchInY);
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
      let items = [closure_2_7, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = StretchInY(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = StretchInY(closure_2_1[5]).pickTransformValues;
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
      function pnpm_StretchTs2() {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [{ scaleY: 1 }];
        obj3 = { transform: _undefined2(items1, c6) };
        items1 = [{ scaleY: 0 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_StretchTs2.__closure = items1;
      pnpm_StretchTs2.__workletHash = 16026484333159;
      pnpm_StretchTs2.__initData = tmp4;
      return pnpm_StretchTs2;
    };
    return tmp3Result;
  }
}
_inherits(StretchInY, _mod1872.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = StretchInY();
    return tmp;
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(StretchInY, null, items1);
importDefaultResultResult1.presetName = "StretchInY";
let closure_8 = { code: "(function pnpm_StretchTs3(){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{scaleX:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{scaleX:1}],initialValues)},callback:callback};})" };
class StretchOutX {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, StretchOutX);
    let items1 = [...items];
    let obj = _getPrototypeOf(StretchOutX);
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
      items[1] = StretchOutX(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = StretchOutX(closure_2_1[5]).pickTransformValues;
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
      function pnpm_StretchTs3() {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [{ scaleX: 0 }];
        obj3 = { transform: _undefined2(items1, c6) };
        items1 = [{ scaleX: 1 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_StretchTs3.__closure = items1;
      pnpm_StretchTs3.__workletHash = 17223591969446;
      pnpm_StretchTs3.__initData = tmp4;
      return pnpm_StretchTs3;
    };
    return tmp3Result;
  }
}
_inherits(StretchOutX, _mod1872.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = StretchOutX();
    return tmp;
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(StretchOutX, null, items2);
importDefaultResultResult2.presetName = "StretchOutX";
let closure_9 = { code: "(function pnpm_StretchTs4(){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{scaleY:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{scaleY:1}],initialValues)},callback:callback};})" };
class StretchOutY {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, StretchOutY);
    let items1 = [...items];
    let obj = _getPrototypeOf(StretchOutY);
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
      items[1] = StretchOutY(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = StretchOutY(closure_2_1[5]).pickTransformValues;
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
      function pnpm_StretchTs4() {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [{ scaleY: 0 }];
        obj3 = { transform: _undefined2(items1, c6) };
        items1 = [{ scaleY: 1 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_StretchTs4.__closure = items1;
      pnpm_StretchTs4.__workletHash = 3163491207585;
      pnpm_StretchTs4.__initData = tmp4;
      return pnpm_StretchTs4;
    };
    return tmp3Result;
  }
}
_inherits(StretchOutY, _mod1872.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = StretchOutY();
    return tmp;
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(StretchOutY, null, items3);
importDefaultResultResult3.presetName = "StretchOutY";
const StretchInX_export = importDefaultResultResult;
const StretchInY_export = importDefaultResultResult1;
const StretchOutX_export = importDefaultResultResult2;
const StretchOutY_export = importDefaultResultResult3;

export { StretchInX_export as StretchInX };
export { StretchInY_export as StretchInY };
export { StretchOutX_export as StretchOutX };
export { StretchOutY_export as StretchOutY };
