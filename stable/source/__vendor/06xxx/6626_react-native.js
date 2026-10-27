// Module ID: 6626
// Function ID: 6627
// Name: react-native
// Dependencies: [17, 6627]

// Module 6626 (react-native)
import _modDef6627 from "module_6627" /* 6627 */;
import react_native from "react-native" /* 17 */;

let Animated;
let StyleSheet;
({ Animated, StyleSheet } = react_native);
const animatedComponent = Animated.createAnimatedComponent(_modDef6627);

export const GestureDetectorType = { Native: 0, [0]: "Native", Virtual: 1, [1]: "Virtual", Intercepting: 2, [2]: "Intercepting" };
export const AnimatedNativeDetector = animatedComponent;
export const nativeDetectorStyles = StyleSheet.create({ detector: { display: "contents" } });
