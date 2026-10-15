// Module ID: 6569
// Function ID: 6570
// Name: react-native
// Dependencies: [17, 6570]

// Module 6569 (react-native)
import _modDef6570 from "module_6570" /* 6570 */;
import react_native from "react-native" /* 17 */;

let Animated;
let StyleSheet;
({ Animated, StyleSheet } = react_native);
const animatedComponent = Animated.createAnimatedComponent(_modDef6570);

export const GestureDetectorType = { Native: 0, [0]: "Native", Virtual: 1, [1]: "Virtual", Intercepting: 2, [2]: "Intercepting" };
export const AnimatedNativeDetector = animatedComponent;
export const nativeDetectorStyles = StyleSheet.create({ detector: { display: "contents" } });
