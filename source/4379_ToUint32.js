// Module ID: 4379
// Function ID: 38729
// Name: ToUint32
// Dependencies: [0, 0, 0, 0]

// Module 4379 (ToUint32)

export default function ToUint32(arg0) {
  const tmp = require(dependencyMap[0])(arg0);
  if (require(dependencyMap[1])(tmp)) {
    if (0 !== tmp) {
      const tmp5 = require(dependencyMap[3])(require(dependencyMap[2])(tmp), 4294967296);
      let num4 = 0;
      if (0 !== tmp5) {
        num4 = tmp5;
      }
      return num4;
    }
  }
  return 0;
};
