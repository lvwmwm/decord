// Module ID: 8148
// Function ID: 64450
// Name: deprecatedCreateStrictShapeTypeChecker
// Dependencies: []

// Module 8148 (deprecatedCreateStrictShapeTypeChecker)

export default function deprecatedCreateStrictShapeTypeChecker(arg0) {
  const require = arg0;
  function checkType(arg0, arg1, arg2, arg3, arg4) {
    if (arg1[arg2]) {
      let str4 = arg4;
      if (!arg4) {
        str4 = "(unknown)";
      }
      if ("object" !== typeof arg1[arg2]) {
        const _HermesInternal2 = HermesInternal;
        arg0(checkType[0])(false, "Invalid " + str4 + " `" + arg2 + "` of type `" + tmp10 + "` supplied to `" + arg3 + "`, expected `object`.");
        const tmp13 = arg0(checkType[0]);
      }
      const _Object = Object;
      const merged = Object.assign({}, arg1[arg2], arg0);
      const length = arguments.length;
      let _Array = Array;
      let num5 = 0;
      if (length > 5) {
        num5 = length - 5;
      }
      const prototype = _Array.prototype;
      _Array = new _Array(num5);
      for (let num6 = 5; num6 < length; num6 = num6 + 1) {
        _Array[num6 - 5] = arguments[num6];
      }
      for (const key10082 in merged) {
        let tmp47 = closure_0;
        let obj = closure_0[key10082];
        if (!obj) {
          let tmp30 = closure_0;
          let tmp31 = closure_1;
          let _HermesInternal3 = HermesInternal;
          let str18 = "Invalid props.";
          let tmp33 = arg2;
          let str19 = " key `";
          let tmp34 = key10082;
          let str20 = "` supplied to `";
          let tmp35 = arg3;
          let str21 = "`.\nBad object: ";
          let tmp32 = closure_0(closure_1[0]);
          let _JSON = JSON;
          let combined = "Invalid props." + arg2 + " key `" + tmp46 + "` supplied to `" + arg3 + "`.\nBad object: ";
          let _JSON2 = JSON;
          let _Object2 = Object;
          let tmp38 = closure_0;
          let sum = combined + JSON.stringify(arg1[arg2], null, "  ");
          let tmp32Result = tmp32(false, sum + "\nValid keys: " + JSON.stringify(Object.keys(closure_0), null, "  "));
        }
        let items = [tmp9, key10082, arg3, arg4];
        let applyResult = obj.apply(undefined, items.concat(_Array));
        if (!applyResult) {
          continue;
        } else {
          let tmp41 = closure_0;
          let tmp42 = closure_1;
          let _JSON3 = JSON;
          let tmp43 = closure_0(closure_1[0]);
          let text = `${tmp40.message}
    Bad object: `;
          let tmp43Result = tmp43(false, `${tmp40.message}
    Bad object: ` + JSON.stringify(arg1[arg2], null, "  "));
          // continue
        }
        continue;
      }
    } else if (arg0) {
      const _HermesInternal = HermesInternal;
      arg0(checkType[0])(false, "Required object `" + arg2 + "` was not specified in `" + arg3 + "`.");
      const tmp4 = arg0(checkType[0]);
    }
  }
  const dependencyMap = checkType;
  function chainedCheckType(arg0, arg1, arg2, arg3) {
    const length = arguments.length;
    let num = 0;
    if (length > 4) {
      num = length - 4;
    }
    const array = new Array(num);
    for (let num2 = 4; num2 < length; num2 = num2 + 1) {
      array[num2 - 4] = arguments[num2];
    }
    const items = [false, arg0, arg1, arg2, arg3];
    return checkType.apply(undefined, items.concat(array));
  }
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
};
