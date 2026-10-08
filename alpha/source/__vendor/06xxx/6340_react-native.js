// Module ID: 6340
// Function ID: 6341
// Name: react-native
// Dependencies: [17, 6341]

// Module 6340 (react-native)
import _modDef6341 from "module_6341" /* 6341 */;
import react_native from "react-native" /* 17 */;

let Animated;
let StyleSheet;
({ Animated, StyleSheet } = react_native);
const animatedComponent = Animated.createAnimatedComponent(_modDef6341);

export const GestureDetectorType = { Native: 0, [0]: "Native", Virtual: 1, [1]: "Virtual", Intercepting: 2, [2]: "Intercepting" };
export const AnimatedNativeDetector = animatedComponent;
export const nativeDetectorStyles = StyleSheet.create({ detector: { display: "contents" } });
