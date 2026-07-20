// Module ID: 5259
// Function ID: 44530
// Dependencies: []

// Module 5259
if (function shouldUseNative() {
  let sum;
  if (Object.assign) {
    const _String = String;
    const string = new String("abc");
    string[5] = "de";
    const _Object = Object;
    if ("5" === Object.getOwnPropertyNames(string)[0]) {
      return false;
    } else {
      let obj = {};
      const getOwnPropertySymbols = obj;
      let num3 = 0;
      do {
        let tmp5 = obj;
        let _String2 = String;
        let tmp6 = num3;
        tmp9["_" + String.fromCharCode(num3)] = num3;
        sum = num3 + 1;
        num3 = sum;
      } while (sum < 10);
      const _Object2 = Object;
      const ownPropertyNames = Object.getOwnPropertyNames(obj);
      const mapped = ownPropertyNames.map((arg0) => obj[arg0]);
      if ("0123456789" !== mapped.join("")) {
        return false;
      } else {
        obj = {};
        const hasOwnProperty = obj;
        const split = "abcdefghijklmnopqrst".split;
        const parts = "abcdefghijklmnopqrst".split("");
        const item = parts.forEach((arg0) => {
          obj[arg0] = arg0;
        });
        const _Object3 = Object;
        const _Object4 = Object;
        const keys = Object.keys(Object.assign({}, obj));
        return "abcdefghijklmnopqrst" === keys.join("");
      }
    }
  } else {
    return false;
  }
}()) {
  const _Object = Object;
  let fn = Object.assign;
} else {
  fn = (arg0, arg1) => {
    if (null == arg0) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Object.assign cannot be called with null or undefined");
      throw typeError;
    } else {
      const _Object2 = Object;
      const ObjectResult = Object(arg0);
      let num3 = 1;
      if (1 < arguments.length) {
        do {
          let _Object = Object;
          let ObjectResult1 = Object(arguments[num3]);
          let tmp2 = ObjectResult1;
          let tmp3 = tmp4;
          let keys = Object.keys();
          if (keys !== undefined) {
            let tmp4 = tmp3;
            let tmp6 = keys[call];
            while (tmp6 !== undefined) {
              let tmp20 = tmp6;
              let tmp21 = closure_1;
              tmp3 = tmp6;
              if (!closure_1.call(ObjectResult1, tmp6)) {
                continue;
              } else {
                ObjectResult[tmp6] = ObjectResult1[tmp6];
                tmp3 = tmp6;
                // continue
              }
              continue;
            }
          }
          let tmp7 = closure_0;
          if (closure_0) {
            let tmp8 = closure_0;
            let arr = closure_0(ObjectResult1);
            let num = 0;
            let tmp9 = arr;
            let num2 = 0;
            if (0 < arr.length) {
              do {
                let tmp10 = closure_2;
                let call = closure_2.call;
                if (call(ObjectResult1, arr[num])) {
                  ObjectResult[arr[num]] = ObjectResult1[arr[num]];
                }
                num = num + 1;
                let tmp11 = arr;
                let tmp12 = num;
              } while (num < arr.length);
            }
          }
          num3 = num3 + 1;
        } while (num3 < arguments.length);
      }
      return ObjectResult;
    }
  };
}

export default fn;
