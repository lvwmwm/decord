// Module ID: 111
// Function ID: 1608
// Name: accumulateDifferences
// Dependencies: []
// Exports: stringifyValidationResult, validate

// Module 111 (accumulateDifferences)
function accumulateDifferences(items, arr2, arg2, arg3) {
  let tmp2;
  const keys = Object.keys();
  if (keys !== undefined) {
    let tmp4 = tmp2;
    while (keys[tmp] !== undefined) {
      let tmp32 = tmp5;
      let tmp33 = arg2[tmp5];
      if (arg3.hasOwnProperty(tmp5)) {
        let tmp8 = arg3[tmp5];
        let tmp9 = ifObject;
        let tmp10 = ifObject(tmp33);
        if (null != tmp10) {
          let tmp11 = ifObject;
          let tmp12 = ifObject(tmp8);
          tmp4 = tmp12;
          if (null != tmp12) {
            let arr = arr2.push(tmp5);
            let tmp23 = accumulateDifferences;
            let tmp24 = items;
            let tmp25 = arr2;
            let tmp26 = tmp10;
            let tmp27 = tmp12;
            let tmp28 = accumulateDifferences(items, arr2, tmp10, tmp12);
            arr = arr2.pop();
            let tmp30 = tmp8;
            let tmp31 = tmp10;
            tmp2 = tmp12;
            // continue
          }
        }
        let result = tmp33 === tmp8;
        if (!result) {
          let tmp14 = importAll;
          let tmp15 = dependencyMap;
          let obj2 = importAll(dependencyMap[1]);
          result = obj2.enableNativeCSSParsing();
        }
        let tmp16 = tmp8;
        let tmp17 = tmp10;
        tmp2 = tmp4;
        if (result) {
          continue;
        } else {
          let obj = {};
          items = [];
          let tmp18 = callback;
          let items1 = [tmp5];
          obj.path = items.concat(callback(arr2), items1);
          obj.type = "unequal";
          obj.nativeValue = tmp33;
          obj.staticValue = tmp8;
          let arr1 = items.push(obj);
          let tmp20 = tmp8;
          let tmp21 = tmp10;
          tmp2 = tmp4;
          // continue
        }
        continue;
      } else {
        obj = {};
        let items2 = [];
        let tmp6 = callback;
        let items3 = [tmp5];
        obj.path = items2.concat(callback(arr2), items3);
        obj.type = "missing";
        obj.nativeValue = tmp33;
        arr2 = items.push(obj);
        tmp2 = tmp4;
        // continue
      }
      continue;
    }
  }
}
function ifObject(arg0) {
  let tmp = null;
  if ("object" === typeof arg0) {
    const _Array = Array;
    tmp = null;
    if (!Array.isArray(arg0)) {
      tmp = arg0;
    }
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);

export const validate = function validate(arg0, bubblingEventTypes, bubblingEventTypes2) {
  const items = [];
  let obj = { bubblingEventTypes: bubblingEventTypes.bubblingEventTypes, directEventTypes: bubblingEventTypes.directEventTypes, uiViewClassName: bubblingEventTypes.uiViewClassName, validAttributes: bubblingEventTypes.validAttributes };
  obj = { bubblingEventTypes: bubblingEventTypes2.bubblingEventTypes, directEventTypes: bubblingEventTypes2.directEventTypes, uiViewClassName: bubblingEventTypes2.uiViewClassName, validAttributes: bubblingEventTypes2.validAttributes };
  accumulateDifferences(items, [], obj, obj);
  if (0 === items.length) {
    obj = { type: "valid" };
    let obj1 = obj;
  } else {
    obj1 = { type: "invalid", differences: items };
  }
  return obj1;
};
export const stringifyValidationResult = function stringifyValidationResult(arg0, validateResult) {
  const differences = validateResult.differences;
  const items = ["StaticViewConfigValidator: Invalid static view config for '" + arg0 + "'.", ""];
  const combined = items.concat(callback(differences.map((arg0) => {
    let path;
    let type;
    ({ type, path } = arg0);
    if ("missing" === type) {
      const _HermesInternal2 = HermesInternal;
      return "- '" + path.join(".") + "' is missing.";
    } else if ("unequal" === type) {
      const _HermesInternal = HermesInternal;
      return "- '" + path.join(".") + "' is the wrong value.";
    }
  })), ["<string:2246337460>"]);
  return combined.join("\n");
};
