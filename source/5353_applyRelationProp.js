// Module ID: 5353
// Function ID: 5354
// Name: applyRelationProp
// Dependencies: []

// Module 5353 (applyRelationProp)
arg5.applyRelationProp = function applyRelationProp(closure_0, arg1, arg2) {
  if (arg2) {
    const _Array = Array;
    if (Array.isArray(arg2)) {
      const items = [];
      HermesBuiltin.arraySpread(arg2, 0);
      HermesBuiltin.apply(items, closure_0);
    } else {
      tmp4(arg2);
    }
  }
};
