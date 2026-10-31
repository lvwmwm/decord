// Module ID: 2074
// Function ID: 2075
// Name: preloader
// Dependencies: [5, 1113, 1994, 2075, 2107, 2139, 2141, 2172, 2204, 2236, 2238, 2240, 2272, 2304, 2306, 2308, 2340, 2372, 2404, 2406, 2408, 2410, 2442, 2474, 2506, 2538, 2570, 2602, 2634, 2636, 2638, 2640, 2642, 2674, 2676, 2708, 2740, 2772, 2804, 2836, 2868, 2900, 2932, 2964, 2996, 3028, 3060, 3092, 3094, 3096, 3128, 3160, 3192, 3224, 3256, 3288, 3320, 3352, 3354, 3386, 3418, 3450, 3482, 3514, 3546, 3578, 3610, 3642, 3674, 3706, 3738, 3770, 3802, 3804, 3836, 3868, 3870, 3902, 3934, 3966, 3998, 4029, 4061, 4092, 4123, 4155, 4187, 4219, 4251, 4253, 4285, 4287, 2]
// Exports: preloadAllIntlMessageFiles

// Module 2074 (preloader)
import asyncRequire from "asyncRequire" /* 1994 */;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
          const items = [asyncRequire(dependencyMap[1], dependencyMap.paths), asyncRequire(dependencyMap[3], dependencyMap.paths), asyncRequire(dependencyMap[4], dependencyMap.paths), asyncRequire(dependencyMap[5], dependencyMap.paths), asyncRequire(dependencyMap[6], dependencyMap.paths), asyncRequire(dependencyMap[7], dependencyMap.paths), asyncRequire(dependencyMap[8], dependencyMap.paths), asyncRequire(dependencyMap[9], dependencyMap.paths), asyncRequire(dependencyMap[10], dependencyMap.paths), asyncRequire(dependencyMap[11], dependencyMap.paths), asyncRequire(dependencyMap[12], dependencyMap.paths), asyncRequire(dependencyMap[13], dependencyMap.paths), asyncRequire(dependencyMap[14], dependencyMap.paths), asyncRequire(dependencyMap[15], dependencyMap.paths), asyncRequire(dependencyMap[16], dependencyMap.paths), asyncRequire(dependencyMap[17], dependencyMap.paths), asyncRequire(dependencyMap[18], dependencyMap.paths), asyncRequire(dependencyMap[19], dependencyMap.paths), asyncRequire(dependencyMap[20], dependencyMap.paths), asyncRequire(dependencyMap[21], dependencyMap.paths), asyncRequire(dependencyMap[22], dependencyMap.paths), asyncRequire(dependencyMap[23], dependencyMap.paths), asyncRequire(dependencyMap[24], dependencyMap.paths), asyncRequire(dependencyMap[25], dependencyMap.paths), asyncRequire(dependencyMap[26], dependencyMap.paths), asyncRequire(dependencyMap[27], dependencyMap.paths), asyncRequire(dependencyMap[28], dependencyMap.paths), asyncRequire(dependencyMap[29], dependencyMap.paths), asyncRequire(dependencyMap[30], dependencyMap.paths), asyncRequire(dependencyMap[31], dependencyMap.paths), asyncRequire(dependencyMap[32], dependencyMap.paths), asyncRequire(dependencyMap[33], dependencyMap.paths), asyncRequire(dependencyMap[34], dependencyMap.paths), asyncRequire(dependencyMap[35], dependencyMap.paths), asyncRequire(dependencyMap[36], dependencyMap.paths), asyncRequire(dependencyMap[37], dependencyMap.paths), asyncRequire(dependencyMap[38], dependencyMap.paths), asyncRequire(dependencyMap[39], dependencyMap.paths), asyncRequire(dependencyMap[40], dependencyMap.paths), asyncRequire(dependencyMap[41], dependencyMap.paths), asyncRequire(dependencyMap[42], dependencyMap.paths), asyncRequire(dependencyMap[43], dependencyMap.paths), asyncRequire(dependencyMap[44], dependencyMap.paths), asyncRequire(dependencyMap[45], dependencyMap.paths), asyncRequire(dependencyMap[46], dependencyMap.paths), asyncRequire(dependencyMap[47], dependencyMap.paths), asyncRequire(dependencyMap[48], dependencyMap.paths), asyncRequire(dependencyMap[49], dependencyMap.paths), asyncRequire(dependencyMap[50], dependencyMap.paths), asyncRequire(dependencyMap[51], dependencyMap.paths), asyncRequire(dependencyMap[52], dependencyMap.paths), asyncRequire(dependencyMap[53], dependencyMap.paths), asyncRequire(dependencyMap[54], dependencyMap.paths), asyncRequire(dependencyMap[55], dependencyMap.paths), asyncRequire(dependencyMap[56], dependencyMap.paths), asyncRequire(dependencyMap[57], dependencyMap.paths), asyncRequire(dependencyMap[58], dependencyMap.paths), asyncRequire(dependencyMap[59], dependencyMap.paths), asyncRequire(dependencyMap[60], dependencyMap.paths), asyncRequire(dependencyMap[61], dependencyMap.paths), asyncRequire(dependencyMap[62], dependencyMap.paths), asyncRequire(dependencyMap[63], dependencyMap.paths), asyncRequire(dependencyMap[64], dependencyMap.paths), asyncRequire(dependencyMap[65], dependencyMap.paths), asyncRequire(dependencyMap[66], dependencyMap.paths), asyncRequire(dependencyMap[67], dependencyMap.paths), asyncRequire(dependencyMap[68], dependencyMap.paths), asyncRequire(dependencyMap[69], dependencyMap.paths), asyncRequire(dependencyMap[70], dependencyMap.paths), asyncRequire(dependencyMap[71], dependencyMap.paths), asyncRequire(dependencyMap[72], dependencyMap.paths), asyncRequire(dependencyMap[73], dependencyMap.paths), asyncRequire(dependencyMap[74], dependencyMap.paths), asyncRequire(dependencyMap[75], dependencyMap.paths), asyncRequire(dependencyMap[76], dependencyMap.paths), asyncRequire(dependencyMap[77], dependencyMap.paths), asyncRequire(dependencyMap[78], dependencyMap.paths), asyncRequire(dependencyMap[79], dependencyMap.paths), asyncRequire(dependencyMap[80], dependencyMap.paths), asyncRequire(dependencyMap[81], dependencyMap.paths), asyncRequire(dependencyMap[82], dependencyMap.paths), asyncRequire(dependencyMap[83], dependencyMap.paths), asyncRequire(dependencyMap[84], dependencyMap.paths), asyncRequire(dependencyMap[85], dependencyMap.paths), asyncRequire(dependencyMap[86], dependencyMap.paths), asyncRequire(dependencyMap[87], dependencyMap.paths), asyncRequire(dependencyMap[88], dependencyMap.paths), asyncRequire(dependencyMap[89], dependencyMap.paths), asyncRequire(dependencyMap[90], dependencyMap.paths), asyncRequire(dependencyMap[91], dependencyMap.paths)];
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

export function preloadAllIntlMessageFiles() {
  return obj(...arguments);
}
