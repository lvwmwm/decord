// Module ID: 7111
// Function ID: 7112
// Name: react-native
// Dependencies: [17]
// Exports: conditional

// Module 7111 (react-native)
import react_native from "react-native" /* 17 */;

let _window;
let map;
({ add: _window, multiply: map } = react_native.Animated);

export const conditional = function conditional(closing, progress, progress2) {
  const tmp = map(closing, progress);
  return React(tmp, map(closing.interpolate({ inputRange: [0, 1], outputRange: [1, 0] }), progress2));
};
