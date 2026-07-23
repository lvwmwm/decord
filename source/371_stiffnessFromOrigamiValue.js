// Module ID: 371
// Function ID: 5512
// Name: stiffnessFromOrigamiValue
// Dependencies: []

// Module 371 (stiffnessFromOrigamiValue)
function stiffnessFromOrigamiValue(projectNormalResult1) {
  return 3.62 * (projectNormalResult1 - 30) + 194;
}
function dampingFromOrigamiValue(arg0) {
  return 3 * (arg0 - 8) + 25;
}
arg5.fromOrigamiTensionAndFriction = function fromOrigamiTensionAndFriction(projectNormalResult1, arg1) {
  return { stiffness: stiffnessFromOrigamiValue(projectNormalResult1), damping: dampingFromOrigamiValue(arg1) };
};
arg5.fromBouncinessAndSpeed = function fromBouncinessAndSpeed(arg0, arg1) {
  function normalize(arg0, arg1, arg2) {
    return arg0 / 20;
  }
  function projectNormal(arg0, arg1, arg2) {
    return arg1 + arg0 * (arg2 - arg1);
  }
  const projectNormalResult1 = projectNormal(normalize(arg1 / 1.7, 0, 20), 0.5, 200);
  const obj = {};
  const projectNormalResult = projectNormal(normalize(arg0 / 1.7, 0, 20), 0, 0.8);
  obj.stiffness = stiffnessFromOrigamiValue(projectNormalResult1);
  obj.damping = dampingFromOrigamiValue((function quadraticOutInterpolation(projectNormalResult, arg1, arg2) {
    const diff = 2 * projectNormalResult - projectNormalResult * projectNormalResult;
    return diff * 0.01 + (1 - diff) * arg1;
  })(projectNormal(normalize(arg0 / 1.7, 0, 20), 0, 0.8), (function b3Nobounce(projectNormalResult1) {
    if (projectNormalResult1 <= 18) {
      const _Math5 = Math;
      const _Math6 = Math;
      const result = 0.0007 * Math.pow(projectNormalResult1, 3);
      let sum = result - 0.031 * Math.pow(projectNormalResult1, 2) + 0.64 * projectNormalResult1 + 1.28;
    } else {
      if (projectNormalResult1 > 18) {
        if (projectNormalResult1 <= 44) {
          const _Math3 = Math;
          const _Math4 = Math;
          const result1 = 0.000044 * Math.pow(projectNormalResult1, 3);
          sum = result1 - 0.006 * Math.pow(projectNormalResult1, 2) + 0.36 * projectNormalResult1 + 2;
        }
      }
      const _Math = Math;
      const _Math2 = Math;
      const result2 = 0.00000045 * Math.pow(projectNormalResult1, 3);
      sum = result2 - 0.000332 * Math.pow(projectNormalResult1, 2) + 0.1078 * projectNormalResult1 + 5.84;
    }
    return sum;
  })(projectNormalResult1), 0.01));
  return obj;
};
