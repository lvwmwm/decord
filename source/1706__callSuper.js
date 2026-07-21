// Module ID: 1706
// Function ID: 19028
// Name: _callSuper
// Dependencies: []

// Module 1706 (_callSuper)
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
let closure_6 = { code: "function pnpm_RotateTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}" };
const tmp2 = (ComplexAnimationBuilder) => {
  class RotateInDownLeft {
    constructor() {
      tmp = closure_1(this, RotateInDownLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, RotateInDownLeft, items.concat(array));
      RotateInDownLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}
        pnpm_RotateTs1.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_RotateTs1.__workletHash = 1900668823867;
        pnpm_RotateTs1.__initData = closure_6;
        return pnpm_RotateTs1;
      };
      return tmp3;
    }
  }
  let closure_0 = RotateInDownLeft;
  callback3(RotateInDownLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateInDownLeft();
      }
    }
  ];
  return callback(RotateInDownLeft, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp2.presetName = "RotateInDownLeft";
let closure_7 = { code: "function pnpm_RotateTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}" };
const tmp3 = (ComplexAnimationBuilder) => {
  class RotateInDownRight {
    constructor() {
      tmp = closure_1(this, RotateInDownRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, RotateInDownRight, items.concat(array));
      RotateInDownRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}
        pnpm_RotateTs2.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_RotateTs2.__workletHash = 1066189129817;
        pnpm_RotateTs2.__initData = closure_7;
        return pnpm_RotateTs2;
      };
      return tmp3;
    }
  }
  let closure_0 = RotateInDownRight;
  callback3(RotateInDownRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateInDownRight();
      }
    }
  ];
  return callback(RotateInDownRight, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp3.presetName = "RotateInDownRight";
let closure_8 = { code: "function pnpm_RotateTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}" };
const tmp4 = (ComplexAnimationBuilder) => {
  class RotateInUpLeft {
    constructor() {
      tmp = closure_1(this, RotateInUpLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, RotateInUpLeft, items.concat(array));
      RotateInUpLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}
        pnpm_RotateTs3.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_RotateTs3.__workletHash = 11999620665656;
        pnpm_RotateTs3.__initData = closure_8;
        return pnpm_RotateTs3;
      };
      return tmp3;
    }
  }
  let closure_0 = RotateInUpLeft;
  callback3(RotateInUpLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateInUpLeft();
      }
    }
  ];
  return callback(RotateInUpLeft, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp4.presetName = "RotateInUpLeft";
let closure_9 = { code: "function pnpm_RotateTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}" };
const tmp5 = (ComplexAnimationBuilder) => {
  class RotateInUpRight {
    constructor() {
      tmp = closure_1(this, RotateInUpRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, RotateInUpRight, items.concat(array));
      RotateInUpRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}
        pnpm_RotateTs4.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_RotateTs4.__workletHash = 15143335307550;
        pnpm_RotateTs4.__initData = closure_9;
        return pnpm_RotateTs4;
      };
      return tmp3;
    }
  }
  let closure_0 = RotateInUpRight;
  callback3(RotateInUpRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateInUpRight();
      }
    }
  ];
  return callback(RotateInUpRight, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp5.presetName = "RotateInUpRight";
let closure_10 = { code: "function pnpm_RotateTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
const tmp6 = (ComplexAnimationBuilder) => {
  class RotateOutDownLeft {
    constructor() {
      tmp = closure_1(this, RotateOutDownLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, RotateOutDownLeft, items.concat(array));
      RotateOutDownLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}
        pnpm_RotateTs5.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_RotateTs5.__workletHash = 11712932777694;
        pnpm_RotateTs5.__initData = closure_10;
        return pnpm_RotateTs5;
      };
      return tmp3;
    }
  }
  let closure_0 = RotateOutDownLeft;
  callback3(RotateOutDownLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateOutDownLeft();
      }
    }
  ];
  return callback(RotateOutDownLeft, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp6.presetName = "RotateOutDownLeft";
let closure_11 = { code: "function pnpm_RotateTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
const tmp7 = (ComplexAnimationBuilder) => {
  class RotateOutDownRight {
    constructor() {
      tmp = closure_1(this, RotateOutDownRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, RotateOutDownRight, items.concat(array));
      RotateOutDownRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}
        pnpm_RotateTs6.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_RotateTs6.__workletHash = 16449003298460;
        pnpm_RotateTs6.__initData = closure_11;
        return pnpm_RotateTs6;
      };
      return tmp3;
    }
  }
  let closure_0 = RotateOutDownRight;
  callback3(RotateOutDownRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateOutDownRight();
      }
    }
  ];
  return callback(RotateOutDownRight, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp7.presetName = "RotateOutDownRight";
let closure_12 = { code: "function pnpm_RotateTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
const tmp8 = (ComplexAnimationBuilder) => {
  class RotateOutUpLeft {
    constructor() {
      tmp = closure_1(this, RotateOutUpLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, RotateOutUpLeft, items.concat(array));
      RotateOutUpLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}
        pnpm_RotateTs7.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_RotateTs7.__workletHash = 16777964503997;
        pnpm_RotateTs7.__initData = closure_12;
        return pnpm_RotateTs7;
      };
      return tmp3;
    }
  }
  let closure_0 = RotateOutUpLeft;
  callback3(RotateOutUpLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateOutUpLeft();
      }
    }
  ];
  return callback(RotateOutUpLeft, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp8.presetName = "RotateOutUpLeft";
let closure_13 = { code: "function pnpm_RotateTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
const tmp9 = (ComplexAnimationBuilder) => {
  class RotateOutUpRight {
    constructor() {
      tmp = closure_1(this, RotateOutUpRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_14(this, RotateOutUpRight, items.concat(array));
      RotateOutUpRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}
        pnpm_RotateTs8.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_RotateTs8.__workletHash = 14312403608563;
        pnpm_RotateTs8.__initData = closure_13;
        return pnpm_RotateTs8;
      };
      return tmp3;
    }
  }
  let closure_0 = RotateOutUpRight;
  callback3(RotateOutUpRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateOutUpRight();
      }
    }
  ];
  return callback(RotateOutUpRight, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp9.presetName = "RotateOutUpRight";

export const RotateInDownLeft = tmp2;
export const RotateInDownRight = tmp3;
export const RotateInUpLeft = tmp4;
export const RotateInUpRight = tmp5;
export const RotateOutDownLeft = tmp6;
export const RotateOutDownRight = tmp7;
export const RotateOutUpLeft = tmp8;
export const RotateOutUpRight = tmp9;
