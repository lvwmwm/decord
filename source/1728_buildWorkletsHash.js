// Module ID: 1728
// Function ID: 19380
// Name: buildWorkletsHash
// Dependencies: [1607, 1593]

// Module 1728 (buildWorkletsHash)
const require = arg1;
const dependencyMap = arg6;
function buildWorkletsHash(found) {
  const values = Object.values(found);
  return values.reduce((arg0, __workletHash) => arg0 + __workletHash.__workletHash.toString(), "");
}
function areWorkletsEqual(__workletHash, __workletHash2) {
  let closure_0 = __workletHash;
  let closure_1 = __workletHash2;
  if (__workletHash.__workletHash === __workletHash2.__workletHash) {
    const _Object = Object;
    const keys = Object.keys(__workletHash.__closure);
    const _Object2 = Object;
    return keys.length === Object.keys(__workletHash2.__closure).length && keys.every((arg0) => {
      let tmp = arg0 in __workletHash2.__closure;
      if (tmp) {
        tmp = __closure.__closure[arg0] === __workletHash2.__closure[arg0];
      }
      return tmp;
    });
  } else {
    return false;
  }
}
function isAnimated(arr) {
  if (Array.isArray(arr)) {
    let someResult = arr.some(isAnimated);
  } else {
    someResult = "object" === typeof arr;
    if (someResult) {
      someResult = null !== arr;
    }
    if (someResult) {
      let someResult1 = undefined !== arr.onFrame;
      if (!someResult1) {
        const _Object = Object;
        const values = Object.values(arr);
        someResult1 = values.some(isAnimated);
      }
      someResult = someResult1;
    }
  }
  return someResult;
}
isAnimated.__closure = {};
isAnimated.__workletHash = 4296700641760;
isAnimated.__initData = { code: "function isAnimated_Pnpm_utilsTs1(prop){const isAnimated_Pnpm_utilsTs1=this._recur;if(Array.isArray(prop)){return prop.some(isAnimated_Pnpm_utilsTs1);}else if(typeof prop==='object'&&prop!==null){if(prop.onFrame!==undefined){return true;}else{return Object.values(prop).some(isAnimated_Pnpm_utilsTs1);}}return false;}" };
let closure_3 = { code: "function shallowEqual_Pnpm_utilsTs2(a,b){const aKeys=Object.keys(a);const bKeys=Object.keys(b);if(aKeys.length!==bKeys.length){return false;}for(let i=0;i<aKeys.length;i++){if(a[aKeys[i]]!==b[aKeys[i]]){return false;}}return true;}" };
let closure_4 = { code: "function validateAnimatedStyles_Pnpm_utilsTs3(styles){if(typeof styles!=='object'){throw new ReanimatedError(\"`useAnimatedStyle` has to return an object, found \"+typeof styles+\" instead.\");}else if(Array.isArray(styles)){throw new ReanimatedError('`useAnimatedStyle` has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.');}}" };
arg5.buildWorkletsHash = buildWorkletsHash;
arg5.buildDependencies = function buildDependencies(arr, handler) {
  const values = Object.values(handler);
  const found = values.filter((arg0) => undefined !== arg0);
  let tmp2 = found;
  if (arr) {
    arr.push(buildWorkletsHash(found));
    tmp2 = arr;
  }
  return tmp2;
};
arg5.areDependenciesEqual = function areDependenciesEqual(dependencies, savedDependencies) {
  if ("function" === typeof Object.is) {
    const _Object = Object;
  } else {
    is = function is(arg0, arg1) {
      let tmp = arg0 === arg1;
      if (tmp) {
        let tmp2 = 0 !== arg0;
        if (!tmp2) {
          tmp2 = 1 / arg0 === 1 / arg1;
        }
        tmp = tmp2;
      }
      if (!tmp) {
        const _Number = Number;
        let isNaNResult = Number.isNaN(arg0);
        if (isNaNResult) {
          const _Number2 = Number;
          isNaNResult = Number.isNaN(arg1);
        }
        tmp = isNaNResult;
      }
      return tmp;
    };
  }
  let flag = false;
  if (dependencies) {
    flag = false;
    if (savedDependencies) {
      flag = false;
      if (savedDependencies.length === dependencies.length) {
        let num = 0;
        flag = true;
        if (0 < savedDependencies.length) {
          while (true) {
            let tmp = dependencies[num];
            let tmp2 = savedDependencies[num];
            if (is(tmp, tmp2)) {
              num = num + 1;
              flag = true;
              if (num >= savedDependencies.length) {
                break;
              }
            } else {
              let tmp3 = require;
              let tmp4 = dependencyMap;
              let obj = require(1607) /* isWorkletFunction */;
              flag = false;
              if (!obj.isWorkletFunction(tmp)) {
                break;
              } else {
                let tmp5 = require;
                let tmp6 = dependencyMap;
                let obj2 = require(1607) /* isWorkletFunction */;
                flag = false;
                if (!obj2.isWorkletFunction(tmp2)) {
                  break;
                } else {
                  let tmp7 = areWorkletsEqual;
                  flag = false;
                  if (!areWorkletsEqual(tmp, tmp2)) {
                    break;
                  }
                }
              }
            }
            break;
          }
        }
      }
    }
  }
  return flag;
};
arg5.isAnimated = isAnimated;
arg5.shallowEqual = (() => {
  function shallowEqual(arg0, arg1) {
    const keys = Object.keys(arg0);
    if (keys.length !== Object.keys(arg1).length) {
      return false;
    } else {
      let num = 0;
      if (0 < keys.length) {
        while (arg0[keys[num]] === arg1[keys[num]]) {
          num = num + 1;
        }
        return false;
      }
      return true;
    }
  }
  shallowEqual.__closure = {};
  shallowEqual.__workletHash = 6945711106539;
  shallowEqual.__initData = closure_3;
  return shallowEqual;
})();
arg5.validateAnimatedStyles = (() => {
  function validateAnimatedStyles(arg0) {
    if ("object" !== typeof arg0) {
      const ReanimatedError2 = outer1_0(outer1_1[1]).ReanimatedError;
      const _HermesInternal = HermesInternal;
      const prototype2 = ReanimatedError2.prototype;
      const reanimatedError2 = new ReanimatedError2("`useAnimatedStyle` has to return an object, found " + tmp + " instead.");
      throw reanimatedError2;
    } else {
      const _Array = Array;
      if (Array.isArray(arg0)) {
        const ReanimatedError = outer1_0(outer1_1[1]).ReanimatedError;
        const prototype = ReanimatedError.prototype;
        const reanimatedError = new ReanimatedError("`useAnimatedStyle` has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.");
        throw reanimatedError;
      }
    }
  }
  validateAnimatedStyles.__closure = {};
  validateAnimatedStyles.__workletHash = 9250446401049;
  validateAnimatedStyles.__initData = closure_4;
  return validateAnimatedStyles;
})();
