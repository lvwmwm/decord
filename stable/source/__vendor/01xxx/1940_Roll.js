// Module ID: 1940
// Function ID: 1941
// Name: Roll
// Dependencies: [41, 42, 93, 95, 98, 1935, 1872]

// Module 1940 (Roll)
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
let closure_6 = { code: "(function pnpm_RollTs1(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:0},{rotate:'0deg'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:-values.windowWidth},{rotate:'-180deg'}],initialValues)},callback:callback};})" };
class RollInLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RollInLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(RollInLeft);
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
      items[1] = RollInLeft(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = RollInLeft(closure_2_1[5]).pickTransformValues;
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
      function pnpm_RollTs1(translateX) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [{ translateX: 0 }, { rotate: "0deg" }];
        obj3 = { transform: _undefined2(items1, c6) };
        items1 = [, ];
        const obj4 = { translateX: -translateX.windowWidth };
        items1[0] = obj4;
        items1[1] = { rotate: "-180deg" };
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_RollTs1.__closure = items1;
      pnpm_RollTs1.__workletHash = 5900075290634;
      pnpm_RollTs1.__initData = tmp4;
      return pnpm_RollTs1;
    };
    return tmp3Result;
  }
}
_inherits(RollInLeft, _mod1872.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RollInLeft();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(RollInLeft, null, items);
importDefaultResultResult.presetName = "RollInLeft";
let closure_7 = { code: "(function pnpm_RollTs2(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:0},{rotate:'0deg'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:values.windowWidth},{rotate:'180deg'}],initialValues)},callback:callback};})" };
class RollInRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RollInRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(RollInRight);
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
      items[1] = RollInRight(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = RollInRight(closure_2_1[5]).pickTransformValues;
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
      function pnpm_RollTs2(translateX) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { animations: obj2, initialValues: obj3, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [{ translateX: 0 }, { rotate: "0deg" }];
        obj3 = { transform: _undefined2(items1, c6) };
        items1 = [, ];
        const obj4 = { translateX: translateX.windowWidth };
        items1[0] = obj4;
        items1[1] = { rotate: "180deg" };
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_RollTs2.__closure = items1;
      pnpm_RollTs2.__workletHash = 1511523287401;
      pnpm_RollTs2.__initData = tmp4;
      return pnpm_RollTs2;
    };
    return tmp3Result;
  }
}
_inherits(RollInRight, _mod1872.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RollInRight();
    return tmp;
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(RollInRight, null, items1);
importDefaultResultResult1.presetName = "RollInRight";
let closure_8 = { code: "(function pnpm_RollTs3(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:-values.windowWidth},{rotate:'-180deg'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:0},{rotate:'0deg'}],initialValues)},callback:callback};})" };
class RollOutLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RollOutLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(RollOutLeft);
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
      items[1] = RollOutLeft(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = RollOutLeft(closure_2_1[5]).pickTransformValues;
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
      function pnpm_RollTs3(translateX) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [, ];
        const obj3 = { translateX: -translateX.windowWidth };
        items[0] = obj3;
        items[1] = { rotate: "-180deg" };
        obj4 = { transform: _undefined2(items1, c6) };
        items1 = [{ translateX: 0 }, { rotate: "0deg" }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_RollTs3.__closure = items1;
      pnpm_RollTs3.__workletHash = 5971696103848;
      pnpm_RollTs3.__initData = tmp4;
      return pnpm_RollTs3;
    };
    return tmp3Result;
  }
}
_inherits(RollOutLeft, _mod1872.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RollOutLeft();
    return tmp;
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(RollOutLeft, null, items2);
importDefaultResultResult2.presetName = "RollOutLeft";
let closure_9 = { code: "(function pnpm_RollTs4(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:values.windowWidth},{rotate:'180deg'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:0},{rotate:'0deg'}],initialValues)},callback:callback};})" };
class RollOutRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RollOutRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(RollOutRight);
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
      items[1] = RollOutRight(closure_2_1[5]).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = RollOutRight(closure_2_1[5]).pickTransformValues;
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
      function pnpm_RollTs4(translateX) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback };
        obj2 = { transform: _undefined(items, c1, c2, c3, c4) };
        items = [, ];
        const obj3 = { translateX: translateX.windowWidth };
        items[0] = obj3;
        items[1] = { rotate: "180deg" };
        obj4 = { transform: _undefined2(items1, c6) };
        items1 = [{ translateX: 0 }, { rotate: "0deg" }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_RollTs4.__closure = items1;
      pnpm_RollTs4.__workletHash = 5973472889039;
      pnpm_RollTs4.__initData = tmp4;
      return pnpm_RollTs4;
    };
    return tmp3Result;
  }
}
_inherits(RollOutRight, _mod1872.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RollOutRight();
    return tmp;
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(RollOutRight, null, items3);
importDefaultResultResult3.presetName = "RollOutRight";
const RollInLeft_export = importDefaultResultResult;
const RollInRight_export = importDefaultResultResult1;
const RollOutLeft_export = importDefaultResultResult2;
const RollOutRight_export = importDefaultResultResult3;

export { RollInLeft_export as RollInLeft };
export { RollInRight_export as RollInRight };
export { RollOutLeft_export as RollOutLeft };
export { RollOutRight_export as RollOutRight };
