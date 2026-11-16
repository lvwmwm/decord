// Module ID: 1941
// Function ID: 1942
// Name: Lightspeed
// Dependencies: [32, 41, 42, 93, 95, 98, 1938, 1842, 1875]

// Module 1941 (Lightspeed)
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
let closure_7 = { code: "(function pnpm_LightspeedTs1(values){let[delayFunction,delay,withTiming,targetValues,duration,animation,targetTranslateX,config,withSequence,targetSkewX,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,withTiming((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(targetTranslateX,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('10deg',{duration:duration*0.7}),withTiming('-5deg',{duration:duration*0.15}),withTiming(targetSkewX,{duration:duration*0.15})))}]},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{translateX:values.windowWidth},{skewX:'-45deg'}],initialValues)},callback:callback};})" };
class LightSpeedInRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, LightSpeedInRight);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(LightSpeedInRight);
    const tmp3 = _possibleConstructorReturn;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    let tmp3Result = tmp3(self, constructResult);
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
      let tmp17;
      let tmp18;
      let tmp19;
      let tmp20;
      let tmp3;
      let tmp4;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      [tmp3, tmp4] = closure_2_2(closure_0.getAnimationAndConfig(), 2);
      const tmp2 = closure_2_2(closure_0.getAnimationAndConfig(), 2);
      const delay = closure_0.getDelay();
      const targetValues = closure_0.targetValues;
      const duration = closure_0.getDuration();
      ({ callbackV, initialValues } = closure_0);
      let obj = LightSpeedInRight(closure_2_1[6]);
      const value = obj.resolveTransformSlot({ translateX: 0 }, 0, targetValues).value;
      let obj2 = LightSpeedInRight(closure_2_1[6]);
      let items = [closure_2_7, delayFunction, delay, , , , , , , , , , , ];
      const value2 = obj2.resolveTransformSlot({ skewX: "0deg" }, 1, targetValues).value;
      items[3] = LightSpeedInRight(closure_2_1[7]).withTiming;
      items[4] = targetValues;
      items[5] = duration;
      items[6] = tmp3;
      items[7] = value;
      items[8] = tmp4;
      items[9] = LightSpeedInRight(closure_2_1[7]).withSequence;
      items[10] = value2;
      items[11] = initialValues;
      items[12] = LightSpeedInRight(closure_2_1[6]).pickTransformValues;
      items[13] = callbackV;
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
      let c10;
      let c11;
      let c12;
      [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items;
      function pnpm_LightspeedTs1(translateX) {
        let items;
        let items1;
        let obj10;
        let obj2;
        let obj3;
        let obj5;
        let obj9;
        let tmp3Result;
        let tmp3Result2;
        let num;
        if (_undefined != null) {
          num = _undefined.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: obj2, initialValues: obj10, callback };
        obj2 = { opacity: _undefined(c1, _undefined2(num, obj3)), transform: items };
        obj3 = { duration };
        const obj4 = { translateX: _undefined(c1, _undefined2(c6, obj5)) };
        obj5 = { duration: 0.7 * duration };
        const merged = Object.assign(c7);
        items = [obj4, ];
        const obj6 = { skewX: _undefined(c1, _undefined3(tmp3Result, tmp3Result2, _undefined2(c9, obj9))) };
        const obj7 = { duration: 0.7 * duration };
        const obj8 = { duration: 0.15 * duration };
        obj9 = { duration: 0.15 * duration };
        tmp3Result = _undefined2("10deg", obj7);
        items[1] = obj6;
        let num2;
        tmp3Result2 = _undefined2("-5deg", obj8);
        if (c10 != null) {
          num2 = tmp7.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj10 = { opacity: num2, transform: _undefined4(items1, c10) };
        items1 = [, ];
        const obj11 = { translateX: translateX.windowWidth };
        items1[0] = obj11;
        items1[1] = { skewX: "-45deg" };
        return obj;
      }
      let items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
      pnpm_LightspeedTs1.__closure = items1;
      pnpm_LightspeedTs1.__workletHash = 4282246318383;
      pnpm_LightspeedTs1.__initData = tmp7;
      return pnpm_LightspeedTs1;
    };
    return tmp3Result;
  }
}
_inherits(LightSpeedInRight, _mod1875.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = LightSpeedInRight();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(LightSpeedInRight, null, items);
importDefaultResultResult.presetName = "LightSpeedInRight";
let closure_8 = { code: "(function pnpm_LightspeedTs2(values){let[delayFunction,delay,withTiming,targetValues,duration,animation,targetTranslateX,config,withSequence,targetSkewX,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,withTiming((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(targetTranslateX,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('-10deg',{duration:duration*0.7}),withTiming('5deg',{duration:duration*0.15}),withTiming(targetSkewX,{duration:duration*0.15})))}]},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{translateX:-values.windowWidth},{skewX:'45deg'}],initialValues)},callback:callback};})" };
class LightSpeedInLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, LightSpeedInLeft);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(LightSpeedInLeft);
    const tmp3 = _possibleConstructorReturn;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    let tmp3Result = tmp3(self, constructResult);
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
      let tmp17;
      let tmp18;
      let tmp19;
      let tmp20;
      let tmp3;
      let tmp4;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      [tmp3, tmp4] = closure_2_2(closure_0.getAnimationAndConfig(), 2);
      const tmp2 = closure_2_2(closure_0.getAnimationAndConfig(), 2);
      const delay = closure_0.getDelay();
      const targetValues = closure_0.targetValues;
      const duration = closure_0.getDuration();
      ({ callbackV, initialValues } = closure_0);
      let obj = LightSpeedInLeft(closure_2_1[6]);
      const value = obj.resolveTransformSlot({ translateX: 0 }, 0, targetValues).value;
      let obj2 = LightSpeedInLeft(closure_2_1[6]);
      let items = [closure_2_8, delayFunction, delay, , , , , , , , , , , ];
      const value2 = obj2.resolveTransformSlot({ skewX: "0deg" }, 1, targetValues).value;
      items[3] = LightSpeedInLeft(closure_2_1[7]).withTiming;
      items[4] = targetValues;
      items[5] = duration;
      items[6] = tmp3;
      items[7] = value;
      items[8] = tmp4;
      items[9] = LightSpeedInLeft(closure_2_1[7]).withSequence;
      items[10] = value2;
      items[11] = initialValues;
      items[12] = LightSpeedInLeft(closure_2_1[6]).pickTransformValues;
      items[13] = callbackV;
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
      let c10;
      let c11;
      let c12;
      [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items;
      function pnpm_LightspeedTs2(translateX) {
        let items;
        let items1;
        let obj10;
        let obj2;
        let obj3;
        let obj5;
        let obj9;
        let tmp3Result;
        let tmp3Result2;
        let num;
        if (_undefined != null) {
          num = _undefined.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: obj2, initialValues: obj10, callback };
        obj2 = { opacity: _undefined(c1, _undefined2(num, obj3)), transform: items };
        obj3 = { duration };
        const obj4 = { translateX: _undefined(c1, _undefined2(c6, obj5)) };
        obj5 = { duration: 0.7 * duration };
        const merged = Object.assign(c7);
        items = [obj4, ];
        const obj6 = { skewX: _undefined(c1, _undefined3(tmp3Result, tmp3Result2, _undefined2(c9, obj9))) };
        const obj7 = { duration: 0.7 * duration };
        const obj8 = { duration: 0.15 * duration };
        obj9 = { duration: 0.15 * duration };
        tmp3Result = _undefined2("-10deg", obj7);
        items[1] = obj6;
        let num2;
        tmp3Result2 = _undefined2("5deg", obj8);
        if (c10 != null) {
          num2 = tmp7.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj10 = { opacity: num2, transform: _undefined4(items1, c10) };
        items1 = [, ];
        const obj11 = { translateX: -translateX.windowWidth };
        items1[0] = obj11;
        items1[1] = { skewX: "45deg" };
        return obj;
      }
      let items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
      pnpm_LightspeedTs2.__closure = items1;
      pnpm_LightspeedTs2.__workletHash = 1339002426508;
      pnpm_LightspeedTs2.__initData = tmp7;
      return pnpm_LightspeedTs2;
    };
    return tmp3Result;
  }
}
_inherits(LightSpeedInLeft, _mod1875.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = LightSpeedInLeft();
    return tmp;
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(LightSpeedInLeft, null, items1);
importDefaultResultResult1.presetName = "LightSpeedInLeft";
let closure_9 = { code: "(function pnpm_LightspeedTs3(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{translateX:values.windowWidth},{skewX:'-45deg'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{translateX:0},{skewX:'0deg'}],initialValues)},callback:callback};})" };
class LightSpeedOutRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, LightSpeedOutRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(LightSpeedOutRight);
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
      let items = [closure_2_9, delayFunction, closure_0.getDelay(), tmp4, closure_0.targetValues, tmp5, , , , , ];
      ({ callbackV, initialValues } = closure_0);
      items[6] = LightSpeedOutRight(closure_2_1[6]).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = LightSpeedOutRight(closure_2_1[6]).pickTransformValues;
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
      function pnpm_LightspeedTs3(translateX) {
        let items;
        let items1;
        let obj2;
        let obj4;
        let num;
        const tmp3 = c2;
        if (c3 != null) {
          num = tmp4.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: obj2, initialValues: obj4, callback };
        obj2 = { opacity: _undefined(c1, tmp3(num, c4)), transform: _undefined(items, c3, c6, _undefined, c1) };
        items = [, ];
        const obj3 = { translateX: translateX.windowWidth };
        items[0] = obj3;
        items[1] = { skewX: "-45deg" };
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        obj4 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ translateX: 0 }, { skewX: "0deg" }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_LightspeedTs3.__closure = items1;
      pnpm_LightspeedTs3.__workletHash = 6593986078119;
      pnpm_LightspeedTs3.__initData = tmp6;
      return pnpm_LightspeedTs3;
    };
    return tmp3Result;
  }
}
_inherits(LightSpeedOutRight, _mod1875.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = LightSpeedOutRight();
    return tmp;
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(LightSpeedOutRight, null, items2);
importDefaultResultResult2.presetName = "LightSpeedOutRight";
let closure_10 = { code: "(function pnpm_LightspeedTs4(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{translateX:-values.windowWidth},{skewX:'45deg'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{translateX:0},{skewX:'0deg'}],initialValues)},callback:callback};})" };
class LightSpeedOutLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, LightSpeedOutLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(LightSpeedOutLeft);
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
      let items = [closure_2_10, delayFunction, closure_0.getDelay(), tmp4, closure_0.targetValues, tmp5, , , , , ];
      ({ callbackV, initialValues } = closure_0);
      items[6] = LightSpeedOutLeft(closure_2_1[6]).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = LightSpeedOutLeft(closure_2_1[6]).pickTransformValues;
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
      function pnpm_LightspeedTs4(translateX) {
        let items;
        let items1;
        let obj2;
        let obj4;
        let num;
        const tmp3 = c2;
        if (c3 != null) {
          num = tmp4.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: obj2, initialValues: obj4, callback };
        obj2 = { opacity: _undefined(c1, tmp3(num, c4)), transform: _undefined(items, c3, c6, _undefined, c1) };
        items = [, ];
        const obj3 = { translateX: -translateX.windowWidth };
        items[0] = obj3;
        items[1] = { skewX: "45deg" };
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        obj4 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ translateX: 0 }, { skewX: "0deg" }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_LightspeedTs4.__closure = items1;
      pnpm_LightspeedTs4.__workletHash = 9277804341472;
      pnpm_LightspeedTs4.__initData = tmp6;
      return pnpm_LightspeedTs4;
    };
    return tmp3Result;
  }
}
_inherits(LightSpeedOutLeft, _mod1875.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = LightSpeedOutLeft();
    return tmp;
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(LightSpeedOutLeft, null, items3);
importDefaultResultResult3.presetName = "LightSpeedOutLeft";
const LightSpeedInRight_export = importDefaultResultResult;
const LightSpeedInLeft_export = importDefaultResultResult1;
const LightSpeedOutRight_export = importDefaultResultResult2;
const LightSpeedOutLeft_export = importDefaultResultResult3;

export { LightSpeedInRight_export as LightSpeedInRight };
export { LightSpeedInLeft_export as LightSpeedInLeft };
export { LightSpeedOutRight_export as LightSpeedOutRight };
export { LightSpeedOutLeft_export as LightSpeedOutLeft };
