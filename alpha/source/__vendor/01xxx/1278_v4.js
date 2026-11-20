// Module ID: 1278
// Function ID: 1279
// Name: v4
// Dependencies: [1279, 1270, 1271]
// Exports: default

// Module 1278 (v4)
import rngDefault from "rng" /* 1270 */;
import stringify from "stringify" /* 1271 */;
import _modDef1279 from "module_1279" /* 1279 */;


export default function v4(arg0, arg1, arg2) {
  let obj = arg0;
  if (_modDef1279.randomUUID) {
    if (!arg1) {
      if (!obj) {
        const tmpResult = _modDef1279;
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
