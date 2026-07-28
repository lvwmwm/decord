// Module ID: 8523
// Function ID: 67701
// Name: pickNotNil
// Dependencies: [4522]

// Module 8523 (pickNotNil)
const module = arg2;
const dependencyMap = arg6;
arg5.pickNotNil = function pickNotNil(obj) {
  obj = {};
  for (const key10007 in arg0) {
    let tmp4 = key10007;
    let _Object = Object;
    if (!hasOwnProperty.call(arg0, key10007)) {
      continue;
    } else {
      let tmp = arg0[key10007];
      let tmp2 = tmp;
      if (null == tmp) {
        continue;
      } else {
        obj[key10007] = tmp;
        let tmp3 = tmp;
        continue;
      }
      continue;
    }
    continue;
  }
  return obj;
};
arg5.idPattern = /#([^)]+)'?\)?$/;
arg5.getRandomNumber = function getRandomNumber() {
  const random = Math.random();
  const random1 = Math.random();
  return Math.floor(random * Math.floor(random1 * Date.now()));
};
arg5.warnUnimplementedFilter = function warnUnimplementedFilter() {
  module(4522)(true, "Some of the used filters are not yet supported on native platforms. Please check the USAGE.md for more info. Not implemented filters:\n", JSON.stringify(["FeComponentTransfer", "FeConvolveMatrix", "FeDiffuseLighting", "FeDisplacementMap", "FeFuncA", "FeFuncB", "FeFuncG", "FeFuncR", "FeImage", "FeMorphology", "FePointLight", "FeSpecularLighting", "FeSpotLight", "FeTile", "FeTurbulence"], null, 2));
};
