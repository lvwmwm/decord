// Module ID: 6080
// Function ID: 6081
// Name: react-native
// Dependencies: [17, 6081]

// Module 6080 (react-native)
import _modDef6081 from "module_6081" /* 6081 */;
import react_native from "react-native" /* 17 */;

let Animated;
let StyleSheet;
({ Animated, StyleSheet } = react_native);
const animatedComponent = Animated.createAnimatedComponent(_modDef6081);

export const GestureDetectorType = { Native: 0, [0]: "Native", Virtual: 1, [1]: "Virtual", Intercepting: 2, [2]: "Intercepting" };
export const AnimatedNativeDetector = animatedComponent;
export const nativeDetectorStyles = StyleSheet.create({ detector: { display: "contents" } });
