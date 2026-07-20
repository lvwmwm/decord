// Module ID: 1704
// Function ID: 18983
// Name: _callSuper
// Dependencies: []

// Module 1704 (_callSuper)
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
let closure_6 = { code: "function pnpm_PinwheelTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{scale:delayFunction(delay,animation(1,config))},{rotate:delayFunction(delay,animation('0rad',config))}]},initialValues:{opacity:0,transform:[{scale:0},{rotate:'5rad'}],...initialValues},callback:callback};}" };
const tmp2 = (ComplexAnimationBuilder) => {
  class PinwheelIn {
    constructor() {
      tmp = closure_1(this, PinwheelIn);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_8(this, PinwheelIn, items.concat(array));
      PinwheelIn = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_PinwheelTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{scale:delayFunction(delay,animation(1,config))},{rotate:delayFunction(delay,animation('0rad',config))}]},initialValues:{opacity:0,transform:[{scale:0},{rotate:'5rad'}],...initialValues},callback:callback};}
        pnpm_PinwheelTs1.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_PinwheelTs1.__workletHash = 8890961567516;
        pnpm_PinwheelTs1.__initData = closure_6;
        return pnpm_PinwheelTs1;
      };
      return tmp3;
    }
  }
  let closure_0 = PinwheelIn;
  callback3(PinwheelIn, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new PinwheelIn();
      }
    }
  ];
  return callback(PinwheelIn, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp2.presetName = "PinwheelIn";
let closure_7 = { code: "function pnpm_PinwheelTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{scale:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('5rad',config))}]},initialValues:{opacity:1,transform:[{scale:1},{rotate:'0rad'}],...initialValues},callback:callback};}" };
const tmp3 = (ComplexAnimationBuilder) => {
  class PinwheelOut {
    constructor() {
      tmp = closure_1(this, PinwheelOut);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_8(this, PinwheelOut, items.concat(array));
      PinwheelOut = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_PinwheelTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{scale:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('5rad',config))}]},initialValues:{opacity:1,transform:[{scale:1},{rotate:'0rad'}],...initialValues},callback:callback};}
        pnpm_PinwheelTs2.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_PinwheelTs2.__workletHash = 15028563671839;
        pnpm_PinwheelTs2.__initData = closure_7;
        return pnpm_PinwheelTs2;
      };
      return tmp3;
    }
  }
  let closure_0 = PinwheelOut;
  callback3(PinwheelOut, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new PinwheelOut();
      }
    }
  ];
  return callback(PinwheelOut, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp3.presetName = "PinwheelOut";

export const PinwheelIn = tmp2;
export const PinwheelOut = tmp3;
