// Module ID: 1945
// Function ID: 1946
// Name: Slide
// Dependencies: [32, 41, 42, 93, 95, 98, 1875]

// Module 1945 (Slide)
import _mod1875 from "module_1875" /* 1875 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c2_mod from "_possibleConstructorReturn" /* 93 */;
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
let c2 = c2_mod;
let closure_5 = { code: "(function pnpm_SlideTs1(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originX,_targetValues;return{animations:{originX:delayFunction(delay,animation((_targetValues$originX=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originX)!==null&&_targetValues$originX!==void 0?_targetValues$originX:values.targetOriginX,config))},initialValues:{originX:values.targetOriginX+values.windowWidth,...initialValues},callback:callback};})" };
class SlideInRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, SlideInRight);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(SlideInRight);
    const tmp3 = c2;
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
      const tmp2 = SlideInRight(closure_0.getAnimationAndConfig(), 2);
      [tmp3, tmp4] = tmp2;
      const items = [closure_2_5, delayFunction, closure_0.getDelay(), tmp3, closure_0.targetValues, tmp4, , ];
      ({ initialValues: arr[6], callbackV: arr[7] } = closure_0);
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs1(targetOriginX) {
        let obj3;
        let originX;
        if (_undefined != null) {
          originX = _undefined.originX;
        }
        if (originX == null) {
          originX = targetOriginX.targetOriginX;
        }
        const obj = { animations: { originX: _undefined(c1, _undefined2(originX, c4)) }, initialValues: obj3, callback };
        ({ originX: _undefined(c1, _undefined2(originX, c4)) });
        obj3 = { originX: targetOriginX.targetOriginX + targetOriginX.windowWidth };
        const merged = Object.assign(c5);
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs1.__closure = items1;
      pnpm_SlideTs1.__workletHash = 16530228291268;
      pnpm_SlideTs1.__initData = tmp5;
      return pnpm_SlideTs1;
    };
    return tmp3Result;
  }
}
_inherits(SlideInRight, _mod1875.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideInRight();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(SlideInRight, null, items);
importDefaultResultResult.presetName = "SlideInRight";
let closure_6 = { code: "(function pnpm_SlideTs2(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originX,_targetValues;return{animations:{originX:delayFunction(delay,animation((_targetValues$originX=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originX)!==null&&_targetValues$originX!==void 0?_targetValues$originX:values.targetOriginX,config))},initialValues:{originX:values.targetOriginX-values.windowWidth,...initialValues},callback:callback};})" };
class SlideInLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, SlideInLeft);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(SlideInLeft);
    const tmp3 = c2;
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
      const tmp2 = SlideInLeft(closure_0.getAnimationAndConfig(), 2);
      [tmp3, tmp4] = tmp2;
      const items = [closure_2_6, delayFunction, closure_0.getDelay(), tmp3, closure_0.targetValues, tmp4, , ];
      ({ initialValues: arr[6], callbackV: arr[7] } = closure_0);
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs2(targetOriginX) {
        let obj3;
        let originX;
        if (_undefined != null) {
          originX = _undefined.originX;
        }
        if (originX == null) {
          originX = targetOriginX.targetOriginX;
        }
        const obj = { animations: { originX: _undefined(c1, _undefined2(originX, c4)) }, initialValues: obj3, callback };
        ({ originX: _undefined(c1, _undefined2(originX, c4)) });
        obj3 = { originX: targetOriginX.targetOriginX - targetOriginX.windowWidth };
        const merged = Object.assign(c5);
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs2.__closure = items1;
      pnpm_SlideTs2.__workletHash = 16677746836097;
      pnpm_SlideTs2.__initData = tmp5;
      return pnpm_SlideTs2;
    };
    return tmp3Result;
  }
}
_inherits(SlideInLeft, _mod1875.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideInLeft();
    return tmp;
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(SlideInLeft, null, items1);
importDefaultResultResult1.presetName = "SlideInLeft";
let closure_7 = { code: "(function pnpm_SlideTs3(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originX,_targetValues;return{animations:{originX:delayFunction(delay,animation((_targetValues$originX=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originX)!==null&&_targetValues$originX!==void 0?_targetValues$originX:Math.max(values.currentOriginX+values.windowWidth,values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};})" };
class SlideOutRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, SlideOutRight);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(SlideOutRight);
    const tmp3 = c2;
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
      const tmp2 = SlideOutRight(closure_0.getAnimationAndConfig(), 2);
      [tmp3, tmp4] = tmp2;
      const items = [closure_2_7, delayFunction, closure_0.getDelay(), tmp3, closure_0.targetValues, tmp4, , ];
      ({ initialValues: arr[6], callbackV: arr[7] } = closure_0);
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs3(currentOriginX) {
        let obj3;
        let originX;
        if (_undefined != null) {
          originX = _undefined.originX;
        }
        if (originX == null) {
          const _Math = Math;
          originX = Math.max(currentOriginX.currentOriginX + currentOriginX.windowWidth, currentOriginX.windowWidth);
        }
        const obj = { animations: { originX: _undefined(c1, _undefined2(originX, c4)) }, initialValues: obj3, callback };
        ({ originX: _undefined(c1, _undefined2(originX, c4)) });
        obj3 = { originX: currentOriginX.currentOriginX };
        const merged = Object.assign(c5);
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs3.__closure = items1;
      pnpm_SlideTs3.__workletHash = 3867191970045;
      pnpm_SlideTs3.__initData = tmp5;
      return pnpm_SlideTs3;
    };
    return tmp3Result;
  }
}
_inherits(SlideOutRight, _mod1875.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideOutRight();
    return tmp;
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(SlideOutRight, null, items2);
importDefaultResultResult2.presetName = "SlideOutRight";
let closure_8 = { code: "(function pnpm_SlideTs4(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originX,_targetValues;return{animations:{originX:delayFunction(delay,animation((_targetValues$originX=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originX)!==null&&_targetValues$originX!==void 0?_targetValues$originX:Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};})" };
class SlideOutLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, SlideOutLeft);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(SlideOutLeft);
    const tmp3 = c2;
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
      const tmp2 = SlideOutLeft(closure_0.getAnimationAndConfig(), 2);
      [tmp3, tmp4] = tmp2;
      const items = [closure_2_8, delayFunction, closure_0.getDelay(), tmp3, closure_0.targetValues, tmp4, , ];
      ({ initialValues: arr[6], callbackV: arr[7] } = closure_0);
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs4(currentOriginX) {
        let obj3;
        let originX;
        if (_undefined != null) {
          originX = _undefined.originX;
        }
        if (originX == null) {
          const _Math = Math;
          originX = Math.min(currentOriginX.currentOriginX - currentOriginX.windowWidth, -currentOriginX.windowWidth);
        }
        const obj = { animations: { originX: _undefined(c1, _undefined2(originX, c4)) }, initialValues: obj3, callback };
        ({ originX: _undefined(c1, _undefined2(originX, c4)) });
        obj3 = { originX: currentOriginX.currentOriginX };
        const merged = Object.assign(c5);
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs4.__closure = items1;
      pnpm_SlideTs4.__workletHash = 14708395216463;
      pnpm_SlideTs4.__initData = tmp5;
      return pnpm_SlideTs4;
    };
    return tmp3Result;
  }
}
_inherits(SlideOutLeft, _mod1875.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideOutLeft();
    return tmp;
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(SlideOutLeft, null, items3);
importDefaultResultResult3.presetName = "SlideOutLeft";
let closure_9 = { code: "(function pnpm_SlideTs5(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originY,_targetValues;return{animations:{originY:delayFunction(delay,animation((_targetValues$originY=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originY)!==null&&_targetValues$originY!==void 0?_targetValues$originY:values.targetOriginY,config))},initialValues:{originY:-values.windowHeight,...initialValues},callback:callback};})" };
class SlideInUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, SlideInUp);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(SlideInUp);
    const tmp3 = c2;
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
      const tmp2 = SlideInUp(closure_0.getAnimationAndConfig(), 2);
      [tmp3, tmp4] = tmp2;
      const items = [closure_2_9, delayFunction, closure_0.getDelay(), tmp3, closure_0.targetValues, tmp4, , ];
      ({ initialValues: arr[6], callbackV: arr[7] } = closure_0);
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs5(originY) {
        let obj3;
        originY = undefined;
        if (_undefined != null) {
          originY = _undefined.originY;
        }
        if (originY == null) {
          originY = originY.targetOriginY;
        }
        const obj = { animations: { originY: _undefined(c1, _undefined2(originY, c4)) }, initialValues: obj3, callback };
        ({ originY: _undefined(c1, _undefined2(originY, c4)) });
        obj3 = { originY: -originY.windowHeight };
        const merged = Object.assign(c5);
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs5.__closure = items1;
      pnpm_SlideTs5.__workletHash = 17244972260532;
      pnpm_SlideTs5.__initData = tmp5;
      return pnpm_SlideTs5;
    };
    return tmp3Result;
  }
}
_inherits(SlideInUp, _mod1875.ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideInUp();
    return tmp;
  }
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(SlideInUp, null, items4);
importDefaultResultResult4.presetName = "SlideInUp";
let closure_10 = { code: "(function pnpm_SlideTs6(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originY,_targetValues;return{animations:{originY:delayFunction(delay,animation((_targetValues$originY=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originY)!==null&&_targetValues$originY!==void 0?_targetValues$originY:values.targetOriginY,config))},initialValues:{originY:values.targetOriginY+values.windowHeight,...initialValues},callback:callback};})" };
class SlideInDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, SlideInDown);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(SlideInDown);
    const tmp3 = c2;
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
      const tmp2 = SlideInDown(closure_0.getAnimationAndConfig(), 2);
      [tmp3, tmp4] = tmp2;
      const items = [closure_2_10, delayFunction, closure_0.getDelay(), tmp3, closure_0.targetValues, tmp4, , ];
      ({ initialValues: arr[6], callbackV: arr[7] } = closure_0);
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs6(targetOriginY) {
        let obj3;
        let originY;
        if (_undefined != null) {
          originY = _undefined.originY;
        }
        if (originY == null) {
          originY = targetOriginY.targetOriginY;
        }
        const obj = { animations: { originY: _undefined(c1, _undefined2(originY, c4)) }, initialValues: obj3, callback };
        ({ originY: _undefined(c1, _undefined2(originY, c4)) });
        obj3 = { originY: targetOriginY.targetOriginY + targetOriginY.windowHeight };
        const merged = Object.assign(c5);
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs6.__closure = items1;
      pnpm_SlideTs6.__workletHash = 10159826988731;
      pnpm_SlideTs6.__initData = tmp5;
      return pnpm_SlideTs6;
    };
    return tmp3Result;
  }
}
_inherits(SlideInDown, _mod1875.ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideInDown();
    return tmp;
  }
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(SlideInDown, null, items5);
importDefaultResultResult5.presetName = "SlideInDown";
let closure_11 = { code: "(function pnpm_SlideTs7(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originY,_targetValues;return{animations:{originY:delayFunction(delay,animation((_targetValues$originY=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originY)!==null&&_targetValues$originY!==void 0?_targetValues$originY:Math.min(values.currentOriginY-values.windowHeight,-values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};})" };
class SlideOutUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, SlideOutUp);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(SlideOutUp);
    const tmp3 = c2;
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
      const tmp2 = SlideOutUp(closure_0.getAnimationAndConfig(), 2);
      [tmp3, tmp4] = tmp2;
      const items = [closure_2_11, delayFunction, closure_0.getDelay(), tmp3, closure_0.targetValues, tmp4, , ];
      ({ initialValues: arr[6], callbackV: arr[7] } = closure_0);
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs7(currentOriginY) {
        let obj3;
        let originY;
        if (_undefined != null) {
          originY = _undefined.originY;
        }
        if (originY == null) {
          const _Math = Math;
          originY = Math.min(currentOriginY.currentOriginY - currentOriginY.windowHeight, -currentOriginY.windowHeight);
        }
        const obj = { animations: { originY: _undefined(c1, _undefined2(originY, c4)) }, initialValues: obj3, callback };
        ({ originY: _undefined(c1, _undefined2(originY, c4)) });
        obj3 = { originY: currentOriginY.currentOriginY };
        const merged = Object.assign(c5);
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs7.__closure = items1;
      pnpm_SlideTs7.__workletHash = 8192684461325;
      pnpm_SlideTs7.__initData = tmp5;
      return pnpm_SlideTs7;
    };
    return tmp3Result;
  }
}
_inherits(SlideOutUp, _mod1875.ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideOutUp();
    return tmp;
  }
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(SlideOutUp, null, items6);
importDefaultResultResult6.presetName = "SlideOutUp";
let closure_12 = { code: "(function pnpm_SlideTs8(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originY,_targetValues;return{animations:{originY:delayFunction(delay,animation((_targetValues$originY=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originY)!==null&&_targetValues$originY!==void 0?_targetValues$originY:Math.max(values.currentOriginY+values.windowHeight,values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};})" };
class SlideOutDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, SlideOutDown);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(SlideOutDown);
    const tmp3 = c2;
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
      const tmp2 = SlideOutDown(closure_0.getAnimationAndConfig(), 2);
      [tmp3, tmp4] = tmp2;
      const items = [closure_2_12, delayFunction, closure_0.getDelay(), tmp3, closure_0.targetValues, tmp4, , ];
      ({ initialValues: arr[6], callbackV: arr[7] } = closure_0);
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs8(currentOriginY) {
        let obj3;
        let originY;
        if (_undefined != null) {
          originY = _undefined.originY;
        }
        if (originY == null) {
          const _Math = Math;
          originY = Math.max(currentOriginY.currentOriginY + currentOriginY.windowHeight, currentOriginY.windowHeight);
        }
        const obj = { animations: { originY: _undefined(c1, _undefined2(originY, c4)) }, initialValues: obj3, callback };
        ({ originY: _undefined(c1, _undefined2(originY, c4)) });
        obj3 = { originY: currentOriginY.currentOriginY };
        const merged = Object.assign(c5);
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs8.__closure = items1;
      pnpm_SlideTs8.__workletHash = 1576799321399;
      pnpm_SlideTs8.__initData = tmp5;
      return pnpm_SlideTs8;
    };
    return tmp3Result;
  }
}
_inherits(SlideOutDown, _mod1875.ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideOutDown();
    return tmp;
  }
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(SlideOutDown, null, items7);
importDefaultResultResult7.presetName = "SlideOutDown";
const SlideInRight_export = importDefaultResultResult;
const SlideInLeft_export = importDefaultResultResult1;
const SlideOutRight_export = importDefaultResultResult2;
const SlideOutLeft_export = importDefaultResultResult3;
const SlideInUp_export = importDefaultResultResult4;
const SlideInDown_export = importDefaultResultResult5;
const SlideOutUp_export = importDefaultResultResult6;
const SlideOutDown_export = importDefaultResultResult7;

export { SlideInRight_export as SlideInRight };
export { SlideInLeft_export as SlideInLeft };
export { SlideOutRight_export as SlideOutRight };
export { SlideOutLeft_export as SlideOutLeft };
export { SlideInUp_export as SlideInUp };
export { SlideInDown_export as SlideInDown };
export { SlideOutUp_export as SlideOutUp };
export { SlideOutDown_export as SlideOutDown };
