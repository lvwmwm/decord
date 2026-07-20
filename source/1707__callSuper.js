// Module ID: 1707
// Function ID: 19068
// Name: _callSuper
// Dependencies: []

// Module 1707 (_callSuper)
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
let closure_6 = { code: "function pnpm_SlideTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(values.targetOriginX,config))},initialValues:{originX:values.targetOriginX+values.windowWidth,...initialValues},callback:callback};}" };
const tmp2 = (ComplexAnimationBuilder) => {
  class SlideInRight {
    constructor() {
      tmp = closure_1(this, SlideInRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, SlideInRight, items.concat(array));
      SlideInRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(values.targetOriginX,config))},initialValues:{originX:values.targetOriginX+values.windowWidth,...initialValues},callback:callback};}
        pnpm_SlideTs1.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_SlideTs1.__workletHash = 10760418577189;
        pnpm_SlideTs1.__initData = closure_6;
        return pnpm_SlideTs1;
      };
      return tmp3;
    }
  }
  let closure_0 = SlideInRight;
  callback3(SlideInRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideInRight();
      }
    }
  ];
  return callback(SlideInRight, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp2.presetName = "SlideInRight";
let closure_7 = { code: "function pnpm_SlideTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(values.targetOriginX,config))},initialValues:{originX:values.targetOriginX-values.windowWidth,...initialValues},callback:callback};}" };
const tmp3 = (ComplexAnimationBuilder) => {
  class SlideInLeft {
    constructor() {
      tmp = closure_1(this, SlideInLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, SlideInLeft, items.concat(array));
      SlideInLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(values.targetOriginX,config))},initialValues:{originX:values.targetOriginX-values.windowWidth,...initialValues},callback:callback};}
        pnpm_SlideTs2.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_SlideTs2.__workletHash = 2180499422144;
        pnpm_SlideTs2.__initData = closure_7;
        return pnpm_SlideTs2;
      };
      return tmp3;
    }
  }
  let closure_0 = SlideInLeft;
  callback3(SlideInLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideInLeft();
      }
    }
  ];
  return callback(SlideInLeft, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp3.presetName = "SlideInLeft";
let closure_8 = { code: "function pnpm_SlideTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(Math.max(values.currentOriginX+values.windowWidth,values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};}" };
const tmp4 = (ComplexAnimationBuilder) => {
  class SlideOutRight {
    constructor() {
      tmp = closure_1(this, SlideOutRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, SlideOutRight, items.concat(array));
      SlideOutRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(Math.max(values.currentOriginX+values.windowWidth,values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};}
        pnpm_SlideTs3.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_SlideTs3.__workletHash = 12812296890492;
        pnpm_SlideTs3.__initData = closure_8;
        return pnpm_SlideTs3;
      };
      return tmp3;
    }
  }
  let closure_0 = SlideOutRight;
  callback3(SlideOutRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideOutRight();
      }
    }
  ];
  return callback(SlideOutRight, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp4.presetName = "SlideOutRight";
let closure_9 = { code: "function pnpm_SlideTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};}" };
const tmp5 = (ComplexAnimationBuilder) => {
  class SlideOutLeft {
    constructor() {
      tmp = closure_1(this, SlideOutLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, SlideOutLeft, items.concat(array));
      SlideOutLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};}
        pnpm_SlideTs4.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_SlideTs4.__workletHash = 6273927341006;
        pnpm_SlideTs4.__initData = closure_9;
        return pnpm_SlideTs4;
      };
      return tmp3;
    }
  }
  let closure_0 = SlideOutLeft;
  callback3(SlideOutLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideOutLeft();
      }
    }
  ];
  return callback(SlideOutLeft, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp5.presetName = "SlideOutLeft";
let closure_10 = { code: "function pnpm_SlideTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(values.targetOriginY,config))},initialValues:{originY:-values.windowHeight,...initialValues},callback:callback};}" };
const tmp6 = (ComplexAnimationBuilder) => {
  class SlideInUp {
    constructor() {
      tmp = closure_1(this, SlideInUp);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, SlideInUp, items.concat(array));
      SlideInUp = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(values.targetOriginY,config))},initialValues:{originY:-values.windowHeight,...initialValues},callback:callback};}
        pnpm_SlideTs5.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_SlideTs5.__workletHash = 9846507393044;
        pnpm_SlideTs5.__initData = closure_10;
        return pnpm_SlideTs5;
      };
      return tmp3;
    }
  }
  let closure_0 = SlideInUp;
  callback3(SlideInUp, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideInUp();
      }
    }
  ];
  return callback(SlideInUp, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp6.presetName = "SlideInUp";
let closure_11 = { code: "function pnpm_SlideTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(values.targetOriginY,config))},initialValues:{originY:values.targetOriginY+values.windowHeight,...initialValues},callback:callback};}" };
const tmp7 = (ComplexAnimationBuilder) => {
  class SlideInDown {
    constructor() {
      tmp = closure_1(this, SlideInDown);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, SlideInDown, items.concat(array));
      SlideInDown = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(values.targetOriginY,config))},initialValues:{originY:values.targetOriginY+values.windowHeight,...initialValues},callback:callback};}
        pnpm_SlideTs6.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_SlideTs6.__workletHash = 9348728185019;
        pnpm_SlideTs6.__initData = closure_11;
        return pnpm_SlideTs6;
      };
      return tmp3;
    }
  }
  let closure_0 = SlideInDown;
  callback3(SlideInDown, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideInDown();
      }
    }
  ];
  return callback(SlideInDown, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp7.presetName = "SlideInDown";
let closure_12 = { code: "function pnpm_SlideTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(Math.min(values.currentOriginY-values.windowHeight,-values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};}" };
const tmp8 = (ComplexAnimationBuilder) => {
  class SlideOutUp {
    constructor() {
      tmp = closure_1(this, SlideOutUp);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, SlideOutUp, items.concat(array));
      SlideOutUp = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(Math.min(values.currentOriginY-values.windowHeight,-values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};}
        pnpm_SlideTs7.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_SlideTs7.__workletHash = 14850009730573;
        pnpm_SlideTs7.__initData = closure_12;
        return pnpm_SlideTs7;
      };
      return tmp3;
    }
  }
  let closure_0 = SlideOutUp;
  callback3(SlideOutUp, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideOutUp();
      }
    }
  ];
  return callback(SlideOutUp, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp8.presetName = "SlideOutUp";
let closure_13 = { code: "function pnpm_SlideTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(Math.max(values.currentOriginY+values.windowHeight,values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};}" };
const tmp9 = (ComplexAnimationBuilder) => {
  class SlideOutDown {
    constructor() {
      tmp = closure_1(this, SlideOutDown);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, SlideOutDown, items.concat(array));
      SlideOutDown = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(Math.max(values.currentOriginY+values.windowHeight,values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};}
        pnpm_SlideTs8.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_SlideTs8.__workletHash = 14065812257143;
        pnpm_SlideTs8.__initData = closure_13;
        return pnpm_SlideTs8;
      };
      return tmp3;
    }
  }
  let closure_0 = SlideOutDown;
  callback3(SlideOutDown, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideOutDown();
      }
    }
  ];
  return callback(SlideOutDown, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp9.presetName = "SlideOutDown";

export const SlideInRight = tmp2;
export const SlideInLeft = tmp3;
export const SlideOutRight = tmp4;
export const SlideOutLeft = tmp5;
export const SlideInUp = tmp6;
export const SlideInDown = tmp7;
export const SlideOutUp = tmp8;
export const SlideOutDown = tmp9;
