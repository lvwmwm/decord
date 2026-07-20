// Module ID: 501
// Function ID: 6445
// Name: v4
// Dependencies: []

// Module 501 (v4)
arg5.default = function v4(arg0, arg1, arg2) {
  let obj = arg0;
  let num = arg2;
  if (arg2(arg6[0]).randomUUID) {
    if (!arg1) {
      if (!obj) {
        return arg2(arg6[0]).randomUUID();
      }
    }
  }
  if (!obj) {
    obj = {};
  }
  let random = obj.random;
  if (!random) {
    let rng = obj.rng;
    if (!rng) {
      rng = arg2(arg6[1]);
    }
    random = rng();
  }
  random[6] = 15 & random[6] | 64;
  random[8] = 63 & random[8] | 128;
  if (arg1) {
    if (!num) {
      num = 0;
    }
    let num5 = 0;
    do {
      arg1[num + num5] = random[num5];
      num5 = num5 + 1;
    } while (num5 < 16);
    return arg1;
  } else {
    return arg1(arg6[2]).unsafeStringify(random);
  }
};
