// Module ID: 501
// Function ID: 6445
// Name: v4
// Dependencies: [502, 493, 494]

// Module 501 (v4)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = function v4(arg0, arg1, arg2) {
  let obj = arg0;
  let num = arg2;
  if (module(502).randomUUID) {
    if (!arg1) {
      if (!obj) {
        return module(502).randomUUID();
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
      rng = module(493);
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
    return require(494) /* unsafeStringify */.unsafeStringify(random);
  }
};
