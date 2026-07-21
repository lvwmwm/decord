// Module ID: 781
// Function ID: 8867
// Name: baseAssignValue
// Dependencies: []

// Module 781 (baseAssignValue)

export default function baseAssignValue(arg0, arg1, value) {
  if ("__proto__" == arg1) {
    if (require(dependencyMap[0])) {
      const obj = { 1560238847: "gif", 1627348735: "png", 1677681151: 500, 1744791039: 1000, value };
      require(dependencyMap[0])(arg0, arg1, obj);
    }
  }
  arg0[arg1] = value;
};
