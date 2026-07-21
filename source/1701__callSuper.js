// Module ID: 1701
// Function ID: 18843
// Name: _callSuper
// Dependencies: []

// Module 1701 (_callSuper)
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
let closure_6 = { code: "function pnpm_FadeTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config))},initialValues:{opacity:0,...initialValues},callback:callback};}" };
const tmp2 = (ComplexAnimationBuilder) => {
  class FadeIn {
    constructor() {
      tmp = closure_1(this, FadeIn);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_16(this, FadeIn, items.concat(array));
      FadeIn = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        const delay = tmp3.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config))},initialValues:{opacity:0,...initialValues},callback:callback};}
        pnpm_FadeTs1.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_FadeTs1.__workletHash = 4187624806586;
        pnpm_FadeTs1.__initData = closure_6;
        return pnpm_FadeTs1;
      };
      return tmp3;
    }
  }
  let closure_0 = FadeIn;
  callback3(FadeIn, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeIn();
      }
    }
  ];
  return callback(FadeIn, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp2.presetName = "FadeIn";
let closure_7 = { code: "function pnpm_FadeTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateX:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateX:25}],...initialValues},callback:callback};}" };
const tmp3 = (ComplexAnimationBuilder) => {
  class FadeInRight {
    constructor() {
      tmp = closure_1(this, FadeInRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_16(this, FadeInRight, items.concat(array));
      FadeInRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        const delay = tmp3.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateX:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateX:25}],...initialValues},callback:callback};}
        pnpm_FadeTs2.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_FadeTs2.__workletHash = 5328703857616;
        pnpm_FadeTs2.__initData = closure_7;
        return pnpm_FadeTs2;
      };
      return tmp3;
    }
  }
  let closure_0 = FadeInRight;
  callback3(FadeInRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeInRight();
      }
    }
  ];
  return callback(FadeInRight, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp3.presetName = "FadeInRight";
let closure_8 = { code: "function pnpm_FadeTs3(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateX:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateX:-25}],...initialValues},callback:callback};}" };
const tmp4 = (ComplexAnimationBuilder) => {
  class FadeInLeft {
    constructor() {
      tmp = closure_1(this, FadeInLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_16(this, FadeInLeft, items.concat(array));
      FadeInLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        const delay = tmp3.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs3(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateX:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateX:-25}],...initialValues},callback:callback};}
        pnpm_FadeTs3.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_FadeTs3.__workletHash = 3876464806620;
        pnpm_FadeTs3.__initData = closure_8;
        return pnpm_FadeTs3;
      };
      return tmp3;
    }
  }
  let closure_0 = FadeInLeft;
  callback3(FadeInLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeInLeft();
      }
    }
  ];
  return callback(FadeInLeft, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp4.presetName = "FadeInLeft";
let closure_9 = { code: "function pnpm_FadeTs4(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateY:-25}],...initialValues},callback:callback};}" };
const tmp5 = (ComplexAnimationBuilder) => {
  class FadeInUp {
    constructor() {
      tmp = closure_1(this, FadeInUp);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_16(this, FadeInUp, items.concat(array));
      FadeInUp = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        const delay = tmp3.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs4(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateY:-25}],...initialValues},callback:callback};}
        pnpm_FadeTs4.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_FadeTs4.__workletHash = 14652570092763;
        pnpm_FadeTs4.__initData = closure_9;
        return pnpm_FadeTs4;
      };
      return tmp3;
    }
  }
  let closure_0 = FadeInUp;
  callback3(FadeInUp, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeInUp();
      }
    }
  ];
  return callback(FadeInUp, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp5.presetName = "FadeInUp";
let closure_10 = { code: "function pnpm_FadeTs5(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateY:25}],...initialValues},callback:callback};}" };
const tmp6 = (ComplexAnimationBuilder) => {
  class FadeInDown {
    constructor() {
      tmp = closure_1(this, FadeInDown);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_16(this, FadeInDown, items.concat(array));
      FadeInDown = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        const delay = tmp3.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs5(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateY:25}],...initialValues},callback:callback};}
        pnpm_FadeTs5.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_FadeTs5.__workletHash = 3370389664855;
        pnpm_FadeTs5.__initData = closure_10;
        return pnpm_FadeTs5;
      };
      return tmp3;
    }
  }
  let closure_0 = FadeInDown;
  callback3(FadeInDown, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeInDown();
      }
    }
  ];
  return callback(FadeInDown, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp6.presetName = "FadeInDown";
let closure_11 = { code: "function pnpm_FadeTs6(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config))},initialValues:{opacity:1,...initialValues},callback:callback};}" };
const tmp7 = (ComplexAnimationBuilder) => {
  class FadeOut {
    constructor() {
      tmp = closure_1(this, FadeOut);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_16(this, FadeOut, items.concat(array));
      FadeOut = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        const delay = tmp3.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs6(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config))},initialValues:{opacity:1,...initialValues},callback:callback};}
        pnpm_FadeTs6.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_FadeTs6.__workletHash = 12496093665501;
        pnpm_FadeTs6.__initData = closure_11;
        return pnpm_FadeTs6;
      };
      return tmp3;
    }
  }
  let closure_0 = FadeOut;
  callback3(FadeOut, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeOut();
      }
    }
  ];
  return callback(FadeOut, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp7.presetName = "FadeOut";
let closure_12 = { code: "function pnpm_FadeTs7(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(25,config))}]},initialValues:{opacity:1,transform:[{translateX:0}],...initialValues},callback:callback};}" };
const tmp8 = (ComplexAnimationBuilder) => {
  class FadeOutRight {
    constructor() {
      tmp = closure_1(this, FadeOutRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_16(this, FadeOutRight, items.concat(array));
      FadeOutRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        const delay = tmp3.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs7(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(25,config))}]},initialValues:{opacity:1,transform:[{translateX:0}],...initialValues},callback:callback};}
        pnpm_FadeTs7.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_FadeTs7.__workletHash = 8966511332149;
        pnpm_FadeTs7.__initData = closure_12;
        return pnpm_FadeTs7;
      };
      return tmp3;
    }
  }
  let closure_0 = FadeOutRight;
  callback3(FadeOutRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeOutRight();
      }
    }
  ];
  return callback(FadeOutRight, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp8.presetName = "FadeOutRight";
let closure_13 = { code: "function pnpm_FadeTs8(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(-25,config))}]},initialValues:{opacity:1,transform:[{translateX:0}],...initialValues},callback:callback};}" };
const tmp9 = (ComplexAnimationBuilder) => {
  class FadeOutLeft {
    constructor() {
      tmp = closure_1(this, FadeOutLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_16(this, FadeOutLeft, items.concat(array));
      FadeOutLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        const delay = tmp3.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs8(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(-25,config))}]},initialValues:{opacity:1,transform:[{translateX:0}],...initialValues},callback:callback};}
        pnpm_FadeTs8.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_FadeTs8.__workletHash = 7570822684087;
        pnpm_FadeTs8.__initData = closure_13;
        return pnpm_FadeTs8;
      };
      return tmp3;
    }
  }
  let closure_0 = FadeOutLeft;
  callback3(FadeOutLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeOutLeft();
      }
    }
  ];
  return callback(FadeOutLeft, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp9.presetName = "FadeOutLeft";
let closure_14 = { code: "function pnpm_FadeTs9(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateY:delayFunction(delay,animation(-25,config))}]},initialValues:{opacity:1,transform:[{translateY:0}],...initialValues},callback:callback};}" };
const tmp10 = (ComplexAnimationBuilder) => {
  class FadeOutUp {
    constructor() {
      tmp = closure_1(this, FadeOutUp);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_16(this, FadeOutUp, items.concat(array));
      FadeOutUp = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        const delay = tmp3.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs9(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateY:delayFunction(delay,animation(-25,config))}]},initialValues:{opacity:1,transform:[{translateY:0}],...initialValues},callback:callback};}
        pnpm_FadeTs9.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_FadeTs9.__workletHash = 7080775562358;
        pnpm_FadeTs9.__initData = closure_14;
        return pnpm_FadeTs9;
      };
      return tmp3;
    }
  }
  let closure_0 = FadeOutUp;
  callback3(FadeOutUp, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeOutUp();
      }
    }
  ];
  return callback(FadeOutUp, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp10.presetName = "FadeOutUp";
let closure_15 = { code: "function pnpm_FadeTs10(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateY:delayFunction(delay,animation(25,config))}]},initialValues:{opacity:1,transform:[{translateY:0}],...initialValues},callback:callback};}" };
const tmp11 = (ComplexAnimationBuilder) => {
  class FadeOutDown {
    constructor() {
      tmp = closure_1(this, FadeOutDown);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_16(this, FadeOutDown, items.concat(array));
      FadeOutDown = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        const delay = tmp3.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs10(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateY:delayFunction(delay,animation(25,config))}]},initialValues:{opacity:1,transform:[{translateY:0}],...initialValues},callback:callback};}
        pnpm_FadeTs10.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_FadeTs10.__workletHash = 4897427935171;
        pnpm_FadeTs10.__initData = closure_15;
        return pnpm_FadeTs10;
      };
      return tmp3;
    }
  }
  let closure_0 = FadeOutDown;
  callback3(FadeOutDown, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeOutDown();
      }
    }
  ];
  return callback(FadeOutDown, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp11.presetName = "FadeOutDown";

export const FadeIn = tmp2;
export const FadeInRight = tmp3;
export const FadeInLeft = tmp4;
export const FadeInUp = tmp5;
export const FadeInDown = tmp6;
export const FadeOut = tmp7;
export const FadeOutRight = tmp8;
export const FadeOutLeft = tmp9;
export const FadeOutUp = tmp10;
export const FadeOutDown = tmp11;
