// Module ID: 1934
// Function ID: 1935
// Name: Bounce
// Dependencies: [41, 42, 93, 95, 98, 1839, 1935, 1872]

// Module 1934 (Bounce)
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
let closure_6 = { code: "(function pnpm_BounceTs1(){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.2,{duration:duration*0.55}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.1,{duration:duration*0.15}),withTiming(resolveTransformValue({scale:1},0,targetValues),{duration:duration*0.15})))}]},initialValues:{transform:pickTransformValues([{scale:0}],initialValues)},callback:callback};})" };
class BounceIn {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, BounceIn);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(BounceIn);
    let tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      let items = [closure_2_6, delayFunction, delay, , , , , , , , ];
      const duration = closure_0.getDuration();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[3] = BounceIn(closure_2_1[5]).withSequence;
      items[4] = BounceIn(closure_2_1[5]).withTiming;
      items[5] = duration;
      items[6] = BounceIn(closure_2_1[6]).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceIn(closure_2_1[6]).pickTransformValues;
      items[9] = initialValues;
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
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs1() {
        let items;
        let items1;
        let obj2;
        let obj7;
        let obj8;
        let tmp;
        let tmp2;
        let tmp3;
        const obj = { animations: obj2, initialValues: obj8, callback };
        obj2 = { transform: items };
        const obj3 = { scale: _undefined(c1, _undefined2(tmp, tmp2, tmp3, _undefined3(_undefined4({ scale: 1 }, 0, c6), obj7))) };
        const obj4 = { duration: 0.55 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const obj6 = { duration: 0.15 * c4 };
        tmp = _undefined3(1.2, obj4);
        obj7 = { duration: 0.15 * c4 };
        tmp2 = _undefined3(0.9, obj5);
        items = [obj3];
        tmp3 = _undefined3(1.1, obj6);
        obj8 = { transform: _undefined5(items1, c8) };
        items1 = [{ scale: 0 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs1.__closure = items1;
      pnpm_BounceTs1.__workletHash = 6753595614435;
      pnpm_BounceTs1.__initData = tmp4;
      return pnpm_BounceTs1;
    };
    return tmp3Result;
  }
}
_inherits(BounceIn, _mod1872.ComplexAnimationBuilder);
const entry = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
let items = [entry];
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceIn();
    return tmp;
  }
};
let items1 = [
  entry1,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult = _createClass(BounceIn, items, items1);
importDefaultResultResult.presetName = "BounceIn";
let closure_7 = { code: "(function pnpm_BounceTs2(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(resolveTransformValue({translateY:0},0,targetValues),{duration:duration*0.15})))}]},initialValues:{transform:pickTransformValues([{translateY:values.windowHeight}],initialValues)},callback:callback};})" };
class BounceInDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, BounceInDown);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(BounceInDown);
    let tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      let items = [closure_2_7, delayFunction, delay, , , , , , , , ];
      const duration = closure_0.getDuration();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[3] = BounceInDown(closure_2_1[5]).withSequence;
      items[4] = BounceInDown(closure_2_1[5]).withTiming;
      items[5] = duration;
      items[6] = BounceInDown(closure_2_1[6]).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceInDown(closure_2_1[6]).pickTransformValues;
      items[9] = initialValues;
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
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs2(translateY) {
        let items;
        let items1;
        let obj2;
        let obj7;
        let obj8;
        let tmp;
        let tmp2;
        let tmp3;
        const obj = { animations: obj2, initialValues: obj8, callback };
        obj2 = { transform: items };
        const obj3 = { translateY: _undefined(c1, _undefined2(tmp, tmp2, tmp3, _undefined3(_undefined4({ translateY: 0 }, 0, c6), obj7))) };
        const obj4 = { duration: 0.55 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const obj6 = { duration: 0.15 * c4 };
        tmp = _undefined3(-20, obj4);
        obj7 = { duration: 0.15 * c4 };
        tmp2 = _undefined3(10, obj5);
        items = [obj3];
        tmp3 = _undefined3(-10, obj6);
        obj8 = { transform: _undefined5(items1, c8) };
        items1 = [];
        const obj9 = { translateY: translateY.windowHeight };
        items1[0] = obj9;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs2.__closure = items1;
      pnpm_BounceTs2.__workletHash = 5802004628781;
      pnpm_BounceTs2.__initData = tmp4;
      return pnpm_BounceTs2;
    };
    return tmp3Result;
  }
}
_inherits(BounceInDown, _mod1872.ComplexAnimationBuilder);
const entry2 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items2 = [entry2];
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceInDown();
    return tmp;
  }
};
const items3 = [
  entry3,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult1 = _createClass(BounceInDown, items2, items3);
importDefaultResultResult1.presetName = "BounceInDown";
let closure_8 = { code: "(function pnpm_BounceTs3(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(resolveTransformValue({translateY:0},0,targetValues),{duration:duration*0.15})))}]},initialValues:{transform:pickTransformValues([{translateY:-values.windowHeight}],initialValues)},callback:callback};})" };
class BounceInUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, BounceInUp);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(BounceInUp);
    let tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      let items = [closure_2_8, delayFunction, delay, , , , , , , , ];
      const duration = closure_0.getDuration();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[3] = BounceInUp(closure_2_1[5]).withSequence;
      items[4] = BounceInUp(closure_2_1[5]).withTiming;
      items[5] = duration;
      items[6] = BounceInUp(closure_2_1[6]).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceInUp(closure_2_1[6]).pickTransformValues;
      items[9] = initialValues;
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
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs3(translateY) {
        let items;
        let items1;
        let obj2;
        let obj7;
        let obj8;
        let tmp;
        let tmp2;
        let tmp3;
        const obj = { animations: obj2, initialValues: obj8, callback };
        obj2 = { transform: items };
        const obj3 = { translateY: _undefined(c1, _undefined2(tmp, tmp2, tmp3, _undefined3(_undefined4({ translateY: 0 }, 0, c6), obj7))) };
        const obj4 = { duration: 0.55 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const obj6 = { duration: 0.15 * c4 };
        tmp = _undefined3(20, obj4);
        obj7 = { duration: 0.15 * c4 };
        tmp2 = _undefined3(-10, obj5);
        items = [obj3];
        tmp3 = _undefined3(10, obj6);
        obj8 = { transform: _undefined5(items1, c8) };
        items1 = [];
        const obj9 = { translateY: -translateY.windowHeight };
        items1[0] = obj9;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs3.__closure = items1;
      pnpm_BounceTs3.__workletHash = 9867045525644;
      pnpm_BounceTs3.__initData = tmp4;
      return pnpm_BounceTs3;
    };
    return tmp3Result;
  }
}
_inherits(BounceInUp, _mod1872.ComplexAnimationBuilder);
const entry4 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items4 = [entry4];
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceInUp();
    return tmp;
  }
};
const items5 = [
  entry5,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult2 = _createClass(BounceInUp, items4, items5);
importDefaultResultResult2.presetName = "BounceInUp";
let closure_9 = { code: "(function pnpm_BounceTs4(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(resolveTransformValue({translateX:0},0,targetValues),{duration:duration*0.15})))}]},initialValues:{transform:pickTransformValues([{translateX:-values.windowWidth}],initialValues)},callback:callback};})" };
class BounceInLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, BounceInLeft);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(BounceInLeft);
    let tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      let items = [closure_2_9, delayFunction, delay, , , , , , , , ];
      const duration = closure_0.getDuration();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[3] = BounceInLeft(closure_2_1[5]).withSequence;
      items[4] = BounceInLeft(closure_2_1[5]).withTiming;
      items[5] = duration;
      items[6] = BounceInLeft(closure_2_1[6]).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceInLeft(closure_2_1[6]).pickTransformValues;
      items[9] = initialValues;
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
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs4(translateX) {
        let items;
        let items1;
        let obj2;
        let obj7;
        let obj8;
        let tmp;
        let tmp2;
        let tmp3;
        const obj = { animations: obj2, initialValues: obj8, callback };
        obj2 = { transform: items };
        const obj3 = { translateX: _undefined(c1, _undefined2(tmp, tmp2, tmp3, _undefined3(_undefined4({ translateX: 0 }, 0, c6), obj7))) };
        const obj4 = { duration: 0.55 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const obj6 = { duration: 0.15 * c4 };
        tmp = _undefined3(20, obj4);
        obj7 = { duration: 0.15 * c4 };
        tmp2 = _undefined3(-10, obj5);
        items = [obj3];
        tmp3 = _undefined3(10, obj6);
        obj8 = { transform: _undefined5(items1, c8) };
        items1 = [];
        const obj9 = { translateX: -translateX.windowWidth };
        items1[0] = obj9;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs4.__closure = items1;
      pnpm_BounceTs4.__workletHash = 9019850662195;
      pnpm_BounceTs4.__initData = tmp4;
      return pnpm_BounceTs4;
    };
    return tmp3Result;
  }
}
_inherits(BounceInLeft, _mod1872.ComplexAnimationBuilder);
const entry6 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items6 = [entry6];
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceInLeft();
    return tmp;
  }
};
const items7 = [
  entry7,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult3 = _createClass(BounceInLeft, items6, items7);
importDefaultResultResult3.presetName = "BounceInLeft";
let closure_10 = { code: "(function pnpm_BounceTs5(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(resolveTransformValue({translateX:0},0,targetValues),{duration:duration*0.15})))}]},initialValues:{transform:pickTransformValues([{translateX:values.windowWidth}],initialValues)},callback:callback};})" };
class BounceInRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, BounceInRight);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(BounceInRight);
    let tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      let items = [closure_2_10, delayFunction, delay, , , , , , , , ];
      const duration = closure_0.getDuration();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[3] = BounceInRight(closure_2_1[5]).withSequence;
      items[4] = BounceInRight(closure_2_1[5]).withTiming;
      items[5] = duration;
      items[6] = BounceInRight(closure_2_1[6]).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceInRight(closure_2_1[6]).pickTransformValues;
      items[9] = initialValues;
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
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs5(translateX) {
        let items;
        let items1;
        let obj2;
        let obj7;
        let obj8;
        let tmp;
        let tmp2;
        let tmp3;
        const obj = { animations: obj2, initialValues: obj8, callback };
        obj2 = { transform: items };
        const obj3 = { translateX: _undefined(c1, _undefined2(tmp, tmp2, tmp3, _undefined3(_undefined4({ translateX: 0 }, 0, c6), obj7))) };
        const obj4 = { duration: 0.55 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const obj6 = { duration: 0.15 * c4 };
        tmp = _undefined3(-20, obj4);
        obj7 = { duration: 0.15 * c4 };
        tmp2 = _undefined3(10, obj5);
        items = [obj3];
        tmp3 = _undefined3(-10, obj6);
        obj8 = { transform: _undefined5(items1, c8) };
        items1 = [];
        const obj9 = { translateX: translateX.windowWidth };
        items1[0] = obj9;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs5.__closure = items1;
      pnpm_BounceTs5.__workletHash = 14463193545746;
      pnpm_BounceTs5.__initData = tmp4;
      return pnpm_BounceTs5;
    };
    return tmp3Result;
  }
}
_inherits(BounceInRight, _mod1872.ComplexAnimationBuilder);
const entry8 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items8 = [entry8];
const entry9 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceInRight();
    return tmp;
  }
};
const items9 = [
  entry9,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult4 = _createClass(BounceInRight, items8, items9);
importDefaultResultResult4.presetName = "BounceInRight";
let closure_11 = { code: "(function pnpm_BounceTs6(){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.1,{duration:duration*0.15}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.2,{duration:duration*0.15}),withTiming(resolveTransformValue({scale:0},0,targetValues),{duration:duration*0.55})))}]},initialValues:{transform:pickTransformValues([{scale:1}],initialValues)},callback:callback};})" };
class BounceOut {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, BounceOut);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(BounceOut);
    let tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      let items = [closure_2_11, delayFunction, delay, , , , , , , , ];
      const duration = closure_0.getDuration();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[3] = BounceOut(closure_2_1[5]).withSequence;
      items[4] = BounceOut(closure_2_1[5]).withTiming;
      items[5] = duration;
      items[6] = BounceOut(closure_2_1[6]).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceOut(closure_2_1[6]).pickTransformValues;
      items[9] = initialValues;
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
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs6() {
        let items;
        let items1;
        let obj2;
        let obj7;
        let obj8;
        let tmp;
        let tmp2;
        let tmp3;
        const obj = { animations: obj2, initialValues: obj8, callback };
        obj2 = { transform: items };
        const obj3 = { scale: _undefined(c1, _undefined2(tmp, tmp2, tmp3, _undefined3(_undefined4({ scale: 0 }, 0, c6), obj7))) };
        const obj4 = { duration: 0.15 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const obj6 = { duration: 0.15 * c4 };
        tmp = _undefined3(1.1, obj4);
        obj7 = { duration: 0.55 * c4 };
        tmp2 = _undefined3(0.9, obj5);
        items = [obj3];
        tmp3 = _undefined3(1.2, obj6);
        obj8 = { transform: _undefined5(items1, c8) };
        items1 = [{ scale: 1 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs6.__closure = items1;
      pnpm_BounceTs6.__workletHash = 5096859415204;
      pnpm_BounceTs6.__initData = tmp4;
      return pnpm_BounceTs6;
    };
    return tmp3Result;
  }
}
_inherits(BounceOut, _mod1872.ComplexAnimationBuilder);
const entry10 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items10 = [entry10];
const entry11 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceOut();
    return tmp;
  }
};
const items11 = [
  entry11,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult5 = _createClass(BounceOut, items10, items11);
importDefaultResultResult5.presetName = "BounceOut";
let closure_12 = { code: "(function pnpm_BounceTs7(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(resolveTransformValue({translateY:values.windowHeight},0,targetValues),{duration:duration*0.55})))}]},initialValues:{transform:pickTransformValues([{translateY:0}],initialValues)},callback:callback};})" };
class BounceOutDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, BounceOutDown);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(BounceOutDown);
    let tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      let items = [closure_2_12, delayFunction, delay, , , , , , , , ];
      const duration = closure_0.getDuration();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[3] = BounceOutDown(closure_2_1[5]).withSequence;
      items[4] = BounceOutDown(closure_2_1[5]).withTiming;
      items[5] = duration;
      items[6] = BounceOutDown(closure_2_1[6]).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceOutDown(closure_2_1[6]).pickTransformValues;
      items[9] = initialValues;
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
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs7(translateY) {
        let items;
        let items1;
        let obj2;
        let obj7;
        let obj8;
        let obj9;
        let tmp;
        let tmp2;
        let tmp3;
        const obj = { animations: obj2, initialValues: obj9, callback };
        obj2 = { transform: items };
        const obj3 = { translateY: _undefined(c1, _undefined2(tmp, tmp2, tmp3, _undefined3(_undefined4(obj7, 0, c6), obj8))) };
        const obj4 = { duration: 0.15 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const obj6 = { duration: 0.15 * c4 };
        tmp = _undefined3(-10, obj4);
        obj7 = { translateY: translateY.windowHeight };
        obj8 = { duration: 0.55 * c4 };
        tmp2 = _undefined3(10, obj5);
        items = [obj3];
        tmp3 = _undefined3(-20, obj6);
        obj9 = { transform: _undefined5(items1, c8) };
        items1 = [{ translateY: 0 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs7.__closure = items1;
      pnpm_BounceTs7.__workletHash = 1114803268712;
      pnpm_BounceTs7.__initData = tmp4;
      return pnpm_BounceTs7;
    };
    return tmp3Result;
  }
}
_inherits(BounceOutDown, _mod1872.ComplexAnimationBuilder);
const entry12 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items12 = [entry12];
const entry13 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceOutDown();
    return tmp;
  }
};
const items13 = [
  entry13,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult6 = _createClass(BounceOutDown, items12, items13);
importDefaultResultResult6.presetName = "BounceOutDown";
let closure_13 = { code: "(function pnpm_BounceTs8(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(resolveTransformValue({translateY:-values.windowHeight},0,targetValues),{duration:duration*0.55})))}]},initialValues:{transform:pickTransformValues([{translateY:0}],initialValues)},callback:callback};})" };
class BounceOutUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, BounceOutUp);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(BounceOutUp);
    let tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      let items = [closure_2_13, delayFunction, delay, , , , , , , , ];
      const duration = closure_0.getDuration();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[3] = BounceOutUp(closure_2_1[5]).withSequence;
      items[4] = BounceOutUp(closure_2_1[5]).withTiming;
      items[5] = duration;
      items[6] = BounceOutUp(closure_2_1[6]).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceOutUp(closure_2_1[6]).pickTransformValues;
      items[9] = initialValues;
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
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs8(translateY) {
        let items;
        let items1;
        let obj2;
        let obj7;
        let obj8;
        let obj9;
        let tmp;
        let tmp2;
        let tmp3;
        const obj = { animations: obj2, initialValues: obj9, callback };
        obj2 = { transform: items };
        const obj3 = { translateY: _undefined(c1, _undefined2(tmp, tmp2, tmp3, _undefined3(_undefined4(obj7, 0, c6), obj8))) };
        const obj4 = { duration: 0.15 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const obj6 = { duration: 0.15 * c4 };
        tmp = _undefined3(10, obj4);
        obj7 = { translateY: -translateY.windowHeight };
        obj8 = { duration: 0.55 * c4 };
        tmp2 = _undefined3(-10, obj5);
        items = [obj3];
        tmp3 = _undefined3(20, obj6);
        obj9 = { transform: _undefined5(items1, c8) };
        items1 = [{ translateY: 0 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs8.__closure = items1;
      pnpm_BounceTs8.__workletHash = 14798494424007;
      pnpm_BounceTs8.__initData = tmp4;
      return pnpm_BounceTs8;
    };
    return tmp3Result;
  }
}
_inherits(BounceOutUp, _mod1872.ComplexAnimationBuilder);
const entry14 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items14 = [entry14];
const entry15 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceOutUp();
    return tmp;
  }
};
const items15 = [
  entry15,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult7 = _createClass(BounceOutUp, items14, items15);
importDefaultResultResult7.presetName = "BounceOutUp";
let closure_14 = { code: "(function pnpm_BounceTs9(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(resolveTransformValue({translateX:-values.windowWidth},0,targetValues),{duration:duration*0.55})))}]},initialValues:{transform:pickTransformValues([{translateX:0}],initialValues)},callback:callback};})" };
class BounceOutLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, BounceOutLeft);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(BounceOutLeft);
    let tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      let items = [closure_2_14, delayFunction, delay, , , , , , , , ];
      const duration = closure_0.getDuration();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[3] = BounceOutLeft(closure_2_1[5]).withSequence;
      items[4] = BounceOutLeft(closure_2_1[5]).withTiming;
      items[5] = duration;
      items[6] = BounceOutLeft(closure_2_1[6]).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceOutLeft(closure_2_1[6]).pickTransformValues;
      items[9] = initialValues;
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
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs9(translateX) {
        let items;
        let items1;
        let obj2;
        let obj7;
        let obj8;
        let obj9;
        let tmp;
        let tmp2;
        let tmp3;
        const obj = { animations: obj2, initialValues: obj9, callback };
        obj2 = { transform: items };
        const obj3 = { translateX: _undefined(c1, _undefined2(tmp, tmp2, tmp3, _undefined3(_undefined4(obj7, 0, c6), obj8))) };
        const obj4 = { duration: 0.15 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const obj6 = { duration: 0.15 * c4 };
        tmp = _undefined3(10, obj4);
        obj7 = { translateX: -translateX.windowWidth };
        obj8 = { duration: 0.55 * c4 };
        tmp2 = _undefined3(-10, obj5);
        items = [obj3];
        tmp3 = _undefined3(20, obj6);
        obj9 = { transform: _undefined5(items1, c8) };
        items1 = [{ translateX: 0 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs9.__closure = items1;
      pnpm_BounceTs9.__workletHash = 12494614757886;
      pnpm_BounceTs9.__initData = tmp4;
      return pnpm_BounceTs9;
    };
    return tmp3Result;
  }
}
_inherits(BounceOutLeft, _mod1872.ComplexAnimationBuilder);
const entry16 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items16 = [entry16];
const entry17 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceOutLeft();
    return tmp;
  }
};
const items17 = [
  entry17,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult8 = _createClass(BounceOutLeft, items16, items17);
importDefaultResultResult8.presetName = "BounceOutLeft";
let closure_15 = { code: "(function pnpm_BounceTs10(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(resolveTransformValue({translateX:values.windowWidth},0,targetValues),{duration:duration*0.55})))}]},initialValues:{transform:pickTransformValues([{translateX:0}],initialValues)},callback:callback};})" };
class BounceOutRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, BounceOutRight);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(BounceOutRight);
    let tmp3 = c3;
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      let items = [closure_2_15, delayFunction, delay, , , , , , , , ];
      const duration = closure_0.getDuration();
      ({ callbackV, initialValues, targetValues } = closure_0);
      items[3] = BounceOutRight(closure_2_1[5]).withSequence;
      items[4] = BounceOutRight(closure_2_1[5]).withTiming;
      items[5] = duration;
      items[6] = BounceOutRight(closure_2_1[6]).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceOutRight(closure_2_1[6]).pickTransformValues;
      items[9] = initialValues;
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
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs10(translateX) {
        let items;
        let items1;
        let obj2;
        let obj7;
        let obj8;
        let obj9;
        let tmp;
        let tmp2;
        let tmp3;
        const obj = { animations: obj2, initialValues: obj9, callback };
        obj2 = { transform: items };
        const obj3 = { translateX: _undefined(c1, _undefined2(tmp, tmp2, tmp3, _undefined3(_undefined4(obj7, 0, c6), obj8))) };
        const obj4 = { duration: 0.15 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const obj6 = { duration: 0.15 * c4 };
        tmp = _undefined3(-10, obj4);
        obj7 = { translateX: translateX.windowWidth };
        obj8 = { duration: 0.55 * c4 };
        tmp2 = _undefined3(10, obj5);
        items = [obj3];
        tmp3 = _undefined3(-20, obj6);
        obj9 = { transform: _undefined5(items1, c8) };
        items1 = [{ translateX: 0 }];
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs10.__closure = items1;
      pnpm_BounceTs10.__workletHash = 11053891036006;
      pnpm_BounceTs10.__initData = tmp4;
      return pnpm_BounceTs10;
    };
    return tmp3Result;
  }
}
_inherits(BounceOutRight, _mod1872.ComplexAnimationBuilder);
const entry18 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items18 = [entry18];
const entry19 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceOutRight();
    return tmp;
  }
};
const items19 = [
  entry19,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult9 = _createClass(BounceOutRight, items18, items19);
importDefaultResultResult9.presetName = "BounceOutRight";
const BounceIn_export = importDefaultResultResult;
const BounceInDown_export = importDefaultResultResult1;
const BounceInUp_export = importDefaultResultResult2;
const BounceInLeft_export = importDefaultResultResult3;
const BounceInRight_export = importDefaultResultResult4;
const BounceOut_export = importDefaultResultResult5;
const BounceOutDown_export = importDefaultResultResult6;
const BounceOutUp_export = importDefaultResultResult7;
const BounceOutLeft_export = importDefaultResultResult8;
const BounceOutRight_export = importDefaultResultResult9;

export { BounceIn_export as BounceIn };
export { BounceInDown_export as BounceInDown };
export { BounceInUp_export as BounceInUp };
export { BounceInLeft_export as BounceInLeft };
export { BounceInRight_export as BounceInRight };
export { BounceOut_export as BounceOut };
export { BounceOutDown_export as BounceOutDown };
export { BounceOutUp_export as BounceOutUp };
export { BounceOutLeft_export as BounceOutLeft };
export { BounceOutRight_export as BounceOutRight };
