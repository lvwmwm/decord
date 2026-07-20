// Module ID: 1619
// Function ID: 17971
// Name: checkInvalidReadDuringRender
// Dependencies: []

// Module 1619 (checkInvalidReadDuringRender)
function checkInvalidReadDuringRender() {

}
function checkInvalidWriteDuringRender() {

}
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[0]);
let closure_2 = _module1.isJest();
let closure_3 = { code: "function addCompilerSafeGetAndSet_Pnpm_mutablesTs1(mutable){Object.defineProperties(mutable,{get:{value:function(){return mutable.value;},configurable:false,enumerable:false},set:{value:function(newValue){if(typeof newValue==='function'&&!newValue.__isAnimationDefinition){mutable.value=newValue(mutable.value);}else{mutable.value=newValue;}},configurable:false,enumerable:false}});}" };
let closure_4 = () => {
  function addCompilerSafeGetAndSet(arg0) {
    let obj = { get: obj };
    obj = {
      flexDirection: true,
      gap: true,
      padding: true,
      value() {
        return arg0.value;
      }
    };
    obj = {
      flexDirection: true,
      gap: true,
      padding: true,
      value: (arg0) => {
        function value(arg0) {
          return arg0(...arguments);
        }
        value.toString = () => arg0.toString();
        return value;
      }((__isAnimationDefinition) => {
        if ("function" === typeof __isAnimationDefinition) {
          if (!__isAnimationDefinition.__isAnimationDefinition) {
            __isAnimationDefinition.value = __isAnimationDefinition(__isAnimationDefinition.value);
          }
        }
        __isAnimationDefinition.value = __isAnimationDefinition;
      })
    };
    obj.set = obj;
    Object.defineProperties(arg0, obj);
  }
  addCompilerSafeGetAndSet.__closure = {};
  addCompilerSafeGetAndSet.__workletHash = 14094096506039;
  addCompilerSafeGetAndSet.__initData = closure_3;
  return addCompilerSafeGetAndSet;
}();
let closure_5 = { code: "function hideInternalValueProp_Pnpm_mutablesTs2(mutable){Object.defineProperty(mutable,'_value',{configurable:false,enumerable:false});}" };
let closure_6 = () => {
  function hideInternalValueProp(arg0) {
    Object.defineProperty(arg0, "_value", {});
  }
  hideInternalValueProp.__closure = {};
  hideInternalValueProp.__workletHash = 3380393180484;
  hideInternalValueProp.__initData = closure_5;
  return hideInternalValueProp;
}();
let closure_7 = { code: "function makeMutableUI_Pnpm_mutablesTs3(initial){const{valueSetter,hideInternalValueProp,addCompilerSafeGetAndSet}=this.__closure;const listeners=new Map();let value=initial;const mutable={get value(){return value;},set value(newValue){valueSetter(mutable,newValue);},get _value(){return value;},set _value(newValue){value=newValue;listeners.forEach(function(listener){listener(newValue);});},modify:function(modifier,forceUpdate=true){valueSetter(mutable,modifier!==undefined?modifier(value):value,forceUpdate);},addListener:function(id,listener){listeners.set(id,listener);},removeListener:function(id){listeners.delete(id);},_animation:null,_isReanimatedSharedValue:true};hideInternalValueProp(mutable);addCompilerSafeGetAndSet(mutable);return mutable;}" };
const tmp3 = () => {
  function makeMutableUI(initialValues) {
    const map = new Map();
    const obj = {};
    Object.defineProperty(obj, "value", {
      get: () => arg0,
      set: (value) => {
        const obj = map(value[2]);
        obj.valueSetter(obj, value);
      }
    });
    Object.defineProperty(obj, "_value", {
      get: () => arg0,
      set: (arg0) => {
        const item = arg0.forEach((arg0) => {
          arg0(arg0);
        });
      }
    });
    obj.modify = function modify(arg0) {
      const tmp = arguments.length > 1 && undefined !== arguments[1];
      let tmp2 = !tmp;
      if (tmp) {
        tmp2 = arguments[1];
      }
      const obj = map(arg0[2]);
      if (undefined !== arg0) {
        let tmp4 = arg0(arg0);
      } else {
        tmp4 = arg0;
      }
      obj.valueSetter(obj, tmp4, tmp2);
    };
    obj.addListener = function addListener(arg0, arg1) {
      const result = map.set(arg0, arg1);
    };
    obj.removeListener = function removeListener(arg0) {
      map.delete(arg0);
    };
    obj._animation = null;
    obj._isReanimatedSharedValue = true;
    callback2(obj);
    callback(obj);
    return obj;
  }
  makeMutableUI.__closure = { valueSetter: require(dependencyMap[2]).valueSetter, hideInternalValueProp: closure_6, addCompilerSafeGetAndSet: closure_4 };
  makeMutableUI.__workletHash = 8132940328790;
  makeMutableUI.__initData = closure_7;
  return makeMutableUI;
}();
let closure_9 = { code: "function pnpm_mutablesTs4(){const{makeMutableUI,initial}=this.__closure;return makeMutableUI(initial);}" };
let closure_10 = { code: "function pnpm_mutablesTs5(sv){return sv.value;}" };
let closure_11 = { code: "function pnpm_mutablesTs6(){const{mutable,newValue}=this.__closure;mutable.value=newValue;}" };
let closure_12 = { code: "function pnpm_mutablesTs7(){const{mutable,modifier,forceUpdate}=this.__closure;mutable.modify(modifier,forceUpdate);}" };

export const makeMutableUI = tmp3;
export const makeMutable = _module.shouldBeUseWeb() ? function makeMutableWeb(arg0) {
  const require = arg0;
  const dependencyMap = new Map();
  const obj = {};
  Object.defineProperty(obj, "value", {
    get: () => {
      callback();
      return arg0;
    },
    set: (value) => {
      callback2();
      const obj = value(map[2]);
      obj.valueSetter(obj, value);
    }
  });
  Object.defineProperty(obj, "_value", {
    get: () => arg0,
    set: (arg0) => {
      const item = map.forEach((arg0) => {
        arg0(arg0);
      });
    }
  });
  obj.modify = function modify(arg0) {
    const tmp = arguments.length > 1 && undefined !== arguments[1];
    let tmp2 = !tmp;
    if (tmp) {
      tmp2 = arguments[1];
    }
    const obj = arg0(map[2]);
    if (undefined !== arg0) {
      let value = arg0(obj.value);
    } else {
      value = obj.value;
    }
    obj.valueSetter(obj, value, tmp2);
  };
  obj.addListener = function addListener(arg0, arg1) {
    const result = map.set(arg0, arg1);
  };
  obj.removeListener = function removeListener(arg0) {
    map.delete(arg0);
  };
  obj._isReanimatedSharedValue = true;
  let closure_2 = obj;
  callback2(obj);
  callback(obj);
  if (closure_2) {
    obj.toJSON = () => JSON.stringify(arg0);
  }
  return obj;
} : function makeMutableNative(initial) {
  const require = initial;
  let obj = require(dependencyMap[3]);
  /* worklet (recovered source) */ function pnpm_mutablesTs4(){const{makeMutableUI,initial}=this.__closure;return makeMutableUI(initial);}
  obj = { makeMutableUI: tmp3, initial };
  pnpm_mutablesTs4.__closure = obj;
  pnpm_mutablesTs4.__workletHash = 38746935544;
  pnpm_mutablesTs4.__initData = closure_9;
  obj = {};
  const shareableCloneRecursive = obj.makeShareableCloneRecursive({ __init: pnpm_mutablesTs4 });
  Object.defineProperty(obj, "value", {
    get: () => {
      callback2();
      const obj = arg0(obj[4]);
      /* worklet (recovered source) */ function pnpm_mutablesTs5(sv){return sv.value;}
      pnpm_mutablesTs5.__closure = {};
      pnpm_mutablesTs5.__workletHash = 5375306386445;
      pnpm_mutablesTs5.__initData = closure_10;
      return obj.executeOnUIRuntimeSync(pnpm_mutablesTs5)(obj);
    },
    set: (newValue) => {
      callback3();
      let obj = newValue(obj[4]);
      /* worklet (recovered source) */ function pnpm_mutablesTs6(){const{mutable,newValue}=this.__closure;mutable.value=newValue;}
      obj = { mutable: obj, newValue };
      pnpm_mutablesTs6.__closure = obj;
      pnpm_mutablesTs6.__workletHash = 11269088169577;
      pnpm_mutablesTs6.__initData = closure_11;
      obj.runOnUI(pnpm_mutablesTs6)();
    }
  });
  Object.defineProperty(obj, "_value", {
    get: () => {
      const reanimatedError = new arg0(obj[5]).ReanimatedError("Reading from `_value` directly is only possible on the UI runtime. Perhaps you passed an Animated Style to a non-animated component?");
      throw reanimatedError;
    },
    set: (arg0) => {
      const reanimatedError = new arg0(obj[5]).ReanimatedError("Setting `_value` directly is only possible on the UI runtime. Perhaps you want to assign to `value` instead?");
      throw reanimatedError;
    }
  });
  obj.modify = function modify(modifier) {
    const tmp = arguments.length > 1 && undefined !== arguments[1];
    let tmp2 = !tmp;
    if (tmp) {
      tmp2 = arguments[1];
    }
    let obj = tmp2;
    obj = modifier(obj[4]);
    /* worklet (recovered source) */ function pnpm_mutablesTs7(){const{mutable,modifier,forceUpdate}=this.__closure;mutable.modify(modifier,forceUpdate);}
    obj = { mutable: obj, modifier, forceUpdate: tmp2 };
    pnpm_mutablesTs7.__closure = obj;
    pnpm_mutablesTs7.__workletHash = 15983399508815;
    pnpm_mutablesTs7.__initData = closure_12;
    obj.runOnUI(pnpm_mutablesTs7)();
  };
  obj.addListener = function addListener() {
    const reanimatedError = new arg0(obj[5]).ReanimatedError("Adding listeners is only possible on the UI runtime.");
    throw reanimatedError;
  };
  obj.removeListener = function removeListener() {
    const reanimatedError = new arg0(obj[5]).ReanimatedError("Removing listeners is only possible on the UI runtime.");
    throw reanimatedError;
  };
  obj._isReanimatedSharedValue = true;
  const dependencyMap = obj;
  callback2(obj);
  const shareableMappingCache = require(dependencyMap[6]).shareableMappingCache;
  const result = shareableMappingCache.set(obj, shareableCloneRecursive);
  return obj;
};
