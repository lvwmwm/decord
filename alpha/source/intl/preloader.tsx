// Module ID: 2121
// Function ID: 2122
// Name: preloader
// Dependencies: [5, 1115, 1980, 2122, 2154, 2186, 2218, 2250, 2252, 2254, 2286, 2288, 2320, 2352, 2384, 2416, 2418, 2420, 2452, 2484, 2516, 2548, 2580, 2582, 2584, 2616, 2618, 2650, 2682, 2714, 2746, 2778, 2810, 2842, 2874, 2906, 2938, 2970, 3002, 3034, 3036, 3068, 3100, 3132, 3164, 3196, 3228, 3260, 3262, 3294, 3326, 3358, 3390, 3422, 3454, 3486, 3518, 3550, 3582, 3614, 3646, 3648, 3680, 3712, 3714, 3746, 3778, 3810, 3842, 3874, 2]
// Exports: preloadAllIntlMessageFiles

// Module 2121 (preloader)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _preloadAllIntlMessageFiles(arg0, value) {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c0 = 2;
      if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        const items = [asyncRequireImpl(dependencyMap[1], dependencyMap.paths), asyncRequireImpl(dependencyMap[3], dependencyMap.paths), asyncRequireImpl(dependencyMap[4], dependencyMap.paths), asyncRequireImpl(dependencyMap[5], dependencyMap.paths), asyncRequireImpl(dependencyMap[6], dependencyMap.paths), asyncRequireImpl(dependencyMap[7], dependencyMap.paths), asyncRequireImpl(dependencyMap[8], dependencyMap.paths), asyncRequireImpl(dependencyMap[9], dependencyMap.paths), asyncRequireImpl(dependencyMap[10], dependencyMap.paths), asyncRequireImpl(dependencyMap[11], dependencyMap.paths), asyncRequireImpl(dependencyMap[12], dependencyMap.paths), asyncRequireImpl(dependencyMap[13], dependencyMap.paths), asyncRequireImpl(dependencyMap[14], dependencyMap.paths), asyncRequireImpl(dependencyMap[15], dependencyMap.paths), asyncRequireImpl(dependencyMap[16], dependencyMap.paths), asyncRequireImpl(dependencyMap[17], dependencyMap.paths), asyncRequireImpl(dependencyMap[18], dependencyMap.paths), asyncRequireImpl(dependencyMap[19], dependencyMap.paths), asyncRequireImpl(dependencyMap[20], dependencyMap.paths), asyncRequireImpl(dependencyMap[21], dependencyMap.paths), asyncRequireImpl(dependencyMap[22], dependencyMap.paths), asyncRequireImpl(dependencyMap[23], dependencyMap.paths), asyncRequireImpl(dependencyMap[24], dependencyMap.paths), asyncRequireImpl(dependencyMap[25], dependencyMap.paths), asyncRequireImpl(dependencyMap[26], dependencyMap.paths), asyncRequireImpl(dependencyMap[27], dependencyMap.paths), asyncRequireImpl(dependencyMap[28], dependencyMap.paths), asyncRequireImpl(dependencyMap[29], dependencyMap.paths), asyncRequireImpl(dependencyMap[30], dependencyMap.paths), asyncRequireImpl(dependencyMap[31], dependencyMap.paths), asyncRequireImpl(dependencyMap[32], dependencyMap.paths), asyncRequireImpl(dependencyMap[33], dependencyMap.paths), asyncRequireImpl(dependencyMap[34], dependencyMap.paths), asyncRequireImpl(dependencyMap[35], dependencyMap.paths), asyncRequireImpl(dependencyMap[36], dependencyMap.paths), asyncRequireImpl(dependencyMap[37], dependencyMap.paths), asyncRequireImpl(dependencyMap[38], dependencyMap.paths), asyncRequireImpl(dependencyMap[39], dependencyMap.paths), asyncRequireImpl(dependencyMap[40], dependencyMap.paths), asyncRequireImpl(dependencyMap[41], dependencyMap.paths), asyncRequireImpl(dependencyMap[42], dependencyMap.paths), asyncRequireImpl(dependencyMap[43], dependencyMap.paths), asyncRequireImpl(dependencyMap[44], dependencyMap.paths), asyncRequireImpl(dependencyMap[45], dependencyMap.paths), asyncRequireImpl(dependencyMap[46], dependencyMap.paths), asyncRequireImpl(dependencyMap[47], dependencyMap.paths), asyncRequireImpl(dependencyMap[48], dependencyMap.paths), asyncRequireImpl(dependencyMap[49], dependencyMap.paths), asyncRequireImpl(dependencyMap[50], dependencyMap.paths), asyncRequireImpl(dependencyMap[51], dependencyMap.paths), asyncRequireImpl(dependencyMap[52], dependencyMap.paths), asyncRequireImpl(dependencyMap[53], dependencyMap.paths), asyncRequireImpl(dependencyMap[54], dependencyMap.paths), asyncRequireImpl(dependencyMap[55], dependencyMap.paths), asyncRequireImpl(dependencyMap[56], dependencyMap.paths), asyncRequireImpl(dependencyMap[57], dependencyMap.paths), asyncRequireImpl(dependencyMap[58], dependencyMap.paths), asyncRequireImpl(dependencyMap[59], dependencyMap.paths), asyncRequireImpl(dependencyMap[60], dependencyMap.paths), asyncRequireImpl(dependencyMap[61], dependencyMap.paths), asyncRequireImpl(dependencyMap[62], dependencyMap.paths), asyncRequireImpl(dependencyMap[63], dependencyMap.paths), asyncRequireImpl(dependencyMap[64], dependencyMap.paths), asyncRequireImpl(dependencyMap[65], dependencyMap.paths), asyncRequireImpl(dependencyMap[66], dependencyMap.paths), asyncRequireImpl(dependencyMap[67], dependencyMap.paths), asyncRequireImpl(dependencyMap[68], dependencyMap.paths), asyncRequireImpl(dependencyMap[69], dependencyMap.paths)];
        c0 = 3;
        const obj = { value: Promise.all(items), done: true };
        return obj;
      }
    } catch (tmp4) {
      c0 = tmp;
      throw tmp4;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("intl/preloader.tsx");

export const preloadAllIntlMessageFiles = function preloadAllIntlMessageFiles() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
