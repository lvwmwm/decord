// Module ID: 4108
// Function ID: 33990
// Name: set
// Dependencies: []

// Module 4108 (set)
const set = new Set(["o", "O", ".", "-", "="]);
arg5.PATTERN_CHARS = set;
arg5.pattern = function pattern(items) {
  let num = 0;
  for (const item10008 of arg0) {
    let tmp2 = set;
    let tmp = item10008;
    if (set.has(item10008)) {
      let tmp10 = num;
      num = num + 1;
      continue;
    } else {
      let tmp3 = globalThis;
      let _TypeError = TypeError;
      let tmp4 = item10008;
      let tmp5 = num;
      let _HermesInternal = HermesInternal;
      let str = "pattern(): invalid character \"";
      let str2 = "\" at position ";
      let str3 = ". Allowed characters are: o O . - =";
      let tmp6 = new.target;
      let tmp7 = new.target;
      let typeError = new TypeError("pattern(): invalid character \"" + tmp + "\" at position " + num + ". Allowed characters are: o O . - =");
      let tmp9 = typeError;
      throw typeError;
    }
  }
  items = [];
  let num2 = 0;
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if ("o" === nextResult) {
      let tmp18 = items;
      let obj = { time: null, type: "transient", intensity: 0.4, sharpness: 0.4 };
      let tmp19 = num2;
      obj.time = num2;
      let arr = items.push(obj);
      num2 = num2 + 100;
    } else if ("O" === nextResult) {
      let tmp15 = items;
      obj = { time: null, type: "transient", intensity: 1, sharpness: 0.8 };
      let tmp16 = num2;
      obj.time = num2;
      arr = items.push(obj);
      num2 = num2 + 100;
    } else if ("." === nextResult) {
      let tmp14 = num2;
      num2 = num2 + 150;
    } else if ("-" === nextResult) {
      let tmp13 = num2;
      num2 = num2 + 400;
    } else if ("=" === nextResult) {
      let tmp12 = num2;
      num2 = num2 + 1000;
    }
    continue;
  }
  return items;
};
