// Module ID: 2124
// Function ID: 2125
// Name: preloader
// Dependencies: [5, 1115, 1981, 2125, 2157, 2189, 2221, 2253, 2255, 2257, 2289, 2291, 2323, 2355, 2387, 2419, 2421, 2423, 2455, 2487, 2519, 2551, 2583, 2585, 2587, 2619, 2621, 2653, 2685, 2717, 2749, 2781, 2813, 2845, 2877, 2909, 2941, 2973, 3005, 3037, 3039, 3071, 3103, 3135, 3167, 3199, 3231, 3263, 3265, 3297, 3329, 3361, 3393, 3425, 3457, 3489, 3521, 3553, 3585, 3617, 3649, 3651, 3683, 3715, 3717, 3749, 3781, 3813, 3845, 3877, 3909, 3911, 2]
// Exports: preloadAllIntlMessageFiles

// Module 2124 (preloader)
import asyncRequire from "asyncRequire" /* 1981 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c0;

let obj = function _preloadAllIntlMessageFiles() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
          const items = [asyncRequire(dependencyMap[1], dependencyMap.paths), asyncRequire(dependencyMap[3], dependencyMap.paths), asyncRequire(dependencyMap[4], dependencyMap.paths), asyncRequire(dependencyMap[5], dependencyMap.paths), asyncRequire(dependencyMap[6], dependencyMap.paths), asyncRequire(dependencyMap[7], dependencyMap.paths), asyncRequire(dependencyMap[8], dependencyMap.paths), asyncRequire(dependencyMap[9], dependencyMap.paths), asyncRequire(dependencyMap[10], dependencyMap.paths), asyncRequire(dependencyMap[11], dependencyMap.paths), asyncRequire(dependencyMap[12], dependencyMap.paths), asyncRequire(dependencyMap[13], dependencyMap.paths), asyncRequire(dependencyMap[14], dependencyMap.paths), asyncRequire(dependencyMap[15], dependencyMap.paths), asyncRequire(dependencyMap[16], dependencyMap.paths), asyncRequire(dependencyMap[17], dependencyMap.paths), asyncRequire(dependencyMap[18], dependencyMap.paths), asyncRequire(dependencyMap[19], dependencyMap.paths), asyncRequire(dependencyMap[20], dependencyMap.paths), asyncRequire(dependencyMap[21], dependencyMap.paths), asyncRequire(dependencyMap[22], dependencyMap.paths), asyncRequire(dependencyMap[23], dependencyMap.paths), asyncRequire(dependencyMap[24], dependencyMap.paths), asyncRequire(dependencyMap[25], dependencyMap.paths), asyncRequire(dependencyMap[26], dependencyMap.paths), asyncRequire(dependencyMap[27], dependencyMap.paths), asyncRequire(dependencyMap[28], dependencyMap.paths), asyncRequire(dependencyMap[29], dependencyMap.paths), asyncRequire(dependencyMap[30], dependencyMap.paths), asyncRequire(dependencyMap[31], dependencyMap.paths), asyncRequire(dependencyMap[32], dependencyMap.paths), asyncRequire(dependencyMap[33], dependencyMap.paths), asyncRequire(dependencyMap[34], dependencyMap.paths), asyncRequire(dependencyMap[35], dependencyMap.paths), asyncRequire(dependencyMap[36], dependencyMap.paths), asyncRequire(dependencyMap[37], dependencyMap.paths), asyncRequire(dependencyMap[38], dependencyMap.paths), asyncRequire(dependencyMap[39], dependencyMap.paths), asyncRequire(dependencyMap[40], dependencyMap.paths), asyncRequire(dependencyMap[41], dependencyMap.paths), asyncRequire(dependencyMap[42], dependencyMap.paths), asyncRequire(dependencyMap[43], dependencyMap.paths), asyncRequire(dependencyMap[44], dependencyMap.paths), asyncRequire(dependencyMap[45], dependencyMap.paths), asyncRequire(dependencyMap[46], dependencyMap.paths), asyncRequire(dependencyMap[47], dependencyMap.paths), asyncRequire(dependencyMap[48], dependencyMap.paths), asyncRequire(dependencyMap[49], dependencyMap.paths), asyncRequire(dependencyMap[50], dependencyMap.paths), asyncRequire(dependencyMap[51], dependencyMap.paths), asyncRequire(dependencyMap[52], dependencyMap.paths), asyncRequire(dependencyMap[53], dependencyMap.paths), asyncRequire(dependencyMap[54], dependencyMap.paths), asyncRequire(dependencyMap[55], dependencyMap.paths), asyncRequire(dependencyMap[56], dependencyMap.paths), asyncRequire(dependencyMap[57], dependencyMap.paths), asyncRequire(dependencyMap[58], dependencyMap.paths), asyncRequire(dependencyMap[59], dependencyMap.paths), asyncRequire(dependencyMap[60], dependencyMap.paths), asyncRequire(dependencyMap[61], dependencyMap.paths), asyncRequire(dependencyMap[62], dependencyMap.paths), asyncRequire(dependencyMap[63], dependencyMap.paths), asyncRequire(dependencyMap[64], dependencyMap.paths), asyncRequire(dependencyMap[65], dependencyMap.paths), asyncRequire(dependencyMap[66], dependencyMap.paths), asyncRequire(dependencyMap[67], dependencyMap.paths), asyncRequire(dependencyMap[68], dependencyMap.paths), asyncRequire(dependencyMap[69], dependencyMap.paths), asyncRequire(dependencyMap[70], dependencyMap.paths), asyncRequire(dependencyMap[71], dependencyMap.paths)];
          c0 = 3;
          obj = { value: all(items), done: true };
          return obj;
        }
      } catch (tmp3) {
        c0 = 3;
        throw tmp3;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("intl/preloader.tsx");

export const preloadAllIntlMessageFiles = function preloadAllIntlMessageFiles() {
  return obj(...arguments);
};
