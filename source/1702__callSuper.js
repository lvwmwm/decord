// Module ID: 1702
// Function ID: 18893
// Name: _callSuper
// Dependencies: []

// Module 1702 (_callSuper)
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
let closure_6 = { code: "function pnpm_FlipTs1(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'},{translateY:-targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:500},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
const tmp2 = (ComplexAnimationBuilder) => {
  class FlipInXUp {
    constructor() {
      tmp = closure_1(this, FlipInXUp);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_18(this, FlipInXUp, items.concat(array));
      FlipInXUp = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs1(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'},{translateY:-targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:500},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}
        pnpm_FlipTs1.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp4, callback: callbackV };
        pnpm_FlipTs1.__workletHash = 17482936202676;
        pnpm_FlipTs1.__initData = closure_6;
        return pnpm_FlipTs1;
      };
      return tmp3;
    }
  }
  let closure_0 = FlipInXUp;
  callback3(FlipInXUp, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipInXUp();
      }
    }
  ];
  return callback(FlipInXUp, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp2.presetName = "FlipInXUp";
let closure_7 = { code: "function pnpm_FlipTs2(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'-90deg'},{translateX:-targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
const tmp3 = (ComplexAnimationBuilder) => {
  class FlipInYLeft {
    constructor() {
      tmp = closure_1(this, FlipInYLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_18(this, FlipInYLeft, items.concat(array));
      FlipInYLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs2(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'-90deg'},{translateX:-targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}
        pnpm_FlipTs2.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp4, callback: callbackV };
        pnpm_FlipTs2.__workletHash = 7030831354781;
        pnpm_FlipTs2.__initData = closure_7;
        return pnpm_FlipTs2;
      };
      return tmp3;
    }
  }
  let closure_0 = FlipInYLeft;
  callback3(FlipInYLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipInYLeft();
      }
    }
  ];
  return callback(FlipInYLeft, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp3.presetName = "FlipInYLeft";
let closure_8 = { code: "function pnpm_FlipTs3(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'-90deg'},{translateY:targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
const tmp4 = (ComplexAnimationBuilder) => {
  class FlipInXDown {
    constructor() {
      tmp = closure_1(this, FlipInXDown);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_18(this, FlipInXDown, items.concat(array));
      FlipInXDown = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs3(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'-90deg'},{translateY:targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}
        pnpm_FlipTs3.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp4, callback: callbackV };
        pnpm_FlipTs3.__workletHash = 8540727794920;
        pnpm_FlipTs3.__initData = closure_8;
        return pnpm_FlipTs3;
      };
      return tmp3;
    }
  }
  let closure_0 = FlipInXDown;
  callback3(FlipInXDown, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipInXDown();
      }
    }
  ];
  return callback(FlipInXDown, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp4.presetName = "FlipInXDown";
let closure_9 = { code: "function pnpm_FlipTs4(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'},{translateX:targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
const tmp5 = (ComplexAnimationBuilder) => {
  class FlipInYRight {
    constructor() {
      tmp = closure_1(this, FlipInYRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_18(this, FlipInYRight, items.concat(array));
      FlipInYRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs4(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'},{translateX:targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}
        pnpm_FlipTs4.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp4, callback: callbackV };
        pnpm_FlipTs4.__workletHash = 10571583952635;
        pnpm_FlipTs4.__initData = closure_9;
        return pnpm_FlipTs4;
      };
      return tmp3;
    }
  }
  let closure_0 = FlipInYRight;
  callback3(FlipInYRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipInYRight();
      }
    }
  ];
  return callback(FlipInYRight, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp5.presetName = "FlipInYRight";
let closure_10 = { code: "function pnpm_FlipTs5(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))}]},callback:callback};}" };
const tmp6 = (ComplexAnimationBuilder) => {
  class FlipInEasyX {
    constructor() {
      tmp = closure_1(this, FlipInEasyX);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_18(this, FlipInEasyX, items.concat(array));
      FlipInEasyX = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs5(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))}]},callback:callback};}
        pnpm_FlipTs5.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp4, callback: callbackV };
        pnpm_FlipTs5.__workletHash = 5139023366989;
        pnpm_FlipTs5.__initData = closure_10;
        return pnpm_FlipTs5;
      };
      return tmp3;
    }
  }
  let closure_0 = FlipInEasyX;
  callback3(FlipInEasyX, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipInEasyX();
      }
    }
  ];
  return callback(FlipInEasyX, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp6.presetName = "FlipInEasyX";
let closure_11 = { code: "function pnpm_FlipTs6(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))}]},callback:callback};}" };
const tmp7 = (ComplexAnimationBuilder) => {
  class FlipInEasyY {
    constructor() {
      tmp = closure_1(this, FlipInEasyY);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_18(this, FlipInEasyY, items.concat(array));
      FlipInEasyY = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs6(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))}]},callback:callback};}
        pnpm_FlipTs6.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp4, callback: callbackV };
        pnpm_FlipTs6.__workletHash = 4577193778414;
        pnpm_FlipTs6.__initData = closure_11;
        return pnpm_FlipTs6;
      };
      return tmp3;
    }
  }
  let closure_0 = FlipInEasyY;
  callback3(FlipInEasyY, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipInEasyY();
      }
    }
  ];
  return callback(FlipInEasyY, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp7.presetName = "FlipInEasyY";
let closure_12 = { code: "function pnpm_FlipTs7(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))},{translateY:delayFunction(delay,animation(-targetValues.currentHeight,config))}]},callback:callback};}" };
const tmp8 = (ComplexAnimationBuilder) => {
  class FlipOutXUp {
    constructor() {
      tmp = closure_1(this, FlipOutXUp);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_18(this, FlipOutXUp, items.concat(array));
      FlipOutXUp = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs7(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))},{translateY:delayFunction(delay,animation(-targetValues.currentHeight,config))}]},callback:callback};}
        pnpm_FlipTs7.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp4, callback: callbackV };
        pnpm_FlipTs7.__workletHash = 3506458137332;
        pnpm_FlipTs7.__initData = closure_12;
        return pnpm_FlipTs7;
      };
      return tmp3;
    }
  }
  let closure_0 = FlipOutXUp;
  callback3(FlipOutXUp, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipOutXUp();
      }
    }
  ];
  return callback(FlipOutXUp, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp8.presetName = "FlipOutXUp";
let closure_13 = { code: "function pnpm_FlipTs8(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-targetValues.currentWidth,config))}]},callback:callback};}" };
const tmp9 = (ComplexAnimationBuilder) => {
  class FlipOutYLeft {
    constructor() {
      tmp = closure_1(this, FlipOutYLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_18(this, FlipOutYLeft, items.concat(array));
      FlipOutYLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs8(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-targetValues.currentWidth,config))}]},callback:callback};}
        pnpm_FlipTs8.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp4, callback: callbackV };
        pnpm_FlipTs8.__workletHash = 17419119819311;
        pnpm_FlipTs8.__initData = closure_13;
        return pnpm_FlipTs8;
      };
      return tmp3;
    }
  }
  let closure_0 = FlipOutYLeft;
  callback3(FlipOutYLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipOutYLeft();
      }
    }
  ];
  return callback(FlipOutYLeft, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp9.presetName = "FlipOutYLeft";
let closure_14 = { code: "function pnpm_FlipTs9(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('-90deg',config))},{translateY:delayFunction(delay,animation(targetValues.currentHeight,config))}]},callback:callback};}" };
const tmp10 = (ComplexAnimationBuilder) => {
  class FlipOutXDown {
    constructor() {
      tmp = closure_1(this, FlipOutXDown);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_18(this, FlipOutXDown, items.concat(array));
      FlipOutXDown = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs9(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('-90deg',config))},{translateY:delayFunction(delay,animation(targetValues.currentHeight,config))}]},callback:callback};}
        pnpm_FlipTs9.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp4, callback: callbackV };
        pnpm_FlipTs9.__workletHash = 9961334044730;
        pnpm_FlipTs9.__initData = closure_14;
        return pnpm_FlipTs9;
      };
      return tmp3;
    }
  }
  let closure_0 = FlipOutXDown;
  callback3(FlipOutXDown, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipOutXDown();
      }
    }
  ];
  return callback(FlipOutXDown, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp10.presetName = "FlipOutXDown";
let closure_15 = { code: "function pnpm_FlipTs10(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(targetValues.currentWidth,config))}]},callback:callback};}" };
const tmp11 = (ComplexAnimationBuilder) => {
  class FlipOutYRight {
    constructor() {
      tmp = closure_1(this, FlipOutYRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_18(this, FlipOutYRight, items.concat(array));
      FlipOutYRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs10(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(targetValues.currentWidth,config))}]},callback:callback};}
        pnpm_FlipTs10.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp4, callback: callbackV };
        pnpm_FlipTs10.__workletHash = 12107293900726;
        pnpm_FlipTs10.__initData = closure_15;
        return pnpm_FlipTs10;
      };
      return tmp3;
    }
  }
  let closure_0 = FlipOutYRight;
  callback3(FlipOutYRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipOutYRight();
      }
    }
  ];
  return callback(FlipOutYRight, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp11.presetName = "FlipOutYRight";
let closure_16 = { code: "function pnpm_FlipTs11(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))}]},callback:callback};}" };
const tmp12 = (ComplexAnimationBuilder) => {
  class FlipOutEasyX {
    constructor() {
      tmp = closure_1(this, FlipOutEasyX);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_18(this, FlipOutEasyX, items.concat(array));
      FlipOutEasyX = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs11(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))}]},callback:callback};}
        pnpm_FlipTs11.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp4, callback: callbackV };
        pnpm_FlipTs11.__workletHash = 9417124215224;
        pnpm_FlipTs11.__initData = closure_16;
        return pnpm_FlipTs11;
      };
      return tmp3;
    }
  }
  let closure_0 = FlipOutEasyX;
  callback3(FlipOutEasyX, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipOutEasyX();
      }
    }
  ];
  return callback(FlipOutEasyX, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp12.presetName = "FlipOutEasyX";
let closure_17 = { code: "function pnpm_FlipTs12(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))}]},callback:callback};}" };
const tmp13 = (ComplexAnimationBuilder) => {
  class FlipOutEasyY {
    constructor() {
      tmp = closure_1(this, FlipOutEasyY);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_18(this, FlipOutEasyY, items.concat(array));
      FlipOutEasyY = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs12(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))}]},callback:callback};}
        pnpm_FlipTs12.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp4, callback: callbackV };
        pnpm_FlipTs12.__workletHash = 4473299233947;
        pnpm_FlipTs12.__initData = closure_17;
        return pnpm_FlipTs12;
      };
      return tmp3;
    }
  }
  let closure_0 = FlipOutEasyY;
  callback3(FlipOutEasyY, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipOutEasyY();
      }
    }
  ];
  return callback(FlipOutEasyY, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp13.presetName = "FlipOutEasyY";

export const FlipInXUp = tmp2;
export const FlipInYLeft = tmp3;
export const FlipInXDown = tmp4;
export const FlipInYRight = tmp5;
export const FlipInEasyX = tmp6;
export const FlipInEasyY = tmp7;
export const FlipOutXUp = tmp8;
export const FlipOutYLeft = tmp9;
export const FlipOutXDown = tmp10;
export const FlipOutYRight = tmp11;
export const FlipOutEasyX = tmp12;
export const FlipOutEasyY = tmp13;
