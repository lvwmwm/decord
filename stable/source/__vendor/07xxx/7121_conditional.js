// Module ID: 7121
// Function ID: 7122
// Name: conditional
// Dependencies: [17]
// Exports: conditional

// Module 7121 (conditional)
import _mod17 from "module_17" /* 17 */;

({ add: closure_0, multiply: closure_1 } = _mod17.Animated);

export const conditional = function conditional(closing, progress, progress2) {
  return React(framebus(closing, progress), framebus(closing.interpolate({ inputRange: [0, 1], outputRange: [1, 0] }), progress2));
};
