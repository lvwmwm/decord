// Module ID: 1708
// Function ID: 19118
// Name: _callSuper
// Dependencies: []

// Module 1708 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_3(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = { code: "function pnpm_StretchTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleX:0}],...initialValues},callback:callback};}" };
const tmp2 = (ComplexAnimationBuilder) => {
  class StretchInX {
    constructor() {
      tmp = closure_1(this, StretchInX);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_10(this, StretchInX, items.concat(array));
      StretchInX = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_StretchTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleX:0}],...initialValues},callback:callback};}
        pnpm_StretchTs1.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_StretchTs1.__workletHash = 8236429657427;
        pnpm_StretchTs1.__initData = closure_6;
        return pnpm_StretchTs1;
      };
      return tmp3;
    }
  }
  let closure_0 = StretchInX;
  callback3(StretchInX, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new StretchInX();
      }
    }
  ];
  return callback(StretchInX, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp2.presetName = "StretchInX";
let closure_7 = { code: "function pnpm_StretchTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleY:0}],...initialValues},callback:callback};}" };
const tmp3 = (ComplexAnimationBuilder) => {
  class StretchInY {
    constructor() {
      tmp = closure_1(this, StretchInY);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_10(this, StretchInY, items.concat(array));
      StretchInY = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_StretchTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleY:0}],...initialValues},callback:callback};}
        pnpm_StretchTs2.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_StretchTs2.__workletHash = 15758510181808;
        pnpm_StretchTs2.__initData = closure_7;
        return pnpm_StretchTs2;
      };
      return tmp3;
    }
  }
  let closure_0 = StretchInY;
  callback3(StretchInY, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new StretchInY();
      }
    }
  ];
  return callback(StretchInY, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp3.presetName = "StretchInY";
let closure_8 = { code: "function pnpm_StretchTs3(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleX:1}],...initialValues},callback:callback};}" };
const tmp4 = (ComplexAnimationBuilder) => {
  class StretchOutX {
    constructor() {
      tmp = closure_1(this, StretchOutX);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_10(this, StretchOutX, items.concat(array));
      StretchOutX = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_StretchTs3(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleX:1}],...initialValues},callback:callback};}
        pnpm_StretchTs3.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_StretchTs3.__workletHash = 2374207350737;
        pnpm_StretchTs3.__initData = closure_8;
        return pnpm_StretchTs3;
      };
      return tmp3;
    }
  }
  let closure_0 = StretchOutX;
  callback3(StretchOutX, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new StretchOutX();
      }
    }
  ];
  return callback(StretchOutX, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp4.presetName = "StretchOutX";
let closure_9 = { code: "function pnpm_StretchTs4(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleY:1}],...initialValues},callback:callback};}" };
const tmp5 = (ComplexAnimationBuilder) => {
  class StretchOutY {
    constructor() {
      tmp = closure_1(this, StretchOutY);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_10(this, StretchOutY, items.concat(array));
      StretchOutY = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_StretchTs4(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleY:1}],...initialValues},callback:callback};}
        pnpm_StretchTs4.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_StretchTs4.__workletHash = 3228047902646;
        pnpm_StretchTs4.__initData = closure_9;
        return pnpm_StretchTs4;
      };
      return tmp3;
    }
  }
  let closure_0 = StretchOutY;
  callback3(StretchOutY, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new StretchOutY();
      }
    }
  ];
  return callback(StretchOutY, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp5.presetName = "StretchOutY";

export const StretchInX = tmp2;
export const StretchInY = tmp3;
export const StretchOutX = tmp4;
export const StretchOutY = tmp5;
