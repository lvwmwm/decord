// Module ID: 11019
// Function ID: 85771
// Name: baseAggregator
// Dependencies: []

// Module 11019 (baseAggregator)

export default function baseAggregator(arg0, arg1, arg2, arg3) {
  const require = arg1;
  const dependencyMap = arg2;
  require(dependencyMap[0])(arg0, (arg0, arg1, arg2) => {
    arg1(arg3, arg0, arg2(arg0), arg2);
  });
  return arg3;
};
