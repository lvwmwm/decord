// Module ID: 1279
// Function ID: 1280
// Name: v4
// Dependencies: [1280, 1271, 1272]
// Exports: default

// Module 1279 (v4)
import rngDefault from "rng" /* 1271 */;
import stringify from "stringify" /* 1272 */;
import _modDef1280 from "module_1280" /* 1280 */;


export default function v4(arg0, arg1, arg2) {
  let obj = arg0;
  if (_modDef1280.randomUUID) {
    if (!arg1) {
      if (!obj) {
        const tmpResult = _modDef1280;
        return tmpResult.randomUUID();
      }
    }
  }
  if (!obj) {
    obj = {};
  }
  let random = obj.random;
  if (!random) {
    const tmp3 = obj.rng || rngDefault;
    random = tmp3();
  }
  random[6] = 15 & random[6] | 64;
  random[8] = 63 & random[8] | 128;
  if (arg1) {
    let num3 = 0;
    const tmp5 = arg2 || 0;
    do {
      arg1[tmp5 + num3] = random[num3];
      num3 = num3 + 1;
    } while (num3 < 16);
    return arg1;
  } else {
    const obj3 = stringify;
    return obj3.unsafeStringify(random);
  }
};
