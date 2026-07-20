// Module ID: 3896
// Function ID: 32237
// Name: getEnumProperty
// Dependencies: []
// Exports: useRiveEnum

// Module 3896 (getEnumProperty)
let closure_2 = importDefault(dependencyMap[0]);
function getEnumProperty(enumProperty) {
  return enumProperty.enumProperty(arg1);
}

export const useRiveEnum = function useRiveEnum(FillColor, instance) {
  let tmp3;
  let tmp4;
  let tmp5;
  let obj = instance(dependencyMap[1]);
  const cResult = obj.c(4);
  const obj2 = instance(dependencyMap[2]);
  [tmp3, tmp4, tmp5] = callback(instance(dependencyMap[2]).useRiveProperty(instance, FillColor, getEnumProperty), 3);
  if (cResult[0] === tmp5) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp3) {
        let tmp6 = cResult[3];
      }
      return tmp6;
    }
  }
  obj = { value: tmp3, setValue: tmp4, error: tmp5 };
  cResult[0] = tmp5;
  cResult[1] = tmp4;
  cResult[2] = tmp3;
  cResult[3] = obj;
  tmp6 = obj;
};
