// Module ID: 696
// Function ID: 8688
// Name: mapValues
// Dependencies: [726, 727, 730]

// Module 696 (mapValues)

export default function mapValues(arg0, arg1) {
  const obj = {};
  const dependencyMap = obj;
  const callback = callback(dependencyMap[0])(arg1, 3);
  callback(dependencyMap[1])(arg0, (arg0, arg1, arg2) => {
    callback(obj[2])(obj, arg1, callback(arg0, arg1, arg2));
  });
  return obj;
};
