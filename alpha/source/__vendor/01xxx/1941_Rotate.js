// Module ID: 1941
// Function ID: 1942
// Name: Rotate
// Dependencies: [32, 41, 42, 93, 95, 98, 1935, 1872]

// Module 1941 (Rotate)
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
let closure_7 = { code: "(function pnpm_RotateTs1(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{rotate:'0deg'},{translateX:0},{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{rotate:'-90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],initialValues)},callback:callback};})" };
class RotateInDownLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateInDownLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateInDownLeft);
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
      items[6] = RotateInDownLeft(closure_2_1[6]).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateInDownLeft(closure_2_1[6]).pickTransformValues;
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
      function pnpm_RotateTs1(targetWidth) {
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
        items = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj3 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ rotate: "-90deg" }, , ];
        const obj4 = { translateX: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        items1[1] = obj4;
        items1[2] = { translateY: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs1.__closure = items1;
      pnpm_RotateTs1.__workletHash = 16688795394445;
      pnpm_RotateTs1.__initData = tmp6;
      return pnpm_RotateTs1;
    };
    return tmp3Result;
  }
}
_inherits(RotateInDownLeft, _mod1872.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateInDownLeft();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(RotateInDownLeft, null, items);
importDefaultResultResult.presetName = "RotateInDownLeft";
let closure_8 = { code: "(function pnpm_RotateTs2(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{rotate:'0deg'},{translateX:0},{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{rotate:'90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],initialValues)},callback:callback};})" };
class RotateInDownRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateInDownRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateInDownRight);
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
      items[6] = RotateInDownRight(closure_2_1[6]).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateInDownRight(closure_2_1[6]).pickTransformValues;
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
      function pnpm_RotateTs2(targetWidth) {
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
        items = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj3 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ rotate: "90deg" }, , ];
        const obj4 = { translateX: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        items1[1] = obj4;
        items1[2] = { translateY: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs2.__closure = items1;
      pnpm_RotateTs2.__workletHash = 15126500794383;
      pnpm_RotateTs2.__initData = tmp6;
      return pnpm_RotateTs2;
    };
    return tmp3Result;
  }
}
_inherits(RotateInDownRight, _mod1872.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateInDownRight();
    return tmp;
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(RotateInDownRight, null, items1);
importDefaultResultResult1.presetName = "RotateInDownRight";
let closure_9 = { code: "(function pnpm_RotateTs3(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{rotate:'0deg'},{translateX:0},{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{rotate:'90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:values.targetWidth/2-values.targetHeight/2}],initialValues)},callback:callback};})" };
class RotateInUpLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateInUpLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateInUpLeft);
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
      items[6] = RotateInUpLeft(closure_2_1[6]).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateInUpLeft(closure_2_1[6]).pickTransformValues;
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
      function pnpm_RotateTs3(targetWidth) {
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
        items = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj3 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ rotate: "90deg" }, , ];
        const obj4 = { translateX: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        items1[1] = obj4;
        items1[2] = { translateY: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs3.__closure = items1;
      pnpm_RotateTs3.__workletHash = 15936156537486;
      pnpm_RotateTs3.__initData = tmp6;
      return pnpm_RotateTs3;
    };
    return tmp3Result;
  }
}
_inherits(RotateInUpLeft, _mod1872.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateInUpLeft();
    return tmp;
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(RotateInUpLeft, null, items2);
importDefaultResultResult2.presetName = "RotateInUpLeft";
let closure_10 = { code: "(function pnpm_RotateTs4(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{rotate:'0deg'},{translateX:0},{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{rotate:'-90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:values.targetWidth/2-values.targetHeight/2}],initialValues)},callback:callback};})" };
class RotateInUpRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateInUpRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateInUpRight);
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
      items[6] = RotateInUpRight(closure_2_1[6]).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateInUpRight(closure_2_1[6]).pickTransformValues;
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
      function pnpm_RotateTs4(targetWidth) {
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
        items = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj3 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ rotate: "-90deg" }, , ];
        const obj4 = { translateX: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        items1[1] = obj4;
        items1[2] = { translateY: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs4.__closure = items1;
      pnpm_RotateTs4.__workletHash = 17232803705352;
      pnpm_RotateTs4.__initData = tmp6;
      return pnpm_RotateTs4;
    };
    return tmp3Result;
  }
}
_inherits(RotateInUpRight, _mod1872.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateInUpRight();
    return tmp;
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(RotateInUpRight, null, items3);
importDefaultResultResult3.presetName = "RotateInUpRight";
let closure_11 = { code: "(function pnpm_RotateTs5(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{rotate:'90deg'},{translateX:values.currentWidth/2-values.currentHeight/2},{translateY:values.currentWidth/2-values.currentHeight/2}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{rotate:'0deg'},{translateX:0},{translateY:0}],initialValues)},callback:callback};})" };
class RotateOutDownLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateOutDownLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateOutDownLeft);
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
      let items = [closure_2_11, delayFunction, closure_0.getDelay(), tmp4, closure_0.targetValues, tmp5, , , , , ];
      ({ callbackV, initialValues } = closure_0);
      items[6] = RotateOutDownLeft(closure_2_1[6]).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateOutDownLeft(closure_2_1[6]).pickTransformValues;
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
      function pnpm_RotateTs5(currentWidth) {
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
        items = [{ rotate: "90deg" }, , ];
        const obj3 = { translateX: currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 };
        items[1] = obj3;
        items[2] = { translateY: currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 };
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        obj4 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs5.__closure = items1;
      pnpm_RotateTs5.__workletHash = 14008835615720;
      pnpm_RotateTs5.__initData = tmp6;
      return pnpm_RotateTs5;
    };
    return tmp3Result;
  }
}
_inherits(RotateOutDownLeft, _mod1872.ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateOutDownLeft();
    return tmp;
  }
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(RotateOutDownLeft, null, items4);
importDefaultResultResult4.presetName = "RotateOutDownLeft";
let closure_12 = { code: "(function pnpm_RotateTs6(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{rotate:'-90deg'},{translateX:-(values.currentWidth/2-values.currentHeight/2)},{translateY:values.currentWidth/2-values.currentHeight/2}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{rotate:'0deg'},{translateX:0},{translateY:0}],initialValues)},callback:callback};})" };
class RotateOutDownRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateOutDownRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateOutDownRight);
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
      let items = [closure_2_12, delayFunction, closure_0.getDelay(), tmp4, closure_0.targetValues, tmp5, , , , , ];
      ({ callbackV, initialValues } = closure_0);
      items[6] = RotateOutDownRight(closure_2_1[6]).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateOutDownRight(closure_2_1[6]).pickTransformValues;
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
      function pnpm_RotateTs6(currentWidth) {
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
        items = [{ rotate: "-90deg" }, , ];
        const obj3 = { translateX: -currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 };
        items[1] = obj3;
        items[2] = { translateY: currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 };
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        obj4 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs6.__closure = items1;
      pnpm_RotateTs6.__workletHash = 10711909285258;
      pnpm_RotateTs6.__initData = tmp6;
      return pnpm_RotateTs6;
    };
    return tmp3Result;
  }
}
_inherits(RotateOutDownRight, _mod1872.ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateOutDownRight();
    return tmp;
  }
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(RotateOutDownRight, null, items5);
importDefaultResultResult5.presetName = "RotateOutDownRight";
let closure_13 = { code: "(function pnpm_RotateTs7(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{rotate:'-90deg'},{translateX:values.currentWidth/2-values.currentHeight/2},{translateY:-(values.currentWidth/2-values.currentHeight/2)}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{rotate:'0deg'},{translateX:0},{translateY:0}],initialValues)},callback:callback};})" };
class RotateOutUpLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateOutUpLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateOutUpLeft);
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
      let items = [closure_2_13, delayFunction, closure_0.getDelay(), tmp4, closure_0.targetValues, tmp5, , , , , ];
      ({ callbackV, initialValues } = closure_0);
      items[6] = RotateOutUpLeft(closure_2_1[6]).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateOutUpLeft(closure_2_1[6]).pickTransformValues;
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
      function pnpm_RotateTs7(currentWidth) {
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
        items = [{ rotate: "-90deg" }, , ];
        const obj3 = { translateX: currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 };
        items[1] = obj3;
        items[2] = { translateY: -currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 };
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        obj4 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs7.__closure = items1;
      pnpm_RotateTs7.__workletHash = 12770726146315;
      pnpm_RotateTs7.__initData = tmp6;
      return pnpm_RotateTs7;
    };
    return tmp3Result;
  }
}
_inherits(RotateOutUpLeft, _mod1872.ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateOutUpLeft();
    return tmp;
  }
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(RotateOutUpLeft, null, items6);
importDefaultResultResult6.presetName = "RotateOutUpLeft";
let closure_14 = { code: "(function pnpm_RotateTs8(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{rotate:'90deg'},{translateX:-(values.currentWidth/2-values.currentHeight/2)},{translateY:-(values.currentWidth/2-values.currentHeight/2)}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{rotate:'0deg'},{translateX:0},{translateY:0}],initialValues)},callback:callback};})" };
class RotateOutUpRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateOutUpRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateOutUpRight);
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
      let items = [closure_2_14, delayFunction, closure_0.getDelay(), tmp4, closure_0.targetValues, tmp5, , , , , ];
      ({ callbackV, initialValues } = closure_0);
      items[6] = RotateOutUpRight(closure_2_1[6]).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateOutUpRight(closure_2_1[6]).pickTransformValues;
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
      function pnpm_RotateTs8(currentWidth) {
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
        items = [{ rotate: "90deg" }, , ];
        const obj3 = { translateX: -currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 };
        items[1] = obj3;
        items[2] = { translateY: -currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 };
        let num2;
        if (c7 != null) {
          num2 = tmp5.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        obj4 = { opacity: num2, transform: _undefined2(items1, c7) };
        items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs8.__closure = items1;
      pnpm_RotateTs8.__workletHash = 4827200323429;
      pnpm_RotateTs8.__initData = tmp6;
      return pnpm_RotateTs8;
    };
    return tmp3Result;
  }
}
_inherits(RotateOutUpRight, _mod1872.ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateOutUpRight();
    return tmp;
  }
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(RotateOutUpRight, null, items7);
importDefaultResultResult7.presetName = "RotateOutUpRight";
const RotateInDownLeft_export = importDefaultResultResult;
const RotateInDownRight_export = importDefaultResultResult1;
const RotateInUpLeft_export = importDefaultResultResult2;
const RotateInUpRight_export = importDefaultResultResult3;
const RotateOutDownLeft_export = importDefaultResultResult4;
const RotateOutDownRight_export = importDefaultResultResult5;
const RotateOutUpLeft_export = importDefaultResultResult6;
const RotateOutUpRight_export = importDefaultResultResult7;

export { RotateInDownLeft_export as RotateInDownLeft };
export { RotateInDownRight_export as RotateInDownRight };
export { RotateInUpLeft_export as RotateInUpLeft };
export { RotateInUpRight_export as RotateInUpRight };
export { RotateOutDownLeft_export as RotateOutDownLeft };
export { RotateOutDownRight_export as RotateOutDownRight };
export { RotateOutUpLeft_export as RotateOutUpLeft };
export { RotateOutUpRight_export as RotateOutUpRight };
