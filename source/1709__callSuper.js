// Module ID: 1709
// Function ID: 19138
// Name: _callSuper
// Dependencies: []

// Module 1709 (_callSuper)
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
let closure_6 = { code: "function pnpm_ZoomTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scale:0}],...initialValues},callback:callback};}" };
const tmp2 = (ComplexAnimationBuilder) => {
  class ZoomIn {
    constructor() {
      tmp = closure_1(this, ZoomIn);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomIn, items.concat(array));
      ZoomIn = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scale:0}],...initialValues},callback:callback};}
        pnpm_ZoomTs1.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_ZoomTs1.__workletHash = 1262081960523;
        pnpm_ZoomTs1.__initData = closure_6;
        return pnpm_ZoomTs1;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomIn;
  callback3(ZoomIn, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomIn();
      }
    }
  ];
  return callback(ZoomIn, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp2.presetName = "ZoomIn";
let closure_7 = { code: "function pnpm_ZoomTs2(){const{delayFunction,delay,animation,config,rotate,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(1,config))},{rotate:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scale:0},{rotate:rotate+\"rad\"}],...initialValues},callback:callback};}" };
const tmp3 = (ComplexAnimationBuilder) => {
  class ZoomInRotate {
    constructor() {
      tmp = closure_1(this, ZoomInRotate);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomInRotate, items.concat(array));
      ZoomInRotate = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        let str = "0.3";
        if (delayFunction.rotateV) {
          str = tmp3.rotateV;
        }
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs2(){const{delayFunction,delay,animation,config,rotate,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(1,config))},{rotate:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scale:0},{rotate:rotate+"rad"}],...initialValues},callback:callback};}
        const obj = { delayFunction, delay, animation: first, config: tmp4, rotate: str, initialValues, callback: callbackV };
        pnpm_ZoomTs2.__closure = obj;
        pnpm_ZoomTs2.__workletHash = 15519876599894;
        pnpm_ZoomTs2.__initData = closure_7;
        return pnpm_ZoomTs2;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomInRotate;
  callback3(ZoomInRotate, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomInRotate();
      }
    }
  ];
  return callback(ZoomInRotate, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp3.presetName = "ZoomInRotate";
let closure_8 = { code: "function pnpm_ZoomTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateX:-values.windowWidth},{scale:0}],...initialValues},callback:callback};}" };
const tmp4 = (ComplexAnimationBuilder) => {
  class ZoomInLeft {
    constructor() {
      tmp = closure_1(this, ZoomInLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomInLeft, items.concat(array));
      ZoomInLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateX:-values.windowWidth},{scale:0}],...initialValues},callback:callback};}
        pnpm_ZoomTs3.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_ZoomTs3.__workletHash = 9623778840206;
        pnpm_ZoomTs3.__initData = closure_8;
        return pnpm_ZoomTs3;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomInLeft;
  callback3(ZoomInLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomInLeft();
      }
    }
  ];
  return callback(ZoomInLeft, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp4.presetName = "ZoomInLeft";
let closure_9 = { code: "function pnpm_ZoomTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateX:values.windowWidth},{scale:0}],...initialValues},callback:callback};}" };
const tmp5 = (ComplexAnimationBuilder) => {
  class ZoomInRight {
    constructor() {
      tmp = closure_1(this, ZoomInRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomInRight, items.concat(array));
      ZoomInRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateX:values.windowWidth},{scale:0}],...initialValues},callback:callback};}
        pnpm_ZoomTs4.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_ZoomTs4.__workletHash = 3951441470564;
        pnpm_ZoomTs4.__initData = closure_9;
        return pnpm_ZoomTs4;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomInRight;
  callback3(ZoomInRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomInRight();
      }
    }
  ];
  return callback(ZoomInRight, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp5.presetName = "ZoomInRight";
let closure_10 = { code: "function pnpm_ZoomTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:-values.windowHeight},{scale:0}],...initialValues},callback:callback};}" };
const tmp6 = (ComplexAnimationBuilder) => {
  class ZoomInUp {
    constructor() {
      tmp = closure_1(this, ZoomInUp);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomInUp, items.concat(array));
      ZoomInUp = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:-values.windowHeight},{scale:0}],...initialValues},callback:callback};}
        pnpm_ZoomTs5.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_ZoomTs5.__workletHash = 11673124834481;
        pnpm_ZoomTs5.__initData = closure_10;
        return pnpm_ZoomTs5;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomInUp;
  callback3(ZoomInUp, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomInUp();
      }
    }
  ];
  return callback(ZoomInUp, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp6.presetName = "ZoomInUp";
let closure_11 = { code: "function pnpm_ZoomTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:values.windowHeight},{scale:0}],...initialValues},callback:callback};}" };
const tmp7 = (ComplexAnimationBuilder) => {
  class ZoomInDown {
    constructor() {
      tmp = closure_1(this, ZoomInDown);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomInDown, items.concat(array));
      ZoomInDown = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:values.windowHeight},{scale:0}],...initialValues},callback:callback};}
        pnpm_ZoomTs6.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_ZoomTs6.__workletHash = 16474472853503;
        pnpm_ZoomTs6.__initData = closure_11;
        return pnpm_ZoomTs6;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomInDown;
  callback3(ZoomInDown, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomInDown();
      }
    }
  ];
  return callback(ZoomInDown, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp7.presetName = "ZoomInDown";
let closure_12 = { code: "function pnpm_ZoomTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:-values.targetHeight},{scale:0}],...initialValues},callback:callback};}" };
const tmp8 = (ComplexAnimationBuilder) => {
  class ZoomInEasyUp {
    constructor() {
      tmp = closure_1(this, ZoomInEasyUp);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomInEasyUp, items.concat(array));
      ZoomInEasyUp = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:-values.targetHeight},{scale:0}],...initialValues},callback:callback};}
        pnpm_ZoomTs7.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_ZoomTs7.__workletHash = 9580191401742;
        pnpm_ZoomTs7.__initData = closure_12;
        return pnpm_ZoomTs7;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomInEasyUp;
  callback3(ZoomInEasyUp, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomInEasyUp();
      }
    }
  ];
  return callback(ZoomInEasyUp, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp8.presetName = "ZoomInEasyUp";
let closure_13 = { code: "function pnpm_ZoomTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:values.targetHeight},{scale:0}],...initialValues},callback:callback};}" };
const tmp9 = (ComplexAnimationBuilder) => {
  class ZoomInEasyDown {
    constructor() {
      tmp = closure_1(this, ZoomInEasyDown);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomInEasyDown, items.concat(array));
      ZoomInEasyDown = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:values.targetHeight},{scale:0}],...initialValues},callback:callback};}
        pnpm_ZoomTs8.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_ZoomTs8.__workletHash = 8663849822572;
        pnpm_ZoomTs8.__initData = closure_13;
        return pnpm_ZoomTs8;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomInEasyDown;
  callback3(ZoomInEasyDown, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomInEasyDown();
      }
    }
  ];
  return callback(ZoomInEasyDown, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp9.presetName = "ZoomInEasyDown";
let closure_14 = { code: "function pnpm_ZoomTs9(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scale:1}],...initialValues},callback:callback};}" };
const tmp10 = (ComplexAnimationBuilder) => {
  class ZoomOut {
    constructor() {
      tmp = closure_1(this, ZoomOut);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomOut, items.concat(array));
      ZoomOut = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs9(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scale:1}],...initialValues},callback:callback};}
        pnpm_ZoomTs9.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_ZoomTs9.__workletHash = 11880899972707;
        pnpm_ZoomTs9.__initData = closure_14;
        return pnpm_ZoomTs9;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomOut;
  callback3(ZoomOut, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomOut();
      }
    }
  ];
  return callback(ZoomOut, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp10.presetName = "ZoomOut";
let closure_15 = { code: "function pnpm_ZoomTs10(){const{delayFunction,delay,animation,config,rotate,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation(rotate,config))}]},initialValues:{transform:[{scale:1},{rotate:'0rad'}],...initialValues},callback:callback};}" };
const tmp11 = (ComplexAnimationBuilder) => {
  class ZoomOutRotate {
    constructor() {
      tmp = closure_1(this, ZoomOutRotate);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomOutRotate, items.concat(array));
      ZoomOutRotate = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        let str = "0.3";
        if (delayFunction.rotateV) {
          str = tmp3.rotateV;
        }
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs10(){const{delayFunction,delay,animation,config,rotate,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation(rotate,config))}]},initialValues:{transform:[{scale:1},{rotate:'0rad'}],...initialValues},callback:callback};}
        const obj = { delayFunction, delay, animation: first, config: tmp4, rotate: str, initialValues, callback: callbackV };
        pnpm_ZoomTs10.__closure = obj;
        pnpm_ZoomTs10.__workletHash = 14218456220590;
        pnpm_ZoomTs10.__initData = closure_15;
        return pnpm_ZoomTs10;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomOutRotate;
  callback3(ZoomOutRotate, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomOutRotate();
      }
    }
  ];
  return callback(ZoomOutRotate, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp11.presetName = "ZoomOutRotate";
let closure_16 = { code: "function pnpm_ZoomTs11(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateX:0},{scale:1}],...initialValues},callback:callback};}" };
const tmp12 = (ComplexAnimationBuilder) => {
  class ZoomOutLeft {
    constructor() {
      tmp = closure_1(this, ZoomOutLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomOutLeft, items.concat(array));
      ZoomOutLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs11(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateX:0},{scale:1}],...initialValues},callback:callback};}
        pnpm_ZoomTs11.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_ZoomTs11.__workletHash = 4016039076957;
        pnpm_ZoomTs11.__initData = closure_16;
        return pnpm_ZoomTs11;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomOutLeft;
  callback3(ZoomOutLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomOutLeft();
      }
    }
  ];
  return callback(ZoomOutLeft, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp12.presetName = "ZoomOutLeft";
let closure_17 = { code: "function pnpm_ZoomTs12(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateX:0},{scale:1}],...initialValues},callback:callback};}" };
const tmp13 = (ComplexAnimationBuilder) => {
  class ZoomOutRight {
    constructor() {
      tmp = closure_1(this, ZoomOutRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomOutRight, items.concat(array));
      ZoomOutRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs12(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateX:0},{scale:1}],...initialValues},callback:callback};}
        pnpm_ZoomTs12.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_ZoomTs12.__workletHash = 13414598349747;
        pnpm_ZoomTs12.__initData = closure_17;
        return pnpm_ZoomTs12;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomOutRight;
  callback3(ZoomOutRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomOutRight();
      }
    }
  ];
  return callback(ZoomOutRight, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp13.presetName = "ZoomOutRight";
let closure_18 = { code: "function pnpm_ZoomTs13(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(-values.windowHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}" };
const tmp14 = (ComplexAnimationBuilder) => {
  class ZoomOutUp {
    constructor() {
      tmp = closure_1(this, ZoomOutUp);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomOutUp, items.concat(array));
      ZoomOutUp = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs13(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(-values.windowHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}
        pnpm_ZoomTs13.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_ZoomTs13.__workletHash = 570907039910;
        pnpm_ZoomTs13.__initData = closure_18;
        return pnpm_ZoomTs13;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomOutUp;
  callback3(ZoomOutUp, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomOutUp();
      }
    }
  ];
  return callback(ZoomOutUp, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp14.presetName = "ZoomOutUp";
let closure_19 = { code: "function pnpm_ZoomTs14(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(values.windowHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}" };
const tmp15 = (ComplexAnimationBuilder) => {
  class ZoomOutDown {
    constructor() {
      tmp = closure_1(this, ZoomOutDown);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomOutDown, items.concat(array));
      ZoomOutDown = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs14(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(values.windowHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}
        pnpm_ZoomTs14.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_ZoomTs14.__workletHash = 4332816695692;
        pnpm_ZoomTs14.__initData = closure_19;
        return pnpm_ZoomTs14;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomOutDown;
  callback3(ZoomOutDown, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomOutDown();
      }
    }
  ];
  return callback(ZoomOutDown, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp15.presetName = "ZoomOutDown";
let closure_20 = { code: "function pnpm_ZoomTs15(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(-values.currentHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}" };
const tmp16 = (ComplexAnimationBuilder) => {
  class ZoomOutEasyUp {
    constructor() {
      tmp = closure_1(this, ZoomOutEasyUp);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomOutEasyUp, items.concat(array));
      ZoomOutEasyUp = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs15(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(-values.currentHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}
        pnpm_ZoomTs15.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_ZoomTs15.__workletHash = 1576389803461;
        pnpm_ZoomTs15.__initData = closure_20;
        return pnpm_ZoomTs15;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomOutEasyUp;
  callback3(ZoomOutEasyUp, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomOutEasyUp();
      }
    }
  ];
  return callback(ZoomOutEasyUp, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp16.presetName = "ZoomOutEasyUp";
let closure_21 = { code: "function pnpm_ZoomTs16(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(values.currentHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}" };
const tmp17 = (ComplexAnimationBuilder) => {
  class ZoomOutEasyDown {
    constructor() {
      tmp = closure_1(this, ZoomOutEasyDown);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, ZoomOutEasyDown, items.concat(array));
      ZoomOutEasyDown = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_ZoomTs16(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(values.currentHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}
        pnpm_ZoomTs16.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_ZoomTs16.__workletHash = 14278999536075;
        pnpm_ZoomTs16.__initData = closure_21;
        return pnpm_ZoomTs16;
      };
      return tmp3;
    }
  }
  let closure_0 = ZoomOutEasyDown;
  callback3(ZoomOutEasyDown, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new ZoomOutEasyDown();
      }
    }
  ];
  return callback(ZoomOutEasyDown, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp17.presetName = "ZoomOutEasyDown";

export const ZoomIn = tmp2;
export const ZoomInRotate = tmp3;
export const ZoomInLeft = tmp4;
export const ZoomInRight = tmp5;
export const ZoomInUp = tmp6;
export const ZoomInDown = tmp7;
export const ZoomInEasyUp = tmp8;
export const ZoomInEasyDown = tmp9;
export const ZoomOut = tmp10;
export const ZoomOutRotate = tmp11;
export const ZoomOutLeft = tmp12;
export const ZoomOutRight = tmp13;
export const ZoomOutUp = tmp14;
export const ZoomOutDown = tmp15;
export const ZoomOutEasyUp = tmp16;
export const ZoomOutEasyDown = tmp17;
