// Module ID: 781
// Function ID: 8869
// Name: baseAssignValue
// Dependencies: [782]

// Module 781 (baseAssignValue)

export default function baseAssignValue(arg0, arg1, value) {
  if ("__proto__" == arg1) {
    if (require(782) /* getNative */) {
      const obj = { configurable: true, enumerable: true, value, writable: true };
      require(782) /* getNative */(arg0, arg1, obj);
    }
  }
  arg0[arg1] = value;
};
