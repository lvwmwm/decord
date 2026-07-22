// Module ID: 781
// Function ID: 8867
// Name: baseAssignValue
// Dependencies: [794]

// Module 781 (baseAssignValue)

export default function baseAssignValue(arg0, arg1, value) {
  if ("__proto__" == arg1) {
    if (require(dependencyMap[0])) {
      const obj = { value };
      require(dependencyMap[0])(arg0, arg1, obj);
    }
  }
  arg0[arg1] = value;
};
