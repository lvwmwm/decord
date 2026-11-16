// Module ID: 1937
// Function ID: 1938
// Name: Flip
// Dependencies: [41, 42, 93, 95, 98, 1935, 1872]

// Module 1937 (Flip)
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
let closure_6 = { code: "(function pnpm_FlipTs1(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateX:'90deg'},{translateY:-values.targetHeight}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateX:'0deg'},{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipInXUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipInXUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipInXUp);
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
      items[1] = FlipInXUp(closure_2_1[5]).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipInXUp(closure_2_1[5]).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
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
      function pnpm_FlipTs1(targetHeight) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { initialValues: obj2, animations: obj4, callback };
        obj2 = { transform: _undefined(items, c1) };
        items = [{ perspective: 500 }, { rotateX: "90deg" }, ];
        const obj3 = { translateY: -targetHeight.targetHeight };
        items[2] = obj3;
        obj4 = { transform: _undefined2(items1, c3, c4, c5, c6) };
        items1 = [{ perspective: 500 }, { rotateX: "0deg" }, { translateY: 0 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs1.__closure = items1;
      pnpm_FlipTs1.__workletHash = 9469158263453;
      pnpm_FlipTs1.__initData = tmp4;
      return pnpm_FlipTs1;
    };
    return tmp3Result;
  }
}
_inherits(FlipInXUp, _mod1872.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipInXUp();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(FlipInXUp, null, items);
importDefaultResultResult.presetName = "FlipInXUp";
let closure_7 = { code: "(function pnpm_FlipTs2(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateY:'-90deg'},{translateX:-values.targetWidth}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateY:'0deg'},{translateX:0}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipInYLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipInYLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipInYLeft);
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
      items[1] = FlipInYLeft(closure_2_1[5]).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipInYLeft(closure_2_1[5]).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
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
      function pnpm_FlipTs2(targetWidth) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { initialValues: obj2, animations: obj4, callback };
        obj2 = { transform: _undefined(items, c1) };
        items = [{ perspective: 500 }, { rotateY: "-90deg" }, ];
        const obj3 = { translateX: -targetWidth.targetWidth };
        items[2] = obj3;
        obj4 = { transform: _undefined2(items1, c3, c4, c5, c6) };
        items1 = [{ perspective: 500 }, { rotateY: "0deg" }, { translateX: 0 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs2.__closure = items1;
      pnpm_FlipTs2.__workletHash = 8176382367658;
      pnpm_FlipTs2.__initData = tmp4;
      return pnpm_FlipTs2;
    };
    return tmp3Result;
  }
}
_inherits(FlipInYLeft, _mod1872.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipInYLeft();
    return tmp;
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(FlipInYLeft, null, items1);
importDefaultResultResult1.presetName = "FlipInYLeft";
let closure_8 = { code: "(function pnpm_FlipTs3(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateX:'-90deg'},{translateY:values.targetHeight}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateX:'0deg'},{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipInXDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipInXDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipInXDown);
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
      items[1] = FlipInXDown(closure_2_1[5]).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipInXDown(closure_2_1[5]).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
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
      function pnpm_FlipTs3(targetHeight) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { initialValues: obj2, animations: obj4, callback };
        obj2 = { transform: _undefined(items, c1) };
        items = [{ perspective: 500 }, { rotateX: "-90deg" }, ];
        const obj3 = { translateY: targetHeight.targetHeight };
        items[2] = obj3;
        obj4 = { transform: _undefined2(items1, c3, c4, c5, c6) };
        items1 = [{ perspective: 500 }, { rotateX: "0deg" }, { translateY: 0 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs3.__closure = items1;
      pnpm_FlipTs3.__workletHash = 17416924802431;
      pnpm_FlipTs3.__initData = tmp4;
      return pnpm_FlipTs3;
    };
    return tmp3Result;
  }
}
_inherits(FlipInXDown, _mod1872.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipInXDown();
    return tmp;
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(FlipInXDown, null, items2);
importDefaultResultResult2.presetName = "FlipInXDown";
let closure_9 = { code: "(function pnpm_FlipTs4(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateY:'90deg'},{translateX:values.targetWidth}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateY:'0deg'},{translateX:0}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipInYRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipInYRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipInYRight);
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
      items[1] = FlipInYRight(closure_2_1[5]).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipInYRight(closure_2_1[5]).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
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
      function pnpm_FlipTs4(targetWidth) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { initialValues: obj2, animations: obj4, callback };
        obj2 = { transform: _undefined(items, c1) };
        items = [{ perspective: 500 }, { rotateY: "90deg" }, ];
        const obj3 = { translateX: targetWidth.targetWidth };
        items[2] = obj3;
        obj4 = { transform: _undefined2(items1, c3, c4, c5, c6) };
        items1 = [{ perspective: 500 }, { rotateY: "0deg" }, { translateX: 0 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs4.__closure = items1;
      pnpm_FlipTs4.__workletHash = 16917359476172;
      pnpm_FlipTs4.__initData = tmp4;
      return pnpm_FlipTs4;
    };
    return tmp3Result;
  }
}
_inherits(FlipInYRight, _mod1872.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipInYRight();
    return tmp;
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(FlipInYRight, null, items3);
importDefaultResultResult3.presetName = "FlipInYRight";
let closure_10 = { code: "(function pnpm_FlipTs5(){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateX:'90deg'}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateX:'0deg'}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipInEasyX {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipInEasyX);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipInEasyX);
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
      items[1] = FlipInEasyX(closure_2_1[5]).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipInEasyX(closure_2_1[5]).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
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
      function pnpm_FlipTs5() {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback };
        obj2 = { transform: _undefined(items, c1) };
        items = [{ perspective: 500 }, { rotateX: "90deg" }];
        obj3 = { transform: _undefined2(items1, c3, c4, c5, c6) };
        items1 = [{ perspective: 500 }, { rotateX: "0deg" }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs5.__closure = items1;
      pnpm_FlipTs5.__workletHash = 1584523604772;
      pnpm_FlipTs5.__initData = tmp4;
      return pnpm_FlipTs5;
    };
    return tmp3Result;
  }
}
_inherits(FlipInEasyX, _mod1872.ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipInEasyX();
    return tmp;
  }
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(FlipInEasyX, null, items4);
importDefaultResultResult4.presetName = "FlipInEasyX";
let closure_11 = { code: "(function pnpm_FlipTs6(){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateY:'90deg'}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateY:'0deg'}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipInEasyY {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipInEasyY);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipInEasyY);
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
      items[1] = FlipInEasyY(closure_2_1[5]).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipInEasyY(closure_2_1[5]).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
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
      function pnpm_FlipTs6() {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback };
        obj2 = { transform: _undefined(items, c1) };
        items = [{ perspective: 500 }, { rotateY: "90deg" }];
        obj3 = { transform: _undefined2(items1, c3, c4, c5, c6) };
        items1 = [{ perspective: 500 }, { rotateY: "0deg" }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs6.__closure = items1;
      pnpm_FlipTs6.__workletHash = 4464383552871;
      pnpm_FlipTs6.__initData = tmp4;
      return pnpm_FlipTs6;
    };
    return tmp3Result;
  }
}
_inherits(FlipInEasyY, _mod1872.ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipInEasyY();
    return tmp;
  }
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(FlipInEasyY, null, items5);
importDefaultResultResult5.presetName = "FlipInEasyY";
let closure_12 = { code: "(function pnpm_FlipTs7(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateX:'0deg'},{translateY:0}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateX:'90deg'},{translateY:-values.currentHeight}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipOutXUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipOutXUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipOutXUp);
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
      items[1] = FlipOutXUp(closure_2_1[5]).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutXUp(closure_2_1[5]).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
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
      function pnpm_FlipTs7(currentHeight) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback };
        obj2 = { transform: _undefined(items, c1) };
        items = [{ perspective: 500 }, { rotateX: "0deg" }, { translateY: 0 }];
        obj3 = { transform: _undefined2(items1, c3, c4, c5, c6) };
        items1 = [{ perspective: 500 }, { rotateX: "90deg" }, ];
        const obj4 = { translateY: -currentHeight.currentHeight };
        items1[2] = obj4;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs7.__closure = items1;
      pnpm_FlipTs7.__workletHash = 13447721233923;
      pnpm_FlipTs7.__initData = tmp4;
      return pnpm_FlipTs7;
    };
    return tmp3Result;
  }
}
_inherits(FlipOutXUp, _mod1872.ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipOutXUp();
    return tmp;
  }
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(FlipOutXUp, null, items6);
importDefaultResultResult6.presetName = "FlipOutXUp";
let closure_13 = { code: "(function pnpm_FlipTs8(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateY:'0deg'},{translateX:0}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateY:'-90deg'},{translateX:-values.currentWidth}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipOutYLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipOutYLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipOutYLeft);
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
      items[1] = FlipOutYLeft(closure_2_1[5]).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutYLeft(closure_2_1[5]).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
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
      function pnpm_FlipTs8(currentWidth) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback };
        obj2 = { transform: _undefined(items, c1) };
        items = [{ perspective: 500 }, { rotateY: "0deg" }, { translateX: 0 }];
        obj3 = { transform: _undefined2(items1, c3, c4, c5, c6) };
        items1 = [{ perspective: 500 }, { rotateY: "-90deg" }, ];
        const obj4 = { translateX: -currentWidth.currentWidth };
        items1[2] = obj4;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs8.__closure = items1;
      pnpm_FlipTs8.__workletHash = 2601392697176;
      pnpm_FlipTs8.__initData = tmp4;
      return pnpm_FlipTs8;
    };
    return tmp3Result;
  }
}
_inherits(FlipOutYLeft, _mod1872.ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipOutYLeft();
    return tmp;
  }
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(FlipOutYLeft, null, items7);
importDefaultResultResult7.presetName = "FlipOutYLeft";
let closure_14 = { code: "(function pnpm_FlipTs9(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateX:'0deg'},{translateY:0}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateX:'-90deg'},{translateY:values.currentHeight}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipOutXDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipOutXDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipOutXDown);
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
      items[1] = FlipOutXDown(closure_2_1[5]).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutXDown(closure_2_1[5]).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
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
      function pnpm_FlipTs9(currentHeight) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback };
        obj2 = { transform: _undefined(items, c1) };
        items = [{ perspective: 500 }, { rotateX: "0deg" }, { translateY: 0 }];
        obj3 = { transform: _undefined2(items1, c3, c4, c5, c6) };
        items1 = [{ perspective: 500 }, { rotateX: "-90deg" }, ];
        const obj4 = { translateY: currentHeight.currentHeight };
        items1[2] = obj4;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs9.__closure = items1;
      pnpm_FlipTs9.__workletHash = 912394207021;
      pnpm_FlipTs9.__initData = tmp4;
      return pnpm_FlipTs9;
    };
    return tmp3Result;
  }
}
_inherits(FlipOutXDown, _mod1872.ComplexAnimationBuilder);
const entry8 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipOutXDown();
    return tmp;
  }
};
const items8 = [entry8];
const importDefaultResultResult8 = _createClass(FlipOutXDown, null, items8);
importDefaultResultResult8.presetName = "FlipOutXDown";
let closure_15 = { code: "(function pnpm_FlipTs10(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateY:'0deg'},{translateX:0}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateY:'90deg'},{translateX:values.currentWidth}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipOutYRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipOutYRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipOutYRight);
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
      let items = [closure_2_15, , , , , , , , ];
      const delay = closure_0.getDelay();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[1] = FlipOutYRight(closure_2_1[5]).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutYRight(closure_2_1[5]).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
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
      function pnpm_FlipTs10(currentWidth) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback };
        obj2 = { transform: _undefined(items, c1) };
        items = [{ perspective: 500 }, { rotateY: "0deg" }, { translateX: 0 }];
        obj3 = { transform: _undefined2(items1, c3, c4, c5, c6) };
        items1 = [{ perspective: 500 }, { rotateY: "90deg" }, ];
        const obj4 = { translateX: currentWidth.currentWidth };
        items1[2] = obj4;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs10.__closure = items1;
      pnpm_FlipTs10.__workletHash = 7530259698209;
      pnpm_FlipTs10.__initData = tmp4;
      return pnpm_FlipTs10;
    };
    return tmp3Result;
  }
}
_inherits(FlipOutYRight, _mod1872.ComplexAnimationBuilder);
const entry9 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipOutYRight();
    return tmp;
  }
};
const items9 = [entry9];
const importDefaultResultResult9 = _createClass(FlipOutYRight, null, items9);
importDefaultResultResult9.presetName = "FlipOutYRight";
let closure_16 = { code: "(function pnpm_FlipTs11(){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateX:'0deg'}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateX:'90deg'}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipOutEasyX {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipOutEasyX);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipOutEasyX);
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
      items[1] = FlipOutEasyX(closure_2_1[5]).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutEasyX(closure_2_1[5]).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
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
      function pnpm_FlipTs11() {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback };
        obj2 = { transform: _undefined(items, c1) };
        items = [{ perspective: 500 }, { rotateX: "0deg" }];
        obj3 = { transform: _undefined2(items1, c3, c4, c5, c6) };
        items1 = [{ perspective: 500 }, { rotateX: "90deg" }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs11.__closure = items1;
      pnpm_FlipTs11.__workletHash = 2377676457201;
      pnpm_FlipTs11.__initData = tmp4;
      return pnpm_FlipTs11;
    };
    return tmp3Result;
  }
}
_inherits(FlipOutEasyX, _mod1872.ComplexAnimationBuilder);
const entry10 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipOutEasyX();
    return tmp;
  }
};
const items10 = [entry10];
const importDefaultResultResult10 = _createClass(FlipOutEasyX, null, items10);
importDefaultResultResult10.presetName = "FlipOutEasyX";
let closure_17 = { code: "(function pnpm_FlipTs12(){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateY:'0deg'}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateY:'90deg'}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipOutEasyY {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipOutEasyY);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipOutEasyY);
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
      items[1] = FlipOutEasyY(closure_2_1[5]).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutEasyY(closure_2_1[5]).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
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
      function pnpm_FlipTs12() {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback };
        obj2 = { transform: _undefined(items, c1) };
        items = [{ perspective: 500 }, { rotateY: "0deg" }];
        obj3 = { transform: _undefined2(items1, c3, c4, c5, c6) };
        items1 = [{ perspective: 500 }, { rotateY: "90deg" }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs12.__closure = items1;
      pnpm_FlipTs12.__workletHash = 10961347289138;
      pnpm_FlipTs12.__initData = tmp4;
      return pnpm_FlipTs12;
    };
    return tmp3Result;
  }
}
_inherits(FlipOutEasyY, _mod1872.ComplexAnimationBuilder);
const entry11 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipOutEasyY();
    return tmp;
  }
};
const items11 = [entry11];
const importDefaultResultResult11 = _createClass(FlipOutEasyY, null, items11);
importDefaultResultResult11.presetName = "FlipOutEasyY";
const FlipInXUp_export = importDefaultResultResult;
const FlipInYLeft_export = importDefaultResultResult1;
const FlipInXDown_export = importDefaultResultResult2;
const FlipInYRight_export = importDefaultResultResult3;
const FlipInEasyX_export = importDefaultResultResult4;
const FlipInEasyY_export = importDefaultResultResult5;
const FlipOutXUp_export = importDefaultResultResult6;
const FlipOutYLeft_export = importDefaultResultResult7;
const FlipOutXDown_export = importDefaultResultResult8;
const FlipOutYRight_export = importDefaultResultResult9;
const FlipOutEasyX_export = importDefaultResultResult10;
const FlipOutEasyY_export = importDefaultResultResult11;

export { FlipInXUp_export as FlipInXUp };
export { FlipInYLeft_export as FlipInYLeft };
export { FlipInXDown_export as FlipInXDown };
export { FlipInYRight_export as FlipInYRight };
export { FlipInEasyX_export as FlipInEasyX };
export { FlipInEasyY_export as FlipInEasyY };
export { FlipOutXUp_export as FlipOutXUp };
export { FlipOutYLeft_export as FlipOutYLeft };
export { FlipOutXDown_export as FlipOutXDown };
export { FlipOutYRight_export as FlipOutYRight };
export { FlipOutEasyX_export as FlipOutEasyX };
export { FlipOutEasyY_export as FlipOutEasyY };
