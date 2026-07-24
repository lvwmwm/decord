// Module ID: 5566
// Function ID: 47341
// Name: isArrayish
// Dependencies: []

// Module 5566 (isArrayish)

export default function isArrayish(arg0) {
  let tmp = !arg0;
  if (!tmp) {
    tmp = "string" === typeof arg0;
  }
  let tmp2 = !tmp;
  if (!tmp) {
    const _Array = Array;
    let isArray = arg0 instanceof Array;
    if (!isArray) {
      const _Array2 = Array;
      isArray = Array.isArray(arg0);
    }
    if (!isArray) {
      let tmp5 = arg0.length >= 0;
      if (tmp5) {
        const _Function = Function;
        let tmp6 = arg0.splice instanceof Function;
        if (!tmp6) {
          const _Object = Object;
          let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arg0, arg0.length - 1);
          if (ownPropertyDescriptor) {
            ownPropertyDescriptor = "String" !== arg0.constructor.name;
          }
          tmp6 = ownPropertyDescriptor;
        }
        tmp5 = tmp6;
      }
      isArray = tmp5;
    }
    tmp2 = isArray;
  }
  return tmp2;
};
