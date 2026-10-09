// Module ID: 6347
// Function ID: 6348
// Name: react-native
// Dependencies: [17, 6348]

// Module 6347 (react-native)
import _modDef6348 from "module_6348" /* 6348 */;
import react_native from "react-native" /* 17 */;

let Animated;
let StyleSheet;
({ Animated, StyleSheet } = react_native);
const animatedComponent = Animated.createAnimatedComponent(_modDef6348);

export const GestureDetectorType = { Native: 0, [0]: "Native", Virtual: 1, [1]: "Virtual", Intercepting: 2, [2]: "Intercepting" };
export const AnimatedNativeDetector = animatedComponent;
export const nativeDetectorStyles = StyleSheet.create({ detector: { display: "contents" } });
