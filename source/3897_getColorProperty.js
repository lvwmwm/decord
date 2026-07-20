// Module ID: 3897
// Function ID: 32240
// Name: getColorProperty
// Dependencies: []
// Exports: useRiveColor

// Module 3897 (getColorProperty)
let closure_2 = importDefault(dependencyMap[0]);
arg1(dependencyMap[1]).useCallback;
function getColorProperty(colorProperty) {
  return colorProperty.colorProperty(arg1);
}

export const useRiveColor = function useRiveColor(FillColor, instance) {
  let obj = instance(dependencyMap[2]);
  const cResult = obj.c(8);
  const tmp2 = callback(instance(dependencyMap[3]).useRiveProperty(instance, FillColor, getColorProperty), 3);
  const first = tmp2[0];
  instance = tmp4;
  if (cResult[0] !== first) {
    let fromIntResult;
    if (undefined !== first) {
      const RiveColor = instance(dependencyMap[4]).RiveColor;
      fromIntResult = RiveColor.fromInt(first);
    }
    cResult[0] = first;
    cResult[1] = fromIntResult;
    let tmp6 = fromIntResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp2[1]) {
    function t1(arg0) {
      let fromHexStringResult = arg0;
      if ("string" === typeof arg0) {
        const RiveColor = tmp4(closure_1[4]).RiveColor;
        fromHexStringResult = RiveColor.fromHexString(arg0);
      }
      tmp4(fromHexStringResult.toInt());
    }
    cResult[2] = tmp4;
    cResult[3] = t1;
    let tmp10 = t1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp2[2]) {
    if (cResult[5] === tmp10) {
      if (cResult[6] === tmp6) {
        let tmp11 = cResult[7];
      }
      return tmp11;
    }
  }
  obj = { value: tmp6, setValue: tmp10, error: tmp2[2] };
  cResult[4] = tmp2[2];
  cResult[5] = tmp10;
  cResult[6] = tmp6;
  cResult[7] = obj;
  tmp11 = obj;
};
